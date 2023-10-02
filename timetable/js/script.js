function darkMode() {
    const modeSwitch = document.getElementById("mode-switch");
    const modeToggleImg = document.getElementById("dark-mode-img");
    const body = document.body;

    const storedTheme = localStorage.getItem("theme");

    function setTheme(theme) {
        if (theme === "dark") {
            body.classList.add("dark-mode");
            modeToggleImg.src = "img/dark.png";
            modeSwitch.checked = true;
        } else {
            body.classList.remove("dark-mode");
            modeToggleImg.src = "img/light.png";
            modeSwitch.checked = false;
        }
    }

    if (storedTheme === "dark" || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        setTheme("dark");
    } else {
        setTheme("light");
    }

    modeSwitch.addEventListener("change", () => {
        const theme = modeSwitch.checked ? "dark" : "light";
        setTheme(theme);
        localStorage.setItem("theme", theme);
    });
}

darkMode();
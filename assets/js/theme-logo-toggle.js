function getTheme() {
    let theme = document.documentElement.getAttribute("data-mode"); // Lees Chirpy's thema

    if (!theme) {
        // Als geen data-mode, check systeeminstellingen
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    return theme;
}
function updateLogo() {
    const checkLogo = setInterval(() => {
        const logo = document.getElementById("site-logo");
        if (logo) {
            clearInterval(checkLogo); // Stop als logo gevonden is
            const theme = getTheme();
            console.log("🎨 Actueel thema:", theme);
            logo.src = theme === "dark" ? "/assets/img/logo/logo.dark.svg" : "/assets/img/logo/logo.light.svg";
            console.log("Logo src:", logo.src);
        }
    }, 100); // Check elke 100ms
}

// Wacht tot de pagina geladen is
document.addEventListener("DOMContentLoaded", updateLogo);

// Luister naar thema-wijzigingen
window.addEventListener("message", (event) => {
    if (event.data?.direction === "mode-toggle") {
        updateLogo();
    }
});

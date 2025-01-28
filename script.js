function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light") // Corrigido: toggle em vez de toogle

    const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
        img.setAttribute("src",
            "./assets/erlizasmile.jpeg")
    } else {
        img.setAttribute("src", "./assets/erlizaclose.jpeg")
    }
}
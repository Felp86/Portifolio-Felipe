
const menuToggle = document.getElementById("menuToggle")
const menuLista = document.getElementById("menuLista")
const anoAtual = document.getElementById("anoAtual")
if (anoAtual) {
    anoAtual.textContent = String(new Date().getFullYear())
}
if (menuToggle && menuLista) {
    menuToggle.addEventListener("click", function () {
        const aberto = menuLista.classList.toggle("open")
        menuToggle.setAttribute("aria-expanded", String(aberto))
    })

    menuLista.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            menuLista.classList.remove("open")
            menuToggle.setAttribute("aria-expanded", "false")
        })
    })
}
// rolar a página.
const reveals = document.querySelectorAll(".reveal")
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible")
                    obs.unobserve(entry.target)
                }
            })
        },
        { threshold: 0.12 }
    )
    reveals.forEach(function (item) {
        observer.observe(item)
    })
} else {
    // Fallback para navegadores antigos.
    reveals.forEach(function (item) {
        item.classList.add("visible")
    })
}
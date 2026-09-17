/* ============================================================
   JS do projeto
   O W3.CSS não traz JavaScript, então o tema é controlado
   manualmente com a classe .dark no <body>.
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- Ano no rodapé ---------- */
    var year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    /* ---------- Alternar tema claro/escuro ---------- */
    var themeToggle = document.getElementById("themeToggle");

    function aplicarTema(tema) {
        var escuro = tema === "dark";
        document.body.classList.toggle("dark", escuro);

        if (themeToggle) {
            themeToggle.innerHTML = escuro
                ? '<i class="fa-solid fa-sun"></i>'
                : '<i class="fa-solid fa-moon"></i>';
        }
    }

    // tema salvo ou preferência do sistema
    var temaSalvo = localStorage.getItem("tema");
    if (!temaSalvo) {
        var prefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
        temaSalvo = prefereEscuro ? "dark" : "light";
    }
    aplicarTema(temaSalvo);

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            var novoTema = document.body.classList.contains("dark") ? "light" : "dark";
            aplicarTema(novoTema);
            localStorage.setItem("tema", novoTema);
        });
    }
});
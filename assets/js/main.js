/* ============================================================
   ricdon.net.br — script compartilhado
   Menu mobile · tema claro/escuro · ano do rodapé · frase do dia
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Tema claro/escuro ---------- */
  const raiz = document.documentElement;

  function aplicarTema(tema) {
    raiz.setAttribute("data-tema", tema);
    const btn = document.getElementById("btn-tema");
    if (btn) {
      btn.textContent = tema === "escuro" ? "☀" : "☾";
      btn.setAttribute(
        "aria-label",
        tema === "escuro" ? "Mudar para tema claro" : "Mudar para tema escuro"
      );
    }
  }

  function temaInicial() {
    try {
      const salvo = localStorage.getItem("tema");
      if (salvo === "claro" || salvo === "escuro") return salvo;
    } catch (e) { /* armazenamento indisponível: segue preferência do sistema */ }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "escuro"
      : "claro";
  }

  aplicarTema(temaInicial());

  document.addEventListener("DOMContentLoaded", function () {
    aplicarTema(raiz.getAttribute("data-tema") || "claro"); // atualiza o ícone do botão

    const btnTema = document.getElementById("btn-tema");
    if (btnTema) {
      btnTema.addEventListener("click", function () {
        const novo = raiz.getAttribute("data-tema") === "escuro" ? "claro" : "escuro";
        aplicarTema(novo);
        try { localStorage.setItem("tema", novo); } catch (e) { /* ok */ }
      });
    }

    /* ---------- Menu mobile ---------- */
    const btnMenu = document.getElementById("btn-menu");
    const nav = document.getElementById("nav-links");
    if (btnMenu && nav) {
      btnMenu.addEventListener("click", function () {
        const aberto = nav.classList.toggle("aberto");
        btnMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
      });
    }

    /* ---------- Ano dinâmico no rodapé ---------- */
    const anoEl = document.getElementById("ano-atual");
    if (anoEl) anoEl.textContent = new Date().getFullYear();

    /* ---------- Frase do dia (apenas na página inicial) ---------- */
    const fraseEl = document.getElementById("frase-dia");
    if (fraseEl) {
      const frases = [
        "A maioria das pessoas não planeja fracassar, fracassa por não planejar. (John L. Beckley)",
        "Todos os caminhos estão errados quando você não sabe onde quer chegar. (Desconhecido)",
        "As pessoas passam mais tempo justificando porque fracassaram do que lutando para vencer. (Adir Ceruti)",
        "Nas grandes batalhas da vida, o primeiro passo para a vitória é o desejo de vencer. (Gandhi)",
        "Muitos homens iniciaram uma nova era na sua vida a partir da leitura de um livro. (Henry Thoreau)",
        "Ame o que você tem, antes que a vida lhe ensine a amar o que você tinha.",
        "Ser você mesmo em um mundo que está constantemente tentando fazer de você outra coisa é a maior realização. (Ralph Waldo Emerson)",
        "Para ter sucesso nesse mundo, é preciso ou ser louco ou ser sábio. (Barão de Montesquieu)",
        "Sorte é o que acontece quando capacidade encontra-se com oportunidade. (Sêneca)",
        "O pessimista vê dificuldade em cada oportunidade; o otimista vê oportunidade em cada dificuldade. (Winston Churchill)"
      ];

      const frase = frases[Math.floor(Math.random() * frases.length)];
      const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduzMovimento) {
        fraseEl.textContent = frase; // sem animação
      } else {
        // Efeito "máquina de escrever" no terminal
        let i = 0;
        (function digitar() {
          if (i <= frase.length) {
            fraseEl.textContent = frase.slice(0, i);
            i++;
            setTimeout(digitar, 22);
          }
        })();
      }
    }
  });
})();

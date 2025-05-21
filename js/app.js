// Configuração do i18next
const brBtn = document.getElementById("br-i18");
const usaBtn = document.getElementById("usa-i18");
i18next
  .use(i18nextBrowserLanguageDetector)
  .use(i18nextHttpBackend)
  .init(
    {
      fallbackLng: "pt",
      debug: false,
      ns: ["translation"],
      defaultNS: "translation",
      backend: {
        loadPath: "locales/{{ lng }}/{{ ns }}.json",
      },
      interpolation: {
        escapeValue: false,
      },
    },
    function (err, t) {
      // Inicializa a tradução quando estiver pronta
      updateContent();

      // Só carrega o project.js aqui, depois que o i18next estiver pronto
      if (window.location.pathname.includes("project.html")) {
        const script = document.createElement("script");
        script.src = "js/project.js";
        document.body.appendChild(script);
      }
    }
  );

// Inicializa em português por padrão
brBtn.classList.add("hide-lang");
usaBtn.classList.remove("hide-lang");

// Clique para mudar para inglês
document.getElementById("usa-i18").addEventListener("click", function (e) {
  e.preventDefault();
  changeLanguage("en");
  toggleLanguageButtons("en");
});

// Clique para mudar para português
document.getElementById("br-i18").addEventListener("click", function (e) {
  e.preventDefault();
  changeLanguage("pt");
  toggleLanguageButtons("pt");
});

// Alterna os botões de idioma
function toggleLanguageButtons(currentLang) {
  if (currentLang === "en") {
    usaBtn.classList.add("hide-lang");
    brBtn.classList.remove("hide-lang");
  } else {
    brBtn.classList.add("hide-lang");
    usaBtn.classList.remove("hide-lang");
  }
}

function updateContent() {
  // Atualiza todos os elementos com atributo data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = i18next.t(key);
  });
}

function changeLanguage(lng) {
  i18next.changeLanguage(lng, () => {
    updateContent();
  });
}

// Observa mudanças de idioma
i18next.on("languageChanged", () => {
  updateContent();
});

// Botão flutuante para voltar ao topo
window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById("back-to-top");
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

document.getElementById("back-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

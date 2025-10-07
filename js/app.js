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
      updateContent();

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

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const telefone = document.querySelector("#phone").value;
  const empresa = document.querySelector("#company").value;
  const instagram = document.querySelector("#instagram").value;
  const comoConheceu = document.querySelector('input[name="conheceu"]:checked')
    ? document.querySelector('input[name="conheceu"]:checked').value
    : "";
  const servicos = Array.from(
    document.querySelectorAll('input[name="servicos"]:checked')
  )
    .map((input) => input.value)
    .join(", ");
  const descricao = document.querySelector("#business").value;

  let mensagem = `Vim pelo formulário de contato do site estudioagartha.com\n`;
  mensagem += `*Nome:* ${nome}\n`;
  mensagem += `*Email:* ${email}\n`;
  mensagem += `*Telefone:* ${telefone}\n`;
  mensagem += `*Nome da empresa:* ${empresa}\n`;
  mensagem += `*Instagram da empresa:* ${instagram}\n`;
  mensagem += `*Como nos conheceu:* ${comoConheceu}\n`;
  mensagem += `*Serviços desejados:* ${servicos}\n`;
  mensagem += `*Descrição do negócio:* ${descricao}`;

  mensagem = encodeURIComponent(mensagem);

  const numeroWhatsApp = "5574999396200";
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

  window.open(urlWhatsApp, "_blank");
});

document.getElementById("back-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

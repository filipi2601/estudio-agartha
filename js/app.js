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

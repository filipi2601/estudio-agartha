const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get("id"));

fetch("projects.json")
  .then((response) => response.json())
  .then((projects) => {
    const project = projects.find((p) => p.id === projectId);

    if (project) {
      // Título
      document.getElementById("project-title").textContent = i18next.t(project.title);
      console.log(i18next.t(project.categories));

      // Categorias
      const categoriesContainer = document.getElementById("categories");
      project.categories.forEach((category) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-custom me-2";
        button.textContent = i18next.t(category);
        categoriesContainer.appendChild(button);
      });

      // Descrição
      document.getElementById("project-description").textContent = i18next.t(project.descriptionProject);

      // Imagens
      const imagesContainer = document.getElementById("project-images");
      project.images.forEach((imgSrc) => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = i18next.t(project.titleKey);
        img.className = "img-fluid mb-4";
        imagesContainer.appendChild(img);
      });
    } else {
      document.body.innerHTML = "<h2>Projeto não encontrado!</h2>";
    }
  });

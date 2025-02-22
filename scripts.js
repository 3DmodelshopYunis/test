document.addEventListener("DOMContentLoaded", () => {
    const modelList = document.getElementById("modelList");
    const searchBar = document.getElementById("searchBar");

    // 3D modellərin siyahısı
    const models = [
        { name: "Car Model", file: "car_model.glb" },
        { name: "House Model", file: "house_model.glb" },
        { name: "Robot Model", file: "robot_model.glb" },
        { name: "Tree Model", file: "tree_model.glb" }
    ];

    // Modelləri ekrana əlavə edən funksiya
    function displayModels(filter = "") {
        modelList.innerHTML = "";
        models
            .filter(model => model.name.toLowerCase().includes(filter.toLowerCase()))
            .forEach(model => {
                const modelDiv = document.createElement("div");
                modelDiv.classList.add("model");
                modelDiv.innerHTML = `
                    <h3>${model.name}</h3>
                    <a href="${model.file}" download>Download</a>
                `;
                modelList.appendChild(modelDiv);
            });
    }

    // Axtarış funksiyası
    searchBar.addEventListener("input", (e) => {
        displayModels(e.target.value);
    });

    // Sayt açıldıqda modelləri göstər
    displayModels();
});

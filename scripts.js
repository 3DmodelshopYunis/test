function searchModels() {
    const query = document.getElementById('search').value;
    // Axtarış nəticələrini burada göstərə bilərsən
    alert(`Axtardığınız model: ${query}`);
}

// Modellərin nümunə məlumatları
const models = [
    { name: 'Model 1', img: 'model1.jpg', format: 'OBJ' },
    { name: 'Model 2', img: 'model2.jpg', format: 'STL' },
    { name: 'Model 3', img: 'model3.jpg', format: 'FBX' },
];

// Modelləri yükləmək və göstərmək
window.onload = function() {
    const modelList = document.getElementById('model-list');
    models.forEach(model => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${model.img}" alt="${model.name}" width="100%">
            <h3>${model.name}</h3>
            <p>Format: ${model.format}</p>
            <button>Yüklə</button>
        `;
        modelList.appendChild(div);
    });
};

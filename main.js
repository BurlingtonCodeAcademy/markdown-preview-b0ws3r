let renderableContent = document.getElementById('source');
let renderBtn = document.getElementById('render');

renderBtn.addEventListener('click',renderContent);

function renderContent(){
    console.log(renderableContent);
    renderableContent.innerHTML = marked(renderableContent);
}
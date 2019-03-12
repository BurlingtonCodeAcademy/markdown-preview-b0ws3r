
let renderBtn = document.getElementById('render');

function renderContent(){
    // console.log(renderableContent);
    let renderableContent = document.getElementById('source');
    let renderedContent = document.getElementById('preview');
    
    renderedContent.innerHTML = marked(renderableContent.textContent);
    
}
renderBtn.addEventListener('click',renderContent);

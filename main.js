
let renderableContent = document.getElementById('source');
let renderedContent = document.getElementById('preview');

const renderBtn = document.getElementById('render');
const boldyBtn = document.getElementById('boldy');
const slantyBtn = document.getElementById('slanty');

renderBtn.addEventListener('click', renderContent);
boldyBtn.addEventListener('click', boldThat);
slantyBtn.addEventListener('click', slantThat);

renderableContent.addEventListener('input', renderContent);

function getSelection() {
    let startSlct = renderableContent.selectionStart;
    let stopSlct = renderableContent.selectionEnd;
    let selection = [startSlct, stopSlct];

    console.log(selection);
    return selection;
}
function renderContent(event) {
    // console.log(renderableContent);
    renderedContent.innerHTML = marked(renderableContent.value);//why is .value so much better than innerHtml or inner text??
}

function boldThat() {
    let txt = renderableContent.value;
    let start = getSelection()[0];
    let end = getSelection()[1];
    console.log(getSelection());
    console.log(end);

    // if(event.target == boldyBtn){let mrk = "__"}
    // if(event.target == slantyBtn){let mrk = "__"} 

    let str = txt.slice(0, start) + "__"
        + txt.slice(start, end) + "__"
        + txt.slice(end, txt.length);
    // console.log("start pt: " + start + "\n stop pt: " + end);
    renderableContent.value = str;
}
function slantThat() {

    let txt = renderableContent.value;
    let start = getSelection()[0];
    let end = getSelection()[1];

    let str = txt.slice(0, start) + "_"
        + txt.slice(start, end) + "_"
        + txt.slice(end, txt.length);
    renderableContent.value = str;

}
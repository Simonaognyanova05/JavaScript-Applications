export default function render(html, parent){
    // let div = document.createElement('div');
    // div.innerHTML = html;
    // parent.appendChild(div);

    let template = document.createElement('template');
    template.innerHTML = html;

    parent.replaceChildren(template.content);
}

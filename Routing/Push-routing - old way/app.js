const home = () => `
<h1>Home</h1>
`;

const about = () => `
<h1>About</h1>
`;
let root = document.getElementById('root');

let routers = {
    '/home': home(),
    '/about': about(),
}
document.body.addEventListener('click', (e) => {
    if(e.target.tagName == 'A'){
        e.preventDefault();
        let url = new URL(e.target.href);
        root.innerHTML = routers[url.pathname];
    }
})
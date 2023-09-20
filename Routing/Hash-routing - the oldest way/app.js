const home = () => `
<h1>Home</h1>
`;

const about = () => `
<h1>About</h1>
`;
let root = document.getElementById('root');

let routers = {
    '#home': home(),
    '#about': about(),
}
window.addEventListener('hashchange', (e) => {
    root.innerHTML = routers[location.hash];
})
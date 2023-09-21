const home = () => `
<h1>Home</h1>
`;

let root = document.getElementById('root');

export const homeView = (ctx) => {
    root.innerHTML = home();
};
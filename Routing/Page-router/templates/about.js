const about = () => `
<h1>About</h1>
`;

let root = document.getElementById('root');

export const aboutView = (ctx) => {
    root.innerHTML = about();
};
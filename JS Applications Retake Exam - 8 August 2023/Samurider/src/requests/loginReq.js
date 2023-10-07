import page from '../../node_modules/page/page.mjs';

let url = 'http://localhost:3030/users/login';

export const login = (e) => {
  e.preventDefault();

  let formData = new FormData(e.currentTarget);

  let email = formData.get('email');
  let password = formData.get('password');

  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => {
      res.json();
      if (!res.ok) {
        alert('no');
      } else {
        alert('success');
        page.redirect('/');
      }
    })
}
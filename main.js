const register = document.getElementById('register'),
      sign_in_container = document.querySelector('.sign-in-container');
let userInfo = [], signed = false;

let userSigned = localStorage.getItem('Signed');
if(userSigned) {
    sign_in_container.classList.toggle('sign-toggle');
    let username = localStorage.getItem('Username');
    const div = document.createElement('div');
    div.setAttribute('id', 'newDiv');
    div.innerHTML = username;
    document.body.append(div);
}

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    infos() {
        return `Username: ${this.username} Email: ${this.email} Password: ${this.password}`
    }
}

register.addEventListener('click', () => {
    const username = document.getElementById('username'),
          email = document.getElementById('email'),
          password = document.getElementById('password');

    if(username.value != '' && email.value != '' &&  password.value != '') {
        let user = new User(username.value, email.value, password.value);
        localStorage.setItem('Username', username.value);
        localStorage.setItem('Email', email.value);
        localStorage.setItem('Password', password.value);
        localStorage.setItem('Signed', true);
        showUsers(user);
    } else {
        window.alert('Please fill input')
    }
})

function showUsers(u) {
    console.log(u.infos())
    sign_in_container.classList.toggle('sign-toggle');
    location.reload();
}




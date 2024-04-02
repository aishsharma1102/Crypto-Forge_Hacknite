const btn = document.querySelector('.fa-eye');
const passwordE1 = document.querySelector('.pass');

btn.addEventListener('click', () => {
    console.log('clicked');
    if(passwordE1.type === 'password'){
        passwordE1.type = 'text';
        btn.classList.replace('fa-eye','fa-eye-slash');
        console.log('btn');
    } else {
        passwordE1.type = 'password';
        btn.classList.replace('fa-eye-slash','fa-eye');
        console.log('btn');
    }
});
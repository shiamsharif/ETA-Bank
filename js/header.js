const navbar = document.querySelector('header');

window.onscroll = () => {
    if(window.scrollY > 100){
        navbar.classList.add('bg-color-primary-dark');
        navbar.classList.add('border-b');
        navbar.classList.add('border-color-secondary');
    }else{
        navbar.classList.remove('bg-color-primary-dark');
        navbar.classList.remove('border-b');
        navbar.classList.remove('border-color-secondary');
    }
}
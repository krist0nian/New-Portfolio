function openMenu() {
    document.body.classList.add('menu--open');
}

function closeMenu () {
    document.body.classList.remove('menu--open');
}

function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
    console.log('clicked');
}

let isModalOpen = false;

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_ezjxryl',
            'template_hjdxf61',
            event.target,
            'qSiVBpC_Qre_9rF7W'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at krist0nian@yahoo.com"
            );
        })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}
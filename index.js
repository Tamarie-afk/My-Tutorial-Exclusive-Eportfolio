// template_0el68yp
//service_fqzdtwo
//-njBJj0ZYPf982s61

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_fqzdtwo',
            'template_0el68yp',
        event.target,
        '-njBJj0ZYPf982s61'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at geronimojeffries@gmail.com."
            );
        })
    }

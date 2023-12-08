//********************* SCROLL MENU Y CLICK *********************//

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {
        let currentSectionId = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionBottom = sectionTop + sectionHeight;

            // Calcula el centro de la ventana
            const windowHeight = window.innerHeight;
            const windowCenter = window.scrollY + windowHeight / 2;

            // Comprueba si el centro de la ventana está dentro de la sección
            if (windowCenter >= sectionTop && windowCenter <= sectionBottom) {
                currentSectionId = section.id;
            }
        });

        highlightSection(currentSectionId);
    });

    function highlightSection(sectionId) {
        sections.forEach((section) => {
            section.classList.remove("active");

            if (section.id === sectionId) {
                section.classList.add("active");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".nav a");

    menuLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offset = targetSection.offsetTop;
                const windowHeight = window.innerHeight;
                const targetPosition = offset - (windowHeight / 2) + (targetSection.clientHeight / 2);

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
//********************* VALIDACIÓN DE FORMULARIO *********************//

function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var commentInput = document.getElementById("comment");

    var name = nameInput.value;
    var email = emailInput.value;
    var comment = commentInput.value;

    var errorMessage = document.getElementById("errorMessage");
    var successMessage = document.getElementById("successMessage");

    errorMessage.innerHTML = "";
    successMessage.innerHTML = "";

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        errorMessage.innerHTML = "Por favor, rellena correctamente este(s) campo(s).";
        nameInput.classList.add("error-input");
    } else {
        nameInput.classList.remove("error-input");
    }

    if (!emailRegex.test(email)) {
        errorMessage.innerHTML = "Por favor, rellena correctamente este(s) campo(s).";
        emailInput.classList.add("error-input");
    } else {
        emailInput.classList.remove("error-input");
    }

    if (comment === "") {
        errorMessage.innerHTML = "Por favor, rellena correctamente este(s) campo(s).";
        commentInput.classList.add("error-input");
    } else {
        commentInput.classList.remove("error-input");
    }

    if (name !== "" && emailRegex.test(email) && comment !== "") {
        successMessage.innerHTML = "Gracias por contactarnos, en breve nos pondremos en contacto contigo.";
        // Restablecer los valores de los campos
        nameInput.value = "";
        emailInput.value = "";
        commentInput.value = "";
    }
}
//********************* SLIDER *********************//
document.addEventListener("DOMContentLoaded", function () {
    // Configuración
    var autoSlideInterval = 5000; // Cambia esto para ajustar la velocidad del slider en milisegundos
    var currentIndex = 0;
    var totalSlides = document.querySelectorAll(".slide").length;
    var slider = document.getElementById("slider");

    // Función para cambiar al siguiente slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    // Función para actualizar el slider
    function updateSlider() {
        var translateValue = -currentIndex * 100 + "%";
        slider.style.transform = "translateX(" + translateValue + ")";
    }

    // Iniciar el slider automático
    var autoSlide = setInterval(nextSlide, autoSlideInterval);

    // Detener el slider automático al pasar el ratón sobre el slider
    slider.addEventListener("mouseenter", function () {
        clearInterval(autoSlide);
    });

    // Reanudar el slider automático al salir del ratón del slider
    slider.addEventListener("mouseleave", function () {
        autoSlide = setInterval(nextSlide, autoSlideInterval);
    });
});

//********************* HEADER *********************//

//********************* FIN HEADER *********************//

//********************* NOTIFICACIÓN ENVÍO FORMULARIO *********************//

function validateForm() {
    // Obtener los valores del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;

    // Validar que los campos no estén vacíos
    if (name.trim() === '' || email.trim() === '' || comment.trim() === '') {
        document.getElementById('errorMessage').innerText = 'Por favor, complete todos los campos antes de enviar el formulario.';
        document.getElementById('successMessage').innerText = '';
    } else {
        // Enviar formulario (puedes agregar aquí tu lógica de envío al servidor)

        // Limpiar mensajes anteriores
        document.getElementById('errorMessage').innerText = '';
        // Mostrar mensaje de éxito
        document.getElementById('successMessage').innerText = 'Su mensaje se ha enviado correctamente.';
        
        // Puedes reiniciar los campos después del envío si es necesario
        document.getElementById('contactForm').reset();
    }
}
//********************* FIN NOTIFICACIÓN ENVÍO FORMULARIO *********************//

(function(){
    var form = document.getElementById('formContacto');
    form.addEventListener('submit', validarFormulario);

    function validarFormulario(event) {
        let error = false;
        error = validarNombreApellido(event);
        error = error | validarEmail(event);
        error = error | validarTelefono(event);
        if (error) {
            alert("Verifique los campos incompletos");
        }
    }

    function validarNombreApellido(event) {
        let error = false;
        form.nombre.classList.remove("error");
        if (form.nombre.value === '') {
            form.nombre.classList.add("error");
            document.getElementById("firstname").focus();
            event.preventDefault();
            error = true;
        }
        form.apellido.classList.remove("error");
        if (form.apellido.value === '') {
            form.apellido.classList.add("error");
            document.getElementById("lastname").focus();
            event.preventDefault();
            error = true;
        }
        return error;
    }

    function validarEmail(event) {
        form.email.classList.remove("error");
        if (form.email.value === '') {
            form.email.classList.add("error");
            document.getElementById("email").focus();
            event.preventDefault();
            return true;
        }
        return false;
    }

    function validarTelefono(event) {
        form.phone.classList.remove("error");
        if (form.phone.value === '') {
            form.phone.classList.add("error");
            document.getElementById("lastname").focus();
            event.preventDefault();
            return true;
        }
        return false;
    }
}())
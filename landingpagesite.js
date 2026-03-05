(function() {
      const specialtyLinks = document.querySelectorAll('[data-especialidad]');
      const descriptionDiv = document.getElementById('specialty-description');
      const spanCurrentYear = document.getElementById('spanCurrentYear');
      spanCurrentYear.innerText = new Date().getFullYear().toString();

      const descripciones = {
        neural: 'La <strong>Terapia neural</strong> consiste en la aplicación de microinyecciones de procaína en puntos específicos del cuerpo para tratar dolores crónicos y trastornos funcionales, regulando el sistema nervioso autónomo.',
        quiropraxia: 'La <strong>Quiropraxia</strong> se enfoca en el diagnóstico y tratamiento de los trastornos del sistema musculoesquelético, especialmente la columna vertebral, mediante ajustes manuales para mejorar la salud general.',
        fisioterapia: 'La <strong>Fisioterapia</strong> ayuda a restaurar el movimiento y la función cuando una persona se ve afectada por una lesión, enfermedad o discapacidad, mediante ejercicios terapéuticos y técnicas manuales.',
        nutricion: 'La <strong>Nutrición y Dietética Terapéutica</strong> diseña planes alimenticios personalizados para prevenir o tratar enfermedades, mejorar el rendimiento y promover un estilo de vida saludable.',
        otras: 'Contamos con especialidades adicionales como <em>psicología, odontología, medicina general y más</em>. Consulte con nuestro equipo.'
      };

      specialtyLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const esp = this.dataset.especialidad;
          if (descripciones[esp]) {
            descriptionDiv.innerHTML = `<p class="mb-0"><strong>Descripción:</strong> ${descripciones[esp]}</p>`;
          } else {
            descriptionDiv.innerHTML = `<p class="mb-0"><strong>Descripción:</strong> Información no disponible.</p>`;
          }
        });
      });

      const form = document.getElementById('registroForm');
      const nombre = document.getElementById('nombre');
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const confirm = document.getElementById('confirmPassword');
      const terminos = document.getElementById('terminos');

      const errorNombre = document.getElementById('errorNombre');
      const errorEmail = document.getElementById('errorEmail');
      const errorPassword = document.getElementById('errorPassword');
      const errorConfirm = document.getElementById('errorConfirm');
      const errorTerminos = document.getElementById('errorTerminos');

      const mensajeExito = document.getElementById('mensajeExito');

      // Funciones de validación individuales
      function validarNombre() {
        if (!nombre.value.trim()) {
          errorNombre.textContent = 'El nombre es obligatorio.';
          return false;
        }
        errorNombre.textContent = '';
        return true;
      }

      function validarEmail() {
        const value = email.value.trim();
        if (!value) {
          errorEmail.textContent = 'El correo es obligatorio.';
          return false;
        }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value)) {
          errorEmail.textContent = 'Ingrese un correo válido (ej: nombre@dominio.com).';
          return false;
        }
        errorEmail.textContent = '';
        return true;
      }

      function validarPassword() {
        const value = password.value;
        if (!value) {
          errorPassword.textContent = 'La contraseña es obligatoria.';
          return false;
        }
        if (value.length < 6) {
          errorPassword.textContent = 'Mínimo 6 caracteres.';
          return false;
        }
        errorPassword.textContent = '';
        return true;
      }

      function validarConfirm() {
        const pass = password.value;
        const conf = confirm.value;
        if (!conf) {
          errorConfirm.textContent = 'Debe confirmar la contraseña.';
          return false;
        }
        if (pass !== conf) {
          errorConfirm.textContent = 'Las contraseñas no coinciden.';
          return false;
        }
        errorConfirm.textContent = '';
        return true;
      }

      function validarTerminos() {
        if (!terminos.checked) {
          errorTerminos.textContent = 'Debe aceptar los términos.';
          return false;
        }
        errorTerminos.textContent = '';
        return true;
      }

      nombre.addEventListener('blur', validarNombre);
      email.addEventListener('blur', validarEmail);
      password.addEventListener('blur', validarPassword);
      confirm.addEventListener('blur', validarConfirm);
      terminos.addEventListener('change', validarTerminos);

      form.addEventListener('submit', function(e) {
        e.preventDefault();  // Evitar envío real

        const valNombre = validarNombre();
        const valEmail = validarEmail();
        const valPassword = validarPassword();
        const valConfirm = validarConfirm();
        const valTerminos = validarTerminos();

        if (valNombre && valEmail && valPassword && valConfirm && valTerminos) {
          mensajeExito.classList.remove('d-none');
        } else {
          mensajeExito.classList.add('d-none');
        }
      });

      form.addEventListener('input', function() {
        mensajeExito.classList.add('d-none');
      });

    })();
//copied from bootstrap(making red and diable submission if invalid fields)
    // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'
  bsCustomFileInput.init();//to use the bs custom file input library for which we included the script which is used to display file names when taking input
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.validated-form')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
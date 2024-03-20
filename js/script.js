let empForm

// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)

empForm = $('empForm')

empForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(`ID: ${$('id').value}`)
    console.log(`Name: ${$('name').value}`)
    console.log(`Extension: ${$('ext').value}`)
    console.log(`Email: ${$('email').value}`)
    console.log(`Department: ${$('department').value}`)
  });
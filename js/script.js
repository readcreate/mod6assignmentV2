// GLOBAL VARIABLES
let id
let employeeName
let ext
let email
let department
let submit
let empForm

// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)

// GET THE DOM ELEMENTS
id            = $('id')
employeeName  = $('name')
ext           = $('ext')
email         = $('email')
department    = $('department')
empForm       = $('empForm')

empForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(`ID: ${id.value}`)
    console.log(`Name: ${employeeName.value}`)
    console.log(`Extension: ${ext.value}`)
    console.log(`Email: ${email.value}`)
    console.log(`Department: ${department.value}`)
  });
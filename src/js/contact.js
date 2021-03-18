
const contact = document.createElement('div');
contact.classList.add('contact');

const h2 = document.createElement('h2');
h2.textContent = 'Contact Us:'
contact.appendChild(h2)

const formCont = document.createElement('div');
formCont.classList.add('form-cont');
const form = document.createElement('form');

const nameL = document.createElement('label');
nameL.textContent = 'Enter your name'
nameL.setAttribute('for', 'name')
const nameI = document.createElement('input');
nameI.setAttribute('id', 'name')
nameI.setAttribute('type', 'text')
nameI.setAttribute('placeholder', 'Enter your name')
const emailL = document.createElement('label');
nameL.setAttribute('for', 'email')
emailL.textContent = 'Enter your Email'
const emailI = document.createElement('input');
emailI.setAttribute('id', 'email')
emailI.setAttribute('type', 'text')
emailI.setAttribute('placeholder', 'Enter your email')
const textL = document.createElement('label');
textL.setAttribute('for', 'message')
textL.textContent = 'Enter your message'
const textArea = document.createElement('textarea');
textArea.setAttribute('id', 'message')
textArea.setAttribute('rows', '4')
textArea.setAttribute('cols', '50')
textArea.setAttribute('placeholder', 'Enter your message')
const submit = document.createElement('input');
submit.setAttribute('type', 'submit')
submit.setAttribute('value', 'submit')

submit.addEventListener('click', (e) => {
    e.preventDefault()
})

form.appendChild(nameL)
form.appendChild(nameI)
form.appendChild(emailL)
form.appendChild(emailI)
form.appendChild(textL)
form.appendChild(textArea)
form.appendChild(submit)

formCont.appendChild(form);
contact.appendChild(formCont)


export {
    contact,
}
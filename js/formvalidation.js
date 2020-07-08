// Form Validation 

const form = document.querySelector('#form button'); 
const username = document.querySelector('#username');
const subject = document.querySelector('#subject'); 
const message = document.querySelector('#message'); 

form.addEventListener('click', (e) => {
    e.preventDefault(); 


    checkInputs(); 
}); 

const checkInputs = () => {
    // grab values 

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    const subjectValue = subject.value.trim();

    // checking if condition is success or error based 

    if (usernameValue === '') {
        isError(username, 'Username cannot be left blank')
    } else {
        isSuccess(username)
    }

    if (emailValue === '') {
        isError(email, 'Email cannot be left blank')
    } else if (!isEmail(emailValue)) {
        isError(email, 'Email is invalid')
    } else {
        isSuccess(email)
    }


    if (messageValue === '') {
        isError(message, 'Message cannot be left blank')
    } else {
        isSuccess(message)
    } 

    if (subjectValue === '') {
        isError(subject, 'Subject cannot be left blank')
    } else {
        isSuccess(subject)
    }
}; 


const isError = (input, message) => {
    const formControl = input.parentElement;  
    const small = formControl.querySelector('small'); 

    small.innerText = message;  

    formControl.className = 'form__control error';
}; 


const isSuccess = (input) => {
    const formControl = input.parentElement;  

    formControl.className = 'form__control success'; 
}; 


const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);  
};
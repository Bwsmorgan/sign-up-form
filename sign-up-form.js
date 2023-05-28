let password_value = document.querySelector('#password');
let confirmed_password_value = document.querySelector('#confirm-password');
let output = document.querySelector('#error-msg');

function check_password() {

    password_value.value == confirmed_password_value.value ? password_validation_output('rgb(105, 137, 31)', 'Passwords match') : password_validation_output('rgb(200, 56, 56)','Passwords do not match');
}


function password_validation_output(colour_output, output_msg) {

    output.style.color = colour_output;
    output.innerHTML = output_msg;
    document.querySelector("#confirm-password").style.borderColor = colour_output
    document.querySelector("#password").style.borderColor = colour_output

}


confirmed_password_value.addEventListener('keyup', () => { 
    
    if (confirmed_password_value.value.length == 0) {
        output.innerHTML = '';
        document.querySelector("#confirm-password").style.borderColor = 'rgb(216, 216, 216)';
        document.querySelector("#password").style.borderColor = 'rgb(216, 216, 216)';
    }
    
    else if (password_value.value.length != 0) {
        check_password();
    }
});


password_value.addEventListener('keyup', () => {
    
    if (password_value.value.length == 0) {
        output.innerHTML = '';
        document.querySelector("#confirm-password").style.borderColor ='rgb(216, 216, 216)';
        document.querySelector("#password").style.borderColor =  'rgb(216, 216, 216)';
    }

    else if (confirmed_password_value.value.length != 0) {
        check_password();
    }
});

// error elements
const usernameError = document.querySelector('#username_error');
const lastnameError = document.querySelector('#lastname_error');
const emailError = document.querySelector('#email_error');
const phoneError = document.querySelector('#phone_error');
const cityError = document.querySelector('#city_error');
const pincodeError = document.querySelector('#pincode_error');



// hide all error elements by default.
usernameError.style.display = 'none';
lastnameError.style.display = 'none';
emailError.style.display = 'none';
phoneError.style.display ='none';
phonError.style.display = 'none';
cityError.style.display ='none';
pincodeError.style.display ='none';

function validate(e){
    // e.preventDefault();
    // input elements
    const username = document.querySelector('#fname');
    const lastname = document.querySelector('#lname');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const city = document.querySelector('#city');
    const pincode = document.querySelector('#pincode');
   

    // input values
    const usernameVal = document.querySelector('#fname').value;
    const lastnameVal = document.querySelector('#lname').value;
    const emailVal = document.querySelector('#email').value;
    const phoneVal = document.querySelector('#phone').value;
    const cityVal = document.querySelector('#city').value;
    const pincodeVal = document.querySelector('#pincode').value;
   

    // console.log(usernameVal, emailVal, passwordVal, cpasswordVal);

    const returnedVal = (
        checkusername(usernameVal) && 
        checklastname(lastnameVal) && 
        checkemail(emailVal) &&
        checkphone(phoneVal) && 
        checkcity(cityVal) && 
        checkpincode(pincodeVal)
    );
    if(returnedVal){
        return (
            checkusername(usernameVal) && 
            checklastname(lastnameVal) && 
            checkemail(emailVal) &&
            checkphone(phoneVal) && 
            checkcity(cityVal) && 
            checkpincode(pincodeVal)
        );
    }else{
        e.preventDefault();
    }


    // checkemail(emailVal);
    // checkpassword(passwordVal);
    // checkpasswordmatch(passwordVal, cpasswordVal);
}



const checkusername = (usernameVal)=> {
    if(usernameVal.length > 3){
        // hide the error message element.
        usernameError.style.display = 'none';
        // toggling success and error classes
        if(username.classList.contains('error')){
            // console.log('replaced error class with success');
            username.classList.replace('error', 'success');  
        }else{
            // console.log('added class success');
            username.classList.add('success');
        }

        // allowing only alpha numeric characters, dot and underscore in username.
        let expr = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
        // If username doesn't match the regular expression.
        if(!expr.test(usernameVal)){
            username.focus();
            // toggling success and error classes
            if(username.classList.contains('success')){
                // console.log('replaced success class with error');
                username.classList.replace('success', 'error');
            }else{
                // console.log('added class error');
                username.classList.add('error')
            }
            // showing error message element and the error message
            usernameError.style.display = 'block';
            usernameError.innerText = 'Username can only contain Alphanumeric characters, . and _';
            return false;
        }
        return true;
    }else{
        username.focus();
        if(username.classList.contains('success')){
            // console.log('replaced success class with error');
            username.classList.replace('success', 'error');
        }else{
            // console.log('added class error');
            username.classList.add('error')
        }
        // showing error message element and the error message
        usernameError.style.display = 'block';
        usernameError.innerText = 'Username must be of atleast 4 characters.';
        return false;
    }
}
const checklastname = (lastnameVal)=> {
    if(lastnameVal.length > 3){
        // hide the error message element.
        lastnameError.style.display = 'none';
        // toggling success and error classes
        if(lastname.classList.contains('error')){
            // console.log('replaced error class with success');
            lastname.classList.replace('error', 'success');  
        }else{
            // console.log('added class success');
            lastname.classList.add('success');
        }

        // allowing only alpha numeric characters, dot and underscore in username.
        let expr = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
        // If username doesn't match the regular expression.
        if(!expr.test(usernameVal)){
            username.focus();
            // toggling success and error classes
            if(username.classList.contains('success')){
                // console.log('replaced success class with error');
                username.classList.replace('success', 'error');
            }else{
                // console.log('added class error');
                username.classList.add('error')
            }
            // showing error message element and the error message
            usernameError.style.display = 'block';
            usernameError.innerText = 'Username can only contain Alphanumeric characters, . and _';
            return false;
        }
        return true;
    }else{
        username.focus();
        if(username.classList.contains('success')){
            // console.log('replaced success class with error');
            username.classList.replace('success', 'error');
        }else{
            // console.log('added class error');
            username.classList.add('error')
        }
        // showing error message element and the error message
        usernameError.style.display = 'block';
        usernameError.innerText = 'Username must be of atleast 4 characters.';
        return false;
    }
}

const checkemail = (emailVal) =>{
    if(emailVal.length > 8){
        // hide the error message element.
        emailError.style.display = 'none';
        // toggling success and error classes
        if(email.classList.contains('error')){
            // console.log('replaced error class with success');
            email.classList.replace('error', 'success');  
        }else{
            // console.log('added class success');
            email.classList.add('success');
        }

        let emailfilterexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
        if(!emailfilterexp.test(emailVal)){
            email.focus();
            // toggling success and error classes
            if(email.classList.contains('success')){
                // console.log('replaced success class with error');
                email.classList.replace('success', 'error');
            }else{
                // console.log('added class error');
                email.classList.add('error')
            }
            // showing error message element and the error message
            emailError.style.display = 'block';
            emailError.innerText = 'Please enter a valid email address!';
            return false;
        }
        return true;
    }else{
        email.focus();
        if(email.classList.contains('success')){
            // console.log('replaced success class with error');
            email.classList.replace('success', 'error');
        }else{
            // console.log('added class error');
            email.classList.add('error')
        }
        // showing error message element and the error message
        emailError.style.display = 'block';
        emailError.innerText = 'Email must be of atleast 8 characters.';
        return false;
    }
}
const checkphone = (phoneVal)=> {
    if(phoneVal.length > 3){
        // hide the error message element.
        usernameError.style.display = 'none';
        // toggling success and error classes
        if(phoneVal.classList.contains('error')){
            // console.log('replaced error class with success');
            phoneVal.classList.replace('error', 'success');  
        }else{
            // console.log('added class success');
            phoneVal.classList.add('success');
        }

        // allowing only alpha numeric characters, dot and underscore in username.
        let expr = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
        // If username doesn't match the regular expression.
        if(!expr.test(usernameVal)){
            username.focus();
            // toggling success and error classes
            if(username.classList.contains('success')){
                // console.log('replaced success class with error');
                username.classList.replace('success', 'error');
            }else{
                // console.log('added class error');
                username.classList.add('error')
            }
            // showing error message element and the error message
            usernameError.style.display = 'block';
            usernameError.innerText = 'Username can only contain Alphanumeric characters, . and _';
            return false;
        }
        return true;
    }else{
        username.focus();
        if(username.classList.contains('success')){
            // console.log('replaced success class with error');
            username.classList.replace('success', 'error');
        }else{
            // console.log('added class error');
            username.classList.add('error')
        }
        // showing error message element and the error message
        usernameError.style.display = 'block';
        usernameError.innerText = 'Username must be of atleast 4 characters.';
        return false;
    }
}
const checkcity = (cityVal)=> {
    if(usernameVal.length > 3){
        // hide the error message element.
        usernameError.style.display = 'none';
        // toggling success and error classes
        if(username.classList.contains('error')){
            // console.log('replaced error class with success');
            username.classList.replace('error', 'success');  
        }else{
            // console.log('added class success');
            username.classList.add('success');
        }

        // allowing only alpha numeric characters, dot and underscore in username.
        let expr = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
        // If username doesn't match the regular expression.
        if(!expr.test(usernameVal)){
            username.focus();
            // toggling success and error classes
            if(username.classList.contains('success')){
                // console.log('replaced success class with error');
                username.classList.replace('success', 'error');
            }else{
                // console.log('added class error');
                username.classList.add('error')
            }
            // showing error message element and the error message
            usernameError.style.display = 'block';
            usernameError.innerText = 'Username can only contain Alphanumeric characters, . and _';
            return false;
        }
        return true;
    }else{
        username.focus();
        if(username.classList.contains('success')){
            // console.log('replaced success class with error');
            username.classList.replace('success', 'error');
        }else{
            // console.log('added class error');
            username.classList.add('error')
        }
        // showing error message element and the error message
        usernameError.style.display = 'block';
        usernameError.innerText = 'Username must be of atleast 4 characters.';
        return false;
    }
}
const checkpincode = (pincodeVal)=> {
    if(usernameVal.length > 3){
        // hide the error message element.
        usernameError.style.display = 'none';
        // toggling success and error classes
        if(username.classList.contains('error')){
            // console.log('replaced error class with success');
            username.classList.replace('error', 'success');  
        }else{
            // console.log('added class success');
            username.classList.add('success');
        }

        // allowing only alpha numeric characters, dot and underscore in username.
        let expr = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
        // If username doesn't match the regular expression.
        if(!expr.test(usernameVal)){
            username.focus();
            // toggling success and error classes
            if(username.classList.contains('success')){
                // console.log('replaced success class with error');
                username.classList.replace('success', 'error');
            }else{
                // console.log('added class error');
                username.classList.add('error')
            }
            // showing error message element and the error message
            usernameError.style.display = 'block';
            usernameError.innerText = 'Username can only contain Alphanumeric characters, . and _';
            return false;
        }
        return true;
    }else{
        username.focus();
        if(username.classList.contains('success')){
            // console.log('replaced success class with error');
            username.classList.replace('success', 'error');
        }else{
            // console.log('added class error');
            username.classList.add('error')
        }
        // showing error message element and the error message
        usernameError.style.display = 'block';
        usernameError.innerText = 'Username must be of atleast 4 characters.';
        return false;
    }
}


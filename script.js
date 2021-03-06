 var nameError = document.getElementById('name-error')
 var emailError = document.getElementById('email-error')
 var phoneError = document.getElementById('phone-error')
 var messageError = document.getElementById('message-error')
 var submitError = document.getElementById('submit-error')

// NAME VALIDATION

 function validateName(){
     var name = document.getElementById('contact-name').value;
     
     if(name.length == 0){
         nameError.innerHTML = 'Name is required';
         return false;
     }
     if(!name.match(/^[A-Za-z]+ [A-Za-z]+$/)){
        nameError.innerHTML = 'Write full Name';
        return false;
     }
     nameError.innerHTML = '';
     return true;
    
 }
 
// EMAIL VALIDATION

 function validateEmail(){
     var email = document.getElementById('contact-email').value;
     if(email.length == 0){
         emailError.innerHTML = 'Email is required'
         return false;
     }
    //  if(!email.match(/^[A-Za-z]\.\-[0-9]*{@}[A-Za-z]*{\.}[a-z]{2,4}$/)){
        if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        

         emailError.innerHTML = 'Email Invalid'
         return false;
     }
     else{

     emailError.innerHTML = '';
     return true;
    }

 }

//  PHONE VALIDATION
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    console.log(phone.length);

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone is required'
        return false;
    }
    
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Phone is required';
        return false;
    }

    phoneError.innerHTML = '';
    return true;
}

// MESSAGE VALIDATION

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30
    var left = required-message.length;

    if(left>0){
        messageError.innerHTML = left +'more characters required';
        return false;

    }
    messageError.innerHTML = '';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the error';
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false;
    }
}



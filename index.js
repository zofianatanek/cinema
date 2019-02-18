
// function that verifies correctness of an email
function check_email(){
    var login = document.getElementById("email").value;
    var spr = new RegExp('[a-z1-9]{2,}[@][a-z1-9]{2,}[.][a-z1-9]{2,3}')
    if((spr.test(login))){
        console.log("poprawny email");
    }
    else {
        alert("niepoprawny email!");
    }
}


// function that verifies correctness of an password
function check_password(){
    var password = document.getElementById("password").value;
    var spr = new RegExp('[a-z1-9]{6,}')
    if((spr.test(password))){
        console.log("haslo ok");
    }
    else {
        alert("haslo za krotkie!");
    }
}

// function that checks if email is in base
function log_in(){
    var login = document.getElementById("email").value;
    var email = login.toLowerCase();
    alert(email);

}


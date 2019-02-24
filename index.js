
// email validation with regex
function check_email(){
    var login = document.getElementById("email").value;
    var spr = new RegExp('[a-z1-9]{2,}[@][a-z1-9]{2,}[.][a-z1-9]{2,3}')
    if((spr.test(login))){
        console.log("poprawny email");
    }
    else {
        document.getElementById("email").style.borderColor = "red";
    }
}


// password validation with regex
function check_password(){
    var password = document.getElementById("password").value;
    var spr = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[0-9])(?=.{8,})')
    if((spr.test(password))){
        console.log("haslo ok");
    }
    else {
        document.getElementById("password").style.borderColor = "red";
    }
}


// verification user email with database
function verify_email(){
    var user = document.getElementById("email").value
    var user = user.toLowerCase();
    var mydata = JSON.parse(data);
    for (var i = 0; i < mydata.length; i++){
        if(mydata[i].email == user){
            console.log("user email in database");
            break;

        }
        else {
            console.log("unknown user");
        }
    }
}

// verification user password with database
function verify_password(){
    var user_password = document.getElementById("password").value
    var user = document.getElementById("email").value
    var mydata = JSON.parse(data);
    for (var i = 0; i < mydata.length; i++){
        if(mydata[i].password == user_password && mydata[i].email == user){
            console.log(mydata[i].password, mydata[i].email);
            var logged = mydata[i].email;
            console.log("Zalogowany użytkownik " + logged);
            break;
        }
        else {
            console.log("uncorrect password");
        }
    }
}

function login(){
    check_email();
    check_password();
    verify_email();
    verify_password();
}


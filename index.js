


// LOGIN PANEL
/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }


// email validation with regex
function check_email(){
    var login = document.getElementById("email").value;
    var spr = new RegExp('[a-z1-9]{2,}[@][a-z1-9]{2,}[.][a-z1-9]{2,3}')
    if((spr.test(login))){
        console.log("poprawny email");
    }
    else {
        document.getElementById("email").style.borderColor = "#db3bcd";
        document.getElementById("email_message").innerHTML = "Niepoprawny format email";
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
        document.getElementById("password").style.borderColor = "#db3bcd";
        document.getElementById("password_message").innerHTML = "Hasło musi mieć min. 8 znaków w tym: duże i małe litery, cyfry i znak specjalny"
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


var span_wylogowany
var span_zalogowany
var parentDiv







// Memorizes logged user and changes button "account" to "welcome + logged user"
function logged_user(a_zalogowany){
    span_zalogowany = document.createElement("span"); //create new span element
    span_zalogowany.setAttribute("id", "loggedUser"); // set attribute of new span element
    var span_zalogowany_content = document.createTextNode("Witaj " + a_zalogowany); // create content for new element
    span_zalogowany.appendChild(span_zalogowany_content); // add content to new element
    span_wylogowany = document.getElementById("account"); 
    parentDiv = span_wylogowany.parentNode;
    parentDiv.replaceChild(span_zalogowany, span_wylogowany); // replace existing span with new span element
    
    wyloguj = document.getElementById("wyloguj").style.display = "block";
    
}

// Log out button functionality
var zalogowany
var wyloguj = document.getElementById("wyloguj");
wyloguj.addEventListener("click", function(){
    wyloguj = document.getElementById("wyloguj");
    console.log("wylogowałeś się");
    zalogowany = null;
    parentDiv.replaceChild(span_wylogowany, span_zalogowany);
    wyloguj = document.getElementById("wyloguj").style.display = "none";  
})



// verification user password with database
function verify_password(){
    var user_password = document.getElementById("password").value
    var user = document.getElementById("email").value
    var mydata = JSON.parse(data);
    for (var i = 0; i < mydata.length; i++){
        if(mydata[i].email == user){
            if(mydata[i].password == user_password){ 
                // console.log(mydata[i].password, mydata[i].email);
                zalogowany = mydata[i].name;
                logged_user(zalogowany);
                break;
            }            
            else {
                console.log("uncorrect password");
            }
        }
    }
}



function login(){
    check_email();
    check_password();
    verify_email();
    verify_password();
    // dodać zamykanie overlaya
}



function home(){
    if(zalogowany != undefined){
        console.log("zalogowałeś się");
        window.location.href = "home.html";
    }  
}



var repertuarButton = $('.repertuar');

for(var i = 0; i < repertuarButton.length; i++){
    repertuarButton[i].addEventListener("mouseover", function(){
        this.style.color = "#db3bcd";
    });
    
    repertuarButton[i].addEventListener("mouseout", function(){
        this.style.color = "black";
    });
}

var cinema = JSON.parse(cinemaList);
var myCinema = cinema[0].cinemas[0].name
console.log(myCinema);





// Created by Shivam on 22-01-2019.



// By default ,game will be at hard mode. so colors=6 , at easy , colors=3.
var number_of_colors=6;
var colors=generateColorArray(number_of_colors);


var pickedColor=pickRandomColor();
var divs=document.getElementsByClassName("square");

var picked_color_display=document.getElementById("pickedColor");
picked_color_display.textContent=pickedColor;

var status_display=document.getElementById("status");
var h1=document.querySelector("h1");

var reset_button=document.getElementById("reset");
var easy_button=document.getElementById("easyButton");
var hard_button=document.getElementById("hardButton");





for (var i=0;i<colors.length;i++){

    // Add colors to divs.
    divs[i].style.backgroundColor=colors[i];

    // Add event listener to each div.
    divs[i].addEventListener("click",function () {
        var clickedColor=this.style.backgroundColor;
        if (clickedColor===pickedColor)
        {
            status_display.textContent="Correct!";
            changeColor(clickedColor);
            h1.style.backgroundColor=clickedColor;
            //If player wins, change button text to "Play Again?"
            reset_button.textContent="Play again?"
        }
        else
            {
            this.style.backgroundColor="#232323";
            status_display.textContent="Try again :( ";
        }
    });
}




// Changes all the squares to the correct color!
function changeColor(color) {
    for (var i=0; i<divs.length; i++){
        divs[i].style.backgroundColor=color;
    }
}





// Generating random color to be guessed by player !
function pickRandomColor() {
    // Math.random() is used to generate the random number between 0 and 1 (1 exclusive) . Eg-> 0.222323 , 0.543534234234, 0.2323232323 etc
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}



// We have to generate random color array for different colors at each reload
function generateColorArray(num) {
    var array=[];

    for (var i=0;i<num;i++){

        // Now generate num time random color and add it array and at last return it.
        var red=String(Math.floor(Math.random()*256));
        var green=String(Math.floor(Math.random()*256));
        var blue=String(Math.floor(Math.random()*256));

        var final_color="rgb("+red+", "+green+", "+blue+")";
        array.push(final_color);
    }
    return array;
}


// Adding event Listner to our RESET BUTTON(New Color button).
reset_button.addEventListener("click",function () {
    // Firstly generate all new colors
    colors=generateColorArray(number_of_colors);

    // Now set all squares new color.
    for (var i=0;i<divs.length;i++){
        divs[i].style.backgroundColor=colors[i];
    }

    //Now select a random color from array to be guessed by the user .
    pickedColor=pickRandomColor();

    // Also set h1 background color to original.
    h1.style.backgroundColor="steelblue";

    // Also set RGB color in the heading to the new selected color.
    picked_color_display.textContent=pickedColor;


    // Also when player wins the button text is set to "Play again ?" ,
    // so when user hits "Play again?" (same button) , it must change text to "New color".
    reset_button.textContent="New Colors"

    // After it we have to also remove the "Correct" or "Try again" tag.
    status_display.textContent="";

});


// Adding event listner to easy_button.
easy_button.addEventListener("click",function () {
    easy_button.classList.add("selected");
    hard_button.classList.remove("selected");
    number_of_colors=3;

    // We have to generate 3 new random colors;
    colors=generateColorArray(number_of_colors);

    pickedColor=pickRandomColor();
    picked_color_display.textContent=pickedColor;
    status_display.textContent="";
    reset_button.textContent="New Colors";

    h1.style.backgroundColor="steelblue";


    for (var i=0;i<divs.length;i++){

        // Now change color of first 3 divs;

        if (colors[i])
            divs[i].style.backgroundColor=colors[i];


        // Now we have to hide the last 3 colors to show up only 3 colors.
        // We can do it using display property

        else
            divs[i].style.display="none";
    }
    

});



// Adding event Listener to hard_button.
hard_button.addEventListener("click",function () {
    hard_button.classList.add("selected");
    easy_button.classList.remove("selected");

    number_of_colors=6;
    colors=generateColorArray(number_of_colors);

    pickedColor=pickRandomColor();
    picked_color_display.textContent=pickedColor;
    status_display.textContent="";
    reset_button.textContent="New Colors";

    h1.style.backgroundColor="steelblue";

    for (var i=0;i<divs.length;i++) {
        divs[i].style.backgroundColor = colors[i];
        divs[i].style.display="block";
    }
});







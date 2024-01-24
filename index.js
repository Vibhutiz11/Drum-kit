
var noOfbutton =document.querySelectorAll(".drum").length;

for (var i=0; i<noOfbutton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
            
        var buttonInnerHTML  = this.innerHTML;
        makesound(this.innerHTML);
        buttonAnimation(buttonInnerHTML);

});

}

document.addEventListener('keypress', function(event) {
    
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key) {
    if (key == "w" ){
        var audio1 = new Audio("sounds/crash.mp3");
        audio1.play();
        }

        else if(key == "a"){
        var audio2 = new Audio("sounds/kick-bass.mp3");
        audio2.play();
        }
        
        else if(key == "s"){
        var audio3 = new Audio("sounds/snare.mp3");
        audio3.play();
        }

        else if(key == "d"){
        var audio4 = new Audio("sounds/tom-1.mp3");
        audio4.play();
        }
        
        else if(key == "j"){
        var audio5 = new Audio("sounds/tom-2.mp3");
        audio5.play();
        }

        else if(key == "k"){
        var audio6 = new Audio("sounds/tom-3.mp3");
        audio6.play();
        }

        else {
            var audio7 = new Audio("sounds/tom-4.mp3");
            audio7.play();
        }
}

// var answerto1= "Messi"


function answerQuestion1() {
    var question= prompt("Who is the captain of Inter Miami?");
    var sfc4question= question.slice(0,1);
    var sfc4questiontoUpperCase=sfc4question.toUpperCase();
    var src4question= question.slice(1,question.length);
    var src4questiontoLowerCase= src4question.toLowerCase();
 var  concOfquestion= sfc4questiontoUpperCase + src4questiontoLowerCase;

 var question=concOfquestion;

    if ( question == "Messi") {
        document.querySelectorAll(".hidden-correct-text")[0].classList.add("display-hidden-correct-text-Js");
       document.querySelector(".messi-image-text-container").classList.add("image-text-visibility-visible-container-Javascript")
       
       
    } else if( question !== "Messi"){
        document.querySelectorAll(".hidden-correct-text")[0].classList.add("display-hidden-correct-text-Js");
        document.querySelectorAll(".hidden-correct-text")[0].innerHTML="<strong>Wrong❌</strong>"
    }
}

function answerQuestion2() {
    var question= prompt("Who is the captain of Arsenal football club??");
    var sfc4question= question.slice(0,1);
    var sfc4questiontoUpperCase=sfc4question.toUpperCase();
    var src4question= question.slice(1,question.length);
    var src4questiontoLowerCase= src4question.toLowerCase();
 var  concOfquestion= sfc4questiontoUpperCase + src4questiontoLowerCase;

 var question=concOfquestion;

    if ( question == "Odegard") {
        document.querySelector(".image-text-visibility-hidden-container").
        document.querySelectorAll(".hidden-correct-text")[1].classList.add("display-hidden-correct-text-Js");
        document.querySelector(".odegard-image-text-container").classList.add("image-text-visibility-visible-container-Javascript")
        
    } else if( question !== "Odegard"){
        document.querySelectorAll(".hidden-correct-text")[1].classList.add("display-hidden-correct-text-Js");
        document.querySelectorAll(".hidden-correct-text")[1].innerHTML="<strong>Wrong❌</strong>";
        document.querySelectorAll(".hidden-correct-text")[1].styles.color="red";
        
        
    }
}


function answerQuestion3() {
    var question= prompt("Chelsea football club was founded in which year?");
    var sfc4question= question.slice(0,1);
    var sfc4questiontoUpperCase=sfc4question.toUpperCase();
    var src4question= question.slice(1,question.length);
    var src4questiontoLowerCase= src4question.toLowerCase();
 var  concOfquestion= sfc4questiontoUpperCase + src4questiontoLowerCase;

 var question=concOfquestion;

    if ( question == "1905") {
        document.querySelectorAll(".hidden-correct-text")[2].classList.add("display-hidden-correct-text-Js");
        document.querySelector(".chelsea-image-text-container").classList.add("image-text-visibility-visible-container-Javascript")
        
    } else if( question !== "Odegard"){
        document.querySelectorAll(".hidden-correct-text")[2].classList.add("display-hidden-correct-text-Js");
        document.querySelectorAll(".hidden-correct-text")[2].innerHTML="<strong>Wrong❌</strong>";
        
        
    }
}

function answerQuestion4() {
    var question= prompt("Which brazilian footballer did barcelona sign from PSG in 2003?");
    var sfc4question= question.slice(0,1);
    var sfc4questiontoUpperCase=sfc4question.toUpperCase();
    var src4question= question.slice(1,question.length);
    var src4questiontoLowerCase= src4question.toLowerCase();
 var  concOfquestion= sfc4questiontoUpperCase + src4questiontoLowerCase;

 var question=concOfquestion;

    if ( question == "Ronaldinho") {
        document.querySelectorAll(".hidden-correct-text")[3].classList.add("display-hidden-correct-text-Js");
        document.querySelector(".ronaldinho-image-text-container").classList.add("image-text-visibility-visible-container-Javascript")
        
    } else if( question !== "Ronaldinho"){
        document.querySelectorAll(".hidden-correct-text")[3].classList.add("display-hidden-correct-text-Js");
        document.querySelectorAll(".hidden-correct-text")[3].innerHTML="<strong>Wrong❌</strong>";
        
        
    }
}



 

 

function displayAnswer1() {
    
    document.querySelectorAll(".hidden-answer-text")[0].classList.toggle("display-hidden-answer-text-Js"); 
};
function displayAnswer2() {
    
    document.querySelectorAll(".hidden-answer-text")[1].classList.toggle("display-hidden-answer-text-Js"); 
};
function displayAnswer3() {
    
    document.querySelectorAll(".hidden-answer-text")[2].classList.toggle("display-hidden-answer-text-Js"); 
};
function displayAnswer4() {
    
    document.querySelectorAll(".hidden-answer-text")[3].classList.toggle("display-hidden-answer-text-Js"); 
};






function Reset1() {
    document.querySelectorAll(".hidden-correct-text")[0].classList.remove("display-hidden-correct-text-Js")
    document.querySelector(".messi-image-text-container").classList.remove("image-text-visibility-visible-container-Javascript")
}
function Reset2() {
    document.querySelectorAll(".hidden-correct-text")[1].classList.remove("display-hidden-correct-text-Js");
    document.querySelector(".odegard-image-text-container").classList.remove("image-text-visibility-visible-container-Javascript")
}
    function Reset3() {
    document.querySelectorAll(".hidden-correct-text")[2].classList.remove("display-hidden-correct-text-Js")
    document.querySelector(".chelsea-image-text-container").classList.remove("image-text-visibility-visible-container-Javascript")
}
function Reset4() {
    document.querySelectorAll(".hidden-correct-text")[3].classList.remove("display-hidden-correct-text-Js")
    document.querySelector(".ronaldinho-image-text-container").classList.remove("image-text-visibility-visible-container-Javascript")
}

function resetAll(){
    for (i=0  ;i< document.querySelectorAll(".hidden-correct-text").length; i++) {
      
        document.querySelectorAll(".hidden-correct-text")[i].classList.remove("display-hidden-correct-text-Js")
       
    }
}


 
// using javascript
/*
document.querySelector('button').addEventListener('click', function(){
    document.querySelector('h1').innerHTML = "you have clicked the h1 tag"; 
})
*/


// using jquery 
/*
$('button').click(function(){
    $('h1').text("you changed h1 text using jquery"); 
})
*/ 


// using toggleClass
/*
$('button').click(function() {
    $('h1').toggleClass("style1");   
})
*/


// using javascript 
/*
var total_button = document.querySelectorAll('.mybutton').length; 
for (let i=0; i<total_button; i++){
    document.querySelectorAll(".mybutton")[i].addEventListener('click', function(){
        var text = this.innerHTML; 
        document.querySelector('h1').innerHTML = text + " is clicked"; 
    })
}
*/ 

// same thing using jquery 
$('.mybutton').click(function() {
    var value = this.innerHTML; 
    $('h1').text(value + " is clicked."); 
})

// same work using on function 
$('.mybutton').on("mouseover", function(){
    var value = this.innerHTML;
    $('h1').text(value + " is clicked"); 
})


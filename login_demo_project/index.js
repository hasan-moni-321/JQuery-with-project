$('#loginButton').click(function(){
    var passward1 = $('#pass1').val();
    var passward2 = $('#pass2').val(); 

    if(passward1 != "" && passward2 != ""){
        if(passward1 == passward2){
            alert('successfully login'); 
        }else{
            alert("passward missmatch"); 
        }
    }else{
        alert("please enter passward"); 
    }
})
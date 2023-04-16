
var presetnValue = $('#result')

function insertNumber(number){
    var ext_number = presetnValue.val()
    presetnValue.val(ext_number + number)
}

function clearResult(){
    presetnValue.val('')
}

function calculate(){
    var result = eval(presetnValue.val()) 
    presetnValue.val(result)
}

function deleteNumber(){
    var presentValue = presetnValue.val()
    if(presentValue!=""){
        presetnValue.val(presetnValue.val().slice(0, -1))
    }
}


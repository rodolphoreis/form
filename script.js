const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');


function setError(index){
    campos[index].style.border ='2px solide #636D5C';
    campos[index].style.display ='block';
}
function removeError(index){
    campos[index].style.border ='';
    campos[index].style.display ='none';
}

function nameValidate(){
        if(campos[0].value.length < 3){
            setError(0);
            
        }
        else{
        console.log('Validado')
        }
}
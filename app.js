const form = document.querySelector('.taxform');

const calcBtn = document.querySelector('.calc');
const clrBtn = document.querySelector('.clr');

const taxType = document.querySelector('.taxType');

const solution = document.querySelector('.solution');

const error = document.querySelector('.errmsg');

const error2= document.querySelector('.errmsgx');

function checkVal(){
    if (form.valinput.value===''){
        error.classList.toggle('errmsg2');    
    }
}

function calcTaxes(){
    if (taxType.value==='gct-cons'){
        solution.innerHTML=`$ ${(form.valinput.value * .15).toFixed(2)}`;        
    }
    else if(taxType.value==="gct-tel"){
        solution.innerHTML=`$ ${(form.valinput.value * .25).toFixed(2)}`; 
    }
    else if(taxType.value==='make-selection' || taxType.value==''){
        error2.classList.toggle('errmsg2x');

    }
}

calcBtn.addEventListener('click', ()=>{
    
    checkVal();
    calcTaxes();
})
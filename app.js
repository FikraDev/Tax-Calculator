const form = document.querySelector('.taxform');

const calcBtn = document.querySelector('.calc');
const clrBtn = document.querySelector('.clr');

const taxType = document.querySelector('.taxType');

const solution = document.querySelector('.solution');

function checkVal(){
    if (form.valinput.value===''){
        form.valinput.setAttribute('class', 'error');
    }
}

function calcTaxes(){
    if (taxType.value==='gct-cons'){
        solution.innerHTML=(form.valinput.value * .15).toFixed(2)
        
    }
}

calcBtn.addEventListener('click', ()=>{
    checkVal();
    calcTaxes();
})
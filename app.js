let tType = document.getElementById("taxType");
let result = document.getElementById("txtArea");
let initValue = document.getElementById("itemValue");

calcBtn.onclick  = function calcAllTaxes(){
    if(tType.value=="gct-Comp" || tType.value=="gct-Gen"){
    calculation = (0.15*initValue.value) + Number(initValue.value);
    result.innerHTML=("$" + calculation.toFixed(2))
    event.preventDefault();
  }

    else if (tType.value=="gct-Tele"){
        calculation = (0.25*initValue.value) + Number(initValue.value);
        result.innerHTML=("$" + calculation.toFixed(2))
        event.preventDefault();
    }
}

cancelBtn.onclick=(function(){
     initValue.innerText="";
     tType.innerText="";


 })

//  calcAllTaxes();



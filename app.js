let tType = document.getElementById("taxType");
let result1=document.getElementById("txtArea1");
let result = document.getElementById("txtArea");
let initValue = document.getElementById("itemValue");
let taxForm=document.getElementById("taxForm");

//Function to Validate User input (Numbers only)

function acceptNumOnly(){

    var regExx = /^[0-9]+$/;

    if (initValue.value.match(regExx)){
       return true;        
    }
    else{
        alert("Please Enter Numerical Values only")

        taxForm.reset();

        // result.innerHTML="";
        // result1.innerHTML="";
        // initValue.innerHTML="";
        // tType.value=makeSelection;
        
        // return false;
    }
}

//Function for Calculate Button

calcBtn.onclick  = function calcAllTaxes(){
    if(tType.value=="gct-Comp"){
    calculation1 = (0.15*initValue.value);    
    calculation = (0.15*initValue.value) + Number(initValue.value);
    result1.innerHTML=( "Total GCT: "+" $" + calculation1.toFixed(2))
    result.innerHTML=("Grand Total: "+ " $" + calculation.toFixed(2))
    event.preventDefault();
  }

    else if (tType.value=="gct-Tele"){
        calculation = (0.25*initValue.value) + Number(initValue.value);
        result.innerHTML=("$" + calculation.toFixed(2))
        event.preventDefault();
    }
    acceptNumOnly();
}

//IIFE for Cancel Button

cancelBtn.onclick=(function(){
     initValue.innerText="";
     tType.value=makeSelection;
 })

 





const celcius  = document.getElementById("celcius");
const Fahrenheit  = document.getElementById("Fahrenheit");
const kelvin  = document.getElementById("kelvin");
console.log(kelvin);
function TempCalc(event){
   tempName = event.target.name;
   tempValue = event.target.value;
   switch(tempName)
   {
    case "celcius":
        Fahrenheit.value = (tempValue * (9/5))+32  ;
        kelvin.value = ((tempValue - 0) + 273.15);
        
    break;
    case "Fahrenheit":
       celcius.value = (tempValue - 32)*(5/9);
        kelvin.value = ((tempValue - 32) * (5/9) + 273.15);
      ;
    break;
    case "kelvin":
       celcius.value = tempValue - 273.15;
       Fahrenheit.value = (tempValue - 273.15) * (5/9) + 32;
    break;
   }
}
{


    


function funcCar(){

    var comp = document.getElementById("company").value;
    var cart = document.getElementById("cartype").value;    
    var ing= parseInt(document.getElementById("enginesize").value);
    var numseat = document.getElementById("seat");
    var numseatv = numseat[numseat.selectedIndex].value;
    var selectCar = new Object();

    var isError = false;



  
    if (document.getElementById("red").checked == true){
        selectCar.color="Red";
        redCar.style.visibility='visible';
    }   
    else if (document.getElementById("blue").checked==true){
        selectCar.color="Blue";
        blueCar.style.visibility='visible';

    }   
    else if (document.getElementById("green").checked==true){
        selectCar.color="Green";
       greenCar.style.visibility='visible';
    }    
    else if ( document.getElementById("yellow").checked==true)
    {
        selectCar.color="Yellow";
        yellowCar.style.visibility='visible';
    }
    if(comp.length <2 ){
        document.getElementById("errorComp").innerHTML="error:not valid company";
        isError= true;
    }
    else {
        selectCar.company=comp;
    }
    if(cart.length<2){
        document.getElementById("errorCart").innerHTML="error:not valid car type";
        isError= true;
    }
    else {
        selectCar.type = cart;
    }

    if (ing>=800 || ing<=600){
        document.getElementById("errorEngin").innerHTML="error:not valid engine type";
        isError= true;
    }  
    else { 
        selectCar.engine=ing;
    }

    selectCar.seats=numseatv;

    document.getElementById("s8").innerHTML = selectCar.color;
    document.getElementById("s5").innerHTML = selectCar.type;
    document.getElementById("s7").innerHTML = selectCar.seats;
    document.getElementById("s6").innerHTML = selectCar.engine;
    document.getElementById("s4").innerHTML = selectCar.company;

    if(isError==false){
       detailes.style.visibility='visible';
    }

    
}













    
    
  
    
}
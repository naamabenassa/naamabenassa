{

function task1(){
    var num= parseInt(document.getElementById("num1").value);
    var counters = [];//יצרנו מערך מונים של 0 בגודל של 10
    for(var i=0;i<10;i++){
        counters[i]=0;
    }
    var randomArray=[];//יצרנו מערך חדש בגודל נאם, כשבכל תא ספרה בין 0-9
    for(i=0; i<num;i++){       
        randomArray[i]=Math.floor(Math.random()*10);       
        document.getElementById("p1").innerHTML=arr;
    }
    console.log(randomArray);

    for(var i=0;i<randomArray.length;i++){
        var digit = randomArray[i];
        counters[digit]++;
        console.log("found: "+randomArray[i]);
        console.log("counters array:" +counters);
    }

    var tempMaxDigit = 0; //Guessing 0 appears the most times- saving 0 index
    var tempMaxCount = counters[tempMaxDigit];//Guessing 0 appears the most times- saving 0 count

    for(var i=1; i<counters.length; i++){ 
        if (counters[i] > tempMaxCount){
            console.log("Digit "+i +" appears more time than digit "+ tempMaxDigit)
            tempMaxDigit = i; //the digit
            tempMaxCount = counters[i];            
        }
    }
    document.getElementById("s1").innerHTML = tempMaxDigit;

}

  
  

//task2
//;
    var task10_operator = "";
    var task10_leftNumber = 0;
    var rightNumber = 0;
    var showHistory = false; //hidden

    function toggleShowhistory(){
        var pathElement =  document.getElementById("path");
        if (showHistory){
            pathElement.style.visibility='hidden';
            showHistory = false;           
        }else{
            pathElement.style.visibility='visible';
            showHistory = true;
        }
    }
    
    function task10_addNum(number){
      console.log("task10_addNum:"+number); 
      var screenElemnet = document.getElementById("result");  
        if (rightNumber == 0 || task10_operator ==="="){ //if 0 in right number OR after using =, need to override number
            screenElemnet.innerHTML = number; 
            rightNumber = number;
            if (task10_operator ==="="){
                task10_operator= "";
            }
        }else {
            rightNumber = rightNumber*10+number;
            screenElemnet.innerHTML +=number;      
        }
        
    }
    //preforme action by "task10_operator" on parameter screen vlue task10_leftNumbere, and returns it
    //zerp task10_operator and task 10 result
    function task10_calculate(screenValue){
        switch (task10_operator) {
            case '+':
                result = task10_leftNumber + screenValue
            break;
            case "-":
                result = task10_leftNumber - screenValue;
            break;
            case "*":
                result = task10_leftNumber * screenValue;
            break;
            case "/":
                result = task10_leftNumber / screenValue;
                break;
            default:
            console.log("actionName not matched")
        }
        console.log("task10_calculate: result is: "+task10_leftNumber+" the action is:"+task10_operator+"screenvalue is:" + screenValue );
        task10_operator = "";
        task10_leftNumber = 0;
        return parseInt(result);
    }
    
    function task10_actionClick(actionName){
        document.getElementById("path").innerHTML += rightNumber;        
        switch (actionName) {        
            case 'clr':
                task10_operator = "";
                task10_leftNumber = 0;
                document.getElementById("result").innerHTML = "";
                rightNumber = 0;                
            break;
            case "=":  //4 (result) + (action) 5 (screen) =
                var res =  task10_calculate(rightNumber);
                document.getElementById("result").innerHTML= res;
                document.getElementById("path").innerHTML += actionName+res+"<br />";
                rightNumber =0;
                task10_operator="=";
                
            break;        
            case "+": //problem is when multiple actions were pressed
            case "-": 
            case "*":
            case "/": //(((5 + 6) - 8) * 9) - 0 
                document.getElementById("path").innerHTML += actionName;
                if (task10_operator === "") { //no previous action
                    task10_leftNumber =  rightNumber;                                
                }else {
                    task10_leftNumber = task10_calculate(rightNumber)
                    
                }       
                task10_operator = actionName;        
                document.getElementById("result").innerHTML = "";
                rightNumber = 0;
                console.log("res "+task10_leftNumber+" actoin "+actionName);
                break;
            default:
                console.log("actionName not matched");
        }

    }



    //task 3

function isPrime(x){
    if (x ==1 || x == 2){
        return true;
    }
    for (i=2;i<x;i++){
        if (x % i ==0){
            return false;
        }
    }
    return true;
}


function task3(){
  primeArray=[];
  randomArray=[];
  var randomNum = Math.floor(Math.random()*(20-6)+6);  
  console.log(randomNum);
  document.getElementById("sp1").innerHTML=randomNum;


  for(var i=0; i<randomNum;i++){
    randomArray[i]=Math.floor(Math.random()*(9-1)+1); 
    console.log("index is:" + i + " and number is:"+  randomArray[i]);
  }
    console.log(randomArray);
    document.getElementById("sp2").innerHTML=randomArray;

  for(var i=0; i<randomArray.length;i++){
    if (isPrime(randomArray[i]) && !primeArray.includes(randomArray[i])){
        primeArray.push(randomArray[i]);
    }

  }
   document.getElementById("sp3").innerHTML= primeArray;
}




var dicesImgs = ["Dice free icon 1.jpeg",
"Dice free icon 2.jpeg",
"Dice free icon 3.jpeg",
"Dice free icon 4.jpeg",
"Dice free icon 5.jpeg",
"Dice free icon 6.jpeg"];


function retriggerAnimation(element){
    element.style.animation = 'none';
    element.offsetHeight; /* trigger reflow */
    element.style.animation = null; 
}

function task4(){
    
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    if (dice1.className == "dices"){
        dice1.className = "dices-rotate";
        dice2.className = "dices-rotate";
    }else {
        retriggerAnimation(dice1);
        retriggerAnimation(dice2);
    }
    
    

    var random1= Math.floor(Math.random()*(7-1)+1);
    var random2= Math.floor(Math.random()*(7-1)+1); 
    console.log(random1);
    console.log(random2);
    var sumRandom= random1+random2;
    document.getElementById("dice1").src = dicesImgs[random1-1];//arr[i]
    document.getElementById("dice2").src = dicesImgs[random2-1];
    document.getElementById("sp4").innerHTML=sumRandom;
}




}

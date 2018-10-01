{

function task1(){
        var i;
        var counter="";
        for(i=-50;i<380; i++){
            if( i%2==0)
            counter +=" "+i;
           // counter= counter+" "+i;
        }
        document.write(counter);
}
function task2a(){
    var i ;
    for( i=0; i<1000; i++){
      var random =Math.floor(Math.random(i) * 1001-1) +1;
      document.getElementById("randomN").innerText=random;
    }
}
function task2b(){
    var input = document.getElementById("inputA").value;
    var rev =input.split('').reverse().join('');
    document.getElementById("inputA").value=rev;
}
function task3(){
    var str= Number.parseFloat(document.getElementById("inputB").value);
    if (Number.isInteger(str)){
        str2=str.toString().length;
        document.getElementById("int").innerHTML=str2;
    }
    else{
       document.getElementById("int").innerHTML="this is not an integer";
    }
}


function task4(){
    var max=0;
    var y= Math.floor(Math.random() * (10000+10000+1)+(-10000));
 
    while(y>0){
       if(y>max){
         max=y;  
       }
       y= Math.floor(Math.random() *  (10000+10000+1)+(-10000));
   }
   return max;
}

function task4a(){
    document.getElementById("int2").innerHTML=task4();
}
function task5(){
   var str=document.getElementById("space").value;
   var buffer = ""; 
   var i;
   if(str.includes(" ")){
        document.getElementById("toSpace").innerHTML=  "Null";
        return;
    }
   for(i=0;i<str.length;i++){
        var charati = str.charAt(i);
        if(charati>='A' && charati<='Z'){
            buffer = buffer + " " + charati; //upper case
        }else {
            buffer = buffer + charati; //lowercase
        }
    } 
     document.getElementById("toSpace").innerHTML= buffer; 
}


function task6(){
    var str=document.getElementById("ifPolindrom").value;
    var poli= str.split('').reverse().join('') ;
    if (poli==str){
       document.getElementById("trueFals").innerHTML="polindrom";
    }
    else {
    document.getElementById("trueFals").innerHTML="not polindrom";
    }
}

function task7(){
    var str=document.getElementById("inputSort").value;
    var arr =str.split("");
    var i,j;
    for (j=arr.length-1; j>0; j--){
        for(i=0; i<j; i++){
            console.log("i is "+ i + " j is "+ j);
            console.log("before:"+arr);       
            if(arr[i]>arr[i+1]){ 3>1
                var x=arr[i]; //3
                arr[i]= arr[i+1];//1
                arr[i+1]= x;
            }
            console.log("after:"+arr);       
        }
    }
    var toString= arr.join("");
    document.getElementById("sort").innerHTML=toString;
}

function task8(){
  var str1 =document.getElementById("str1").value;
  var str2 =document.getElementById("str2").value;
  var counter = 0;
  var nextindex =0;
    while (true){
        var offset= str1.indexOf(str2,nextindex);//מחפש את  המחרוזת הקטנה מ-0 ומחזיר מיקום
        if (offset == -1){//אם המיקום יצא-1 זה אומר שמהחרוזת לא נמצאה 
            break;
        }
        counter = counter +1;
        nextindex= offset + str2.length -1 +1;
        if (nextindex >= str1.length){
           break; 
        } 
    }
      document.getElementById("shortInBig1").innerHTML=counter; 
}

function task9(){
    var str=document.getElementById("str").value; 
    console.log("string from element: "+ str); 
    var buffer="";
    for(var i=0; i< str.length; i++) {
        var charati = str.charAt(i);
        console.log("i is " + i + "charati is " +charati );
        var parseResult = parseInt(charati);
        console.log("parseint of "+charati+  " is " + parseResult );      
      
        if (isNaN(parseResult)){ //parseResult ==letter
            console.log("parseResult is NaN");
           buffer=buffer+charati;
        }else {// is namber
            console.log("parseResult is number");
        }
    }
    document.getElementById("noNum").innerHTML=buffer;
}




//task 10///

var task10_action = "";
var task10_result = 0;

function task10_num(number){
   //console.log(number);
    var screen = document.getElementById("result").innerHTML;
    if (screen == "0") {
        document.getElementById("result").innerHTML = number;
    }else {
        document.getElementById("result").innerHTML += number;
       // document.getElementById("result").innerHTML =  document.getElementById("result").innerHTM + number;
     
    }
}

function task10_calculate(screenValue){//ל לוקחת את המספר ששמרנו במשתנה טאסק רזולט ועושה פעולה על מה שיש על המסך 
    var result = 0;
    switch (task10_action) {
        case 'add':
            result = task10_result + screenValue;
        break;
        case 'sub':
            result = task10_result - screenValue;
        break;
        case 'mul':
            result = task10_result * screenValue;
        break;
        case 'div':
            result = task10_result / screenValue;
            break;
        default:
        console.log("actionName not matched")
    }
    task10_action = "";
    task10_result = 0;
    return result;    
}

function task10_actionClick(actionName){
    var screenValue = parseInt(document.getElementById("result").innerHTML);
    switch (actionName) {        
        case 'clr':
            task10_action = "";
            task10_result = 0;
            document.getElementById("result").innerHTML = 0;
        break;
        case 'equal':  //4 (result) + (action) 5 (screen) =
            document.getElementById("result").innerHTML =  task10_calculate(screenValue);
        break;        
        case 'add': //problem is when multiple actions were pressed
        case 'sub': 
        case 'mul':
        case 'div': //(((5 + 6) - 8) * 9) - 0 
            if (task10_action != "") {
                task10_result = task10_calculate(screenValue)
            }else {
                task10_result =  screenValue;
            }       
            task10_action = actionName;        
            document.getElementById("result").innerHTML = 0;
            //console.log("res"+task10_result);
            break;
        default:
            console.log("actionName not matched");
    }
}

}

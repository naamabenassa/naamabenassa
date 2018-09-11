{
function fun1(){
    var str1= parseInt(document.getElementById("input1").value);
    if(str1<0){
        document.getElementById("sp1").innerHTML="negative";
    }
    else{
        document.getElementById("sp1").innerHTML="positive";
    }
}

function fun2(){

    var str2= parseInt(document.getElementById("input2").value);
    if(str2%2<1){
        
        document.getElementById("sp2").innerHTML="evevn";
    }
    else{
        document.getElementById("sp2").innerHTML="odd";
    }

}

function fun3(){
    var str3= document.getElementById("input3").value;
    var len =str3.length;

    if (len>1) {
        document.getElementById("sp3").innerHTML="too much";
    }       
    else if (str3 >= 'a' && str3<= 'z' ){
        document.getElementById("sp3").innerHTML="small letter";
    } 
    else if (str3 >= 'A' && str3 <= 'Z'){
        document.getElementById("sp3").innerHTML="capital letter";
    }
}



function fun4(){
    var strright= document.getElementById("input4").value;
    var lenright =strright.length;
    var strleft= document.getElementById("input5").value;
    var lenleft =strleft.length;


    if (lenright>lenleft){
        document.getElementById("p1").innerHTML="The longest";
        document.getElementById("p2").innerHTML="";
        var diff=lenright-lenleft;
        var slicefun = strright.slice(0,lenright-diff);
        document.getElementById("p3").innerHTML=slicefun;
    }
    else if (lenright<lenleft) {
        document.getElementById("p2").innerHTML="The longest";
        document.getElementById("p1").innerHTML="";
        var diff= lenleft-lenright;
        var slicefun = strleft.slice(0,lenleft-diff);
        document.getElementById("p3").innerHTML=slicefun;
    }

}




function fun5(){
    var str5= document.getElementById("input6").value;
    var poli=str5.split('').reverse().join('') ;
        
if (poli==str5){
    document.getElementById("sp4").innerHTML="polindrom";
}

else {
    document.getElementById("sp4").innerHTML="not polindrom";
}

}





}
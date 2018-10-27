
{

var boardArray ;
    var user={
        firstName: " ",
        lastName: " ",
        userName: " ",
        password: " ",
    };

    function firstN(){
        var str= document.getElementById("input1").value;
        //debugger;
        if(str.length<2 ){
            throw "First name should be more than 2 letters {}"
        }
        
        for( var i=0; i<str.length; i++){
            if((str.charAt(i)>='A' && str.charAt(i)<='Z') || (str.charAt(i)>='a' && str.charAt(i)<='z')){
                //do nothing - is the legal condition
            }
            else{
                throw "First name should be only letters";
            }
        }   
        user.firstName= str;   
    }

    function lastN(){
        var str= document.getElementById("input2").value;
        if(str.length<2 ){
            throw "Last name should be more than 2 letters"
        }
        
        for( var i=0; i<str.length; i++){
            if((str.charAt(i)>='A' && str.charAt(i)<='Z') || (str.charAt(i)>='a' && str.charAt(i)<='z')){
                //do nothing - is the legal condition
            }
            else{
                throw "Last name should be only letters";
            }
        }   
        user.firstName= str;  
    }

    function userN(){
        var str= document.getElementById("input3").value;
    // debugger;
        if(str.length<6 || str.lengt>12){
            throw "User name sould be between 6 and 12 characters"
        }
        for(var i=0; i<str.length; i++){
            if((str.charAt(i)>='A' && str.charAt(i)<='Z') || (str.charAt(i)>='a' && str.charAt(i)<='z')){
               
                //do nothing - the good condition
            }
            else{
                throw "User name sould be only letters";
            }
        }
        user.userName= str;  
       
    }

    function pass(){
        var password= document.getElementById("input4").value;
        var verifyPassword= document.getElementById("input5").value;

        if(password.length< 5 ||password.lengt >16){
           throw "Password should be between 6 and 16 letters"
        }
        
       
        if(verifyPassword.length!=verifyPassword.length){
            throw "Passwords are not in the same length";
        }

        for(var i=0; i<password.length; i++){
            if(password[i] != verifyPassword[i]){ //charcters in the same place are not eqaul
                throw "Passwords are not the same";
        }
        user.password = password;  
        }
    }

    function validation(){
        debugger;
        if(val1()==false){
            return;
        }
        if(val2()==false){
            return;
        }
    //  window.location.href='file:///C:/Users/User/Documents/FrontEnd/HomeWork/HW11/HW11.html';
    document.getElementById("p100").innerHTML="Great!";
    }

    function val1(){
        var str1= document.getElementById("in1").value;
        var str2= user.userName;
        var i, j;
        var ok= false;
        for(i=0; i<str1.length; i++){
            for(j=0; j<str2.length; j++){
                if(i==j){
                ok= true;
                }
                else{
                    ok=false;
                }
            }
        }
        return ok;
    }

    function val2(){
        var str1= document.getElementById("in2").value;
        var str2= user.password;
        var i, j;
        var ok= false;
        for(i=0; i<str1.length; i++){
            for(j=0; j<str2.length; j++){
                if(i==j){
                ok= true;
                //document.getElementById("p100").innerHTML="great";
                }
                else{
                    ok=false;
                }
            }
        }
        return ok;
    }


    function checkAll(){
        var message1;
        message1 = document.getElementById("p1");
        try { 
            firstN();
            lastN();
            userN();
            pass();
            window.location = "./HW11c.html"
            
        }
        catch(err) {
            message1.innerHTML =  err;
            
        }
    }


    //Actual soduku

    function CreateBoard(cellsToRemove){
        var tries = 0;
        
        while (true){
            boardArray = [];
            //create alloed numbers arrays
            var rows = [];
            var cols=[];
            var cubes= [];
            for (var i=0;i<9;i++){
                rows.push([]);
                cols.push([]);
                cubes.push([]);
                for (var j=0;j<9;j++){
                    rows[i].push(j+1);
                    cols[i].push(j+1);
                    cubes[i].push(j+1);
                }
            }

            try{
                for (var i=0;i<9;i++){
                    boardArray.push([]);
                    for (var j=0;j<9;j++){
                        var cubsArr = cubes[Math.floor(i/3)*3+Math.floor(j/3)];
                        //get intersection of the relevant row and column and cube
                        var availableNums = rows[i].filter(value => -1 !== cols[j].indexOf(value))
                                                    .filter(value => -1 !== cubsArr.indexOf(value));
                        if (availableNums.length == 0){//stop working when there is no allowed number to add
                            throw (i*9+j);
                        }
                        var randIdx= Math.floor((Math.random() * availableNums.length));
                        var selectedNumber = availableNums[randIdx];
                        boardArray[i].push(selectedNumber.toString());
                        //delete the selected number from all the allowed number arrays
                        rows[i].splice(rows[i].indexOf(selectedNumber),1);
                        cols[j].splice(cols[j].indexOf(selectedNumber),1);
                        cubsArr.splice(cubsArr.indexOf(selectedNumber),1);                       
                    }
                }
                //full solved board - now remove cells for the user to solve
                for (var o=0;o<cellsToRemove;o++){
                    var randomRow = Math.floor((Math.random() * 9));
                    var randomCol = Math.floor((Math.random() * 9));
                    boardArray[randomRow][randomCol]= "";
                }
                printBoard();
                break;
            }catch(err){
                
                tries++;
                if (tries > 10000){
                    break;
                }
            }
        }
    }

    function clearBoard(){
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                boardArray[i][j]="";
            }
        }
    }

    function printBoard(){
        var tbl = document.getElementById("boardTable");
        if (tbl.firstChild != null){
            tbl.removeChild(tbl.firstChild);
        }
        var tblBody = document.createElement("tbody");
        for (var i = 0; i < 9; i++) {
            var row = document.createElement("tr");            
            for (var j = 0; j < 9; j++) {
                var sodukoCell = document.createElement("td");
                var boardValue = boardArray[i][j];
                sodukoCell.textContent = boardValue;
                if (boardValue !=null && boardValue.length != 0){ //make starting numbers not editable
                    sodukoCell.setAttribute("contenteditable", "false");
                }else {
                    sodukoCell.setAttribute("contenteditable", "true");
                }
                sodukoCell.setAttribute("onkeyup","cellValueChanged(this,event)");
                row.appendChild(sodukoCell);
            }
            tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);        
    }

    function cellValueChanged(element,event)
        {
            //console.log("row : "+ element.parentElement.rowIndex + "col: "+element.cellIndex );
            var cubeColumn = element.cellIndex;
            var cubeRow = element.parentElement.rowIndex;
            if (isNaN(element.textContent)==true){ //if the cell content isnt a number delete
                element.textContent = "";
            }else { //save the number to the array                
                boardArray[cubeRow][cubeColumn] = element.textContent;
            }
            
    }

    function isCubeAllNumbers(cubeNum){
        var numbersExist= [];
        for (var i=0;i<9;i++){
            numbersExist[i]=false;
        }

        var cubeFirstRow = Math.floor(cubeNum/3)*3; 
        var cubeFirstColumn = (cubeNum%3)*3; 

        for (row=cubeFirstRow;row < cubeFirstRow+3; row++){
            for ( column= cubeFirstColumn; column< cubeFirstColumn+3; column++){
                var numberInCell = parseInt(boardArray[row][column]);
                if (numberInCell!= NaN && numbersExist[numberInCell-1] == false){
                    numbersExist[numberInCell-1]=true;
                }else {
                    return false;
                }
            }
        }

        for (var i=0;i<9;i++){
            if (numbersExist[i]==false){
                return false;
            }
        }
        return true;
    }

    function isRowNoDuplicates(rowIndex){
        var numbersExist= [];
        for (i=0;i<9;i++){
            numbersExist[i]=false;
        }

        for (column= 0; column< boardArray[rowIndex].length; column++){
            var numberInCell = parseInt(boardArray[rowIndex][column]);
            if (isNaN(numberInCell)){
                continue;
            }
            if (numbersExist[numberInCell-1] == false){
                numbersExist[numberInCell-1]=true;
            }else {
                return false;
            }
        }
        return true;
    }

    function isColumnNoPudlicates(columnIndex){
        var numbersExist= [];
        for (i=0;i<9;i++){
            numbersExist[i]=false;
        }

        for (row= 0; row< boardArray.length; row++){
            var numberInCell = parseInt(boardArray[row][columnIndex]);
            if (isNaN(numberInCell)){
                continue;
            }
            if (numbersExist[numberInCell-1] == false){
                numbersExist[numberInCell-1]=true;
            }else {
                return false;
            }
        }
        return true;
    }



    function checkBoardFullAndValid(){
        if (boardArray == null){
            return false;
        }
        for (var i=0;i<9;i++){
            if (isCubeAllNumbers(i)===false){
                console.log("Cube "+ i + " has duplicate number or isn't full");
                document.getElementById("feedback").innerHTML="feedback: <br/> try again    !! "
                return false;
            }
        }

        for (i=0;i<9;i++){
            if (isColumnNoPudlicates(i)==false){
                console.log("Column "+ i + "has duplicate number");
                document.getElementById("feedback").innerHTML="feedback: <br/> try again!! "
                return false;
            }
        }

        for (i=0;i<9;i++){
            if (isRowNoDuplicates(i)==false){
                console.log("Row "+ i + "has duplicate number");
                document.getElementById("feedback").innerHTML="feedback: <br/>try again!! "
                return false;
            }
        }
        document.getElementById("feedback").innerHTML="feedback: <br/>CONGRATULATION! you did it!! "
        console.log("All is well");
        return true;     
    }

    function copyBoard(sourceArray){
        var tempArr = [];
        for (var i = 0; i < 9; i++) {
            tempArr.push([]);          
            for (var j = 0; j < 9; j++) {
                tempArr[i].push(sourceArray[i][j])
            }
        }
        return tempArr;
    }

    function level(diff){
        choosLevel.style.visibility='hidden';
        boardDiv.style.visibility='visible';
       
       
        switch (diff){
            case 1:
                CreateBoard(16);
                break;
            case 2:
                CreateBoard(32);
                break;
            case 3:
                CreateBoard(50);
            default:
             console.log("diff not matched")
        }
        printBoard();
        
    }
    

    function newGame(){
        choosLevel.style.visibility='visible';
        boardDiv.style.visibility='hidden';
    }

    function printNameToWelcome(name){
        document.getElementById("userName").innerHTML = name;
    }

}

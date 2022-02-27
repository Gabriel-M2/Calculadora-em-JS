
let numeros;
let aux = 0;
let op;
let num1,num2;
function nums(num){
    
    numeros = document.getElementById("numeros").innerText

 switch(num){
    case 1:  

    if(numeros.length <22){

    if (numeros == "0"){
        document.getElementById("numeros").innerText = "1";
    }else{
        document.getElementById("numeros").innerText = numeros+"1";
    }
    }
    break;
    
    case 2:  
    if(numeros.length <22){
    if (numeros == "0"){
        document.getElementById("numeros").innerText = "2";
    }else{
        document.getElementById("numeros").innerText = numeros+"2";
    }
    }
    break;
    case 3: 
    if(numeros.length <22){ 
    if (numeros == "0"){
        document.getElementById("numeros").innerText = "3";
    }else{
        document.getElementById("numeros").innerText = numeros+"3";
    }
    }
    break;
    case 4:  
    if(numeros.length <22){
    if (numeros == "0"){
        document.getElementById("numeros").innerText = "4";
    }else{
        document.getElementById("numeros").innerText = numeros+"4";
    }
    }
    break;
    case 5:  
    if(numeros.length <22){
        if (numeros == "0"){
            document.getElementById("numeros").innerText = "5";
        }else{
            document.getElementById("numeros").innerText = numeros+"5";
        }
    }
    break;
    case 6:  
    if(numeros.length <22){
        if (numeros == "0"){
            document.getElementById("numeros").innerText = "6";
        }else{
            document.getElementById("numeros").innerText = numeros+"6";
        }
    }   
    break;
    case 7:  
    if(numeros.length <22){
        if (numeros == "0"){
            document.getElementById("numeros").innerText = "7";
        }else{
            document.getElementById("numeros").innerText = numeros+"7";
        }
    }
    break;
    case 8:  
    if(numeros.length <22){
        if (numeros == "0"){
            document.getElementById("numeros").innerText = "8";
        }else{
            document.getElementById("numeros").innerText = numeros+"8";
        }
    }
    break;
    case 9:  
        if(numeros.length <22){
        if (numeros == "0"){
            document.getElementById("numeros").innerText = "9";
        }else{
            document.getElementById("numeros").innerText = numeros+"9";
        }
    }
    break;
    case 0:  
    if(numeros.length <22){
        if (numeros == "0"){
            
        }else{
            document.getElementById("numeros").innerText = numeros+"0";
        }
        break;
    }
    case ",":
        if(numeros.length <22){
            if (numeros == "0"){
                alert("!!!!!")
            }else{
                if(aux == 0){
                document.getElementById("numeros").innerText = numeros+".";
                }
            }
        }
        aux = 1
    break;
    case "ac":
        if (numeros == "0"){

        }
        if(numeros.length <=1){
            document.getElementById("numeros").innerText ="0"; 
        }
        if(numeros != "0"){
            let tamanho = numeros.length -1
            document.getElementById("numeros").innerText = numeros.substr(0,tamanho);
        }
        break;
    case "del":
        document.getElementById("numeros").innerText ="0";
        aux = 0;
        break;
    case"multi":
        num1 = numeros
        document.getElementById("numeros").innerText ="0";
        op = "multi"
        aux = 0;
        break;
    case"divi":
        num1 = numeros
        document.getElementById("numeros").innerText ="0";
        op = "divi"
        aux = 0;
        break;
    case"mais":
        num1 = numeros
        document.getElementById("numeros").innerText ="0";
        op = "mais"
        aux = 0;
        break;
    case"menos":
        num1 = numeros
        document.getElementById("numeros").innerText ="0";
        op = "menos"
        aux = 0;
        break;

    case"igual":
        Calc()

}

function Calc(){
    num2 = numeros;

    switch(op){
        
        case "multi":
            document.getElementById("numeros").innerText = num1 * num2;
        break;
        case "mais":
            let aux1 = parseInt(num1)
            let aux2 = parseInt(num2)
            document.getElementById("numeros").innerText = aux1 + aux2;
        break;
        case "menos":
            document.getElementById("numeros").innerText = num1 - num2;
        break;
        case "divi":
            document.getElementById("numeros").innerText = num1 / num2;
        break;
    }

    op = "";
    aux = 0;

}

}
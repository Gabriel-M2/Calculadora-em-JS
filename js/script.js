
let numeros;
let aux = 0;
let op;
let num1, num2;
function nums(num) {

    numeros = document.getElementById("numeros").innerText

    switch (num) {
        case 1:

            if (numeros.length < 20) {

                if (numeros == "0") {
                    Inner(1)
                } else {
                    Inner(numeros+1)
                }
            }
            break;

        case 2:
            if (numeros.length < 20) {
                if (numeros == "0") {
                    Inner(2)
                } else {
                    Inner(numeros+2)
                }
            }
            break;
        case 3:
            if (numeros.length < 20) {
                if (numeros == "0") {
                    Inner(3)
                } else {
                    Inner(numeros+3)
                }
            }
            break;
        case 4:
            if (numeros.length < 20) {
                if (numeros == "0") {
                    Inner(4)
                } else {
                    Inner(numeros+4)
                }
            }
            break;
        case 5:
            if (numeros.length < 20) {
                if (numeros == "0") {
                    Inner(5)
                } else {
                    Inner(numeros+5)
                }
            }
            break;
        case 6:
            if (numeros.length < 20) {
                if (numeros == "0") {
                    Inner(6)
                } else {
                    Inner(numeros+6)
                }
            }
            break;
        case 7:
            if (numeros.length < 20) {
                if (numeros == "0") {
                    Inner(7)
                } else {
                    Inner(numeros+7)
                }
            }
            break;
        case 8:
            if (numeros.length < 20) {
                if (numeros == "0") {
                    Inner(8)
                } else {
                    Inner(numeros+8)
                }
            }
            break;
        case 9:
            if (numeros.length < 20) {
                if (numeros == "0") {
                    Inner(9)
                } else {
                    Inner(numeros+9)
                }
            }
            break;
        case 0:
            if (numeros.length < 20) {
                if (numeros == "0") {

                } else {
                    Inner(numeros+0)
                }
                break;
            }
        case ",":
            if (numeros.length < 20) {
                if (numeros == "0") {
                    
                } else {
                    if (aux == 0) {
                        document.getElementById("numeros").innerText = numeros + ".";
                    }
                }
            }
            aux = 1
            break;
        case "ac":
            if (numeros === "0") {

            }
            if (numeros.length <= 1) {
                Del()
            }
            if (numeros !== "0") {
                let tamanho = numeros.length - 1
                document.getElementById("numeros").innerText = numeros.substr(0, tamanho);
            }
            break;
        case "del":
            Del()
            aux = 0;
            break;
        case "multi":
            num1 = numeros
            Del()
            op = "multi"
            aux = 0;
            break;
        case "divi":
            num1 = numeros
            Del()
            op = "divi"
            aux = 0;
            break;
        case "mais":
            num1 = numeros
            Del()
            op = "mais"
            aux = 0;
            break;
        case "menos":
            num1 = numeros
            Del()
            op = "menos"
            aux = 0;
            break;

        case "igual":
            Calc()

    }

    function Calc() {
        num2 = numeros;

        switch (op) {

            case "multi": 6
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

        function Inner(text){
            document.getElementById("numeros").innerText = text;
        }
        function Del(){
            document.getElementById("numeros").innerText = '0';
        }


}
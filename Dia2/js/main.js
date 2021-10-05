/*let edad = prompt("Cuantos años tienes?")

if(edad < 18){
    document.write("Todavia eres un yogurín, vete pa tu casa");
}
else if(edad >= 18 && edad < 65) {
    document.write("Eres mayor de edad, tira para adentro.")
}
else{
    document.write("Señor, vuelva a casa no vaya a ser que se haga daño")
}


let edad = prompt("Cuantos años tienes?")

function adivinar(){
    
    if(edad < 18){
        document.write("Todavia eres un yogurín, vete pa tu casa");
    }
    else if(edad >= 18 && edad < 65) {
        document.write("Eres mayor de edad, tira para adentro.")
    }
    else{
        document.write("Señor, vuelva a casa no vaya a ser que se haga daño")
}
}

adivinar()*/


let numero = Number(prompt("Piensa un número del 1 al 100"));


function adivinarNumero(){
    if(numero === 50){
        alert("Has dado en el clavo!");
        
    }
    else if(numero < 50){
        alert("Te has quedado corto");
    }
    else {
        alert("Te has pasado");
    }
        
}

adivinarNumero()
        





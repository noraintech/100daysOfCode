


let nombre = prompt('¿Cómo te llamas?');
let edad = prompt('Cuantos años tienes?');


if(edad >= 18){
    document.write('Bienvenido, ' + nombre + '.')
    console.log('admitido');
    
} 
else if( edad < 18) {
    document.write('Lo siento, ' + nombre)
    console.log('No admitido')
}


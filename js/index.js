let estadia = 0
let destinoSelect = 0
let dias = 0


console.log ("Hola, Viajeros!")
let nombre = prompt ("Por favor. Ingrese su nombre")
alert("Hola " + nombre + ". Bienvenido/a!")

let destino= "¿A que destino desea viajar? \n" +
                       "1) Humahuaca \n" +
                       "2) Purmamarca \n" +
                       "3) Iruya \n" +
                       "4) Cafayate \n" +
                       "5) Cabra Corral \n" +
                       " \n" +
                       "Ingrese el Destino Deseado."
                     
let costoViaje = true

while(costoViaje) {
    inicio()
    costoViaje = confirm("¿Deseas cotizar otro viaje?")
}

function inicio() {
    destinoSelect = parseInt(prompt(destino))
    console.log(`el destino seleccionado es ${destinoSelect}`)

    if ( destinoSelect !== 1 && destinoSelect !== 2 && destinoSelect !== 3 && destinoSelect !== 4 && destinoSelect !== 5) {
        alert("Destino Incorrecto")
        return
     } 
        dias = parseInt(prompt("Ingresa la cantidad de Dias: \n"+
                                "estadias disponibles de 1 a 7 dias"))
        if (dias !== NaN && dias >= 1 && dias <= 7) {
              
            let cotizacion = 0
            switch(destinoSelect) {
                case 1: 
                    estadia = 22400
                    cotizacion = dias * estadia
                    break
                case 2: 
                    estadia = 19000
                    cotizacion = dias * estadia
                    break
                case 3:
                    estadia = 24700
                    cotizacion = dias * estadia
                    break
                case 4:
                    estadia = 31500
                    cotizacion = dias * estadia
                    break
                case 5:
                    estadia = 26200
                    cotizacion = dias * estadia
                    break
                default:
                    console.error("estadia incorrecta.")
                    return 
            }
            alert(`El Costo Final por el Viaje All Inclusive por ${dias} dia/dias es de: $ ${cotizacion}`)
        } else {
            alert ("Eleccion incorrecta, disponible de 1 a 7 dias")
        }
}
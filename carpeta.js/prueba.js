// function dineroAhorrado(dinero,deudas) {
//     let dineroTotal= dinero - deudas
//     console.log("mi dinero ahorrado es "+ dineroTotal+ "$ pesos.")
// }
// console.log(dineroAhorrado(5000,200))

// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");


// function presentacion(name,lastname,nickname) {
// let nombreCompleto = name +" "+ lastname 

// console.log("Me llamo "+ nombreCompleto + " pero prefiero que me digan "+ nickname+ ".")
    
// }
// presentacion("Luis","barrionuevo","Luismi")
// const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//    case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
//        break;
//    case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//        break;
//    case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//        break;
//    case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//        break;
// }

// let tipoDeSuscripcion = "Basic"

// if (tipoDeSuscripcion =="Free") {
//     console.log("Solo puedes tomar los cursos gratis");
    
// }else if(tipoDeSuscripcion=="Basic"){
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// }else if(tipoDeSuscripcion=="Expert"){
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// }else if(tipoDeSuscripcion=="ExpertPlus"){
//     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
// }
//////FOR
// let eleccionSub= prompt("ingresa el tipo de sub que tienes")

// let tipoDeSubscripcion=["Free","Basic", "Expert","ExpertPlus"]

// let infoSubscripcion= [" solo puedes tomar los cursos gratis", " puedes tomar casi todos los cursos de platzi durante un mes"," puedes tomar casi todos los cursos de platzi durante un anio"," puedes tomar casi todos los cursos de platzi con alguien mas durante un anio"]

// for (let i = 0; i < tipoDeSubscripcion.length; i++) {
//     if (eleccionSub===tipoDeSubscripcion[i]) {
//         console.log("Su subscripcion es de tipo: "+ tipoDeSubscripcion[i] + infoSubscripcion[i])
        
//     }

    
// }

//converir ciclo for en while
// for (let i = 0; i < 5; i++) {
//     console.log("El valor de i es: " + i);
// }
// let a = 0
// while (a<5) {
//     console.log("El valor de i es: "+ a)
//     a++
    
// }
// for (let i = 10; i >= 2; i--) {
//     console.log("El valor de i es: " + i);
// }

// let b = 10
// while (b>=2) {
//     console.log("El valor de b es: "+ b);
//     b--
    
// }

///CUanto es 2 + 2

// let preguntaUsuario= Number(prompt("Cuanto es 2 + 2"))


// while (preguntaUsuario!==4) {
    
//     preguntaUsuario= Number(prompt("Cuanto es 2 + 2"))
//     alert("Incorrecto")
// }
// alert("Felicidades")

////array
// function primerElemento(array) {
//     console.log("El primer elemento de tu array es "+ array[0])
    
// }

// primerElemento(["Ura",2,3,3])
// function primerElemento(array) {
//     for (let i = 0; i < array.length; i++) {
//        console.log("Tu array esta compuesto por "+ array[i])
        
//     }
    
    
// }

// primerElemento([2,3,4])

// let myCar = {
//     marca: 'Ford',
//     modelo: 'Mustang',
//     year: 1969
//   };

//   function leerObjeto(object) {
//   for (const key in object) {
    
//         console.log(object[key])
        
    
//   }}
//   leerObjeto(myCar)
    /////forma mas facil
  // let myCar = {
  //   marca: 'Ford',
  //   modelo: 'Mustang',
  //   year: 1969
  // };
  // function leerObjeto(object){
  //    let objetoConvert = Object.values(object)
  //     for (let i = 0; i < objetoConvert.length; i++) {
  //                  console.log("Tu objeto esta compuesto por "+ objetoConvert[i])
                    
  //               }
  // }
  // leerObjeto(myCar)


  // function imprimirElementosArray(array){
  //   for(let i = 0; i<array.length;i++){
  //     console.log("Tu array esta compuesto por "+ array[i])
  //   }
  // }
  // let bocaJugadores = {
  // jugador1: "Medina",
  // jugador2: "Orsini",
  // jugador3: "Briasco",
  // }
  // let arr = Object.values(bocaJugadores)
  // imprimirElementosArray(arr)
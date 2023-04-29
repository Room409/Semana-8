//1-Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se 
//deberá imprimir en pantalla

function suma(num1, num2) {  //crea una funcion suma con 2 parametros
    console.log(num1 + num2) //recibe y suma los 2 argumentos y retorna por console.log
}
suma(10, 10) //Damos los 2 argumentos para la suma

////////////////////////////////////////////////////////////////////////
//2-Un estudiante realiza 4 exámenes, calcular el promedio de estos

function promedio(nota1, nota2, nota3, nota4) {
    console.log('promedio ' + (nota1 + nota2 + nota3 + nota4) / 4)
}
promedio(13, 15, 14, 10)


////////////////////////////////////////////////////////////////////////
//3-Calcular el área de un rectángulo

function calcularRectangulo(length, height) {
    console.log("Rectangulo " + length * height)
}
calcularRectangulo(20, 10)


////////////////////////////////////////////////////////////////////////
//4-Calcular el area de un triangulo

function calcularTriangulo(base, altura) {
    console.log('Triangulo ' + (base * altura) / 2)
}
calcularTriangulo(10, 20)


////////////////////////////////////////////////////////////////////////
//5-Calcular el área de una circunferencia

function calcularCircurferencia(radio) {
    console.log('Circunferencia ' + Math.PI * radio * radio)
}
calcularCircurferencia(10)


//////////////////////////////////////////////////////////////////////////
// 6-Determinar el sueldo semanal de un trabajador basándose en sus horas 
// trabajadas y su salario de hora hombre

function sueldoSemanal(salarioHora, horasTrabajadas) {
    let sueldo = horasTrabajadas * salarioHora
    console.log('El sueldo semanal del trabajador es: ' + sueldo)
}

sueldoSemanal(50, 30)


/////////////////////////////////////////////////////////////////////////
// 7-Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. 
//Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, 
//pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a 
//resolver el problema, determinando cuantas pulgadas debe pedir con base en 
//los metros que requiere. Represéntelo mediante el diagrama de flujo y el 
//pseudocódigo (1 pulgada = 0.0254 m)

function metrosApulgadas(longitud) {
    console.log('Metros a pulgadas ' + longitud * 39.37)
}
metrosApulgadas(20)


/////////////////////////////////////////////////////////////////////////
// 8-. Una empresa importadora desea determinar cuántos dólares puede adquirir 
// con equis cantidad de dinero peruano

function conversion(dineroPeruano) {
    console.log('Dolar a sol ' + dineroPeruano / 3.68)
}
conversion(470)

////////////////////////////////////////////////////////////////////////
// 9- Una empresa que contrata personal requiere determinar la edad de las 
// personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se 
// les pregunta el año en que nacieron

function edad(fechaNacimiento) {
    console.log('edad: ' + (new Date().getFullYear() - fechaNacimiento));
}
edad(2000);

/////////////////////////////////////////////////////////////////////////
// 10- Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la
// edad de la persona de menor edad

function encontrarMenor(edad1, edad2, edad3) {
    let menor = Math.min(edad1, edad2, edad3);
    console.log('El menor es ' + menor);
}

encontrarMenor(20, 10, 25);


//////////////////////////////////////////////////////////////////////////
// 11- Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un 
// año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 
// años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo 
// y represéntelo ,que permita determinar el bono que recibirá un trabajador

function calcularBono(antiguedad) {
    let bono = 0;

    if (antiguedad == 1) {
        bono = 100;
    } else if (antiguedad == 2) {
        bono = 200;
    } else if (antiguedad == 3) {
        bono = 300;
    } else if (antiguedad == 4) {
        bono = 400;
    } else if (antiguedad == 5) {
        bono = 500;
    } else if (antiguedad > 5) {
        bono = 1000;
    }
    console.log(`El bono para un trabajador con ${antiguedad} años de antigüedad es de $${bono}.`);
}

///////////////////////////////////////////////////////////////////////////
// 12-Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual 
// durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido 
// en cada uno de los 6 años? Realice el algoritmo y representan la solución, 
// utilizando el ciclo apropiado

let salarioIncial = 1500
let bono = 1.10
let salarioTotal = 1500

if (salarioTotal) {
    salarioTotal = salarioTotal * bono

    console.log(`Salario del año 1: ${salarioTotal.toFixed(2)}`)
}
if (salarioTotal) {
    salarioTotal = salarioTotal * bono

    console.log(`Salario del año 2: ${salarioTotal.toFixed(2)}`)
}
if (salarioTotal) {
    salarioTotal = salarioTotal * bono

    console.log(`Salario del año 3: ${salarioTotal.toFixed(2)}`)
}
if (salarioTotal) {
    salarioTotal = salarioTotal * bono

    console.log(`Salario del año 4: ${salarioTotal.toFixed(2)}`)
}
if (salarioTotal) {
    salarioTotal = salarioTotal * bono

    console.log(`Salario del año 5: ${salarioTotal.toFixed(2)}`)
}
if (salarioTotal) {
    salarioTotal = salarioTotal * bono

    console.log(`Salario del año 6: ${salarioTotal.toFixed(2)}`)
}


////////////////////////////////////////////////////////////////////////////
// 13-Realice un algoritmo para leer las calificaciones de N alumnos y determine el
// número de aprobados y reprobados

function calcularNotas(alumno1, alumno2, alumno3, alumno4, alumno5) {
    let aprobados = 0
    let reprobados = 0

    if (alumno1 >= 14) {
        console.log(alumno1 + " aprobado")
        aprobados++
    } else {
        console.log(alumno1 + " desaprobado")
        reprobados++
    }

    if (alumno2 >= 14) {
        console.log(alumno2 + " aprobado")
        aprobados++
    } else {
        console.log(alumno2 + " desaprobado")
        reprobados++
    }

    if (alumno3 >= 14) {
        console.log(alumno3 + " aprobado")
        aprobados++
    } else {
        console.log(alumno3 + " desaprobado")
        reprobados++
    }

    if (alumno4 >= 14) {
        console.log(alumno4 + " aprobado")
        aprobados++
    } else {
        console.log(alumno4 + " desaprobado")
        reprobados++
    }

    if (alumno5 >= 14) {
        console.log(alumno5 + " aprobado")
        aprobados++
    } else {
        console.log(alumno5 + " desaprobado")
        reprobados++
    }
    console.log(`El numero de aprobados es de: ${aprobados} y de desaprobados es de: ${reprobados}`)
}

calcularNotas(10, 12, 14, 12, 11)

/////////////////////////////////////////////////////////////////
// 14-Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea 
// contabilizar, de un lote de N focos, el número de focos de cada color que hay en 
// existencia


/////////////////////////////////////////////////////////////////////
// 15-Realice un algoritmo para determinar si una persona puede votar con base en 
// su edad en las próximas elecciones

function votacion(nacimiento){
    year=2023
    if(year - nacimiento >= 18){
        console.log('Tu puedes votar')
    }else{
        console.log('Tu no puedes votar')
    }
}
votacion(2006)


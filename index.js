// _____   ____  _____  _______     __
// |  __ \ / __ \|  __ \|  __ \ \   / /
// | |__) | |  | | |  | | |  | \ \_/ / 
// |  _  /| |  | | |  | | |  | |\   /  
// | | \ \| |__| | |__| | |__| | | |   
// |_|  \_\\____/|_____/|_____/  |_|   
                                    

/* Multiplicar tabla del 7 */
function tabladel7() 
{
    var numeromultiplo = 7; // numero por default = 7 para multiplicar
    var multnum = document.getElementById("multnum").value;  // guardar valor de los input de html
    var resultado = (numeromultiplo * multnum); // multiplicar variables
    document.getElementById('Resultadotabla').innerHTML = resultado; // mostrar resultado en html
}

 /* Verificar nota de estudiantes */
function cuadernoDeNotas()
{
     // guardar valor de los input de html
    var Nota1 = document.getElementById("nota1").value; 
    var Nota2 = document.getElementById("nota2").value;
    var Nota3 = document.getElementById("nota3").value;
    var Nota4 = document.getElementById("nota4").value;
    var Exam = document.getElementById("exam").value;
    

    // tuve que usar parseFloat para mostrar numeros decimales de lo contrario no muestra los valores reales
    var sumanotas = (parseFloat(Nota1) + parseFloat(Nota2) + parseFloat(Nota3) + parseFloat(Nota4))/4 * 0.70;

    var porcexam = Exam * 0.30;

    var notafinal = sumanotas + porcexam;

    if(notafinal < 70)
    {
        document.getElementById('resultadoalumno').innerHTML = 'Su nota final es: ' + notafinal  + " usted ha reprobado la materia";
    }
    else
        document.getElementById('resultadoalumno').innerHTML = "Su nota final es: " + notafinal  + " usted ha aprobado la materia";


}

 /* Convertir Fahrenheit a Celsius*/
function convertirFaC()
{
    var Fahrenheit = document.getElementById("fahrenheit").value; // guardar valor de los input de html


    var Celsius = (parseFloat(Fahrenheit - 32) * 5 / 9); // formula para convertir de C a F (Valor - 32 * 5 / 9)

    document.getElementById('resultadoscelsius').innerHTML = "El Resultado es: " + Celsius;

}

 /* Convertir Celsius a Fahrenheit*/
function convertirCaF()
{
    var Celsius = document.getElementById("celsius").value;


    var Fahrenheit = (parseFloat(Celsius * 9 / 5) + 32); // formula para convertir de F a C (Valor * 9 /5 + 32)

    document.getElementById('resultadosfahrenheit').innerHTML = "El Resultado es: " + Fahrenheit;

}

 /* Verificar numeros negativos,neutros y positivos*/
function verificarnumeros()
{
    // variables iguales a 0 por default
    neutros = 0;
    positivos = 0;
    negativos = 0;
    for (x=1; x <=20; x++)  // mostrar alerta 20 veces para verificar 20 numeros
    {
        n = Number(prompt()); // mostrar js alert para ingresar numero
        if (n==0) // si es = a 0 sumar numero neutro
        {
            neutros = neutros+1;
        } 
        else 
        {
            if (n <0) // si es menor que 0 suma uno a los numeros negativos
            {
                negativos = negativos+1;
            } 
            else  // si es menor que 0 suma uno a los numeros positivos
            {
                positivos = positivos+1;
            }
        }
    }
    /// imprimir en HTML los resultados conseguidos
    document.getElementById('resultadoneutro').innerHTML = "Los Numeros neutros son: " + neutros;
    document.getElementById('resultadopositivo').innerHTML = "Los Numeros positivos son: " + positivos;
    document.getElementById('resultadonegativo').innerHTML = "Los Numeros negativos son: " + negativos;


    
    // var n = document.getElementById("getnumber").value;
    // var neutro = 0;
    // var negativo = 0;
    // var positivo = 0;

    // if(n == 0) /* neutro */
    // {
    //     var neutro = +1;
    //     document.getElementById('numeroneutro').innerHTML = "Los Numeros neutros son: " + neutro;
    // }
    // else if (n < 0)  /* negativo */
    // {
    //     var negativo = +1;
    //     document.getElementById('numeroneutro').innerHTML = "Los Numeros neutros son: " + negativo;
    // }
    // else if (n > 0)  /* positivo */
    // {
    //     var positivo = +1;
    //     document.getElementById('numeroneutro').innerHTML = "Los Numeros neutros son: " + positivo;
    // }

    // for (var x = 0; x > 5; x++)
    // {
    //     console.log(x);
    // }

}





// TABLA DEL 7 POR CONSOLA

// let tabla1 = 1;
// let tabla2 = 2;
// let tabla3 = 3;
// let tabla4 = 4;
// let tabla5 = 5;
// let tabla6 = 6;
// let tabla7 = 7;
// let tabla8 = 8;
// let tabla9 = 9;
// let tabla10 = 10;
// let tabla11 = 11;
// let tabla12 = 12;


// console.log(7 * tabla1);
// console.log(7 * tabla2);
// console.log(7 * tabla3);
// console.log(7 * tabla4);
// console.log(7 * tabla5);
// console.log(7 * tabla6);
// console.log(7 * tabla7);
// console.log(7 * tabla8);
// console.log(7 * tabla9);
// console.log(7 * tabla10);
// console.log(7 * tabla11);
// console.log(7 * tabla12);
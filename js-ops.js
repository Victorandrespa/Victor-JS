
/* 

const BTN_TABLA = document.getElementById("btn_tabla");
let RESPUESTA = document.getElementById("resultado")
let numero;
let acumuladorTexto;
let acumuladorHTML;

BTN_TABLA.addEventListener("click",()=>{
    numero = parseInt(document.getElementById("numValor1").value);
    acumuladorTexto="";
    acumuladorHTML="";
    for (let multi = 1; multi <=10; multi++) {
        acumuladorTexto+="\n"+numero+"X"+multi+"="+(numero*multi);
        acumuladorHTML+="<br>"+numero+"X"+multi+"="+(numero*multi);
    }
    alert("Tabla del: "+ numero +acumuladorTexto);
    RESPUESTA.innerHTML = acumuladorHTML;
});

let cicloWhile=1;
while (cicloWhile<10) {
    cicloWhile++;
    console.log(cicloWhile);
}

document.getElementById("btn_texto").addEventListener("click",()=>{
    numero = parseInt(document.getElementById("numValor1").value);
    acumuladorTexto="";
    for (let i= 1; i <=numero; i++) {
        acumuladorTexto+= i + ", ";
    }
    alert(acumuladorTexto);
    document.getElementById("resultado2").innerHTML = acumuladorTexto;
});

*/


//------------------------------- Nuevo ejemplo ---------------------------

/*

document.getElementById("btn_generar").addEventListener("click",()=>{
    //alert("Si funciona el boton!");
    let contenedorLista= document.getElementById("texto-lista");
    let listaDesordenada = document.createElement("ul");
    let texto1 = document.getElementById("ingreso-texto").value.replace(/\s+/g, "");
    let tituloLista = document.createElement("h4");
    /*
    alert("Primer: " + texto1[0]);
    alert("Segundo: " + texto1[1]);
    alert("Ultimo: " + texto1[texto1.length -1]);
    alert(texto1.length); 

    contenedorLista.innerHTML = "";
    tituloLista.textContent = "Lista Generada desde JS";
    
   
    for (let i = 0; i <= texto1.length-1 ; i++) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent =  texto1[i] ;
        listaDesordenada.appendChild(elementoLista);
    } 

    for (let caracter of texto1) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent =  caracter ;
        listaDesordenada.appendChild(elementoLista);
    }
    contenedorLista.append(tituloLista, listaDesordenada);
});

*/
//------------------------------- Nuevo ejemplo ---------------------------


// Decimal  Binario 


document.getElementById("btn-convierte-decimal").addEventListener("click" , function() {
    //alert("si funciona");
    let numeroDecimal = document.getElementById("inputValorDecimal").value || 0;
    let residuo = [];
    let resultadoBinario = "";

    while ( numeroDecimal > 0 ) {
        let resultado = parseInt(numeroDecimal/2);
        residuo.push (numeroDecimal % 2); 
        numeroDecimal = resultado;
    }
    //alert(residuo.length);

    for (let i = 1; i < (residuo.length +1); i++) {
        resultadoBinario += residuo[residuo.length - i];
    }
    document.getElementById("outputValorDecimal").innerHTML = "Binario: " + resultadoBinario;
});

document.getElementById("btn-convierte-binario").addEventListener("click" , function() {
    let numeroBinario = document.getElementById("inputValorBinario").value || 0;
    let caracteres = numeroBinario.length;
    let resultadoDecimal = 0;

    //alert(numeroBinario.length);
    //alert(numeroBinario[0]);

    for (let i = 1; i < caracteres ; i++) {
        let potencia = parseInt(numeroBinario.length - i);
        let digito = parseInt(numeroBinario[i - 1]);
        resultadoDecimal += (digito)*(2**potencia);
    }
    document.getElementById("outputValorBinario").innerHTML = "Decimal: " + resultadoDecimal;
});





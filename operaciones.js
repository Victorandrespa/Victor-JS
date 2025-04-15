
//Nav Bar---------------------------------------

function expandirAcordeon(enlace, titulo, contenido) {
    document.querySelector(enlace).addEventListener("click", function () {
        let tituloElemento = document.getElementById(titulo);
        let contenidoElemento = document.getElementById(contenido);

        tituloElemento.classList.remove("collapsed");
        tituloElemento.setAttribute("aria-expanded", "true");
        contenidoElemento.classList.remove("collapsed");
        contenidoElemento.classList.add("show");
    });
}

const acordeones = [
    { enlace: 'a[href="#title-carne"]', titulo: 'title-carne', contenido: 'panelsStayOpen-collapseOne' },
    { enlace: 'a[href="#title-hipotenusa"]', titulo: 'title-hipotenusa', contenido: 'panelsStayOpen-collapseTwo' },
    { enlace: 'a[href="#title-notas"]', titulo: 'title-notas', contenido: 'panelsStayOpen-collapseThree' },
    { enlace: 'a[href="#title-positivoNegativo"]', titulo: 'title-positivoNegativo', contenido: 'panelsStayOpen-collapseFour' },
    { enlace: 'a[href="#title-mayorMenor"]', titulo: 'title-mayorMenor', contenido: 'panelsStayOpen-collapseFive' },
    { enlace: 'a[href="#title-tablaMultiplicacion"]', titulo: 'title-tablaMultiplicacion', contenido: 'panelsStayOpen-collapseSix' },
    { enlace: 'a[href="#title-numerosPares"]', titulo: 'title-numerosPares', contenido: 'panelsStayOpen-collapseSeven' },
    { enlace: 'a[href="#title-MCD"]', titulo: 'title-MCD', contenido: 'panelsStayOpen-collapseEight' },
    { enlace: 'a[href="#title-caracteres"]', titulo: 'title-caracteres', contenido: 'panelsStayOpen-collapseNine' },
    { enlace: 'a[href="#title-contarPalabras"]', titulo: 'title-contarPalabras', contenido: 'panelsStayOpen-collapseTen' },
    { enlace: 'a[href="#title-contarNumero"]', titulo: 'title-contarNumero', contenido: 'panelsStayOpen-collapseEleven' },
    { enlace: 'a[href="#title-palabraDescompuesta"]', titulo: 'title-palabraDescompuesta', contenido: 'panelsStayOpen-collapseTwelf' },
    { enlace: 'a[href="#title-dosNumeros"]', titulo: 'title-dosNumeros', contenido: 'panelsStayOpen-collapseThirdteen' },
    { enlace: 'a[href="#title-vocales"]', titulo: 'title-vocales', contenido: 'panelsStayOpen-collapseFourteen' },
    { enlace: 'a[href="#title-crearTabla"]', titulo: 'title-crearTabla', contenido: 'panelsStayOpen-collapseFifthteen' },

];

acordeones.forEach(acordeon => {
    expandirAcordeon(acordeon.enlace, acordeon.titulo, acordeon.contenido);
});


//Declaracion Variables---------------------------------------
let valor1, valor2, resultado;


//Carnet y Nombre---------------------------------------------
document.getElementById("btn-carnet").addEventListener("click", function () {
    let valor1 = document.getElementById("Valor1").value;
    let valor2 = document.getElementById("Valor2").value;
    console.log("Carnet: " + valor1 + "Nombre: " + valor2);
    alert("Carnet:  " + valor1 + "\nNombre:  " + valor2);
});

//Hipotenusa------------------------------------------------
document.getElementById("btn-hipotenusa").addEventListener("click", function () {
    let valor1 = parseFloat(document.getElementById("cateto1").value) || 0;
    let valor2 = parseFloat(document.getElementById("cateto2").value) || 0;
    let resultado = Math.sqrt((valor1 ** 2) + (valor2 ** 2))
    resultado = resultado.toFixed(2);
    document.getElementById("resultado-Hipo").value = resultado;
});

//Promedio Notas------------------------------------------------
document.getElementById("btn-notas").addEventListener("click", function () {
    let valorN = document.getElementById("notas-nombre").value || 0;
    let valorC = document.getElementById("notas-curso").value || 0;
    let valor1 = parseFloat(document.getElementById("nota-matematicas").value) || 0;
    let valor2 = parseFloat(document.getElementById("nota-fisica").value) || 0;
    let valor3 = parseFloat(document.getElementById("nota-geometria").value) || 0;
    let valor4 = parseFloat(document.getElementById("nota-sociales").value) || 0;
    let valor5 = parseFloat(document.getElementById("nota-ingles").value) || 0;
    let promedio = (valor1 + valor2 + valor3 + valor4 + valor5) / 5
    resultado = promedio.toFixed(2);
    document.getElementById("nota-promedio").value = resultado;
    alert("Nombre: " + valorN + "\nCurso: " + valorC + "\nPromedio: " + resultado);
});

//Numero positivo Negativo------------------------------------------------
document.getElementById("btn-analizar").addEventListener("click", function () {
    let valor1 = parseFloat(document.getElementById("analiza-numero").value) || 0;
    document.getElementById("analisa-positivo").classList.remove("active");
    document.getElementById("analisa-neutro").classList.remove("active");
    document.getElementById("analisa-negativo").classList.remove("active");

    if (valor1 > 0) {
        document.getElementById("analisa-positivo").classList.add("active");
    } else if (valor1 < 0) {
        document.getElementById("analisa-negativo").classList.add("active");
    } else {
        document.getElementById("analisa-neutro").classList.add("active");
    }
});

//# Mayor o menor------------------------------------------------
document.getElementById("btn-ordenar").addEventListener("click", function () {
    let valor1 = parseFloat(document.getElementById("orden-1").value) || 0;
    let valor2 = parseFloat(document.getElementById("orden-2").value) || 0;
    let valor3 = parseFloat(document.getElementById("orden-3").value) || 0;
    let ordenDescendente = [valor1, valor2, valor3].sort((a, b) => b - a);

    document.getElementById("orden-mayor").innerHTML = `# Mayor: ${ordenDescendente[0]}`;
    document.getElementById("orden-segundo").textContent = `# Segundo: ${ordenDescendente[1]}`;
    document.getElementById("orden-tercero").textContent = `# Tercero: ${ordenDescendente[2]}`;
});

//# Tablas Multiplicacion ------------------------------------------------
document.getElementById("btn-mostrar").addEventListener("click", function () {
    document.getElementById("titulo-multiplicacion").classList.remove("d-none");
    document.getElementById("titulo-resultado").classList.remove("d-none");

    let valor1 = parseFloat(document.getElementById("tabla-num").value) || 0;
    let tbody = document.getElementById("tabla-multiplicar");
    tbody.innerHTML = "";

    for (let i = 1; i <= 12; i++) {
        let fila = document.createElement("tr");

        let operacion = document.createElement("td");
        operacion.textContent = valor1 + " × " + i;

        let resultado = document.createElement("td");
        resultado.textContent = "= " + (valor1 * i);

        fila.appendChild(operacion);
        fila.appendChild(resultado);
        tbody.appendChild(fila);
    }
});

//# Numeros Pares ------------------------------------------------
document.getElementById("btn-mostrar-pares").addEventListener("click", function () {
    let valor1 = parseFloat(document.getElementById("pares-num1").value) || 0;
    let valor2 = parseFloat(document.getElementById("pares-num2").value) || 0;

    if (valor1 > valor2) {
        let temp = valor1;
        valor1 = valor2;
        valor2 = temp;
    }

    let pares = [];
    for (let i = valor1; i <= valor2; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }

    document.getElementById("pares-resultado").value = pares.join(", ");
});

//# Maximo comun divisor ------------------------------------------------
document.getElementById("btn-mostrar-mcd").addEventListener("click", function () {
    let valor1 = parseFloat(document.getElementById("mcd-valor1").value) || 0;
    let valor2 = parseFloat(document.getElementById("mcd-valor2").value) || 0;

    function calcularMCD(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let mcd = calcularMCD(valor1, valor2);

    document.getElementById("mcd-resultado").value = mcd;
    alert("El MCD de " + valor1 + " y " + valor2 + " es: " + mcd);
    console.log("El MCD de " + valor1 + " y " + valor2 + " es: " + mcd);
});

//# Texto Caracteres ------------------------------------------------
document.getElementById("btn-analizar-caracteres").addEventListener("click", function () {
    let texto1 = document.getElementById("ingreso-texto").value.trim().replace(/\s+/g, "");

    let pares = [];
    for (let i = 0; i < texto1.length; i += 2) {
        if (i + 1 < texto1.length) {
            pares.push(texto1[i] + texto1[i + 1]);
        } else {
            pares.push(texto1[i]);
        }
    }

    document.getElementById("resultado-caracteres").value = pares.join(" ");
});

//# Contar Palabra------------------------------------------------
document.getElementById("btn-contar-palabra").addEventListener("click", function () {
    let texto = document.getElementById("ingreso-texto-contar").value.trim().toLowerCase();
    let palabra = document.getElementById("palabra-buscar").value.trim().toLowerCase();

    let listadopalabras = texto.split(/\s+/);
    let contador = listadopalabras.filter(p => p === palabra).length;

    document.getElementById("resultado-contar-palabras").value = "La palabra '" + palabra + "' se repite " + contador + " veces.";
});

//# Contar Numero------------------------------------------------
document.getElementById("btn-contar-numero").addEventListener("click", function () {
    let valor1 = parseFloat(document.getElementById("contar-numero").value) || 0;
    let acumuladorTexto = "";

    for (let index = 0; index <= valor1; index++) {
        acumuladorTexto += index + ", ";
    }

    document.getElementById("resultado-contar-numero").value = acumuladorTexto;
});


//# Palabra Descompuesta------------------------------------------------

//Boton Seleccionar palabra ---------------
document.querySelectorAll(".opcion-palabra").forEach(function (item) {
    item.addEventListener("click", function () {
        let valorSeleccionado = item.textContent.trim();
        let input = document.getElementById("analiza-palabra");

        if (valorSeleccionado.toLowerCase() === "otra") {
            input.value = "";
            input.removeAttribute("readonly");
        } else {
            input.value = valorSeleccionado;
            input.setAttribute("readonly", true);
        }
    });
});

//Boton analizar palabra ---------------
document.getElementById("btn-analizar-palabra").addEventListener("click", function () {
    let palabra1 = document.getElementById("analiza-palabra").value.trim();
    let valor1 = palabra1[0] || "";
    let valorN = palabra1[palabra1.length - 1] || "";
    let listaDescompuesta = "";
    //alert("funciona: " + valor1 +  "\nvalor ultimo: " + valorN);

    if (palabra1.length <= 1) {
        alert("Solo hay una letra! " + valor1);
    } else if (palabra1.length <= 2) {
        listaDescompuesta = "";
    } else if (palabra1.length <= 3) {
        listaDescompuesta = palabra1[1];
    } else {
        for (let i = 1; i <= palabra1.length - 2; i++) {
            listaDescompuesta += palabra1[i] + ", ";
        }
    }

    document.getElementById("palabra-descompuesta-1").textContent = valor1;
    document.getElementById("palabra-descompuesta").value = listaDescompuesta;
    document.getElementById("palabra-descompuesta-2").textContent = valorN;
});


//# Dos Textos------------------------------------------------

//Boton Caracteres ---------------
document.getElementById("btn-dost-caracteres").addEventListener("click", function () {
    // Limpio campos --------------------
    document.getElementById("tabla-head-1").classList.add("d-none");
    document.getElementById("tabla-head-2").classList.add("d-none");
    document.getElementById("tabla-head-3").classList.add("d-none");

    let tbody = document.getElementById("tabla-dost-texto");
    tbody.innerHTML = "";

    let texto1 = document.getElementById("dostextos-valor1").value;
    let texto2 = document.getElementById("dostextos-valor2").value;
    let textoCompleto = (texto1 + texto2).trim().replace(/\s+/g, "");
    let contarCaracteres = textoCompleto.length;
    document.getElementById("dost-conteo").textContent = "# Caracteres: " + contarCaracteres;
});

//Boton Letra S ---------------
document.getElementById("btn-dost-letras").addEventListener("click", function () {
    //Limpio campo -------
    document.getElementById("dost-conteo").textContent = "";
    document.getElementById("tabla-head-1").classList.remove("d-none");
    document.getElementById("tabla-head-2").classList.remove("d-none");
    document.getElementById("tabla-head-3").classList.add("d-none");
    document.getElementById("tabla-head-1").innerHTML = "Texto";
    document.getElementById("tabla-head-2").innerHTML = "Cantidad";

    let texto1 = document.getElementById("dostextos-valor1").value.trim().replace(/\s+/g, "").toLowerCase();
    let texto2 = document.getElementById("dostextos-valor2").value.trim().replace(/\s+/g, "").toLowerCase();

    //Funcion de busqueda y conteo -------
    let letraBuscada = "s";
    let contadors1 = 0;
    let contadors2 = 0;

    for (let i = 0; i < texto1.length; i++) {
        if (texto1[i] === letraBuscada) {
            contadors1++;
        }
    }
    for (let i = 0; i < texto2.length; i++) {
        if (texto2[i] === letraBuscada) {
            contadors2++;
        }
    }

    //Creacion de Tabla resultado -------
    let tbody = document.getElementById("tabla-dost-texto");
    tbody.innerHTML = "";

    let datos = [
        { nombre: "Texto #1", valor: contadors1 },
        { nombre: "Texto #2", valor: contadors2 },
        { nombre: "Total", valor: contadors1 + contadors2 }
    ];

    datos.forEach(dato => {
        let fila = document.createElement("tr");

        let celdaNombre = document.createElement("td");
        celdaNombre.textContent = dato.nombre;

        let celdaValor = document.createElement("td");
        celdaValor.textContent = dato.valor;

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaValor);
        tbody.appendChild(fila);
    });
});

//Digitos Pares ---------------
document.getElementById("btn-dost-pares").addEventListener("click", function () {

    //Limpio campo -------
    document.getElementById("dost-conteo").textContent = "";
    document.getElementById("tabla-dost-texto").textContent = "";

    //Agrego Titulos Tabla -------
    document.getElementById("tabla-head-1").classList.remove("d-none");
    document.getElementById("tabla-head-2").classList.remove("d-none");
    document.getElementById("tabla-head-3").classList.remove("d-none");
    document.getElementById("tabla-head-1").innerHTML = "Correlativo";
    document.getElementById("tabla-head-2").innerHTML = "Valor texto 1";
    document.getElementById("tabla-head-3").innerHTML = "Valor texto 2";


    let texto1 = document.getElementById("dostextos-valor1").value.trim().replace(/\s+/g, "").toLowerCase();
    let texto2 = document.getElementById("dostextos-valor2").value.trim().replace(/\s+/g, "").toLowerCase();

    //Creacion de Tabla resultado -------
    let tbody = document.getElementById("tabla-dost-texto");
    tbody.innerHTML = "";

    for (let i = 0; i < texto1.length; i++) {
        if (i % 2 === 0) {
            let fila = document.createElement("tr");

            let correlativo = document.createElement("td");
            correlativo.textContent = i;

            let textovalor1 = document.createElement("td");
            textovalor1.textContent = texto1[i];

            let textovalor2 = document.createElement("td");
            if (i < texto2.length) {
                textovalor2.textContent = texto2[i];
            } else {
                textovalor2.textContent = "";
            }

            fila.appendChild(correlativo);
            fila.appendChild(textovalor1);
            fila.appendChild(textovalor2);
            tbody.appendChild(fila);
        }
    }
});

//Vocales ---------------------
document.getElementById("btn-vocales").addEventListener("click", function () {

    //Agrego Titulos Tabla
    document.getElementById("vocales-head-1").classList.remove("d-none");
    document.getElementById("vocales-head-2").classList.remove("d-none");
    document.getElementById("vocales-head-1").innerHTML = "Vocal";
    document.getElementById("vocales-head-2").innerHTML = "Cantidad";

    let texto1 = document.getElementById("vocales-texto1").value.trim().toLowerCase();
    let vocalesP = { a: 0, e: 0, i: 0, o: 0, u: 0 }
    let vocales1 = ["a", "e", "i", "o", "u"];

    // Revisa el texto y suma valores en objetos
    for (let i = 0; i < texto1.length; i++) {
        if (texto1[i] === "a") {
            vocalesP["a"] += 1;
        } else if (texto1[i] === "e") {
            vocalesP["e"] += 1;
        } else if (texto1[i] === "i") {
            vocalesP["i"] += 1;
        } else if (texto1[i] === "o") {
            vocalesP["o"] += 1;
        } else if (texto1[i] === "u") {
            vocalesP["u"] += 1;
        } else {
        }
    }
    //alert("a= " + vocalesP["a"] );

    let tbody = document.getElementById("tabla-vocales");
    tbody.innerHTML = "";

    // Creo tabla y agrego datos
    for (let i = 0; i < vocales1.length; i++) {

        let fila = document.createElement("tr");

        let vocales = document.createElement("td");
        vocales.textContent = vocales1[i];

        let cantidad = document.createElement("td");
        cantidad.textContent = vocalesP[vocales1[i]];

        fila.appendChild(vocales);
        fila.appendChild(cantidad);
        tbody.appendChild(fila);
    }

    /*
    for (let i = 0; i < texto1.length; i++) {
        let letra = texto1[i];
        if (vocalesP.hasOwnProperty(letra)) {
            vocalesP[letra]++;
        }
    } */

});

//Creacion Tabla ---------------------
document.getElementById("btn-crear-tabla").addEventListener("click", function () {

    //Recibo valores
    let columnas = parseFloat(document.getElementById("columnas-input").value) || 0;
    let filas = parseFloat(document.getElementById("filas-input").value) || 0;

    // Titulo Tabla conteo
    let tituloTabla = document.getElementById("titulo-tabla");
    tituloTabla.innerHTML = "";

    let filaTitulo = document.createElement("tr");

    for (let index = 0; index < columnas; index++) {
        let titulo = document.createElement("td");
        titulo.textContent = (index + 1);
        filaTitulo.appendChild(titulo);
    }
    tituloTabla.appendChild(filaTitulo);


    let tbody = document.getElementById("nuevatabla-creada");
    tbody.innerHTML = "";

    for (let i = 0; i < filas; i++) {

        let filaRows = document.createElement("tr");

        for (let index = 0; index < columnas; index++) {
            let columnaCeldas = document.createElement("td");
            columnaCeldas.textContent = (i + 1);
            filaRows.appendChild(columnaCeldas);
        }
        tbody.appendChild(filaRows);
    }
});



//Retos adicionales---------------------------------------


//Indicar si un valor ingresado es o no un número primo. 
document.getElementById("btn-revisar-primo").addEventListener("click", function () {
    let valor1 = parseInt(document.getElementById("inputPrimo1").value) || 0;
    let primos = 0;
    //alert("funciona= " + valor1);

    for (let index = 1; index <= valor1; index++) {
        if (valor1 % index === 0) {
            primos++;
        }
    };
    if (primos === 2) {
        document.getElementById("outputPrimo1").value = "Si es Numero Primo!"
    } else {
        document.getElementById("outputPrimo1").value = "No es Numero Primo!"
    };
});

//Mostrar los números primos hasta un valor ingresado por el usuario. 
document.getElementById("btn-listar-primo").addEventListener("click", function () {
    let valor1 = parseInt(document.getElementById("inputListaPrimo1").value) || 0;
    let primos = [];
    //alert("funciona= " + valor1);

    for (let index = 1; index <= valor1; index++) {
        if (valor1 % index === 0) {
            primos.push(index);
        }
    };
    if (primos.length === 2) {
        document.getElementById("outputListaPrimo1").innerHTML = primos.join(", ")
    } else {
        document.getElementById("outputListaPrimo1").innerHTML = "No es Numero Primo!"
    };
});

//Mostrar los números primos existentes entre 1 rango (dos valores). 
document.getElementById("btn-valores-primos").addEventListener("click", function () {
    let valor1 = parseInt(document.getElementById("inputValoresPrimos1").value) || 0;
    let valor2 = parseInt(document.getElementById("inputValoresPrimos2").value) || 0;
    let primos1 = [];
    let mayor = Math.max(valor1, valor2);
    let menor = Math.min(valor1, valor2);

    for (let index = menor; index <= mayor; index++) {
        let divisores = 0;
        for (let i = 1; i <= index; i++) {
            if (index % i === 0) {
                divisores++;
            };
        };
        if (divisores === 2) {
            primos1.push(index);
        };
    };
    if (primos1.length >= 1) {
        document.getElementById("outputValoresPrimos").innerHTML = "Numeros primos: " + primos1.join(", ");
    } else {
        document.getElementById("outputValoresPrimos").innerHTML = "No hay numeros Primos entre los valores!";
    };
});

//Mostrar la serie de Fibonacci, hasta un valor ingresado por el usuario. 
document.getElementById("btn-fibonacci").addEventListener("click", function () {
    let posicion = parseInt(document.getElementById("inputValorFibonacci1").value) || 0;
    let fibonacci = [0, 1];

    for (let index = 2; index <= posicion; index++) {
        let nextValor = fibonacci[index - 1] + fibonacci[index - 2];
        fibonacci.push(nextValor);
    };
    document.getElementById("outputValorFibonacci").innerHTML = "Fibonacci en la Posicion #" + posicion + " es: " + fibonacci[posicion];
});

document.getElementById("btn-fibonacci2").addEventListener("click", function () {
    let posicion = parseInt(document.getElementById("inputValorFibonacci1").value) || 0;
    let fibonacci = [0, 1];

    for (let index = 2; index <= posicion; index++) {
        let nextValor = fibonacci[index - 1] + fibonacci[index - 2];
        fibonacci.push(nextValor);
    };
    document.getElementById("outputValorFibonacci2").innerHTML = "Serie #" + posicion + ": " + fibonacci.join(", ");
});

//Indicar si un número es o no perfecto
document.getElementById("btn-perfecto").addEventListener("click", function () {
    let valor1 = parseInt(document.getElementById("inputValorPerfecto").value);
    let divisores = [];
    let contador = 0;

    for (let index = 1; index < valor1; index++) {
        if (valor1 % index === 0) {
            contador += index;
            divisores.push(index);
        };
    };

    if (contador === valor1) {
        document.getElementById("outputValorPerfecto").innerHTML = "El numero #" + valor1 + " es Perfecto! " + "<br>" + "Divisores: " + divisores.join(", ") + " = " + contador;
    } else {
        document.getElementById("outputValorPerfecto").innerHTML = "El numero #" + valor1 + " no es Perfecto :( " + "<br>" + "Divisores: " + divisores.join(", ") + " = " + contador;
    }
});

//Convertir un valor numérico binario a decimal 
document.getElementById("btn-convierte-decimal").addEventListener("click", function () {
    //alert("si funciona");
    let numeroDecimal = document.getElementById("inputValorDecimal").value || 0;
    let residuo = [];
    let resultadoBinario = "";

    while (numeroDecimal > 0) {
        let resultado = parseInt(numeroDecimal / 2);
        residuo.push(numeroDecimal % 2);
        numeroDecimal = resultado;
    }
    //alert(residuo.length);

    for (let i = 1; i < (residuo.length + 1); i++) {
        resultadoBinario += residuo[residuo.length - i];
    }
    document.getElementById("outputValorDecimal").innerHTML = "# Binario: " + resultadoBinario;
});

document.getElementById("btn-convierte-binario").addEventListener("click", function () {
    let numeroBinario = document.getElementById("inputValorBinario").value || 0;
    let caracteres = numeroBinario.length;
    let resultadoDecimal = 0;

    //alert(numeroBinario.length);
    //alert(numeroBinario[0]);

    for (let i = 1; i < caracteres; i++) {
        let potencia = parseInt(numeroBinario.length - i);
        let digito = parseInt(numeroBinario[i - 1]);
        resultadoDecimal += (digito) * (2 ** potencia);
    }
    document.getElementById("outputValorBinario").innerHTML = "# Decimal: " + resultadoDecimal;
});

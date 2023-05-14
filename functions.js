function clickEncriptar(){
    //primera funcion 
    encriptar();
    //segunda funcion
    OcultarMostrar();

    let screenwidth = window.innerWidth;

    if(screenwidth < 1340)
    {
        ResponsiveResultado();
        console.log("si entro, falta la function");
    }
    else{
        NoResposiveResultado();
        console.log("no entro");
    }
}

function clickDesencriptar(){
    //primera funcion 
    desencriptar();
    //segunda funcion
    OcultarMostrar();

    let screenwidth = window.innerWidth;

    if(screenwidth < 1340)
    {
        ResponsiveResultado();
        console.log("si entro, falta la function");
    }
    else{
        NoResposiveResultado();
        console.log("no entro");
    }
}

function encriptar(){
    var texto = document.getElementById("texto").value;
    var letras = texto.split("");
    console.log(letras);

    var encriptado = []; 

    for(var i = 0; i < letras.length; i++)
    {
        switch(letras[i]){
            case "a":
                encriptado.push("ai");
                break;
            case "e":
                encriptado.push("enter");
                break;
            case "i":
                encriptado.push("imes");
                break;
            case "o":
                encriptado.push("ober");
                break;
            case "u":
                encriptado.push("ufat");
                break;
            default:
                encriptado.push(letras[i]);
                break;
        }
    }

    console.log(encriptado);
    document.getElementById("respuesta").innerHTML = encriptado.join("");
}

function desencriptar(){
    var texto = document.getElementById("texto").value;
    var letras = texto.split("");
    console.log(letras);

    var encriptado = [];

    for(var i = 0; i < letras.length; i++)
    {
        switch(letras[i]){
            case "a":
                encriptado.push("a");
                i += 1;
                break;
            case "e":
                encriptado.push("e");
                i += 4;
                break;
            case "i":
                encriptado.push("i");
                i += 3;
                break;
            case "o":
                encriptado.push("o");
                i += 3;
                break;
            case "u":
                encriptado.push("u");
                i += 3;
                break;
            default:
                encriptado.push(letras[i]);
                break;
        }
    }

    console.log(encriptado);
    document.getElementById("respuesta").innerHTML = encriptado.join("");
}

function Copy(){
    let textCopy = document.getElementById("respuesta").innerText;

    navigator.clipboard.writeText(textCopy); 
}

function OcultarMostrar(){
    //obtener texto
    let Texto = document.getElementById("texto").value;

    //Obtener elementos a ocultar/mostrar
    let btnCopiar = document.getElementById("btnCopiar");
    let imgMunieco = document.getElementById("imgMunieco");
    let PMunieco = document.getElementById("PMunieco");

    //verificar si el parrafo tiene texto
    if(Texto.length > 0 ){
        btnCopiar.style.display="block";
        imgMunieco.style.display="none";
        PMunieco.style.display="none";
        console.log("Tiene texto");
    }
    else{
        btnCopiar.style.display="none";
        imgMunieco.style.display="block";
        PMunieco.style.display="block";
        console.log("No tiene texto");
    }
}

function ResponsiveResultado(){
    let myDiv = document.getElementById("respuesta");
    let height = window.innerHeight;

    // Obtener el tamaño del elemento
    let divHeight = myDiv.offsetHeight;

    // Obtener el elemento cuyo tamaño queremos cambiar
    let mySection = document.getElementById("seccion2");
    let myCont = document.getElementById("contenedorResultado");
    let myPage = document.getElementById("pagina");

    // Cambiar el tamaño del elemento en función del tamaño del otro elemento
    mySection.style.height = "calc(" + (divHeight) + "px + 20%)";
    myCont.style.height = (divHeight) + "px)";

    //determinar el tamanio de la pagina
    let altura = height + divHeight;
    myPage.style.height = (altura) + "px";

    console.log("Si respondio");
}

function NoResposiveResultado(){
    let height = window.innerHeight;

    // Obtener el elemento cuyo tamaño queremos cambiar
    let mySection = document.getElementById("seccion2");
    let myCont = document.getElementById("contenedorResultado");
    let myPage = document.getElementById("pagina");

    // Cambiar el tamaño del elemento en función del tamaño del otro elemento
    mySection.style.height = "100%";
    myCont.style.height = "70%";

    //determinar el tamanio de la pagina
    let altura = height;
    myPage.style.height = (altura) + "px";

    console.log("Si respondio no responsive");
}

var inputNombreA = document.getElementById('dato_a');
var inputNombreB = document.getElementById('dato_b');
var inputResult = document.getElementById('Resultado');
var FocusItem = null;

// Creamos un array vacio
var ElementosClick = new Array();
// Capturamos el click y lo pasamos a una funcion
document.onclick = captura_click;

function captura_click(e) {
// Funcion para capturar el click del raton
var HaHechoClick;
if (e == null) {
// Si hac click un elemento, lo leemos
HaHechoClick =e.srcElement.id;
} else {
// Si ha hecho click sobre un destino, lo leemos
//HaHechoClick = e.target.tagName;

    HaHechoClick = e.target.id;
    if (HaHechoClick==='dato_a')
    {
        FocusItem='dato_a';
    }
    else if (HaHechoClick==='dato_b')
    {
        FocusItem='dato_b';
    }
    else if (HaHechoClick==='uno')
    {  if (FocusItem==='dato_a')
       {
        inputNombreA.value =inputNombreA.value+ '1';
       }
       else
       {
        inputNombreB.value =inputNombreB.value+ '1';
       }
        
    }
    else if (HaHechoClick==='dos') 
    {
        if (FocusItem==='dato_a')
       {
        inputNombreA.value =inputNombreA.value+ '2';
       }
       else
       {
        inputNombreB.value =inputNombreB.value+ '2';
       }
    } 
    else if (HaHechoClick==='tres') 
    {
        if (FocusItem==='dato_a')
       {
        inputNombreA.value =inputNombreA.value+ '3';
       }
       else
       {
        inputNombreB.value =inputNombreB.value+ '3';
       }
    } 
    else if (HaHechoClick==='cuatro') 
    {
        if (FocusItem==='dato_a')
        {
         inputNombreA.value =inputNombreA.value+ '4';
        }
        else
        {
         inputNombreB.value =inputNombreB.value+ '4';
        }
    } 
    else if (HaHechoClick==='cinco') 
    {
        if (FocusItem==='dato_a')
       {
        inputNombreA.value =inputNombreA.value+ '5';
       }
       else
       {
        inputNombreB.value =inputNombreB.value+ '5';
       }
    } 
    else if (HaHechoClick==='seis') 
    {
        if (FocusItem==='dato_a')
        {
         inputNombreA.value =inputNombreA.value+ '6';
        }
        else
        {
         inputNombreB.value =inputNombreB.value+ '6';
        }
    } 
    else if (HaHechoClick==='siete') 
    {
        if (FocusItem==='dato_a')
        {
         inputNombreA.value =inputNombreA.value+ '7';
        }
        else
        {
         inputNombreB.value =inputNombreB.value+ '7';
        }
    } 
    else if (HaHechoClick==='ocho') 
    {
        if (FocusItem==='dato_a')
        {
         inputNombreA.value =inputNombreA.value+ '8';
        }
        else
        {
         inputNombreB.value =inputNombreB.value+ '8';
        }
    } 
    else if (HaHechoClick==='nueve') 
    {
        if (FocusItem==='dato_a')
        {
         inputNombreA.value =inputNombreA.value+ '9';
        }
        else
        {
         inputNombreB.value =inputNombreB.value+ '9';
        }
    } 
    else if (HaHechoClick==='cero') 
    {
        if (FocusItem==='dato_a')
        {
         inputNombreA.value =inputNombreA.value+ '0';
        }
        else
        {
         inputNombreB.value =inputNombreB.value+ '0';
        }
    } 
    else if (HaHechoClick==='+') 
    {
        inputResult.value = Number(inputNombreA.value) + Number(inputNombreB.value) ;
    } 
    else if (HaHechoClick==='-') 
    {
        inputResult.value = inputNombreA.value - inputNombreB.value;
    } else if (HaHechoClick==='*') 
    {
        inputResult.value = inputNombreA.value * inputNombreB.value;
    } 
    else if (HaHechoClick==='/') 
    { if (inputNombreB.value > 0)
        {
        inputResult.value = inputNombreA.value / inputNombreB.value;
        }
       else{
        alert(' 😥 El divisor no puede ser 0');
       }
    } 
    else if (HaHechoClick==='C')   
    {
        inputResult.value = null;
        inputNombreA.value = null;
        inputNombreB.value= null;  
    
    }
}
// Añadimos el elemento al array de elementos
ElementosClick.push(HaHechoClick);
// Una prueba con salida en consola
console.log('Contenido sobre lo que ha hecho click: '+ HaHechoClick);
}
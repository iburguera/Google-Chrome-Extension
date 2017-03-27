
// Función para quitar cualquier simbolo salvo el "." de un texto
function removeCurrencySymbol(numero)               
{
	return Number(numero.replace(/[^0-9\.]+/g,""));
}

var dolares = [];     // Declaramos un Array para almacenar el valor TOTAL y MENSUAL en $
var libras  = [];     // Declaramos un Array para almacenar el valor TOTAL y MENSUAL en £
var euros   = [];     // Declaramos un Array para almacenar el valor TOTAL y MENSUAL en €

dolares[0] 	= document.evaluate("//*[@id=\"TotalSection\"]/div[1]/div[1]/span[1]", document, null, XPathResult.ANY_TYPE, null);     // almacenamos el valor TOTAL en $ en la primera posicion del array
dolares[1] 	= document.evaluate("//*[@id=\"MonthSection\"]/div[1]/div[1]/span[1]", document, null, XPathResult.ANY_TYPE, null);    // almacenamos el valor MENSUAL en $ en la segunda posicion del array

libras[0] 	= document.evaluate("//*[@id=\"TotalSection\"]/div[1]/div[2]/span[1]", document, null, XPathResult.ANY_TYPE, null);    // almacenamos el valor TOTAL en £ en la primera posicion del array 
libras[1] 	= document.evaluate("//*[@id=\"MonthSection\"]/div[1]/div[2]/span[1]", document, null, XPathResult.ANY_TYPE, null);    // almacenamos el valor MENSUAL en £ en la segunda posicion del array

euros[0] 	= document.evaluate("//*[@id=\"TotalSection\"]/div[1]/div[3]/span[1]", document, null, XPathResult.ANY_TYPE, null);     // almacenamos el valor TOTAL en € en la primera posicion del array
euros[1] 	= document.evaluate("//*[@id=\"MonthSection\"]/div[1]/div[3]/span[1]", document, null, XPathResult.ANY_TYPE, null);    // almacenamos el valor MENSUAL en € en la segunda posicion del array

//VENTAS TOTAL
var dolaresNoSymbolTotal = removeCurrencySymbol(dolares[0].iterateNext().textContent);
var librasNoSymbolTotal  = removeCurrencySymbol(libras[0].iterateNext().textContent);
var eurosNoSymbolTotal   = removeCurrencySymbol(euros[0].iterateNext().textContent);

//VENTAS MES
var dolaresNoSymbolMes = removeCurrencySymbol(dolares[1].iterateNext().textContent);
var librasNoSymbolMes  = removeCurrencySymbol(libras[1].iterateNext().textContent);
var eurosNoSymbolMes   = removeCurrencySymbol(euros[1].iterateNext().textContent);

var sumaTotal = 0;
var sumaMes   = 0;

var dollarRate = 0.9252; // 1 Dolar  = 0,9252 Euros  -- Aquí mejor utilizar el valor real de la moneda utilizando algún request a alguna página de divisas
var libraRate  = 1.1538; // 1 Libra  = 1,1538 Euros  -- Aquí mejor utilizar el valor real de la moneda utilizando algún request a alguna página de divisas

sumaTotal = (dolaresNoSymbolTotal*dollarRate)+(librasNoSymbolTotal*libraRate)+eurosNoSymbolTotal;   // Hacemos la suma TOTAL en €
sumaMes   = (dolaresNoSymbolMes*dollarRate)+(librasNoSymbolMes*libraRate)+eurosNoSymbolMes; // Hacemos la sum MENSUAL en €

alert("Total : "+sumaTotal.toFixed(2)+" €"+"\n" + "Mes  : "+sumaMes.toFixed(2)+" €");   // Mostramos una alerta con las ventas TOTALES y MENSUALES en €



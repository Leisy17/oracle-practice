var tanque = 40;
var kms = 480;
document.write(tanque / kms + "<br>");

var edad1 = 30;
var edad2 = 5;

function imprimir(diferencia) {
  document.write(
    "<big>" + "Nuestra diferencia de edad es " + diferencia + "</big>"
  );
  saltarLinea();
}
function saltarLinea() {
  document.write("<br>");
}

function diferencia_de_edades(edad1, edad2) {
  diferencia = edad1 - edad2;
  return diferencia;
}

diferencia_de_edades(edad1, edad2);
imprimir(diferencia);

var edad1 = 12;
var edad2 = 5;
diferencia_de_edades(edad1, edad2);
imprimir(diferencia);

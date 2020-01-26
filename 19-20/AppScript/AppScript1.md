## Ejemplos de App Script G -Suite

### 1. Creación de funciones propias para Google Sheet 

### Crear una función en Google Sheets para calcular mi edad en horas

```
function myAgeInHours(){
var myBirthDate = new Date('1958/02/19 02:00:00').getTime();
myBirthDate = parseInt(myBirthDate/3600000, 10);
var today = parseInt(new Date().getTime()/3600000, 10);
return today-myBirthDate;
}
```

Una vez creada la función vamos a Goggle Sheet y escribimos en una celda = myAgeInHours()

> Si quieres ir sacando las trazas a una consola de log se hace de la siguiente manera

```
Logger.log (' aquí ponemos lo que queramos sacar , lo ideal es poner una variable para ver su valor ')

```

### Crear una pequeña pantalla para recoger algún dato (p.E Recoger el nombre del usuario)

```
var name = Browser.inputBox('Enter your name', Browser.Buttons.OK_CANCEL);

```

### Añadir un nuevo elemento al menú de Google Sheets y que realice una acción

```
function createMenu(){
  var menuEntries = [ {name: "resetPageLayout", functionName:"resetPageLayout"}];
  var sh = SpreadsheetApp.getActiveSpreadsheet();
  sh.addMenu("Formateo paginas",menuEntries);
}
```

### Copiar datos de un google Sheet a otro
```
function Exportar() {
var spreadsheet1 = SpreadsheetApp.openById("1Xl4pWgPpPdzk7vLyrrdtEx4JV1wSvrhTYrp-z8OhLTY");
var spreadsheet2 = SpreadsheetApp.openById("14ilkiECtg4lRoLxZBVfFXnoYFISAuQ2-dDIoxOz3qXc");
var hoja1 = spreadsheet1.getSheetByName("Hoja 1"); //Nombre de las hoja 1
var hoja2 = spreadsheet1.getSheetByName("Hoja 2"); //Nombre de la hoja 2
var datoshoja1 = hoja1.getDataRange().getValues();
var datoshoja2 = hoja2.getDataRange().getValues();
var nombre =[];
var email =[];
var telefono =[];
var mensaje =[];
var urllanding =[];
var fechausuario =[];
var idusuario =[];

 var hoja1sheet2 = spreadsheet2.getSheetByName("DatosReporteUsuario");

 for(var i=0; i<datoshoja1.length; i++){    

 hoja1sheet2.appendRow([datoshoja1[i][0], datoshoja1[i][1], datoshoja1[i][2], datoshoja1[i][3], datoshoja1[i][4],datoshoja1[i][5]]); 
}   
for(var i=0; i<datoshoja2.length; i++){ 
var rowh2 = datoshoja2[i]; 
nombre[i] = rowh2[1];
email[i] = rowh2[2]; 
telefono[i] = rowh2[3]; 
mensaje[i] = rowh2[4]; 
urllanding[i] = rowh2[5]; 
fechausuario[i] = rowh2[6]; 
idusuario[i] = rowh2[0];
}
for(var i=1; i<datoshoja2.length; i++){
hoja1sheet2.getRange('G'+(i+1)).setValue(nombre[i]);
hoja1sheet2.getRange('H'+(i+1)).setValue(email[i]);
hoja1sheet2.getRange('I'+(i+1)).setValue(telefono[i]);
hoja1sheet2.getRange('J'+(i+1)).setValue(mensaje[i]);
hoja1sheet2.getRange('K'+(i+1)).setValue(urllanding[i]);
hoja1sheet2.getRange('L'+(i+1)).setValue(fechausuario[i]);
hoja1sheet2.getRange('M'+(i+1)).setValue(idusuario[i]);

hoja1.clear();
hoja2.clear();
// hoja1.getRange(2, 1, nuevosvalores.length, hoja1.getLastColumn()).setValues(nuevosvalores);

}
}
```

### Obtener datos de las columnas de Google Sheets

Hay varias formas para obtener todos los valores de una fila.

* Notación de referencias de hoja de cálculo 1:1
* Usar la notación de array miArray[i]
* Usar getRange(fila, columna, numeroFilas,numeroColumnas)

Por ejemplo, podemos usar

* var numFila = e.range.rowStart; 
* var fila = gSheet.getRange(numFila + ":" + numFila);
* var valoresFila = fila.getValues(); donde valoresFila será un array de arrays de 1 x número de columnas de la hoja.

Si quieres limitar a sólo las filas del rango de datos (data range), podemos usar getLastColumn() el cual es ciertas circunstancias podría ser muy lento, o bien usar gSheet.getDataRange().getValues()[0].length para obtener el número de columnas de rango de datos.


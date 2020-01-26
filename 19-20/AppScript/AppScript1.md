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


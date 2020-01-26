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
var name = Browser.inputBox('Enter your name', Browser.Buttons.OK_
CANCEL);

```


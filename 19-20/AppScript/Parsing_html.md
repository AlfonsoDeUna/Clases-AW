## Parsing html

Para poder realizar parsing de páginas web desde app script, después de ir probando diferentes opciones añado un par de páginas desde las cuales he podido realizar parsing de manera muy sencilla

https://www.kutil.org/2016/01/easy-data-scrapping-with-google-apps.html --> Añade la librería en app script parser

https://vispad.blogspot.com/2019/01/what-is-best-way-to-parse-html-in.html


*Este código extrae la cadena de búsqueda del primer portátil*
```
function myFunction() {
  Logger.log(getData());
}

/* VERSIÓN DE LA DOCUMENTACIÓN OFICIAL PERO NO FUNCIONA CON PÁGINAS MAL FORMADAS*/
function doGet() {
  var html = UrlFetchApp.fetch('https://www.mediamarkt.es/mcs/brandcategory/_portatiles,121956,68,701175.html?langId=-5').getContentText();
  var doc = XmlService.parse(html);
  var html = doc.getRootElement();
  var menu = getElementsByClassName(html, 'product-wrapper')[0];
  var output = XmlService.getRawFormat().format(menu);
  return HtmlService.createHtmlOutput(output);
}

/* ESTA ES UNA VERSIÓN PARA SALTAR UN DOCUMENTO MAL FORMADOR PERO NO FUNCIONA */
function doGet() {
  var html = UrlFetchApp.fetch('https://www.mediamarkt.es/mcs/brandcategory/_portatiles,121956,68,701175.html?langId=-5').getContentText();
  var doc = Xml.parse(page, true);
  var bodyHtml = doc.html.body.toXmlString();
  doc = XmlService.parse(bodyHtml);
  var root = doc.getRootElement();
  return root.get
}

/* ESTA FUNCIÓN ME HA FUNCIONADO PORQUE UTILIZA LA LIBRERÍA PARSER BUSCANDO UNA CADENA ES MUY SENCILLO*/
function getData() {
    var url = "https://www.mediamarkt.es/mcs/brandcategory/_portatiles,121956,68,701175.html?langId=-5";
    var fromText = '<div class="product-wrapper"';
    var toText = '">';

    var content = UrlFetchApp.fetch(url).getContentText();
    var scraped = Parser
                    .data(content)
                    .from(fromText)
                    .to(toText)
                    .build();
    Logger.log(scraped);
    return scraped;
}



```

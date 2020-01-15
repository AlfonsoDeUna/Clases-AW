### CONFIGURAR VIRTUAL HOST EN APACHE (UBUNTU)

## Requisitos previos
Tener instalado Apache (ver guía en este repositorio)

## Crear la estructura de directorios

Dentro de /var/www nos creamos las carpetas example.com y dentro de esta public_html y otra carpeta en /var/www/ test.com y dentro de esta igual, public_html

## Crear dentro de example.com/public_html y test.com/public_html dos páginas web con el nombre de index.html

Hay que crear dos páginas html con el editor *nano* una que ponga con h1 entorno de producción y en test.com otra página

**IMPORTANTE** PARA ABRIR EL EDITOR NANO RECUERDA ABRIRLO EN ROOT 
```
sudo nano index.html
```

## editar los ficheros de configuración para montar los virtual host

Ir a la carpeta /etc/apache2/sites-available

copiar la plantilla de configuración para ambos entornos

```
sudo cp 000-default.conf example.com.conf
sudo cp 000-default.conf test.com.conf
```
A los ficheros example.com.conf y test.com.conf añado las siguientes líneas

ServerName example.com
ServerAlias www.example.com

hay que modificar DocumentRoot /var/www/example.com/public_html

Lo mismo con Test.

## Habilitar los entornos virtuales

```
a2ensite example.com.conf
a2ensite test.com.conf
```

Hay que resetear el servidor

```
service apache2 stop
service apache2 start
```

## Configurar el fichero Host de etc para asociar nombre de los dominios virtuales a la IP del servidor

buscar con ifconfig la ip nueva
editar con nano etc/host

10.0.1.15 example.com
10.0.1.15 test.com

## PROBAR EN UN NAVEGADOR QUE FUNCIONA 

Si accedo al navegador con example.com veo la página creada para producción y si  voy a test.com veo la página creada para el entorno de pruebas.





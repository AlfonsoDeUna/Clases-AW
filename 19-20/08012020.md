## INSTALAR EN UBUNTU 18.04 UN APACHE

### introducción Servidor Apache


### instalación 
Para instalar el servidor apache tendremos que realizar la siguiente orden en el comando.
```
$ sudo apt install apache2
```
en el caso que tengamos un bloqueo y no nos deje instalar a través de apt-get install 
```
$ sudo fuser -vki /var/lib/dpkg/lock
```
### Firewall de linux

Teneos el comando **ufw**

```
$ sudo ufw status apache
```

#### Agregar una regla al firewall

```
$ sudo ufw allow 'Apache'
```

### Comando para ver si tenemos levantado el servidor
El más sencillo es viendo los procesos que están ejecutando en la máquina
```
ps -ef 
```
```
$ sudo systemctl status apache2
```

###  Arrancar y Parar el servidor
```
$ sudo systemctl stop apache2
```

```
$ sudo systemctl start apache2
```

### Realizar desde consola una petición web
Se realiza con el comando **curl**
Con este comando podemos ver si obtenemos respuesta http desde nuestro servidor.
```
$ sudo curl 127.0.0.1
```

### Ejercicio: reto 1
---
La empresa Guru.com nos pide realizar una prueba en el que tenemos que crear una página web dentro de apache en linux con editor desde la consola que no sea gráfico.

# Shell: Bash

Al abrir una **Terminal** podremos ejecutar comandos. Estos comandos son interpretados por una **shell**. Cada Sistema Operativo tiene una shell predeterminada:

- OSX: bash.
- Linux: bash.
- Windows: DOS/cmd.

El estándar es usar **bash**. En el caso de Windows podemos usarlo si previamente instalamos [Git](https://git-scm.com/), entonces buscamos el ejecutable **Git Bash** y nos abrirá una Terminal una emulación de bash muy completa.


## Comandos básicos

### ls
listar archivos y carpetas

```shell
$ ls
```

Entre los parametros más usados tenemos:

#### ls -1
Muestra la lista en solo una columna.

```shell
$ ls -1
```

#### ls -a
Muestra archivos ocultos.

```shell
$ ls -a
```

Es posible usar ambos parametros a la vez:

```shell
$ ls -1a
```


### cat
Mostrar el contenido de un archivo.

```shell
$ cat miArchivo.txt
```

### mkdir
Crear una carpeta.

```shell
$ mkdir nuevaCarpeta
```

### touch
Crear archivo vacio.

```shell
$ touch miArchivo.txt
```

### echo
Muestra un mensaje en la Terminal.

```shell
$ echo "Hola mundo"
  Hola mundo
```

### COMANDO > archivo.txt
Usando ">" podemos guardar el resultado de la ejecución de un commando dentro de un archivo. 

- Si el archivo existe, lo sobreescribirá.
- Si el archivo no existe, lo creará.

```shell
$ ls -a > listadoArchivos.txt
```
```shell
$ echo "Hola mundo" > mensaje.txt
```

### COMANDO >> archivo.txt
Igual que el comando anterior pero este agrega contenido al archivo en una nueva línea.

- Si el archivo no existe, lo crea.

```shell
$ echo "Hola" >> mensaje.txt

$ cat mensaje.txt
  Hola

$ echo "Adiós" >> mensaje.txt

$ cat mensaje.txt
  Hola
  Adiós
```

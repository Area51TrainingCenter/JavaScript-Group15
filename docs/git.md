# Git: Control de Versiones

Nos ayudará a mantener un control de los cambios que se van dando en el tiempo en un proyecto. Siempre y cuando se mantenga un buen control sobre los cambios.

## Glosario

### repositorio
Nombre que se le da a la carpeta del proyecto donde se ejecutó el commando `git init`.

### repositorio local
La carpeta del proyecto en nuestra computadora.

### repositorio remoto
La carpeta del proyecto en el servicio remoto. Los servicios para el control de versiones más conocidos son [Github](https://github.com), [GitLab](https://about.gitlab.com) y [Bitbucket](https://bitbucket.org).

### branch
Una versión de nuestra caperta del proyecto. Esta versión usualmente maneja nombres. Al crear un repositorio por defecto estaremos trabajando en la versión **master**. Podemos crear otros branch según nuestro flujo de trabajo (workflow).

### stage
Los archivos modificados pueden ser _guardados_ hasta esa modificación que tuvieron en el repositorio local. Es como un estado temporal antes de formar realmente parte del repositorio.

### unstage
Hace referencia a los archivos modificados que no han sido colocados en el **stage**.


## Comandos

Para empezar a trabajar en un repositorio podemos usar uno de los siguientes comandos:

### git init
Iniciar un repositorio local.

### git clone
Descarga un repositorio remoto. Localmente se puede hacer cambios a los archivos sin afectar el repositorio remoto. Los cambios se pueden enviar al repositorio remoto luego usando **git push**.

Los comandos recurrentes que nos ayudarán a manejar los cambios son:

### git pull
Actualiza el repositorio local desde el repositorio remoto.

### git log
Nos muestra el registro de cambios en el **branch** actual.

### git status
Para ver el estado actual de los archivos del repositorio local. Nos muestra que archivos fueron modificados (nuevos, borrados, editados), y que archivos forman parte del **stage**.

### git add .
Agrega los archivos modificados al **stage**.

### git commit -m "Mensaje aquí"
Guarda todo lo contenido del **stage** dentro del **branch** actual. Este `commit` es registrado dentro del **branch**. Es usual tener muchos `commit` dentro de un **branch**.
```
git commit -m "Se agrega página 'contacto'"
```

### git push
Envia el **branch** donde nos encontramos en el repositorio local hacia el mismo **branch** en el repositorio remoto. De esta forma guardamos nuestros cambios en el servicio.

### git checkout nombre-del-branch
Nos permite movernos a otro **branch**.
```
git checkout master
```

### git checkout -b nombre-del-nuevo-branch
Crea un nuevo branch a partir del branch donde nos encontremos y nos mueve a él. Se recomienda siempre usar este comando estando en un branch principal según los determinados en tu workflow. Usualmente el branch principal es `master`.
```
git checkout master
git checkout -b nombre-del-nuevo-branch
```

Para empezar estos comandos nos serán de mucha utilidad.

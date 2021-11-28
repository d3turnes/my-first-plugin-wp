# My First Plugin WP

Plugin de base para crear tus custom block type.

## Instalación

1. Vaya al directorio plugins dentro de tu instalación de wordpress y clone el repositorio

`git clone https://github.com/d3turnes/my-first-plugin-wp.git my-first-plugin`

2. Inicie sesión en su sitio web y activelo

## Modo desarrollo

Si quieres añadir nuevos bloques, una vez clonado el repositorio debe instalar las dependencias

`npm install`

El siguiente paso será crear una nueva tarea para compilar nuestro nuevo bloque, para ello 
edite el fichero  package.json y añada el siguiente código.

```js
  ...  
  "scripts": {    
    "basic:build": "wp-scripts build src/blocks/basic/index.js --output-path=build/basic/ && cp src/blocks/basic/block.json build/basic/"
    "example:build": "wp-scripts build src/blocks/example/index.js --output-path=build/example/ && cp src/blocks/example/block.json build/example/"
  },
  ...
```

Ahora creamos la carpeta example dentro de src/blocks

El último paso, será copiar el contenido de src/blocks/basic en scr/block/example. Recuerda que el nombre de los blocks
debe ser único, asegúrese de modificar los ficheros src/blocks/example/index.js y src/blocks/example/block.json

### Compilando el nuevo block

Para compilar nuestro nuevo block, abra una nueva terminal y ejecute

`npm run example:build`

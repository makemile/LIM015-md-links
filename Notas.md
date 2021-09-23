<------método para leer un archivo------>
Lee de forma asincrónica todo el contenido de un archivo,
A la devolución de llamada se le pasan dos argumentos (err, data), 
donde dataestá el contenido del archivo.
Si no se especifica ninguna codificación, se devuelve el búfer sin procesar.

fs.readFile(path[, options], callback)

<------metodo devuelve la extension del path------->
path.extname()

<-----metodo para listar los archivos de un directorio------>
este metodo recibe un path seguido de una funcion de callback
Lee el contenido de un directorio y luego lo completa Promisecon
una matriz de los nombres de los archivos en el directorio excluyendo '.'y '..'.

fs.readdir(path[, options], callback)

<-----metodo para unir dos segmentos de la ruta------>
El método path.join () se usa para unir varios segmentos de 
ruta. Los segmentos de ruta se especifican 
mediante valores separados por comas.

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');

1. archivo 2 link 
2. carpeta que contenga 3 archivos md
3. archivo con 1 link roto

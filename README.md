# Ecommerce API
API de un ecommerce donde se pueden crear, actualizar, eliminar y buscar productos, categorías y pedidos, además de registrar y autenticar usuarios. También se pueden asignar roles y permisos a los usuarios y agregar reviews a los productos.

## Requisitos 
---

### Productos
* Endpoint para crear un producto
``` localhost:3000/products/create ```
* Endpoint para actualizar un producto
``` localhost:3000/products/updateById/id ```
* Endpoint para eliminar un producto
``` localhost:3000/products/deleteById/id ```
* El endpoint de traer productos debe mostrarse junto a la categoría o categorías que pertenece
``` localhost:3000/products/getAllProducts ```
* Endpoint que traiga un producto por su id
``` localhost:3000/products/getById/id ```
* Filtro para buscar producto por nombre
``` localhost:3000/products/getByName/name ```
* Filtro para buscar producto por precio
``` localhost:3000/products/getByPrice/price ```
* Filtro que ordene los productos de mayor a menor precio
``` localhost:3000/products/orderDesc ```
* Implementa validación a la hora de crear un producto para que se rellene todos los campos y si no se hace que devuelva un mensaje.
* Solo podrás crear, actualizar y eliminar productos si estás autenticado.
---

### Categorías
* CRUD categorias
* Endpoint para ver todas las categorías junto a los productos que tienen
* Endpoint que devuelva una categoría por id
* Filtro para buscar categoría por nombre
---

### Pedidos
* Endpoint para ver los pedidos junto a los productos que tienen
* Endpoint para crear pedidos
---

### Usuarios
Endpoint para registrar un usuario utilizando bcrypt
Endpoint para login (utilizando bcrypt + JWT)
Endpoint que nos traiga la información del usuario conectado junto a los pedidos que tiene y los productos que contiene cada pedido
Endpoint para el logout
Implementa validación a la hora de crear un usuario para que se rellene todos los campos y si no se hace que devuelva un mensaje
Seeders
Crea 5 productos con un seeder
Extras complementarios
Implementación de roles
Crear un rol Admin y que solo los usuarios con ese rol puedan crear, actualizar y eliminar productos
Multer
Investiga qué es el middleware multer e implementalo para poder adjuntar imágenes al crear o actualizar productos
Reviews
Endpoint de traer reviews que las muestre junto al usuario que hizo esa review
Actualizar el endpoint de traer todos los productos y que ahora muestre los productos junto a sus categorías y sus reviews
Actualizar el endpoint de traer producto por id y que ahora muestre los productos junto a sus categorías y sus reviews
Tecnologías utilizadas
Node.js
Express
Sequelize
MySQL
JWT
Bcrypt
Multer
Instalación
Clonar el repositorio

bash
Copy code
git clone https://github.com/tu-usuario/tu-repositorio.git
Instalar las dependencias

Copy code
npm install
Configurar las variables de entorno en un archivo .env. Un ejemplo de archivo .env se encuentra en .env.example.

Ejecutar las migraciones

Copy code
npx sequelize-cli db:migrate
Ejecutar los seeders

less
Copy code
npx sequelize-cli db:seed:all
Iniciar el servidor

sql
Copy code
npm start
Uso
La API se puede utilizar desde una herramienta de prueba de API como Postman o desde una aplicación cliente que haga peticiones HTTP.

La documentación de la API se encuentra en la ruta /api-docs.

Contribuir
Si deseas contribuir a este proyecto, por favor, haz un fork del repositorio y crea una rama

### Creacion tabla users

$ sequelize model:generate --name User --attributes first_name:string,last_name:string,username:string,email:string,password:string,role:string

$ sequelize model:generate --name Category --attributes category_name:string

$ sequelize model:generate --name Product --attributes serial_number:string,name_product:string,price_product:float,CategoryId:integer

$ sequelize model:generate --name Order --attributes amount:integer,UserId:integer

$ sequelize model:generate --name OrderProduct --attributes OrderId:integer,ProductId:integer

$ sequelize model:generate --name Review --attributes score:integer,ReviewUserId:integer,ReviewProductId:integer



sequelize seed:generate --name products-seeder

sequelize seed:generate --name users-seeder

sequelize seed:generate --name categories-seeder

sequelize seed:generate --name orders-seeder

sequelize seed:generate --name orders-products-seeder

sequelize seed:generate --name reviews-seeder





sequelize db:seed:all

sequelize db:seed --seed <nombre_del_seeder>

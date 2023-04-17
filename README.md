# Ecommerce API
API de un ecommerce donde se pueden crear, actualizar, eliminar y buscar productos, categorías y pedidos, además de registrar y autenticar usuarios. También se pueden asignar roles y permisos a los usuarios y agregar reviews a los productos.

## Requisitos 

---

### Productos
* Endpoint para crear un producto
```
 localhost:3000/products/create 
```
* Endpoint para actualizar un producto
``` 
localhost:3000/products/updateById/id 
```
* Endpoint para eliminar un producto
``` 
localhost:3000/products/deleteById/id 
```
* El endpoint de traer productos debe mostrarse junto a la categoría o categorías que pertenece
``` 
localhost:3000/products/getAllProducts 
```
* Endpoint que traiga un producto por su id
``` 
localhost:3000/products/getById/id 
```
* Filtro para buscar producto por nombre
``` 
localhost:3000/products/getByName/name 
```
* Filtro para buscar producto por precio
``` 
localhost:3000/products/getByPrice/price 
```
* Filtro que ordene los productos de mayor a menor precio
``` 
localhost:3000/products/orderDesc 
```
* Implementa validación a la hora de crear un producto para que se rellene todos los campos y si no se hace que devuelva un mensaje.

* Solo podrás crear, actualizar y eliminar productos si estás autenticado.

---

### Categorías
* CRUD categorias
```
localhost:3000/categories/create
localhost:3000/categories/getAll
localhost:3000/categories/updateById/id
localhost:3000/categories/deleteById/id
```
* Endpoint para ver todas las categorías junto a los productos que tienen
```
localhost:3000/categories/getAllCategories
```
* Endpoint que devuelva una categoría por id
```
localhost:3000/categories/getById/id
```
* Filtro para buscar categoría por nombre
```
localhost:3000/categories/getByName/Deporte
```
---

### Pedidos
* Endpoint para ver los pedidos junto a los productos que tienen
```
localhost:3000/orders/getOrderProduct
```
* Endpoint para crear pedidos
```
localhost:3000/orders/create/
```
---

### Usuarios
* Endpoint para registrar un usuario utilizando bcrypt
```
localhost:3000/users/create
```
* Endpoint para login (utilizando bcrypt + JWT)
```
localhost:3000/users/login
```
* Endpoint que nos traiga la información del usuario conectado junto a los pedidos que tiene y los productos que contiene cada pedido
```
localhost:3000/users/getUserOrderProduct/id
```
* Endpoint para el logout
```
localhost:3000/users/logout
```
* Implementa validación a la hora de crear un usuario para que se rellene todos los campos y si no se hace que devuelva un mensaje

---

### Seeders
* Crea 5 productos con un seeder

---

### Implementación de roles
* Crear un rol Admin y que solo los usuarios con ese rol puedan crear, actualizar y eliminar productos

---

### Multer
* Investiga qué es el middleware multer e implementalo para poder adjuntar imágenes al crear o actualizar productos

---

### Reviews
* CRUD review
* Endpoint de traer reviews que las muestre junto al usuario que hizo esa review
* Actualizar el endpoint de traer todos los productos y que ahora muestre los productos junto a sus categorías y sus reviews
* Actualizar el endpoint de traer producto por id y que ahora muestre los productos junto a sus categorías y sus reviews

---

## Tecnologías utilizadas
* Node.js
* Express
* Sequelize
* MySQL
* JWT
* Bcrypt
* Multer

---

## Instalación

1. Clonar el repositorio
```
https://github.com/tu-usuario/tu-repositorio.git 
```
2. Instalar las dependencias
```
npm install
```

3. Configurar las variables de entorno 

4. Ejecutar las migraciones
```
 sequelize-cli db:migrate
```

5. Ejecutar los seeders

```
sequelize-cli db:seed:all
```

6. Iniciar el servidor
```
npm start
```

## Uso
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

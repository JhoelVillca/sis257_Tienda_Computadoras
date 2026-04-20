# Tienda de Computadoras

##  Descripción del Proyecto
Este proyecto consiste en el desarrollo de un sistema de gestión integral para una tienda de hardware y computadoras. El objetivo principal es administrar de manera eficiente, segura y escalable la información relacionada con clientes, vendedores, inventario físico y transacciones financieras.

El sistema permite realizar operaciones como registro de usuarios, control de stock de componentes, trazabilidad absoluta de ventas por empleado, y administración centralizada del negocio. Está diseñado para la gestión física en tiendas.

##  Objetivos Principales
* **Gestión de Identidad:** Administrar credenciales y perfiles de clientes y usuarios del sistema.
* **Control de Personal:** Administrar perfiles, ventas y accesos de los vendedores.
* **Inventario :** Controlar el stock de computadoras y accesorios.
* **Trazabilidad de Ventas:** Registrar transacciones comerciales, vinculando al cliente, al vendedor.

##  Descripción del Negocio
La tienda de computadoras se dedica a la comercialización de:
* Computadoras de escritorio (ensambladas y de marca)
* Laptops (gaming, oficina)
* Accesorios (teclados mecánicos, mouses, audífonos, monitores)
* Componentes de hardware (memorias RAM, unidades SSD/NVMe, procesadores, tarjetas gráficas)


---

##  Entidades del Sistema 

###  1. Usuario 
Representa las credenciales de acceso al sistema, tanto para un cliente o un empleado.
* `id` (UUID, Primary Key): Identificador único irrompible.
* `email` (VARCHAR, Unique): Correo electrónico (Login).
* `password` (VARCHAR): Contraseña.
* `rol` (VARCHAR): Nivel de acceso ('admin', 'vendedor', 'cliente').
* `fecha_registro` (TIMESTAMP): Cuándo se creó la cuenta.

###  2. Cliente 
* `id` (UUID, Primary Key)
* `usuario_id` (UUID, Foreign Key -> Usuario.id): Enlace a sus credenciales.
* `nombre_completo` (VARCHAR): Nombre del cliente.
* `telefono` (VARCHAR): Número de contacto.
* `nit_facturacion` (VARCHAR): Documento para facturas.

###  3. Vendedor 
* `id` (UUID, Primary Key)
* `usuario_id` (UUID, Foreign Key -> Usuario.id): Enlace a sus credenciales.
* `nombre_completo` (VARCHAR): Nombre del empleado.
* `telefono` (VARCHAR): Número de contacto interno.
* `salario` (DECIMAL 10,2): Remuneración.
* `fecha_contratacion` (DATE): Fecha de ingreso a la empresa.

###  4. Producto 
* `id` (UUID, Primary Key)
* `nombre` (VARCHAR): "Laptop ASUS ROG Strix",etc.
* `marca` (VARCHAR):  "ASUS", "Corsair",etc.
* `categoria` (VARCHAR):  "Laptop", "Componente".
* `precio` (DECIMAL 10,2): Precio unitario de venta.
* `stock` (INT): Cantidad de unidades  disponibles.
* `especificaciones` (JSONB): Atributos técnicos del producto (RAM, CPU, etc).

###  5. Venta 
* `id` (UUID, Primary Key): Número de factura.
* `cliente_id` (UUID, Foreign Key -> Cliente.id).
* `vendedor_id` (UUID, Foreign Key -> Vendedor.id).
* `fecha_venta` (TIMESTAMP): Momento de la transacción.
* `total_calculado` (DECIMAL 10,2): El total de la compra.

---

##  Tecnologias
* **Backend:** PostgreSQL  + NestJS + JWT.
* **Frontend:** Vue.js + axios + template bootstrap.

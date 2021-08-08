# Ine Maroc - React JS, Proyecto CoderHouse!

Este proyecto fue inicializado con [Create React App] ([https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)).

## Sobre el Proyecto

El proyecto se creo con fines académicos, se respetaron las mejores prácticas impartidas durante las clases en el marco del curso de ReactJs brindado por **CoderHouse**.

El mismo consiste en la realización de un e-commerce, denominado My Store, en el cual se pueden probar las funcionalidades aprendidas.

Se instalaron las siguientes dependencias: 

- Framework de Boostrap con su correspondiente optimización para React (https://react-bootstrap.github.io/), para la utilización de componentes pre-armados, con estilos pre-definidos, los cuales fueron adaptados para su mejor uso.
- Librería de íconos React Icons, optimizada para React (https://react-icons.github.io/react-icons/)
- Extensión de estilos CSS, SASS (https://create-react-app.dev/docs/adding-a-sass-stylesheet/).
- ruteo para otorgar navegabilidad al proyecto, implementando React Router DOM (https://reactrouter.com/web/guides/quick-start).
- Firebase para implementar una base de datos (https://firebase.google.com/docs/web/setup?authuser=0).

# Contenedores y Componentes

Se definieron 4 (cuatro) grandes contenedores, invocados desde App.jsx:

- **NavBar**: incluido en toda la navegación de la tienda, incorpora el logo de la tienda, las categorías y el carrito de compras.
	> Los componentes que lo conforman son: "NavBar" y "CartWidget".
- **ItemListContianer**: incluido en la ruta "/" y en "/category/:category", para mostrar todos los productos disponibles , y navegar su agrupación por categoría (desde el itemList alojado en el StoreContext).
	> Los componentes que lo conforman son: "ItemList" que recibe los productos obtenidos del container e itera por cada uno de ellos, invocando los "Items" y al "Counter"- que conforman el card del producto propiamente dicho. Permite incluir la cantidad deseada del producto en el carrito de compras del "NavBar" (en caso de no haber stock disponible, informa dicha situación).
- **ItemDetailContainer**:  incluido en la ruta "/item/:id" donde se podrá ver el detalle del producto seleccionado.
	> Los componentes que lo conforman son: "ItemDetail", que muestra título, descripción, precio, stock, imagen, y, el "Counter" que en caso de haber stock disponible, permite incluir la cantidad deseada del producto en el carrito de compras del "NavBar" (en caso de no haber stock disponible, informa dicha situación).
- **ItemCheckoutContainer**:  incluido en la ruta "/checkout" donde se podrá ver el detalle del carrito a medida que se van agregando productos al mismo, el formulario para ingresar los datos del comprador y en el caso de que la orden sea creada el detalle de la misma con la posibilidad de confirmarla o eliminarla de no estar conforme.
	>Los componentes que lo conforman son: "Checkout" y "Form" en primera instancia cuando se están agregando productos al carrito y cuando la orden es creada "CheckoutOrder", donde se obtiene el Id de la orden y el detalle de la misma.

## Contexto

Se creo un contexto donde se alojan las variables y funciones comunes a todo el proyecto y como así también los accesos a la base de datos, **StoreContext**.

## Firebase

Se generó un repositorio en Firebase para alojar los productos del Store y las ordenes generadas por los clientes. Dentro de "/src/firebase" se incluye el archivo "client.js" donde se configura la conexión. 

Las llamadas a la misma están en el StoreContext:
- **getItems**
	> Se obtienen todos los productos de la tienda
- **createOrder**
	> Se genera la orden del cliente, y se actualiza el stock de la Base de datos restando los productos seleccionados por el cliente
- **deleteOrder**
	>Se elimina la orden del cliente y se actualiza el stock de la Base de datos sumando los productos de la orden eliminada.

# Implementación en Vercel 

https://react-js-camada17565.vercel.app/

#
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

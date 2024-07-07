- Español
  - [Sobre Entrenaly](#sobre-entrenaly)
  - [Arquitectura del software](#arquitectura-del-software)
    - [Capas del software](#capas-del-software)
    - [Estructura de carpetas](#estructura-de-carpetas)
    - [Sobre la forma de escribir código](#sobre-la-forma-de-escribir-código)
  - [Instalación](#instalación)
    - [Prerrequisitos](#prerrequisitos)
    - [Pasos de instalación](#pasos-de-instalación)
  - [Sobre mi](#sobre-mi)
  - [Licencia](#licencia)
- English
  - [About Entrenaly](#about-entrenaly)
  - [Software architecture](#software-architecture)
    - [Software layers](#software-layers)
    - [Folder structure](#folder-structure)
    - [About the way to write code](#about-the-way-to-write-code)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Installation steps](#installation-steps)
  - [About me](#about-me)
  - [License](#license)

---

## Sobre Entrenaly

Entrenaly es una aplicación diseñada para optimizar y simplificar las tareas de los entrenadores personales, permitiéndoles gestionar todos los aspectos de su trabajo en un solo lugar de manera fácil y eficiente. Con Entrenaly los entrenadores pueden administrar sus clientes con su información médica, elaborar planes de entrenamiento personalizados y asignarlos directamente a cada uno de ellos.

La aplicación también permite a los entrenadores añadir sus propios ejercicios con soporte multimedia, como GIFs o videos, para que los clientes puedan visualizar las demostraciones necesarias al revisar sus planes de entrenamiento.

Cada cliente tiene acceso a la aplicación donde puede ver todos sus planes asignados, facilitando así un seguimiento detallado y eficaz de su progreso.

![entrenalt-exercises view](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/dd4e706c-6e1d-4ac8-91d5-07fda6245003)

---

## Arquitectura del software

Para la arquitectura dividí el software en "capas", una estructura similar a "Clean Architecture", así poder separar mejor las responsabilidadaes y lograr que se convierta en un software mantenible, escalable y con facilidad para los cambios. Estas capas tienen distintas responsabilidades, obligaciones y prohibiciones.

Es importante mencionar que la arquitectura se basa fuértemente en las distintas entidades del negocio, las mismas afectan en la estructura de carpetas y del código en general.

Las entidades del Entrenaly son:

- Client (Cliente)
- Exercise (Ejercicio)
- Plan (Plan)
- User (Usuario)

El siguiente gráfico muestra cómo están compuestas las capas de la estructura del proyecto:

![entrenaly-layers](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/26fbc9c7-ae3b-4be4-a54b-a3b66af89f12)

Mientras más lejos del centro se encuentra una capa, más se utiliza a lo largo de todo el software por lo que es fundamental que sea fácil de modificar y reemplazar de ser necesario, si no generará un impacto negativo en todo el software. Caso contrario, mientras más cerca del centro esté una capa menos se utiliza a lo largo de todo el software porque forma parte del core del mismo, por lo que es poco probable que se tenga que cambiar o modificar a futuro.

Además, podemos ver unas flechas que van desde el centro hacia afuera, las mismas indican como se deben comportar las capas cuando interactúen entre si. Esto puesto en práctica no es más que una regla de imports, por ejemplo, desde la carpeta de Services no podemos interactuar con la carpeta Routes ya que es el core de nuestra aplicación, sin embargo desde los hooks podemos acceder a los services.

- Routes puede importar Pages y Layouts
- Pages y Layouts pueden importarse tanto a si mismos como a Components y Context.
- Components, y Contexts pueden importarse tanto a si mismos como a Services, Hooks y Lib.

Como mencioné anteriormente, Services, Hooks y Lib al ser carpetas que están en la última capa deben contener funciones específicas que puedan ser reemplazadas fácilmente, ya sean funciónes de lectura de datos en la carpeta Services o la creación de toast en la carpeta de Lib.

### Capas del software

Repasemos cada capa con sus respectivas carpetas:

**Routes**  
Hace referencia a las rutas de nuestra aplicación, ya sea para el administrados, entrenador y/o cliente, las mismas se van a encargar de manejar la lógica de qué ruta devolver dependiendo los requerimientos.

**Pages**  
Hace referencia a las páginas de nuestra aplicación, las que van a ser llamadas dentro de las rutas, cada página se va a encargar de toda la lógica que se tenga que enviar a cada ruta en específico.

**Layout**  
Hace referencia a la plantilla que van a tener cada página que se muestre en nuestra aplicación, las mismas van a ser llamadas dentro de las páginas y podrán variar dependiendo la autenticación o el rol del usuario.

**Context**  
Hace referencia a todos los React Context que van a manejar los distintos estados globales dentro de nuestra aplicación, los mismos van a ser llamados principalmente por las páginas y los componentes.

**Components** 
Hace referencia a todos los componentes que se utilizan a lo largo de las distintas páginas y layouts, dentro de los mismos encontraremos componentes de tipo "common" (componentes comunes de react), componentes de tipo "forms" (formularios) y componentes de tipo "dialogs" (también llamados modales). Lo ideal es que si un componente se utiliza dos veces de la misma forma dentro de nuestra aplicación debe ir acá.

**Services**  
Hace referencia a la parte dentro de nuestra aplicación que interactúa con las distintas api's necesarias para el funcionamiento del software.

**Hooks**  
Hace referencia a funciones específicas que se repiten a lo largo de nuestra aplicación, idealmente se utilizan para todos los servicios de tipo GET, así poder tener un código más simple y controlar mejor cada petición.

**Lib**  
Hace referencia a la librería dentro de nuestro software, algo similar a una librería de JavaScript, es decir herramientas específicas y/o paquetes que se utilizan a lo largo de la aplicación. Por ejemplo configuraciónes, constantes, types, utils, notificaciones, etc.

### Estructura de carpetas

A lo largo de la explicación vamos a distinguir entre dos tipos de archivos:

archivos-typescript.ts  
ComponentesReact.tsx

Dentro de cada carpeta principal que conforman las distintas capas del software veremos que las entidades juegan un punto clave ya que dividimos los archivos que tengan dentro en base a las mismas.

Esto lo podemos ver por ejemplo en la carpeta de Services, donde los distintos servicios se dividen entre cuatro carpetas: Client, Exercise, Plan, User, haciendo alusión a las entidades del software.

![folder](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/da378b2c-13d0-49db-ab1d-b2b461a3c71f)

También podemos ver este patrón en la carpeta Routes la cual en este caso en particular divide la entidad de user en base a los distintos roles y agrega una nueva carpeta llamada "public" la cual hace referencia a las rutas públicas.

![frontent-architecture](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/d3642293-b79c-4230-b188-95ab87fa1b4f)

Este mismo patrón se repite tanto para Pages, Constants, Layouts, Hooks, y Forms, el hacer esto ayuda a dividir mejor los archivos y no tener una carpeta con demasiadas carpetas dentro.

Cada carpeta que contenga un componente de React (ComponentesReact.tsx) contará con la siguiente estructura:

```bash
   [component] - Carpeta principal
      [components] - Carpeta con los componentes del componente principal
      [styles] - Carpeta con los estilos del componente principal
      [lib] - Carpeta con funciones específicas (por ejemplo validations.js de yup)
      Component.tsx - Componente principal
```

Las carpetas que contienen archivos de typescript, por ejemplo archivo-typescript.ts, deben estar solos, sin carpeta principal, siempre y cuando no se basen en las entidades del proyecto. Veamos unos ejemplos:

Los services tienen distintas carpetas dependiendo la entidad porque se basan principalmente en las mismas.

![folder](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/da378b2c-13d0-49db-ab1d-b2b461a3c71f)

En cambio, tanto env.ts como toast.ts contienen archivos typescript normales, que son independiente de las entidades, y como no dependen de las mismas deben guardarse sin carpeta.

![folder](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/5f636343-00b5-4594-957b-80f9b06c978f)

### Sobre la forma de escribir código

Dentro de cada software es importante definir cómo se debe escribir el código, si bien no hay que encontrar la forma perfecta de hacerlo es fundamental seguir una buena linealidad que esté documentada, así será más fácil el entenderlo a futuro y no aumentará el costo de la comprensión del software.

A continuación voy a dar una manera simple de escribir código en base a la capa donde nos encontremos, la acción que queremos realizar y, de ser así, la entidad con la que estamos interactuando, abstrayéndonos de la tecnología y de los métodos en sí.

Repasemos esta regla dentro de las distintas capas:

**Pages y Components**  
Cualquier función dentro de estas capas que se encargue de realizar algo específico deberá ser nombrada de la siguiente manera:

```bash
    1[handle]2[Open]3[ModalExercises]

    1 - Identificador de la capa de archivos .tsx
    2 - Verbo basado en la acción que se desea realizar (open, modify, resize, etc).
    3 - Entidad o componente con el que interactúa.
```

**Hooks**  
Los hooks deben ser nombrados y utilizados de la siguiente manera, con respecto al punto 3 el mismo puede cariar ya sea que se trate de una entidad del negocio (Exercise) o una entidad aparte (debounce):

```bash
    1[use]2[Read]3[Exercises]

    1 - Identificador de la capa de hooks
    2 - Verbo basado en el acrónimo CRUD
    3 - Entidad
```

**Services**  
Los services deben ser nombrados y utilizados de la siguiente manera, ya sea que se trate de una entidad del negocio (Exercise) o una entidad aparte (CloudinaryCredentials):

```bash
    1[get]2[Exercises]3[Service]

    1 - Verbo basado en el acrónimo CRUD
    2 - entidad
    3 - Especificador de la capa
```

**Lib**  
Dentro de lib puede variar mucho la estructura ya que podemos encontrarnos con distintos tipos de librerías, herramientas componentes de react o funciones. Sin embargo, con respecto a las funciones siempre trataremos de mantener este formato:

```bash
    1[create]2[Toast]3[Lib]

    1 - Verbo basado en el acrónimo CRUD
    2 - entidad
    3 - Especificador de la capa
```

---

## Instalación

Para instalar y correr el proyecto de forma local sigue los siguientes pasos

### Prerrequisitos

Antes de realizar la instalación, asegúrate de tener las siguientes herramientas configuradas:

- [Node.js](https://nodejs.org/) (version 18 o mayor)
- [Backend Entrenaly](https://github.com/juanuranidev/entrenaly-backend)
- [Aplicación de Firebase para autenticación](https://firebase.google.com/)

### Pasos de instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/juanuranidev/entrenaly-frontend
   ```

2. Navega hasta el directorio:
   ```bash
   cd entrenaly-frontend
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Crea un archivo .env basado en el archivo .env.example y agrega tus variables de entorno:
   `VITE_BACKEND_BASE_URL=`  
   `VITE_FRONTEND_BASE_URL=http://localhost:5173/`  
   `VITE_APP_VERSION=1.2.0`  
   `VITE_FIREBASE_API_KEY=`  
   `VITE_FIREBASE_AUTH_DOMAIN=`  
   `VITE_FIREBASE_PROJECT_ID=`  
   `VITE_FIREBASE_STORAGE_BUCKET=`  
   `VITE_FIREBASE_MESSAGING_SENDER_ID=`  
   `VITE_FIREBASE_APP_ID=`  
   `VITE_FIREBASE_MEASUREMENT_ID=`

5. Inicia el modo desarrollo:
   ```bash
   npm run dev
   ```

6. Abre tu navegador y visita http://localhost:5173/ para ver la aplicación

---

## Sobre mi

Proactivo, creativo y apasionado por el desarrollo de aplicaciones innovadoras. Con más de dos años de experiencia profesional como desarrollador de software, disfruto especialmente de la creación de aplicaciones de uso diario y de la arquitectura de software. Actualmente estoy cursando la carrera de Ingeniería en Software en la Universidad Siglo 21, lo que refuerza mi compromiso con el crecimiento contínuo y la evolución hacia una carrera sólida en ingeniería y arquitectura de software.

Puedes ver mi portafolio en el siguiente link:

https://juanurani.netlify.app/

Conectemos en LinkedIn:

https://www.linkedin.com/in/juanurani/

---

## Licencia

MIT License

Copyright (c) [2024] [Juan Urani]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## About Entrenaly

Entrenaly is an application designed to optimize and simplify the tasks of personal trainers, allowing them to manage all aspects of their work in one place easily and efficiently. With Entrenaly, trainers can manage their clients with their medical information, create personalized training plans and assign them directly to each client.

The application also allows trainers to add their own exercises with multimedia support, such as GIFs or videos, so that clients can view the necessary demonstrations when reviewing their training plans.

Each client has access to the application where they can view all their assigned plans, thus facilitating a detailed and efficient tracking of their progress.

![entrenalt-exercises view](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/dd4e706c-6e1d-4ac8-91d5-07fda6245003)

---

## Software architecture

For the architecture I divided the software into "layers", a structure similar to "Clean Architecture", in order to better separate responsibilities and make it a maintainable, scalable and easily changeable software. These layers have different responsibilities, obligations and prohibitions.

It is important to mention that the architecture is strongly based on the different business entities, which affect the structure of folders and code in general.

The entities of the Entrenaly are:

- Client
- Exercise
- Plan
- User

The following graphic shows how the layers of the project structure are composed:

![entrenaly-layers](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/26fbc9c7-ae3b-4be4-a54b-a3b66af89f12)

The farther a layer is from the center, the more it is used throughout the software, so it is essential that it is easy to modify and replace if necessary, otherwise it will have a negative impact on the whole software. On the contrary, the closer a layer is to the center, the less it is used throughout the software because it is part of its core, so it is unlikely that it will have to be changed or modified in the future.

In addition, we can see some arrows that go from the center outwards, they indicate how the layers should behave when they interact with each other. This put in practice is nothing more than an import rule, for example, from the Services folder we cannot interact with the Routes folder since it is the core of our application, however from the hooks we can access the services.

- Routes can import Pages and Layouts
- Pages and Layouts can import themselves as well as Components and Contexts.
- Components, and Contexts can import themselves as well as Services, Hooks and Lib.

As I mentioned before, Services, Hooks and Lib being folders that are in the last layer must contain specific functions that can be easily replaced, be it data reading functions in the Services folder or toast creation in the Lib folder.

### Software layers

Let's review each layer with its respective folders:

**Routes**  
Refers to the routes of our application, either for the administrator, trainer and/or client, they will handle the logic of which route to return depending on the requirements.

**Pages**  
Refers to the pages of our application, which will be called within the routes, each page will be responsible for all the logic that has to be sent to each specific route.

**Layout**  
Refers to the template that will have each page that is displayed in our application, they will be called within the pages and may vary depending on the authentication or user role.

**Context**  
It makes reference to all the React Context that are going to handle the different global states inside our application, they are going to be called mainly by the pages and the components.

**Components** 
Refers to all the components that are used throughout the different pages and layouts, within them we will find components of type "common" (common react components), components of type "forms" (forms) and components of type "dialogs" (also called "modal"). Ideally, if a component is used twice in the same way within our application it should go here.

**Services**  
Refers to the part within our application that interacts with the different api's necessary for the software to work.

**Hooks**  
Refers to specific functions that are repeated throughout our application, ideally they are used for all GET type services, so we can have a simpler code and better control each request.

**Lib**  
Refers to the library within our software, something similar to a JavaScript library, i.e. specific tools and/or packages that are used throughout the application. For example configurations, constants, types, utils, notifications, etc.

### Folder structure

Throughout the explanation we will distinguish between two types of files:

files-typescript.ts  
ComponentsReact.tsx

Inside each main folder that conforms the different layers of the software we will see that the entities play a key point since we divide the files that they have inside based on the same ones.

This can be seen for example in the Services folder, where the different services are divided into four folders: Client, Exercise, Plan, User, alluding to the software entities.

![folder](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/da378b2c-13d0-49db-ab1d-b2b461a3c71f)

We can also see this pattern in the Routes folder which in this particular case divides the user entity based on the different roles and adds a new folder called "public" which refers to the public routes.

![frontent-architecture](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/d3642293-b79c-4230-b188-95ab87fa1b4f)

This same pattern is repeated for Pages, Constants, Layouts, Hooks, and Forms, doing this helps to better divide the files and not have a folder with too many folders inside.

Each folder containing a React component (ComponentsReact.tsx) will have the following structure:

```bash
   [component] - Main folder
      [components] - Folder with the main component components
      [styles] - Folder with styles of the main component
      [lib] - Folder with specific functions (for example yup´s validations.js)
      Component.tsx - Main component
```

Folders containing typescript files, for example file-typescript.ts, should stand alone, without main folder, as long as they are not based on project entities. Lets see some examples:

Services have different folders depending on the entity because they are mainly based on the entities.

![folder](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/da378b2c-13d0-49db-ab1d-b2b461a3c71f)

On the other hand, both env.ts and toast.ts contain normal typescript files, which are independent of the entities, and since they do not depend on the entities they should be stored without a folder.

![folder](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/5f636343-00b5-4594-957b-80f9b06c978f)

### About the way to write code

Within each software it is important to define how the code should be written, although it is not necessary to find the perfect way to do it, it is essential to follow a good linearity that is documented, so it will be easier to understand it in the future and it will not increase the cost of understanding the software.

Next I will give a simple way to write code based on the layer where we are, the action we want to perform and, if so, the entity with which we are interacting, abstracting from the technology and the methods themselves.

Let´s review this rule within the different layers:

**Pages and Components**.  
Any function within these layers that is responsible for doing something specific should be named as follows:

```bash
    1[handle]2[Open]3[ModalExercises]

    1 - Identifier of the .tsx file layer
    2 - Verb based on the action to be performed (open, modify, resize, etc).
    3 - Entity or component with which it interacts.
```

**Hooks**  
The hooks must be named and used in the following way, with respect to point 3 the same can change whether it is a business entity (Exercise) or a separate entity (debounce):

```bash
    1[use]2[Read]3[Exercises]

    1 - Identifier of the hooks layer
    2 - Verb based on the CRUD acronym
    3 - Entity
```

**Services**  
Services should be named and used as follows, whether it is a business entity (Exercise) or a separate entity (CloudinaryCredentials):

```bash
    1[get]2[Exercises]3[Service]

    1 - verb based on the CRUD acronym
    2 - entity
    3 - layer specifier
```

**Lib**  
Within lib the structure can vary a lot since we can find different types of libraries, react component tools or functions. However, with respect to functions we will always try to keep this format:

```bash
    1[create]2[Toast]3[Lib]

    1 - verb based on the CRUD acronym
    2 - entity
    3 - layer specifier
```

---

## Installation

To install and run the project locally follow the steps below

### Prerequisites

Before performing the installation, make sure you have the following tools configured:

- [Node.js](https://nodejs.org/) (version 18 or higher).
- [Backend Entrenaly](https://github.com/juanuranidev/entrenaly-backend)
- [Firebase application for authentication](https://firebase.google.com/)

### Installation steps

1. Clone this repository:
   ```bash
   git clone https://github.com/juanuranidev/entrenaly-frontend
   ```

2. Navigate to the directory:
   ```bash
   cd entrenaly-frontend
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create an .env file based on the .env.example file and add your environment variables:
   `VITE_BACKEND_BASE_URL=` 
   `VITE_FRONTEND_BASE_URL=http://localhost:5173/`  
   `VITE_APP_VERSION=1.2.0`  
   `VITE_FIREBASE_API_KEY=`  
   `VITE_FIREBASE_AUTH_DOMAIN=`  
   `VITE_FIREBASE_PROJECT_ID=`  
   `VITE_FIREBASE_STORAGE_BUCKET=`  
   `VITE_FIREBASE_STORAGE_BUCKET=`  
   `VITE_FIREBASE_MESSAGING_SENDER_ID=`  
   `VITE_FIREBASE_APP_ID=`  
   `VITE_FIREBASE_MEASUREMENT_ID=`.

5. Start development mode:
   ````bash
   npm run dev
   ```

6. Open your browser and visit http://localhost:5173/ to see the application

---

## About me

Proactive, creative and passionate about developing innovative applications. With more than two years of professional experience as a software developer, I especially enjoy creating everyday applications and software architecture. I am currently pursuing a degree in Software Engineering at Siglo 21 University, which reinforces my commitment to continuous growth and evolution towards a solid career in software engineering and architecture.

You can see my portfolio at the following link:

https://juanurani.netlify.app/

Let's connect on LinkedIn:

https://www.linkedin.com/in/juanurani/

---

## License

MIT License

Copyright (c) [2024] [Juan Urani].

Permission is hereby granted, free of charge, to any person who obtains a copy
of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including
in the Software without restriction, including without limitation the rights to use, copy, modify, merge, modify, merge, reverse engineer, copy, modify, merge, reverse engineer
to use, copy, modify, merge, merge, publish, distribute, sublicense and/or sell copies of the Software.
sublicense and/or sell copies of the Software, and to permit persons to whom the Software is made available to use, copy, modify, merge, publish, distribute, sublicense and/or sell copies of the Software, subject to the following
the Software, subject to the following conditions:

The foregoing copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE FOLLOWING
IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE IN ANY EVENT FOR ANY CLAIM, DAMAGE OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, WHETHER IN CONTRACT, TORT, NEGLIGENCE OR OTHERWISE.
LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE, ARISING OUT OF,
FROM OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS WITH THE SOFTWARE.
SOFTWARE.
# Entrenaly (frontend)

Entrenaly es una innovadora aplicación diseñada para optimizar y simplificar las tareas de los entrenadores personales, permitiéndoles gestionar todos los aspectos de su trabajo de manera fácil y eficiente. Con Entrenaly, los entrenadores pueden crear perfiles de clientes y elaborar planes de entrenamiento personalizados, asignándolos directamente a cada cliente.

La aplicación también permite a los entrenadores añadir sus propios ejercicios con soporte multimedia, como GIFs o videos, para que los clientes puedan visualizar las demostraciones necesarias al revisar sus planes de entrenamiento.

Cada cliente tiene acceso a una pantalla personalizada donde puede ver todos sus planes asignados, facilitando así un seguimiento detallado y eficaz de su progreso.

## Arquitectura del proyecto

Para la arquitectura del frontend dividí la aplicación en "capas", así poder separar mejor las responsabilidadaes y lograr que sea un software mantenible, escalable y de calidad. Estas capas tienen distintas responsabilidades, obligaciones y prohibiciones.

Es importante mencionar que la arquitectura se basa fuértemente en las distintas entidades del software, las mismas afectan principalmente en la estructura de carpetas y del código en si.

Las entidades del software son:

- client
- exercise
- plan
- user

El siguiente gráfico muestra cómo están compuestas las capas de la estructura del proyecto:

Podemos observar que mientras más lejos del centro se encuentre una carpeta, más se utiliza dentro del sistema por lo que es fundamental que sean fáciles de manipular y de cambiar porque sino puede generar un impacto negativo en el mismo.

Además, podemos ver unas flechas que van desde el centro hacia afuera, las mismas indican una obligatoriedad al momento que tengan que interactuar. Por ejemplo, desde la carpeta de Services no podemos interactuar con la carpeta Routes ya que es el core de nuestra aplicación.

- Routes puede importar Pages y Layouts
- Pages y Layouts pueden importarse tanto a si mismos como a Components, Hooks y Contexts.
- Components, Hooks y Contexts pueden importarse tanto a si mismos como a Services y Lib.

Services y Lib al ser carpetas que están en la última capa deben contener funciones específicas que puedan ser reemplazadas fácilmente, ya sean funciónes de lectura de datos en la carpeta Services o la creación de toast en la carpeta de Lib.

#### Sobre la estructura de carpetas

Dentro de cada carpeta principal que conforman las distintas capas del software veremos que las entidades juegan un punto clave ya que dividimos los archivos que tengan dentro en base a las mismas.

![folder](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/da378b2c-13d0-49db-ab1d-b2b461a3c71f)

Esto lo podemos ver por ejemplo en la carpeta de Services, donde los distintos servicios se dividen entre cuatro carpetas: Client, Exercise, Plan, User, haciendo alusión a las entidades del software.

![folder](https://github.com/juanuranidev/juanuranidev/assets/96846723/d55d344d-6ed2-4546-aca8-e3c88ff3c286)

También podemos verlo en la carpeta de routes la cual en este caso contiene una más llamada "public" la cuál hace referencia al las rutas públicas.

Lo mismo se repite tanto para Pages, Constants, Layouts, Hooks, y Forms, el hacer esto ayuda a dividir mejor los archivos y no tener una carpeta con demasiadas carpetas dentro.

Cada carpeta que contenga un componente de React (.tsx) contará con la siguiente estructura:

```bash
    [component] - Carpeta principal
      [components] - Carpeta con los componentes del componente principal
      [styles] - Carpeta con los estilos del componente principal
      Component.tsx - Componente principal
```

Las carpetas que contienen archivos .ts deben estar solos, sin carpeta principal, siempre y cuando no se basen en las entidades del proyecto. Por ejemplo:

![folder](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/da378b2c-13d0-49db-ab1d-b2b461a3c71f)

Los services tienen distintas carpetas dependiendo la entidad porque interactúan diréctamente con la misma.

![folder](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/5f636343-00b5-4594-957b-80f9b06c978f)

En cambio, tanto env.ts como toast.ts contienen archivos .ts, como no influyen en base a la entidad deben guardarse sin carpeta.

#### Sobre la forma de escribir código

Siempre es importante definir cómo se debe escribir el código, sin embargo no hay que volverse loco con ello, no hay que encontrar la forma perfecta de nombrar las cosas sino que hay que buscar una buena forma de nombrar en base a la acción que queremos realizar, la entidad con la que estamos interactuando y abstraernos de la tecnología y los métodos en sí.

Repasemos esta regla dentro de las distintas capas

Services:

```bash
    1[get]2[Exercises]3[Service]

    1 - Verbo basado en el acrónimo CRUD
    2 - entidad
    3 - Especificador de la capa
```

Lib:

```bash
    1[create]2[Toast]

    1 - Verbo basado en el acrónimo CRUD
    2 - entidad
```

Hooks:

Service que sea de obtención de datos (GET) por defecto deberá tener su propio hook para simplificar el código al momento de pedir los mismos.

```bash
    1[use]2[Read]3[Exercises]

    1 - Identificador de la capa de hooks
    2 - Verbo basado en el acrónimo CRUD
    3 - Entidad
```

Pages y Components:

Cualquier función dentro de un componente .tsx y .ts que se encargue de realizar algo específico deberá ser nombrado de la siguiente manera:

```bash
    1[handle]2[Open]3[ModalExercises]

    1 - Identificador de la capa de archivos .tsx
    2 - Verbo basado en la acción que se desea realizar (open, modify, resize, etc).
    3 - Entidad (en este caso no debe ser obligatoriamente una entidad del proyecto).
```

## Instalación

Para instalar y correr el proyecto de forma local lee los siguientes pasos

#### Prerrequisitos

Antes de realizar la instalación, asegúrate de tener las siguientes herramientas configuradas:

- [Node.js](https://nodejs.org/) (version 18 o mayor)
- [Backend Entrenaly](https://github.com/juanuranidev/entrenaly-backend)
- [Aplicación de Firebase para autenticación](https://firebase.google.com/)

#### Pasos de instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/juanuranidev/entrenaly-frontend
   ```
2. Navega hasta el directorio:
   ```bash
   cd codersrace
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Crea un archivo .env basado en el archivo .env.example y agrega tus variables de entorno:
   `VITE_BACKEND_BASE_URL=`

   `VITE_FRONTEND_BASE_URL=`

   `VITE_APP_VERSION=`

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

## Sobre mi

Proactivo, creativo y apasionado por el desarrollo de aplicaciones innovadoras. Con más de dos años de experiencia profesional como desarrollador de software, disfruto especialmente de la creación de aplicaciones de uso diario y de la arquitectura de software. Actualmente estoy cursando la carrera de Ingeniería en Software en la Universidad Siglo 21, lo que refuerza mi compromiso con el crecimiento contínuo y la evolución hacia una carrera sólida en ingeniería y arquitectura de software.

Puedes ver mi portafolio en el siguiente link:

https://juanurani.netlify.app/

Conectemos en LinkedIn:

https://www.linkedin.com/in/juanurani/

## License

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

## Arquitectura

The main technology used for the coders race frontend is Next.js. Also, in addition to the libraries automatically installed at startup, these are some of the most important libraries used:

- @mantine/core ^6.0.19
- @mantine/hooks ^6.0.19
- @types/luxon ^3.3.2
- axios ^1.5.1
- eslint 8.47.0
- framer-motion ^10.16.1
- luxon ^3.4.2
- next-auth ^4.23.2
- react-hot-toast ^2.4.1

# Entrenaly (frontend)

Entrenaly es una aplicación diseñada para optimizar y simplificar las tareas de los entrenadores personales, permitiéndoles gestionar todos los aspectos de su trabajo en un solo lugar de manera fácil y eficiente. Con Entrenaly los entrenadores pueden administrar sus clientes con su información médica, elaborar planes de entrenamiento personalizados y asignándolos directamente a cada uno de ellos.

La aplicación también permite a los entrenadores añadir sus propios ejercicios con soporte multimedia, como GIFs o videos, para que los clientes puedan visualizar las demostraciones necesarias al revisar sus planes de entrenamiento.

Cada cliente tiene acceso a la aplicación donde puede ver todos sus planes asignados, facilitando así un seguimiento detallado y eficaz de su progreso.

## Arquitectura del proyecto

Para la arquitectura del frontend dividí la aplicación en "capas", algo parecido a la "Clean Architecture", así poder separar mejor las responsabilidadaes y lograr que se convierta en un software mantenible, escalable y con facilidad para los cambios, estas capas tienen distintas responsabilidades, obligaciones y prohibiciones.

Es importante mencionar que la arquitectura se basa fuértemente en las distintas entidades del negocio, las mismas afectan principalmente en la estructura de carpetas y del código en general.

Las entidades del Entrenaly son:

- client (Cliente)
- exercise (Ejercicio
- plan (Plan)
- user (Usuario)

El siguiente gráfico muestra cómo están compuestas las capas de la estructura del proyecto:

g
flechasf
flechasff
flechasff
flechasfff
flechasf

Podemos observar que mientras más lejos del centro se encuentra una capa, más se utiliza dentro del sistema por lo que es fundamental que sea fácil manipular, modificar y reemplazar de ser necesario, ya que si no genera un impacto negativo en todo el software.

Caso contrario, mientras más cerca del centro esté una capa más forma parte del core de la aplicación por lo que es poco probable que se tenga que cambiar a futuro.

Además, podemos ver unas flechas que van desde el centro hacia afuera, las mismas indican una obligatoriedad al momento de interactuar entre si. Esto puesto en práctica no es más que una regla de imports, por ejemplo, desde la carpeta de Services no podemos interactuar con la carpeta Routes ya que es el core de nuestra aplicación, sin embargo desde los hooks podemos acceder a los services.

- Routes puede importar Pages y Layouts
- Pages y Layouts pueden importarse tanto a si mismos como a Components y Context.
- Components, y Contexts pueden importarse tanto a si mismos como a Services, Hooks y Lib.

Como mencioné anteriormente, Services, hooks y Lib al ser carpetas que están en la última capa deben contener funciones específicas que puedan ser reemplazadas fácilmente, ya sean funciónes de lectura de datos en la carpeta Services o la creación de toast en la carpeta de Lib.

### Sobre las capas

Repasemos cada capa con sus respectivas carpetas:

#### Routes:

Hace referencia a las rutas de nuestra aplicación, ya sea para el administrados, entrenadoy y/o cliente.

#### Pages:

Hace referencia a las páginas de nuestra aplicación, las que van a ser llamadas dentro de las rutas.

#### Layout:

Hace referencia a la plantilla por defecto que van a tener todas las páginas de nuestra aplicación, el mismo va a ser llamado dentro de las páginas.

#### Context:

Hace referencia a todos los react context que van a manejar los distintos estados globales dentro de nuestra aplicación, los mismos van a ser llamados principalmente por las páginas y los componentes.

#### Components:

Hace referencia a todos los componentes que se utilizan a lo largo de las distintas páginas y layouts, dentro de los mismos encontraremos componentes de tipo "common" /(componentes comunes de react), componentes de tipo "forms" (formularios) y componentes de tipo "dialogs" (diálogos o modales). Lo ideal es que si un componente se utiliza dos veces de la misma forma dentro de nuestra aplicación debe ir acá.

#### Services:

Hace referencia a la parte dentro de nuestra aplicación que interactúa con el backend, básicamente operaciones CRUD.

#### Hooks:

Hace referencia a funciones específicas que se repiten a lo largo de nuestra aplicación, idealmente se utilizan para todos los servicios de tipo GET, así poder tener un código más simple y controlar mejor cada petición.

#### Lib:

Hace referencia a librerías, herramientas específicas y/o paquetes que se utilizan a lo largo de la aplicación. Por ejemplo configuraciónes, constantes, types, utils, etc.

### Sobre la estructura de carpetas

Importante:

A lo largo de la explicación vamos a distinguir entre dos tipos de archivos:

archivos-typescript.ts

ComponentesReact.tsx

Dentro de cada carpeta principal que conforman las distintas capas del software veremos que las entidades juegan un punto clave ya que dividimos los archivos que tengan dentro en base a las mismas.

![folder](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/da378b2c-13d0-49db-ab1d-b2b461a3c71f)

Esto lo podemos ver por ejemplo en la carpeta de Services, donde los distintos servicios se dividen entre cuatro carpetas: Client, Exercise, Plan, User, haciendo alusión a las entidades del software.

![folder](https://github.com/juanuranidev/juanuranidev/assets/96846723/d55d344d-6ed2-4546-aca8-e3c88ff3c286)

También podemos verlo en la carpeta de routes la cual en este caso contiene una más llamada "public" la cuál hace referencia a las rutas públicas.

Lo mismo se repite tanto para Pages, Constants, Layouts, Hooks, y Forms, el hacer esto ayuda a dividir mejor los archivos y no tener una carpeta con demasiadas carpetas dentro.

Cada carpeta que contenga un componente de React (ComponentesReact.tsx) contará con la siguiente estructura:

```bash
    [component] - Carpeta principal
      [components] - Carpeta con los componentes del componente principal
      [styles] - Carpeta con los estilos del componente principal
      Component.tsx - Componente principal
```

Las carpetas que contienen archivos de typescript (archivos-typescript.ts) deben estar solos, sin carpeta principal, siempre y cuando no se basen en las entidades del proyecto. Veamos unos ejemplos:

![folder](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/da378b2c-13d0-49db-ab1d-b2b461a3c71f)

Los services tienen distintas carpetas dependiendo la entidad porque se basan fuértemente en las mismas.

![folder](https://github.com/juanuranidev/entrenaly-frontend/assets/96846723/5f636343-00b5-4594-957b-80f9b06c978f)

En cambio, tanto env.ts como toast.ts contienen archivos typescript normales, que son independiente de las entidades y como no dependen de las mismas deben guardarse sin carpeta.

#### Sobre la forma de escribir código

Siempre es importante definir cómo se debe escribir el código, si bien no hay que encontrar la forma perfecta de hacerlo es importante seguir una buena linealidad que esté documentada, así es más fácil el entenderlo a futuro y no aumenta el costo de la comprensión del software.

No voy a profundizar mucho en esto, sino voy a dar una simple manera de escribir código en base a la capa donde nos encontremos, la acción que queremos realizar y, de ser así, la entidad con la que estamos interactuando, abstrayendonos de la tecnología y de los métodos en sí.

Repasemos esta regla dentro de las distintas capas

Pages y Components:

Cualquier función dentro de estas capas que se encargue de realizar algo específico deberá ser nombrada de la siguiente manera:

```bash
    1[handle]2[Open]3[ModalExercises]

    1 - Identificador de la capa de archivos .tsx
    2 - Verbo basado en la acción que se desea realizar (open, modify, resize, etc).
    3 - Entidad o componente con el que interactúa.
```

Hooks:

Los hooks deben ser nombrados y utilizados de la siguiente manera, ya sea que se trate de una entidad del negocio (Exercise) o una entidad aparte (Debounce):

```bash
    1[use]2[Read]3[Exercises]

    1 - Identificador de la capa de hooks
    2 - Verbo basado en el acrónimo CRUD
    3 - Entidad
```

Services:

Los services deben ser nombrados y utilizados de la siguiente manera, ya sea que se trate de una entidad del negocio (Exercise) o una entidad aparte (CloudinaryCredentials):

```bash
    1[get]2[Exercises]3[Service]

    1 - Verbo basado en el acrónimo CRUD
    2 - entidad
    3 - Especificador de la capa
```

Lib:

Dentro de lib puede variar mucho la estructura ya que podemos encontrarnos con distintos tipos de librerías, herramientas componentes de react o funciones. Sin embargo, con respecto a las funciones siempre trataremos de mantener este formato:

```bash
    1[create]2[Toast]3[Lib]

    1 - Verbo basado en el acrónimo CRUD
    2 - entidad
    3 - Especificador de la capa
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
   cd entrenaly-frontend
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

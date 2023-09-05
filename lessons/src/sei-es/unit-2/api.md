# .center[API]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

## ¿Qué es una API?

Pensemos en el ciclo de solicitud / respuesta HTTP. Deberíamos estar razonablemente familiarizados con la idea ahora.

<img
src="https://cloud.githubusercontent.com/assets/3531085/26764966/8f01838c-4969-11e7-890d-0d54dfe5bba4.gif"
alt="Request response cycle"
style="width:256px">

---

## ¿Qué es una API?

Un cliente realiza una solicitud que es recibida por el servidor web, la solicitud HTTP se maneja, enruta, se reciben los datos relevantes de la base de datos y se envía una respuesta al cliente.

Hasta ahora, esta respuesta ha sido un estado HTTP y luego algo de `text/html` después de que el motor de plantillas haya renderizado una plantilla.

Sin embargo, pensemos en **content types**.

El problema de `text/html` es que está diseñado para que lo entiendan los humanos.

**¿Qué pasaría si quisiéramos solicitar algunos datos de un sitio web a través de Internet y luego hacer algo programático con esos datos?**

Todavía tendríamos que hacer una solicitud HTTP para obtener los datos de nuestro servidor web de la misma manera: ¡así es como funciona Internet! Sin embargo, es posible que deseemos que la respuesta esté en un formato que sea un poco más fácil de entender para una computadora.

`text/html` es solo un tipo de datos que se pueden enviar y recibir en Internet. Otro común es `application/json`.

---

## Definición de JSON

> **JSON** (JavaScript Object Notation) es un formato ligero de intercambio de datos. Es fácil para los humanos leer y escribir. Es fácil para las máquinas analizar y generar. Se basa en un subconjunto del lenguaje de programación JavaScript, estándar ECMA-262 3.a edición, diciembre de 1999.

JSON es solo un formato que podemos enviar y recibir a través de Internet. Hay algunos otros como XML que puede ver. Sin embargo, JSON es el más común y el más fácil de usar.

---

## API (Application Programming Interface)

En informática API [(application programming interface)](https://en.wikipedia.org/wiki/Application_programming_interface) un término bastante amplio.

> **API** (application program interface)es un conjunto de rutinas, protocolos y herramientas para crear aplicaciones de software. La API especifica cómo deben interactuar los componentes de software y las APIs que se utilizan al programar componentes de interfaz gráfica de usuario (GUI).

Este término puede ser bastante confuso ya que es TAN amplio.

---

## Web API

Sin embargo, cuando pensamos en las API dentro del contexto del desarrollo de aplicaciones web, podemos simplemente pensar en ello como un sitio web que devuelve JSON en lugar de HTML para que una computadora pueda usar los datos para hacer algo en lugar de un humano.

Permite que un programa interactúe con un sitio web a través de Internet para que pueda utilizar los datos de ese sitio web.

<img
  src="https://cloud.githubusercontent.com/assets/3531085/26764965/8cdac33e-4969-11e7-87b1-8f1ef6b5ae42.png"
  alt="API"
  style="width:350px">

---

## ¿Por qué necesitas una API?

Hoy en día, existen muchas razones diferentes por las que necesitaría una API([application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface)) para su sitio web o proyecto tecnológico.

1. ¿Es posible que desee proporcionar datos a una aplicación IOS / Android?
2. ¿Es posible que desee permitir que otros desarrolladores utilicen tus datos?
3. Es posible que desee dividir tu código en varios servicios más pequeños para que sea más fácil de administrar
4. Es posible que desee utilizar un marco de front-end para servir sus datos como Angular, React, Vue

Éstas son solo algunas de las razones. Ahora es muy difícil ser desarrollador y no tener que trabajar ni usar una API.

---

## Otras lecturas

- [What is REST?](https://restfulapi.net/)
- [REST API Concepts and Examples](https://www.youtube.com/watch?v=7YcW25PHnAA)

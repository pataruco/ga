# .center[Request <-> Response]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

# Request <-> Response

## ¿Server, Client, Request, HTTP?

### HTTP Basics

HTTP permite la comunicación entre una variedad de hosts y clientes, y admite una combinación de configuraciones de red.

> Para que esto sea posible, asume muy poco acerca de un sistema en particular y no mantiene el estado entre los diferentes intercambios de mensajes.

La comunicación entre un host y un cliente se produce a través de un par de solicitud (_Request_)/ respuesta(_Response_). El cliente inicia un mensaje de solicitud HTTP, que se atiende a través de un mensaje de respuesta HTTP a cambio.

---

### Cómo llegar a un servidor específico

DNS significa:

- **Domain**
- **Name**
- **System**

Todas las computadoras en Internet tienen una dirección numérica única compuesta por 4 bytes de datos, separados por puntos. Puede reconocer este formato ...

Esta es una dirección IP:

```txt
123.123.123.123
```

---

## Direcciones IP a dominios

Por supuesto, estos números son difíciles de recordar y no son realmente amigables para los humanos. ¿Te imaginas si las direcciones de los sitios web tuvieran que darse de esta manera? En lugar de anuncios en la radio que digan "vaya a OurWebsite.com", estarían diciendo "vaya a 12.14.142.231" y repitiéndolo 5 veces solo para asegurarse de que todos lo hayan entendido.

Entonces, lo que se necesitaba era una forma de traducir nombres reales a esos números. Por eso contamos con registradores de dominios. Usted reserva el nombre, y en el registrador de dominios (realmente simplificado aquí), su NOMBRE de dominio apunta a la dirección única particular del servidor.

Cuando escribes un dominio de sitio web en su navegador web (u otra aplicación con capacidad de Internet), lo que sucede es una "Búsqueda de DNS" de la dirección IP de ese dominio en particular, por lo que su computadora puede conectarse a él.

tu proveedor de Internet tiene una pequeña lista en caché de todos los dominios registrados y sus respectivas direcciones IP, de modo que cuando vaya a yahoo.com, su navegador le preguntará al servidor DNS "¿cuál es la dirección IP de yahoo.com?" El servidor DNS responde con "206.190.60.37" y el navegador puede conectarse a "206.190.60.37".

En términos del mundo real, es como usar las direcciones de las calles para encontrar una casa, en lugar de usar las coordenadas de latitud y longitud, ya que son mucho más fáciles de recordar y leer.

---

### Comunicación cliente y servidor

En general, un servicio es una abstracción de los recursos informáticos y un cliente no tiene que preocuparse por cómo funciona el servidor mientras cumple la solicitud y entrega la respuesta. El cliente solo tiene que entender la respuesta basada en el protocolo de aplicación conocido, es decir, el contenido y el formato de los datos para el servicio solicitado.

Los clientes y servidores intercambian mensajes en un patrón de mensajería **request-response**

1. El cliente envía una solicitud
2. El servidor devuelve una respuesta.

Para comunicarse, las computadoras deben tener un lenguaje común y deben seguir reglas para que tanto el cliente como el servidor sepan qué esperar. El idioma y las reglas de comunicación se definen en un **protocolo de comunicaciones**.

---

### Comunicación cliente y servidor

Todos los protocolos cliente-servidor operan en la **application layer**. El protocolo de la capa de aplicación define los patrones básicos del diálogo.

Un servidor puede recibir solicitudes de muchos clientes diferentes en un período de tiempo muy corto. Debido a que la computadora puede realizar un número limitado de tareas en cualquier momento, se basa en un sistema de programación para priorizar las solicitudes entrantes de los clientes con el fin de acomodarlas todas a su vez. Para evitar abusos y maximizar el tiempo de actividad, el software del servidor limita la forma en que un cliente puede utilizar los recursos del servidor. Aun así, un servidor no es inmune al abuso. Un ataque de denegación de servicio explota la obligación de un servidor de procesar solicitudes bombardeándolo con solicitudes incesantemente. Esto inhibe la capacidad del servidor para responder a solicitudes legítimas.

---

### Comunicación cliente y servidor

#### Ejemplo

Cuando un cliente de un banco accede a los servicios bancarios en línea con un navegador web (el cliente), el cliente inicia una solicitud al servidor web del banco. Las credenciales de inicio de sesión del cliente pueden almacenarse en una base de datos y el servidor web accede al servidor de la base de datos como cliente. Un servidor de aplicaciones interpreta los datos devueltos aplicando la lógica empresarial del banco y proporciona la salida al servidor web. Finalmente, el servidor web devuelve el resultado al navegador web del cliente para su visualización.

En cada paso de esta secuencia de intercambio de mensajes cliente-servidor, una computadora procesa una solicitud y devuelve datos. Este es el patrón de mensajes de solicitud-respuesta. Cuando se cumplen todas las solicitudes, la secuencia se completa y el navegador web presenta los datos al cliente.

---

## Elementos de un URL

```txt
    http://www.example.org/hello/world/foo.html?foo=bar&baz=bat#footer
    \___/  \_____________/ \__________________/ \_____________/ \____/
  protocol  host/domain name        path         querystring     hash/fragment
```

| Element          | About                                                                                                                                                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| protocol         | el protocolo de aplicación más popular utilizado en la World Wide Web es HTTP. Otros tipos familiares de protocolos de aplicación incluyen FTP, SSH,HTTPS                                                                     |
| host/domain name | el nombre de dominio o host se busca en DNS para encontrar la dirección IP del host, el servidor que proporciona laresource                                                                                                   |
| path             | los servidores web pueden organizar los recursos en lo que efectivamente son archivos en directorios; la ruta indica al servidor qué archivo de qué directorio quiere el cliente                                              |
| querystring      | el cliente puede pasar parámetros al servidor a través de la cadena de consulta (en un método de solicitud GET); el servidor puede usarlos para personalizar la respuesta, como valores para filtrar un resultado de búsqueda |
| hash/fragment    | el cliente utiliza generalmente el fragmento de URI para identificar una parte del contenido de la respuesta; Curiosamente, un hash roto no romperá todo el enlace; no es el caso de los elementos anteriores.                |

---

## Verbos

Las URL revelan la identidad del host en particular con el que queremos comunicarnos, pero la acción que se debe realizar en el host se especifica mediante verbos HTTP. Por supuesto, hay varias acciones que a un cliente le gustaría que realizara el anfitrión. HTTP se ha formalizado en unos pocos que capturan los elementos esenciales que son universalmente aplicables para todo tipo de aplicaciones.

Estos verbos de solicitud son:

- **GET**: buscar un recurso existente. La URL contiene toda la información necesaria que el servidor necesita para localizar y devolver el recurso.
- **POST**: crear un nuevo recurso. Las solicitudes POST suelen llevar una carga útil que especifica los datos del nuevo recurso.
- **PUT**: actualizar un recurso existente. La carga útil puede contener los datos actualizados del recurso.
- **DELETE**: eliminar un recurso existente.

Los cuatro verbos anteriores son los más populares y la mayoría de las herramientas y marcos exponen explícitamente estos verbos de solicitud. PUT y DELETE a veces se consideran versiones especializadas del verbo POST, y pueden empaquetarse como solicitudes POST con la carga útil que contiene la acción exacta: crear, actualizar o eliminar.

---

## Request <--> Response y despues?

Una vez ejecutado el ciclo de solicitud <--> respuesta, el navegador web se encarga de interpretar los datos recibidos y mostrarlos al usuario.

La función principal de un navegador es presentar el recurso web que elija, solicitándolo al servidor y mostrándolo en la ventana del navegador. El recurso suele ser un documento HTML, pero también puede ser un PDF, una imagen o algún otro tipo de contenido. El usuario especifica la ubicación del recurso mediante un URI (Identificador uniforme de recursos).

La forma en que el navegador interpreta y muestra los archivos HTML se especifica en las especificaciones HTML y CSS. Estas especificaciones son mantenidas por la organización W3C (World Wide Web Consortium), que es la organización de estándares para la web. Durante años, los navegadores se ajustaron solo a una parte de las especificaciones y desarrollaron sus propias extensiones. Eso causó serios problemas de compatibilidad para los autores web. Hoy en día, la mayoría de los navegadores se ajustan más o menos a las especificaciones.

---

## Request <--> Response y despues?

Las interfaces de usuario del navegador tienen mucho en común entre sí. Entre los elementos comunes de la interfaz de usuario se encuentran:

- Barra de direcciones para insertar un URI
- Botones de avance y retroceso
- Opciones de marcadores
- Botones de actualización y detención para actualizar o detener la carga de documentos actuales
- Botón de inicio que lo lleva a su página de inicio
- La interfaz de usuario: esto incluye la barra de direcciones, el botón de retroceso / avance, el menú de marcadores, etc. Cada parte de la pantalla del navegador, excepto la ventana donde se ve la página solicitada.
- El motor del navegador: organiza acciones entre la interfaz de usuario y el motor de renderizado.
- El motor de renderizado: responsable de mostrar el contenido solicitado. Por ejemplo, si el contenido solicitado es HTML, el motor de renderizado analiza HTML y CSS y muestra el contenido analizado en la pantalla.

---

## Request <--> Response y despues?

- Redes: para llamadas de red, como solicitudes HTTP, utilizando diferentes implementaciones para diferentes plataformas detrás de una interfaz independiente de la plataforma.
- Interfaz de usuario de fondo: se utiliza para dibujar widgets básicos como cuadros combinados y ventanas. Este backend expone una interfaz genérica que no es específica de la plataforma. Debajo utiliza métodos de interfaz de usuario del sistema operativo.
- Intérprete de JavaScript. Se utiliza para analizar y ejecutar código JavaScript.
- Almacenamiento de datos. Esta es una capa de persistencia. Es posible que el navegador necesite guardar todo tipo de datos localmente, como cookies.

---

## Request <--> Response y despues?

<img
  src="http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/layers.png"
  alt="Web browser diagram"
  style="max-width:350px">

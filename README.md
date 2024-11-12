# ✨ CONNECTIC4 ✨

Connectic4 es un buscador de eventos orientado exclusivamente al área de programación. Su objetivo es ayudar a las personas a descubrir eventos de programación en su ciudad, proporcionando detalles como ubicación, fecha, ponente, empresas participantes, costo, y número de asistentes. Este proyecto fomenta la conexión en persona dentro de un sector predominantemente digital, promoviendo el networking y fortaleciendo la comunidad de programación.

## Descripción del Proyecto
- Nombre: Connectic4
- Propósito: Proveer una plataforma donde los usuarios puedan buscar eventos de programación y conectarse físicamente con otros profesionales de la industria.

## Funciones Clave:
- Búsqueda de eventos relacionados con programación.
- Registro de usuarios para poder apuntarse a eventos.
- Almacenamiento de listas de eventos favoritos.
- Visualización de anuncios sin necesidad de registro (aunque para interactuar se requiere registro).

## ✨ The Team

| Member     | GitHub                     |
|------------|----------------------------------|
|  Connectic4  | [Alberto's GitHub ](https://github.com/Ascis2000/APP_Connectic4)  |
|  Alberto  | [Alberto's GitHub ](https://github.com/Ascis2000)  |
|  Anderlyn | [Anderlyn's GitHub](https://github.com/anderlyndepaz) |
|  Cristian | [Cristian's GitHub](https://github.com/Hirnel)   |
|  Juanjo  | [Juanjo's GitHub](https://github.com/JhonyBe77)   |

# Tecnologías Utilizadas
|Tecnología	| Descripción
|<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="NODE.JS Logo" height="30"> |Plataforma para ejecutar JavaScript en el backend.
|<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express Logo" height="30"> |Framework para crear aplicaciones web y APIs.
|<img src="https://upload.wikimedia.org/wikipedia/en/5/5a/MongoDB_Fores-Green.svg" alt="MongoDB Logo" height="30"> |Base de datos NoSQL para almacenar eventos.
|<img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL Logo" height="30"> |Base de datos SQL para almacenar usuarios y eventos favoritos.
|<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*6mf8tptIWbepPFZT07EDvQ.jpeg" alt="Pug Logo" height="30"> |Motor de plantillas para generar HTML dinámico.
|<img src="https://developer.chrome.com/static/docs/puppeteer/images/hero_856.png" alt="Puppeteer Logo" height="30"> |Herramienta de scraping para obtener datos de MeetUp.com.

# Dependencias Principales
- **bcryptjs**: Encriptación de contraseñas para almacenamiento seguro.
- **body-parser**: Análisis de datos en las solicitudes HTTP.
- **cookie-parser**: Manejo de cookies en el servidor.
- **dotenv**: Gestión de variables de entorno.
- **jsonwebtoken**: Creación y verificación de tokens JWT para autenticación.
- **mongoose**: ORM para interactuar con MongoDB.
- **pg**: Conector para interactuar con PostgreSQL.
- **sequelize**: ORM para gestionar la base de datos SQL.
- **express-validator**: Validación de datos en las solicitudes.
- **swagger-jsdoc** y **swagger-ui-express**: Documentación de APIs para desarrolladores.

# Estructura y Funcionamiento de la Aplicación
- Bases de Datos:
    - **MongoDB**: Almacena los eventos obtenidos mediante scraping para evitar realizar el scraping en cada carga de página.
    - **SQL (PostgreSQL)**: Almacena los usuarios registrados y sus listas de eventos favoritos.
- Registro y Acceso:
    - Los usuarios pueden navegar y ver eventos sin necesidad de estar registrados.
    - Para interactuar con los eventos, apuntarse o guardar en favoritos, es necesario registrarse. El registro es gratuito o de pago según .
- Scraping:
    - La aplicación realiza scraping de MeetUp.com para obtener eventos de programación.
    - Los datos obtenidos se guardan en MongoDB para evitar realizar múltiples scrapes en cada visita.

## Diseño y Usabilidad
- Responsividad: La web está diseñada para dispositivos móviles (mobile-first) y es completamente responsive.
- Accesibilidad: Aunque en esta versión no incluye características avanzadas de accesibilidad, el equipo considera la posibilidad de integrar mejoras para personas con discapacidades visuales en el futuro.

## Herramientas para Desarrolladores
- Pruebas: Se usan **jest** y **supertest** para pruebas unitarias y de integración.
- Documentación de API: **swagger-jsdoc** y **swagger-ui-express** para documentar y probar la API de la aplicación.
- jsdoc: Generación de documentación automática para el código.

## Notas
- Compatibilidad: Aunque el proyecto está desarrollado para ser multiplataforma, actualmente solo se ha probado en Google Chrome.
- Limitaciones Actuales: El scraping solo cubre MeetUp.com; en versiones futuras, se puede considerar ampliar el scraping a otras plataformas de eventos.
# Recuperación LMSGI/BBDD

## Objetivo

El objetivo de esta práctica es crear un proyecto de página web para restaurantes en España. De forma similar a la práctica realizada en clase.

Mientras que la práctica de clase se centraba en generar archivos `.html` y crear un directorio donde se quedarían almacenados, en esta práctica se realizará mediante un backend clásico renderizando las páginas directamente desde el servidor.

## Requisitos

1. El proyecto debe seguir la siguiente estructura de carpetas:

```
.
├── index.js
├── package.json
├── package-lock.json
├── public
├── views
├── routes
├── data
│   └── menu.js
└── node_modules
```

Si necesitas añadir más carpetas o archivos, puedes hacerlo, pero esta estructura debe cumplirse.

2. La página debe tener:

- Una página principal que muestre un menú del restaurante.
- Una página `sobre nosotros` que muestre información sobre el restaurante.
- Una página `donde encontrarnos` que muestre la ubicación del restaurante en un mapa dentro de España.
- Un logo del restaurante que se muestre en todas las páginas.
- Una barra de navegación que permita navegar entre las diferentes páginas.

3. Se tendrá en cuenta tanto el aspecto funcional como el estético, además del historial de commits de git, idealmente, por cada funcionalidad implementada debería haber un commit, no importa si tienes que añadir commits para corregir errores o añadir funcionalidades, lo importante es que el historial de commits sea claro y fácil de seguir.

> Recuerda, **NO** se piden generar archivos `.html` ni crear un directorio donde se queden almacenados, todo debe ser renderizado desde el servidor mientras está en ejecución.
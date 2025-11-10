# Práctica 6: Aplicación de Biblioteca de Películas con Ionic

**Curso:** Legacy - Ionic 6: Crear aplicaciones iOS, Android con Angular
**Sección:** 10
**Estudiante:** [Tu Nombre Completo Aquí]
**Fecha:** 09 de noviembre de 2025

---

## 1. Descripción General de la Aplicación

Este repositorio corresponde a la Práctica 6, cuyo objetivo era desarrollar una aplicación funcional tipo biblioteca de películas.

La aplicación fue diseñada para consumir la API externa de **The Movie Database (TMDB)** para obtener listados de películas (populares, cartelera) y sus detalles. Además, debía implementar **almacenamiento local (Ionic Storage)** para permitir al usuario guardar sus películas favoritas de forma persistente.

### Funcionalidades Planificadas:

* **Navegación por Pestañas (Tabs):**
    * **Home:** Mostraría los últimos estrenos y las películas más populares obtenidas de la API.
    * **Favoritos:** Mostraría el listado de películas que el usuario ha guardado localmente en el dispositivo.
* **Vista de Detalles:** Al seleccionar una película, se navegaría a una página de detalles mostrando su póster, sinopsis, calificación, actores y géneros.
* **Gestión de Favoritos:** Lógica para guardar y eliminar películas del almacenamiento local (Storage), asegurando que los datos persistan al cerrar la app.

---

## 2. Tecnologías y Dependencias Utilizadas

La aplicación se estructuró siguiendo las mejores prácticas de **Angular**, separando la lógica de negocio de la presentación.

* **@ionic/angular (Ionic 6):** Framework principal para el desarrollo de la UI híbrida.
* **@angular/core (Angular):** Framework base para la lógica, componentes y servicios.
* **@angular/common/http:** Para realizar las peticiones HTTP a la API de TMDB.
* **@ionic/storage-angular:** Para la gestión del almacenamiento local persistente.
* **TypeScript:** Lenguaje principal de desarrollo.
* **API de The Movie Database (TMDB):** Proveedor de todos los datos de las películas.

---

## 3. Instrucciones para la Instalación y Ejecución Local

Pasos para ejecutar el proyecto:

1.  **Clonar el repositorio:**
    ```bash
    git clone [URL_DE_TU_REPO_AQUÍ]
    ```

2.  **Acceder a la carpeta del proyecto:**
    ```bash
    cd practica6-peliculas-ionic
    ```

3.  **Instalar dependencias de Node.js:**
    ```bash
    npm install
    ```

4.  **(Importante) Configurar API Key:**
    * El proyecto requeriría una API Key de TMDB, la cual se almacenaría en los archivos de `environments` (entorno) de Angular.

5.  **Ejecutar la aplicación en el navegador:**
    ```bash
    ionic serve
    ```

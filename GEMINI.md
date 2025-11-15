# Project Overview

This project is a static website for the DEW Drop Construction Company. It is built using HTML, CSS, and JavaScript. The website showcases the company's services, provides information about the company, and includes a contact form. The project is configured to be deployed on GitHub Pages using Jekyll.

## Building and Running

There are no specific build commands for this project. To run the website locally, you can use a simple HTTP server.

1.  **Navigate to the project directory:**
    ```bash
    cd dewdrop.github.io-main
    ```
2.  **Start a local web server:**
    ```bash
    python3 -m http.server
    ```
3.  **Open the website in your browser:**
    [http://localhost:8000](http://localhost:8000)

## Development Conventions

*   **Styling:** The project uses a single `style.css` file for all its styling. The CSS is well-structured and includes responsive design using media queries.
*   **JavaScript:** The `script.js` file contains JavaScript for dynamic functionality, such as updating the copyright year and highlighting the active navigation link.
*   **HTML:** The HTML files are well-structured and use semantic tags. Each page has a clear and consistent layout.
*   **Deployment:** The `_config.yml` file indicates that the project is intended for deployment on GitHub Pages with the Jekyll minimal theme.

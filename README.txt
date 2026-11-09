# LUXEM CUTZ - versión Flask

Esta versión mantiene el diseño de la página en HTML y CSS, y utiliza Python con Flask para servirla localmente.

## 1. Requisitos
- Python instalado
- Visual Studio Code

## 2. Instalar Flask
Abre la terminal dentro de esta carpeta y ejecuta:

```bash
python -m pip install -r requirements.txt
```

En Windows, si `python` no funciona, prueba:

```bash
py -m pip install -r requirements.txt
```

## 3. Ejecutar la página
En la terminal ejecuta:

```bash
python app.py
```

O en Windows:

```bash
py app.py
```

Luego abre en tu navegador:

http://127.0.0.1:5000

## 4. Logo
Copia tu archivo `Logobarber.jpeg` dentro de la carpeta `static`.
No cambies ese nombre, porque la página lo utiliza para mostrar el logo.

## Estructura
```text
Luxem_Cutz_Flask/
├── app.py
├── requirements.txt
├── templates/
│   └── index.html
└── static/
    ├── Logobarber.jpeg
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

Nota: HTML, CSS y JavaScript siguen siendo parte de una página web normal. Flask/Python se encarga de abrirla desde un servidor local; no es necesario convertir el diseño a Python.

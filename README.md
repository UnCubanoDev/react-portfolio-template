![thumbnail](https://user-images.githubusercontent.com/16558205/180779213-ea740975-3df1-460a-a964-0a623ee25872.png)

### Live - https://ui.chetanverma.com/template/1

### Demo Video - https://www.youtube.com/watch?v=62_HLbx2zLQ&t=9s

### Open Source UI Components - https://ui.chetanverma.com/

### Tutorials

Youtube - https://www.youtube.com/watch?v=8cmJ2kR4SpM

Blog - https://www.chetanverma.com/blog/how-to-build-a-portfolio-website-using-nextjs-and-tailwindcss

### Features -

- Modern Stack (Next.js + TailwindCSS)
- Minimal Design
- Easy To Browse
- Easy To Customize your details With GUI
- Blog Crud (Create, Read, Update, Delete blog with easy to use UI).
- Dark Mode

### Sections

- Header
- Work
- Services
- About
- Contact
- Markdown Blog

### How To Use

- Clone this repo
- run `yarn`
- `yarn dev`

### How To Deploy -

- There are many ways to Deploy this repo.
- here we are gonna use netlify
- Login into netlify with github
- after login select the forked repo or the repo you want to deploy
- after selecting netlify will automatially deploy your website.

Quickes way to deploy this repo -

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chetanverma16/react-portfolio-template)

### How To Contribute -

I would be very happy to review your PRs and all the awesome things that you can improve on this portfolio.

### Tech Stack Used -

- Next.js
- TailwindCSS

### Thanks

If you liked this portfolio template, don't forget to give it a ⭐.

## Awesome Contributors

[@Aryan3212](https://github.com/Aryan3212) [@achu-krishna](https://github.com/achu-krishna)

## Supporting

Many hours of hard work have gone into this project. Your support will be very appreciated!

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/chetanverma)

## Desplegar en un VPS

### Paso 1: Accede a tu VPS

Accede a tu VPS a través de SSH:

```bash
ssh usuario@tu_vps_ip
```

### Paso 2: Instala dependencias necesarias

Asegúrate de tener Node.js y Yarn instalados en tu VPS:

```bash
# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar Yarn
npm install -g yarn
```

### Paso 3: Clona el repositorio

Clona el repositorio en tu VPS:

```bash
git clone https://github.com/UnCubanoDev/react-portfolio-template-main.git
cd react-portfolio-template-main
```

### Paso 4: Instala las dependencias del proyecto

Instala las dependencias del proyecto usando Yarn:

```bash
yarn install
```

### Paso 5: Configura las variables de entorno

Si tu proyecto requiere variables de entorno, crea un archivo `.env` en la raíz del proyecto y agrega las variables necesarias.

### Paso 6: Compila el proyecto

Compila el proyecto para producción:

```bash
yarn build
```

### Paso 7: Inicia el servidor

Inicia el servidor de producción:

```bash
yarn start
```

### Paso 8: Configura un servidor web (opcional)

Si deseas usar un servidor web como Nginx para servir tu aplicación, sigue estos pasos:

1. Instala Nginx:

```bash
sudo apt-get install nginx
```

2. Crea un archivo de configuración para tu sitio en `/etc/nginx/sites-available/`:

```bash
sudo nano /etc/nginx/sites-available/tu_dominio
```

3. Agrega la siguiente configuración:

```nginx
server {
    listen 80;
    server_name tu_dominio;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

4. Crea un enlace simbólico para habilitar el sitio:

```bash
sudo ln -s /etc/nginx/sites-available/tu_dominio /etc/nginx/sites-enabled/
```

5. Reinicia Nginx:

```bash
sudo systemctl restart nginx
```

### Paso 9: Accede a tu sitio

Ahora puedes acceder a tu sitio web a través de tu dominio o la IP de tu VPS.

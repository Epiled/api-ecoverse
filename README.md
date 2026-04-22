<!-- ![Social Preview](./design/github/social-preview.png) -->

<h1 align="center"> 🏬 API Ecoverse 🏬 </h1>

![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)
![GitHub release](https://img.shields.io/github/v/release/Epiled/api-ecoverse?style=for-the-badge)
![GitHub license](https://img.shields.io/github/license/Epiled/api-ecoverse?style=for-the-badge)

![GitHub last commit](https://img.shields.io/github/last-commit/Epiled/api-ecoverse?style=for-the-badge)
![Code Size](https://img.shields.io/github/languages/code-size/Epiled/api-ecoverse?style=for-the-badge)

![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

## 📑 Table of Contents

- [📑 Table of Contents](#-table-of-contents)
- [📖 Overview](#-overview)
- [🛠️ Technologies](#-technologies)
- [🚀 Demo](#-demo)
- [📦 Install and Use](#-install-and-use)
- [📡 Endpoints](#-endpoints)
- [📂 File Structure](#-file-structure)
- [👨‍💻 Author and Contact](#-author-and-contact)

## 📖 Overview

The **Ecoverse API** is a robust back-end service built to manage product catalogs persistently through a JSON file-based database system.

The project was developed with a focus on **Clear Architecture**, using **MVC** principles to ensure that data persistence logic (Model) is entirely decoupled from delivery logic (Controller).

## 🛠 Technologies

The following technologies were used to build this project:

- [Node.js](https://nodejs.org/pt-br)
- [Express](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)

- **Layered Architecture:** Folder-based organization to decouple concerns and responsibilities.
- **MVC (Model-View-Controller):** Logic isolation between routes and controllers for better maintainability.
- **ES Modules (ESM):** Native import/export support and absolute path resolution via import.meta.url.
- **Environment Variables:** Environment-specific configuration using `dotenv` for better security and flexibility.

## 🚀 Demo

<!-- Access the live application below to interact with the interface and run your own performance tests -->

<!-- API Ecoverse: [https://api-ecoverse.vercel.app/](https://api-ecoverse.vercel.app/) -->

<!-- #### Desktop
[desktop.webm](https://github.com/user-attachments/assets/09fd8433-29a6-4de3-9f4c-fb8df3549af4)

#### Mobile
[mobile.webm](https://github.com/user-attachments/assets/1ae8735a-1ace-41ed-9c71-97e8801f367e) -->

**Coming soon**

## 📦 Install and Use

**Prerequisites:** Node.js (v22.x) or higher installed.

1. Clone the repository:

```bash
git clone https://github.com/Epiled/api-ecoverse.git
cd api-ecoverse
```

2. Install the dependencies:

```bash
npm install
```

3. Run the development environment (Server):

```bash
npm run start
```

or

```bash
npm run dev
```

## 📡 Endpoints

All product resources are available via `/api/products`.

| Method   | Endpoint            | Description                                      |
| :------- | :------------------ | :----------------------------------------------- |
| `GET`    | `/api/products`     | List all products                                |
| `POST`   | `/api/products`     | Create a new product (Automatic UUID generation) |
| `PATCH`  | `/api/products/:id` | Partial product update                           |
| `DELETE` | `/api/products/:id` | Remove a product from the catalog                |

### Example of Product Object:

```json
{
  "id": "a8155895-b643-41d7-8ecb-d725f5a314c3",
  "productName": "Iphone 11 PRO MAX",
  "price": 15000,
  "category": "technology",
  "subcategory": "phone"
}
```

## 📂 File Structure

Below is the project architecture. All development should be done inside the `src/` folder.

```text
api-ecoverse/
├── docs/               # API documentation and Postman collections
├── src/                # API source code
│   ├── controllers/    # Request processing logic
│   ├── models/         # Data access and business logic
│   ├── db/             # Data storage (JSON)
│   ├── routes/         # Endpoint definitions
│   ├── app.js          # Express configuration
│   └── server.js       # Server initialization (Entry point)
├── .env.example        # Environment variables template
├── vercel.json         # Vercel deployment settings
└── package.json        # Dependencies and scripts
```

## 👨‍💻 Author and Contact

<a href="https://github.com/Epiled">
  <img src="https://user-images.githubusercontent.com/55258483/178338085-2cea8bf2-6d0c-409a-9d0e-23359b7d303e.png" alt="Felindo">
  <br />
  <sub><b>Felipe De Andrade</b></sub>
</a>

Made with ❤️ by Felipe De Andrade 👋🏽 Get in touch!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fademendonca/)
[![CodePen](https://img.shields.io/badge/CodePen-000000?style=for-the-badge&logo=codepen&logoColor=white)](https://codepen.io/epiled)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:felipe.deam98@gmail.com)

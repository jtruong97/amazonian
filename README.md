# amazonian
Amazonian is inspired by the popular e-commerce platform 'Amazon', that features some of my favorite plants! This site mimics Amazon's layout, functionality, aethestics, and intuitive navigation. Amazonian features 3 full CRUD functionalities for managing products, reviews, and shopping carts. Amazonian also features OAuth which streamlines signup and login process for user convenience and security. Join Amazonian today to feature your favorite plant or to explore our products!

## Live Site
- https://amazonian-blt9.onrender.com/

## Clone This Project
1. Clone this repository
2. Install your dependencies
    - In root run: `pipenv install -r requirements.txt`
    - In react-vite run: `npm install`
3. Create .env file and include
    - SECRET_KEY
    - DATABASE_URL
    - FLASK_ENV
    - SCHEMA
    - S3_BUCKET
    - S3_KEY
    - S3_SECRET
    - GOOGLE_OAUTH_CLIENT_ID
    - GOOGLE_OAUTH_CLIENT_SECRET
4. Create your local database
    - Enter your virtual environment
        - In root run: `pipenv shell`
    - Create database
        - In virtual environment run: `flask db init`
        - In virtual environment run: `flask db migrate`
        - In virtual environment run: `flask db upgrade`
    - Seed Data
        - In virtual environment run: `flask seed all`
5. Run Local Servers
    - Enter virtual shell
        - In virtual environment run: `flask run`
    - In react-vite run: `npm run dev`

## Featured Technology
### Frameworks and Libraries
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![HML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)



### Database
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)


### Hosting
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

## Database Schema
[![Screenshot-2024-04-22-at-8-40-32-AM.png](https://i.postimg.cc/15Y5vzs0/Screenshot-2024-04-22-at-8-40-32-AM.png)](https://postimg.cc/Vdn86mS5)

## Feature List
1. Products
    - View all products
    - Create a new product
    - Update user's exisiting product
    - Delete user's exisiting product
2. Reviews
    - View all reviews on a product
    - Create a new review on a product
    - Update user's exisiting review
    - Delete user's exisiting review
3. Cart
    - View all products in cart
    - Add new product into cart
    - Update product quantity in cart
    - Delete product from cart

## Future Features
4. Search/Sort Filter
    - User will be able to search for product by category or name
5. Order History
    - Users will be able to view their order history if a cart has been checkout

## Endpoints
### Auth
| Request   | Purpose      | Return Value |
| --------- | ------------ | ------------ |
| GET /api/auth | Retrieve data| {} |
| POST /api/auth/unauthorized | Create data  | {} |
| POST /api/auth/signup | Create data  | {} |
| POST /api/auth/login | Logs in a current user with valid credentials and returns the current user's information.  | {}|
| POST /api/auth/logout | Logs out the current user and return a message if successful | {}|
### Reviews
| Request   | Purpose      | Return Value |
| --------- | ------------ | ------------ |
### Shopping Cart
| Request   | Purpose      | Return Value |
| --------- | ------------ | ------------ |
### Products
| Request   | Purpose      | Return Value |
| --------- | ------------ | ------------ |

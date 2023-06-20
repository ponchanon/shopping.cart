const fs = require('fs');
const path = require('path');
// Read the contents of the text file
// let db = fs.readFile(path.join(__dirname,'data.txt'), 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
  
//     // Parse the text data into a JavaScript array
//     const dbInitial = JSON.parse(data);
//     console.log(dbInitial)
//     return data;
// });

//considering static DB for products
let counter = 4;
let db = [
    {
        "id": "1",
        "name": "Node.js",
        "price": 20,
        "stock": 15,
        "image": `http://localhost:3690/images/node.png`
    },
    {
        "id": "2",
        "name": "React",
        "price": 10,
        "stock": 8,
        "image": `http://localhost:3000/images/react.png`
    },
    {
        "id": "3",
        "name": "Angular",
        "price": 15,
        "stock": 17,
        "image": `http://localhost:3000/images/angular.png`
    },
    {
        "id": "4",
        "name": "Vue",
        "price": 13,
        "stock": 12,
        "image": `http://localhost:3690/images/vue.png`
    }
]


//Product Class
module.exports = class Product {
    constructor(id, name, price, image, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.stock = stock;
    }

    //Adding to product list
    save() {
        this.id = ++counter;
        db.push(this);
        return this;
    }

    //Updating Product
    edit() {
        const index = db.findIndex(prod => prod.id == this.id);
        db.splice(index, 1, this);
        return this;
    }

    //Fetching product list
    static getAll() {
        return db;
    }

    //Deleting existing product by product id
    static deleteById(prodId) {
        const index = db.findIndex(prod => prod.id == prodId);
        const deletedProd = db[index];
        db.splice(index, 1);
        return deletedProd;
    }

    //Checking if product id exists
    static find(id) {
        return db.find(product => product.id == id);
    }
}
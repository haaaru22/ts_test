class Product {

    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    getProduct(){
        console.log(this.name,this.age);
    }
}

const product = new Product('kagawa',34)
console.log(product.name);
product.getProduct();
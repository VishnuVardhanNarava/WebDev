const smartPhone = {
    brand: "samsung",
    price: 25000,
    description: function(){
        return this.brand;
    }
}

console.log(smartPhone.description());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const SmartPhone = {
    brand: "samsung",
    price: 25000,
    description: () => this.brand
    }

console.log(SmartPhone.description());
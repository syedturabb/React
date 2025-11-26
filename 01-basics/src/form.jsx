class Car{
    constructor(name){
        this.brand = name;
    }
    present(){
        return 'I have a ' + this.brand
    }
}

class Model extends Car{
    constructor(name,mod){
        super(name)
        this.model=mod
    }
    show(){
        return this.present() + 'Model is ' + this.model
    }
}
const car1= new Model("Suzuki","WagonR")
car1.show();
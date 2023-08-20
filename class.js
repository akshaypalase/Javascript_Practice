//creating a class with properties and methods
class Car{
    constructor(name,id){
       this.name=name,
       this.id=id
    }

    start(){
        console.log(this.name,this.id);
    }
}

bmw=new Car('BMW',101)
bmw.start();


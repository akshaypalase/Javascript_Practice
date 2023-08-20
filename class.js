//1 creating a class with properties and methods
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

// how to implement class inheritance 

class Car1{
    constructor(name,model){
        this.name=name,
        this.model=model
    }

    start(){
         console.log(this.name,this.model);
    }
    end(){
        console.log('car stopped');
    }
}

class ElectricCar extends Car1{

    dashboard(){
        console.log('child class is called');
    }
    start(){
        super.start();
        super.end();
        this.dashboard()
    }
}

evcar=new ElectricCar('Tesla','AWDv34');
evcar.start();



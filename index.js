// Add your Circle class here

class Circle {
    constructor(radius){
        this.radius = radius;
    }

    set diameter(value){

       
        this._diameter = value;
       
        this.radius = (this._diameter) / 2
    }

    get diameter(){
        return this.radius * 2
    }

    set circumference(value){
        this._circumference = value;
        this.radius = (this._circumference / Math.PI) / 2
        
    }

    get circumference(){
        return Math.PI * this.diameter
    }

    set area(value){
        this._area = value;
    }

    get area(){
        return (this.radius ** 2) * Math.PI 
    }


}
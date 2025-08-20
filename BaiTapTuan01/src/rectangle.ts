export class Rectangle {
    weight:number;
    height: number;
    constructor(weight: number, height:number){
        this.weight= weight;
        this.height= height;
    }

    calculateArea():number{
        return this.weight*this.height;
    }

}
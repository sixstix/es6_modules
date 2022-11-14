import Car from "./car";

export default class Wishlist {
    list = [];
    nextId = 0;
    
    add(make, model, year){
        let car = new Car(this.nextId++, make, model, year);
        this.list.push(car);
    }
    
    remove(carId){
        let index = this.list.findIndex((car) => car.Id == carId);
        this.list.splice(index, 1);
    }
}
export class CommonModel {
    public name:string;
    public description:string;
    public unit:string;
    public price:number;
    
    constructor(name:string, description:string, unit:string, price:number){
        this.name = name;
        this.description = description;
        this.unit = unit;
        this.price = price;
        return {
            name:this.name,
            description:this.description,
            unit:this.unit,
            price:this.price
        }
    }
    
}
export class CountModel {
    public name:string;
    public count:number;
    
    constructor(name:string, count:number){
        this.name = name;
        this.count = count;
        return {
            name:this.name,
            count:this.count,
        }
    }
    
}

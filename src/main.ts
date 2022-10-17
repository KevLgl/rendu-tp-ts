export class Movie  {
    private _title: string;
    private _leasePrice: number;
    private _author: string;
    private _purchasePrice: number;

    constructor (title: string, leasePrice: number, purchasePrice: number, author: string) {
        this.title = title;
        this.leasePrice = leasePrice;
        this.purchasePrice = purchasePrice;
        this.author = author;
    }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get leasePrice(): number {
        return this._leasePrice;
    }
    public set leasePrice(value: number) {
        this._leasePrice = value;
    }
    public get author(): string {
        return this._author;
    }
    public set author(value: string) {
        this._author = value;
    }
    public get purchasePrice(): number {
        return this._purchasePrice;
    }
    public set purchasePrice(value: number) {
        this._purchasePrice = value;
    }

    displayMovie(): string {
        return `Movie : ${this.title} by ${this.author}\nLocation : $${this.leasePrice}\nAchat : $${this.purchasePrice}`;
    }

}

export class Catalog {
    private _amount: number;

    constructor (amount: number) {
        this.amount = amount
    }

    public get amount(): number {
        return this._amount;
    }
    public set amount(value: number) {
        this._amount = value;
    }

    add (Movie : Movie) : string {
        return `${movie.title} has been added`
    }

    getTotal(): string {
        return ` Movies : ${this.amount}`;
    }
}
//INSTANCE DU CATALOGUE 
const catalog = new Catalog(0)
//INSTANCES DE FILMS 
let movie = new Movie('Titanic', 14, 111, 'James Cameron')
let secondMovie = new Movie('Montre jamais ça à personne', 22, 45, 'Orelsan')
let thirdMovie = new Movie('Film de test', 12, 13, 'moi')

console.log(catalog.add(movie))
console.log(catalog.add(secondMovie))
console.log(catalog.add(thirdMovie))
console.log(catalog.getTotal())
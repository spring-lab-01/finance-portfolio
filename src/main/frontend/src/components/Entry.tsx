export class Entry {
    id : number;
    month: number;
    year: number;
    value: number;
    constructor(id: number, month: number, year: number, value: number) {
        this.id = id;
        this.month = month;
        this.year = year;
        this.value = value;
    }
}
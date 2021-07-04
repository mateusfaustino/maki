export default class Spacing {
    constructor(columns, gap, margin){
        this.columns=columns;
        this.gap=gap;
        this.margin=margin;
    }
    get cs() {
        return `calc((100vw - 2*(${this.margin}) - ${this.columns-1}*${this.gap})/${this.columns})`
    }
    get cgs() {
        return `calc((100vw - 2*(${this.margin}) + ${this.gap})/${this.columns})`
    }
    get container() {
        return `calc(100vw - 2*(${this.margin}) )`
    }

}
export default class PricingCard {
    constructor(
        public readonly title: string,
        public readonly features: string[],
        public readonly price: number,
        public readonly end_text: string
    ){}
    public getPrice(): string {
        return this.isFree() ? 
            "Free" : `\$${this.price/100}`
    }
    public isFree(): boolean{
        return this.price == 0
    }
}
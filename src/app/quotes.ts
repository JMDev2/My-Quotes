export class Quotes {
    quote: string;
    upvote: number;
    downvote: number;
    constructor(quote:string, upvote:number, downvote:number){
        
        this.quote =  quote;
        this.upvote = upvote;
        this.downvote = downvote;
    }
}

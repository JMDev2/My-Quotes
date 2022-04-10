export class Quotes {
    public quote: string;
    public upvote: number;
    public downvote: number;
    public showDescription: boolean;
    public author: string;
    public name: string;
    public date: Date;
    constructor(quote:string, upvote:number, downvote:number, author: string, name: string, date: Date){
        
        this.quote =  quote;
        this.upvote = upvote;
        this.downvote = downvote;
        this.showDescription = false;
        this.author = author;
        this.name = name;
        this.date = date;
        
      
      
    }
}

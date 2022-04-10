export class Quotes {
    public quote: string;
    upvote: number;
    downvote: number;
    public showDescription: boolean;
    public author: string;
    public name: string;
    public date: Date;
    
    constructor(quote:string, upvote:number=0, downvote:number=0, author: string, name: string, date: Date = new Date()){
        
        this.quote =  quote;
        this.upvote = upvote || 0
        this.downvote = downvote || 0
        this.showDescription = false;
        this.author = author;
        this.name = name;
        this.date = date;
        
      
      
    }

    increaseVotes(){
        this.upvote++ 
      }
      decreaseVotes(){
        this.downvote++
      }
}

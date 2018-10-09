export class Post {
	title: string;
  	content: string;
  	loveIts: number;
  	lovePositif : number;
  	loveNegatif : number;
  	created_at: Date;

  	constructor(title: string, content: string, loveIts: number, lovePositif : number, loveNegatif : number, created_at: Date){
  		this.title = title;
  		this.content = content;
  		this.loveIts = loveIts;
  		this.lovePositif = lovePositif;
  		this.loveNegatif = loveNegatif;
  		this.created_at = created_at;
  	}

}

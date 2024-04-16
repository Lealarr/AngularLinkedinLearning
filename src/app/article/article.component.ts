
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  //titreArticle: string ="Titre de l'article";
  //prixArticle: number = 12;

  totalNbrLike: number = 0;
  comment: string = "Ceci est un commentaire";

  @Output() info = new EventEmitter<string>();

  @Input() titreArticle: string;
  @Input() prixArticle: number;
  @Input() description: string;
  @Input() urlImg: string;
  @Input() textAltImg: string;
  @Input() dispo: boolean;
  @Input() idArticle: number;
  jaime: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onLike(){
    if(this.jaime === true){ // si j'aime est égale à true
      this.totalNbrLike++; // le nombre de like prendra +1
      this.jaime = false; // et la variable j'aime changera de valeur pour être égale à false
    }else{
      this.totalNbrLike--; // le nombre de like sera diminué de 1
      this.jaime = true; // et la variable j'aime reprendra sa valeur initiale
    }
    this.info.emit(this.titreArticle);
  }

  getColor(){
    if(this.dispo === true){
      return 'green';
    }else{
      return 'red';
    }
  }

}

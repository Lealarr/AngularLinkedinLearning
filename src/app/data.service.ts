import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listeArticles = [
    {
      id: 1,
      titreArticle: "Tv",
      prixArticle:200,
      description:"Super TV écran plat",
      urlImg:"../assets/tv.jpeg",
      textAltImg:"Une télévision",
      dispo: true
    },
    {
      id: 2,
      titreArticle:"Vélo",
      prixArticle:80,
      description:"Un super vélo tout terrain", 
      urlImg:"../assets/velo.jpeg", 
      textAltImg:"Un vélo", 
      dispo: false 
    },
    {
      id: 3,
      titreArticle: "Jouet",
      prixArticle: 20, 
      description: "Jouet pour enfant", 
      urlImg: "../assets/jouet.jpeg", 
      textAltImg: "Un jouet", 
      dispo: true 
    }
  ];

  constructor() { }

  getArticle(id: number) {
    const articles = this.listeArticles.find((a) => {
      return a.id == id;
    });
    return articles;
  }
}

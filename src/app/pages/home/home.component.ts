import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  articles: any;
  mostVisited: any;
  env = environment;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getAllArticles();
    this.getMostVisited(5);
  }

  getAllArticles() {

    // local onde a minha API está rodando
    this.http.get(`${this.env.apiBaseURL}/receita`)

      // faço uma "inscrição" para receber a reposta da APi
      .subscribe((response) => {
        console.log(response);

        // Resposta e exibição da API
        this.articles = response
      },
        (error) => {
          console.log(error);
        }

      )

  }

  getMostVisited(limit: number) {

    this.http.get(`${this.env.apiBaseURL}/receita/home/5`)
      .subscribe((response) => {
        console.log(response);
        this.mostVisited = response
      },
        (error) => {
          console.log(error);
        }

      )

  }


}



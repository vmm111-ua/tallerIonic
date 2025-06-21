import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  private readonly API_URL = "https://swapi.tech/api/";

  constructor(private http: HttpClient) { }

  public getAllArticles(category: string) : Observable<any>{
    return this.http.get<any>(
      this.API_URL+category+"/"
    );
  }

  public getArticle(category: string, id: string) : Observable<any> {
    return this.http.get<any>(
      this.API_URL+category+"/"+id
    )
  }
}

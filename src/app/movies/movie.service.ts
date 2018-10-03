import { Injectable }      from '@angular/core';
import {Movie} from './movies/Movie';
import {Http,Response,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"


@Injectible()
export class MovieService{
  constructor(private http:Http){

  }



  getAllMovies: Observable<Movie[]>{
    return this.http.get("http://localhost:8081/MovieServerApplication/rest/movie/getAllMovies/").
    map((response:Response)=><Movie[]>response.json());
  }

  addMovie(data:Movie): Observable<Movie[]> {
      let movieData=JSON.stringify(data);
      alert(movieData);
      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpHeaders });

      return this.http
          .post('http://localhost:8081/MovieServerApplication/rest/movie/create/',movieData,options)
          .map((success => success.status));
      }


}

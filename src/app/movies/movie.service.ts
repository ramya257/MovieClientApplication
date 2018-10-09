import { Injectable }      from '@angular/core';
import { map } from 'rxjs/operators';
import {Http,Response,Headers, RequestOptions} from '@angular/http';
import { Movie } from "src/app/movies/Movie";
import { Observable } from "rxjs";
import { Category } from "src/app/movies/Category";


@Injectable()
export class MovieService{
  constructor(private http:Http){

  }



  getAllMovies(): Observable<Movie[]>{
    return this.http.get("http://localhost:8081/MovieWebApplication/rest/movie/getAllMovies/").
    pipe(map((response: any) => response.json()));
  }

  addMovie(data:Movie): Observable<Movie[]> {
      let movieData=JSON.stringify(data);
      alert(movieData);
      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpHeaders });

      return this.http
          .post('http://localhost:8081/MovieWebApplication/rest/movie/createMovie/',movieData,options).
          pipe(map((response: any) => response.json()));
      }

	  
    searchMovieByCategory(data:string): Observable<Movie[]> {
                console.log(data)
      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpHeaders });

                return this.http
                    .get('http://localhost:8081/MovieWebApplication/rest/movie/searchMovie/'+data).pipe(map((response: any) => response.json()));
                    
                }
    
    getMovieCategory():Observable<Category[]>{
     
        return this.http.get('http://localhost:8081/MovieWebApplication/rest/movie/fetchCategory').pipe(map((response: any) => response.json()));
        
    }
    
    deleteMovie(movieId:number,movieGenre:string):Observable<Movie[]>{
        
        console.log(movieId);
        console.log(movieGenre);
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.delete('http://localhost:8081/MovieWebApplication/rest/movie/deleteMovie/'+ movieId+'/'+movieGenre,options)
        .pipe(map((response: any) => response.json()))
        
    }
    
    updateMovie(data:any):Observable<Movie[]>{
      
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put('http://localhost:8081/MovieWebApplication/rest/movie/updateMovie/',data,options)
        .pipe(map((response: any) => response.json()))
    }

}

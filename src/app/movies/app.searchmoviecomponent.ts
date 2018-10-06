import {Component} from '@angular/core';

import { MovieService } from "src/app/movies/movie.service";
import { OnInit } from "@angular/core";
import { Category } from "src/app/movies/Category";
import { Movie } from "src/app/movies/Movie";

@Component({
  selector:'app-root',
  templateUrl:'../movies/app.searchmoviecomponent.html',
  providers:[MovieService]
})

export class SearchMovieComponent implements OnInit{
movieCategory:string;
movieName:string;
isCategoryLoaded:boolean=false;
isDataLoaded:boolean=false;
categories:Category[];
moviesList:Movie[];
model:any={};

constructor(private movieService: MovieService){
}

ngOnInit() {
   this.movieService.getMovieCategory().subscribe(categoriesList=>{this.categories=categoriesList,this.isCategoryLoaded=true});
  }

searchMovie():void{
    this.movieService.searchMovieByCategory(this.movieCategory).subscribe(movies=>{this.moviesList=movies,this.isDataLoaded=true,console.log(this.moviesList)});
}
  
deleteMovie(id:number,genre:string):void{
    
    this.movieService.deleteMovie(id,genre).subscribe(movies=>{this.moviesList=movies,this.isDataLoaded=true,console.log(this.moviesList)});
}

updateMovie():void{
    this.movieService.getMovieCategory().subscribe(categoriesList=>{this.categories=categoriesList,this.isCategoryLoaded=true});
    this.movieService.updateMovie(this.model).subscribe(movies=>{this.moviesList=movies,this.isDataLoaded=true,console.log(this.moviesList)});
}
  

}
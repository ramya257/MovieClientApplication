import {Component} from '@angular/core';

import { MovieService } from "src/app/movies/movie.service";
import { OnInit } from "@angular/core";
import { Category } from "src/app/movies/Category";
import { Movie } from "src/app/movies/Movie";
import { Input } from "@angular/core";


@Component({
  selector:'app-root',
  templateUrl:'../movies/app.searchmoviecomponent.html',
  providers:[MovieService]
})

export class SearchMovieComponent implements OnInit{
movieCategory:string;
moviesGenre:string;
movieName:string;
moviesRating:number;
isCategoryLoaded:boolean=false;
isDataLoaded:boolean=false;
categories:Category[];
isUpdateCategoryLoaded:boolean=false;
moviesList:Movie[];
moviesName:string;

model:any={};


constructor(private movieService: MovieService){
}

ngOnInit() {
   this.movieService.getMovieCategory().subscribe(categoriesList=>{this.categories=categoriesList,this.isCategoryLoaded=true});
  }

searchMovie():void{
    this.movieService.searchMovieByCategory(this.movieCategory).subscribe(movies=>{this.moviesList=movies,this.isDataLoaded=true,console.log(this.moviesList)});
}
  
deleteMovie(index:number):void{
    this.isUpdateCategoryLoaded=false
    let id:number=this.moviesList[index].moviesId;
    let genre:string=this.moviesList[index].moviesGenre;
    this.movieService.deleteMovie(id,genre).subscribe(movies=>{this.moviesList=movies,this.isDataLoaded=true,console.log(this.moviesList)});
}
updateMovie(index:number):void{
    console.log("here");
    
   this.movieService.getMovieCategory().subscribe(categoriesList=>{this.categories=categoriesList,this.isUpdateCategoryLoaded=true});
   
   this.model.moviesId=this.moviesList[index].moviesId;
   this.model.moviesName=this.moviesList[index].moviesName;
   this.model.moviesGenre=this.moviesList[index].moviesGenre;
   this.model.moviesRating=this.moviesList[index].moviesRating;
  
  
}
updateMovieData():void{
    this.movieService.updateMovie(this.model).subscribe(moviesList=>{console.log(this.moviesList),this.isUpdateCategoryLoaded=false});
}


}
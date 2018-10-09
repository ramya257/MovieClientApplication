import {Pipe,PipeTransform} from '@angular/core';
import { Movie } from "src/app/movies/Movie";


@Pipe({
    name:'moviePipe'
})
export class MoviePipe implements PipeTransform{
    
    
    transform(items: Movie[],searchName:string,searchRating:number,searchGenre:string) {
      if(items&&items.length>0){
          return items.filter(item =>{
              if (searchName && item.moviesName.toLowerCase().indexOf(searchName.toLowerCase()) === -1){
                 
                  return false;
              }
              if (searchRating && item.moviesRating.toString().toLowerCase().indexOf(searchRating.toString().toLowerCase()) === -1){
                  return false;
              }
              if (searchGenre && item.moviesGenre.toLowerCase().indexOf(searchGenre.toLowerCase()) === -1){
                  return false;
              }
 
              return true;
         })
          
      }else{
          return items;
      }
    }
}
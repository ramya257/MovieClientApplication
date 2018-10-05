import {Component} from '@angular/core';
import {Category} from './movies/Category';

@Component({
  selector:'app-root',
  templateUrl:'./movies/app.searchmoviecomponent.html'
})

export class SearchMovieComponent implements OnInit{
categorySelected:Category;
isDataLoaded:boolean=false;

constructor(private movieService: MovieService){
}

ngOnInit() {
   movieService.getMovieCategory().subscribe(categories=>this.categorySelected=categories);
  }
  
  onInput($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }


}
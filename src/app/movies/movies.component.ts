import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import * as $ from 'jquery';
import {  } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  
nowPlaying=[];
topRated=[];
pageNumbers:number[]=[];
currentPage:number=1;
color='red';
  constructor(private _MovieServiceService:MovieServiceService) {
    for(let i =1 ; i<=10 ; i++){
      this.pageNumbers.push(i);
    }
    this._MovieServiceService.movieNowPlaying(this.currentPage).subscribe( (data) => {
      this.nowPlaying = data.results;
                console.log(this.nowPlaying);
              console.log("wwwwwww  "+ this.currentPage);
          
              } ); 
         
   }
  
        

   getMovies(pageNumber){
     this.currentPage=pageNumber
    this._MovieServiceService.movieNowPlaying(this.currentPage).subscribe( (data) => {
      this.nowPlaying = data.results;
      this.color=pageNumber.srcElement.style['color'];
      console.log(pageNumber.srcElement.style['color']);
  })}

  nextPage(){

if(this.currentPage==10){
this.currentPage=1;
this.getMovies(this.currentPage);
}
else{
this.getMovies(this.currentPage+1);

}
  }


  
  previousPage(){
    if(this.currentPage==1){
      this.currentPage=10;
      this.getMovies(this.currentPage);
      }
    else{
       
    this.getMovies(this.currentPage-1);
      }
    
}

  ngOnInit() {
  }

}

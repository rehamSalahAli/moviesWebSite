import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor( private _HttpClient:HttpClient) { 

  }
  

  movieNowPlaying(pageNumber):Observable<any>{
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/now_playing?api_key=b6f47010b87d6431389bd66e4e39ad6d&key=1&page="+pageNumber);

  }
  movieTopRated(pageNumber):Observable<any>{
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/top_rated?api_key=b6f47010b87d6431389bd66e4e39ad6d&key=1&page="+pageNumber);

  }
  moviePopular(pageNumber):Observable<any>{
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/popular?api_key=b6f47010b87d6431389bd66e4e39ad6d&key=1&page="+pageNumber);

  }
  movieUpComing(pageNumber):Observable<any>{
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/upcoming?api_key=b6f47010b87d6431389bd66e4e39ad6d&key=1&page="+pageNumber);

  }
}

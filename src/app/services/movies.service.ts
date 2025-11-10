import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  constructor( private http: HttpClient ) { }


  getFeature() {

    //tslint:disable-next-line:max-line-length
    return this.http.get( `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-31&api_key=9432a96a59e937de5f425c3310b5b1bb&language=es&include_image_language=es` )


  }

}


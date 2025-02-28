import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatImageService {

  constructor(private http: HttpClient) {

  }
  public getCatImages(): Observable<CatImage[]> {
    return this.http.get<CatImage[]>('/api/cat-generator')
  }
}
export type CatImage = {
  id: string;
  url: string;
  width: number;
  height: number;
}

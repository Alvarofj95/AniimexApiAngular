import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from '../model/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  url = 'http://localhost:4000/api/animes/'

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarAnime(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarAnime(anime: Anime): Observable<any> {
    return this.http.post(this.url, anime);
  }

  obtenerAnime(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarAnime(id: string, anime: Anime): Observable<any> {
    return this.http.put(this.url + id, anime);
  }
}

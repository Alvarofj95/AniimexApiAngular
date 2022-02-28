import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Anime } from 'src/app/model/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-listar-anime',
  templateUrl: './listar-anime.component.html',
  styleUrls: ['./listar-anime.component.css']
})
export class ListarAnimeComponent implements OnInit {
  listAnimes: Anime[] = [];

  constructor(private _animeService: AnimeService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.recibirAnimes();
  }

  recibirAnimes() {
    this._animeService.getAnimes().subscribe(data => {
      console.log(data);
      this.listAnimes = data;
    }, err => {
      console.log(err);
    })
  }

  eliminarAnime(id: any){
    this._animeService.eliminarAnime(id).subscribe( data => {
      this.toastr.error('Wow! Eliminaste un anime makina', 'Anime Eliminado');
      this.recibirAnimes();
    }, error => {
      console.log(error);
    })
  }
}

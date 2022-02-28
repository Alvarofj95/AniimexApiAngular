import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Anime } from 'src/app/model/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-crear-anime',
  templateUrl: './crear-anime.component.html',
  styleUrls: ['./crear-anime.component.css'],
})
export class CrearAnimeComponent implements OnInit {
  animeForm: FormGroup;
  titulo = 'Create anime';
  id: string | null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _animeService: AnimeService,
    private aRouter: ActivatedRoute
  ) {
    this.animeForm = this.fb.group({
      anime: ['', Validators.required],
      gender: ['', Validators.required],
      season: ['', Validators.required],
      image: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editarAnime();
  }

  agregarAnime() {
    console.log(this.animeForm);

    console.log(this.animeForm.get('anime')?.value);

    const ANIME: Anime = {
      name: this.animeForm.get('anime')?.value,
      gender: this.animeForm.get('gender')?.value,
      season: this.animeForm.get('season')?.value,
      image: this.animeForm.get('image')?.value,
    };

    if (this.id !== null) {
      //editamos anime
      this._animeService.editarAnime(this.id, ANIME).subscribe(data => {
        this.toastr.info(
          'Animus modificatus',
          'Anime modificado'
        );
        this.router.navigate(['/']);
      })

    } else {
      // agregamos anime
      console.log(ANIME);
      this._animeService.guardarAnime(ANIME).subscribe(
        (data) => {
          this.toastr.success(
            '¡Buena crack! Has registrado un anime ._.',
            'Anime egistrado'
          );
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);
          this.animeForm.reset();
        }
      );
    }

    this.router.navigate(['/']);
  }

  editarAnime() {
    if (this.id !== null) {
      this.titulo = 'Edit anime';
      this._animeService.obtenerAnime(this.id).subscribe((data) => {
        this.animeForm.setValue({
          anime: data.name,
          gender: data.gender,
          season: data.season,
          image: data.image,
        });
      });
    }
  }
}

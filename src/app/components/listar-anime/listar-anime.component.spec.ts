import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAnimeComponent } from './listar-anime.component';

describe('ListarAnimeComponent', () => {
  let component: ListarAnimeComponent;
  let fixture: ComponentFixture<ListarAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

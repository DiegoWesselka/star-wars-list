import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Person } from '../person';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-star-wars-detail',
  templateUrl: './star-wars-detail.component.html',
  styleUrls: ['./star-wars-detail.component.scss']
})
export class StarWarsDetailComponent implements OnInit {

  private _id: number;
  public person: Person;
  public isLoading = true;

  constructor(private starWarsService: StarWarsService,
    private _activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.listPersonbyID();
  }

  private listPersonbyID(): void {
    this._activatedRoute.params
    .pipe(
      mergeMap(params => {
          this._id = +params['id'];
          return this.starWarsService.cast(this._id);
      })
      ).subscribe(person => {
        this.person = person;
        this.isLoading = false;
      });
  }

  // Back
  public backToList(): void {
    this.location.back();
  }
}



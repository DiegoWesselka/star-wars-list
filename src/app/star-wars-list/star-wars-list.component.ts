import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-star-wars-list',
  templateUrl: './star-wars-list.component.html',
  styleUrls: ['./star-wars-list.component.scss']
})
export class StarWarsListComponent implements OnInit {

  public peopleList: Array<Person>;
  public nextUrl: string;
  public previousUrl: string;
  public pageId: number;
  public errorMessage = '';
  public isLoading = true;

  constructor(
    private startWarsService: StarWarsService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.listPerson();
  }

  private listPerson(): void {
    this._activatedRoute.queryParams
      .subscribe(params => {
       this.pageId = +params['page'];

      this.startWarsService.listCast(this.pageId)
        .subscribe(result => {
          this.previousUrl = result.previous;
          this.nextUrl = result.next;
          this.peopleList = result.results;
          this.isLoading = false;
        });
    });
  }

  navigateToPrevious () {
    if (this.hasPrevious) {
      this._router.navigate(['/list'], {queryParams: {page : this.previousNr }});
    }
  }

  get previousNr(): number {
    return +this.previousUrl.charAt(this.previousUrl.length - 1);
  }

  get hasPrevious(): boolean {
    return this.previousUrl != null;
  }

  get hasNext(): boolean {
    return this.nextUrl != null;
  }

  get nextNr(): number {
    return +this.nextUrl.charAt(this.nextUrl.length - 1);
  }

  navigateToNext () {
    if (this.hasNext) {
      this._router.navigate(['/list'], {queryParams: {page : this.nextNr }});
    }
  }


  onGridClick(person: Person) {
    const parts: string[] = person.url.split('/');
    parts.pop();
    const index: number = +parts.pop();
    this._router.navigate(['/list', index]);
  }

}

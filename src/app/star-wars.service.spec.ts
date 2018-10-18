import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { StarWarsDetailComponent } from './star-wars-detail/star-wars-detail.component';
import { StarWarsListComponent } from './star-wars-list/star-wars-list.component';
import { StarWarsService } from './star-wars.service';


describe('StarWarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpClientModule,
        HttpModule,
      ],
      declarations: [
        StarWarsListComponent,
        StarWarsDetailComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'},
      StarWarsService]

    });
  });

  it('should be created', inject([StarWarsService], (service: StarWarsService) => {
    expect(service).toBeTruthy();
  }));
});

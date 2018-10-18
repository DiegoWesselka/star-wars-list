import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarWarsDetailComponent } from './star-wars-detail/star-wars-detail.component';
import { StarWarsListComponent } from './star-wars-list/star-wars-list.component';
import { StarWarsService } from './star-wars.service';

@NgModule({
  declarations: [
    AppComponent,
    StarWarsListComponent,
    StarWarsDetailComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [AppComponent],

  providers: [StarWarsService]

})
export class AppModule { }

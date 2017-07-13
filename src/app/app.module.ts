import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { Hero } from './test.component';
import {HeroDetailComponent} from './hero-detail.component';

const appRoutes:Routes =[
{path:'Home',component:AppComponent},
{path:'hero-list' , component : TestComponent},
{path:'hero-details', component:TestComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

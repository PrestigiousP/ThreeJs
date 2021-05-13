import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ShareComponent} from './share/share.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MainComponent} from './main/main.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'share', component: ShareComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'home', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

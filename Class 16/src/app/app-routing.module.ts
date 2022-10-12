import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SusanComponent } from './about/susan/susan.component';
import { BobComponent } from './about/bob/bob.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: "", redirectTo: "/Home", pathMatch: "full" },
  {path: "Home", component: HomeComponent },

  // {path: "About", redirectTo: "/About", pathMatch: "full" },

  {path: "About", component: AboutComponent, children: [
    {path: "susan", component: SusanComponent},
    {path: "bob", component: BobComponent}
  ]},
  {path: "Contact", component: ContactComponent},
  {path: "**", component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CambiarComponent } from './pages/cambiar/cambiar.component';
import { InfoComponent } from './pages/info/info.component';
import { MonedaComponent } from './pages/moneda/moneda.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'cambiar', component: CambiarComponent},
  {path: 'info', component: InfoComponent},
  {path: 'moneda/:nombre', component: MonedaComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

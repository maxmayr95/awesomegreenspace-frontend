import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BenchComponent } from './bench/bench.component';
import { FiresComponent } from './fires/fires.component';
import { FireComponent } from './fire/fire.component';
const routes: Routes = [ { path: 'home', component: HomeComponent },
{ path: 'bench/:uuid', component: BenchComponent },
{ path: 'fireplaces', component: FiresComponent },
{ path: 'fireplaces/:app/:device', component: FireComponent },
{path: '', component: FiresComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

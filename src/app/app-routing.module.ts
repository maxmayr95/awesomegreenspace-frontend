import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BenchComponent } from './bench/bench.component';
const routes: Routes = [ { path: '', component: HomeComponent },{ path: 'bench/:uuid', component: BenchComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

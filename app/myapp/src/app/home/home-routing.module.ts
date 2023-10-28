import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'olvidecontra',
    loadChildren: () =>
      import('../olvidecontra/olvidecontra.module').then((m) => m.OlvidecontraPageModule),
  },
  {
    path: 'bienvenida',
    loadChildren: () =>
      import('../bienvenida/bienvenida.module').then((m) => m.BienvenidaPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

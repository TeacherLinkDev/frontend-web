// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'signin', loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninPageModule) },
  { path: '', redirectTo: 'signin', pathMatch: 'full' }, // Optional: Redirect to signin by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

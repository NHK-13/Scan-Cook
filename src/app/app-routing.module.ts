import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'recette', loadChildren: './recette/recette.module#RecettePageModule', canActivate: [AuthGuard] },
  { path: 'detail-recette/:key', loadChildren: './detail-recette/detail-recette.module#DetailRecettePageModule', canActivate: [AuthGuard] },
  { path: 'scanner', loadChildren: './scanner/scanner.module#ScannerPageModule', canActivate: [AuthGuard] },
  { path: 'landing', loadChildren: './landingpage/landingpage.module#LandingpagePageModule' },
  { path: 'mes-favoris', loadChildren: './favoris/favoris.module#FavorisPageModule', canActivate: [AuthGuard] },
  { path: 'region', loadChildren: './region/region.module#RegionPageModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

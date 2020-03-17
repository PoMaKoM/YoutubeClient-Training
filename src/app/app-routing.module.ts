import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/client',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'client',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./youtube/youtube.module').then(m => m.YoutubeModule)
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

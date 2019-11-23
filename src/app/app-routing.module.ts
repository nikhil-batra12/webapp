import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

const routes: Routes = [
    { path: 'customer', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard] },
    // tslint:disable-next-line:max-line-length
    { path: 'admin', loadChildren: () => import('./admin-layout/admin-layout.module').then(m => m.AdminLayoutModule), canActivate: [AuthGuard] },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    // { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
    // { path: 'error', loadChildren: () => import('./server-error/server-error.module').then(m => m.ServerErrorModule) },
    // { path: 'access-denied', loadChildren: () => import('./access-denied/access-denied.module').then(m => m.AccessDeniedModule) },
    // { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
    { path: '**', redirectTo: 'customer' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

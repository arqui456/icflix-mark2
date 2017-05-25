import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FilmesComponent } from './filmes/filmes.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { PrincipalComponent } from './principal/principal.component';
import { AddComponent } from './add/add.component';
import { AddCatComponent} from './add-cat/add-cat.component';

import { AcaoComponent } from './acao/acao.component';
import { AventuraComponent } from './aventura/aventura.component';
import { SuspenseComponent } from './suspense/suspense.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'principal', component: PrincipalComponent},
  { path: 'add', component: AddComponent },
  { path: 'addCat', component: AddCatComponent },
  { path: 'acao', component: AcaoComponent},
  { path: 'aventura', component: AventuraComponent},
  { path: 'suspense', component: SuspenseComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}

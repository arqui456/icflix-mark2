import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { FilmeService } from './services/filme.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
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
import { AddCatComponent } from './add-cat/add-cat.component';
import { CategoriaService } from './services/categoria.service';
import { AcaoComponent } from './acao/acao.component';
import { AventuraComponent } from './aventura/aventura.component';
import { SuspenseComponent } from './suspense/suspense.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    PrincipalComponent,
    AddComponent,
    AddCatComponent,
    AcaoComponent,
    AventuraComponent,
    SuspenseComponent
  ],
  imports: [
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    FilmeService,
    UserService,
    CategoriaService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }

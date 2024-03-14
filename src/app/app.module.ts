// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; // Importa MatCheckboxModule
import { MatCardModule } from '@angular/material/card'; // Importa MatCardModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule
import { MatButtonModule } from '@angular/material/button'; // Importa MatButtonModule
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AppComponent } from './app.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module'; // Importa AppRoutingModule

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'perfil', component: PerfilComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    RegistrarseComponent,
    InicioComponent,
    ReportesComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatCheckboxModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


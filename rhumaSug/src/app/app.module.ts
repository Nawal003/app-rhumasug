import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/templates/accueil/accueil.component';
import { ProduitsComponent } from './pages/templates/produits/produits.component';
import { ConnexionComponent } from './pages/templates/connexion/connexion.component';
import { ProfilComponent } from './pages/templates/profil/profil.component';
import { PanierComponent } from './pages/templates/panier/panier.component';
import { NavBarComponent } from './pages/template-parts/nav-bar/nav-bar.component';
import { Erreur404Component } from './pages/templates/erreur404/erreur404.component';
import { ProduitsService } from './system/services/produits.service';
import { PanierService } from './system/services/panier.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProduitsComponent,
    ConnexionComponent,
    ProfilComponent,
    PanierComponent,
    NavBarComponent,
    Erreur404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProduitsService, PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }

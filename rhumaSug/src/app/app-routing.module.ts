import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/templates/accueil/accueil.component';
import { ConnexionComponent } from './pages/templates/connexion/connexion.component';
import { Erreur404Component } from './pages/templates/erreur404/erreur404.component';
import { PanierComponent } from './pages/templates/panier/panier.component';
import { ProduitsComponent } from './pages/templates/produits/produits.component';
import { ProfilComponent } from './pages/templates/profil/profil.component';

const routes: Routes = [
  {path:'', component: AccueilComponent},
  {path:'produits', component: ProduitsComponent},
  {path:'profil', component: ProfilComponent},
  {path:'connexion', component: ConnexionComponent},
  {path:'panier', component: PanierComponent},
  {path:'**', component: Erreur404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

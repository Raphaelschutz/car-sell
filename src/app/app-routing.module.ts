import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component'; // Importation du composant Dashboard
import { HomeComponent } from './home/home.component'; // Importation du composant Home

// Définition des routes de l'application
const routes: Routes = [
  { path: "admin/dashboard", component: DashboardComponent }, // Route pour le tableau de bord (admin)
  { path: "admin/dashboard/:id", component: DashboardComponent }, // Route pour le tableau de bord avec un paramètre d'ID
  { path: "home", component: HomeComponent }, // Route pour la page d'accueil
  { path: "", redirectTo: "home", pathMatch: 'full' }, // Redirection de la racine vers la page d'accueil
  { path: "**", redirectTo: "home" } // Redirection pour les chemins non trouvés (page 404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuration du routeur avec les routes définies
  exports: [RouterModule] // Exportation du module de routage pour l'utiliser dans l'application
})
export class AppRoutingModule { }
//
// Explications supplémentaires
// Imports:

// NgModule: Décorateur pour définir un module Angular.
// RouterModule et Routes: Nécessaires pour configurer et gérer les routes de l'application.
// DashboardComponent et HomeComponent: Composants importés pour être utilisés dans les routes.
// Définition des routes (routes):

// { path: "admin/dashboard", component: DashboardComponent }: Route pour accéder au tableau de bord de l'admin.
// { path: "admin/dashboard/:id", component: DashboardComponent }: Route pour accéder à une version spécifique du tableau de bord de l'admin avec un paramètre id.
// { path: "home", component: HomeComponent }: Route pour accéder à la page d'accueil.
// { path: "", redirectTo: "home", pathMatch: 'full' }: Redirige la racine de l'application vers la page d'accueil. Le pathMatch: 'full' signifie que toute l'URL doit correspondre pour que la redirection se produise.
// { path: "**", redirectTo: "home" }: Route de secours qui redirige toutes les routes non trouvées vers la page d'accueil. Utile pour gérer les erreurs 404.
// Configuration du module de routage:

// imports: [RouterModule.forRoot(routes)]: Initialise le routeur avec les routes définies en utilisant forRoot(), ce qui configure le routeur pour l'application entière.
// exports: [RouterModule]: Exporte le RouterModule configuré pour qu'il soit disponible dans toute l'application.
// Ces commentaires devraient vous aider à mieux comprendre comment fonctionne le routage dans votre application Angular. Si vous avez d'autres questions ou avez besoin de plus de détails, n'hésitez pas à demander!








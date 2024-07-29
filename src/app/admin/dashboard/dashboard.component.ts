import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Déclaration du formulaire réactif
  offerForm!: FormGroup;
  // Tableau pour stocker les offres
  offers: any[] = [];

  // Injection de FormBuilder dans le constructeur
  constructor(private formbuilder: FormBuilder) {}

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit(): void {
    // Initialisation du formulaire lors du chargement du composant
    this.initOfferForm();
  }

  // Méthode pour initialiser le formulaire
  initOfferForm(): void {
    // Définition des contrôles du formulaire et de leurs validations
    this.offerForm = this.formbuilder.group({
      index: [null], // Champ caché pour l'index
      title: ['', [Validators.required, Validators.maxLength(100)]], // Titre avec validation de champ requis et longueur maximale
      brand: ['', Validators.required], // Marque avec validation de champ requis
      model: ['', Validators.required], // Modèle avec validation de champ requis
      description: '', // Description sans validation
      price: [0, Validators.required] // Prix avec validation de champ requis
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmitOfferForm(): void {
    const offerIndex = this.offerForm.value.index; // Récupération de l'index de l'offre
    let offer = { ...this.offerForm.value }; // Copie des valeurs du formulaire dans un nouvel objet
    delete offer.index; // Suppression de l'index de l'objet offre

    // Ajout ou mise à jour de l'offre dans le tableau
    if (offerIndex === null || offerIndex === undefined || offerIndex < 0) {
      this.offers.push(offer); // Ajout d'une nouvelle offre
    } else {
      this.offers[offerIndex] = offer; // Mise à jour d'une offre existante
    }

    // Réinitialisation du formulaire après soumission
    this.offerForm.reset({
      index: null,
      title: '',
      brand: '',
      model: '',
      description: '',
      price: 0
    });

    // Affichage de l'état du formulaire et des offres pour le débogage
    console.log(this.offerForm.invalid);
    console.log(this.offers);
  }

  // Méthode appelée pour éditer une offre
  onEditOffer(offer: any, index: number): void {
    this.offerForm.setValue({ ...offer, index }); // Remplissage du formulaire avec les valeurs de l'offre à éditer
  }

  // Méthode appelée pour supprimer une offre
  onDeleteOffer(index: number): void {
    this.offers.splice(index, 1); // Suppression de l'offre du tableau
  }
}

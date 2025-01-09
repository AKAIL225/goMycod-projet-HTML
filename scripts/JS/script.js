
class Voiture {
    constructor(marque, modele) {
      this.marque = marque;
      let _modele = modele; // Attribut privé
  
      this.getModele = function() {
        return _modele;
      };
  
      this.setModele = function(nouveauModele) {
        _modele = nouveauModele;
      };
    }
  }
  
  const voiture = new Voiture("Toyota", "Corolla");
  console.log(voiture.getModele()); // Accéder à l'attribut privé via un getter
  voiture.setModele("Camry"); // Modifier l'attribut privé via un setter
  console.log(voiture.getModele());
  
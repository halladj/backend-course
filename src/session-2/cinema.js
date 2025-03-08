function calculerTarifCinema(age, jourSemaine) {
    let tarif = 10; // Tarif standard

    // Votre code ici
    // Utilisez des conditionnels (if, else if, else) pour appliquer les réductions appropriées
    if (age < 12 || age >= 65){
        const disscount = tarif * 0.5
        tarif = tarif - disscount;
    }

    if (jourSemaine === "Mercredi"){
        const disscount = tarif * 0.2
        tarif = tarif - disscount;
    }

    return tarif;
}

// Testez votre fonction avec différents scénarios
console.log(calculerTarifCinema(25, "Lundi"));    // Devrait afficher 10
console.log(calculerTarifCinema(10, "Mercredi")); // Devrait afficher 4 (5€ après réduction enfant, puis 4€ après réduction mercredi)
console.log(calculerTarifCinema(70, "Jeudi"));    // Devrait afficher 5
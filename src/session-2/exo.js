let livres = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", disponible: true },
    { titre: "1984", auteur: "George Orwell", disponible: false },
    { titre: "Dune", auteur: "Frank Herbert", disponible: true }
];

// Fonctions à implémenter :
// 1. ajouterLivre
const ajouterLivre = (title, author) => {
    const temp= {"titre":title, "auteur": author, "disponible": false}
    livres.push( temp )
}
// 2. emprunterLivre
const emprunterLivre = (title) => {
    for (let i = 0; i < livres.length; i++){
        if (livres[i].titre === title){
            if (livres[i].disponible=== true){
                livres[i].disponible = false;
                return
            }else{
                console.log("Not Available")
                return
            }
        }
    }
    console.log("Book Not available in the library")
}
// 3. retournerLivre
function retournerLivre(title){
    const temp =  livres.find((livre) => livre.titre === title)
    return temp
}
// 4. afficherLivresDisponibles
function afficherLivresDisponibles(){
}
// 5. rechercherLivre

// Fonction pour tester notre système
function testerBibliotheque() {
    // Nous appellerons nos fonctions ici pour tester
    ajouterLivre("cs-101", "hamza")

    emprunterLivre("Dune")


    console.log(livres)
}

// Appel de la fonction de test
testerBibliotheque();
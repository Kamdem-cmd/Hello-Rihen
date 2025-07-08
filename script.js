
document.addEventListener('DOMContentLoaded', () => {
    let textTag = document.querySelectorAll(".text");
    let bgInput = document.querySelector("#bgInput");
    let bgColor = document.body;

    // la fonction pour changer la couleur de fond
    function ChangeBg() {
        // La valeur de l'input de type couleur est une chaîne hexadécimale (ex: #RRGGBB)
        // Utilisez cette valeur directement pour la couleur de fond
        bgColor.style.backgroundColor = bgInput.value;
        console.log(`Couleur sélectionnée: ${bgInput.value}`);
    }

    bgInput.addEventListener("input", ChangeBg);
});
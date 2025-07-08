
document.addEventListener('DOMContentLoaded', () => {
    let textTag = document.querySelectorAll(".text");
    let bgInput = document.querySelector("#bgInput");
    let bgColor = document.body;
    // la fonction pour determiner le niveau de luminosité
    function getBrightness(hexColor) {
        // Convertit la couleur hexadécimale en valeurs RVB
        let r = parseInt(hexColor.substring(1, 3), 16);
        let g = parseInt(hexColor.substring(3, 5), 16);
        let b = parseInt(hexColor.substring(5, 7), 16);

        // Calcule la luminosité perçue (méthode couramment utilisée)
        return ((r * 299) + (g * 587) + (b * 114)) / 1000;
    }

    // la fonction pour changer la couleur de fond
    function ChangeBg() {
        let selectedColor = bgInput.value;
        // La valeur de l'input de type couleur est une chaîne hexadécimale (ex: #RRGGBB)
        bgColor.style.backgroundColor = selectedColor;
        console.log(`Couleur sélectionnée: ${selectedColor}`);

        let brightness = getBrightness(selectedColor);
        // Définir un seuil de luminosité (généralement autour de 128 pour un maximum de 255)
        // Si la luminosité est inférieure au seuil, la couleur est foncée, donc le texte doit être clair (blanc)
        // Sinon, la couleur est claire, donc le texte doit être foncé (noir)
        if (brightness < 128) {
            textTag.forEach(element => {
                element.style.color = "white";
            });
            console.log("Texte réglé sur blanc");
        } else {
            textTag.forEach(element => {
                element.style.color = "black";
            });
            console.log("Texte réglé sur noir");
        }
    }

    bgInput.addEventListener("input", ChangeBg);
});
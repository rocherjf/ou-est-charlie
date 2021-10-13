var svgContainer = document.getElementById('svg-container');


// DEV
//var url = "http://localhost:3000/static/projet/img/Troie.svg";

// PROD
var url = "img/Troie.svg";

fetch(url)
    .then(r => r.blob())
    .then(b => {
        svgContainer.data = URL.createObjectURL(b);
    });


svgContainer.onload = function() {

    // URL.revokeObjectURL() libère une URL d’objet existante précédemment créée 
    // via un appel à URL.createObjectURL() -> indique au navigateur qu’il ne doit plus garder 
    // de référence sur l’objet.
    URL.revokeObjectURL(svgContainer.data)

    svgContainer.contentDocument.getElementById("charlie").onclick = function () {
        trouver('Charlie');
    }

}


function trouver(nom){
    Swal.fire({
        title: `BRAVO`,
        html: `Vous avez trouvé ${nom} !`,
    });
}




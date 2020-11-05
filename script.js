const tableList = document.getElementById('table');
const codePostal = document.getElementById('codePostal');
const libDep = document.getElementById('libDep');
let buffer = [];
var id;

codePostal.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const resultat = buffer.filter((ville) => {
        return (
            ville.nom.toLowerCase().includes(searchString)
        );
    });
    afficherVille(resultat);
});


libDep.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const resultat = buffer.filter((ville) => {
        return (
            ville.nom.toLowerCase().includes(searchString)
        );
    });
    afficherVille(resultat);
});

const chargerVilles = async () => {
    try {
        const res = await fetch("./data.json");
        buffer = await res.json();
        afficherVille(buffer);
    } catch (err) {
        console.error(err);
    }
};

const afficherVille = (ville) => {
    const htmlString = villes.map((ville) => {
            return `
			<tr>
				<td><img src='${ville.Libcom}'></td>
				<td>${ville.Code_Iris}</td>
				<td>${ville.SCORE_GLOBAL_region}</td>
				<td>${ville.Nom_Iris}</td>
				<td>${ville.P16_Pop}</td>
				<td>${ville.SCORE_GLOBAL_region}</td>
				<td>${ville.ACCÈS_AUX_INTERFACES_NUMERIQUES_region}</td>
				<td>${ville.ACCES_A_LINFORMATION_region}</td>
				<td>${ville.COMPETENCES_ADMINISTATIVES_region}</td>
				<td>${ville.COMPETENCES_NUMERIQUESSCOLAIRES_region}</td>
				<td>${ville.GLOBAL_ACCES_region}</td>
				<td>${ville.GLOBAL_COMPETENCES_region}</td>
			</tr>
        `;
        })
        .join('');
    tableList.innerHTML = htmlString;
};

chargerVilles();
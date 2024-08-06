


document.addEventListener('DOMContentLoaded', function() {
    fetch('../Data/ValidedData.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('data-container').innerText = data;

            // Création de la liste des objets élève
            const eleves = createEleveList(data);

            // Calcul de la note de français pour chaque élève et assignation immédiate
            eleves.forEach(eleve => {
                eleve.noteFrançais = calculateNoteFrançais(eleve.idEleve, data);
            });

            // Calcul de la note de logique pour chaque élève et assignation immédiate
            eleves.forEach(eleve => {
                eleve.noteLogique = calculateNoteLogique(eleve.idEleve, data);
            });

            // Calcul de la note de Culture Generale pour chaque élève et assignation immédiate
            eleves.forEach(eleve => {
                eleve.noteCultureGenerale = calculateNoteCultureGenerale(eleve.idEleve, data);
            });

            // Calcul de la note Total pour chaque élève et assignation immédiate
            eleves.forEach(eleve => {
                eleve.noteTotale = eleve.noteFrançais + eleve.noteLogique + eleve.noteCultureGenerale;
            });

            const elevesTries = trierElevesParNoteTotale(eleves);
            
            // Afficher les informations des élèves triés dans la console
            console.log('Liste des élèves triés par note totale:', elevesTries);

            createTable(elevesTries);
        })
        .catch(error => console.error('Erreur lors de la lecture du fichier:', error));
});

/**
 * Fonction pour créer une liste d'objets élève à partir du contenu du fichier texte.
 * @param {string} fileContent - Le contenu du fichier texte.
 * @returns {Array} La liste des objets élève.
 */
function createEleveList(fileContent) {
    const lines = fileContent.split('\n');
    const eleveList = [];
    const idSet = new Set();  // Utilisé pour garantir l'unicité des idEleve

    lines.forEach((line) => {
        if (line.length >= 3) {  // Vérifie que la ligne a au moins 3 caractères
            const idEleve = line.substring(0, 3);
            if (!idSet.has(idEleve)) {
                idSet.add(idEleve);
                const eleve = {
                    idEleve: idEleve,
                    noteFrançais: 0,
                    noteLogique: 0,
                    noteCultureGenerale: 0,
                    noteTotale: 0
                };
                eleveList.push(eleve);
            }
        }
    });

    return eleveList;
}

/**
 * Fonction pour calculer la note de français d'un élève.
 * @param {string} idEleve - L'identifiant de l'élève.
 * @param {string} data - Le contenu du fichier texte.
 * @returns {number} La note totale de l'élève pour le français.
 */
function calculateNoteFrançais(idEleve, data) {
    let noteTotal = 0;
    const reponseVraie = "1A2A3A4A5A6A7A8A9A";
    const reponseVraie10 = "A"
   /*  console.log("reponseVraie: "+ reponseVraie) */
    
    // Séparer les lignes du fichier texte
    const lines = data.split('\n');
    
    lines.forEach(line => {
        if (line.startsWith(idEleve)) {
            const codeCours = line.substring(3, 6);
            if (codeCours === "FRS") {
                let reponseEleve = line.substring(6);
                /* console.log("reponseEleve: " + reponseEleve) */
                let reponseEleve10 = getCharacterAfterSubstring(reponseEleve, "10")
               /*  console.log("reponseEleve10: " + reponseEleve10) */
                
                for (let i = 0; i < reponseVraie.length; i += 2) {
                    const questionNum = reponseVraie[i];
                   /*  console.log("questionNum: "+ questionNum) */
                    const correctAnswer = reponseVraie[i + 1];
                    /* console.log("correctAnswer: " + correctAnswer) */

                    if (reponseEleve.includes(questionNum)) {
                        // Cherche la réponse de l'élève pour la question actuelle
                        const answerIndex = reponseEleve.indexOf(questionNum);
                        /* console.log("answerIndex: " + answerIndex) */
                        if (answerIndex !== -1 && answerIndex + 1 < reponseEleve.length) {
                            const studentAnswer = reponseEleve[answerIndex + 1];
                            if (studentAnswer === correctAnswer) {
                                noteTotal += 2;
                                /* console.log("noteTotal: " + noteTotal); */
                            } else {
                                noteTotal -= 1;
                                /* console.log("noteTotal: " + noteTotal); */
                            }
                        }
                    } else {
                        continue
                    }
                }
                if ( (reponseEleve10 !== "X") && (reponseVraie10 === reponseEleve10) ) {
                    noteTotal += 2;
                }else if ( (reponseEleve10 !== "X") && (reponseEleve10 !== reponseVraie10)) {
                    noteTotal -= 1;
                }
            }
        }
    });
    
    return noteTotal;
}


function calculateNoteLogique(idEleve, data) {
    let noteTotal = 0;
    const reponseVraie = "1B2B3B4B5B6B7B8B9B";
    const reponseVraie10 = "B"
   /*  console.log("reponseVraie: "+ reponseVraie) */
    
    // Séparer les lignes du fichier texte
    const lines = data.split('\n');
    
    lines.forEach(line => {
        if (line.startsWith(idEleve)) {
            const codeCours = line.substring(3, 6);
            if (codeCours === "LOG") {
                let reponseEleve = line.substring(6);
                /* console.log("reponseEleve: " + reponseEleve) */
                let reponseEleve10 = getCharacterAfterSubstring(reponseEleve, "10")
               /*  console.log("reponseEleve10: " + reponseEleve10) */
                
                for (let i = 0; i < reponseVraie.length; i += 2) {
                    const questionNum = reponseVraie[i];
                   /*  console.log("questionNum: "+ questionNum) */
                    const correctAnswer = reponseVraie[i + 1];
                    /* console.log("correctAnswer: " + correctAnswer) */

                    if (reponseEleve.includes(questionNum)) {
                        // Cherche la réponse de l'élève pour la question actuelle
                        const answerIndex = reponseEleve.indexOf(questionNum);
                        /* console.log("answerIndex: " + answerIndex) */
                        if (answerIndex !== -1 && answerIndex + 1 < reponseEleve.length) {
                            const studentAnswer = reponseEleve[answerIndex + 1];
                            if (studentAnswer === correctAnswer) {
                                noteTotal += 2;
                                /* console.log("noteTotal: " + noteTotal); */
                            } else {
                                noteTotal -= 1;
                                /* console.log("noteTotal: " + noteTotal); */
                            }
                        }
                    } else {
                        continue
                    }
                }
                if ( (reponseEleve10 !== "X") && (reponseEleve10 === reponseVraie10) ) {
                    noteTotal += 2;
                }else if ( (reponseEleve10 !== "X") && (reponseEleve10 !== reponseVraie10)) {
                    noteTotal -= 1;
                }
            }
        }
    });
    
    return noteTotal;
}

function calculateNoteCultureGenerale(idEleve, data) {
    let noteTotal = 0;
    const reponseVraie = "1C2C3C4C5C6C7C8C9C";
    const reponseVraie10 = "C"
   /*  console.log("reponseVraie: "+ reponseVraie) */
    
    // Séparer les lignes du fichier texte
    const lines = data.split('\n');
    
    lines.forEach(line => {
        if (line.startsWith(idEleve)) {
            const codeCours = line.substring(3, 6);
            if (codeCours === "CUL") {
                let reponseEleve = line.substring(6);
                /* console.log("reponseEleve: " + reponseEleve) */
                let reponseEleve10 = getCharacterAfterSubstring(reponseEleve, "10")
               /*  console.log("reponseEleve10: " + reponseEleve10) */
                
                for (let i = 0; i < reponseVraie.length; i += 2) {
                    const questionNum = reponseVraie[i];
                   /*  console.log("questionNum: "+ questionNum) */
                    const correctAnswer = reponseVraie[i + 1];
                    /* console.log("correctAnswer: " + correctAnswer) */

                    if (reponseEleve.includes(questionNum)) {
                        // Cherche la réponse de l'élève pour la question actuelle
                        const answerIndex = reponseEleve.indexOf(questionNum);
                        /* console.log("answerIndex: " + answerIndex) */
                        if (answerIndex !== -1 && answerIndex + 1 < reponseEleve.length) {
                            const studentAnswer = reponseEleve[answerIndex + 1];
                            if (studentAnswer === correctAnswer) {
                                noteTotal += 2;
                                /* console.log("noteTotal: " + noteTotal); */
                            } else {
                                noteTotal -= 1;
                                /* console.log("noteTotal: " + noteTotal); */
                            }
                        }
                    } else {
                        continue
                    }
                }
                if ( (reponseEleve10 !== "X") && (reponseVraie10 === reponseEleve10) ) {
                    noteTotal += 2;
                }else if ( (reponseEleve10 !== "X") && (reponseEleve10 !== reponseVraie10)) {
                    noteTotal -= 1;
                }
            }
        }
    });
    
    return noteTotal;
}

function getCharacterAfterSubstring(inputString, substring) {
    // Trouver l'index de la sous-chaîne dans la chaîne d'entrée
    const index = inputString.indexOf(substring);
    
    // Si la sous-chaîne est trouvée et qu'il y a un caractère après
    if (index !== -1 && index + substring.length < inputString.length) {
        // Retourner le caractère juste après la sous-chaîne
        return inputString.charAt(index + substring.length);
    } else {
        // Si la sous-chaîne n'est pas trouvée ou si elle est à la fin, retourner null
        return "X";
    }
}

function trierElevesParNoteTotale(eleves) {
    return eleves.sort((a, b) => b.noteTotale - a.noteTotale);
}

// function calculateNoteMatiere(idEleve, data, reponseVraie, reponseVraie10, matiere) {
//     let noteTotal = 0;
    
//     const lines = data.split('\n');
    
//     lines.forEach(line => {
//         if (line.startsWith(idEleve)) {
//             const codeCours = line.substring(3, 6);
//             if (codeCours === matiere) {
//                 let reponseEleve = line.substring(6);
//                 let reponseEleve10 = getCharacterAfterSubstring(reponseEleve, "10")
                
//                 for (let i = 0; i < reponseVraie.length; i += 2) {
//                     const questionNum = reponseVraie[i];
//                     const correctAnswer = reponseVraie[i + 1];

//                     if (reponseEleve.includes(questionNum)) {
//                         const answerIndex = reponseEleve.indexOf(questionNum);

//                         if (answerIndex !== -1 && answerIndex + 1 < reponseEleve.length) {
//                             const studentAnswer = reponseEleve[answerIndex + 1];

//                             if (studentAnswer === correctAnswer) {
//                                 noteTotal += 2;
//                             } else {
//                                 noteTotal -= 1;

//                             }
//                         }
//                     } else {
//                         continue
//                     }
//                 }
//                 if ( (reponseEleve10 !== "X") && (reponseVraie10 === reponseEleve10) ) {
//                     noteTotal += 2;
//                 }else if ( (reponseEleve10 !== "X") && (reponseEleve10 !== reponseVraie10)) {
//                     noteTotal -= 1;
//                 }
//             }
//         }
//     });
    
//     return noteTotal;
// }

function createTable(eleves) {
    const container = document.getElementById('data-container'); 
    const table = document.createElement('table');
    table.setAttribute('border', '1'); 
    
    const headerRow = document.createElement('tr');
    const headers = ['ID Elève', 'Note Français', 'Note Logique', 'Note Culture Generale', 'Note Totale'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.innerText = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    
    eleves.forEach(eleve => {
        const row = document.createElement('tr');
        
        const tdId = document.createElement('td');
        tdId.innerText = eleve.idEleve;
        row.appendChild(tdId);
        
        const tdNoteFr = document.createElement('td');
        tdNoteFr.innerText = eleve.noteFrançais;
        row.appendChild(tdNoteFr);
        
        const tdNoteLog = document.createElement('td');
        tdNoteLog.innerText = eleve.noteLogique;
        row.appendChild(tdNoteLog);
        
        const tdNoteCult = document.createElement('td');
        tdNoteCult.innerText = eleve.noteCultureGenerale;
        row.appendChild(tdNoteCult);
        
        const tdNoteTot = document.createElement('td');
        tdNoteTot.innerText = eleve.noteTotale;
        row.appendChild(tdNoteTot);
        
        table.appendChild(row);
    });
    
    container.innerHTML = ''; 
    container.appendChild(table);
}

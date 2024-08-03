document.addEventListener('DOMContentLoaded', function() {
    fetch('../Data/allData.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('data-container').innerText = data;

        
            const eleves = createEleveList(data);
            console.log('Liste des élèves:', eleves); 
        })
        .catch(error => console.error('Erreur lors de la lecture du fichier:', error));
});

function createEleveList(fileContent) {
    const lines = fileContent.split('\n');
    const eleveList = [];
    const idSet = new Set();  

    lines.forEach((line, index) => {
        if (line.length >= 3) {  
            const idEleve = line.substring(0, 3);
            if (!idSet.has(idEleve)) {
                idSet.add(idEleve);
                const eleve = {
                    idEleve: idEleve,
                    noteFrançais: 0,
                    noteLogique: 0,
                    noteCultureGenerale: 0
                };
                eleveList.push(eleve);
            }
        }
    });

    return eleveList;
}
/*
function setNoteFrançais(fileContent, idEleve1){
    let total ;
    const lines = fileContent.split('\n');
        lines.forEach((line,index) => {
          total = total + line.substring(0,3);
    })
    return ;
}

function setNoteFrançais(fileContent, idEleve2){
    let total ;
    const lines = fileContent.split('\n');
        lines.forEach((line,index) => {
          total = total + line.substring(4,7);
    })
    return ;
}

function setNoteFrançais(fileContent, idEleve3){
    let total ;
    const lines = fileContent.split('\n');
        lines.forEach((line,index) => {
          total = total + line.substring(0,3);
    })
    return ;
}*/

/*function setNoteFrançais(fileContent, idEleve1){
    const trueAnswer = "1A2B3C4A5D6A7B9A10D";
    const lines = fileContent.split('\n');
    let noteTotal = 0;
    lines.forEach((line,index) => {
        if ((idEleve1 = line.substring(0,3)) && (line.substring(4,7) = 'FRS')) {
            for (let i=0; i<trueAnswer.length; i+=2) {
                while (line.substring(j,j+1)!= ' ') {
                    if (trueAnswer.charAt(i) = line.substring(j,j+1)) {
                        if (trueAnswer.charAt(i+1) != '0'){
                            if (trueAnswer.charAt(i+1) = line.substring(j+1)) {
                                noteTotal += 2;
                            } else {
                                noteTotal -= 1;
                            }
                        } else {
                            if (trueAnswer.charAt(i+2) = line.substring(j+2)) {
                                noteTotal += 2;
                            } else {
                                 noteTotal -= 1;
                            }
                        }
                    } else {
                        noteTotal = noteTotal;
                    }
                    j = j + 1;
                }
            }
        }
    });

    return noteTotal;
}

function setNoteLogique(fileContent, idEleve2){
    const trueAnswer = "1B2D3A4A5D6A7B9A10C";
    const lines = fileContent.split('\n');
    let noteTotal = 0;
    lines.forEach((line,index) => {
        if ((idEleve2 = line.substring(0,3)) && (line.substring(4,7) = 'FRS')) {
            for (let i=0; i<trueAnswer.length; i+=2) {
                while (line.substring(j,j+1)!= ' ') {
                    if (trueAnswer.charAt(i) = line.substring(j,j+1)) {
                        if (trueAnswer.charAt(i+1) != '0'){
                            if (trueAnswer.charAt(i+1) = line.substring(j+1)) {
                                noteTotal += 2;
                            } else {
                                noteTotal -= 1;
                            }
                        } else {
                            if (trueAnswer.charAt(i+2) = line.substring(j+2)) {
                                noteTotal += 2;
                            } else {
                                 noteTotal -= 1;
                            }
                        }
                    } else {
                        noteTotal = noteTotal;
                    }
                    j = j + 1;
                }
            }
        }
    });
    return noteTotal;
}


function setNoteCultureGenerale(fileContent, idEleve3){
    const trueAnswer = "1A2C3A4B5A6A7A9A10A";
    const lines = fileContent.split('\n');
    let noteTotal = 0;
    lines.forEach((line,index) => {
        if ((idEleve3 = line.substring(0,3)) && (line.substring(4,7) = 'FRS')) {
            for (let i=0; i<trueAnswer.length; i+=2) {
                while (line.substring(j,j+1)!= ' ') {
                    if (trueAnswer.charAt(i) = line.substring(j,j+1)) {
                        if (trueAnswer.charAt(i+1) != '0'){
                            if (trueAnswer.charAt(i+1) = line.substring(j+1)) {
                                noteTotal += 2;
                            } else {
                                noteTotal -= 1;
                            }
                        } else {
                            if (trueAnswer.charAt(i+2) = line.substring(j+2)) {
                                noteTotal += 2;
                            } else {
                                 noteTotal -= 1;
                            }
                        }
                    } else {
                        noteTotal = noteTotal;
                    }
                    j = j + 1;
                }
            }
        }
    });
    return noteTotal;
}*/

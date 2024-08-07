document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('fileInput').addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = function(event) {
              const data = event.target.result;

              const eleves = createEleveList(data);

              eleves.forEach(eleve => {
                eleve.noteFrançais = calculateNoteMatiere(eleve.idEleve, data, "1A2A3A4A5A6A7A8A9A", "A", "FRS");
                eleve.noteLogique = calculateNoteMatiere(eleve.idEleve, data, "1B2B3B4B5B6B7B8B9B", "B", "LOG");
                eleve.noteCultureGenerale = calculateNoteMatiere(eleve.idEleve, data, "1C2C3C4C5C6C7C8C9C", "C", "CUL");
                eleve.noteTotale = eleve.noteFrançais + eleve.noteLogique + eleve.noteCultureGenerale;
              });

              const elevesTries = trierElevesParNoteTotale(eleves);
              createTable(elevesTries);
          };
          reader.onerror = function(event) {
              console.error('Erreur lors de la lecture du fichier:', event);
          };
          reader.readAsText(file);
      }
  });
});

function createEleveList(fileContent) {
  const lines = fileContent.split('\n');
  const eleveList = [];
  const idSet = new Set();  

  lines.forEach((line) => {
      if (line.length >= 3) {  
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

function getCharacterAfterSubstring(inputString, substring) {
  const index = inputString.indexOf(substring);
  
  if (index !== -1 && index + substring.length < inputString.length) {
      return inputString.charAt(index + substring.length);
  } else {
      return "X";
  }
}

function trierElevesParNoteTotale(eleves) {
  return eleves.sort((a, b) => b.noteTotale - a.noteTotale);
}

function calculateNoteMatiere(idEleve, data, reponseVraie, reponseVraie10, matiere) {
  let noteTotal = 0;
  const lines = data.split('\n');

  lines.forEach(line => {
      if (line.startsWith(idEleve)) {
          const codeCours = line.substring(3, 6);
          if (codeCours === matiere) {
              let reponseEleve = line.substring(6);
              let reponseEleve10 = getCharacterAfterSubstring(reponseEleve, "10")
              let reponseEleveSans10 = reponseEleve.slice(0, -3);   
              for (let i = 0; i < reponseVraie.length; i += 2) {
                  const questionNum = reponseVraie[i];
                  const correctAnswer = reponseVraie[i + 1];

                  if (reponseEleve.includes(questionNum)) {
                      const answerIndex = reponseEleveSans10.indexOf(questionNum);
                      if (answerIndex + 1 < reponseEleveSans10.length) {
                          const studentAnswer = reponseEleveSans10[answerIndex + 1];

                          if (studentAnswer === correctAnswer) {
                              noteTotal += 2;
                          } else {
                              noteTotal -= 1;
                          }
                      }
                  } else {
                      noteTotal = noteTotal;
                  }
              }
              if ((reponseEleve10 !== "X") && (reponseVraie10 === reponseEleve10)) {
                  noteTotal += 2;
              } else if ((reponseEleve10 !== "X") && (reponseEleve10 !== reponseVraie10)) {
                  noteTotal -= 1;
              }
          }
      }
  });

  return noteTotal;
}

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

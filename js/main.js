// Consegna
// Viene fornita una piccola tabella che rappresenta i membri di un team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// Completate i milestone nell'ordine assegnato, non andate avanti finché non avete concluso con successo
//..... la milestone precedente.
// Chiudete almeno una commit per milestone.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede


const teamMembers = [
    {
        nome: ` Wayne Barnett`,
        ruolo: `Founder & CEO`,
        foto: `./img/wayne-barnett-founder-ceo.jpg`,
    },
    {
        nome: ` Angela Caroll`,
        ruolo: `Chief Editor`,
        foto: `./img/angela-caroll-chief-editor.jpg`
    },
    {
        nome: ` Walter Gordon`,
        ruolo: `Office Manager`,
        foto: `./img/walter-gordon-office-manager.jpg`
    },
    {
        nome: ` Angela Lopez`,
        ruolo: `Social Media Manager`,
        foto: `./img/angela-lopez-social-media-manager.jpg`
    },
    {
        nome: ` Scott Estrada`,
        ruolo: `Developer`,
        foto: `./img/scott-estrada-developer.jpg`
    },
    {
        nome: ` Barbara Ramos`,
        ruolo: `Graphic Designer`,
        foto: `./img/barbara-ramos-graphic-designer.jpg`
    },
    {
        nome: ` Wayne Barnett`,
        ruolo: `Founder & CEO`,
        foto: `./img/wayne-barnett-founder-ceo.jpg`,
    },
];
console.log(teamMembers)

// let boxMembers = document.getElementById(`container_team`);

const wrapperCards = document.getElementById(`wrapper_cards`)  //prendo il contenitore delle cards


//Stampo in console il nome il ruolo e la foto di tutti i membri del team
for (let i = 0; i < teamMembers.length; i++) {
     const newElement = document.createElement(`div`);
     newElement.innerHTML = `<div class="card mb-3 mx-2" style="width: 26rem;">
                    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${teamMembers[i].foto}" class="img-fluid rounded-start" alt="${teamMembers[i].foto}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">${teamMembers[i].nome}</h6>
                            <h6 class="card-text">${teamMembers[i].ruolo}</h6>
                        </div>
                    </div>
                </div>
            </div>`;
    wrapperCards.append(newElement);
    // boxMembers.innerHTML += `
    // ${teamMembers[i].nome} - ${teamMembers[i].ruolo}`;
    //console.log(teamMembers[i].foto)
    // const imageMember = document.createElement(`img`);    //BONUS 1
    // imageMember.setAttribute(`src`, teamMembers[i].foto);
    // imageMember.classList.add(`ms_image`);
    // wrapperCards.append(imageMember);
    //console.log(`${teamMembers[i].nome} - ${teamMembers[i].ruolo} - ${teamMembers[i].foto} `);
};

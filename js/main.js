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
];
console.log(teamMembers)

let boxMembers = document.getElementById(`container_team`);

//Stampo in console il nome il ruolo e la foto di tutti i membri del team
for (let i = 0; i < teamMembers.length; i++) {
    boxMembers.innerHTML += `
    ${teamMembers[i].nome} - ${teamMembers[i].ruolo}`;
    //console.log(teamMembers[i].foto)
    const imageMember = document.createElement(`img`);    //BONUS 1
    imageMember.setAttribute(`src`, teamMembers[i].foto);
    imageMember.classList.add(`ms_image`)
    boxMembers.append(imageMember);

    //console.log(`${teamMembers[i].nome} - ${teamMembers[i].ruolo} - ${teamMembers[i].foto} `);
};



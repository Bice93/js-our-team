// Consegna
// Viene fornita una piccola tabella che rappresenta i membri di un team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// Completate i milestone nell'ordine assegnato, non andate avanti finché non avete concluso con successo
//..... la milestone precedente.
// Chiudete almeno una commit per milestone.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	    Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg



const teamMembers = [
    {
        nome : ` Wayne Barnett`,
        ruolo : `Founder & CEO`,
        foto : `wayne-barnett-founder-ceo.jpg`
    },
    {
        nome : ` Angela Caroll`,
        ruolo : `Chief Editor`,
        foto : `angela-caroll-chief-editor.jpg`
    },
    {
        nome : ` Walter Gordon`,
        ruolo : `Office Manager`,
        foto : `walter-gordon-office-manager.jpg`
    },
    {
        nome : ` Angela Lopez`,
        ruolo : `Social Media Manager`,
        foto : `angela-lopez-social-media-manager.jpg`
    },
    {
        nome : ` Scott Estrada`,
        ruolo : `Developer`,
        foto : `scott-estrada-developer.jpg`
    },
    {
        nome : ` Barbara Ramos`,
        ruolo : `Graphic Designer`,
        foto : `barbara-ramos-graphic-designer.jpg`
    },
];
console.log(teamMembers)

//Stampo in console il nome il ruolo e la foto di tutti i membri del team
for (let i = 0; i < teamMembers.length; i++){
    console.log(`${teamMembers[i].nome} - ${teamMembers[i].ruolo} - ${teamMembers[i].foto} `);
};


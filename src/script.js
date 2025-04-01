// Skapa objektet contactBook
const contactBook = {
  owner: "Anna López",
  contacts: [
    {
      name: "Ahmed Ali",
      phone: "070-1234567",
      group: "arbete",
    },
    {
      name: "Chen Li",
      phone: "070-7654321",
      group: "vänner",
    },
    {
      name: "Isak Gran",
      phone: "070-1112223",
      group: "arbete",
    },
    {
      name: "Juan López",
      phone: "070-5556667",
      group: "familj",
    },
  ],
};
  
  // Ange en grupp
  let groupToShow = "arbete"
  
  


function showContacts(contactBook, groupToShow) { // Rör ej denna kod

    for(c of contactBook.contacts){

      if(c.group === groupToShow){
        
        return `Namn: ${c.name}, Telefon: ${c.phone}`;  // här ska sträng med namn och tekefonnummer visas i form av string interpolation
      }
    }

    // Loopar igenom alla kontakter och jämför grupp
   
  


}


// Rör ej denna kod
showContacts(contactBook, groupToShow);
module.exports = { showContacts };

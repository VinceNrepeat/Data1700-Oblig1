const billettListe = [];
function kjøpBillett(film, antall, fornavn, etternavn, telefonnr, epost) {
  const nybestilling = {
    film : film,
    antall : antall,
    fornavn : fornavn,
    etternavn : etternavn,
    telefonnr : telefonnr,
    epost : epost
  }
  billettListe.push(nybestilling)
  showList()
}

function showList() {
  let ut = "<table><tr>" +
    "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
    "</tr>";

  for (let i in billettListe){
    ut+="<tr>";
    ut+="<td>"+billettListe[i].film+"</td><td>"+billettListe[i].antall+"</td><td>"+billettListe[i].fornavn+"</td>";
    ut+="<td>"+billettListe[i].etternavn+"</td><td>"+billettListe[i].telefonnr+"</td><td>"+billettListe[i].epost+"</td>";
    ut+="</tr>";
  }

  document.getElementById("billettListe").innerHTML=ut;

}

function sjekkFeil(){
  var film = document.getElementById("velgFilm").value;
  var antall = document.getElementById("antall").value;
  var fornavn = document.getElementById("fornavn").value;
  var etternavn = document.getElementById("etternavn").value;
  var telefonnr = document.getElementById("telefonnr").value;
  var epost = document.getElementById("epost").value;

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!isNaN(antall)) {
    if(emailRegex.test(epost)){
      kjøpBillett(film,antall,fornavn,etternavn,telefonnr,epost);
      document.getElementById("infoBillett").reset();
      document.getElementById("epostFeil").innerHTML = "";
    }
    else{
      document.getElementById("epostFeil").innerHTML = "<td> Skriv inn gyldig Epost <td>";
    }
    document.getElementById("antallFeil").innerHTML = "";
  } else {
    document.getElementById("antallFeil").innerHTML = "Skriv inn gyldig tall";
    if (!emailRegex.test(epost)){
      document.getElementById("epostFeil").innerHTML = "<td> Skriv inn gyldig Epost <td>";
    }
  }

  return false;
}

function deleteBillett(){
  for(let i in billettListe){
    billettListe.splice(i);
  }
  showList()
}

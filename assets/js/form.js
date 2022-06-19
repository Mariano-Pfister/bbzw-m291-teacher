var submitForm = document.getElementById("submit");
var email = document.getElementById("email");
var vorname = document.getElementById("vorname");
var nachname = document.getElementById("nachname");
var ort = document.getElementById("ort");
var plz = document.getElementById("plz");
var tel = document.getElementById("tel");

submit.disabled = true

const validate = () => {
    if (email.value == "") {
        submit.disabled = true
    } else {
        submit.disabled = false
    }
}

email.addEventListener("keyup", (event) => {
    validate()
})

submitForm.addEventListener("click", async (event) => {
    console.log('1')
    event.preventDefault()
  const result = await databaseClient.insertInto("users", ["email", "vorname", "nachname", "ort", "plz", "tel"], [email.value, vorname.value, nachname.value, ort.value, plz.value, tel.value])
  if (result.error) {
    alert("Datenbank Fehler: " + JSON.stringify(result.error, null, 2))
  }
  else {
    // Weiterleitung auf die Game Page
    location.href = "./game.html"
  }

})

// Funktion um die Fehlermeldung darzustellen
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Funktion zur Validierung des Formulares
function validateForm() {

  // Den Variabeln Werte aus dem Formular zuweisen 
  var vorname = document.contactForm.vorname.value;
  var nachname = document.contactForm.nachname.value;
  var ort = document.contactForm.ort.value;
  var plz = document.contactForm.plz.value;
  var email = document.contactForm.email.value;
  var tel = document.contactForm.tel.value;
  var agb = document.contactForm.agb.value;

  // Definiere Variabeln für Fehlermeldungen
  var vornameErr = nachnameErr = ortErr = plzErr = emailErr = telErr = agbErr = true;

  // Validiere Vorname
  if (vorname == "") {
    printError("vornameErr", "Bitte gib deinen Vornamen ein");
  } else {
    var regex = /^[a-zA-Z äÄöÖüÜ]{1,}$/;
    if (regex.test(vorname) === false) {
      printError("vornameErr", "Bitte keine Zahlen und Sonderzeichen");
    } else {
      printError("vornameErr", "");
      vornameErr = false;
    }
  }

  // Validiere Nachname
  if (nachname == "") {
    printError("nachnameErr", "Bitte gib deinen Nachnamen ein");
  } else {
    var regex = /^[a-zA-Z äÄöÖüÜ]{1,}$/;
    if (regex.test(nachname) === false) {
      printError("nachnameErr", "Bitte keine Zahlen und Sonderzeichen");
    } else {
      printError("nachnameErr", "");
      nachnameErr = false;
    }
  }

  // Validiere Adresse
  if (ort == "") {
    printError("ortErr", "Bitte Wohnort eingeben");
  } else {
    var regex = /^[a-zA-Z äÄöÖüÜ 0-9 ]{2,}$/;
    if (ort.length > 50) {
      printError("ortErr", "Bitte gültigen Wohnort angeben");
    } else {
      printError("ortErr", "");
      ortErr = false;
    }
  }

  // Validiere PLZ
  if (plz == "") {
    printError("plzErr", "Bitte Postleitzahl eingeben");
  } else {
    var regex = /^[0-9]{4,}$/;
    if (plz.length !== 4) {
      printError("plzErr", "Bitte gültige Postleitzahl angeben");
    } else {
      printError("plzErr", "");
      plzErr = false;
    }
  }

  // Validiere email Adresse
  if (email == "") {
    printError("emailErr", "Bitte E-Mail Adresse eingeben");
  } else {
    var regex = /^[0-9._%+-]+@[a-z0-9.-äÄöÖüÜ]+\.[a-z]{2,4}$/;
    if (email.length > 50) {
      printError("emailErr", "Bitte gültige E-Mail Adresse angeben");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  // Validiere mobile Nummer
  if (tel == "") {
    printError("telErr", "Bitte Mobile Nummer eingeben");
  } else {
    var regex = /^[0-9 +]{5,}$/;
    if (tel.length > 15) {
      printError("telErr", "Bitte Nummer im Format 0791234567 angeben");
    } else {
      printError("telErr", "");
      telErr = false;
    }
  }

    // Validiere AGB's
    function check() {
      document.getElementById("agb").required = true;
    }

  // Formular wird nicht gesendet, wenn etwas nicht richtig ausgefüllt ist
  if ((vornameErr || nachnameErr || ortErr || plzErr || emailErr || telErr || agbErr ) == true) {
    return false;
  } else {
    // Daten zusammenfassen
    var dataPreview = "Folgende Daten wurden eingegeben: \n" +
      "Vorname: " + vorname + "\n" +
      "Nachname: " + nachname + "\n" +
      "Ort: " + ort + "\n" +
      "PLZ: " + plz + "\n" +
      "E-Mail Adresse: " + email + "\n"
      "Mobile Nummer: " + tel + "\n"
      "AGB's und Datenschutzerklärung aktzeptiert " + agb + "\n";
    // Daten ausgeben in Fenster
    alert(dataPreview);
  }

};

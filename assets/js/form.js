var submitForm = document.getElementById("submit");
var email = document.getElementById("email");
var vorname = document.getElementById("vorname");
var nachname = document.getElementById("nachname");
var ort = document.getElementById("ort");
var plz = document.getElementById("plz");
var tel = document.getElementById("tel");

submitForm.disabled = true;
const validate = () => {
    if (email.value == "") {
        submitForm.disabled = true
    } else {
        submitForm.disabled = false
    }
    // Validiere Vorname
    if (vorname == "") {
        submitForm.disabled = true
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
        submitForm.disabled = true
    } else {
        var regex = /^[a-zA-Z äÄöÖüÜ]{1,}$/;
        if (regex.test(nachname) === false) {
            submitForm.disabled = true
        } else {
            submitForm.disabled = false
        }
    }

    // Validiere Adresse
    if (ort == "") {
        submitForm.disabled = true
    } else {
        var regex = /^[a-zA-Z äÄöÖüÜ 0-9 ]{2,}$/;
        if (ort.length > 50) {
            submitForm.disabled = true
        } else {
            submitForm.disabled = false
        }
    }

    // Validiere PLZ
    if (plz == "") {
        submitForm.disabled = true
    } else {
        var regex = /^[0-9]{4,}$/;
        if (plz.length !== 4) {
            submitForm.disabled = true
        } else {
            submitForm.disabled = false
        }
    }

    // Validiere email Adresse
    if (email == "") {
        submitForm.disabled = true
    } else {
        var regex = /^[0-9._%+-]+@[a-z0-9.-äÄöÖüÜ]+\.[a-z]{2,4}$/;
        if (email.length > 50) {
            submitForm.disabled = true
        } else {
            submitForm.disabled = false
        }
    }

    // Validiere mobile Nummer
    if (tel == "") {
        submitForm.disabled = true
    } else {
        var regex = /^[0-9 +]{5,}$/;
        if (tel.length > 15) {
            submitForm.disabled = true
        } else {
            submitForm.disabled = false
        }
    }
}
email.addEventListener("keyup", (event) => {
    validate()
})

submitForm.addEventListener("click", async (event) => {
    console.log('1')
    event.preventDefault()
    const result = await databaseClient.insertInto("users", ["email", "vorname", "nachname", "ort", "plz", "telefonnummer"], [email.value, vorname.value, nachname.value, ort.value, plz.value, tel.value])
    if (result.error) {
        alert("Datenbank Fehler: " + JSON.stringify(result.error, null, 2))
    }
    else {
        // Weiterleitung auf die Game Page
        location.href = "./game.html"
    }

})

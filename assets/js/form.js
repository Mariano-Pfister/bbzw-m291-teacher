var submitForm = document.getElementById("submit");
var email = document.getElementById("email");
var vorname = document.getElementById("vorname");
var nachname = document.getElementById("nachname");
var ort = document.getElementById("ort");
var plz = document.getElementById("plz");
var tel = document.getElementById("tel");
/*
const validate = () => {
    if (email.value == "") {
        submitForm.disabled = true
    } else {
        submitForm.disabled = false
    }

    if (vorname.value == "") {
        submitForm.disabled = true
    } else {
        var regex = /^[a-zA-Z äÄöÖüÜ]{1,}$/;
        if (regex.test(vorname.value) === false) {
            printError("vornameErr", "Bitte keine Zahlen und Sonderzeichen");
        } else {
            printError("vornameErr", "");
        }
        console.log("2")

    }
    // Validiere Nachname
    if (nachname.value == "") {
        submitForm.disabled = true
    } else {
        var regex = /^[a-zA-Z äÄöÖüÜ]{1,}$/;
        if (regex.test(nachname.value) === false) {
            submitForm.disabled = true
        } else {
            submitForm.disabled = false

        }
        console.log("2")

    }

    // Validiere Adresse
    if (ort.value == "") {
        submitForm.disabled = true
    } else {
        var regex = /^[a-zA-Z äÄöÖüÜ 0-9 ]{2,}$/;
        if (ort.value.length > 50) {
            submitForm.disabled = true
        } else {
            submitForm.disabled = false
        }
        console.log("2")

    }

    // Validiere PLZ
    if (plz.value == "") {
        submitForm.disabled = true
    } else {
        var regex = /^[0-9]{4,}$/;
        if (plz.value.length !== 4) {
            submitForm.disabled = true
        } else {
            submitForm.disabled = false
        }
        console.log("2")

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
        console.log("2")

    }

    // Validiere mobile Nummer
    if (tel.value == "") {
        submitForm.disabled = true
    } else {
        var regex = /^[0-9 +]{5,}$/;
        if (tel.value.length > 15) {
            submitForm.disabled = true
        } else {
            submitForm.disabled = false
        }
        console.log("2")
    }*/
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

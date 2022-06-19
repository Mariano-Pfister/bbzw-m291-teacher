var submitForm = document.getElementById("submit");
var email = document.getElementById("email");
var vorname = document.contactForm.vorname.value;
var nachname = document.contactForm.nachname.value;
var ort = document.contactForm.ort.value;
var plz = document.contactForm.plz.value;
var tel = document.contactForm.tel.value;

/*submitForm.disabled = true;
const validate = () => {
    if (email.value == "") {
        submitForm.disabled = true
    } else {
        submitForm.disabled = false
    }
}
email.addEventListener("keyup", (event) => {
    validate()
})*/

submitForm.addEventListener("click", async (event) => {
    console.log('1')
    event.preventDefault()
    const result = await databaseClient.insertInto("users", ["email", "vorname", "nachname", "ort", "plz", "telefonnummer"], [email.value, vorname, nachname, ort, plz, tel])
    if (result.error) {
        alert("Datenbank Fehler: " + JSON.stringify(result.error, null, 2))
    }
    else {
        // Weiterleitung auf die Game Page
        location.href = "./game.html"
    }

})

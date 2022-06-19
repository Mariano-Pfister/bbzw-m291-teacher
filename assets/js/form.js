var submitForm = document.getElementById("submit");
var email = document.getElementById("email");
var vorname = document.getElementById("vorname");
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
  const result = await databaseClient.insertInto(["email", "vorname"], [email.value, vorname.value])
  if (result.error) {
    alert("Datenbank Fehler: " + JSON.stringify(result.error, null, 2))
  }
  else {
    // Weiterleitung auf die Game Page
    location.href = "./game.html"
  }

})

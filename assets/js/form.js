var submitForm = document.getElementById("submit");
var email = document.getElementById("email");



submitForm.addEventListener("click", async (event) => {
    console.log('1')
    event.preventDefault()
    const result = await databaseClient.insertInto("users", ["email"], [email.value])
    if (result.error) {
        alert("Datenbank Fehler: " + JSON.stringify(result.error, null, 2))
    }
    else {
        // Weiterleitung auf die Game Page
        location.href = "./game.html"
    }
})

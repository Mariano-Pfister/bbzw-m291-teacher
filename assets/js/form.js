const submit = document.getElementById("submit")
const email = document.getElementById("email")
submit.disabled = true

const validate = () => {
    if (email.value == "") {
        submit.disabled = true
    } else {
        submit.disabled = false
    }
}

function isValidFirstname(fname) {
    if (
        typeof fname !== "string" ||
        /[0-9]+/g.test(fname)
    ) {
        return false; 
    }
    return true;
}

function isValidLastname(lname) {
    if (
        typeof lname !== "string" ||
        /[0-9]+/g.test(lname)
    ) {
        return false; 
    }
    return true;
}

email.addEventListener("keyup", (event) => {
    validate()
})


submit.addEventListener("click", async (event) => {
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

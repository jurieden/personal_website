document.getElementById("contact-form").onsubmit = function (event) {
    event.preventDefault()
    console.log(event.target)
    console.log(event.target.name.value)
    console.log(event.target.email.value)
    console.log(event.target.phone.value)
    fetch("https://hooks.zapier.com/hooks/catch/10212759/boin3jy/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "no-cors",
        body: JSON.stringify({
            "name": event.target.name.value,
            "email": event.target.email.value
        })
    }).then(function (response) {
        console.log(response)
        document.getElementById("contact-form").style.display="none"
        document.getElementById("danke").style.display="block"
    })

}

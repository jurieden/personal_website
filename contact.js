document.getElementById("contact-form").onsubmit=function(event){
    event.preventDefault()
    console.log(event.target)
    console.log(event.target.name.value)
    console.log(event.target.email.value)
    console.log(event.target.phone.value)
}

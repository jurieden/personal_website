function getCharacters() {
    // this is asyncrounous
    // 1. step 1
    console.log("before")

    // 2. step 2
    fetch("https://swapi.dev/api/people")
        .then(function (response) { // when the fetch is done .. also do this
            return response.json()
        })
        .then(function (data) {
            console.log(data, "data")
            data.results.forEach(item => {
                // create a div for each character
                const charContainer = document.createElement("div");
                charContainer.classList.add("character-container")
                charContainer.innerText = item.name
                charContainer.style.color = "white"

                // created a new "p" tag
                const birthYearLabel = document.createElement("p");
                birthYearLabel.innerText = item.birth_year
                birthYearLabel.style.color = "white"

                const hairColorLabel = document.createElement("p");
                hairColorLabel.innerText = item.hair_color
                hairColorLabel.style.color = "white"

                // add the p to the container
                charContainer.appendChild(birthYearLabel)
                charContainer.appendChild(hairColorLabel)

                // add it or our list
                document.getElementById("starwarsapi").appendChild(charContainer)


            })
        })

    // 3. step 3
    console.log("after")
}


// call the function
getCharacters()
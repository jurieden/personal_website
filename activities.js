document.getElementById("activities").onsubmit = function (event) {
  event.preventDefault()
  console.log(event)
  console.log(event.target.activities.value)
  console.log(event.target.time.value)


  //let timeFilter = document.getElementById("timeDropdown").value;
  //let categoryFilter = document.getElementById("activitiesDropdown").value;

  document.getElementById("table_activities").style.visibility = "visible"
  document.getElementById("activitiesTable").innerHTML = "";

  // getting our activities
  fetch(`https://calm-spire-33184.herokuapp.com/activities?activityTime=${event.target.time.value}&activityName=${event.target.activities.value}`)
  .then(function (response) {
    return response.json()
  }).then(function (data) {
    console.log(data, "data")
    // data
    data.map(function (item) {
      // Create Activities again
      createActivitiesRow(item)
    })
  })

}

function createActivitiesRow(activity) {
  const row = document.createElement("tr")

 /* const firstCell = document.createElement("td")
  firstCell.innerText = activity.activityName
  row.appendChild(firstCell)

  const secondCell = document.createElement("td")
  secondCell.innerText = activity.activityTime
  row.appendChild(secondCell)
*/
  const thirdCell = document.createElement("td")
 // thirdCell.innerText = activity.activityLink
  row.appendChild(thirdCell)

  const iframe = document.createElement("iframe")
  iframe.setAttribute("src",activity.iframeLink)
  thirdCell.appendChild(iframe)

  document.getElementById("activitiesTable").appendChild(row)
}

//createActivitiesRow("Sports","10 min","https://www.youtube.com/watch?v=6VFLKdfxA24")
//createActivitiesRow("Cinema","90 min","https://www.google.com/search?q=cinema+berlin+today&oq=cinema+berlin+today")
//createActivitiesRow("Meditation","20 min","https://www.youtube.com/watch?v=e2BKaxsX88M")

/*
const sports = {
  activityName: "Sports",
  activityTime: "10 min",
  activityLink: "https://www.youtube.com/watch?v=6VFLKdfxA24",
}
*/

//createActivitiesRow(sports)

/*
const cinema = {
  activityName: "Cinema",
  activityTime: "90min",
  activityLink: "https://www.google.com/search?q=cinema+berlin+today&oq=cinema+berlin+today",
}
*/

//const listOfActivities = [sports, cinema]
//createActivitiesRow(cinema)

/*
listOfActivities.filter(function (item) {
  return item.activityName === "Sports"
}).map(function (item) {
  createActivitiesRow(item)
})
*/

 /*
  fetch("https://hook.integromat.com/b7fru9rcs2secob2b57x4o5uhbdpxd19", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    mode: "no-cors",
    body: JSON.stringify({
      "activities": event.target.activities.value,
      "time": event.target.time.value
    })
  })
  fetch("https://jurieden.netlify.app/activities.html?post", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    mode: "no-cors",
    body: JSON.stringify({
      "activities": event.target.activities.value,
      "time": event.target.time.value
    })
  })*/

  // getting our activities when the user JUST landed on the page

/*
fetch("https://calm-spire-33184.herokuapp.com/activities")
.then(function (response) {
  return response.json()
}).then(function (data) {
  console.log(data, "data")
  // data
  data.map(function (item) {
    createActivitiesRow(item)
  })
})
*/
/*
document.getElementById("activitiesrandom").onsubmit = function (event) {
  event.preventDefault()
  console.log("random")
}
*/
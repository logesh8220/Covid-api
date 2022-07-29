
const countryedataa = async () => {
    const respo = await fetch("https://covid19.mathdro.id/api/countries/[country]")
    const data = await respo.json();
    document.querySelector(".global").innerHTML = `Global🌍 <div class="spinner-grow text-danger" role="status">
    <span class="visually-hidden">Loading...</span>`
    document.querySelector(".confirmed").innerHTML = ` <div class="card bg-warning my-5"">
    <div class="card-body">
    Confirmed Cases:
    <h5 class="card-title"> ${data.confirmed.value}</h5>
    </div>
    </div>`
    document.querySelector(".deaths").innerHTML = ` <div class="card bg-danger">
    <div class="card-body">
    death Cases:
    <h5 class="card-title"> ${data.deaths.value}</h5>
    </div>`
    document.querySelector(".time").innerHTML = `LastUpdate: ${data.lastUpdate}`
}
countryedataa()

let button = document.querySelector(".cbtn")
let input = document.getElementById("input")
button.addEventListener("click", async function () {
    const response = await fetch(`https://covid19.mathdro.id/api/countries/${input.value}`)
    const data1 = await response.json();
    let div1 = document.createElement("div")
    div1.innerHTML = `        <div class="container-fluid row">
    <div class="card covidcard col" style="width: 25rem;">
    <div class="card-body">
    <h2 class="card-title">${input.value}</h2>
  <div class="card-body ncard1 bg-warning">
  Confirmed Cases:
  <h5 class="card-text value ">${data1.confirmed.value}</h5><br>
  </div>
  <div class="card-body ncard1 bg-danger">
  death Cases:
  <h5 class="card-text value ">${data1.deaths.value}</h5><br>
  </div>
  </div>
    <span class="card-text value text-muted time"> LastUpdate:${data1.lastUpdate}</span>
    </div>
    </div>
    </div>`
    document.body.append(div1)
    let reset = document.getElementById("rbtn")
    reset.addEventListener("click",function(){
      div1.innerHTML = ""
    })
})
let date = new Date().toDateString()
document.getElementById('time').innerHTML += date





// function getData() {
//     let search = document.getElementById('citySearch').value.toLowerCase().trim()
//         //API Calling
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=04fc888b507da0850a6ba657abb4eaa0`)
//         .then((res) => res.json())
//         .then((res) => {
//             showData(res)
//         }).catch((err) => {
//             console.log(err)
//         })
// }

// //Render Data
// function showData(res) {
//     let cityName = document.querySelector('.cityName p').innerHTML
//     let img = document.getElementById('weatherIcon').innerHTML
//     let temp = document.getElementById('deg').innerHTML
//     let tempName = document.getElementById('tempName').innerHTML
//     let feelsLike = document.getElementById('feelslike').innerHTML
//     let humidity = document.getElementById('humidity').innerHTML
//     let wind = document.getElementById('wind').innerHTML
//     console.log(res)
// }

fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=04fc888b507da0850a6ba657abb4eaa0`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res.name) // city name
        console.log(res.weather[0].main) // weather type
        console.log(res.main.temp) // farhnet unit
        console.log(res.main.feels_like) // feels like
        console.log(res.main.humidity) // humidity
        console.log(res.wind.speed) // wind
            // show(res)
    }).catch((err) => {
        console.log(err)
    })


function show(res) {
    if (res.weather[0].main === 'Smoke') {
        let img = document.getElementById('weatherIcon')
        img.src = '/assets/icons/smoke.png'
        let bg = document.getElementById('background')
        bg.style.backgroundImage = 'url(/assets/snow.jpg)'
    }

}
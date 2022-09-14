let date = new Date().toDateString()
document.getElementById('time').innerHTML += date





const load = () => {
    window.navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude)
    })
    document.getElementById('loader').style.display = 'block'
    document.getElementById('main').style.display = 'none'
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none'
        document.getElementById('main').style.display = 'block'
    }, 7000);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=244006e372fb520e56e50b3032f7bcf1`)
        .then((res) => res.json())
        .then((res) => {
            showData(res)
        }).catch((err) => {
            console.log(err)
        })
}


function getData() {
    let search = document.getElementById('citySearch').value.toLowerCase().trim()
        //API Calling
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=244006e372fb520e56e50b3032f7bcf1`)
        .then((res) => res.json())
        .then((res) => {
            showData(res)
        }).catch((err) => {
            console.log(err)
        })
}

//Render Data
// event.preventDefault()



function abc() {
    if (KeyboardEvent.keyCode())
}
abc()

function showData(res) {
    let loader = document.getElementById('loaderCity')
    loader.style.display = 'block'

    setTimeout(() => {
        loader.style.display = 'none'
        let background = document.getElementById('background')
        let cityName = document.querySelector('.cityName p')
        let img = document.getElementById('weatherIcon')
        let temp = document.getElementById('deg')
        let tempName = document.getElementById('tempName')
        let feelsLike = document.getElementById('feelslike')
        let humidity = document.getElementById('humidity')
        let wind = document.getElementById('wind')

        if (res.name === undefined) {
            swal("Not Found", "Please Enter Correct City Name", "error");
            cityName.innerHTML = 'Not Found'
            tempName.innerHTML = ""
            temp.innerHTML = ""
            humidity.innerHTML = ""
            wind.innerHTML = ""
            feelsLike.innerHTML = ""
            img.classList += 'hideimg'

        } else {

            cityName.innerHTML = res.name
            let convert = Math.ceil(res.main.temp - 273.15) // converting kelvin to centigrade
            temp.innerHTML = `${convert}<span style="font-size: 70px; margin-left: 15px;">&#xb0</span>`
            tempName.innerHTML = res.weather[0].main
            let convertFeels = Math.ceil(res.main.feels_like - 273.15)
            feelsLike.innerHTML = `${convertFeels}&#xb0`
            let hum = res.main.humidity
            humidity.innerHTML = `${hum}&#x25`
            let win = Math.ceil(res.wind.speed)
            wind.innerHTML = `${win} km/h`

            if (res.weather[0].main.toLowerCase() === 'clouds') {
                background.style.backgroundImage = 'url(/assets/cloudy.jpg)'
                img.src = '/assets/icons/cloudy.png'
            }
            if (res.weather[0].main.toLowerCase() === 'smoke') {
                background.style.backgroundImage = 'url(/assets/smoke.jpg)'
                img.src = '/assets/icons/smoke.png'

            }
            if (res.weather[0].main.toLowerCase() === 'clear') {
                background.style.backgroundImage = 'url(/assets/clear.png)'
                img.src = '/assets/icons/clear-sky.png'

            }
            if (res.weather[0].main.toLowerCase() === 'haze') {
                background.style.backgroundImage = 'url(/assets/haze.jpg)'
                img.src = '/assets/icons/sand.png'

            }
            if (res.weather[0].main.toLowerCase() === 'dust' || res.weather[0].main.toLowerCase() === 'sand') {
                background.style.backgroundImage = 'url(/assets/dust.jpg)'
                img.src = '/assets/icons/sand.png'

            }
            if (res.weather[0].main.toLowerCase() === 'mist' || res.weather[0].main.toLowerCase() === 'fog') {
                background.style.backgroundImage = 'url(/assets/dust.jpg)'
                img.src = '/assets/icons/smoke.png'

            }
            if (res.weather[0].main.toLowerCase() === 'snow') {
                background.style.backgroundImage = 'url(/assets/snow.jpg)'
                img.src = '/assets/icons/snowflake.png'

            }
            if (res.weather[0].main.toLowerCase() === 'rain') {
                background.style.backgroundImage = 'url(/assets/rainy.jpg)'
                img.src = '/assets/icons/rainy-day.png'

            }
            if (res.weather[0].main.toLowerCase() === 'drizzle') {
                background.style.backgroundImage = 'url(/assets/drizzle.jpg)'
                img.src = '/assets/icons/drizzle.png'
            }

            if (res.weather[0].main.toLowerCase() === 'thunderstorm') {
                background.style.backgroundImage = 'url(/assets/thunderstorm.jpg)'
                img.src = '/assets/icons/thunderstorm.png'
            }



            // console.log(res.name) // city name
            // console.log(res.weather[0].main) // weather type
            // console.log(res.main.temp) // farhnet unit
            // console.log(res.main.feels_like) // feels like
            // console.log(res.main.humidity) // humidity
            // console.log(res.wind.speed) // wind
        }

    }, 3000);
}

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=04fc888b507da0850a6ba657abb4eaa0`)
//     .then((res) => res.json())
//     .then((res) => {
//         console.log(res.name) // city name
//         console.log(res.weather[0].main) // weather type
//         console.log(res.main.temp) // farhnet unit
//         console.log(res.main.feels_like) // feels like
//         console.log(res.main.humidity) // humidity
//         console.log(res.wind.speed) // wind
//             // show(res)
//     }).catch((err) => {
//         console.log(err)
//     })


// function show(res) {
//     if (res.weather[0].main === 'Smoke') {
//         let img = document.getElementById('weatherIcon')
//         img.src = '/assets/icons/smoke.png'
//         let bg = document.getElementById('background')
//         bg.style.backgroundImage = 'url(/assets/snow.jpg)'
//     }

// }
// }
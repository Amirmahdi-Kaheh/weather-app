const apiKey = "f33b2b4f42cd4fdc91970344210709"

function getDay() {
    var d = new Date();
    var n = d.getDay();
    let day = "";

    switch (n) {
        case 2:
            day = "thursday"
            break;
        case 3:
            day = "wednesday"
            break;
        case 4:
            day = "tuesday"
            break;
        case 5:
            day = "friday";
            break;
        case 6:
            day = "saturday";
            break;
        case 7:
            day = "sunday";
            break;
        default:
            break;

    }
    return day;
}

$.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=mashhad`, function (data) {
    const name = data.location.name;
    const country = data.location.country;
    const temp_c = data.current.temp_c;
    const temp_f = data.current.temp_f;
    const last_updated = data.current.last_updated;
    const description = data.current.condition.text;
    const icon = data.current.condition.icon;
    const day = getDay();
    console.log(icon);

    const content =
        `
        <h3 id="cityName">${name} <span>${country}</span></h3>
            <p class="dateOfWeek">${day}</p>
            <p class="updateTime">last update : ${last_updated}</p>

            <input type="checkbox" name="" id="changetoF" hidden>
            <div class="content">
            <img src="https:${icon}">
                <p class="temptureNumber" id="temptureCg">${temp_c} C</p>
                <p class="temptureNumber" id="temptureFr">${temp_f} F</p>

                <p class="status">${description}</p>
            </div>
        `

    $('.container').html(content)
});

$(document).ready(function () {
    const cityName = document.getElementById('city')

    $("#city").keypress((e) => {
        if (e.keyCode == 13) {
            $.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName.value}`, function (data) {
                const name = data.location.name;
                const country = data.location.country;
                const temp_c = data.current.temp_c;
                const temp_f = data.current.temp_f;
                const last_updated = data.current.last_updated;
                const description = data.current.condition.text;
                const icon = data.current.condition.icon;
                const day = getDay();



                const content =
                    `
        <h3 id="cityName">${name} <span>${country}</span></h3>
            <p class="dateOfWeek">${day}</p>
            <p class="updateTime">last update : ${last_updated}</p>

            <input type="checkbox" name="" id="changetoF" hidden>
            <div class="content">
                <img src="https:${icon}">
                <p class="temptureNumber" id="temptureCg">${temp_c} C</p>
                <p class="temptureNumber" id="temptureFr">${temp_f} F</p>

                <p class="status">${description}</p>
            </div>
        `

                $('.container').html(content)
            });
        }
    })
});

// made by amirmahdi kaheh https://ir.linkedin.com/in/amirmahdi-kaheh-1b65291a6
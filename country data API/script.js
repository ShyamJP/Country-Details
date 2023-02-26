let input = document.getElementById('country');
let btn = document.getElementById('btn');
let detail = document.getElementById('detail');
let capital = document.getElementById('capital');
let language = document.getElementById('language');
let region = document.getElementById('region');
let timezone = document.getElementById('timezone');
let img = document.getElementById('img');
let map = document.getElementById('map');
let cname = document.getElementById('cname');

btn.addEventListener('click',() => {console.log(input.value)});



function data()
{
    fetch(`https://restcountries.com/v3.1/name/${input.value}?fulltext = true`)
    .then(res => res.json())
    .then(data=>{
        console.log(data);
        capital.innerHTML = data[0].capital;
        language.innerHTML = data[0].languages.eng +"," + data[0].languages.hin +","+  data[0].languages.tam;
        region.innerHTML = data[0].region;
        timezone.innerHTML = data[0].timezones;
        cname.innerHTML = input.value;
        img.setAttribute("src",data[0].flags.png);
        map.setAttribute("href",data[0].maps.googleMaps);
        // console.log(data[0].maps.googleMaps);
        // console.log(data[0].flags.png);
       
    })
}



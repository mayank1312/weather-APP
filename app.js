const input=document.querySelector(".input");
const SearchBtn=document.querySelector(".button");
const weatherImg=document.querySelector(".WeatherImg");
const temp=document.querySelector(".temp");
const desc=document.querySelector(".description");
const message=document.querySelector(".message");
const humidity=document.querySelector("#humidity");
const windSpeed=document.querySelector("#wind-speed");


const openPopUp=async(city)=>{
     const apikey="40530292ee6fb19e58aa6f0661175593";
     const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
     let data=await fetch(URL);
     let response=await data.json();
     console.log(response);
     let kelvin=response.main.temp;
     let celsius=Math.trunc(kelvin-273);
     
     if(city){
        message.style.display="block";
        temp.innerHTML=`<p>${celsius}<sup>°C</sup>`;
        desc.innerHTML=`<p>${response.weather[0].description}</p>`;
        humidity.innerHTML=`<span>${response.main.humidity}%</span>`;
        windSpeed.innerHTML=`<span>${response.wind.speed}</span>`;
        if(response.weather[0].main=="Clouds"){
            weatherImg.src="cloud.png";

        }else if(response.weather[0].main=="Clear"){
            weatherImg.src="clear.png";
            
        }else if(response.weather[0].main=="Mist"){
            weatherImg.src="mist.png";
            
        }else if(response.weather[0].main=="Rain"){
            weatherImg.src="rain.png";
            
        }else{
            weatherImg.src="snow.png";
        }
        
     }
   
}


SearchBtn.addEventListener("click",()=>{
    openPopUp(input.value);
})
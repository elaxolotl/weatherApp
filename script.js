document.addEventListener('DOMContentLoaded', ()=>{
    const tempField=document.querySelector(".temp");
    const adress=document.querySelector(".location");
    const time=document.querySelector(".date");
    const imgElement=document.querySelector("img");
    const status=document.querySelector(".status");
    const input=document.querySelector("input");
    const form=document.querySelector("form");
    form.addEventListener('submit', search)
    let target = 'tunis';
    const fetchData= async (target)=>{
        let url=`http://api.weatherapi.com/v1/current.json?key=e36f60736c9b4ed0931220652242101&q=${target}&aqi=no`;
        const res = await fetch(url);
        const data=await res.json();
        console.log(data);
        let temp=data.current.temp_c
        tempField.innerText= temp;
        tempField.innerText+= "°C";
        let name=data.location.name;
        adress.innerText= name;
        let countryName=data.location.country;
        adress.innerHTML+=", ";
        adress.append(countryName);
        let date=data.location.localtime;
        time.innerText=date;
        let image=data.current.condition.icon;
        imgElement.src = image;
        let descr=data.current.condition.text;
        status.innerText=descr;
    }
    function search(e){
        e.preventDefault()
        target=input.value;
        fetchData(target);
    }
    fetchData(target);
});

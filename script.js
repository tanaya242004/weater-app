const options = {
	method: 'GET',
	headers: {
		//'x-rapidapi-key': '43b3b163c3mshee2787c24738631p1ee10fjsn32a9bfc6a70f',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};
//   let inputValue = ""; // Declare variable to hold the value

//     document.getElementById('printBtn').addEventListener('click', function () {
//       inputValue = document.getElementById('inp_city').value;
//        console.log("Stored value:", inputValue);
//     })
//     console.log(inputValue);
    
 fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Rajasthan&format=json&u=c',options)
     .then(Response=>Response.json())
     .then(Response=>{
         console.log(Response)
         let Forcast=Response.forecasts[0];
         document.getElementById('main').innerHTML =Forcast.high;
         document.getElementById('main2').innerHTML =Forcast.low;
         document.getElementById('main3').innerHTML =Forcast.text;
        let location = Response.location
        document.getElementById('city').innerHTML =location.city;
     })
     .catch(err=>console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Kolkata&format=json&u=c',options)
    .then(Response=>Response.json())
    .then(Response=>{
        console.log(Response)
        let Forcast=Response.forecasts[0]; 
        document.getElementById('High').innerHTML =Forcast.high;
        document.getElementById('low').innerHTML =Forcast.low;
        document.getElementById('Sky').innerHTML =Forcast.text;
    })
    .catch(err=>console.error(err));
var Power = []; // For Power
var Speed = []; // For Rpm
var tempIX = []; // For Temperature
var pressIX = []; // For Pressure
//var Latitude = document.getElementById("lat");
//var Longitude = document.getElementById("long");
var Power_single = document.getElementById("P_single");
var Rpm_single = document.getElementById("R_single");
var Altitude_single = document.getElementById("A_single");
var Humdity_single = document.getElementById("H_single");

// Open Api Weather Wind-Speed Data extraction 
var wind = [];


    var ref = firebase.database().ref("WebDash");
    ref.orderByKey().limitToLast(5).once("child_added", function(snapshot) {
      console.log(snapshot.key); // Data For 5 values _ Power _ Speed is Appended in list
      console.log(snapshot.val());
      snapshot.forEach(function (child){
        console.log(child.key)
        if (child.key == "Power")
        {
          console.log(child.val());
          Power.push(child.val());
        }
        else if(child.key == "Speed")
        {
          console.log(child.val());
          Speed.push(child.val());
        }
        else{
          console.log("Error in Making List_array");
        }
      })
    });
    
    var ref2 = firebase.database().ref("WebDash");
    ref2.orderByKey().limitToLast(1).on("child_added", function(snapshot) {
      console.log(snapshot.key);
      console.log(snapshot.val());
      //Object Creation // For Most Recent Data Retrivation // Single Value
      var dataRetrive = snapshot.val();
      console.log("External_Temp: " + dataRetrive.temp1);
      console.log('Internal_Temp:' + dataRetrive.temp2);
      tempIX.push(dataRetrive.temp1,dataRetrive.temp2);
      console.log("External_Press: " + dataRetrive.pre1);
      console.log('Internal_Press:' + dataRetrive.pre2);
      pressIX.push(dataRetrive.pre1,dataRetrive.pre2);
      // Data Sending With Inner_Html
      //console.log("Latitude: " + dataRetrive.Latitude);
      //Latitude.innerHTML = "Latitude: " + dataRetrive.Latitude;
      //console.log("Longitude: " + dataRetrive.Longitude);
      //Longitude.innerHTML = "Longitude: " + dataRetrive.Longitude;
      console.log("Power_single: " + dataRetrive.Power);
      Power_single.style.width = dataRetrive.Power + "%" ; 
      Power_single.innerHTML = "Power : " + dataRetrive.Power;
      console.log("Humidity: " + dataRetrive.humidty);
      Humdity_single.style.width = (dataRetrive.humidty) +"%";
      Humdity_single.innerHTML = "Humidity : " + dataRetrive.humidty;
      console.log("Altitude_mapped_sea: " + dataRetrive.alt1);
      Altitude_single.style.width = dataRetrive.alt1 +"%";
      Altitude_single.innerHTML = "Altitude : " + dataRetrive.alt1;
      console.log("Speed_shaft: " + dataRetrive.Speed);
      Rpm_single.style.width =dataRetrive.Speed+ "%";
      Rpm_single.innerHTML = "Rpm : " +dataRetrive.Speed; 
    });
    


function dload(Power,Speed,wind,tempIX,pressIX){
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Time Stamp-1', 'Time Stamp-2', 'Time Stamp-3', 'Time Stamp-4', 'Time Stamp-5'],
        datasets: [
            {
            label: 'Power',
            data: Power,
             backgroundColor:
                [
                    'rgba(20, 143, 119)',
                    'rgba(20, 143, 119)',
                    'rgba(20, 143, 119)',
                    'rgba(20, 143, 119)',
                    'rgba(20, 143, 119)',
                ]
            },
            {
                label: 'Rpm',
                data: Speed,
                backgroundColor:
                [
                    'rgba(41, 128, 185 )',
                    'rgba(41, 128, 185 )',
                    'rgba(41, 128, 185 )',
                    'rgba(41, 128, 185 )',
                    'rgba(41, 128, 185 )',
                ]
            },
            {
                label: 'Wind-Speed',
                data: wind,
                backgroundColor:
                [
                    'rgba(243, 156, 18)',
                    'rgba(243, 156, 18)',
                    'rgba(243, 156, 18)',
                    'rgba(243, 156, 18)',
                    'rgba(243, 156, 18)',
                ]
            }]
    },
    // options: {
    //     scales: {
    //         yAxes: [{
    //             ticks: {
    //                 beginAtZero: true
    //             }
    //         }]
    //     }
    // }
});

// Temprature
var char1 = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(char1, {
    type: 'polarArea',
    data: {
        labels: ['External', 'Internal'],
        datasets: [{
            data: tempIX,
         
            backgroundColor: [
                'rgba(21, 67, 96 , 0.2)',
                'rgba(81, 46, 95 , 0.2)'
            ],
            borderColor: [
                'rgba(21, 67, 96 , 1)',
                'rgba(81, 46, 95 , 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Temperature'
        }
    }
});

// Pressure

var char2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(char2, {
    type: 'polarArea',
    data: {
        labels: ['External', 'Internal'],
        datasets: [{
            data: pressIX,
         
            backgroundColor: [
                'rgba(21, 67, 96 , 0.2)',
                'rgba(81, 46, 95 , 0.2)'
            ],
            borderColor: [
                'rgba(21,67,96, 1)',
                'rgba(81, 46, 95 , 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Pressure'
        }
    }
});
}
setTimeout("dload(Power,Speed,wind,tempIX,pressIX)", 5000);
// Date and Time 

var dt = new Date();
document.getElementById("time").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));

// Color Gen 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(">>>>>>>", color) // Checkin Color hex code
    return color;
}

// Creating Fire base intiallization 
 const database = firebase.database();
 
// -------------------------------------------------------------------




/*----------------------------------------------------------------*/

//  Open - weather api
const api = {
    key: "4930558afcaeeec187450879e0493743",
    base: "https://api.openweathermap.org/data/2.5/"
}


const status = document.querySelector(".env-status");
const searchSpeed = document.querySelector(".wind-speed");
const searchDirec = document.querySelector(".dir-deg");



function getQuery(e){
    if(e){
        fetch(`${api.base}weather?q=`+`pune`+`&units=metric&appid=${api.key}`).then(response => response.json()).then(dataDisplay)
        ;
    }
}

function dataDisplay(response){

    status.innerText = response.weather[0].main;
    searchSpeed.innerText = response.wind.speed + "m/s";
    searchDirec.innerText = response.wind.deg + "°";
    for(i = 0; i<5; i++)
    {
        wind.push(response.wind.speed);
    }
}

getQuery(true);
// Average Value Power
function sum(Power){
  var a=0;
for(i=0; i<(Power.length);i++)
{
  a = a+ Power[i];

}
a=a/Power.length;
console.log(a);
 //return document.write(a)
 return document.getElementById("Demo").innerHTML = a;

}

function caution(Power){
console.log(Power[3])
if(Power[4]>70)
{
alert("Power Exceeded Initial Limit")
}
else
alert("Power Is Within Limit")
if(Speed[4]>30)
{
alert("Rpm Exceeded Initial Limit")
}
else
alert("Rpm Is Within Limit")
// if(wind-speed< 5)
// {
//   alert("Wind Speed Exceeded Initial Limit")
// }
}



// if (Power.length==5) {

// }

 //-----------------------------------------Code for dropdown-------------------------------------------------------
var arr=[];
var count=12; //x(by default value is 6[1 hr=6 timestamps])*24*value coming in day wise(range of values) 
//6*24*number of days
 function getOption() 
 {
            selectElement =  document.querySelector('#select1');
                      
            output = selectElement.value;
  
            document.querySelector('.output').textContent  = output;

             var ref3 = firebase.database().ref("WebDash");

         ref3.orderByKey().limitToLast(count*output).on ("child_added", function(snapshot) 
         {
         console.log(snapshot.key); // Data For 5 values _ Power _ Speed is Appended in list
           console.log(snapshot.val());
           snapshot.forEach(function (child){
           console.log(child.key)
           if (child.key == "Power")
        {
             console.log(child.val());
             arr.push(child.val());
        }
         })
    });
        }

function sum1(arr){
var a=0;
for(i=0; i<(arr.length);i++)
{
  a = a+ arr[i];

}
a=a/arr.length;
console.log(a);
 //return document.write(a)
 return document.getElementById("Hello123").innerHTML = a;

}
function dash(arr)
{
  while(arr.length > 0) {
    arr.pop();
}
}
function dummy(){
  getOption();
  setInterval("sum1(arr)",30000);

}




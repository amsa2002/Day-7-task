//Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

//Q1.Get all the countries from Asia continent /region using Filter function

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true);
// request.send();
// request.onload = function(){
// 	var data = request.response;
// 	//console.log(data);
//     var result = JSON.parse(data);
// 	console.log(result);
//     for(var i=0;i<result.length;i++){
//         console.log(result[i].flag);
//     }
// }

//Q2.Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all",true)
 request.send();
 request.onload = function(){
     var data = request.response;
    var result = JSON.parse(data);
    var res = result.filter((x)=>x.population<200000)
    res.map((ele)=>console.log(ele.name.common))
 }
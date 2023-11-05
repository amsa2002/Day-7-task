//Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

//a.Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
	var data = request.response;
    var result = JSON.parse(data);
	console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flag);
    }
}

//b.Get all the countries with a population of less than 2 lakhs using Filter function

var request1 = new XMLHttpRequest();
 request1.open("GET","https://restcountries.com/v3.1/all",true)
 request1.send();
 request1.onload = function(){
    var data1 = request1.response;
    var result1 = JSON.parse(data1);
    var res = result1.filter((x)=>x.population<200000)
    res.map((ele)=>console.log(ele.name.common))
 }

//c.Print the following details name, capital, flag, using forEach function

var request2 = new XMLHttpRequest();
 request2.open("GET","https://restcountries.com/v3.1/all",true)
 request2.send();
 request2.onload = function(){
    var data2 = request2.response;
    var result2 =  JSON.parse(data2);
    result2.forEach((element)=>{
    console.log(element.name,element.capital,element.flag);
 })}

//d.Print the total population of countries using reduce function

var request3 = new XMLHttpRequest();
 request3.open("GET","https://restcountries.com/v3.1/all",true)
 request3.send();
 request3.onload = function(){
     var data3 = request2.response;
    var result3 = JSON.parse(data3);
    var res1 = result3.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res1);
}

//e.Print the country that uses US dollars as currency.

var reques4 = new XMLHttpRequest();
reques4.open("GET","https://restcountries.com/v3.1/all",true)
reques4.send();
reques4.onload = function(){
    var dat4 = reques4.response;
   var result4 = JSON.parse(dat4);
  var currency = result4.filter((value)=> value.currencies && value.currencies.USD)
 currency.forEach((value)=>console.log(value.name.common))
}
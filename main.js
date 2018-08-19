// function Loadjson(file,callback)
// {
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function()
// 	{
// 		if(xhr.readyState == 4 && xhr.status =="200")
// 		{
// 			callback(xhr.responseText);
// 		}
// 	};
// 	xhr.send(null);
// }
// Loadjson("data.json",function(text)
// {
// 	 var data =JSON.parse(text);
// 	 console.log(data);
// 	 basics(data.details);
// 	 careerinfo(data.career);
// 	 education(data.education);
// 	 skillset(data.skill);
// 	 achivementsinfo(data.achivements);
// })
function loadjson(file)
{
	return new Promise((resolve,reject)=>
	{
		return fetch(file).then(response=>
		{
			if(response.ok)
			{
				resolve(response.json())
			}
		})
	})
} 
var newfile=loadjson("data.json")
newfile.then(data=>
{
	console.log(data);
	 basics(data.details);
	 careerinfo(data.career);
	 education(data.education);
	 skillset(data.skill);
	 achivementsinfo(data.achivements);
})

var left=document.querySelector(".left");
function basics(det)
{
	var img = document.createElement("img");
	img.src = det.image;
	left.appendChild(img);

	var name1=document.createElement("h3");
	name1.textContent=det.name;
	left.appendChild(name1);

	var phoneno1=document.createElement("h3");
	phoneno1.textContent=det.phoneno;
	left.appendChild(phoneno1);

	var email=document.createElement("a");
	email.textContent=det.email;
	email.href="tanujamarreddy8@gmail.com";
	email.textContent=det.email;
	left.appendChild(email);

	var address1=document.createElement("h2");
	address1.textContent="Address";
	left.appendChild(address1);

	var line=document.createElement("hr");
	left.appendChild(line);

	var ad=document.createElement("h3");
	ad.textContent=det.address;
	left.appendChild(ad);
}
var right=document.querySelector(".right");
function careerinfo(infom)
{
	var obj=document.createElement("h2");
	obj.textContent="career objective";
	right.appendChild(obj);

	var line=document.createElement("hr");
	right.appendChild(line);

	var info1=document.createElement("h3");
	info1.textContent=infom.info;
	right.appendChild(info1);
}
function education(edu)
{
 	var obj1=document.createElement("h2");
	obj1.textContent="Education Qualification";
	right.appendChild(obj1);

	var line=document.createElement("hr");
	right.appendChild(line);

	var table1=document.createElement("table");
	table1.border="1";
	right.appendChild(table1);

	tabledata="";

	for(i=0;i<edu.length;i++)
	{
		tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year_of_passing+"</td><td>"+edu[i].percentage+"<td></tr>";
	}
 	table1.innerHTML=tabledata;
}
function skillset(skill)
{
	var sk=document.createElement("h1");
	sk.textContent="Technical Skills";
	right.appendChild(sk);

	var line=document.createElement("hr");
	right.appendChild(line);

	for(i=0;i<skill.length;i++)
	{
		var s=document.createElement("h3");
		s.textContent=skill[i].title;
		right.appendChild(s);

		var ul=document.createElement("ul");
		var li=document.createElement("li");
		li.textContent=skill[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}
}
function achivementsinfo(ach)
{
	var ac=document.createElement("h1");
	ac.textContent="achivements";
	right.appendChild(ac);

	var line=document.createElement("hr");
	right.appendChild(line);

	for(i=0;i<ach.length;i++)
	{
		var ul=document.createElement("ul");
		var li=document.createElement("li");
		li.textContent=ach[i].a1;
		ul.appendChild(li);
		right.appendChild(ul);
	}
}
function openpage()
{
	window.open("resume.html","_self",true)
}
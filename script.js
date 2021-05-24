var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"gun"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

for(var i = 0; i < chrs.length; i++){
  
  var main = document.createElement("div");
  var tName = document.createElement("p");
  var tClass = document.createElement("p");
  var vehicleColor = document.createElement("p");
  
  if(chrs[i].afl == "autobot"){
    main.classList.add("autobot");
    var img = document.createElement("img");
    img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  }
  else if(chrs[i].afl == "decepticon") {
    main.classList.add("decepticon");
    var img = document.createElement("img");
    img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
  }
  
  tName.innerHTML = "Name: " + chrs[i].name;
  // display.innerHTML += "<br/>";
  tClass.innerHTML += "Class: " + chrs[i].class.toUpperCase();
  // display.innerHTML += "<br/>"; 
  vehicleColor.innerHTML += "Vehicle: " + chrs[i].vehicle;
  
   if(chrs[i].vehicle == "truck"){
      vehicleColor.style.color = "blue";
  }
  else if (chrs[i].vehicle == "tank") {
    vehicleColor.style.color = "green";
  }
  else if (chrs[i].vehicle == "car") {
    vehicleColor.style.color = "gold";
  }
  else if (chrs[i].vehicle == "plane") {
    vehicleColor.style.color = "white";
  }
  
  main.classList.add("character");
  vehicleColor.classList.add("vehicle");
  
  
  main.appendChild(tName);
  main.appendChild(tClass);
  main.appendChild(vehicleColor);
  main.appendChild(img);
  document.body.appendChild(main);
  
}
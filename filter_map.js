var floormates = [
  {name:"Bishmay" , type:"ooooodia"},
  {name:"Ritik" , type:"kutta"},
  {name:"Rothi" , type:"dhemna"},
  {name:"Rahul" , type:"bhalo chele"},
  {name:"Raptor" , type:"oh yeah"},
  {name:"Anujeet" , type:"madarchod"},
  {name:"Mahi" , type:"madarchod"},
  {name:"Sarthak" , type:"betichod"},
]

var isMadarchod = (mc) => mc.type === "madarchod"


console.log("Showing all the madarchods\n");
var madarchods = floormates.filter(isMadarchod)
console.log(madarchods)

console.log("Showing all the not madarchods\n");
var notMadarchod = floormates.reject(nmc => nmc.type == "madarchod")
console.log(notMadarchod)

console.log("Showing the different types of floormates using maps\n");
var types = floormates.map( x => x.name + " is a " + x.type)
console.log(types);

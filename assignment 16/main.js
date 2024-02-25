// creating a guest list array
var guestlist = ["laiba malik", "habiba malik"];
//makinh variable for those guest who cant come
var dontcome = guestlist[0];
//print the name of guest who cant come
console.log(dontcome, "nahi ahh rahi hai.");
//add or remove values from guestlist array
guestlist.splice(0, 1, "Bisma malik");
//message print for bugger table
console.log("Good news ! we have found a bigger table for dinner.");
//adding a new guest at starting index of array
guestlist.unshift("inaya");
//adding a new guest at ending index of array
guestlist.push("ayesha");
//get a middle index of our guest list array
var middleindex = Math.floor(guestlist.length / 2);
//adding a new guest to middle index of array
guestlist.splice(middleindex, 0, "irha");
//print message of update list
console.log("updated list of our guest");
//sending a invitation message to our guest one by one with their names
guestlist.forEach(function (oneguest) { return console.log("ASSALAMU ALAIKUM  ".concat(oneguest, ", wiuld you like to dinner with me")); });

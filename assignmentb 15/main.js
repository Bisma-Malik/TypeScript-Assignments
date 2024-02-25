var guestlist = [" laiba malik", "habiba malik"];
var dontcome = guestlist[0];
console.log(dontcome, "Nai ahh skti");
guestlist.splice(0, 1, "Bisma malik");
guestlist.forEach(function (guest) { return console.log("ASSALAMU ALAIKUM ".concat(guest, ",would you like to dinner with me?")); });

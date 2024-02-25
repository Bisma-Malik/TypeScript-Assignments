let guestlist = [" laiba malik","habiba malik"];

let dontcome = guestlist[0];

console.log(dontcome, "Nai ahh skti");

guestlist.splice(0, 1, "Bisma malik");

guestlist.forEach(guest => console.log (`ASSALAMU ALAIKUM ${guest},would you like to dinner with me?`));

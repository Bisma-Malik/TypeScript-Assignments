var personeName = "bisma Malik";
console.log(personeName.toLowerCase());
console.log(personeName.toUpperCase());
console.log(personeName.replace(/\b\w/g, function (abc) { return abc.toUpperCase(); }));

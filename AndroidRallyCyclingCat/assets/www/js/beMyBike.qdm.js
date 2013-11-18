/**************************************************************
 ********          THIS IS A GENERATED FILE         ***********
 **************************************************************/
if (typeof Qeo === "undefined") {Qeo = {registerType: function(td) {this.ttr.push(td);},ttr: []};}

Qeo.registerType({
"topic": "com::bemybikerally::bike::CheckPoint",
"behavior": "event",
"properties": {
"checkPointId": {
"type": "string", "key": true
}, "enigma": {
"type": "string"
}
}
});
Qeo.registerType({
"topic": "com::bemybikerally::bike::Manifest",
"behavior": "state",
"properties": {
"playerId": {
"type": "string"
}, "checkPointId": {
"type": "string", "key": true
}
}
});


console.log("Hola")

const Gizmo = {
    name: "Gizmo",
    species: "Human",
    nicknames: ["Izzy", "Chabalita", "Sleep Terrorist"],
    age: .5, 
    socialbehavior: function () {
        console.log("smile")
    },
    nightdisturbance: function() {
        console.log("WAAAAAAAAAH!")
    },
    tickleresponse: function () {
        console.log("cackle cackle cackle")
    },
    mood: function(adjective) {
        console.log(`${this.name} is very ${adjective} today.` )
    }
};

Gizmo.mood("rosy");
Gizmo.nightdisturbance();
Gizmo.tickleresponse();
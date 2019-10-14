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
    },
    favoriteToys: [],
    play: function(toy) {
      if(toy==="Georgia") {
          this.favoriteToys.push(toy)
          console.log(`${this.name} loves to play with ${toy}.`)
      } else {
          console.log(`${this.name} doesn't like ${toy} very much.`)
      }
    }
};

Gizmo.mood("rosy");
Gizmo.nightdisturbance();
Gizmo.tickleresponse();

Gizmo.play("Georgia");
Gizmo.play("Barbie");
console.log(Gizmo.favoriteToys);
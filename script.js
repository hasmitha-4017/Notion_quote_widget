const logs = [

{
month:0,
location:"🌅 Dawn Island",
quote:"Every great voyage begins long before the sails are raised.\nIt begins with the decision to leave the shore."
},

{
month:1,
location:"🏴‍☠️ Foosha Village",
quote:"The dreams you protect today become the adventures you live tomorrow."
},

{
month:2,
location:"🌊 East Blue",
quote:"No sailor controls the wind.\nEvery sailor chooses the sails."
},

{
month:3,
location:"🧭 Reverse Mountain",
quote:"Every new chapter begins where comfort ends."
},

{
month:4,
location:"🏜️ Whiskey Peak",
quote:"Not every challenge is an enemy.\nSome are simply lessons wearing different faces."
},

{
month:5,
location:"🌿 Little Garden",
quote:"Growth isn't measured by speed.\nIt's measured by consistency."
},

{
month:6,
location:"❄️ Drum Island",
quote:"The sea never asks whether you're ready.\nIt simply asks whether you're willing to leave the shore."
},

{
month:7,
location:"☁️ Skypiea",
quote:"Aim higher than you think you can.\nThe sky has room for those willing to climb."
},

{
month:8,
location:"⚙️ Water 7",
quote:"Strong foundations are built quietly,\none careful piece at a time."
},

{
month:9,
location:"🔥 Enies Lobby",
quote:"The hardest battles are often fought for the future you'll one day thank yourself for."
},

{
month:10,
location:"🌊 Sabaody Archipelago",
quote:"Every person you meet can teach you a different way to navigate life."
},

{
month:11,
location:"⭐ Laugh Tale",
quote:"The greatest treasure isn't the destination.\nIt's the person you've become during the voyage."
}

];

function changeLog(){

    const month = new Date().getMonth();

    const log = logs.find(item => item.month === month);

    document.getElementById("quote").innerHTML =
        `"${log.quote.replace(/\n/g,"<br>")}"`;

    document.getElementById("location").innerHTML =
        log.location;

}

changeLog();
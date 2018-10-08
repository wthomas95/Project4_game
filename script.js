var gameover = 0;
let Character = {
    race: "",
    upgrade: false,
    artifacts: [0, 0, 0],
    health: 100,
    missChance: 0,
    damage: 7
}
let Enemy = {
    name: "",
    hp: 100,
    damage: 0
} 
var b1 = document.getElementById("c1");
var b2 = document.getElementById("c2");
var b3 = document.getElementById("c3");
var b4 = document.getElementById("c4");
var header = document.getElementById("t");
var description = document.getElementById("d");
function GameStart(){
    prelude();
}
function prelude(){
    header.innerHTML = "Prelude";
    description.innerHTML = "A description of the world and races: \n Orcs: Orcs are a more tribalistic people. They are large and stury, heavily muscled under green tinted hide. Large horns curl up above their heads. These hulks tend to lack finesse when it comes to combat, most warriors prefer to use hammers and other blunt weapons where they can use their great strength to the best effect.\n Dwarves: Dwarves are short, sturdy, and quite strong, though not so much as the orcs. Due to their stature, they are not typically as agile as humans or elves. Most Dwarven warriors prefer to use heavy battleaxes that require less finess than a sword or bow, but more than the Orcish warhammers.Their capitol is in a large mountain, hollowed out ages ago by their ancestors. Past their capitol, many smaller dwarf towns and cities exist, but non-dwarves rarely venture there due to the uncomfortably small tunnels that lead from their capitol to their other cities.\n Humans: Humans live in the north west of the continent. Humans have 3 major cities, a central capitol just north of the mountains leading to the dwarf capitol, a coastal city to the west, and a cooperative city with the elves to the north. Other small villages are dotted around the countryside.\n Elves: Elves are similar to size and strength as humans. They live in the northern forests, and are the most friendly to the orcs. Although it seems that the hyper-refinement of the elves would clash with the roughness of the dwarves, it seems that their shared love of wilderness has brought their races closer together.";
    b1.innerHTML = "continue";
    b1.addEventListener("click", CharSetup);
}
function CharSetup(){
    b1.removeEventListener("click", CharSetup);
    header.innerHTML = "Character Setup";
    description.innerHTML = "Choose between an Orc, Dwarf, Elf, or Human. Orcs and Dwarfs do higher damage but have a chance to miss. Humans do medium damage with no advantages or drawbacks. Elfs do lower damage but get 3 free attacks before the enemy can engage.";
    b1.addEventListener("click", setOrc);
    b2.addEventListener("click", setElf);
    b3.addEventListener("click", setHuman);
    b4.addEventListener("click", setDwarf);
    b1.innerHTML = "Orc";
    b2.innerHTML = "Elf";
    b3.innerHTML = "Human";
    b4.innerHTML = "Dwarf";
}
function setOrc(){
    Character.race = "orc";
    console.log(Character.race);
    loc1();
}
function setElf(){
    Character.race = "elf";
    console.log(Character.race);
    loc1()
}
function setHuman(){
    Character.race = "human";
    console.log(Character.race);
    loc1()
}
function setDwarf(){
    Character.race = "dwarf";
    console.log(Character.race);
    loc1()
}
function loc1(){
    removeListener();
    header.innerHTML = "Orc Stronghold";
    description.innerHTML = `You are a(n) ${Character.race}. The great cheiftain who governs the stronghold has conveined a council of peoples from all races. You sit in the room as people of all races file in. The last person to sit is a middle aged archaeologist, holding a large bundle of scrolls. At the behest of the cheiftain, the archaeologist stands and describes a failed expedition in the far east. An ancient monster was awoken by digging in an ancient tomb. The creature killed the guards and was only held back by a last minute spell that the mages of the expedition sacrificed themselves to cast, a spell so draining that it killed the mages casting it. The archaeologist warns that the spell won't hold for long, and that the only way to stop the monster is to use three ancient artifacts to drain the monster's power and imprison it in the tomb once again. The orc cheiftain stands, addressing warriors of each race in the room,asking who will take the task of finding the artifacts to force the monster back into the crypt.`;
    b1.addEventListener("click", proceed);
    b2.addEventListener("click", end);
    b1.innerHTML = "Accept the Challenge";
    b2.innerHTML = "Keep Your Silence";
    b3.innerHTML = "";
    b4.innerHTML = "";
}
function proceed(){
    b1.removeEventListener("click", proceed);
    b2.removeEventListener("click", end);
    header.innerHTML = "Stronghold"
    description.innerHTML = 'You stand and volunteer for the task, the cheiftain nods, and you leave the chambers, arming yourself as you go to search for the artifacts and fight the monster. As you leave the city, the archaeologist hurries up to you and tells you that you can likely find the artifacts in the human capitol, dwarven capitol, and human coastal city. You thank him for the information and proceed.. Where will you go now?';
    b1.innerHTML = "Western Dwarven Trade Outpost";
    b2.innerHTML = "Out to the Ruins.. Your final challenge awaits";
    b3.innerHTML = "The Elven Capitol";
    b4.innerHTML = "The Elf/Orc Cohabitation"
    b1.addEventListener("click", OutWest);
    b2.addEventListener("click", toBoss);
    b3.addEventListener("click", ElfCity);
    b4.addEventListener("click", Cohab);
}
function end(){
    header.innerHTML = "The End";
    description.innerHTML = "The council adjourns, and a young elf warrior has volunteered to undertake the task, you hope that he succeeds.";
    b1.innerHTML = "";
    b2.innerHTML = "";
    b3.innerHTML = "";
    b4.innerHTML = "";
}
function OutWest(){

}
function toBoss(){
    header.innerHTML = "The monster stands in your path, frozen by a field of energy. It's glowing eyes glare down at you while its stony figure stands in front of you. Massive boulders make up its body, each suspended several feet apart by glowing orange energy."
    if (Character.artifacts != [1, 1, 1])
    {
        description.innerHTML = "Without the artifacts in your posession, you are immediatly killed by the monster. Your presence without the ability to defeat him released the spell binding him, and he rampages through the land, destroying everything in his path.";
    }
    else if (Character.artifacts == [1, 1, 1]){
        description.innerHTML = "You raise the artifacts and shout. A blinding light flashes between the golem and the artifacts. Massive amounts of orange energy flow from the monster into the artifacts, and the monster shrinks down, until it is only the size of an average Orc."
        combat();
    }

}
function ElfCity(){

}
function Cohab(){

}
function OutEast(){

}
function ElfHum(){

}
function DwarfCap(){

}
function humCap(){

}
function CoastC(){

}
function DamageCalc(Character){
    var stunChance = 0;
    var damage = 0;
    if (Character.race === "orc")
    {
        Character.damage = 15;
    }
    if (Character.race === "elf")
    {
        Character.damage = 5;
    }
    if (Character.race === "human")
    {
        Character.damage = 7;
    }
    if (Character.race === "dwarf")
    {
        Character.damage = 12;
    }
}
function removeListener(){
    var listeners = [setDwarf, setElf, setHuman, setOrc, CharSetup, loc1, proceed, OutWest, end, toBoss, ElfCity, humCap, OutEast, DwarfCap, CoastC, ElfHum];
    for (i = 0; i <= listeners.length; i++)
    {
        b1.removeEventListener("Click", listeners[i]);
        b2.removeEventListener("Click", listeners[i]);
        b3.removeEventListener("Click", listeners[i]);
        b4.removeEventListener("Click", listeners[i]);
    }
}
function combat(Enemy, Character){
    var critChance = 0;
    var crit = 1.1;//crits do 10% more damage
    while (hp >= 0 && ehp >=0)
    {
        var strength = 0;
        var miss = 0;
        var missChance = 0;
        console.log("Will you use a light or heavy attack?\n1. Light\n2. Heavy\n");
        //set strength = to user input, 1 is light, 2 is heavy
        if (strength === 1){
            damage = damage;
        }
        else if (strength === 2){
            missChance = math.Random(1, 4);
            if(missChance === 1){
                miss = 1; //attack will miss
                damage = damage * 1.3;
            }
            else{
                damage = 0;
                miss = 0;
            }
        }
    }
    if (hp <= 0)
    {
        console.log("you were forced to retreat");
    }
    else if (ehp <= 0)
    {
        console.log("you defeated the enemy");
    }
    return damage;
}
GameStart();
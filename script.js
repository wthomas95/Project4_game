let Character = {
    race: "",
    upgrade: false,
    artifacts: [0, 0, 0],
    health: 100,
    missChance: 0,
    damage: 0,
}
let Enemy = {
    name: "",
    health: 100,
    damage: 0
}
var mugged = 0;
var turns;
var elfCount;
var nextFunc;
var stun = false;
var b1 = document.getElementById("c1");
var b2 = document.getElementById("c2");
var b3 = document.getElementById("c3");
var b4 = document.getElementById("c4");
var header = document.getElementById("t");
var description = document.getElementById("d");
var numOfArtifacts = document.getElementById("c");
var dmgstat = document.getElementById("ds");
function inventory(){
    dmgstat.innerHTML = `Character Damage:<br>${Character.damage}/successful attack`;
    var amtOfArtifacts = 0;
    for(var i = 0;i<Character.artifacts.length;i++){
        if(Character.artifacts[i] == 1)
        {
            amtOfArtifacts++;
        }
    }
    numOfArtifacts.innerHTML = `Artifacts:<br>${amtOfArtifacts}/3`;
    if(amtOfArtifacts == 3){
        numOfArtifacts.innerHTML = `Artifacts:<br>${amtOfArtifacts}/3<br> you are ready to face the final boss`;    
    }
}
function removeListener(){
    var listeners = [CharSetup, setDwarf, setElf, setHuman, setOrc, loc1, proceed, stronghold, outpost, dwarfCollect, DwarfCap, DwarfThrone, humCap, humCollect, elfCollect, ElfCity, toBoss, end, victory, endScreen, GameStart, nextFunc, turn];
    for (i = 0; i <= listeners.length; i++)
    {
        b1.removeEventListener("click", listeners[i]);
        b2.removeEventListener("click", listeners[i]);
        b3.removeEventListener("click", listeners[i]);
        b4.removeEventListener("click", listeners[i]);
    }
}
function GameStart(){
    upgrade = 0;
    elfCount = 0;
    Character.artifacts = [0, 0, 0];
    inventory();
    removeListener();
    prelude();
}
function endScreen(){
    removeListener();
    header.innerHTML = "Defeat";
    description.innerHTML = "Try again?";
    b1.innerHTML = "Try again";
    b2.innerHTML = "";
    b3.innerHTML = "";
    b4.innerHTML = "";
    b1.addEventListener("click", GameStart);
}
function victory(){
    removeListener();
    header.innerHTML = "Victory";
    description.innerHTML = "Congratulations on defeating the beast and saving the land. Would you like to play again?";
    b1.innerHTML = "Save the world again";
    b2.innerHTML = "";
    b3.innerHTML = "";
    b4.innerHTML = "";
    b1.addEventListener("click", GameStart);
}
function prelude(){
    header.innerHTML = "Prelude";
    description.innerHTML = "A description of the world and races:<br>Orcs: Orcs are a more tribalistic people. They are large and stury, heavily muscled under green tinted hide. Large horns curl up above their heads. These hulks tend to lack finesse when it comes to combat, most warriors prefer to use hammers and other blunt weapons where they can use their great strength to the best effect.<br>Dwarves: Dwarves are short, sturdy, and quite strong, though not so much as the orcs. Due to their stature, they are not typically as agile as humans or elves. Most Dwarven warriors prefer to use heavy battleaxes that require less finess than a sword or bow, but more than the Orcish warhammers.Their capitol is in a large mountain, hollowed out ages ago by their ancestors. Past their capitol, many smaller dwarf towns and cities exist, but non-dwarves rarely venture there due to the uncomfortably small tunnels that lead from their capitol to their other cities.<br>Humans: Humans live in the north west of the continent. Humans have 3 major cities, a central capitol just north of the mountains leading to the dwarf capitol, a coastal city to the west, and a cooperative city with the elves to the north. Other small villages are dotted around the countryside.<br>Elves: Elves are similar to size and strength as humans. They live in the northern forests, and are the most friendly to the orcs. Although it seems that the hyper-refinement of the elves would clash with the roughness of the dwarves, it seems that their shared love of wilderness has brought their races closer together.";
    b1.innerHTML = "continue";
    b1.addEventListener("click", CharSetup);
}
function CharSetup(){
    b1.removeEventListener("click", CharSetup);
    header.innerHTML = "Character Setup";
    description.innerHTML = "Choose between an Orc, Dwarf, Elf, or Human. <br>Orcs and Dwarfs do higher damage but have a chance to miss. <br>Humans do medium damage with no advantages or drawbacks. <br>Elfs do lower damage but get 3 free attacks before the enemy can engage.";
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
    upgradeCheck();
    inventory();
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
    removeListener();
    header.innerHTML = "Stronghold";
    description.innerHTML = 'You stand and volunteer for the task, the cheiftain nods, and you leave the chambers, arming yourself as you go to search for the artifacts and fight the monster. As you leave the city, the archaeologist hurries up to you and tells you that you can likely find the artifacts in the human capitol, dwarven capitol, and human coastal city. You thank him for the information and proceed.. Where will you go now?';
    b1.innerHTML = "Western Dwarven Trade Outpost";
    b2.innerHTML = "Out to the Ruins.. Your final challenge awaits";
    b3.innerHTML = "The Elven Capitol";
    b4.innerHTML = "";
    b1.addEventListener("click", outpost);
    b2.addEventListener("click", toBoss);
    b3.addEventListener("click", ElfCity);
}
function stronghold(){
    removeListener();
    header.innerHTML = "Stronghold";
    description.innerHTML = "Back at the massive orc stronghold. You walk through the gate, and all of the orcs there seem to treat you with some sort of reverence as you pass through";
    b1.innerHTML = "Dwarf Trade Outpost";
    b2.innerHTML = "Elf City";
    b3.innerHTML = "Final Boss.  Your final challenge awaits";
    b4.innerHTML = "";
    b1.addEventListener("click", outpost);
    b2.addEventListener("click", ElfCity);
    b3.addEventListener("click", toBoss);
}
function outpost(){
    removeListener();
    header.innerHTML = "Dwarf trade Outpost";
    description.innerHTML = "A small dwarven outpost for trade between the southern dwarf nation and the rest of the world connects the Orc stronghold, Human capitol, and dwarven Capitol. There doesnt seem to be anything of interest here except roads to continue on."
    b1.innerHTML = "Human Capitol";
    b2.innerHTML = "Dwarf Capitol";
    b3.innerHTML = "Orc Stronghold";
    b4.innerHTML = "";
    b1.addEventListener("click", humCap);
    b2.addEventListener("click", DwarfCap);    
    b3.addEventListener("click", stronghold);
}
function DwarfCap(){
    removeListener();
    header.innerHTML = "Dwarf Capitol";
    description.innerHTML = "You enter the massive, cavernous halls of the dwarven capitol, carved deep within a the great mountain. You talk to a guard who thinks that the court mage of the Dwarf king Hrothgar could help you find an artifact."
    b1.innerHTML = "Go speak to the mage with regard to the artifact";
    b2.innerHTML = "Go speak to King Hrothgar";
    b3.innerHTML = "Leave the city for the trade outpost";
    b4.innerHTML = "Leave the city for the human capitol";
    b1.addEventListener("click", dwarfCollect);
    b2.addEventListener("click", DwarfThrone);
    b3.addEventListener("click", outpost);
    b4.addEventListener("click", humCap);
}
function DwarfThrone(){
    removeListener();
    header.innerHTML = "King Hrothgar's throne room"
    if (Character.upgrade == false)
    {
        description.innerHTML = "You enter the throne room. An old, but tough looking dwarf with long grey hair and a braided beard sits on the throne and looks down at you. He asks you why you have come for an audience with him, and after hearing of your quest he offers to give you aid. You graciously accept, and he stands and reaches for your weapon. He takes it and softly chants over it for several seconds. As he chants the weapon starts to glow. When he hands it back the glow vanishes. The king smiles and explains that he hopes that his gift will make a difference.\n The power of your weapon has been increased by 50%";
        Character.upgrade = true;
        upgradeCheck();
        console.log(`${Character.damage}`);
    }
    else if (Character.upgrade == true){
        description.innerHTML = "The throne room is empty, only flickering candle light can be seen against the stone walls";
    }
    inventory();
    b1.addEventListener("click", DwarfCap);
    b1.innerHTML = "Return to the main capitol";
    b2.innerHTML = "";
    b3.innerHTML = "";
    b4.innerHTML = "";
}
function dwarfCollect(){
    removeListener();
    header.innerHTML = "Court Mages Chambers";
    if (Character.artifacts[0] != 1){
        description.innerHTML = "When you reach the mage's chambers he waves you off dismissively. But when you explain your mission he looks grave. He takes a small, steel box from his desk and unlocks it with a snap of his fingers. He opens it and gives you the artifact. He explains that he has had this for generations, and that he hoped the need would never come to use it. He wishes you luck on your remaining quest and advises you to visit the king as well if you haven't already";
        Character.artifacts[0] = 1;
        console.log(Character.artifacts);
        inventory();
    }
    else{
        description.innerHTML = "The mage seems to have left. Luckily you've already collected the artifact from him";
    }
    b1.innerHTML = "Return to the main capitol";
    b2.innerHTML = "";
    b3.innerHTML = "";
    b4.innerHTML = "";
    b1.addEventListener("click", DwarfCap);
}
function humCap(){
    removeListener();
    header.innerHTML = "Human Capitol";
    if (Character.artifacts[1] != 1){
        description.innerHTML = "Upon entering the city, the archeologist who described the threat at the orc stronghold rushes up to you. He says he was waiting for you to come through so that he could give you one of the artifacts. He asks for you to meet him at his museum when you're ready to collect it.";
    }
    else{
        description.innerHTML = "You enter the human capitol again, in a bit of a rush to collect the remaining artifacts, and hopefully not be too late to stop the monster from escaping";
    }
    b1.innerHTML = "Elf Capitol";
    b2.innerHTML = "Dwarf Capitol";
    b3.innerHTML = "Museum";
    b4.innerHTML = "Trade Outpost";
    b1.addEventListener("click", ElfCity);
    b2.addEventListener("click", DwarfCap);
    b3.addEventListener("click", humCollect);
    b4.addEventListener("click", outpost);
}
function upgradeCheck(){
    if (Character.upgrade == 0){
        if (Character.race === "orc")
        {
            Character.damage = 15;
        }
        if (Character.race === "elf")
        {
            if (elfCount < 3)
            {
            Character.damage = 5;
            }
            else{
            Character.damage = 7;
            console.log("dmg up");
            }
        }
        if (Character.race === "human")
        {
            Character.damage = 9;
        }
        if (Character.race === "dwarf")
        {
            Character.damage = 12;
        }
    }
    else if (Character.upgrade == 1){
        if (Character.race === "orc")
        {
            Character.damage = 15 * 1.5;
        }
        if (Character.race === "elf")
        {
            if (elfCount < 3)
            {
            Character.damage = 5 * 1.5;
            }
            else{
                Character.damage = 7 * 1.5;
                console.log("dmg up");
                }
        }
        if (Character.race === "human")
        {
            Character.damage = 9 * 1.5;
        }
        if (Character.race === "dwarf")
        {
            Character.damage = 12 * 1.5;
        } 
    }
    inventory();
}
function stunCalc(){
    var stunchance = 0;
    if (Character.race == "orc"){
        stunChance = Math.floor(Math.random() * 3);
        if (stunChance == 0) //30% stun chance for orcs
        {  
            stun = true;
            console.log("stunned");
        }
        else
        {
            stun = false;
            console.log("not stunned");
        }
    }
    else if (Character.race == "dwarf"){
        stunChance = Math.floor(Math.random() * 4); //20% stun chance for dwarfs
        if (stunChance == 0)
        {
            stun = true;
        }
        else
        {
            stun = false;
        }
    }
    else if (Character.race == "human"){
            stun = false;
    }
    else if (Character.race == "elf"){
            stun = false;
    }
}
function turn(){
    removeListener();
    if (Character.health > 0 && Enemy.health > 0){
        stunCalc();
        upgradeCheck();   
        removeListener();
        header.innerHTML = `Vs. ${Enemy.name}`;
        if (turns == 0 && Character.race ==  "elf" && elfCount == 0){
            description.innerHTML = "You face off against your opponent and prepare to fight";
            Enemy.health -= Character.damage;
            turns++;
            elfCount++;
            console.log(1);
        }
        else if (turns == 0 && Character.race != "elf"){
            description.innerHTML = "You face off against your opponent and prepare to fight";
            Enemy.health -= Character.damage;
            Character.health -= Enemy.damage;
            turns++;
            console.log(2);
        }
        else if (turns > 0 && elfCount < 3 && Character.race == "elf"){
            Enemy.health -= Character.damage;
            description.innerHTML = `On turn ${turns}, you dealt ${Character.dealt} to ${Enemy.name}. ${Enemy.name} couldn't hit you because you kept your range. \nYou: ${Character.health} remaining
            \n${Enemy.name}: ${Enemy.health} remaining`;
            turns++;
            elfCount++;
            console.log(3);
        }
        else if (turns > 0){
            Character.health -= Enemy.damage;
            if (stun == true){
                description.innerHTML = `On turn ${turns}, you were stunned and dealt no damage. ${Enemy.name} dealt ${Enemy.damage} to you. <br>You: ${Character.health} remaining <br>${Enemy.name}: ${Enemy.health} remaining`;
            }
            else if (stun == false){
            Enemy.health -= Character.damage;
            description.innerHTML = `On turn ${turns}, you dealt ${Character.damage} to ${Enemy.name}. ${Enemy.name} dealt ${Enemy.damage} to you. <br>You: ${Character.health} health remaining
            <br>${Enemy.name}: ${Enemy.health} health remaining`;
            }
            turns++;
        }
        b1.innerHTML = "Continue";
        b2.innerHTML = "";
        b3.innerHTML = "";
        b4.innerHTML = "";
        b1.addEventListener("click", turn);
    }
    else if (Enemy.health <= 0){
        removeListener();
        header.innerHTML = "Victory";
        description.innerHTML = "You are victorious over your opponent "
        b1.innerHTML = "Continue";
        b2.innerHTML = "";
        b3.innerHTML = "";
        b4.innerHTML = "";
        b1.addEventListener("click", nextFunc);
    }
    else if (Character.health <= 0)
    {
        header.innerHTML = "Defeat";
        description.innerHTML = "You are defeated by your opponent "
        b1.innerHTML = "Continue";
        b2.innerHTML = "";
        b3.innerHTML = "";
        b4.innerHTML = "";
        b1.addEventListener("click", endScreen);
    }
}
function humCollect(){
        removeListener();
        header.innerHTML = "Human Capitol: Museum";
    if (Character.artifacts[1] == 0){
        Enemy.name = "mugger";
        Enemy.health = 100;
        Enemy.damage = 3;
        nextFunc = humCap;
        turns = 0;
        description.innerHTML = "The archaeologist goes to a small safe in the corner when you enter, and retrieves an artifact from it. He gives it to you and wishes you luck. Upon leaving the building, you are confronted by a mugger who demands the artifact. You prepare to defend yourself";
        
        Character.artifacts[1] = 1;
        inventory();
        console.log(Character.artifacts);
        b1.innerHTML = "Fight";
        b2.innerHTML = "";
        b3.innerHTML = "";
        b4.innerHTML = "";
        b1.addEventListener("click", turn);
    }
    else{
        description.innerHTML = "The curator has left the museum and it is empty, luckily you already have your artifact";
        b1.innerHTML = "Return to the Capitol";
        b2.innerHTML = "";
        b3.innerHTML = "";
        b4.innerHTML = "";
        b1.addEventListener("click", humCap);
    }
}
function ElfCity(){
    removeListener();
    header.innerHTML = "Elf Capitol";
    if (Character.artifacts[2] != 1){
        description.innerHTML = "The capitol of the elves seems to blend perfectly into the lush forest that surrounds it. The buildings are all crafted of finely carved wood with the exception of the capitol building itself which is a large marble hall, coverered in ivy and flowers.";
    }
    else{
        description.innerHTML = "Upon reentering the capitol of the elves, you are met by several guards who explain that they have been given orders to supply you with provisions for the rest of your quest. Upon taking what you need you prepare to leave.";
    }
    b1.innerHTML = "Orc Stronghold";
    b2.innerHTML = "Human Capitol";
    b3.innerHTML = "Elven Treasury";
    b4.innerHTML = "";
    b1.addEventListener("click", stronghold);
    b2.addEventListener("click", humCap);
    b3.addEventListener("click", elfCollect);
}
function elfCollect(){
    removeListener();
    header.innerHTML = "Elven treasury";
    if (Character.artifacts[2] != 1)
    {
        description.innerHTML = "You enter the elven treasury and talk to the elf running the treasury. He gives you an artifact, explaining he had been instructed to give it to you when you came";
        Character.artifacts[2] = 1;
        inventory();
        console.log(Character.artifacts);

    }
    else if (Character.artifacts[2] == 1){
        description.innerHTML = "The room is empty, you have already collected the artifact here, time to leave";
    }
    b1.innerHTML = "Return to the main capitol";
    b2.innerHTML = "";
    b3.innerHTML = "";
    b4.innerHTML = "";
    b1.addEventListener("click", ElfCity);

}
function toBoss(){
    removeListener();
    Enemy.name = "Golem of Terror";
    Enemy.hp = 100;
    Enemy.damage = 10;
    nextFunc = victory;
    turns = 0;
    elfCount = 0;
    header.innerHTML = "Final Boss: <br> The monster stands in your path, frozen by a field of energy. It's glowing eyes glare down at you while its stony figure stands in front of you. Massive boulders make up its body, each suspended several feet apart by glowing orange energy."
    if (Character.artifacts == [1, 1, 1])
    {
        description.innerHTML = "Without the artifacts in your posession, you are immediatly killed by the monster. Your presence without the ability to defeat him released the spell binding him, and he rampages through the land, destroying everything in his path.";
        b1.innerHTML = "Defeat";
        b2.innerHTML = "";
        b3.innerHTML = "";
        b4.innerHTML = "";
        b1.addEventListener("click", endScreen);
    }
    else if (Character.artifacts != [1, 1, 1])
    {
        description.innerHTML = "You raise the artifacts and shout. A blinding light flashes between the golem and the artifacts. Massive amounts of orange energy flow from the monster into the artifacts, and the monster shrinks down, until it is only the size of an average Orc."
        b1.innerHTML = "Attack";
        b2.innerHTML = "";
        b3.innerHTML = "";
        b4.innerHTML = "";
        b1.addEventListener("click", turn);
    }
}
function end(){
    header.innerHTML = "The End";
    description.innerHTML = "The council adjourns, and a young elf warrior has volunteered to undertake the task, you hope that he succeeds.";
    b1.innerHTML = "";
    b2.innerHTML = "";
    b3.innerHTML = "";
    b4.innerHTML = "";
}

GameStart();
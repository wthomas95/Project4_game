//paths for main world between areas
const paths = [
    //Human Capitol Paths
    "Capitol-HEV",
    "Capitol-CC",
    "Capitol-DTOW",
    "Capitol-DC",
    //Dwarf Capitol Paths
    "DC-DTOW",
    "DC-DTOE",
    //DTOW (Dwarf Trade Oupost West) Paths
    "DTOW-CC",
    //HEV (Human/Elf Village) Paths
    "HEV-CC",
    "HEV-EC",
    //EC (Elf Capitol) Paths
    "EC, OC",
    "EC-ECH",
    //OC (Orc City) Paths
    "OC-DTOW",
    "OC-ECH"
];

    //player gen info
    var level = 0;
    var exp = 0; //experience obtained
    var expreq = 0; //experience required to level up
    var health = 100; //hit points
    //race
    var orc = 0;
    var elf = 0;
    var dwarf = 0;
    var human = 0;
    //stats
    var baseStrength = 3;
    var basePerception = 3;
    var baseEndurance = 3;
    var baseCharisma = 3;
    var baseIntelligence = 3;
    var baseAgility = 3;
    var baseLuck = 3;
    //skills
    var oneHanded = 15;
    var twoHanded = 15;
    var archery = 15;
    var survival = 15;
    var speech = 15;
    var stealth = 15;
    var magic = 15;
    //inventory
    var inventory = new list([]);

function CharSetup()
{
    var orc = 0;
    var elf = 0;
    var dwarf = 0;
    var human = 0;

    //choose race
    function racePick()
    {
        var choice = 0;
        //ask for user choice
        //get user choice
        if (choice == 1)
        {
            orc = 1;
        }
        else if (choice == 2)
        {
            elf = 1;
        }
        else if (choice == 3)
        {
            dwarf = 1;
        }
        else if (choice == 4)
        {
            human = 1;
        }
        return orc;
        return elf;
        return dwarf;
        return human;
    }

    //race impacts stats
    //a humans base stats will all be 5
    if (orc === 1) //orcs benefit from large stat increases in some areas, and suffer from large decreases in others
    {
        baseStrength += 2;
        baseEndurance += 2;
        baseIntelligence -= 2;
        baseCharisma -= 2;
    }
    else if (dwarf === 1)//dwarfs have minor stat changes
    {
        baseEndurance += 2;
        baseAgility -= 2;
    }
    else if(elf === 1) //elfs have the same magnitude of changes as orcs, but reversed
    {
        baseStrength -= 2;
        baseEndurance -= 2;
        baseIntelligence += 2;
        baseCharisma += 2;
    }

    //stats
    //base stats cap at 7
    function statPick()
    {
        //display current base stats, and allow user to distribute 7 points through out
        return baseStrength;
        return basePerception;
        return baseEndurance;
        return baseCharisma;
        return baseIntelligence;
        return baseAgility;
        return baseLuck;
    }


    //skills
    //all stats are defaulted to 15
    var oneHanded = 15;
    var twoHanded = 15;
    var archery = 15;
    var survival = 15;
    var speech = 15;
    var stealth = 15;
    var magic = 15;
    //skills cap at 70
    //skills can be improved in game

    //stat modifiers
    //each stat slightly modifies a skill
    var relStrength = [oneHanded, twoHanded, survival];
    var relPerception = [magic, archery, stealth];
    var relEndurance = [survival, magic, twoHanded, health];
    var relCharisma = [speech, magic];
    var relIntelligence = [archery, magic, survival];
    var relAgility = [oneHanded, stealth, archery];
    var relLuck = [oneHanded, twoHanded, archery, survival, speech, stealth, magic];

    function statsToSkills(relStrength, relPerception, relEndurance, relCharisma, relIntelligence, relAgility, relLuck){
        //each point in a stat give + 3 to its relavent skills with two exceptions
        for(var i = 0; i < baseStrength; i++)
        {
            relStrength = [oneHanded += 3, twoHanded += 3, survival += 3, health +=5];
        }
        //ex. a character with a baseStrength of 6 would get a +18 in all of the relative strength stats
        for(var i = 0; i < basePerception; i++)
        {
            relPerception = [magic += 3, archery += 3, stealth += 3];
        }
        for(var i = 0; i < baseEndurance; i++)
        {
            var relEndurance = [survival += 3, magic += 3, twoHanded += 3];
        }
        //a point in charisma give plus 6 to speech
        for(var i = 0; i < baseCharisma; i++)
        {
            var relCharisma = [speech += 6, magic += 3];
        }
        //a character with 6 in charis
        for(var i = 0; i < baseIntelligence; i++)
        {
            var relIntelligence = [archery += 3, magic += 3, survival += 3];
        }
        for(var i = 0; i < baseAgility; i++)
        {
            var relAgility = [oneHanded += 3, stealth +=3, archery+=3];
        }
        //each point in luck gives an extra point in all stats
        for(var i = 0; i < baseLuck; i++)
        {
            var relLuck = [oneHande++, twoHanded++, archery++, survival++, speech++, stealth++, magic++];
        }
    }//statsToSkills
}//char set up

//inventory
var gameOver = 0;
var weapon = "";
var artifacts = 0;

var enemyWeapon = "";
var enemyHealth = 100;
var bowupgrade = 0;
var saberupgrade = 0;
var axeupgrade = 0;
var hammerupgrade = 0;

function gameinit(){
    if (orc === 1)
    {
        //orc start
        weapon = "warhammer";
    }
    else if (elf === 1)
    {
        //elf start
        weapon = "bow";
    }
    else if (human === 1)
    {
        //human start
        weapon = "saber";
    }
    else if (dwarf === 1)
    {
        //dwarf start
        weapon = "battleaxe"
    }
}
function damagecalc(weapon){
    var damage = 0;
    var stun = 0;
    if (weapon === "bow" && bowupgrade === 0)
    {
        //default elf weapon
        //deny two turns for enemy from 'range'
        if(enemyweapon != bow)
        {
            for(var i = 0; i > 2; i++)
            {
                damage = 5 * (.7 * archery);
            }
            damage = 4 * (.7 * onehanded);
        }
        else 
        {
            damage = 5 * (.7 * archery);       
        }
    }
    if (weapon === "bow" && bowupgrade === 1)
    {
        //default elf weapon
        //deny two turns for enemy from 'range'
        if(enemyweapon != bow)
        {
            for(var i = 0; i > 2; i++)
            {
                damage = 8 * (.7 * archery);
            }
            damage = 5 * (.7 * onehanded);
        }
        else 
        {
            damage = 8 * (.7 * archery);       
        }
    }
    else if (weapon === "battleAxe" && axeupgrade === 0)
    {
        //default dwarf weapon
        //20% chance to have to skip next turn
        damage = 12 * (.7 * twohanded);
        var stunChance = math.Random (1, 5);
        if (stunChance === 1)
        {
            stun = 1;
        }
    }
    else if (weapon === "battleAxe" && axeupgrade === 1)
    {
        //default dwarf weapon
        //20% chance to have to skip next turn
        damage = 18 * (.7 * twohanded);
        var stunChance = math.Random (1, 5);
        if (stunChance === 1)
        {
            stun = 1;
        }
    }
    else if (weapon === "saber" && saberupgrade === 0)
    {
        //default human weapon
        damage = 7 * (.7 * onehanded);
    }
    else if (weapon === "saber" && saberupgrade === 1)
    {
        damage = 10 * (.7 * onehanded);
    }
    else if (weapon === "warhammer" && hammerupgrade === 0)
    {
        //30% chance to have to skip next turn
        damage = 15 * (.7 * twohanded);
        var stunChance = math.Random (1, 4);
        if (stunChance === 1)
        {
            stun = 1;
        }
    }
    else if (weapon === "warhammer" && hammerupgrade === 1)
    {
        //30% chance to have to skip next turn
        damage = 20 * (.7 * twohanded);
        var stunChance = math.Random (1, 4);
        if (stunChance === 1)
        {
            stun = 1;
        }
    }
    return damage;
    return stun;
}

function combat(enemyDamage, enemyHealth, health, weapon){
    while (health > 0 && enemyHealth > 0)
    {
        run damagecalc(weapon);
        //display your health and enemy health
        //ASK USER TO SELECT LIGHT OR HEAVY ATTACK
        //light attack does normal damage and is guaranteed to hit unless stunned
        //heavy attack does 30% more damage, but gives a 20% chance to miss
        var h = 0;
        var l = 0;
        var lohe = Math.Random(1, 11);
        if (l === 1)
        {
            enemyHealth = enemyHealth - damage;
        }
        if (h === 1)
        {
            var hit = Math.Random(1, 6);
            if (hit === 1)
            {
                //tell them they missed
                enemyHealth = enemyHealth;
            }
            else{
                enemyHealth = enemyHealth - (damage * 1.3)
            }
        }
        if (health <= 0)
        {
            gameOver = 1;
        }
    }
    
}

var location = "";

if (location === "HC") //LOCATION IS HUMAN CAPITOL
{
    
}
else if (location === "DC")//LOCATION IS DWARF CAPITOL
{

}
else if (location === "DTOW")//LOCATION IS TRADE POST WEST
{

}
else if (location === "HCC")//LOCATION IS COAST CITY
{

}
else if (location === "HEV")//LOCATION IS HUMAN/ELF VILLAGE
{

}
else if (location === "EC")//LOCATION IS ELF CITY
{

}
else if (location === "ECH")//LOCATION IS ELF COHABITATION 
{

}
else if (location === "OC")//LOCATION IS ORC CITY
{

}
else if (location === "DTOE")//LOCATION IS TRADE POST EAST
{

}
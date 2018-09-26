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

function CharSetup()
{
    //player gen info
    var level = 0;
    var exp = 0;
    var expreq = 0;
    var health = 100;
    //race
    var orc = 0;
    var elf = 0;
    var dwarf = 0;
    var human = 0;

    //choose race


    //stats
    var baseStrength = 0;
    var basePerception = 0;
    var baseEndurance = 0;
    var baseCharisma = 0;
    var baseIntelligence = 0;
    var baseAgility = 0;
    var baseLuck = 0;

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
    //base stats cap at 7

    //skills
    //all stats are defaulted to 15
    var oneHanded = 15;
    var twoHanded = 15;
    var archery = 15;
    var survival = 15;
    var speech = 15;
    var stealth = 15;
    var magic = 15;
    //skills cap at 100
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


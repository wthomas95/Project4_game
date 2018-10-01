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
    var orc = 0; //orcs use a hammer with extremely high damage, but medium chance to miss
    var elf = 0; //elfs use a bow with lower damage, but two free attacks before enemies can close distance
    var dwarf = 0; //dwarfs use a battleaxe with high damage, but a low chance to miss
    var human = 0; //humans use a sword with average damage
    
    var tutorial = 0;

function CharSetup()
{
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

}//char set up

//inventory
var gameOver = 0;
var lives = 5;
var bow = 0;
var saber = 0;
var hammer = 0;
var axe = 0;
var artifacts = 0;

var enemydamage = 0;
var enemyHealth = 100;
var bowupgrade = 0;
var saberupgrade = 0;
var axeupgrade = 0;
var hammerupgrade = 0;
var pickup = "";

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
    location = "OC";
    while (gameOver === 0)
    {
        function damagecalc(bow, saber, axe, hammer){
            var damage = 0;
            if (bow = 1 && bowupgrade === 0)
            {
                //default elf weapon
                damage = 5;
            }
            if (bow === 1 && bowupgrade === 1)
            {
                damage = 8;
            }
            else if (axe = true && axeupgrade === 0)
            {
                //default dwarf weapon
                damage = 10;
            }
            else if (axe === true && axeupgrade === 1)
            {
                damage = 15;
            }
            else if (saber === true && saberupgrade === 0)
            {
                //default human weapon
                damage = 7;
            }
            else if (saber === true && saberupgrade === 1)
            {
                damage = 11;
            }
            else if (hammer === true && hammerupgrade === 0)
            {
                damage = 13;
            }
            else if (hammer === true && hammerupgrade === 1)
            {
                damage = 18;
            }
            return damage;
        }
        
        function combat(enemydamage, enemyHealth, health){
            while (health > 0 && enemyHealth > 0)
            {
                reset = 0;
                var damage1 = damagecalc(bow, saber, axe, hammer);
                //calculating light/heavy attacks
                //ask user to pick  light or heavy attack
                var l = 0;//light attack
                var h = 0;//heavy attack
                var eMissCalc = 0;
                var eMiss = 0;
                var missCalc = 0;
                var miss = 0;
                if (l === 1)
                {
                    damage1 = damage1;
                }
                else if(h === 1)
                {
                    //heavy attack does 30% more damage with a 15% chance to miss
                    missCalc = Math.random(1, 101);
                    if (missCalc <= 15)
                    {
                        miss = 1;
                    }
                    else{
                        damage1 = damage1 * 1.03
                    }
                }
        
                //determining if an axe or hammer attack will miss
                if (axe === 1)
                {
                    //20% for axe to miss
                    missCalc = Math.random(1, 6);
                    if (missCalc === 1)
                    {
                        miss = 1;
                    }
                }
                else if (hammer === 1)
                {
                    //25% for hammer to miss
                    missCalc = Math.random(1, 5);
                    if (missCalc === 1)
                    {
                        miss = 1;
                    }
                }
        
                //dealing damage
                if (miss === 1)
                {
                    //you missed and did no damage
                    damage1 = 0;
                }
                else if (miss === 0){
                    //you hit and did damage
                    enemyHealth = enemyHealth - damage1;
                }
                //calculate if the enemy did damage
                //enemy will always have 20% chance to miss
                eMissCalc = Math.random(1, 6);
                if (eMissCalc === 1)
                {
                    eMiss = 1;
                    enemydamage = 0;
                }
                else{
                    health = health - enemydamage;
                }
                if (enemyHealth <= 0)
                {
                    health = 100;
                    //you win
                    return reset;
                    break;
                }
                if (health <= 0)
                {
                    reset = 1;
                    heath = 100;
                    lives--;
                    return reset;
                    break;
                }
                if (lives === 0)
                {
                    gameOver = 1;
                    break;
                }
            }
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
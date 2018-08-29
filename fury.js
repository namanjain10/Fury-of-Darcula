var chance = 0;

var ADRIATIC_SEA = 0
var ALICANTE = 1
var AMSTERDAM = 2
var ATHENS = 3
var ATLANTIC_OCEAN =   4
var BARCELONA = 5
var BARI =     6
var BAY_OF_BISCAY =    7
var BELGRADE = 8
var BERLIN = 9
var BLACK_SEA = 10
var BORDEAUX =      11
var BRUSSELS =      12
var BUCHAREST =     13
var BUDAPEST =      14
var CADIZ =         15
var CAGLIARI =      16
var CASTLE_DRACULA =17
var CLERMONT_FERRAND   =     18
var COLOGNE =       19
var CONSTANTA =     20
var DUBLIN =        21
var EDINBURGH =     22
var ENGLISH_CHANNEL     =    23
var FLORENCE =      24
var FRANKFURT =     25
var GALATZ =        26
var GALWAY =        27
var GENEVA =        28
var GENOA =         29
var GRANADA =       30
var HAMBURG =       31
var IONIAN_SEA =    32
var IRISH_SEA =     33
var KLAUSENBURG =   34
var LE_HAVRE =      36
var LEIPZIG =       35
var LISBON =        37
var LIVERPOOL =     38
var LONDON =        39
var MADRID =        40
var MANCHESTER =    41
var MARSEILLES =    42
var MEDITERRANEAN_SEA    =   43
var MILAN =         44
var MUNICH =        45
var NANTES =        46
var NAPLES =        47
var NORTH_SEA =     48
var NUREMBURG =     49
var PARIS =         50
var PLYMOUTH =      51
var PRAGUE =        52
var ROME =          53
var SALONICA =      54
var SANTANDER =     55
var SARAGOSSA =     56
var SARAJEVO =      57
var SOFIA =         58
var ST_JOSEPH_AND_ST_MARYS  = 60
var STRASBOURG =    59
var SWANSEA =       61
var SZEGED =        62
var TOULOUSE =      63
var TYRRHENIAN_SEA =64
var VALONA =        65
var VARNA =         66
var VENICE =        67
var VIENNA =        68
var ZAGREB =        69
var ZURICH =        70

var NONE      =               0
var ROAD       =              1
var RAIL        =             2
var BOAT         =            3
var ANY           =           4

var place = [{x:"459px",y:"227px",name:'AMSTERDAM'},
            {x:"405px",y:"352px",name:'PARIS'},
            {x:"283px",y:"369px",name:'NANTES'},
            {x:"368px",y:"240px",name:'LONDON'},
            {x:"76px",y:"574px",name:'LISBON'},
            {x:"356px",y:"564px",name:'BARCELONA'},
            {x:"742px",y:"635px",name:'BARI'},
            {x:"893px",y:"488px",name:'BUCHAREST'},
            {x:"890px",y:"365px",name:'CASTLE_DRACULA'},
            {x:"204px",y:"571px",name:'MADRID'},
            {x:"136px",y:"668px",name:'CADIZ'},
            {x:"515px",y:"659px",name:'CAGLIARI'},
            {x:"333px",y:"78px",name:'EDINBURGH'},
            {x:"215px",y:"469px",name:'SANTANDER'},
            {x:"205px",y:"651px",name:'GRANADA'},
            {x:"284px",y:"636px",name:'ALICANTE'},
            {x:"274px",y:"538px",name:'SARAGOSSA'},
            {x:"344px",y:"497px",name:'TOULOUSE'},
            {x:"296px",y:"438px",name:'BORDEAUX'},
            {x:"444px",y:"525px",name:'MARSEILLES'},
            {x:"386px",y:"429px",name:'CLERMONT_FERRAND'},
            {x:"454px",y:"426px",name:'GENEVA'},
            {x:"351px",y:"307px",name:'LE_HAVRE'},
            {x:"436px",y:"297px",name:'BRUSSELS'},
            {x:"482px",y:"343px",name:'STRASBOURG'},
            {x:"495px",y:"268px",name:'COLOGNE'},
            {x:"512px",y:"392px",name:'ZURICH'},
            {x:"514px",y:"439px",name:'MILAN'},
            {x:"521px",y:"502px",name:'GENOA'},
            {x:"531px",y:"200px",name:'HAMBURG'},
            {x:"536px",y:"303px",name:'FRANKFURT'},
            {x:"592px",y:"280px",name:'LEIPZIG'},
            {x:"571px",y:"345px",name:'NUREMBURG'},
            {x:"582px",y:"522px",name:'FLORENCE'},
            {x:"587px",y:"577px",name:'ROME'},
            {x:"639px",y:"231px",name:'BERLIN'},
            {x:"611px",y:"413px",name:'MUNICH'},
            {x:"607px",y:"473px",name:'VENICE'},
            {x:"646px",y:"617px",name:'NAPLES'},
            {x:"671px",y:"317px",name:'PRAGUE'},
            {x:"676px",y:"458px",name:'ZAGREB'},
            {x:"705px",y:"388px",name:'VIENNA'},
            {x:"724px",y:"478px",name:'ST_JOSEPH_AND_ST_MARYS'},
            {x:"745px",y:"535px",name:'SARAJEVO'},
            {x:"803px",y:"666px",name:'VALONA'},
            {x:"808px",y:"491px",name:'BELGRADE'},
            {x:"764px",y:"445px",name:'SZEGED'},
            {x:"846px",y:"408px",name:'KLAUSENBURG'},
            {x:"868px",y:"546px",name:'SOFIA'},
            {x:"870px",y:"621px",name:'SALONICA'},
            {x:"891px",y:"699px",name:'ATHENS'},
            {x:"936px",y:"406px",name:'GALATZ'},
            {x:"978px",y:"465px",name:'CONSTANTA'},
            {x:"964px",y:"548px",name:'VARNA'},
            {x:"150px",y:"125px",name:'GALWAY'},
            {x:"217px",y:"153px",name:'DUBLIN'},
            {x:"280px",y:"160px",name:'LIVERPOOL'},
            {x:"266px",y:"254px",name:'PLYMOUTH'},
            {x:"331px",y:"144px",name:'MANCHESTER'},
            {x:"272px",y:"212px",name:'SWANSEA'},
            {x:"776px",y:"390px",name:'BUDAPEST'},
            {x:"401px",y:"663px",name:'MEDITERRANEAN_SEA'},
            {x:"590,px",y:"657px",name:'TYRRHENIAN_SEA'},
            {x:"88,px",y:"328px",name:'ATLANTIC_OCEAN'},
            {x:"759,px",y:"720px",name:'IONIAN_SEA'},
            {x:"1014px",y:"450px",name:'BLACK_SEA'},
            {x:"461,px",y:"126px",name:'NORTH_SEA'},
            {x:"215px",y:"409px",name:'BAY_OF_BISCAY'},
            {x:"693px",y:"565px",name:'ADRIATIC_SEA'},
            {x:"187px",y:"203px",name:'IRISH_SEA'},
            {x:"311px",y:"278px",name:'ENGLISH_CHANNEL'}];

var iMax = 71;
var jMax = 71;
var g = new Array();

for (i=0;i<iMax;i++) {
    g[i] = new Array();
        for (j=0;j<jMax;j++) {
            g[i][j] = 0;
    }
}

function addLink (g, p1, p2, mode) {
    g[p1][p2] = mode;
    g[p2][p1] = mode;
}

//### RAIL Connections ###

addLink(g, ALICANTE, BARCELONA, RAIL);
addLink(g, ALICANTE, MADRID, RAIL);
addLink(g, BARCELONA, SARAGOSSA, RAIL);
addLink(g, BARI, NAPLES, RAIL);
addLink(g, BELGRADE, SOFIA, RAIL);
addLink(g, BELGRADE, SZEGED, RAIL);
addLink(g, BERLIN, HAMBURG, RAIL);
addLink(g, BERLIN, LEIPZIG, RAIL);
addLink(g, BERLIN, PRAGUE, RAIL);
addLink(g, BORDEAUX, PARIS, RAIL);
addLink(g, BORDEAUX, SARAGOSSA, RAIL);
addLink(g, BRUSSELS, COLOGNE, RAIL);
addLink(g, BRUSSELS, PARIS, RAIL);
addLink(g, BUCHAREST, CONSTANTA, RAIL);
addLink(g, BUCHAREST, GALATZ, RAIL);
addLink(g, BUCHAREST, SZEGED, RAIL);
addLink(g, BUDAPEST, SZEGED, RAIL);
addLink(g, BUDAPEST, VIENNA, RAIL);
addLink(g, COLOGNE, FRANKFURT, RAIL);
addLink(g, EDINBURGH, MANCHESTER, RAIL);
addLink(g, FLORENCE, MILAN, RAIL);
addLink(g, FLORENCE, ROME, RAIL);
addLink(g, FRANKFURT, LEIPZIG, RAIL);
addLink(g, FRANKFURT, STRASBOURG, RAIL);
addLink(g, GENEVA, MILAN, RAIL);
addLink(g, GENOA, MILAN, RAIL);
addLink(g, LEIPZIG, NUREMBURG, RAIL);
addLink(g, LE_HAVRE, PARIS, RAIL);
addLink(g, LISBON, MADRID, RAIL);
addLink(g, LIVERPOOL, MANCHESTER, RAIL);
addLink(g, LONDON, MANCHESTER, RAIL);
addLink(g, LONDON, SWANSEA, RAIL);
addLink(g, MADRID, SANTANDER, RAIL);
addLink(g, MADRID, SARAGOSSA, RAIL);
addLink(g, MARSEILLES, PARIS, RAIL);
addLink(g, MILAN, ZURICH, RAIL);
addLink(g, MUNICH, NUREMBURG, RAIL);
addLink(g, NAPLES, ROME, RAIL);
addLink(g, PRAGUE, VIENNA, RAIL);
addLink(g, SALONICA, SOFIA, RAIL);
addLink(g, SOFIA, VARNA, RAIL);
addLink(g, STRASBOURG, ZURICH, RAIL);
addLink(g, VENICE, VIENNA, RAIL);


addLink(g, ALICANTE, GRANADA, ROAD);
addLink(g, ALICANTE, MADRID, ROAD);
addLink(g, ALICANTE, SARAGOSSA, ROAD);
addLink(g, AMSTERDAM, BRUSSELS, ROAD);
addLink(g, AMSTERDAM, COLOGNE, ROAD);
addLink(g, ATHENS, VALONA, ROAD);
addLink(g, BARCELONA, SARAGOSSA, ROAD);
addLink(g, BARCELONA, TOULOUSE, ROAD);
addLink(g, BARI, NAPLES, ROAD);
addLink(g, BARI, ROME, ROAD);
addLink(g, BELGRADE, BUCHAREST, ROAD);
addLink(g, BELGRADE, KLAUSENBURG, ROAD);
addLink(g, BELGRADE, SARAJEVO, ROAD);
addLink(g, BELGRADE, SOFIA, ROAD);
addLink(g, BELGRADE, ST_JOSEPH_AND_ST_MARYS, ROAD);
addLink(g, BELGRADE, SZEGED, ROAD);
addLink(g, BERLIN, HAMBURG, ROAD);
addLink(g, BERLIN, LEIPZIG, ROAD);
addLink(g, BERLIN, PRAGUE, ROAD);
addLink(g, BORDEAUX, CLERMONT_FERRAND, ROAD);
addLink(g, BORDEAUX, NANTES, ROAD);
addLink(g, BORDEAUX, SARAGOSSA, ROAD);
addLink(g, BORDEAUX, TOULOUSE, ROAD);
addLink(g, BRUSSELS, COLOGNE, ROAD);
addLink(g, BRUSSELS, LE_HAVRE, ROAD);
addLink(g, BRUSSELS, PARIS, ROAD);
addLink(g, BRUSSELS, STRASBOURG, ROAD);
addLink(g, BUCHAREST, CONSTANTA, ROAD);
addLink(g, BUCHAREST, GALATZ, ROAD);
addLink(g, BUCHAREST, KLAUSENBURG, ROAD);
addLink(g, BUCHAREST, SOFIA, ROAD);
addLink(g, BUDAPEST, KLAUSENBURG, ROAD);
addLink(g, BUDAPEST, SZEGED, ROAD);
addLink(g, BUDAPEST, VIENNA, ROAD);
addLink(g, BUDAPEST, ZAGREB, ROAD);
addLink(g, CADIZ, GRANADA, ROAD);
addLink(g, CADIZ, LISBON, ROAD);
addLink(g, CADIZ, MADRID, ROAD);
addLink(g, CASTLE_DRACULA, GALATZ, ROAD);
addLink(g, CASTLE_DRACULA, KLAUSENBURG, ROAD);
addLink(g, CLERMONT_FERRAND, GENEVA, ROAD);
addLink(g, CLERMONT_FERRAND, MARSEILLES, ROAD);
addLink(g, CLERMONT_FERRAND, NANTES, ROAD);
addLink(g, CLERMONT_FERRAND, PARIS, ROAD);
addLink(g, CLERMONT_FERRAND, TOULOUSE, ROAD);
addLink(g, COLOGNE, FRANKFURT, ROAD);
addLink(g, COLOGNE, HAMBURG, ROAD);
addLink(g, COLOGNE, LEIPZIG, ROAD);
addLink(g, COLOGNE, STRASBOURG, ROAD);
addLink(g, CONSTANTA, GALATZ, ROAD);
addLink(g, CONSTANTA, VARNA, ROAD);
addLink(g, DUBLIN, GALWAY, ROAD);
addLink(g, EDINBURGH, MANCHESTER, ROAD);
addLink(g, FLORENCE, GENOA, ROAD);
addLink(g, FLORENCE, ROME, ROAD);
addLink(g, FLORENCE, VENICE, ROAD);
addLink(g, FRANKFURT, LEIPZIG, ROAD);
addLink(g, FRANKFURT, NUREMBURG, ROAD);
addLink(g, FRANKFURT, STRASBOURG, ROAD);
addLink(g, GALATZ, KLAUSENBURG, ROAD);
addLink(g, GENEVA, MARSEILLES, ROAD);
addLink(g, GENEVA, PARIS, ROAD);
addLink(g, GENEVA, STRASBOURG, ROAD);
addLink(g, GENEVA, ZURICH, ROAD);
addLink(g, GENOA, MARSEILLES, ROAD);
addLink(g, GENOA, MILAN, ROAD);
addLink(g, GENOA, VENICE, ROAD);
addLink(g, GRANADA, MADRID, ROAD);
addLink(g, HAMBURG, LEIPZIG, ROAD);
addLink(g, KLAUSENBURG, SZEGED, ROAD);
addLink(g, LEIPZIG, NUREMBURG, ROAD);
addLink(g, LE_HAVRE, NANTES, ROAD);
addLink(g, LE_HAVRE, PARIS, ROAD);
addLink(g, LISBON, MADRID, ROAD);
addLink(g, LISBON, SANTANDER, ROAD);
addLink(g, LIVERPOOL, MANCHESTER, ROAD);
addLink(g, LIVERPOOL, SWANSEA, ROAD);
addLink(g, LONDON, MANCHESTER, ROAD);
addLink(g, LONDON, PLYMOUTH, ROAD);
addLink(g, LONDON, SWANSEA, ROAD);
addLink(g, MADRID, SANTANDER, ROAD);
addLink(g, MADRID, SARAGOSSA, ROAD);
addLink(g, MARSEILLES, MILAN, ROAD);
addLink(g, MARSEILLES, TOULOUSE, ROAD);
addLink(g, MARSEILLES, ZURICH, ROAD);
addLink(g, MILAN, MUNICH, ROAD);
addLink(g, MILAN, VENICE, ROAD);
addLink(g, MILAN, ZURICH, ROAD);
addLink(g, MUNICH, NUREMBURG, ROAD);
addLink(g, MUNICH, STRASBOURG, ROAD);
addLink(g, MUNICH, VENICE, ROAD);
addLink(g, MUNICH, VIENNA, ROAD);
addLink(g, MUNICH, ZAGREB, ROAD);
addLink(g, MUNICH, ZURICH, ROAD);
addLink(g, NANTES, PARIS, ROAD);
addLink(g, NAPLES, ROME, ROAD);
addLink(g, NUREMBURG, PRAGUE, ROAD);
addLink(g, NUREMBURG, STRASBOURG, ROAD);
addLink(g, PARIS, STRASBOURG, ROAD);
addLink(g, PRAGUE, VIENNA, ROAD);
addLink(g, SALONICA, SOFIA, ROAD);
addLink(g, SALONICA, VALONA, ROAD);
addLink(g, SANTANDER, SARAGOSSA, ROAD);
addLink(g, SARAGOSSA, TOULOUSE, ROAD);
addLink(g, SARAJEVO, SOFIA, ROAD);
addLink(g, SARAJEVO, ST_JOSEPH_AND_ST_MARYS, ROAD);
addLink(g, SARAJEVO, VALONA, ROAD);
addLink(g, SARAJEVO, ZAGREB, ROAD);
addLink(g, SOFIA, VALONA, ROAD);
addLink(g, SOFIA, VARNA, ROAD);
addLink(g, STRASBOURG, ZURICH, ROAD);
addLink(g, ST_JOSEPH_AND_ST_MARYS, SZEGED, ROAD);
addLink(g, ST_JOSEPH_AND_ST_MARYS, ZAGREB, ROAD);
addLink(g, SZEGED, ZAGREB, ROAD);
addLink(g, VIENNA, ZAGREB, ROAD);


//### BOAT Connections ###

addLink(g, ADRIATIC_SEA, BARI, BOAT);
addLink(g, ADRIATIC_SEA, IONIAN_SEA, BOAT);
addLink(g, ADRIATIC_SEA, VENICE, BOAT);
addLink(g, ALICANTE, MEDITERRANEAN_SEA, BOAT);
addLink(g, AMSTERDAM, NORTH_SEA, BOAT);
addLink(g, ATHENS, IONIAN_SEA, BOAT);
addLink(g, ATLANTIC_OCEAN, BAY_OF_BISCAY, BOAT);
addLink(g, ATLANTIC_OCEAN, CADIZ, BOAT);
addLink(g, ATLANTIC_OCEAN, ENGLISH_CHANNEL, BOAT);
addLink(g, ATLANTIC_OCEAN, GALWAY, BOAT);
addLink(g, ATLANTIC_OCEAN, IRISH_SEA, BOAT);
addLink(g, ATLANTIC_OCEAN, LISBON, BOAT);
addLink(g, ATLANTIC_OCEAN, MEDITERRANEAN_SEA, BOAT);
addLink(g, ATLANTIC_OCEAN, NORTH_SEA, BOAT);
addLink(g, BARCELONA, MEDITERRANEAN_SEA, BOAT);
addLink(g, BAY_OF_BISCAY, BORDEAUX, BOAT);
addLink(g, BAY_OF_BISCAY, NANTES, BOAT);
addLink(g, BAY_OF_BISCAY, SANTANDER, BOAT);
addLink(g, BLACK_SEA, CONSTANTA, BOAT);
addLink(g, BLACK_SEA, IONIAN_SEA, BOAT);
addLink(g, BLACK_SEA, VARNA, BOAT);
addLink(g, CAGLIARI, MEDITERRANEAN_SEA, BOAT);
addLink(g, CAGLIARI, TYRRHENIAN_SEA, BOAT);
addLink(g, DUBLIN, IRISH_SEA, BOAT);
addLink(g, EDINBURGH, NORTH_SEA, BOAT);
addLink(g, ENGLISH_CHANNEL, LE_HAVRE, BOAT);
addLink(g, ENGLISH_CHANNEL, LONDON, BOAT);
addLink(g, ENGLISH_CHANNEL, NORTH_SEA, BOAT);
addLink(g, ENGLISH_CHANNEL, PLYMOUTH, BOAT);
addLink(g, GENOA, TYRRHENIAN_SEA, BOAT);
addLink(g, HAMBURG, NORTH_SEA, BOAT);
addLink(g, IONIAN_SEA, SALONICA, BOAT);
addLink(g, IONIAN_SEA, TYRRHENIAN_SEA, BOAT);
addLink(g, IONIAN_SEA, VALONA, BOAT);
addLink(g, IRISH_SEA, LIVERPOOL, BOAT);
addLink(g, IRISH_SEA, SWANSEA, BOAT);
addLink(g, MARSEILLES, MEDITERRANEAN_SEA, BOAT);
addLink(g, MEDITERRANEAN_SEA, TYRRHENIAN_SEA, BOAT);
addLink(g, NAPLES, TYRRHENIAN_SEA, BOAT);
addLink(g, ROME, TYRRHENIAN_SEA, BOAT);


var player = [
    {name : "godalming",location:'', location_coord : ''},
    {name : "seward",location:'', location_coord : ''},
    {name : "helsing",location:'', location_coord : ''},
    {name : "mina",location:'', location_coord : ''},
    {name : "dracula", location_coord : ''}
]
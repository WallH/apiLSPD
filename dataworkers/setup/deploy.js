const UsuarioDataWorker = require("../usuario.dataworker");
const RangoDataWorker = require("../rango.dataworker");
const AccionesDataWorker = require("../acciones.dataworker");
const PermisosDataWorker = require("../permisos.dataworker");
const PermisosEndpointDataWorker = require("../permisosendpoint.dataworker");

const installed = true;

exports.installApp = async()=>
{
    //console.log(await RangoDataWorker.getByFilter({"nombre":'Oficial I'}));
    const oficialesSync = [
        {
          "Foto": "",
          "Nombre": "Mike_Rowland Raknox",
          "Rango": "Teniente II",
          "Telefono": "910554",
          "Nivel": 8,
          "N Placa": "",
          "Horas": 4,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Pablo_Martinez pabloalf95",
          "Rango": "Teniente I",
          "Telefono": "525635",
          "Nivel": 41,
          "N Placa": "",
          "Horas": 34,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Denis_Weasley GARTOLO",
          "Rango": "Teniente I",
          "Telefono": "396035",
          "Nivel": 34,
          "N Placa": "",
          "Horas": 61,
          "Conectado": "SI (78)"
        },
        {
          "Foto": "",
          "Nombre": "Soren_Moon Borzos",
          "Rango": "Sargento II",
          "Telefono": "131192",
          "Nivel": 73,
          "N Placa": "",
          "Horas": 118,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "William_Decker TheCalifornia",
          "Rango": "Sargento II",
          "Telefono": "864648",
          "Nivel": 43,
          "N Placa": "",
          "Horas": 156,
          "Conectado": "SI (35)"
        },
        {
          "Foto": "",
          "Nombre": "David_Weiss Rikes",
          "Rango": "Sargento II",
          "Telefono": "381851",
          "Nivel": 40,
          "N Placa": "",
          "Horas": 90,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Sam_Ferrara Juanpr",
          "Rango": "Sargento II",
          "Telefono": "213086",
          "Nivel": 53,
          "N Placa": "",
          "Horas": 123,
          "Conectado": "SI (29)"
        },
        {
          "Foto": "",
          "Nombre": "Aitana_Sierra karencastillo2",
          "Rango": "Sargento II",
          "Telefono": "704208",
          "Nivel": 43,
          "N Placa": "",
          "Horas": 108,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Clay_Reeves Revan",
          "Rango": "Sargento II",
          "Telefono": "161612",
          "Nivel": 46,
          "N Placa": "",
          "Horas": 121,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Daylen_White civerita",
          "Rango": "Sargento I",
          "Telefono": "649147",
          "Nivel": 35,
          "N Placa": "",
          "Horas": 37,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "William_Winters Leo24601",
          "Rango": "Sargento I",
          "Telefono": "896443",
          "Nivel": 36,
          "N Placa": "",
          "Horas": 113,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Oliver_Stone Lopez",
          "Rango": "Sargento I",
          "Telefono": "979658",
          "Nivel": 29,
          "N Placa": "",
          "Horas": 51,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Elizabeth_Cook CookieCream",
          "Rango": "Sargento I",
          "Telefono": "736718",
          "Nivel": 30,
          "N Placa": "",
          "Horas": 75,
          "Conectado": "SI (26)"
        },
        {
          "Foto": "",
          "Nombre": "Jacob_Buttler Street",
          "Rango": "Sargento I",
          "Telefono": "506811",
          "Nivel": 35,
          "N Placa": "",
          "Horas": 119,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Megan_Carter Andrea5c",
          "Rango": "Oficial III+",
          "Telefono": "959095",
          "Nivel": 29,
          "N Placa": "",
          "Horas": 80,
          "Conectado": "SI (120)"
        },
        {
          "Foto": "",
          "Nombre": "Kyle_Hunter Joacoo",
          "Rango": "Oficial III+",
          "Telefono": "332647",
          "Nivel": 39,
          "N Placa": "",
          "Horas": 80,
          "Conectado": "SI (22)"
        },
        {
          "Foto": "",
          "Nombre": "Alexander_Davis Tinchotex",
          "Rango": "Oficial III+",
          "Telefono": "512772",
          "Nivel": 6,
          "N Placa": "",
          "Horas": 8,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Jose_Garnica Shino",
          "Rango": "Oficial III+",
          "Telefono": "101683",
          "Nivel": 44,
          "N Placa": "",
          "Horas": 33,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Matthew_Lawson esparcosyt",
          "Rango": "Oficial III+",
          "Telefono": "996163",
          "Nivel": 45,
          "N Placa": "",
          "Horas": 112,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Colin_Morphy Murai09",
          "Rango": "Oficial III+",
          "Telefono": "499851",
          "Nivel": 8,
          "N Placa": "",
          "Horas": 19,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Marcus_Shepherd GarTzeS",
          "Rango": "Oficial III",
          "Telefono": "772662",
          "Nivel": 37,
          "N Placa": "",
          "Horas": 5,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Matthew_Bennet TheGamerWTF",
          "Rango": "Oficial III",
          "Telefono": "205570",
          "Nivel": 30,
          "N Placa": "",
          "Horas": 23,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Terry_Holt hernancho97",
          "Rango": "Oficial III",
          "Telefono": "348780",
          "Nivel": 39,
          "N Placa": "",
          "Horas": 109,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Leonard_Thomoson OliverKiing01",
          "Rango": "Oficial III",
          "Telefono": "999000",
          "Nivel": 51,
          "N Placa": "",
          "Horas": 103,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Ryan_Bradford Zakees",
          "Rango": "Oficial III",
          "Telefono": "944862",
          "Nivel": 42,
          "N Placa": "",
          "Horas": 122,
          "Conectado": "SI (84)"
        },
        {
          "Foto": "",
          "Nombre": "Hayden_Miller Juanpi",
          "Rango": "Oficial III",
          "Telefono": "240435",
          "Nivel": 58,
          "N Placa": "",
          "Horas": 37,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Nathan_Gutierrez NANO",
          "Rango": "Oficial III",
          "Telefono": "463537",
          "Nivel": 43,
          "N Placa": "",
          "Horas": 107,
          "Conectado": "SI (37)"
        },
        {
          "Foto": "",
          "Nombre": "Jacob_Howard IsusPlaay",
          "Rango": "Oficial III",
          "Telefono": "452809",
          "Nivel": 24,
          "N Placa": "",
          "Horas": 149,
          "Conectado": "SI (18)"
        },
        {
          "Foto": "",
          "Nombre": "Derek_Mctavish Borja",
          "Rango": "Oficial III",
          "Telefono": "794734",
          "Nivel": 7,
          "N Placa": "",
          "Horas": 8,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Samuel_Williams YzAk",
          "Rango": "Oficial III",
          "Telefono": "319665",
          "Nivel": 47,
          "N Placa": "",
          "Horas": 0,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Adrian_Hausser Hausser44",
          "Rango": "Oficial III",
          "Telefono": "416451",
          "Nivel": 24,
          "N Placa": "",
          "Horas": 86,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Dylan_Bishop Panchoxs1",
          "Rango": "Oficial III",
          "Telefono": "207726",
          "Nivel": 51,
          "N Placa": "",
          "Horas": 6,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Steve_Blair Wall",
          "Rango": "Oficial III",
          "Telefono": "791988",
          "Nivel": 10,
          "N Placa": "",
          "Horas": 55,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Dylan_Street Denima7x",
          "Rango": "Oficial III",
          "Telefono": "332767",
          "Nivel": 26,
          "N Placa": "",
          "Horas": 32,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Edward_Nafate EdwardNafate",
          "Rango": "Oficial III",
          "Telefono": "736904",
          "Nivel": 27,
          "N Placa": "",
          "Horas": 99,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Sean_Walker Mzz",
          "Rango": "Oficial III",
          "Telefono": "711067",
          "Nivel": 24,
          "N Placa": "",
          "Horas": 151,
          "Conectado": "SI (21)"
        },
        {
          "Foto": "",
          "Nombre": "Glenn_Rawson D3iViiZ",
          "Rango": "Oficial III",
          "Telefono": "149704",
          "Nivel": 29,
          "N Placa": "",
          "Horas": 143,
          "Conectado": "SI (75)"
        },
        {
          "Foto": "",
          "Nombre": "Emily_Bloom Catha",
          "Rango": "Oficial III",
          "Telefono": "640998",
          "Nivel": 20,
          "N Placa": "",
          "Horas": 116,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Adolfo_Campos TheGaston",
          "Rango": "Oficial III",
          "Telefono": "461919",
          "Nivel": 37,
          "N Placa": "",
          "Horas": 61,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Eduardo_Escobar roquin03",
          "Rango": "Oficial III",
          "Telefono": "517986",
          "Nivel": 14,
          "N Placa": "",
          "Horas": 63,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Sara_Kelsen Camila",
          "Rango": "Oficial III",
          "Telefono": "101792",
          "Nivel": 22,
          "N Placa": "",
          "Horas": 77,
          "Conectado": "SI (7)"
        },
        {
          "Foto": "",
          "Nombre": "Jack_Hanma AlexOne76",
          "Rango": "Oficial III",
          "Telefono": "334874",
          "Nivel": 17,
          "N Placa": "",
          "Horas": 107,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "William_Brinnegar Mariete",
          "Rango": "Oficial II",
          "Telefono": "111777",
          "Nivel": 33,
          "N Placa": "",
          "Horas": 4,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Gordon_Riggs Corix",
          "Rango": "Oficial II",
          "Telefono": "159951",
          "Nivel": 16,
          "N Placa": "",
          "Horas": 1,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Millard_Blackburn chavy",
          "Rango": "Oficial II",
          "Telefono": "929292",
          "Nivel": 17,
          "N Placa": "",
          "Horas": 50,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Edward_Marshall Redfalcon",
          "Rango": "Oficial II",
          "Telefono": "453510",
          "Nivel": 44,
          "N Placa": "",
          "Horas": 8,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Ryan_Brown CoolDrop",
          "Rango": "Oficial II",
          "Telefono": "108979",
          "Nivel": 41,
          "N Placa": "",
          "Horas": 51,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Anabel_Torres anneiligal",
          "Rango": "Oficial II",
          "Telefono": "399089",
          "Nivel": 33,
          "N Placa": "",
          "Horas": 26,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Albert_Walker espartakus94",
          "Rango": "Oficial II",
          "Telefono": "753357",
          "Nivel": 43,
          "N Placa": "",
          "Horas": 36,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Marcos_Delacruz perioner",
          "Rango": "Oficial II",
          "Telefono": "633188",
          "Nivel": 30,
          "N Placa": "",
          "Horas": 47,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Jason_Reyes nicolasssz",
          "Rango": "Oficial II",
          "Telefono": "543129",
          "Nivel": 45,
          "N Placa": "",
          "Horas": 27,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Phillip_Woods xoko69",
          "Rango": "Oficial II",
          "Telefono": "151004",
          "Nivel": 17,
          "N Placa": "",
          "Horas": 10,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Agustin_Alonso igor0912",
          "Rango": "Oficial II",
          "Telefono": "901570",
          "Nivel": 40,
          "N Placa": "",
          "Horas": 3,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Nick_Harrison Gonza3103",
          "Rango": "Oficial II",
          "Telefono": "119591",
          "Nivel": 45,
          "N Placa": "",
          "Horas": 70,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Simon_Riley EmiJavier",
          "Rango": "Oficial II",
          "Telefono": "565906",
          "Nivel": 50,
          "N Placa": "",
          "Horas": 127,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Darryl_Johnson Zexxno",
          "Rango": "Oficial II",
          "Telefono": "938365",
          "Nivel": 47,
          "N Placa": "",
          "Horas": 85,
          "Conectado": "SI (45)"
        },
        {
          "Foto": "",
          "Nombre": "Ethan_Clark ProezasMil",
          "Rango": "Oficial II",
          "Telefono": "235776",
          "Nivel": 10,
          "N Placa": "",
          "Horas": 1,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Ignacio_Garcia Rxxgo",
          "Rango": "Oficial II",
          "Telefono": "881428",
          "Nivel": 16,
          "N Placa": "",
          "Horas": 29,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Cristobal_Moreno CristobalMoreno",
          "Rango": "Oficial II",
          "Telefono": "448844",
          "Nivel": 27,
          "N Placa": "",
          "Horas": 47,
          "Conectado": "SI (9)"
        },
        {
          "Foto": "",
          "Nombre": "Antonio_Garces Garces18",
          "Rango": "Oficial II",
          "Telefono": "248766",
          "Nivel": 23,
          "N Placa": "",
          "Horas": 35,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Iker_Martinez IkerMartinez",
          "Rango": "Oficial II",
          "Telefono": "734024",
          "Nivel": 45,
          "N Placa": "",
          "Horas": 34,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Damian_Turner LorenzoAleman",
          "Rango": "Oficial II",
          "Telefono": "147737",
          "Nivel": 31,
          "N Placa": "",
          "Horas": 40,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Leah_Carter Hope",
          "Rango": "Oficial II",
          "Telefono": "882882",
          "Nivel": 67,
          "N Placa": "",
          "Horas": 99,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Matthew_Prescott Pitido",
          "Rango": "Oficial II",
          "Telefono": "232772",
          "Nivel": 16,
          "N Placa": "",
          "Horas": 45,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Jhon_Wells cristianman975",
          "Rango": "Oficial II",
          "Telefono": "502317",
          "Nivel": 42,
          "N Placa": "",
          "Horas": 54,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Juan_Mata centinela999",
          "Rango": "Oficial II",
          "Telefono": "504931",
          "Nivel": 35,
          "N Placa": "",
          "Horas": 162,
          "Conectado": "SI (68)"
        },
        {
          "Foto": "",
          "Nombre": "Noah_Parker ROMIENOL",
          "Rango": "Oficial II",
          "Telefono": "547079",
          "Nivel": 20,
          "N Placa": "",
          "Horas": 0,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Dion_Creed Victorlopez26",
          "Rango": "Oficial II",
          "Telefono": "466833",
          "Nivel": 33,
          "N Placa": "",
          "Horas": 89,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Oscar_Mosqueira P4T0",
          "Rango": "Oficial II",
          "Telefono": "674429",
          "Nivel": 36,
          "N Placa": "",
          "Horas": 69,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Kyle_Davis Zhuri",
          "Rango": "Oficial II",
          "Telefono": "430330",
          "Nivel": 20,
          "N Placa": "",
          "Horas": 33,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Michael_Benneti rexplaysMC",
          "Rango": "Oficial II",
          "Telefono": "222333",
          "Nivel": 30,
          "N Placa": "",
          "Horas": 33,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Jason_Jazani GOMILA17",
          "Rango": "Oficial II",
          "Telefono": "622538",
          "Nivel": 5,
          "N Placa": "",
          "Horas": 5,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Charlie_Donovan Donovan",
          "Rango": "Oficial I",
          "Telefono": "311289",
          "Nivel": 27,
          "N Placa": "",
          "Horas": 19,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "James_Kinnaman TinGF18",
          "Rango": "Oficial I",
          "Telefono": "863542",
          "Nivel": 22,
          "N Placa": "",
          "Horas": 32,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Alexander_Hobbs Imperial97",
          "Rango": "Oficial I",
          "Telefono": "133198",
          "Nivel": 48,
          "N Placa": "",
          "Horas": 51,
          "Conectado": "SI (48)"
        },
        {
          "Foto": "",
          "Nombre": "Luther_Hentschel Strike",
          "Rango": "Oficial I",
          "Telefono": "452622",
          "Nivel": 41,
          "N Placa": "",
          "Horas": 76,
          "Conectado": "SI (41)"
        },
        {
          "Foto": "",
          "Nombre": "Josh_Street Sergiocp12",
          "Rango": "Oficial I",
          "Telefono": "935289",
          "Nivel": 11,
          "N Placa": "",
          "Horas": 87,
          "Conectado": "SI (42)"
        },
        {
          "Foto": "",
          "Nombre": "Edward_Davis Reiul",
          "Rango": "Oficial I",
          "Telefono": "672819",
          "Nivel": 23,
          "N Placa": "",
          "Horas": 52,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Leon_Kennedy Tilutne",
          "Rango": "Oficial I",
          "Telefono": "274287",
          "Nivel": 32,
          "N Placa": "",
          "Horas": 5,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "James_Collins devs1ta",
          "Rango": "Oficial I",
          "Telefono": "754557",
          "Nivel": 18,
          "N Placa": "",
          "Horas": 4,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Matthew_Becker Manc0late",
          "Rango": "Oficial I",
          "Telefono": "930121",
          "Nivel": 16,
          "N Placa": "",
          "Horas": 61,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Paco_Valero Kenshin",
          "Rango": "Jefe de Policía",
          "Telefono": "666555",
          "Nivel": 33,
          "N Placa": "",
          "Horas": 1,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Charlie_Beck Kenshin",
          "Rango": "Jefe de Policía",
          "Telefono": "658594",
          "Nivel": 5,
          "N Placa": "",
          "Horas": 0,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Brian_Mcgarrett LuKe19",
          "Rango": "Detective II",
          "Telefono": "191019",
          "Nivel": 43,
          "N Placa": "",
          "Horas": 127,
          "Conectado": "SI (83)"
        },
        {
          "Foto": "",
          "Nombre": "Aaron_Diaz Raknox",
          "Rango": "Detective I",
          "Telefono": "207098",
          "Nivel": 24,
          "N Placa": "",
          "Horas": 39,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "William_Howells Minul",
          "Rango": "Detective I",
          "Telefono": "974561",
          "Nivel": 40,
          "N Placa": "",
          "Horas": 196,
          "Conectado": "SI (12)"
        },
        {
          "Foto": "",
          "Nombre": "Lana_Fox Sherry",
          "Rango": "Detective I",
          "Telefono": "199616",
          "Nivel": 41,
          "N Placa": "",
          "Horas": 184,
          "Conectado": "SI (52)"
        },
        {
          "Foto": "",
          "Nombre": "Steve_Mars PlayFernan",
          "Rango": "Desconocido",
          "Telefono": "987527",
          "Nivel": 35,
          "N Placa": "",
          "Horas": 0,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Jep_Sines Cesiro",
          "Rango": "Desconocido",
          "Telefono": "719200",
          "Nivel": 26,
          "N Placa": "",
          "Horas": 0,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Enrique_Galdon SEOAlexRamon",
          "Rango": "Desconocido",
          "Telefono": "117885",
          "Nivel": 34,
          "N Placa": "",
          "Horas": 4,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Travis_Wilson poleStar",
          "Rango": "Desconocido",
          "Telefono": "653962",
          "Nivel": 36,
          "N Placa": "",
          "Horas": 0,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "John_Trouk noyzxc",
          "Rango": "Desconocido",
          "Telefono": "140751",
          "Nivel": 31,
          "N Placa": "",
          "Horas": 3,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Dennis_Malone Zeeky",
          "Rango": "Desconocido",
          "Telefono": "428295",
          "Nivel": 2,
          "N Placa": "",
          "Horas": 1,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Jacob_Wright noyzxc",
          "Rango": "Desconocido",
          "Telefono": "658903",
          "Nivel": 8,
          "N Placa": "",
          "Horas": 14,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Harold_Cooper Aurion",
          "Rango": "Capitán II",
          "Telefono": "812108",
          "Nivel": 56,
          "N Placa": "",
          "Horas": 106,
          "Conectado": "SI (49)"
        },
        {
          "Foto": "",
          "Nombre": "Erich_Aller Yester",
          "Rango": "Capitán II",
          "Telefono": "139244",
          "Nivel": 39,
          "N Placa": "",
          "Horas": 171,
          "Conectado": "SI (162)"
        },
        {
          "Foto": "",
          "Nombre": "Reki_Nolan Reki",
          "Rango": "Capitán I",
          "Telefono": "562510",
          "Nivel": 37,
          "N Placa": "",
          "Horas": 27,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Scott_Grey Mking",
          "Rango": "Capitán I",
          "Telefono": "311182",
          "Nivel": 31,
          "N Placa": "",
          "Horas": 27,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Paul_Strand Natroks",
          "Rango": "Cadete",
          "Telefono": "718602",
          "Nivel": 43,
          "N Placa": "",
          "Horas": 15,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Iker_Garcia IkerGB",
          "Rango": "Cadete",
          "Telefono": "596819",
          "Nivel": 14,
          "N Placa": "",
          "Horas": 48,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Jose_Sabedra chema93",
          "Rango": "Cadete",
          "Telefono": "740460",
          "Nivel": 27,
          "N Placa": "",
          "Horas": 87,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Kayrah_Reese JazchuuM",
          "Rango": "Cadete",
          "Telefono": "759886",
          "Nivel": 22,
          "N Placa": "",
          "Horas": 54,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Rober_Cosenza robercosenza",
          "Rango": "Cadete",
          "Telefono": "339566",
          "Nivel": 16,
          "N Placa": "",
          "Horas": 110,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Raylan_Dash Jonay",
          "Rango": "Cadete",
          "Telefono": "243627",
          "Nivel": 9,
          "N Placa": "",
          "Horas": 52,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Pablo_Seco GCuatromeme",
          "Rango": "Cadete",
          "Telefono": "682646",
          "Nivel": 14,
          "N Placa": "",
          "Horas": 61,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Talia_Quiroga River",
          "Rango": "Cadete",
          "Telefono": "233921",
          "Nivel": 17,
          "N Placa": "",
          "Horas": 108,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Rayan_Dash JackQuemado",
          "Rango": "Cadete",
          "Telefono": "141999",
          "Nivel": 9,
          "N Placa": "",
          "Horas": 65,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Ashley_Kozlova analicettee",
          "Rango": "Cadete",
          "Telefono": "495131",
          "Nivel": 12,
          "N Placa": "",
          "Horas": 59,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Shawn_Morgan fscrow",
          "Rango": "Cadete",
          "Telefono": "993987",
          "Nivel": 11,
          "N Placa": "",
          "Horas": 96,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Aaron_Mayer PokiG",
          "Rango": "Cadete",
          "Telefono": "937689",
          "Nivel": 10,
          "N Placa": "",
          "Horas": 49,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Tyler_Garcia HugoGaaR",
          "Rango": "Cadete",
          "Telefono": "989878",
          "Nivel": 15,
          "N Placa": "",
          "Horas": 79,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Anderson_Johnson blazek",
          "Rango": "Cadete",
          "Telefono": "903061",
          "Nivel": 8,
          "N Placa": "",
          "Horas": 64,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Mia_Carter LaChiquiita",
          "Rango": "Cadete",
          "Telefono": "393617",
          "Nivel": 22,
          "N Placa": "",
          "Horas": 85,
          "Conectado": "SI (79)"
        },
        {
          "Foto": "",
          "Nombre": "Mike_Harrer Aguilenyo",
          "Rango": "Cadete",
          "Telefono": "N/D",
          "Nivel": 10,
          "N Placa": "",
          "Horas": 0,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Frank_Curtis feraaaso",
          "Rango": "Cadete",
          "Telefono": "121074",
          "Nivel": 11,
          "N Placa": "",
          "Horas": 119,
          "Conectado": "NO"
        },
        {
          "Foto": "",
          "Nombre": "Bryan_Crawford Raknox",
          "Rango": "Asistente del Jefe",
          "Telefono": "237207",
          "Nivel": 47,
          "N Placa": "",
          "Horas": 27,
          "Conectado": "NO"
        }
       ];

    for(let oficialASync of oficialesSync)
    {
        let UserData = {};
        let processNombre = oficialASync.Nombre.split(' ');

        UserData.nombre = processNombre[0].split('_')[0];
        UserData.apellido = processNombre[0].split('_')[1];
        UserData.nombre_usuario = processNombre[1];
        if(oficialASync.Rango == "Cadete") oficialASync.Rango = "Oficial I";
        UserData.rango = (await RangoDataWorker.getByFilter({"nombre": oficialASync.Rango}))[0]; 
        UserData.clave = "passRandom";
        UserData.activo = true;
        await UsuarioDataWorker.newUsuario(UserData);
        //await UsuarioDataWorker.newUsuario({nombre_usuario:"Wall", clave:"154300922", nombre: "Steve", apellido:"Blair", rango: Chief._id});
    }
    if(installed) return true;
    const cadete = await RangoDataWorker.newRango({"nombre": "Cadete", "poder": 0});
    const oficialI = await RangoDataWorker.newRango({"nombre": "Oficial I", "poder": 1});
    const oficialII = await RangoDataWorker.newRango({"nombre": "Oficial II", "poder": 2}); 
    const oficialIII = await RangoDataWorker.newRango({"nombre": "Oficial III", "poder": 3});
    const oficialLider = await RangoDataWorker.newRango({"nombre": "Oficial III+", "poder": 4});
    const detectiveI = await RangoDataWorker.newRango({"nombre": "Detective I", "poder": 4});
    const detectiveII = await RangoDataWorker.newRango({"nombre": "Detective II", "poder": 4});
    const detectiveIII = await RangoDataWorker.newRango({"nombre": "Detective III", "poder": 5});
    const SGTPrimero = await RangoDataWorker.newRango({"nombre": "Sargento I", "poder": 5});
    const SGTSegundo = await RangoDataWorker.newRango({"nombre": "Sargento II", "poder": 6});
    const TNTPrimero = await RangoDataWorker.newRango({"nombre": "Teniente I", "poder": 7});
    const TNTSegundo = await RangoDataWorker.newRango({"nombre": "Teniente II", "poder": 8});
    const CPTPrimero = await RangoDataWorker.newRango({"nombre": "Capitán I", "poder": 9});
    const CPTSegundo = await RangoDataWorker.newRango({"nombre": "Capitán II", "poder": 10});
    const CPTTercero = await RangoDataWorker.newRango({"nombre": "Capitán III", "poder": 11});
    const Commander = await RangoDataWorker.newRango({"nombre": "Comandante", "poder": 12});
    const AsstChief = await RangoDataWorker.newRango({"nombre": "Asistente del jefe", "poder": 13});
    const Chief = await RangoDataWorker.newRango({"nombre": "Jefe", "poder": 14});


    await PermisosDataWorker.newPermisos({
        rango:cadete,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:oficialI,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:oficialII,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:oficialIII,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:oficialLider,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:detectiveI,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:detectiveII,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:detectiveIII,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:SGTPrimero,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:SGTSegundo,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:TNTPrimero,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:TNTSegundo,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:CPTPrimero,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:CPTSegundo,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:CPTTercero,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:Commander,
        acciones: []
    });

    await PermisosDataWorker.newPermisos({
        rango:AsstChief,
        acciones: []
    });




    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"accion.obtener", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"accion.obtener.id", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"accion.buscar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"accion.nuevo", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"accion.editar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"accion.eliminar", acciones: []});    


    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"usuario.obtener", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"usuario.obtener.id", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"usuario.buscar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"usuario.nuevo", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"usuario.editar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"usuario.eliminar", acciones: []});


    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"rango.obtener", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"rango.obtener.id", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"rango.buscar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"rango.nuevo", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"rango.editar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"rango.eliminar", acciones: []});


    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"permiso.obtener", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"permiso.obtener.id", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"permiso.buscar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"permiso.nuevo", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"permiso.editar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"permiso.eliminar", acciones: []});


    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"ficha.obtener", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"ficha.obtener.id", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"ficha.buscar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"ficha.nuevo", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"ficha.editar", acciones: []});
    await PermisosEndpointDataWorker.newPermisoEndpoint({endpoint:"ficha.eliminar", acciones: []});
    
    let allActions = [];
    allActions.push(await AccionesDataWorker.newAccion({nombre:"accion.eliminar", descripcion:"Permitirá eliminar acciones." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"permiso.eliminar", descripcion:"Permitirá eliminar permisos." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"rango.eliminar", descripcion:"Permitirá eliminar rangos." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"usuario.eliminar", descripcion:"Permitirá eliminar usuarios." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"ficha.eliminar", descripcion:"Permitirá eliminar fichas." }));

    allActions.push(await AccionesDataWorker.newAccion({nombre:"accion.nuevo", descripcion:"Permitirá crear acciones." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"permiso.nuevo", descripcion:"Permitirá crear permisos." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"rango.nuevo", descripcion:"Permitirá crear rangos." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"usuario.nuevo", descripcion:"Permitirá crear usuarios." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"ficha.nuevo", descripcion:"Permitirá crear fichas." }));

    allActions.push(await AccionesDataWorker.newAccion({nombre:"accion.editar", descripcion:"Permitirá editar acciones." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"permiso.editar", descripcion:"Permitirá editar permisos." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"rango.editar", descripcion:"Permitirá editar rangos." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"usuario.editar", descripcion:"Permitirá editar usuarios." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"ficha.editar", descripcion:"Permitirá editar fichas." }));

    allActions.push(await AccionesDataWorker.newAccion({nombre:"accion.obtener", descripcion:"Permitirá obtener acciones." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"permiso.obtener", descripcion:"Permitirá obtener permisos." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"rango.obtener", descripcion:"Permitirá obtener rangos." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"usuario.obtener", descripcion:"Permitirá obtener usuarios." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"ficha.obtener", descripcion:"Permitirá editaobtener fichas." }));

    allActions.push(await AccionesDataWorker.newAccion({nombre:"accion.obtener.id", descripcion:"Permitirá obtener acciones específicas." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"permiso.obtener.id", descripcion:"Permitirá obtener permisos específicos." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"rango.obtener.id", descripcion:"Permitirá obtener rangos específicos." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"usuario.obtener.id", descripcion:"Permitirá obtener usuarios específicos." }));
    allActions.push(await AccionesDataWorker.newAccion({nombre:"ficha.obtener.id", descripcion:"Permitirá editaobtener fichas específicos." }));


    let chiefPermisos = await PermisosDataWorker.newPermisos({
        rango:Chief,
        acciones: allActions
    });

    console.log(chiefPermisos);

    await UsuarioDataWorker.newUsuario({nombre_usuario:"Wall", clave:"154300922", nombre: "Steve", apellido:"Blair", rango: Chief._id});


}



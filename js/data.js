var carbonFootPrintData = {
    // food quantity in grams
    food: {
        "beans": 0.002,
        "beef": 0.027,
        "cheese": 0.0135,
        "chicken": 0.006900000000000001,
        "chocolate": 0.00487,
        "coffee": 0.00314,
        "eggs": 0.0048,
        "fish": 0.0060999999999999995,
        "fruit": 0.0011,
        "lamb": 0.039200000000000006,
        "lentils": 0.0009,
        "milk": 0.0019,
        "nuts": 0.0023,
        "pork": 0.0121,
        "potatoes": 0.0029,
        "redMeat": 0.033100000000000004,
        "rice": 0.0027,
        "tofu": 0.002,
        "tuna": 0.0060999999999999995,
        "turkey": 0.0109,
        "vegetables": 0.002,
        "whiteMeat": 0.009966666666666667
    },
    FoodType: {
        "beans": "beans",
        "beef": "beef",
        "cheese": "cheese",
        "chicken": "chicken",
        "chocolate": "chocolate",
        "coffee": "coffee",
        "eggs": "eggs",
        "fish": "fish",
        "fruit": "fruit",
        "lamb": "lamb",
        "lentils": "lentils",
        "milk": "milk",
        "nuts": "nuts",
        "pork": "pork",
        "potatoes": "potatoes",
        "redMeat": "redMeat",
        "rice": "rice",
        "tofu": "tofu",
        "tuna": "tuna",
        "turkey": "turkey",
        "vegetables": "vegetables",
        "whiteMeat": "whiteMeat"
    },
    // transport in Km
    transport: {
        "boat": 0.803,
        "bus": 0.103,
        "car": 0.257,
        "carSharing": 0.147,
        "electricVehicle": 0.081,
        "fossilFueledCar": 0.257,
        "hybridCar": 0.18,
        "longDistanceBus": 0.052,
        "longHaulFlight": 0.239,
        "mediumHaulFlight": 0.286,
        "motorbike": 0.108,
        "plane": 0.2883333333333334,
        "shortDistanceBus": 0.103,
        "shortHaulFlight": 0.34,
        "train": 0.042
    },
    TransportType: {
        "boat": "boat",
        "bus": "bus",
        "car": "car",
        "carSharing": "carSharing",
        "electricVehicle": "electricVehicle",
        "fossilFueledCar": "fossilFueledCar",
        "hybridCar": "hybridCar",
        "longDistanceBus": "longDistanceBus",
        "longHaulFlight": "longHaulFlight",
        "mediumHaulFlight": "mediumHaulFlight",
        "motorbike": "motorbike",
        "plane": "plane",
        "shortDistanceBus": "shortDistanceBus",
        "shortHaulFlight": "shortHaulFlight",
        "train": "train"
    },
    // electricity per kWh
    electricity: {
        "argentina": 0.454,
        "australia": 0.51,
        "austria": 0.354,
        "belgium": 0.169,
        "bolivia": 0.43,
        "brazil": 0.096,
        "canada": 0.146,
        "china": 0.549,
        "czechia": 0.609,
        "estonia": 0.534,
        "europe": 0.409,
        "finland": 0.249,
        "france": 0.163,
        "germany": 0.637,
        "hungary": 0.346,
        "iceland": 0.027,
        "india": 0.734,
        "ireland": 0.401,
        "israel": 0.559,
        "italy": 0.463,
        "latvia": 0.414,
        "lithuania": 0.221,
        "netherlands": 0.387,
        "nigeria": 0.34,
        "norway": 0.03,
        "poland": 0.958,
        "portugal": 0.22,
        "romania": 0.626,
        "russia": 0.426,
        "serbia": 0.302,
        "slovakia": 0.4,
        "slovenia": 0.184,
        "spain": 0.608,
        "turkey": 0.359,
        "uk": 0.193,
        "uruguay": 0.075,
        "usa": 0.384,
        "world": 0.52
    },
    ElectricityType: {
        "argentina": "argentina",
        "australia": "australia",
        "austria": "austria",
        "bolivia": "bolivia",
        "brazil": "brazil",
        "canada": "canada",
        "china": "china",
        "czechia": "czechia",
        "danmark": "danmark",
        "estonia": "estonia",
        "europe": "europe",
        "finland": "finland",
        "france": "france",
        "germany": "germany",
        "hungary": "hungary",
        "iceland": "iceland",
        "india": "india",
        "ireland": "ireland",
        "israel": "israel",
        "italy": "italy",
        "latvia": "latvia",
        "lithuania": "lithuania",
        "netherlands": "netherlands",
        "nigeria": "nigeria",
        "norway": "norway",
        "poland": "poland",
        "portugal": "portugal",
        "romania": "romania",
        "russia": "russia",
        "serbia": "serbia",
        "slovakia": "slovakia",
        "slovenia": "slovenia",
        "spain": "spain",
        "turkey": "turkey",
        "uk": "uk",
        "uruguay": "uruguay",
        "usa": "usa",
        "world": "world"
    },
    // streaming in hours
    streaming: {
        "audioMP3": 0.03156,
        "fullHDVideo": 0.1286,
        "HDVideo": 0.0458,
        "ultraHDVideo": 0.53784
    },
    StreamingType: {
        "audioMP3": "audioMP3",
        "fullHDVideo": "fullHDVideo",
        "HDVideo": "HDVideo",
        "ultraHDVideo": "ultraHDVideo"
    },
    // purchase quantity in count
    purchase: {
        "computer": 588,
        "cryptoCurrencyPoW": 20,
        "eletricCar": 8800,
        "fossilFuelCar": 5600,
        "hybridCar": 6500,
        "laptop": 210,
        "singleEditionNFT": 211,
        "smartphone": 80,
        "tablet": 87,
        "tv": 500
    },
    PurchaseType: {
        "computer": "computer",
        "cryptoCurrencyPoW": "cryptoCurrencyPoW",
        "eletricCar": "eletricCar",
        "fossilFuelCar": "fossilFuelCar",
        "hybridCar": "hybridCar",
        "laptop": "laptop",
        "singleEditionNFT": "singleEditionNFT",
        "smartphone": "smartphone",
        "tablet": "tablet",
        "tv": "tv"
    },
    // fashion quantity in count
    fashion: {
        "coat": 51,
        "dress": 54.333333333333336,
        "jeans": 25,
        "shirt": 12.5,
        "shoes": 18,
        "sweater": 30.6,
        "tshirt": 7.666666666666667
    },
    FashionType: {
        "coat": "coat",
        "dress": "dress",
        "jeans": "jeans",
        "shirt": "shirt",
        "shoes": "shoes",
        "sweater": "sweater",
        "tshirt": "tshirt"
    },
    // meal count
    meal: {
        "highMeat": 2.157,
        "lowMeat": 1.401,
        "mediumMeat": 1.689,
        "pescetarian": 1.173,
        "vegan": 0.867,
        "vegetarian": 1.143
    },
    MealType: {
        "highMeat": "highMeat",
        "lowMeat": "lowMeat",
        "mediumMeat": "mediumMeat",
        "pescetarian": "pescetarian",
        "vegan": "vegan",
        "vegetarian": "vegetarian"
    }
}

carbonFootPrintMap = {
    electricity: "ElectricityType",
    fashion: "FashionType",
    food: "FoodType",
    meal: "MealType",
    purchase: "PurchaseType",
    streaming: "StreamingType",
    transport: "TransportType"
}

var quantityPlaceHolder = {
    electricity: "Power in kWh",
    fashion: "Quantity of items",
    food: "Quantity in grams",
    meal: "Number of meals",
    purchase: "Quantity of items",
    streaming: "Duration in hours",
    transport: "Distance in kilometer"
}

var typeUnits = {
    electricity: "kWh",
    fashion: "units",
    food: "grams",
    meal: "meals",
    purchase: "units",
    streaming: "hours",
    transport: "km"
}

var usAverageCo2 = 42.5;
var twitterHashTags = 'c1o2,climatechange';
var encodedUrl = "";

var co2 = parseFloat(0);
var electricityCo2 = 0;
var fashionCo2 = 0;
var foodCo2 = 0;
var mealCo2 = 0;
var purchaseCo2 = 0;
var streamingCo2 = 0;
var transportCo2 = 0;
var chartData = [
    ['Type', 'kgCO2eq']
];

var sno = 0;
var data = [];
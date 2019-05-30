let eventType= prompt("Are you attending a casual, semi-formal or formal event today?"); 
let tempFahr= prompt("What is today's temperature?");
let eventClothes, tempClothes;

if (tempFahr <54) {
    tempClothes = "a coat"
} else if (tempFahr >70) {
    tempClothes = "no jacket"
} else {
    tempClothes = "a jacket"
}

if (eventType == "casual") {
    eventClothes = "something comfy"
} else if (eventType == "semi-formal") {
    eventClothes = "a polo"
} else {
    eventClothes = "a suit"
}

let result = ("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + eventClothes + " and " + tempClothes + "."); 
    console.log(result);
    
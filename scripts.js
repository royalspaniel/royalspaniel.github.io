const nugget = document.getElementById("nugget");

const nuggetBouncer = document.getElementById("nuggetBouncer");

const nuggetTotalText = document.getElementById("nuggetTotalText");
const nuggetsPerSecondText = document.getElementById("nuggetsPerSecondText");

var totalNuggets = 0;
var nuggetsPerSecond = 0;
var nuggetsPerClick = 1;


const buyKetchupButton = document.getElementById("buyKetchup");
const ketchupQuantityText = document.getElementById("ketchupQuantity");
const ketchupPriceText = document.getElementById("ketchupPrice");
var ketchupQuantity = 0;
const ketchupBaseCost = 20;
const ketchupCostScaling = 0.1;
const ketchupCPSPerQuantity = 0.1;

const buyFryButton = document.getElementById("buyFry");
const fryQuantityText = document.getElementById("fryQuantity");
const fryPriceText = document.getElementById("fryPrice");
var fryQuantity = 0;
const fryBaseCost = 40;
const fryCostScaling = 0.1;
const fryCPSPerQuantity = 0.5;

const buySodaButton = document.getElementById("buySoda");
const sodaQuantityText = document.getElementById("sodaQuantity");
const sodaPriceText = document.getElementById("sodaPrice");
var sodaQuantity = 0;
const sodaBaseCost = 70;
const sodaCostScaling = 0.1;
const sodaCPSPerQuantity = 1.0;

const buyMealButton = document.getElementById("buyMeal");
const mealQuantityText = document.getElementById("mealQuantity");
const mealPriceText = document.getElementById("mealPrice");
var mealQuantity = 0;
const mealBaseCost = 300;
const mealCostScaling = 0.1;
const mealCPSPerQuantity = 5.0;

const buyMascotButton = document.getElementById("buyMascot");
const mascotQuantityText = document.getElementById("mascotQuantity");
const mascotPriceText = document.getElementById("mascotPrice");
var mascotQuantity = 0;
const mascotBaseCost = 800;
const mascotCostScaling = 0.1;
const mascotCPSPerQuantity = 15.0;

const buyAdButton = document.getElementById("buyAd");
const adQuantityText = document.getElementById("adQuantity");
const adPriceText = document.getElementById("adPrice");
var adQuantity = 0;
const adBaseCost = 3000;
const adCostScaling = 0.1;
const adCPSPerQuantity = 60;

const buyTownButton = document.getElementById("buyTown");
const townQuantityText = document.getElementById("townQuantity");
const townPriceText = document.getElementById("townPrice");
var townQuantity = 0;
const townBaseCost = 5500;
const townCostScaling = 0.1;
const townCPSPerQuantity = 80;

const buyCityButton = document.getElementById("buyCity");
const cityQuantityText = document.getElementById("cityQuantity");
const cityPriceText = document.getElementById("cityPrice");
var cityQuantity = 0;
const cityBaseCost = 9500;
const cityCostScaling = 0.1;
const cityCPSPerQuantity = 100;

const buyIslandButton = document.getElementById("buyIsland");
const islandQuantityText = document.getElementById("islandQuantity");
const islandPriceText = document.getElementById("islandPrice");
var islandQuantity = 0;
const islandBaseCost = 15000;
const islandCostScaling = 0.5;
const islandCPSPerQuantity = 1000;

const buyPlanetButton = document.getElementById("buyPlanet");
const planetQuantityText = document.getElementById("planetQuantity");
const planetPriceText = document.getElementById("planetPrice");
var planetQuantity = 0;
const planetBaseCost = 25000;
const planetCostScaling = 0.8;
const planetCPSPerQuantity = 5000;

const buySolarButton = document.getElementById("buySolar");
const solarQuantityText = document.getElementById("solarQuantity");
const solarPriceText = document.getElementById("solarPrice");
var solarQuantity = 0;
const solarBaseCost = 50000;
const solarCostScaling = 2.0;
const solarCPSPerQuantity = 25000;

const buyGalaxyButton = document.getElementById("buyGalaxy");
const galaxyQuantityText = document.getElementById("galaxyQuantity");
const galaxyPriceText = document.getElementById("galaxyPrice");
var galaxyQuantity = 0;
const galaxyBaseCost = 1000000;
const galaxyCostScaling = 4.0;
const galaxyCPSPerQuantity = 250000;

const ketchupContainer = document.getElementById("ketchupContainer");
const fryContainer = document.getElementById("fryContainer");
const sodaContainer = document.getElementById("sodaContainer");
const mealContainer = document.getElementById("mealContainer");
const mascotContainer = document.getElementById("mascotContainer");
const adContainer = document.getElementById("adContainer");
const townContainer = document.getElementById("townContainer");
const cityContainer = document.getElementById("cityContainer");
const islandContainer = document.getElementById("islandContainer");
const planetContainer = document.getElementById("planetContainer");
const solarContainer = document.getElementById("solarContainer");
const galaxyContainer = document.getElementById("galaxyContainer");

nuggetTotalText.innerHTML = "0 nuggets";
nuggetsPerSecondText.innerHTML = "0 nuggets per second";

setInterval(updateNuggetTotal, 1000);

function updateNuggetTotal(){
    totalNuggets += nuggetsPerSecond;
    nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
}

function clickNugget(){
    totalNuggets += nuggetsPerClick;
    nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";

    nuggetBouncer.classList.remove("nuggetBouncer");
    void nuggetBouncer.offsetWidth;
    nuggetBouncer.classList.add("nuggetBouncer");


    const damageText= document.createElement("div");
    damageText.textContent = "+" + nuggetsPerClick;
    document.body.appendChild(damageText);
    damageText.className = "damage-text";

    damageText.style.left = e.clientX + "px";
    damageText.style.top = e.clientY + "px";
    damageText.style.position = "absolute";
    

    damageText.addEventListener("animationend", () => {text.remove()});
}

function purchaseKetchup(){
    let actualCost = ketchupBaseCost * (1+(ketchupCostScaling * ketchupQuantity));

    if (totalNuggets >= actualCost){
        totalNuggets -= actualCost;
        nuggetsPerSecond += ketchupCPSPerQuantity;
        ketchupQuantity++;
        nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
        ketchupQuantityText.innerHTML = ketchupQuantity;
        nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
        ketchupPriceText.innerHTML = Math.floor(ketchupBaseCost * (1+(ketchupCostScaling * ketchupQuantity)));
   
        let newKetchupIcon = document.createElement("img");
    newKetchupIcon.src = "images/cetchup.png";
    newKetchupIcon.style.width = "8%";
        ketchupContainer.appendChild(newKetchupIcon);
    }

}

function purchaseFry(){
    let actualCost = fryBaseCost * (1+(fryCostScaling * fryQuantity));

    if (totalNuggets >= actualCost){
        totalNuggets -= actualCost;
        nuggetsPerSecond += fryCPSPerQuantity;
        fryQuantity++;
        nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
        fryQuantityText.innerHTML = fryQuantity;
        nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
        fryPriceText.innerHTML = Math.floor(fryBaseCost * (1+(fryCostScaling * fryQuantity)));
    
        let newFryIcon = document.createElement("img");
        newFryIcon.src = "images/frenchfry.png";
        newFryIcon.style.width = "8%";
            fryContainer.appendChild(newFryIcon);
    }

}

function purchaseSoda(){
    let actualCost = sodaBaseCost * (1+(sodaCostScaling * sodaQuantity));

    if (totalNuggets >= actualCost){
        totalNuggets -= actualCost;
        nuggetsPerSecond += sodaCPSPerQuantity;
        sodaQuantity++;
        nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
    sodaQuantityText.innerHTML = sodaQuantity;
        nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
        sodaPriceText.innerHTML = Math.floor(sodaBaseCost * (1+(sodaCostScaling * sodaQuantity)));
    
        let newSodaIcon = document.createElement("img");
        newSodaIcon.src = "images/soda.png";
        newSodaIcon.style.width = "8%";
            sodaContainer.appendChild(newSodaIcon);
    }

}

function purchaseMeal(){
    let actualCost = mealBaseCost * (1+(mealCostScaling * mealQuantity));

    if (totalNuggets >= actualCost){
        totalNuggets -= actualCost;
        nuggetsPerSecond += mealCPSPerQuantity;
        mealQuantity++;
        nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
    mealQuantityText.innerHTML = mealQuantity;
        nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
        mealPriceText.innerHTML = Math.floor(mealBaseCost * (1+(mealCostScaling * mealQuantity)));
    
        let newMealIcon = document.createElement("img");
        newMealIcon.src = "images/HappyMeal.png";
        newMealIcon.style.width = "8%";
            mealContainer.appendChild(newMealIcon);
    }

}

function purchaseMascot(){
    let actualCost = mascotBaseCost * (1+(mascotCostScaling * mascotQuantity));

    if (totalNuggets >= actualCost){
        totalNuggets -= actualCost;
        nuggetsPerSecond += mascotCPSPerQuantity;
        mascotQuantity++;
        nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
    mascotQuantityText.innerHTML = mascotQuantity;
        nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
        mascotPriceText.innerHTML = Math.floor(mascotBaseCost * (1+(mascotCostScaling * mascotQuantity)));
    
        let newMascotIcon = document.createElement("img");
        newMascotIcon.src = "images/mascot.png";
        newMascotIcon.style.width = "8%";
            mascotContainer.appendChild(newMascotIcon);
    }

}

function purchaseAd(){
    let actualCost = adBaseCost * (1+(adCostScaling * adQuantity));

    if (totalNuggets >= actualCost){
        totalNuggets -= actualCost;
        nuggetsPerSecond += adCPSPerQuantity;
        adQuantity++;
        nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
    adQuantityText.innerHTML = adQuantity;
        nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
        adPriceText.innerHTML = Math.floor(adBaseCost * (1+(adCostScaling * adQuantity)));
   
        let newAdIcon = document.createElement("img");
        newAdIcon.src = "images/ad.png";
        newAdIcon.style.width = "8%";
            adContainer.appendChild(newAdIcon);
    }

}


function purchaseTown(){
    let actualCost = townBaseCost * (1+(townCostScaling * townQuantity));

    if (totalNuggets >= actualCost){
        totalNuggets -= actualCost;
        nuggetsPerSecond += townCPSPerQuantity;
        townQuantity++;
        nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
    townQuantityText.innerHTML = townQuantity;
        nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
        townPriceText.innerHTML = Math.floor(townBaseCost * (1+(townCostScaling * townQuantity)));
    
        let newTownIcon = document.createElement("img");
        newTownIcon.src = "images/town.png";
        newTownIcon.style.width = "8%";
            townContainer.appendChild(newTownIcon);
    }

}

function purchaseCity(){
    let actualCost = cityBaseCost * (1+(cityCostScaling * cityQuantity));

    if (totalNuggets >= actualCost){
        totalNuggets -= actualCost;
        nuggetsPerSecond += cityCPSPerQuantity;
        cityQuantity++;
        nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
    cityQuantityText.innerHTML = cityQuantity;
        nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
        cityPriceText.innerHTML = Math.floor(cityBaseCost * (1+(cityCostScaling * cityQuantity)));
   
        let newCityIcon = document.createElement("img");
        newCityIcon.src = "images/city.png";
        newCityIcon.style.width = "8%";
            cityContainer.appendChild(newCityIcon);
    }

}

function purchaseIsland(){
    let actualCost = islandBaseCost * (1+(islandCostScaling * islandQuantity));

    if (totalNuggets >= actualCost){
        totalNuggets -= actualCost;
        nuggetsPerSecond += islandCPSPerQuantity;
        islandQuantity++;
        nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
    islandQuantityText.innerHTML = islandQuantity;
        nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
        islandPriceText.innerHTML = Math.floor(islandBaseCost * (1+(islandCostScaling * islandQuantity)));
    
        let newIslandIcon = document.createElement("img");
        newIslandIcon.src = "images/island.png";
        newIslandIcon.style.width = "8%";
            islandContainer.appendChild(newIslandIcon);
    }

}

function purchasePlanet(){
    let actualCost = planetBaseCost * (1+(planetCostScaling * planetQuantity));

    if (totalNuggets >= actualCost){
        totalNuggets -= actualCost;
        nuggetsPerSecond += planetCPSPerQuantity;
        planetQuantity++;
        nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
    planetQuantityText.innerHTML = planetQuantity;
        nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
        planetPriceText.innerHTML = Math.floor(planetBaseCost * (1+(planetCostScaling * planetQuantity)));
   
        let newPlanetIcon = document.createElement("img");
        newPlanetIcon.src = "images/planet.png";
        newPlanetIcon.style.width = "8%";
            planetContainer.appendChild(newPlanetIcon);
    }

}

function purchaseSolar(){
    let actualCost = solarBaseCost * (1+(solarCostScaling * solarQuantity));

    if (totalNuggets >= actualCost){
        totalNuggets -= actualCost;
        nuggetsPerSecond += solarCPSPerQuantity;
        solarQuantity++;
        nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
    solarQuantityText.innerHTML = solarQuantity;
        nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
        solarPriceText.innerHTML = Math.floor(solarBaseCost * (1+(solarCostScaling * solarQuantity)));
    
        let newSolarIcon = document.createElement("img");
        newSolarIcon.src = "images/solar.png";
        newSolarIcon.style.width = "8%";
            solarContainer.appendChild(newSolarIcon);
   
    }

}

function purchaseGalaxy(){
    let actualCost = galaxyBaseCost * (1+(galaxyCostScaling * galaxyQuantity));

    if (totalNuggets >= actualCost){
        totalNuggets -= actualCost;
        nuggetsPerSecond += galaxyCPSPerQuantity;
        galaxyQuantity++;
        nuggetTotalText.innerHTML = Math.floor(totalNuggets) + " nuggets";
    galaxyQuantityText.innerHTML = galaxyQuantity;
        nuggetsPerSecondText.innerHTML = nuggetsPerSecond.toFixed(2) + " nuggets per second";
        galaxyPriceText.innerHTML = Math.floor(galaxyBaseCost * (1+(galaxyCostScaling * galaxyQuantity)));
    
   
            let newGalaxyIcon = document.createElement("img");
            newGalaxyIcon.src = "images/galaxy.png";
            newGalaxyIcon.style.width = "8%";
                galaxyContainer.appendChild(newGalaxyIcon);
        }

}

nugget.addEventListener("click", clickNugget);
buyKetchupButton.addEventListener("click", purchaseKetchup);
buyFryButton.addEventListener("click", purchaseFry);
buySodaButton.addEventListener("click", purchaseSoda);
buyMealButton.addEventListener("click", purchaseMeal);
buyMascotButton.addEventListener("click", purchaseMascot);
buyAdButton.addEventListener("click", purchaseAd);
buyTownButton.addEventListener("click", purchaseTown);
buyCityButton.addEventListener("click", purchaseCity);
buyIslandButton.addEventListener("click", purchaseIsland);
buyPlanetButton.addEventListener("click", purchasePlanet);
buySolarButton.addEventListener("click", purchaseSolar);
buyGalaxyButton.addEventListener("click", purchaseGalaxy);
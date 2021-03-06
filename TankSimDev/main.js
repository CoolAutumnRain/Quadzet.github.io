"use strict";
function sleep(ms) { return new Promise((r) => 
    setTimeout(r, ms)); }

function average(array) {
    if (array) return array.reduce((a, b) => a + b) / array.length;
    else return 0;
};
const range = (length) =>
  Array.from({ length }, (_, i) => i)

function linspace(start, end, length = Math.max(Math.round(end-start) + 1, 1)) {
    if(length < 2) { return length === 1 ? [start] : [] ; }
    var i, ret = Array(length);
    length--;
    for(i = length; i >= 0; i--) { ret[i] = (i*end+(length-i)*start)/length; }
    return ret;
}

const asc = arr => arr.sort((a, b) => a - b);

// sample standard deviation
const std = (arr) => {
    const mu = average(arr);
    const diffArr = arr.map(a => (a - mu) ** 2);
    return Math.sqrt(diffArr.reduce((a, b) => a + b) / (arr.length - 1));
};

const quantile = (arr, q) => {
    const sorted = asc(arr);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
        return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    } else {
        return sorted[base];
    }
};

function getAmount(event, ability, type) {
    if (event[`${type}`] && event.ability == ability) return event[`${type}`];
    else return 0;
}

// Fill the progressbar
async function updateProgressbar(progressPerc) {
    document.querySelector("#progressBar").style.width = `${progressPerc}%`
    await sleep(0);
}

function saveInput()
{
    // Tank Settings
    localStorage.setItem("race", document.querySelector("#race").selectedIndex)
    localStorage.setItem("head", document.querySelector("#head").selectedIndex)
    localStorage.setItem("neck", document.querySelector("#neck").selectedIndex)
    localStorage.setItem("shoulder", document.querySelector("#shoulder").selectedIndex)
    localStorage.setItem("cape", document.querySelector("#cape").selectedIndex)
    localStorage.setItem("chest", document.querySelector("#chest").selectedIndex)
    localStorage.setItem("wrist", document.querySelector("#wrist").selectedIndex)
    localStorage.setItem("hands", document.querySelector("#hands").selectedIndex)
    localStorage.setItem("waist", document.querySelector("#waist").selectedIndex)
    localStorage.setItem("legs", document.querySelector("#legs").selectedIndex)
    localStorage.setItem("feet", document.querySelector("#feet").selectedIndex)
    localStorage.setItem("ringone", document.querySelector("#ringone").selectedIndex)
    localStorage.setItem("ringtwo", document.querySelector("#ringtwo").selectedIndex)
    localStorage.setItem("trinketone", document.querySelector("#trinketone").selectedIndex)
    localStorage.setItem("trinkettwo", document.querySelector("#trinkettwo").selectedIndex)
    localStorage.setItem("ranged", document.querySelector("#ranged").selectedIndex)
    localStorage.setItem("mainhand", document.querySelector("#mainhand").selectedIndex)
    localStorage.setItem("offhand", document.querySelector("#offhand").selectedIndex)
    localStorage.setItem("mhweptypelist", document.getElementById("mhweptypelist").selectedIndex)
    localStorage.setItem("ohweptypelist", document.getElementById("ohweptypelist").selectedIndex)

    localStorage.setItem("headenchant", document.querySelector("#headenchant").selectedIndex)
    localStorage.setItem("shoulderenchant", document.querySelector("#shoulderenchant").selectedIndex)
    localStorage.setItem("backenchant", document.querySelector("#backenchant").selectedIndex)
    localStorage.setItem("chestenchant", document.querySelector("#chestenchant").selectedIndex)
    localStorage.setItem("wristenchant", document.querySelector("#wristenchant").selectedIndex)
    localStorage.setItem("handenchant", document.querySelector("#handenchant").selectedIndex)
    localStorage.setItem("legenchant", document.querySelector("#legenchant").selectedIndex)
    localStorage.setItem("feetenchant", document.querySelector("#feetenchant").selectedIndex)
    localStorage.setItem("mhwepenchant", document.querySelector("#mhwepenchant").selectedIndex)
    localStorage.setItem("ohwepenchant", document.querySelector("#ohwepenchant").selectedIndex)

    localStorage.setItem("startRage", document.querySelector("#startRage").value)
    localStorage.setItem("deathwish", document.querySelector("#deathwish").checked)
    localStorage.setItem("windfury", document.querySelector("#windfury").checked)
    localStorage.setItem("wcb", document.querySelector("#wcb").checked)
    localStorage.setItem("dmf", document.querySelector("#dmf").checked)

    // Talents 
    localStorage.setItem("deflection", document.getElementById("deflection").value)
    localStorage.setItem("cruelty", document.getElementById("cruelty").value)
    localStorage.setItem("anticipation", document.getElementById("anticipation").value)
    localStorage.setItem("toughness", document.getElementById("toughness").value)
    localStorage.setItem("impHS", document.querySelector("#impHS").value) 
    localStorage.setItem("impSA", document.querySelector("#impSA").value) 
    localStorage.setItem("impale", document.querySelector("#impale").value) 
    localStorage.setItem("defiance", document.querySelector("#defiance").value) 
    localStorage.setItem("dwspec", document.querySelector("#dwspec").value) 
    
    // Other Bonuses
    localStorage.setItem("twoPieceDreadnaught", document.querySelector("#twoPieceDreadnaught").checked)
    localStorage.setItem("fivePieceWrath", document.querySelector("#fivePieceWrath").checked)
    localStorage.setItem("berserking", document.querySelector("#berserking").checked)
    
    // Buffs
    localStorage.setItem("mhstone", document.getElementById("mhstone").selectedIndex);
    localStorage.setItem("ohstone", document.getElementById("ohstone").selectedIndex);
    localStorage.setItem("strbuff", document.getElementById("strbuff").selectedIndex);
    localStorage.setItem("apbuff", document.getElementById("apbuff").selectedIndex);
    localStorage.setItem("agibuff", document.getElementById("agibuff").selectedIndex);
    localStorage.setItem("statbuff", document.getElementById("statbuff").selectedIndex);
    localStorage.setItem("foodbuff", document.getElementById("foodbuff").selectedIndex);
    localStorage.setItem("alcohol", document.getElementById("alcohol").selectedIndex);
    localStorage.setItem("potion", document.getElementById("potion").selectedIndex);

    localStorage.setItem("inspiration", document.getElementById("inspiration").checked);
    localStorage.setItem("devo", document.getElementById("devo").checked);
    localStorage.setItem("imploh", document.getElementById("imploh").checked);

    localStorage.setItem("goa", document.getElementById("goa").checked);
    localStorage.setItem("armorelixir", document.getElementById("armorelixir").checked);
    localStorage.setItem("hpelixir", document.getElementById("hpelixir").checked);
    localStorage.setItem("titans", document.getElementById("titans").checked);
    localStorage.setItem("dragonslayer", document.getElementById("dragonslayer").checked);
    localStorage.setItem("zandalar", document.getElementById("zandalar").checked);
    localStorage.setItem("wcb", document.getElementById("wcb").checked);
    localStorage.setItem("dmf", document.getElementById("dmf").checked);
    localStorage.setItem("dmstamina", document.getElementById("dmstamina").checked);
    localStorage.setItem("dmAP", document.getElementById("dmAP").checked);
    localStorage.setItem("dmspell", document.getElementById("dmspell").checked);
    localStorage.setItem("songflower", document.getElementById("songflower").checked);
    localStorage.setItem("bshout", document.getElementById("bshout").checked);
    localStorage.setItem("pack", document.getElementById("pack").checked);
    localStorage.setItem("trueshot", document.getElementById("trueshot").checked);
    localStorage.setItem("mark", document.getElementById("mark").checked);
    localStorage.setItem("fortitude", document.getElementById("fortitude").checked);
    localStorage.setItem("bloodpact", document.getElementById("bloodpact").checked);
    localStorage.setItem("kings", document.getElementById("kings").checked);
    localStorage.setItem("might", document.getElementById("might").checked);
    localStorage.setItem("windfury", document.getElementById("windfury").checked);
    localStorage.setItem("strofearth", document.getElementById("strofearth").checked);
    localStorage.setItem("graceofair", document.getElementById("graceofair").checked);
    localStorage.setItem("impweptotems", document.getElementById("impweptotems").checked);

    // Boss Settings
    localStorage.setItem("swingMin", document.querySelector("#swingMin").value)
    localStorage.setItem("swingMax", document.querySelector("#swingMax").value)
    localStorage.setItem("swingTimer", document.querySelector("#swingTimer").value)
    localStorage.setItem("bossarmor", document.querySelector("#bossarmor").value)
    localStorage.setItem("debuffdelay", document.querySelector("#debuffdelay").value)

    // Calc Settings
    localStorage.setItem("iterations", document.querySelector("#iterations").value)
    localStorage.setItem("fightLength", document.querySelector("#fightLength").value)
    localStorage.setItem("TBPvalue", document.querySelector("#TBPvalue").value)
    localStorage.setItem("TBPtime", document.querySelector("#TBPtime").value)
    localStorage.setItem("lineSelect", document.querySelector("#lineSelect").selectedIndex)

}

function loadInput()
{
    // Tank Settings
    document.querySelector("#race").selectedIndex = localStorage.getItem("race") ? localStorage.getItem("race") : 3;
    document.querySelector("#head").selectedIndex = localStorage.getItem("head") ? localStorage.getItem("head") : 2;
    document.querySelector("#neck").selectedIndex = localStorage.getItem("neck") ? localStorage.getItem("neck") : 14;
    document.querySelector("#shoulder").selectedIndex = localStorage.getItem("shoulder") ? localStorage.getItem("shoulder") : 5;
    document.querySelector("#cape").selectedIndex = localStorage.getItem("cape") ? localStorage.getItem("cape") : 6;
    document.querySelector("#chest").selectedIndex = localStorage.getItem("chest") ? localStorage.getItem("chest") : 11;
    document.querySelector("#wrist").selectedIndex = localStorage.getItem("wrist") ? localStorage.getItem("wrist") : 5;
    document.querySelector("#hands").selectedIndex = localStorage.getItem("hands") ? localStorage.getItem("hands") : 4;
    document.querySelector("#waist").selectedIndex = localStorage.getItem("waist") ? localStorage.getItem("waist") : 15;
    document.querySelector("#legs").selectedIndex = localStorage.getItem("legs") ? localStorage.getItem("legs") : 7;
    document.querySelector("#feet").selectedIndex = localStorage.getItem("feet") ? localStorage.getItem("feet") : 12;
    document.querySelector("#ringone").selectedIndex = localStorage.getItem("ringone") ? localStorage.getItem("ringone") : 10;
    document.querySelector("#ringtwo").selectedIndex = localStorage.getItem("ringtwo") ? localStorage.getItem("ringtwo") : 1;
    document.querySelector("#trinketone").selectedIndex = localStorage.getItem("trinketone") ? localStorage.getItem("trinketone") : 5;
    document.querySelector("#trinkettwo").selectedIndex = localStorage.getItem("trinkettwo") ? localStorage.getItem("trinkettwo") : 4;
    document.querySelector("#ranged").selectedIndex = localStorage.getItem("ranged") ? localStorage.getItem("ranged") : 10;
    document.querySelector("#mhweptypelist").selectedIndex = localStorage.getItem("mhweptypelist") ? localStorage.getItem("mhweptypelist") : 4;
    document.querySelector("#ohweptypelist").selectedIndex = localStorage.getItem("ohweptypelist") ? localStorage.getItem("ohweptypelist") : 4;
    updateMHWeaponList(false);
    updateOHWeaponList(false);
    document.querySelector("#mainhand").selectedIndex = localStorage.getItem("mainhand") ? localStorage.getItem("mainhand") : 27;
    document.querySelector("#offhand").selectedIndex = localStorage.getItem("offhand") ? localStorage.getItem("offhand") : 15;

    document.querySelector("#headenchant").selectedIndex = localStorage.getItem("headenchant") ? Math.min(localStorage.getItem("headenchant"), 5) : 5;
    document.querySelector("#shoulderenchant").selectedIndex = localStorage.getItem("shoulderenchant") ? localStorage.getItem("shoulderenchant") : 2;
    document.querySelector("#backenchant").selectedIndex = localStorage.getItem("backenchant") ? localStorage.getItem("backenchant") : 1;
    document.querySelector("#chestenchant").selectedIndex = localStorage.getItem("chestenchant") ? localStorage.getItem("chestenchant") : 1;
    document.querySelector("#wristenchant").selectedIndex = localStorage.getItem("wristenchant") ? localStorage.getItem("wristenchant") : 1;
    document.querySelector("#handenchant").selectedIndex = localStorage.getItem("handenchant") ? localStorage.getItem("handenchant") : 4;
    document.querySelector("#legenchant").selectedIndex = localStorage.getItem("legenchant") ? Math.min(localStorage.getItem("legenchant"), 5) : 5;
    document.querySelector("#feetenchant").selectedIndex = localStorage.getItem("feetenchant") ? localStorage.getItem("feetenchant") : 3;
    document.querySelector("#mhwepenchant").selectedIndex = localStorage.getItem("mhwepenchant") ? localStorage.getItem("mhwepenchant") : 2;
    document.querySelector("#ohwepenchant").selectedIndex = localStorage.getItem("ohwepenchant") ? localStorage.getItem("ohwepenchant") : 1;

    document.querySelector("#startRage").value = localStorage.getItem("startRage") ? localStorage.getItem("startRage") : 70;
    document.querySelector("#deathwish").checked = localStorage.getItem("deathwish") == "false" ? false : true;
    document.querySelector("#windfury").checked = localStorage.getItem("windfury") == "true" ? true : false;
    document.querySelector("#wcb").checked = localStorage.getItem("wcb") == "true" ? true : false;
    document.querySelector("#dmf").checked = localStorage.getItem("dmf") == "true" ? true : false;

    // Talents 
    document.getElementById("deflection").value = localStorage.getItem("deflection") ? localStorage.getItem("deflection") : 0;
    document.getElementById("cruelty").value = localStorage.getItem("cruelty") ? localStorage.getItem("cruelty") : 5;
    document.getElementById("anticipation").value = localStorage.getItem("anticipation") ? localStorage.getItem("anticipation") : 0;
    document.getElementById("toughness").value = localStorage.getItem("toughness") ? localStorage.getItem("toughness") : 3;
    document.querySelector("#impHS").value = localStorage.getItem("impHS") ? localStorage.getItem("impHS") : 3; 
    document.querySelector("#impSA").value = localStorage.getItem("impSA") ? localStorage.getItem("impSA") : 0; 
    document.querySelector("#impale").value = localStorage.getItem("impale") ? localStorage.getItem("impale") : 0; 
    document.querySelector("#defiance").value = localStorage.getItem("defiance") ? localStorage.getItem("defiance") : 5; 
    document.querySelector("#dwspec").value = localStorage.getItem("dwspec") ? localStorage.getItem("dwspec") : 5; 
    
    // Other Bonuses
    document.querySelector("#twoPieceDreadnaught").checked = localStorage.getItem("twoPieceDreadnaught") == "true" ? true : false;
    document.querySelector("#fivePieceWrath").checked = localStorage.getItem("fivePieceWrath") == "true" ? true : false;
    document.querySelector("#berserking").checked = localStorage.getItem("berserking") == "true" ? true : false;

    // Buffs
    document.getElementById("mhstone").selectedIndex = localStorage.getItem("mhstone") ? localStorage.getItem("mhstone") : 0;
    document.getElementById("ohstone").selectedIndex = localStorage.getItem("ohstone") ? localStorage.getItem("ohstone") : 0;
    document.getElementById("strbuff").selectedIndex = localStorage.getItem("strbuff") ? localStorage.getItem("strbuff") : 0;
    document.getElementById("apbuff").selectedIndex = localStorage.getItem("apbuff") ? localStorage.getItem("apbuff") : 0;
    document.getElementById("agibuff").selectedIndex = localStorage.getItem("agibuff") ? localStorage.getItem("agibuff") : 0;
    document.getElementById("statbuff").selectedIndex = localStorage.getItem("statbuff") ? localStorage.getItem("statbuff") : 0;
    document.getElementById("foodbuff").selectedIndex = localStorage.getItem("foodbuff") ? localStorage.getItem("foodbuff") : 0;
    document.getElementById("alcohol").selectedIndex = localStorage.getItem("alcohol") ? localStorage.getItem("alcohol") : 0;
    document.getElementById("potion").selectedIndex = localStorage.getItem("potion") ? localStorage.getItem("potion") : 0;

    document.getElementById("inspiration").checked = localStorage.getItem("inspiration") == "true" ? true : false;
    document.getElementById("devo").checked = localStorage.getItem("devo") == "true" ? true : false;
    document.getElementById("imploh").checked = localStorage.getItem("imploh") == "true" ? true : false;

    document.getElementById("goa").checked = localStorage.getItem("goa") == "true" ? true : false;
    document.getElementById("armorelixir").checked = localStorage.getItem("armorelixir") == "true" ? true : false;
    document.getElementById("hpelixir").checked = localStorage.getItem("hpelixir") == "true" ? true : false;
    document.getElementById("titans").checked = localStorage.getItem("titans") == "true" ? true : false;
    document.getElementById("dragonslayer").checked = localStorage.getItem("dragonslayer") == "true" ? true : false;
    document.getElementById("zandalar").checked = localStorage.getItem("zandalar") == "true" ? true : false;
    document.getElementById("wcb").checked = localStorage.getItem("wcb") == "true" ? true : false;
    document.getElementById("dmf").checked = localStorage.getItem("dmf") == "true" ? true : false;
    document.getElementById("dmstamina").checked = localStorage.getItem("dmstamina") == "true" ? true : false;
    document.getElementById("dmAP").checked = localStorage.getItem("dmAP") == "true" ? true : false;
    document.getElementById("dmspell").checked = localStorage.getItem("dmspell") == "true" ? true : false;
    document.getElementById("songflower").checked = localStorage.getItem("songflower") == "true" ? true : false;
    document.getElementById("bshout").checked = localStorage.getItem("bshout") == "true" ? true : false;
    document.getElementById("pack").checked = localStorage.getItem("pack") == "true" ? true : false;
    document.getElementById("trueshot").checked = localStorage.getItem("trueshot") == "true" ? true : false;
    document.getElementById("mark").checked = localStorage.getItem("mark") == "true" ? true : false;
    document.getElementById("fortitude").checked = localStorage.getItem("fortitude") == "true" ? true : false;
    document.getElementById("bloodpact").checked = localStorage.getItem("bloodpact") == "true" ? true : false;
    document.getElementById("kings").checked = localStorage.getItem("kings") == "true" ? true : false;
    document.getElementById("might").checked = localStorage.getItem("might") == "true" ? true : false;
    document.getElementById("windfury").checked = localStorage.getItem("windfury") == "true" ? true : false;
    document.getElementById("strofearth").checked = localStorage.getItem("strofearth") == "true" ? true : false;
    document.getElementById("graceofair").checked = localStorage.getItem("graceofair") == "true" ? true : false;
    document.getElementById("impweptotems").checked = localStorage.getItem("impweptotems") == "true" ? true : false;

    // Boss Settings
    document.querySelector("#swingMin").value = localStorage.getItem("swingMin") ? localStorage.getItem("swingMin") : 4000;
    document.querySelector("#swingMax").value = localStorage.getItem("swingMax") ? localStorage.getItem("swingMax") : 4000;
    document.querySelector("#swingTimer").value = localStorage.getItem("swingTimer") ? localStorage.getItem("swingTimer") : 2;
    document.querySelector("#bossarmor").value = localStorage.getItem("bossarmor") ? localStorage.getItem("bossarmor") : 3731;
    document.querySelector("#debuffdelay").value = localStorage.getItem("debuffdelay") ? localStorage.getItem("debuffdelay") : 0;

    // Calc Settings
    document.querySelector("#iterations").value = localStorage.getItem("iterations") ? localStorage.getItem("iterations") : 10000;
    document.querySelector("#fightLength").value = localStorage.getItem("fightLength") ? localStorage.getItem("fightLength") : 12;
    document.querySelector("#TBPvalue").value = localStorage.getItem("TBPvalue") ? localStorage.getItem("TBPvalue") : 3000;
    document.querySelector("#TBPtime").value = localStorage.getItem("TBPtime") ? localStorage.getItem("TBPtime") : 3;
    document.querySelector("#lineSelect").selectedIndex = localStorage.getItem("lineSelect") ? localStorage.getItem("lineSelect") : 0;
}  

function onLoadPage()
{
    loadInput();
    updateStats();
}

async function main() {

    // Cache the user input locally
    saveInput();
    // Fetch and set all user input settings
    //fetchSettings()
    updateStats();
    
    document.getElementById("errorContainer").innerHTML = ""
    if(Number(document.getElementById("fightLength").value) > 120){
        document.getElementById("errorContainer").innerHTML = "Please choose a fight duration below 120."
        return;
    }

    let start = Date.now()
    let results = {};
    let uptimes = {};
    let tps = []
    let dps = []
    let dtps = []
    let rageGained = []
    let rageSpent = []
    let snapshots = []
    let breaches = 0
    let bossSwings = 0;

    updateProgressbar(0)
    document.querySelector("#progressBar").style.display = `block`;
    document.querySelector("#barContainer").style.display = `block`;

    let numWorkers = window.navigator.hardwareConcurrency;
    let remainderIterations = _iterations - Math.floor(_iterations/numWorkers)*numWorkers
    let numWorkersDone = 0;
    let progressPerc = 0;
    for (var i = 0; i < numWorkers; i++) {
        var worker = new Worker('./workers/worker.js');
        let iterations = i == 0 ? Math.floor(_iterations/numWorkers) + remainderIterations : Math.floor(_iterations/numWorkers);
        if (iterations <= 0) {
            numWorkersDone++;
            continue;
        }
        worker.postMessage({
            globals: {
                _simDuration: _simDuration,
                _iterations: iterations,
                _timeStep: _timeStep,
                _snapshotLen: _snapshotLen,
                _config: _config,
                _breakpointValue: _breakpointValue,
                _breakpointTime: _breakpointTime,
                
                _startRage: _startRage,
                _deathwish: _deathwish,
                _crusaderMH: _crusaderMH,
                _crusaderOH: _crusaderOH,
                _windfury: _windfury,
                _windfuryAP: _windfuryAP,
                _wcb: _wcb,
                _dmf: _dmf,
                _mrp: _mrp,
                
                _thunderfuryMH: _thunderfuryMH,
                _thunderfuryOH: _thunderfuryOH,
                _edMH: _edMH,
                _edOH: _edOH,
                _qsMH: _qsMH,
                _perdsMH: _perdsMH,
                _perdsOH: _perdsOH,
                _dbMH: _dbMH,
                _dbOH: _dbOH,
                _eskMH: _eskMH,
                _msaMH: _msaMH,
                _msaOH: _msaOH,

                _impHS: _impHS,
                _impSA: _impSA,
                _defiance: _defiance,
                _dwspec: _dwspec,

                _kots: _kots,
                _diamondflask: _diamondflask,
                _earthstrike: _earthstrike,
                _slayerscrest: _slayerscrest,
                _jomgabbar: _jomgabbar,
                _lgg: _lgg,
                _hoj: _hoj,

                _berserking: _berserking,

                _landedHits: _landedHits,
            },
        })
        worker.addEventListener('error', function(e)  {
            console.log(`Error: Line ${e.lineno} in ${e.filename}: ${e.message}`)
        })
        worker.addEventListener('message', function(e) {
            if (e.data.type == 'progressUpdate') {
                progressPerc += e.data.progressPerc / numWorkers;
                updateProgressbar(progressPerc);
            } else {
                for (let ability in e.data.results) {
                    if(!results[`${ability}`]) results[`${ability}`] = [];
                    results[`${ability}`] = results[`${ability}`].concat(e.data.results[`${ability}`]);
                }
                for (let ability in e.data.uptimes) {
                    if(!uptimes[`${ability}`]) uptimes[`${ability}`] = [];
                    uptimes[`${ability}`] = uptimes[`${ability}`].concat(e.data.uptimes[`${ability}`]);
                }
                tps = tps.concat(e.data.tps);
                dps = dps.concat(e.data.dps);
                dtps = dtps.concat(e.data.dtps);
                rageGained = rageGained.concat(e.data.rageGained);
                rageSpent = rageSpent.concat(e.data.rageSpent);
                snapshots = snapshots.concat(e.data.snapshots);
                breaches += e.data.breaches;
                bossSwings += e.data.bossSwings;
                if (++numWorkersDone === numWorkers) {
                    postResults();
                }
            }
        })
    }
    
    function postResults() {

        let end = Date.now()
        console.log(`Boss swingtimer: ${(_simDuration * _iterations)/bossSwings}`)
        // Some console logging...
        let ret = `Calculated ${_iterations} iterations of ${_simDuration}s. fights with timestep ${_timeStep} ms using ${numWorkers} threads in ${(end-start)/1000} seconds.`;
        console.log(ret);
        console.log(`TPS: ${Math.round(average(tps)*100)/100}`);
        console.log(`DPS: ${Math.round(average(dps)*100)/100}`);
        console.log(`DTPS: ${Math.round(average(dtps)*100)/100}`);
        for (let ability in results)
            console.log(`${ability}: ${Math.round(average(results[`${ability}`])*100)/100}`);
        console.log(`gainRPS: ${Math.round(average(rageGained)*100)/100}`);
        console.log(`spentRPS: ${Math.round(average(rageSpent)*100)/100}`);

        for(let result in results) {
            results[`${result}`] = [...Array(_iterations - results[`${result}`].length)].map((_, i) => 0).concat(results[`${result}`])
        }
        let sortedResults = Object.keys(results).map(key => [key, results[key]])
        sortedResults.sort((a,b) => average(b[1]) - average(a[1]))

        let resultTable = `<table><tr><th>Ability TPS</th></tr>`;
        for (let i in sortedResults) {
            resultTable = resultTable.concat(`<tr><td>${sortedResults[i][0]}:</td><td>${Math.round(average(sortedResults[i][1])*100)/100}</td></tr>`)
        }
        resultTable = resultTable.concat(`</table>`)
        let statsTable = 
        `<table>
        <tr><th>Statistics</th></tr>
        <tr><td>TPS standard deviation:</td><td>${Math.round(std(tps)*100)/100}</ts><td> (${Math.round(std(tps)/average(tps)*10000)/100}%)</td></tr>
        <tr><td>DPS standard deviation:</td><td>${Math.round(std(dps)*100)/100}</ts><td> (${Math.round(std(dps)/average(dps)*10000)/100}%)</td></tr>
        <tr><td>Threshold failed:</td><td>${breaches}</ts><td> (${Math.round(breaches/_iterations*10000)/100}%)</td></tr>
        </table>`

        let generalTable = 
        `<table>
        <tr><th>General Stats</th></tr>
        <tr><td>TPS: </td><td>${Math.round(average(tps)*100)/100}</td></tr>
        <tr><td>DPS: </td><td>${Math.round(average(dps)*100)/100}</td></tr>
        <tr><td>DTPS: </td><td>${Math.round(average(dtps)*100)/100}</td></tr>
        <tr><td>RPS gained: </td><td>${Math.round(average(rageGained)*100)/100}</td></tr>
        <tr><td>RPS spent: </td><td>${Math.round(average(rageSpent)*100)/100}</td></tr>
        `

        for(let ability in uptimes) {
            uptimes[`${ability}`] = [...Array(_iterations - uptimes[`${ability}`].length)].map((_, i) => 0).concat(uptimes[`${ability}`])
        }
        let sortedUptimes = Object.keys(uptimes).map(key => [key, uptimes[key]])
        sortedUptimes.sort((a,b) => average(b[1]) - average(a[1]))
        for (let i in sortedUptimes) {
            //sortedUptimes[i][1] = sortedUptimes[i][1].concat([...Array(_iterations - sortedUptimes[i][1].length)].map((_, i) => 0)) // fill with zeros
            generalTable = generalTable.concat(`<tr><td>${sortedUptimes[i][0]} uptime:</td><td>${Math.round(average(sortedUptimes[i][1])*100)/100}%</td></tr>`)
        }
        generalTable = generalTable.concat(`</table>`)


        document.getElementById("resultsHeader").innerHTML = `<h2>Results</h2>`
        document.getElementById("generalStats").innerHTML = generalTable;
        document.getElementById("abilitytps").innerHTML = resultTable;
        document.getElementById("statistics").innerHTML = statsTable;

        var x = linspace(0, _simDuration, _simDuration*1000/_snapshotLen + 1);

        let lineShape = document.querySelector("#lineSelect").options[document.querySelector("#lineSelect").selectedIndex].value

        // Make the graph
        var y_avg = [];
        var y_99 = [];
        var y_95 = [];
        var y_05 = [];
        var y_01 = [];
        snapshots.forEach(snapshot => {
            y_avg.push(Math.round(average(snapshot)));
            y_99.push(Math.round(quantile(snapshot, 0.99)));
            y_95.push(Math.round(quantile(snapshot, 0.95)));
            y_05.push(Math.round(quantile(snapshot, 0.05)));
            y_01.push(Math.round(quantile(snapshot, 0.01)));
        });

        var traceAvg = {
            x: x,
            y: y_avg,
            mode: 'lines+markers',
            name: "Average Threat",
            line: {
                color: '#939C56',
                shape: `${lineShape}`,
            },
            marker: {
                size: 4,
            }
        }

        var trace99 = {
            x: x,
            y: y_99,
            mode: 'lines+markers',
            name: "99th percentile",
            line: {
                color: '#569C81',
                shape: `${lineShape}`,
            },
            marker: {
                size: 4,
            }
        }

        var trace95 = {
            x: x,
            y: y_95,
            mode: 'lines+markers',
            name: "95th percentile",
            line: {
                color: '#569B65',
                shape: `${lineShape}`,
            },
            marker: {
                size: 4,
            }
        }

        var trace05 = {
            x: x,
            y: y_05,
            mode: 'lines+markers',
            name: "5th percentile",
            line: {
                color: '#966C44',
                shape: `${lineShape}`,
            },
            marker: {
                size: 4,
            }
        }
        var trace01 = {
            x: x,
            y: y_01,
            mode: 'lines+markers',
            name: "1st percentile",
            line: {
                color: '#964343',
                shape: `${lineShape}`,
            },
            marker: {
                size: 4,
            }
        }

    // BG grey 222629
    // dark grey 474b4f
    // medium grey 6b6e70
    // light gray c8ced1


        var plotData = [ trace99, trace95, traceAvg, trace05, trace01 ];
        var layout = {
            title: 'Threat Distribution',
            width: 1440,
            height: 810,

            plot_bgcolor: "#222629",
            paper_bgcolor: "#222629",
            
            titlefont: {color: "#c8ced1"}, 
            xaxis:{
                title:"Time (s)", 
                titlefont: {color: "#c8ced1"},
                tickfont: {color: "#c8ced1"}, 
                rangemode: "tozero",
                gridcolor: "#474b4f",
                linecolor: "#c8ced1",
                autotick: false,
                ticks: 'outside',
                tick0: 0,
                dtick: 1.5,
            },
            yaxis:{
                title:"Threat",
                titlefont: {color: "#c8ced1"},
                tickcolor: "#c8ced1",
                tickfont: {color: "#c8ced1"},
                rangemode: "tozero",
                gridcolor: "#474b4f",
                linecolor: "#c8ced1"},
            legend: {font: {color: "#c8ced1"}},
        }
        Plotly.newPlot('plotContainer', plotData, layout);

        document.querySelector("#progressBar").style.display = `none`;
        document.querySelector("#barContainer").style.display = `none`;
        document.querySelector("#plotContainer").style.display = `block`;
        document.querySelector("#resultContainer").style.display = `block`;
    }
}



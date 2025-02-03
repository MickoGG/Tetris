results = [];

function getResults() {
    updateResults();
    results.sort(sortResults);

    fillTop5();
    fillLastResult();
}

function updateResults() {
    let resultsFromStorage = localStorage.getItem("results");
    if (resultsFromStorage != null) {
        results = JSON.parse(resultsFromStorage);
    }
    else {
        localStorage.setItem("results", JSON.stringify(results));
    }
}

function sortResults(a, b) {
    return b.result - a.result;
}

function fillTop5() {
    let len = (results.length < 5) ? results.length : 5;
    for (let i = 0; i < len; i++) {
        document.getElementById("name_" + (i + 1)).innerText = results[i].playerName;
        document.getElementById("top_" + (i + 1)).innerText = results[i].result;
    }
}

function fillLastResult() {
    let lastPlayerName = "No result";
    let lastResult = 0;

    let lastPlayerNameFromStorage = localStorage.getItem("lastPlayerName");
    if (lastPlayerNameFromStorage != null) {
        lastPlayerName = JSON.parse(lastPlayerNameFromStorage);
    }

    let lastResultFromStorage = localStorage.getItem("lastResult");
    if (lastResultFromStorage != null) {
        lastResult = parseInt(lastResultFromStorage);
    }

    document.getElementById("lastPlayerName").innerHTML = lastPlayerName;
    document.getElementById("lastResult").innerHTML = lastResult;
}

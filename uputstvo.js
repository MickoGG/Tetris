function getSettings() {
    let level = checkLevel();
    localStorage.setItem("level", JSON.stringify(level));
    
    let checkedObjects = checkObjects();
    localStorage.setItem("objects", JSON.stringify(checkedObjects));
}

function checkLevel() {
    if (document.getElementById("level_1").checked) return 1;
    else if (document.getElementById("level_2").checked) return 2;
    else if (document.getElementById("level_3").checked) return 3;
}

function checkObjects() {
    let checkedObjects = [];

    if (document.getElementById("line_check").checked) {
        checkedObjects.push(0);
    }
    if (document.getElementById("square_check").checked) {
        checkedObjects.push(1);
    }
    if (document.getElementById("L1_check").checked) {
        checkedObjects.push(2);
    }
    if (document.getElementById("L2_check").checked) {
        checkedObjects.push(3);
    }
    if (document.getElementById("Z1_check").checked) {
        checkedObjects.push(4);
    }
    if (document.getElementById("Z2_check").checked) {
        checkedObjects.push(5);
    }
    if (document.getElementById("T_check").checked) {
        checkedObjects.push(6);
    }

    return checkedObjects;
}

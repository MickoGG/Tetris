NUMBER_OF_ROWS = 20;
NUMBER_OF_COLUMNS = 10;
NUMBER_OF_SHAPES = 7;
BASE_BACKGROUND_COLOR = "rgb(210, 255, 170)";

let tableMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let colors = [BASE_BACKGROUND_COLOR, "lightblue", "yellow", "blue", "orange", "green", "red", "purple"];

let lineObjectMaps = [
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0]
    ],
    [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
    ]
];

let L1ObjectMaps = [
    [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
    ]
];

let L2ObjectMaps = [
    [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [1, 0, 0]
    ],
    [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ]
];

let Z1ObjectMaps = [
    [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1]
    ],
    [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0]
    ],
    [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0]
    ]
];

let Z2ObjectMaps = [
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 0]
    ]
];

let TObjectMaps = [
    [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0]
    ]
];

let Objects = [
    {
        name: "line",
        color: 1,
        startColumn: 3,
        startRow: 3,
        map: lineObjectMaps[0]
    },
    {
        name: "square",
        color: 2,
        startColumn: 4,
        startRow: 1,
        map: [
            [1, 1],
            [1, 1]
        ]
    },
    {
        name: "L1",
        color: 3,
        startColumn: 4,
        startRow: 2,
        map: L1ObjectMaps[0]
    },
    {
        name: "L2",
        color: 4,
        startColumn: 3,
        startRow: 2,
        map: L2ObjectMaps[0]
    },
    {
        name: "Z1",
        color: 5,
        startColumn: 4,
        startRow: 2,
        map: Z1ObjectMaps[0]
    },
    {
        name: "Z2",
        color: 6,
        startColumn: 3,
        startRow: 2,
        map: Z2ObjectMaps[0]
    },
    {
        name: "T",
        color: 7,
        startColumn: 3,
        startRow: 2,
        map: TObjectMaps[0]
    },
];

let currentObject = null;

let nextObject = {
    objectShape: Objects[0],
    columnIndex: Objects[0].startColumn,
    rowIndex: Objects[0].startRow,
    orientation: 0,
    currentMap: Objects[0].map
};

let specialLeft = false;
let specialRight = false;
let handlerDown = null;
let newTurn = true;
let time = 400;
let lines = 0;
let score = 0;
let level = 1;
let objectsList = [0, 1, 2, 3, 4, 5, 6];


function startGame() {
    checkLevel();
    time = 600 - level * 100;
    checkObjects();

    addListeners();
    generateObject();
    handlerDown = setInterval(moveDown, time);
}

function checkLevel() {
    let levelFromStorage = localStorage.getItem("level");
    if (levelFromStorage != null) {
        level = parseInt(levelFromStorage);
    }
    else {
        level = 1;
    }

    document.getElementById("level").innerHTML = "<b>" + level + "</b>";
}

function checkObjects() {
    objectsListFromStorage = localStorage.getItem("objects");
    if (objectsListFromStorage != null) {
        objectsList = JSON.parse(objectsListFromStorage);
        NUMBER_OF_SHAPES = objectsList.length;
    }
}

function generateObject() {
    getNewObject();
    let map = currentObject.currentMap;
    
    ret = checkSpaceForNewObject(map);
    if (ret == false) {
        window.location.href = "tetris-rezultati.html";
        return;
    }

    putNewObjectOnTable(map);
    updateNextObjectDisplay();
    updateTable();
}

function getNewObject() {
    let index = Math.floor(Math.random() * NUMBER_OF_SHAPES);
    let shape = objectsList[index];

    if (currentObject == null) {
        currentObject = {
            objectShape: Objects[shape],
            columnIndex: Objects[shape].startColumn,
            rowIndex: Objects[shape].startRow,
            orientation: 0,
            currentMap: Objects[shape].map
        };

        index = Math.floor(Math.random() * NUMBER_OF_SHAPES);
        shape = objectsList[index];
    }
    else {
        currentObject = nextObject;
    }

    nextObject = {
        objectShape: Objects[shape],
        columnIndex: Objects[shape].startColumn,
        rowIndex: Objects[shape].startRow,
        orientation: 0,
        currentMap: Objects[shape].map
    };
}

function updateNextObjectDisplay() {
    let map = nextObject.currentMap;

    for (let i = 0; i < 4; i++) {
        let children = document.getElementById("next_object_row_" + (i + 1)).children;
        for (let j = 0; j < 4; j++) {
            children[j].style.backgroundColor = "gray";
        }
    }

    for (let i = 0; i < map.length; i++) {
        let children = document.getElementById("next_object_row_" + (i + 1)).children;
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] != 0) {
                children[j].style.backgroundColor = colors[nextObject.objectShape.color];
            }
        }
    }
}

function checkSpaceForNewObject(map) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] != 0 && tableMap[i][j + currentObject.columnIndex] != 0) {
                clearInterval(handlerDown);
                let name = prompt("Enter name:");
                if (name != null && name != "") {
                    updateResultsFromStorage(name);
                }
                return false;
            }
        }
    }
    return true;
}

function updateResultsFromStorage(name) {
    localStorage.setItem("lastResult", JSON.stringify(score));
    localStorage.setItem("lastPlayerName", JSON.stringify(name));
    let results = [];

    let resultsFromStorage = localStorage.getItem("results");
    if (resultsFromStorage != null) {
        results = JSON.parse(resultsFromStorage);
    }

    let resultObject = {
        playerName: name,
        result: score
    }

    results.push(resultObject);
    localStorage.setItem("results", JSON.stringify(results));
}

function putNewObjectOnTable(map) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] != 0) {
                tableMap[i][j + currentObject.columnIndex] = currentObject.objectShape.color;
            }
        }
    }
}

function updateTable() {
    for (let i = 0; i < NUMBER_OF_ROWS; i++) {
        let children = document.getElementById("row_" + (i + 1)).children;
        for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
            children[j].style.backgroundColor = colors[tableMap[i][j]];
        }
    }
}

function checkForLines() {
    for (let i = 0; i < NUMBER_OF_ROWS; i++) {
        let cnt = 0;
        for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
            if (tableMap[i][j] != 0) cnt++;
        }

        if (cnt == NUMBER_OF_COLUMNS) {
            for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
                tableMap[i][j] = 0;
            }

            for (let k = i - 1; k >= 0; k--) {
                for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
                    if (tableMap[k][j] != 0) {
                        tableMap[k + 1][j] = tableMap[k][j];
                        tableMap[k][j] = 0;
                    }
                }
            }

            lines++;
            score += 100 + Math.floor(10000 / time);
        }
    }

    document.getElementById("lines").innerHTML = "<b>" + lines + "</b>";
    document.getElementById("score").innerHTML = "<b>" + score + "</b>";
}

function moveDown() {
    let map = currentObject.currentMap;
    let row = currentObject.rowIndex;
    let column = currentObject.columnIndex;
    
    let oldTableMap = [];
    copyTable(oldTableMap, tableMap)

    for (let i = map.length - 1; i >= 0; i--) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] != 0 && row + 1 != NUMBER_OF_ROWS && tableMap[row + 1][column + j] == 0) {
                tableMap[row + 1][column + j] = tableMap[row][column + j];
                tableMap[row][column + j] = 0;
            }
            else if (map[i][j] != 0 && (row + 1 == NUMBER_OF_ROWS || tableMap[row + 1][column + j] != 0)) {
                copyTable(tableMap, oldTableMap);
                checkForLines();
                updateTable();

                updateTime();
                generateObject();
                return;
            }
        }
        row--;
    }
    
    currentObject.rowIndex++;
    updateTable();
}

function updateTime() {
    clearInterval(handlerDown);
    time -= 20 * level;
    if (time < 130 && level == 3) time = 130;
    else if (time < 150 && level == 2) time = 150;
    else if (time < 170 && level == 1) time = 170;
    handlerDown = setInterval(moveDown, time);
}

function copyTable(copiedTable, originalTable) {
    for (let i = 0; i < originalTable.length; i++)
        copiedTable[i] = originalTable[i].slice();
}

function addListeners() {
    document.onkeydown = checkKey;
}

function checkKey(event) {
    if (event.keyCode === 40) {    // ArrowDown
        moveDown();
    }
    else if (event.keyCode === 37) {    // ArrowLeft
        moveLeft();
    }
    else if (event.keyCode === 39) {    // ArrowRight
        moveRight();
    }
    else if (event.keyCode === 38) {    // ArrowUp
        rotateRight();
    }
    else if (event.keyCode === 90) {    // KeyZ
        rotateLeft();
    }
}

function moveLeft() {
    let map = currentObject.currentMap;
    let row = currentObject.rowIndex;
    let column = currentObject.columnIndex;

    let oldTableMap = [];
    copyTable(oldTableMap, tableMap)

    specialLeft = false;
    if (column == 0) {
        let cnt = 0;
        for (let k = 0; k < map.length; k++) {
            if (map[k][0] == 0) cnt++;
        }
        if (cnt == map.length) specialLeft = true;
    }

    for (let i = map.length - 1; i >= 0; i--) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] != 0 && column != 0 && tableMap[row][column + j - 1] == 0) {
                tableMap[row][column + j - 1] = tableMap[row][column + j];
                tableMap[row][column + j] = 0;
            }
            else if (specialLeft && j != 0 && map[i][j] != 0 && tableMap[row][column + j - 1] == 0) {
                tableMap[row][column + j - 1] = tableMap[row][column + j];
                tableMap[row][column + j] = 0;
            }
            else if (map[i][j] != 0 && (column == 0 || tableMap[row][column + j - 1] != 0)) {
                copyTable(tableMap, oldTableMap)
                return;
            }
        }
        row--;
    }

    currentObject.columnIndex--;
    updateTable();
}

function moveRight() {
    let map = currentObject.currentMap;
    let row = currentObject.rowIndex;
    let column = currentObject.columnIndex;

    let oldTableMap = [];
    copyTable(oldTableMap, tableMap)

    specialRight = false;
    if (column == NUMBER_OF_COLUMNS - map[0].length) {
        let cnt = 0;
        let numOfCol = map[0].length;
        for (let k = 0; k < map.length; k++) {
            if (map[k][numOfCol - 1] == 0) cnt++;
        }
        if (cnt == map.length) specialRight = true;
    }

    for (let i = map.length - 1; i >= 0; i--) {
        for (let j = map[i].length - 1; j >= 0; j--) {
            if (map[i][j] != 0 && column != NUMBER_OF_COLUMNS - map[i].length && tableMap[row][column + j + 1] == 0) {
                tableMap[row][column + j + 1] = tableMap[row][column + j];
                tableMap[row][column + j] = 0;
            }
            else if (specialRight && j != map[i].length - 1 && map[i][j] != 0 && tableMap[row][column + j + 1] == 0) {
                tableMap[row][column + j + 1] = tableMap[row][column + j];
                tableMap[row][column + j] = 0;
            }
            else if (map[i][j] != 0 && (column + map[i].length != NUMBER_OF_COLUMNS || tableMap[row][column + j + 1] != 0)) {
                copyTable(tableMap, oldTableMap)
                return;
            }
        }
        row--;
    }

    currentObject.columnIndex++;
    updateTable();
}

function rotateLeft() {
    checkIfCanRotate();

    let side = currentObject.orientation - 1
    if (side == -1) side = 3;
    objectRotation(side);
}

function rotateRight() {
    checkIfCanRotate();

    let side = (currentObject.orientation + 1) % 4;
    objectRotation(side);
}

function checkIfCanRotate() {
    if (currentObject.objectShape.name == "line") {
        if (currentObject.orientation == 1) {
            if (currentObject.columnIndex == -1) {
                moveRight();
                specialLeft = false;
            }
            else if (currentObject.columnIndex == -2) {
                moveRight();
                moveRight();
                specialLeft = false;
            }
            else if (currentObject.columnIndex == NUMBER_OF_COLUMNS - 3) {
                moveLeft();
                specialRight = false;
            }
        }
        else if (currentObject.orientation == 3) {
            if (currentObject.columnIndex == -1) {
                moveRight();
                specialLeft = false;
            }
            else if (currentObject.columnIndex == NUMBER_OF_COLUMNS - 3) {
                moveLeft();
                specialRight = false;
            }
            else if (currentObject.columnIndex == NUMBER_OF_COLUMNS - 2) {
                moveLeft();
                moveLeft();
                specialRight = false;
            }
        }
    }
    else if (specialLeft) {
        moveRight();
        specialLeft = false;
    }
    else if (specialRight) {
        moveLeft();
        specialRight = false;
    }
}

function objectRotation(side) {
    let objectMaps = [];
    switch(currentObject.objectShape.name) {
        case 'line':
            objectMaps = lineObjectMaps;
            break;
        case 'square':
            return;
        case 'L1':
            objectMaps = L1ObjectMaps;
            break;
        case 'L2':
            objectMaps = L2ObjectMaps;
            break;
        case 'Z1':
            objectMaps = Z1ObjectMaps;
            break;
        case 'Z2':
            objectMaps = Z2ObjectMaps;
            break;
        case 'T':
            objectMaps = TObjectMaps;
            break;
    }

    let previousOrientation = currentObject.orientation;
    let previousMap = [];
    copyTable(previousMap, currentObject.currentMap);

    switch(side) {
        case 0:
            currentObject.currentMap = objectMaps[0];
            currentObject.orientation = 0;
            break;
        case 1:
            currentObject.currentMap = objectMaps[1];
            currentObject.orientation = 1;
            break;
        case 2:
            currentObject.currentMap = objectMaps[2];
            currentObject.orientation = 2;
            break;
        case 3:
            currentObject.currentMap = objectMaps[3];
            currentObject.orientation = 3;
            break;
    }

    let startRow = currentObject.rowIndex - currentObject.currentMap.length + 1;
    let startColumn = currentObject.columnIndex;
    let endRow = currentObject.rowIndex + 1;
    let endColumn = currentObject.columnIndex + currentObject.currentMap[0].length;

    rotateOnTableMap(previousOrientation, previousMap, startRow, startColumn, endRow, endColumn);
    updateTable();
}

function rotateOnTableMap(previousOrientation, previousMap, startRow, startColumn, endRow, endColumn) {
    let oldTableMap = [];
    copyTable(oldTableMap, tableMap)

    for (let i = startRow; i < endRow; i++) {
        for (let j = startColumn; j < endColumn; j++) {
            if (previousMap[i - startRow][j - startColumn] != 0) {
                tableMap[i][j] = 0;
            }
        }
    }

    for (let i = startRow; i < endRow; i++) {
        for (let j = startColumn; j < endColumn; j++) {
            if (currentObject.currentMap[i - startRow][j - startColumn] != 0 && tableMap[i][j] == 0) {
                tableMap[i][j] = currentObject.objectShape.color;
            }
            else if (currentObject.currentMap[i - startRow][j - startColumn] != 0 && tableMap[i][j] != 0) {
                copyTable(tableMap, oldTableMap)
                currentObject.currentMap = previousMap;
                currentObject.orientation = previousOrientation;
                return;
            }
        }
    }
}

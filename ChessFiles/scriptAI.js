var AI;
function activateActivation() {
  AI = true;
  document.getElementById("AIID").disabled = true;
  document.getElementById("AIID").innerHTML = "AI Activated"
}

function activateAI() {
  var kingXai;
  var kingYai;
  for (l = 1; l < 9; l++) {
    for (v = 1; v < 9; v++) {
      if (document.getElementById(l + "." + v).value === "wK") {
        kingXai = l
        kingYai = v
      }
    }
  }
  document.getElementById("turn").value = "w";
  enableAll();
  disableBlack();
  if (turn === "black") {
    document.getElementById("AIID").disabled = true;
    document.getElementById("AIID").innerHTML = "AI Activated"
    var pointsAI = 0;
    var tempPoints;
    var oldIdAi;
    var eatID;
    var eatenAI;
    var distance;
    var valueXai;
    var valueYai;
    var pawnValue;
    var eaten;
    //var maxSoloPoints;
    for (i = 1; i < 9; i++) {
      for (j = 1; j < 9; j++) {
        let idAI = i + "." + j
        let valueAI = document.getElementById(idAI).value;
        let colorAI = valueAI.slice(0, 1);
          if (colorAI == "b") {
            tempPoints = 0;
            let typeAI = valueAI.slice(1, 2);
            if (typeAI === "P") {
              pawnAI(idAI);
            } else if (typeAI === "B") {
              //whiteBishop(id);
            } else if (typeAI === "R") {
              //whiteRook(id);
            } else if (typeAI === "H") {
              //whiteHorse(id);
            } else if (typeAI === "Q") {
              //whiteQueen(id);
            } else if (typeAI === "K") {
              //whiteKing(id);
            }
          }
      }
    }
    function pawnAI(id) {
     //maxSoloPoints = 0;
     pawnValue = document.getElementById(id).value
     valueXai = document.getElementById(id).id.slice(0, 1);
     valueYai = document.getElementById(id).id.slice(2, 3);
     for (k = 0; k < 4; k++) {
      if (valueYai !== "1") {
        if (k == "0") {
          if (valueYai === "7" && valueYai !== "2") {
            if ((document.getElementById(valueXai + "." + (Number(valueYai) - 2)).value === " ") && (document.getElementById(valueXai + "." + (Number(valueYai) - 1)).value === " ")) {
              moveID = valueXai + "." + (Number(valueYai) - 2)
              scoreSystem();
              checkScore(moveID);
            }
          }
        }
        if (k == "1") { 
          if (document.getElementById(valueXai + "." + (Number(valueYai) - 1)).value === " ") {
            moveID = valueXai + "." + (Number(valueYai) - 1);
            scoreSystem();
            checkScore(moveID);
          } 
        }
        if (k == "2") {
          if (valueXai !== "1") {
            if (document.getElementById((Number(valueXai) - 1) + "." + (Number(valueYai) - 1)).value.slice(0, 1) === "w") {
              moveID = (Number(valueXai) - 1) + "." + (Number(valueYai) - 1);
              scoreSystem();
              checkScore(moveID);
            }
          }
        }
        if (k == "3") {
          if (valueXai !== "8") {
            if (document.getElementById((Number(valueXai) + 1) + "." + (Number(valueYai) - 1)).value.slice(0, 1) === "w") {
              moveID = (Number(valueXai) + 1) + "." + (Number(valueYai) - 1);
              scoreSystem();
              checkScore(moveID);
            }
          }
        }
      }
    }
  }
  function checkScore(id) {
      eaten = document.getElementById(id).value.slice(1, 2);
      eatSystem(eaten);
      if (tempPoints > pointsAI) {
        pointsAI = tempPoints;
        eatenAI = moveID;
        oldIdAi = valueXai + "." + valueYai
      }
  }
  function scoreSystem() {
    distance = Math.sqrt(Math.pow(valueXai - kingXai, 2) + Math.pow(valueYai - kingYai, 2));
    tempPoints += 9 - distance;
  }
  function eatSystem(type) {
    if (type === "P") {
      tempPoints += 2
    } else if(type === "B") {
      tempPoints += 6
    } else if(type === "H") {
      tempPoints += 9
    } else if(type === "R") {
      tempPoints += 12
    } else if(type === "Q") {
      tempPoints += 15
    } else if(type === "K") {
      tempPoints += 100
    }
    return tempPoints;
  }
  movementAI(pawnValue);
  function movementAI(typeValue) {
    document.getElementById(oldIdAi).value = " ";
    let iconAI = document.getElementById(oldIdAi).innerHTML
    document.getElementById(oldIdAi).innerHTML = "&nbsp;"
    document.getElementById(eatenAI).value = typeValue;
    document.getElementById(eatenAI).innerHTML = iconAI
    document.getElementById(eatenAI).style = "background-color:#8c2e00;background-image:url(http://www.transparenttextures.com/patterns/wood-pattern.png);color:black;width:40px;height:40px;"
    turn = "white"
    clear();
    disableBlack();
  }
  }
}
function gamestart() {
    let tour = 0;
    let tabgame = [];
    let reseting = false // pour ne pas prendre en cosideration les cliques une fois la partie fini

    function wincondition() {
        //victoire en lignes
        for (let i = 0; i < tabgame.length; i += 3) {
            if (tabgame[i] + tabgame[i + 1] + tabgame[i + 2] == 3 || tabgame[i] + tabgame[i + 1] + tabgame[i + 2] == 12) {
                return true;
            };
        };
        //victoire en colonnes
        for (let i = 0; i < 3; i++) {
            if (tabgame[i] + tabgame[i + 3] + tabgame[i + 6] == 3 || tabgame[i] + tabgame[i + 3] + tabgame[i + 6] == 12) {
                return true;
            };
        };
        //victoire en diagonale
        if (tabgame[0] + tabgame[4] + tabgame[8] == 3 || tabgame[0] + tabgame[4] + tabgame[8] == 12 || tabgame[2] + tabgame[4] + tabgame[6] == 3 || tabgame[2] + tabgame[4] + tabgame[6] == 12) {
            return true;
        }
        return false;
    };

    function resetgame() {
        for (let i = 0; i < button.length; i++) {
            button[i].textContent = "";
        };
        tabgame = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        tour = 0;
        winDiv.textContent = "";
        reseting=false
    };

    //si la somme de tout les int du tableau == 21 cela signifie que le tableau est rempli
    function sommeTab() {
        let tabsomme = 0
        for (i = 0; i < tabgame.length; i++) {
            tabsomme += tabgame[i]
        };
        console.log(tabsomme)
        if (tabsomme == 21) {
            return true;
        };
        return false;
    }

    function weHaveAWinner() {
        if (tour % 2 == 0) {
            winDiv.textContent = "Les ronds ont gagnés!";
        } else {
            winDiv.textContent = "les croix ont gagnés!";
        }
        reseting=true
        setTimeout(resetgame, 2500);
    };

    //actions quand le joueur clique sur une case
    function mark() {
        if(!reseting){
            var tabIndex = this.id - 1
            if (tour % 2 == 0 & this.textContent == "" & !wincondition() & !sommeTab()) {
                tabgame[tabIndex] = 1;
                this.textContent = "X";
                tour += 1;
            } else if (tour % 2 == 1 & this.textContent == "" & !wincondition() & !sommeTab()) {
                tabgame[tabIndex] = 4;
                this.textContent = "O";
                tour += 1;
            };
            if (wincondition()) {
                weHaveAWinner();
            } else if (sommeTab()) {                          //s'il n'y a pas de gagnant et si le tableau est rempli, la partie est nulle
                winDiv.textContent = "Partie nulle!";
                reseting=true
                setTimeout(resetgame, 2500);
            };
        }
    };

    // recup des div nécéssaires dans le html
    const winDiv = document.querySelector("div#gameresult");
    const button = document.querySelectorAll("div.cases");
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', mark);
    };
}

gamestart()
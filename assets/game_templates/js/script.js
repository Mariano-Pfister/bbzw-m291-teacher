    $(document).ready(function () {

        // variablen
        if (localStorage.clickercount) {
            // variabel aus dem Local Storage holen
            var clickercount = Number(localStorage.clickercount);
        } else {
            // variabel neu erstellt
            var clickercount = 0;
        }

        if (localStorage.addCountClick) {
            var addCountClick = Number(localStorage.addCountClick);
        } else {
            var addCountClick = 1;
        }

        if (localStorage.amountBauern) {
            var amountBauern = Number(localStorage.amountBauern);
        } else {
            var amountBauern = 0;
        }

        // Bauern des voreherigen Speicherstandes erstellen
        for (i = 0; i < amountBauern; i++) {
            $('.bauernKarte').append('<img class="bauer" src="assets/game_templates/img/farmer.png">');
        }

        if (localStorage.amountFabrik) {
            var amountFabrik = Number(localStorage.amountFabrik);
        } else {
            var amountFabrik = 0;
        }
        if (localStorage.countFabrik) {
            var countFabrik = Number(localStorage.countFabrik);
        } else {
            var countFabrik = 0;
        }

        // Fabriken des voreherigen Speicherstandes erstellen
        for (i = 0; i < countFabrik; i++) {
            $('.fabrikKarte').append('<img class="fabrik" src="assets/game_templates/img/factory.png">');
        }

        if (localStorage.amountPortal) {
            var amountPortal = Number(localStorage.amountPortal);
        } else {
            var amountPortal = 0;
        }
        if (localStorage.countPortal) {
            var countPortal = Number(localStorage.countPortal);
        } else {
            var countPortal = 0;
        }

        if (localStorage.amountStar) {
            var amountStar = Number(localStorage.amountStar);
        } else {
            var amountStar = 0;
        }
        if (localStorage.countStar) {
            var countStar = Number(localStorage.countStar);
        } else {
            var countStar = 0;
        }

        // Portale und Sterne des voreherigen Speicherstandes erstellen
        for (i = 0; i < countPortal; i++) {
            $('.portalKarte').append('<img class="portal" src="assets/game_templates/img/portal.png">');
        }

        for (i = 0; i < countStar; i++) {
            $('.starKarte').append('<img class="star" src="assets/game_templates/img/ara.png">');
        }

        // Restliche Variabeln definieren
        if (localStorage.masterclickerCount) {
            var masterclickerCount = Number(localStorage.masterclickerCount);
        } else {
            var masterclickerCount = 0;
        }

        if (localStorage.masterClickCount) {
            var masterClickCount = Number(localStorage.masterClickCount);
        } else {
            var masterClickCount = 0;
        }

        if (localStorage.upgradeClickCountCost) {
            var upgradeClickCountCost = Number(localStorage.upgradeClickCountCost);

        } else {
            var upgradeClickCountCost = 10;
        }

        if (localStorage.upgradeBauerCost) {
            var upgradeBauerCost = Number(localStorage.upgradeBauerCost);

        } else {
            var upgradeBauerCost = 50;
        }

        if (localStorage.upgradeFabrikCost) {
            var upgradeFabrikCost = Number(localStorage.upgradeFabrikCost);

        } else {
            var upgradeFabrikCost = 200;
        }

        if (localStorage.upgradePortalCost) {
            var upgradePortalCost = Number(localStorage.upgradePortalCost);

        } else {
            var upgradePortalCost = 1000;
        }

        if (localStorage.upgradeStarCost) {
            var upgradeStarCost = Number(localStorage.upgradeStarCost);

        } else {
            var upgradeStarCost = 10000;
        }

        if (localStorage.amountReload) {
            var amountReload = Number(localStorage.amountReload)
            amountReload = amountReload + 1;
        } else {
            var amountReload = 1;
        }
        // Kosten für die Upgrades laden
        $('.clickUpgradeWrapper .kostenUpgrade span').text(upgradeClickCountCost);
        $('.bauerUpgradeWrapper .kostenUpgrade span').text(upgradeBauerCost);
        $('.fabrikUpgradeWrapper .kostenUpgrade span').text(upgradeFabrikCost);
        $('.portalUpgradeWrapper .kostenUpgrade span').text(upgradePortalCost);
        $('.starUpgradeWrapper .kostenUpgrade span').text(upgradeStarCost);

        // Geheimes Upgrade welches nurch durch eine bestimmte Kompination ausgeführt wird
        if (amountBauern >= 3 && clickercount > 1000 && amountReload > 3) {
            $(".bauernKarte").empty();
            for (i = 0; i < amountBauern; i++) {
                $('.bauernKarte').append('<img class="bauer cat" src="assets/game_templates/img/nekogirl.png">');
            }
            $('.clicker').attr('onclick', 'playAudio("assets/game_templates/audio/nyan.mp3")');
        } else {

        }

        // Geheimes Upgrade welches nurch ab 100000 clicks erscheint 
        $('.clickImg').click(function () {
            if (clickercount >= 9999) {
                $(".clickImg").attr("src", "assets/game_templates/img/roxy-migurdia.gif")
            } else {
            }
        });
        // Geheimes Upgrade welches nurch ab 1000000 clicks erscheint ausgeführt wird
        $('.clickImg').click(function () {
            if (clickercount >= 99999) {
                $(".clickImg").attr("src", "assets/game_templates/img/ara.png");
                $('.clicker').attr('onclick', 'playAudio("assets/game_templates/audio/nyan.mp3")')
            } else {
            }
        });

        // Statistiken
        setInterval(function () {
            document.getElementsByClassName("amount")[0].innerHTML = clickercount.toLocaleString();
            document.getElementsByClassName("spanclickers")[0].innerHTML = clickercount.toLocaleString();
            document.title = clickercount + " clicks | WAIFU4LIFE CLICKER"; // Tab Text updaten
        }, 0);

        // Variabeln in Local Storage speichern
        $('#saveButton').click(function () {
            saveCurrentStatus()
        });

        function saveCurrentStatus() {
            // alle Variabeln in Local Storage speichern
            localStorage.setItem('clickercount', clickercount);
            localStorage.setItem('addCountClick', addCountClick);
            localStorage.setItem('amountBauern', amountBauern);
            localStorage.setItem('amountFabrik', amountFabrik);
            localStorage.setItem('countFabrik', countFabrik);
            localStorage.setItem('amountPortal', amountPortal);
            localStorage.setItem('countPortal', countPortal);
            localStorage.setItem('amountStar', amountStar);
            localStorage.setItem('countStar', countStar);
            localStorage.setItem('masterclickerCount', masterclickerCount);
            localStorage.setItem('masterClickCount', masterClickCount);
            localStorage.setItem('upgradeClickCountCost', upgradeClickCountCost);
            localStorage.setItem('upgradeBauerCost', upgradeBauerCost);
            localStorage.setItem('upgradeFabrikCost', upgradeFabrikCost);
            localStorage.setItem('upgradePortalCost', upgradePortalCost);
            localStorage.setItem('upgradeStarCost', upgradeStarCost);
            localStorage.setItem('amountReload', amountReload);
        }

        // // Zufällige Farbe erzeugen und diese per Klick auf den Hintergrund setzen (16.8 Millionen möglichkeiten da RGB);
        // $("#colorButton").click(function () {
        //     // Zufällige Farbe aus RED;
        //     var r = Math.floor(Math.random() * 256);
        //     // Zufällige Farbe aus GREEN;
        //     var g = Math.floor(Math.random() * 256);
        //     // Zufällige Farbe aus BLUE;
        //     var b = Math.floor(Math.random() * 256);
        //     console.log(r, g, b);
        //     var color = "rgb" + "(" + r + "," + g + "," + b + ")";
        //     console.log(color);
        //     $('body').css('background-color', color);
        // });

        // Spiel zurücksetzten
        $('#resetButton').click(function () {
            localStorage.clear();
            location.reload(true)
        });

        // bei Ctrl + S speichern
        // Schauen wan man einen Knopf nach unten drückt
        $(window).bind('keydown', function (event) {
            //falls der Knopf ctrl oder bei Mac cmd ist
            if (event.ctrlKey || event.metaKey) {
                // nimmt den 2 Knopf und speichert ihn in einen String als Kleinbuchstabe
                switch (String.fromCharCode(event.which).toLowerCase()) {
                    // falls der String s ist dann führe den Code aus
                    case 's':
                        event.preventDefault();
                        saveCurrentStatus()
                }
            }
        });

        // clicker hinzufügen bei Klick
        $('.clicker_img img').click(function () {
            clickercount = clickercount + addCountClick; // clicker bei Klick hinzufügen
            $("#clickerCount").value = clickercount; // clicker Zähler updaten
        })

        //info Texte einblenden
        $(".infoTriggerButton").click(function () {
            $(this).siblings('.infoNode').toggleClass('active');
        })

        // erstes Upgrade
        // clicker pro Klick + 1
        $('.spanClicksValue').text(addCountClick);
        $('.clickUpgradeWrapper .upgradeNode').click(function () {
            if (clickercount >= upgradeClickCountCost) { // wen man genug clickers besitzt
                addCountClick = addCountClick + 1; // clicker pro Klick + 1
                clickercount = clickercount - upgradeClickCountCost; // Kosten berechnen

                upgradeClickCountCost = upgradeClickCountCost * 1.25; // kosten erhöhen
                upgradeClickCountCost = Math.round(upgradeClickCountCost / 5) * 5; // kosten immer auf 0.5 oder ganze Zahlen runden

                $('.clickUpgradeWrapper .kostenUpgrade span').text(upgradeClickCountCost); // Statistik updaten
                $('.spanClicksValue').text(addCountClick); // Kosten in der Info Box updaten
            } else { // wen man zu wenig clickers
                var clickerDiffrence = upgradeClickCountCost - clickercount;
                // Konsole gibt meldung ("Du hast nicht genügend clickers: dir fehlen " + clickerDiffrence + " clickers")
                var hours = (new Date()).getHours();
                var minutes = (new Date()).getMinutes();
                var seconds = (new Date()).getSeconds();
                $('.console').append('<p><span>' + hours + ':' + minutes + ':' + seconds + ' Uhr' + ' ></span> Du hast nicht genügend Clicks: Dir fehlen ' + clickerDiffrence + ' Clicks um ein Click-Upgrade zu kaufen.</p>')
            }
        })

        // zweites Upgrade
        // clicker pro Sekunde + 1
        $('.spanBauernValue').text(amountBauern);
        $('.bauerUpgradeWrapper .upgradeNode').click(function () {
            if (clickercount >= upgradeBauerCost) { // wen man genug clickers besitzt
                amountBauern = amountBauern + 1;
                clickercount = clickercount - upgradeBauerCost; // Kosten berechnen

                upgradeBauerCost = upgradeBauerCost * 1.25; // kosten erhöhen
                upgradeBauerCost = Math.round(upgradeBauerCost / 5) * 5; // kosten immer auf 05 oder ganze Zahlen runden

                $('.bauerUpgradeWrapper .kostenUpgrade span').text(upgradeBauerCost); // Statistik updaten
                $('.spanBauernValue').text(amountBauern); // Kosten in der Info Box updaten

                $('.bauernKarte').append('<img class="bauer" src="assets/game_templates/img/farmer.png">'); // bauer erstellen in der Karte

            } else { // wen man zu wenig clickers
                var clickerDiffrence = upgradeBauerCost - clickercount;
                //alert("Du hast nicht genügend clickers: dir fehlen " + clickerDiffrence + " clickers")
                var hours = (new Date()).getHours();
                var minutes = (new Date()).getMinutes();
                var seconds = (new Date()).getSeconds();
                $('.console').append('<p><span>' + hours + ':' + minutes + ':' + seconds + ' Uhr' + ' ></span> Du hast nicht genügend Clicks: dir fehlen ' + clickerDiffrence + ' Clicks um einen Bauer zu kaufen.</p>')
            }
        })

        setInterval(function () {
            if (amountBauern > 0) {
                clickercount = clickercount + amountBauern;
            } else {

            }
        }, 1000);

        // Drittes Upgrade
        // clicker pro Sekunde + 5
        $('.spanFabrikValue').text(amountFabrik);
        $('.fabrikUpgradeWrapper .upgradeNode').click(function () {
            if (clickercount >= upgradeFabrikCost) { // wen man genug clickers besitzt
                amountFabrik = amountFabrik + 5;
                countFabrik = countFabrik + 1;
                clickercount = clickercount - upgradeFabrikCost; // Kosten berechnen

                upgradeFabrikCost = upgradeFabrikCost * 1.25; // kosten erhöhen
                upgradeFabrikCost = Math.round(upgradeFabrikCost / 5) * 5; // kosten immer auf 05 oder ganze Zahlen runden

                $('.fabrikUpgradeWrapper .kostenUpgrade span').text(upgradeFabrikCost); // Statistik updaten
                $('.spanFabrikValue').text(amountFabrik); // Kosten in der Info Box updaten

                $('.fabrikKarte').append('<img class="fabrik" src="assets/game_templates/img/factory.png">') // Fabrik erstellen in der Karte
            } else { // wen man zu wenig clickers
                var clickerDiffrence = upgradeFabrikCost - clickercount;
                //alert("Du hast nicht genügend clickers: dir fehlen " + clickerDiffrence + " clickers")
                var hours = (new Date()).getHours();
                var minutes = (new Date()).getMinutes();
                var seconds = (new Date()).getSeconds();
                $('.console').append('<p><span>' + hours + ':' + minutes + ':' + seconds + ' Uhr' + ' ></span> Du hast nicht genügend Clicks: dir fehlen ' + clickerDiffrence + ' Clicks um eine Fabrik zu kaufen.</p>')
            }
        })

        setInterval(function () {
            if (amountFabrik > 0) {
                clickercount = clickercount + amountFabrik;
            } else {

            }
        }, 1000);

        // viertes Upgrade
        // clicker pro Sekunde + 20
        $('.spanPortalValue').text(amountPortal)
        $('.portalUpgradeWrapper .upgradeNode').click(function () {
            if (clickercount >= upgradePortalCost) { // wen man genug clickers besitzt
                amountPortal = amountPortal + 20;
                countPortal = countPortal + 1;
                clickercount = clickercount - upgradePortalCost; // Kosten berechnen

                upgradePortalCost = upgradePortalCost * 1.25; // kosten erhöhen
                upgradePortalCost = Math.round(upgradePortalCost / 5) * 5; // kosten immer auf 05 oder ganze Zahlen runden

                $('.portalUpgradeWrapper .kostenUpgrade span').text(upgradePortalCost); // Statistik updaten
                $('.spanPortalValue').text(amountPortal); // Kosten in der Info Box updaten

                $('.portalKarte').append('<img class="portal" src="assets/game_templates/img/portal.png">') // Portal erstellen in der Karte
            } else { // wen man zu wenig clickers
                var clickerDiffrence = upgradePortalCost - clickercount;
                //    alert("Du hast nicht genügend clickers: dir fehlen " + clickerDiffrence + " clickers")
                var hours = (new Date()).getHours();
                var minutes = (new Date()).getMinutes();
                var seconds = (new Date()).getSeconds();
                $('.console').append('<p><span>' + hours + ':' + minutes + ':' + seconds + ' Uhr' + ' ></span> Du hast nicht genügend Clicks: dir fehlen ' + clickerDiffrence + ' Clicks um ein Portal zu kaufen.</p>')
            }
        })

        setInterval(function () {
            if (amountPortal > 0) {
                clickercount = clickercount + amountPortal;
            } else {

            }
        }, 1000);

        // fünftes Upgrade
        // clicker pro Sekunde + 20
        $('.spanStarValue').text(amountStar)
        $('.starUpgradeWrapper .upgradeNode').click(function () {
            console.log(upgradeStarCost)
            if (clickercount >= upgradeStarCost) { // wen man genug clickers besitzt
                console.log("F")
                amountStar = amountStar + 100;
                countStar = countStar + 1;
                clickercount = clickercount - upgradeStarCost; // Kosten berechnen

                upgradeStarCost = upgradeStarCost * 1.25; // kosten erhöhen
                upgradeStarCost = Math.round(upgradeStarCost / 5) * 5; // kosten immer auf 05 oder ganze Zahlen runden

                $('.starUpgradeWrapper .kostenUpgrade span').text(upgradeStarCost); // Statistik updaten
                $('.spanStarValue').text(amountStar); // Kosten in der Info Box updaten

                $('.starKarte').append('<img class="star" src="assets/game_templates/img/ara.png">') // star erstellen in der Karte
            } else { // wen man zu wenig clickers
                var clickerDiffrence = upgradeStarCost - clickercount;
                //    alert("Du hast nicht genügend clickers: dir fehlen " + clickerDiffrence + " clickers")
                var hours = (new Date()).getHours();
                var minutes = (new Date()).getMinutes();
                var seconds = (new Date()).getSeconds();
                $('.console').append('<p><span>' + hours + ':' + minutes + ':' + seconds + ' Uhr' + ' ></span> Du hast nicht genügend Clicks: dir fehlen ' + clickerDiffrence + ' Clicks um einen Stern zu kaufen.</p>')
            }
        })

        setInterval(function () {
            if (amountStar > 0) {
                clickercount = clickercount + amountStar;
            } else {

            }
        }, 1000);

    });

    // Spielt Audio-Datei ab
    function playAudio(url) {
        new Audio(url).play();
    }
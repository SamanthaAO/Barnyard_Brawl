

$(document).ready(function () {
    //define variables
    var yourCharacter = "";
    var enemy = "";
    var ycHealth = "";
    var ycInitialAttack = "";
    var ycAttack = 0;
    var enemyHealth = "";
    var enemyDefense = "";
    var enemyCounter = 0;


    var characters = [
        {
            name: "Goat",
            initialAttack: 5,
            defense: 7,
            health: 10,
            image: "assets/images/goat.jpg",
        },
        {
            name: "Cow",
            initialAttack: 10,
            defense: 5,
            health: 200,
            image: "assets/images/cow.jpg",
        },
        {
            name: "Sheep",
            initialAttack: 4,
            defense: 6,
            health: 180,
            image: "assets/images/sheep.jpg",
        },
        {
            name: "Pig",
            initialAttack: 8,
            defense: 9,
            health: 210,
            image: "assets/images/pig.jpg",
        },
    ];

    function displayCharacters() {
        var html = "";
        characters.forEach(function (character, i) {
            var name = character.name.toLowerCase();
            html += `<button class="characterTile" id="${name}Tile" value="${i}">
                        <div class="card text-center">
                            <div class="card-header">
                            ${character.name}
                            </div>

                            <div class="card-body">
                                <img src="${character.image}" alt="${name}" width="150" height="150">
                            </div>

                            <div class="card-footer${i}">
                            Health
                            </div>
                        </div>
                    </button>`;

        });

        $("#characterRow").html(html);
    }
    displayCharacters();


    function health() {
        for (var j = 0; j < characters.length; j++) {
            $(".card-footer" + j).text(characters[j].health + "HP");
        }
    }
    health();

    function fighterStats(isEnemy, obj){
        var div = (isEnemy) ? "#enemyDiv" : "#ycDiv";
        var msg = (isEnemy) ? "Current Oppenent: " : "Your Character: ";
        var myClass = (isEnemy) ? "enemy" : "yc";
        var id = $(obj).val();
        $(div).append(`<h1>${msg}</h1>`);
        $(div).append(obj);
        $(obj).addClass(myClass);
        if (isEnemy)
        {
            enemyHealth = characters[id].health;
            enemyDefense = characters[id].defense;
            enemyName = characters[id].name;
            enemy = id;
        }
        else {
            ycHealth = characters[id].health;
            ycInitialAttack = characters[id].initialAttack;
            ycAttack = ycInitialAttack;
            ycName = characters[id].name;
            yourCharacter = id;
        }

    }

    //start all character tiles in the begining div
    $("#begin").append($(".characterTile"));
    $("#restartBox").text("Click on the character that you would like to play as first. Then click to select your first opponent. CHOOSE WISELY!")



    $(".characterTile").on("click", function () {
        //assign yc
        if (yourCharacter === "" && enemy === "") {

            fighterStats(false, this);

            $('#begin').prepend("<h1>Future Opponents:</h1>");

            //create restart button
            $("#restartBox").empty();
            $('#restartBox').append("<button type='button' class='btn btn-danger restartBtn'>New Game</button><br>")
            $('.restartBtn').click(function () {
                location.reload();
            });

            // create attack button
            $('#attackBox').append("<button type='button' class='btn btn-danger attackBtn'>Attack</button><br>")
            

            //checks
            //  indexValue = parseInt(indexValue);  <- this might need to be used if issues with subtrracting later down the line. 

        }
        //assign enemy 
        else if (enemy === "") {
            fighterStats(true, this);
        }
    })

    //create click event for attack button
    $('#attackBox').on("click", ".attackBtn", function () {
        if (ycHealth >= 0 && enemyHealth >= 0 && enemy !== "") {
            enemyHealth = enemyHealth - ycAttack;
            ycHealth = ycHealth - enemyDefense;

            $('#narration').text("You attacked " + enemyName + " for " + ycAttack + " damage. " + enemyName +
                " attacked back for " + enemyDefense + " damage.");


            ycAttack = ycInitialAttack + ycAttack;
            $(".card-footer" + yourCharacter).text(ycHealth + "HP");
            $(".card-footer" + enemy).text(enemyHealth + "HP");
            console.log(ycHealth);
            console.log(enemyHealth);

            // if (enemyHealth <= 0) {
            //     $('#narration').text("You have defeated " + enemyName + "!!! Select your next opponent.");
            //     $('#enemyDiv').empty();
            //     enemy = "";
            // }


        }
        
        //check to see if anyone has been defeated
        if (enemyHealth <= 0 && enemy !== "") {

            $('#narration').text("You have defeated " + enemyName + "!!! Select your next opponent.");
            $('#enemyDiv').empty();
            enemyCounter++;
            enemy = "";
            if (enemyCounter === characters.length-1){
                $("#begin").empty();
                $("#begin").text("You beat all possible opponents!!! Click new game to restart.");
            }
        }

        else if(ycHealth <= 0  && enemy !== "" ) {
            $('#narration').text("You have been defeated :(");
            $('#ycDiv').empty(); 
        }

    })


















})









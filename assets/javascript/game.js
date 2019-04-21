

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

    //create array of objects to create tiles from
    var characters = [
        {
            name: "Goat",
            initialAttack: 8,
            defense: 15,
            health: 120,
            image: "assets/images/goat.jpg",
        },
        {
            name: "Cow",
            initialAttack: 14,
            defense: 5,
            health: 100,
            image: "assets/images/cow.jpg",
        },
        {
            name: "Sheep",
            initialAttack: 8,
            defense: 20,
            health: 150,
            image: "assets/images/sheep.jpg",
        },
        {
            name: "Pig",
            initialAttack: 7,
            defense: 25,
            health: 180,
            image: "assets/images/pig.jpg",
        },
    ];


    //funtion to create character tiles
    function displayCharacters() {
        var html = "";
        characters.forEach(function (character, i) {
            html += `<button class="characterTile mx-3 mt-3" value="${i}">
                        <div class="card text-center">
                            <div class="card-header">
                            ${character.name}
                            </div>

                            <div class="card-body">
                                <img src="${character.image}" alt="${character.name}" width="150" height="150">
                            </div>
                            <div class="card-footer${i} py-0"></div>
                             
                        </div>
                    </button>`;

        });

        $("#characterRow").html(html);
    }
    displayCharacters();

   //create health value to be displayed 
    function health(){
        for(var j=0; j<characters.length; j++){
        $(".card-footer" +j).text(characters[j].health + "HP");
        }
    }
    health();

   //creates enemy and yc stats
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
            $(".card-footer" + yourCharacter).html(ycHealth + "HP");
            $(".card-footer" + enemy).html(enemyHealth + "HP");
            console.log(ycHealth);
            console.log(enemyHealth);

            


        }
        
        //check to see if anyone has been defeated
       // one enemy defeated
        if (enemyHealth <= 0 && enemy !== "") {

            $('#narration').html("You have defeated " + enemyName + "!!! <br> Select your next opponent.");
            $('#enemyDiv').empty();
            $('#begin').append("<img src='assets/images/grave.png' alt='grave' width='150' height='150'></img>")
            
            enemyCounter++;
            enemy = "";
            //all eneemy defeated
            if (enemyCounter === characters.length-1){
                
                $('#narration').empty();
                $("#begin").prepend("You beat all possible opponents!!! <br> Click new game to restart.");
            }
        }
        //yc defeated
        else if(ycHealth <= 0  && enemy !== "" ) {
            $('#ycDiv').empty();
            $('#narration').html("You have been defeated :( <br> Click new game to restart.");
            $('#ycDiv').addClass( "mt-5" ).append("<img src='assets/images/grave.png' alt='grave' width='150' height='150'></img>");
        }

    })

})









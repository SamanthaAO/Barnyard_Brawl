    


$(document).ready(function() {
    //define variables
    var yourCharacter = "";
    var enemy = "";
    var ycHealth = "";
    var ycInitialAttack ="";
    var ycAttack = 0;
    var enemyHealth ="";
    var enemyDefense ="";


    var characters = [
        goat = {
            name: "Goat",
            initialAttack: 5,
            defense: 7,
            health: 160,
            image: "<img src='assets/images/goat.jpg' alt='goat' width='150' height='150'>",
        },
    
        cow = {
            name: "Cow",
            initialAttack: 10,
            defense: 5,
            health: 200,
            image: "<img src='assets/images/cow.jpg' alt='cow' width='150' height='150'>",
        },
    
        sheep = {
            name: "Sheep",
            initialAttack: 4,
            defense: 6,
            health: 180,
            image: "<img src='assets/images/sheep.jpg' alt='sheep' width='150' height='150'>",
        },
    
        pig = {
            name: "Pig",
            initialAttack: 8,
            defense: 9,
            health: 210,
            image: "<img src='assets/images/pig.jpg' alt='pig' width='150' height='150'>",
        },
    ];
    
    
    
    
    // console.log(characters[1].defense);

    //start all character tiles in the begining div
    $("#begin").append($(".characterTile"));

    $(".characterTile").on("click", function() {
        //assign yc
        if(yourCharacter === "" && enemy === ""){
        $('#ycDiv').append("<h1>Your Character:</h1>");
        $('#ycDiv').append(this);
            var i = $(this).val();
                ycHealth = characters[i].health;
                ycInitialAttack = characters[i].initialAttack;
                ycAttack = ycInitialAttack;
                yourCharacter = i;
        $('#begin').prepend("<h1>Future Oponents:</h1>");
        
 
        //checks
        //  indexValue = parseInt(indexValue);  <- this might need to be used if issues with subtrracting later down the line. 
        console.log(i); 
        console.log(ycHealth);
        console.log(ycInitialAttack);
        }
        //assign enemy 
        else if(enemy ===""){
            $('#enemyDiv').append("<h1>Current Oponent:</h1>");
            $('#enemyDiv').append(this); 
                var i = $(this).val();
                    enemyHealth = characters[i].health;
                    enemyDefense = characters[i].defense;
                    enemy = i;
                        console.log(enemyHealth);
                        console.log(ycHealth);
        
        $('#ycDiv').append("<button type='button' class='btn btn-danger' id='attackButton'>Attack</button>")
        }
    })

    $(".attackButton").on("click", function() {
        console.log(enemyHealth);
        console.log(ycHealth);
        
        if(ycHealth >= 0 && enemyHealth >= 0){
            enemyHealth = enemyHealth - ycInitialAttack;
            ycHealth = ycHealth - enemyDefense;
            ycAttack = ycInitialAttack + ycAttack;

                console.log(enemyHealth); 
                console.log(ycHealth);
                console.log(ycAttack);
        }
        else if (enemyHealth <=0){

        }
        else{

        }


    })

  








})








    // $('#begin').append('<div id="goat" />');
    // $('#goat').append(characters[0].name + "<br>");
    // $('#goat').append(characters[0].image + "<br>");
    // $('#goat').append(characters[0].health + "<br>");

    // $('#begin').append('<div id="cow" />');
    // $('#cow').append(characters[1].name + "<br>");
    // $('#cow').append(characters[1].image + "<br>");
    // $('#cow').append(characters[1].health + "<br>");

    // $('#begin').append('<div id="sheep" />');
    // $('#sheep').append(characters[2].name + "<br>");
    // $('#sheep').append(characters[2].image + "<br>");
    // $('#sheep').append(characters[2].health + "<br>");

    // $('#begin').append('<div id="pig" />');
    // $('#pig').append(characters[3].name + "<br>");
    // $('#pig').append(characters[3].image + "<br>");
    // $('#pig').append(characters[3].health + "<br>");

    // $("#begin").append(" cow ");
    // $("#begin").append(" sheep ");
    // $("#begin").append(" pig ");
    
    // $("#battleField").append(".characterTile");
    // $("#barricks").append(".characterTile");


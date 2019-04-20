

$(document).ready(function() {
    //define variables
    var yourCharacter = "";
    var enemy = "";
    var ycHealth = "";
    var ycInitialAttack ="";
    var ycAttack = 0;
    var enemyHealth ="";
    var enemyDefense ="";
    var enemyCounter = 0;


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
    function health(){
    for(var j=0; j<characters.length; j++){
    $(".card-footer" +j).text(characters[j].health + "HP");
    }
    }
    health();

    // console.log(characters[1].defense);

    //start all character tiles in the begining div
    $("#begin").append($(".characterTile"));
    $("#restartBox").text("Click on the character that you would like to play as first. Then click to select your first opponent. CHOOSE WISELY!")

    

    $(".characterTile").on("click", function() {
        //assign yc
        if(yourCharacter === "" && enemy === ""){
        $('#ycDiv').append("<h1>Your Character:</h1>");
        $('#ycDiv').append(this);
        $(this).addClass('yc');
            var i = $(this).val();
                ycHealth = characters[i].health;
                ycInitialAttack = characters[i].initialAttack;
                ycAttack = ycInitialAttack;
                ycName = characters[i].name;
                yourCharacter = i;
        $('#begin').prepend("<h1>Future Opponents:</h1>");
            
        //create restart button
            $("#restartBox").empty();
            $('#restartBox').append("<button type='button' class='btn btn-danger restartBtn'>New Game</button><br>")
            $('.restartBtn').click( function() {
                location.reload();
            });

            // create attack button
            $('#attackBox').append("<button type='button' class='btn btn-danger attackBtn'>Attack</button><br>")
            $('.attackBtn').on("click", function() {
                
                
                if(ycHealth >= 0 && enemyHealth >= 0){
                    enemyHealth = enemyHealth - ycAttack;
                    ycHealth = ycHealth - enemyDefense;

                    $('#narration').text("You attacked " + enemyName + " for " + ycAttack + " damage. " + enemyName + 
                    " attacked back for " + enemyDefense + " damage." );


                    ycAttack = ycInitialAttack + ycAttack;
                    $(".card-footer" +yourCharacter).text(ycHealth + "HP");
                    $(".card-footer" + enemy).text(enemyHealth + "HP");
                        console.log(ycHealth);
                        console.log(enemyHealth);
                    
                        if (enemyHealth <=0){
                            $('#narration').text("You have defeated " + enemyName + "!!! Select your next opponent." );
                            $('#enemyDiv').empty(); 
                            enemy = "";
                        }
                    

                }
                else if (enemyHealth <=0){
                    $('#narration').text("You have defeated " + enemyName + "!!! Select your next opponent." );
                    $('#enemyDiv').empty(); 
                    enemyCounter++;
                    enemy = "";
                        // if (enemyCounter === characters.length-1){
                        //     $("#begin").empty();
                        //     $("#begin").text("You beat all possible opponents!!! Click new game to restart.");
                        // }
        
                }
                else{
                    $('#narration').text("You have been defeated :(");
                    $('#ycDiv').empty();  

                    
        
                }
        
        
            })
        
 
        //checks
        //  indexValue = parseInt(indexValue);  <- this might need to be used if issues with subtrracting later down the line. 
        
        }
        //assign enemy 
        else if(enemy ===""){
            $('#enemyDiv').append("<h1>Current Opponent:</h1>");
            $('#enemyDiv').append(this); 
            $(this).addClass('enemy');
                var j = $(this).val();
                    enemyHealth = characters[j].health;
                    enemyDefense = characters[j].defense;
                    enemyName = characters[j].name;
                    enemy = j;
                        
        



                    
        
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

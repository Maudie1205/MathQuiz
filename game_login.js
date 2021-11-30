function addUser(){
    Player1=document.getElementById("player1_name_input").value;
    Player2=document.getElementById("player2_name_input").value;
    localStorage.setItem("Player1_name",Player1);
    localStorage.setItem("Player2_name",Player2);
    window.location="game_page.html"
    }
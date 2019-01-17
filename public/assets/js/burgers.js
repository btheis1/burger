$(function() {
    $(".eat-burger").on("click", function(event) {
        console.log("CLICKED!")
        var id = $(this).data("id");
        var newState = {
            id: id
        
        };
        console.log("new state", newState);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(
            function() {
                console.log("Changed eaten to", newState);
                location.reload();
            }
        );
    });

    $(".new-burger").on("click", function(event) {
        event.preventDefault();
        console.log("CLICKED");

        var newBurger = {
            burger_name: $("#burger-input").val().trim(),
            devoured: 0
        }

        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then( 
            function() {
                console.log("Added new burger");
                location.reload();
            }
        );
    });
})
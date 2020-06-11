$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        // Save user input to variable
        let newBurger = {
            name: $("#burgername").val().trim()
        }

        // Send the post request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        })
        .then(function () {
            console.log("Created new burger")
            // Reload page to see updated list
            location.reload()
        })
    })

    $(".devourBurger").on("click", function (event) {
        // Assign the data values to variables
        let id = $(this).data("id")
        let devoured = $(this).val()

        // Create devoured state
        let devouredState = {
            devoured: devoured
        }
        
        // Call put request
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: devouredState
        })
        .then(function() {
            console.log("Burger devoured")

            location.reload()
        })
    })
})
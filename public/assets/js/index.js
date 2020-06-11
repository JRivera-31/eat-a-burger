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
        let id = $(this).data("id")
        let devoured = $(this).val()

        let devouredState = {
            devoured: devoured
        }
        
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
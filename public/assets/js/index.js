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
})
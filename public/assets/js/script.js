const devourBtn = $(".devour-btn");

devourBtn.click((e)=>{
    const id = $(e.target).attr("data-id");
    const updateDevoured = {devoured: true}
    fetch(`/api/burgers/${id}`, {
        method: "PUT",
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(updateDevoured)
    })
    .then((response) => {
        if(response.ok){
            location.reload();
        }
        else{
            alert("Something went wrong!")
        }
    })
})


const addBurgerForm = $("#add-burger");

addBurgerForm.submit((e)=>{
    e.preventDefault();
    const newBurger = {burger_name: $("#burgerText").val()};
    fetch("/api/burgers", {
        method: "POST",
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json"
        }, 
        body: JSON.stringify(newBurger)
    })
    .then((response)=> {
        location.reload();
    })
})
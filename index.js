// Add your code here

function submitData(userName, userEmail){
    const userData = {
        name: userName,
        email: userEmail
    }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json",
        },
        body: JSON.stringify(userData)
    })
    .then(res=>res.json())
    .then(newUser => {
        const userID = newUser.id;
        const element = document.querySelector("body");
        element.innerHTML = userID
    })
    .catch(error => {
        const message = error.message;
        const element = document.querySelector("body");
        element.innerHTML = message
        }
    )
    }
"use strict";

const getOutput = document.querySelector("#getOutput");

axios
    .get("https://reqres.in/api/users")
    .then(res => {
        console.log("RES:", res.data);
        const users = res.data.data;

    for (let user of users) {
        const userContainer = document.createElement("div");



        const userId = document.createElement("p");
        userId.innerText = `ID: ${user.id}`;
        userContainer.appendChild(userId);

        const userEmail = document.createElement("p");
        userEmail.innerText = `Email: ${user.email}`;
        userContainer.appendChild(userEmail);

        const firstName = document.createElement("p");
        firstName.innerText = `First Name: ${user.first_name}`;
        userContainer.appendChild(firstName);

        const lastName = document.createElement("p");
        lastName.innerText = `Last Name: ${user.last_name}`;
        userContainer.appendChild(lastName);
        
        const avatar = document.createElement("img");
        avatar.src = user.avatar;
        userContainer.appendChild(avatar);

        const userDelete = document.createElement("button");
        userDelete.innerText = "Delete";
        userDelete.classList.add("btn", "btn-danger");
        userDelete.addEventListener("click", () => {
            // axios
            //     .delete(`https://reqres.in/api/users/userDelete`)
        })
        
        getOutput.appendChild(userContainer);
    }

        // for(let user of users) {
        //     const userContainer = document.createElement("div");

        //     const userName = document.createElement("p");
        // }

    })

    .catch(err => console.error(err));
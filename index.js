
//const fetch = require("node-fetch");

async function fetchUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const userData = await response.json();

        const modifiedUsers = userData.map((user) => {
            const {
                name,
                username,
                email,
                address: { street },
                phone,
                website,
                company: { name: companyName },
            } = user;

            return {
                name,
                username,
                email,
                address: street,
                phone,
                website,
                company: companyName,
            };
        });

        // console.log("Modified User Data:");
        // console.log(modifiedUsers);

        const filteredUsers = modifiedUsers.filter((user) =>
            user.email.endsWith(".biz")
        );

        console.log("\nFiltered User Data (Email ends with '.biz'):");
        console.log(filteredUsers);

        const sortedUsers = modifiedUsers.sort((a, b) => a.name.localeCompare(b.name));

        // console.log("\nSorted User Data (Alphabetical by Name):");
        // console.log(sortedUsers);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

fetchUserData();

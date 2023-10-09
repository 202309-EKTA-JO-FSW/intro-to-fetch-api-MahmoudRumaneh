[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12288054&assignment_repo_type=AssignmentRepo)
# Activity: Fetching and Modifying JSONPlaceholder User Data

In this activity, you will learn how to fetch user data from the JSONPlaceholder API, store it in a variable, and create modified objects for each user with specific fields using JavaScript.

## Steps

### Step 1: Write a Function to fetch data from the API Endpoint Provided.

1. Write a JavaScript function (e.g., `fetchUserData`) in the provided index.js file that performs the following tasks:
2. Fetch the data from `https://jsonplaceholder.typicode.com/users` using `async/await`.

### Step 2: Store Data

1. Inside the `fetchUserData` function, store the fetched user data in a variable (e.g., `usersData`).

### Step 3: Modify Data

1. Still within the `fetchUserData` function, create modified user objects (maybe by using an array iterator method like `.map`) for each user with specific fields as follows:

   - Name
   - Username
   - Email
   - Address (Street name only)
   - Phone
   - Website
   - Company (Company name only) 

   and put these new objects in an array.
2. Log the modified list.

### Step 4: Filter the Data

1. Filter the users data that you modified to display users only which have `.biz` domain in their email.
2. Log the filtered list.

### Step 5: Sort the Data  

1. Sort the users alphabetically by name.
2. Log the sorted list.

### Step 6: Catch the Errors

1. Catch the errors and print out the error messages that might occur.

## How to Run Your Program

You can open up a terminal in your working directory and run the command `node index.js` to run the program.

Alternatively, you can also use the `nodemon` package to make your program run in real time whenever you save your file. This might need some googling, but it is not very hard to do.

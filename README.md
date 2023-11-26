This project was created in JetBrains Aqua (https://www.jetbrains.com/ru-ru/aqua/), utilizing the HTTP client (https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html) designed for convenient and intuitively organized API request sending and testing.

The project includes two test files that cover positive and negative scenarios for API requests related to user creation (CreateUserTests.http). Another file (OtherUserTests.http) is dedicated to updating user data, retrieving user data to ensure successful creation and updating of a user, deleting the user, and re-retrieving user data to confirm deletion.

In the user creation requests file (CreateUserTests.http), there are pre-request script for the first request, aiding in generating random values for the user's name and job title, and storing these values in global variables.

Each request utilizes environment variables located in the http-client.env.json file. Every request points to the Assertions folder for the corresponding file, where all status code and response body checks are stored.

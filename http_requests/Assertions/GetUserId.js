// Checking the value of the "id" field
export function idField() {
    client.test("The 'id' field should be a number", function() {
        client.assert(typeof response.body.data.id === 'number', "'id' field is not a number");
    });
}

// Checking the value of the "email" field
export function emailField() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    client.test("The 'email' field should be a valid email address", function() {
        client.assert(emailPattern.test(response.body.data.email), "'email' field is not a valid email address");
    });
}

// Checking the value of the "first_name" field
export function firstNameField() {
    client.test("The 'first_name' field should be a non-empty string", function() {
        client.assert(typeof response.body.data.first_name === 'string' && response.body.data.first_name !== '', "'first_name' field is not a non-empty string");
    });
}

// Checking the value of the "last_name" field
export function lastNameField() {
    client.test("The 'last_name' field should be a non-empty string", function() {
        client.assert(typeof response.body.data.last_name === 'string' && response.body.data.last_name !== '', "'last_name' field is not a non-empty string");
    });
}

// Checking the format of the URL in the "avatar" field
export function avatarField() {
    const urlPattern = /^https?:\/\/\S+$/;
    client.test("The format of the URL in the 'avatar' field should be valid", function() {
        client.assert(urlPattern.test(response.body.data.avatar), "'avatar' field has an invalid URL format");
    });
}

// Checking the format of the URL in the "support.url" field
export function supportUrlField() {
    const urlPattern = /^https?:\/\/\S+$/;
    client.test("The format of the URL in the 'support.url' field should be valid", function() {
        client.assert(urlPattern.test(response.body.support.url), "'support.url' field has an invalid URL format");
    });
}

// Checking the text in the "support.text" field
export function supportTextField() {
    client.test("The 'support.text' field should be a non-empty string", function() {
        client.assert(typeof response.body.support.text === 'string' && response.body.support.text !== '', "'support.text' field is not a non-empty string");
    });
}

// Status code
export function statusCode200() {
    client.test("Status code", function () {
        client.assert(response.status === 200, "Response status is not 200");
    });
}

// Status code
export function statusCode404() {
    client.test("Status code", function () {
        client.assert(response.status === 404, "Response status is not 404");
    });
}
export function Name() {
// Checking the value of the 'name' field
    client.test("Checking the value of the 'name' field", function () {
        client.assert(response.body.name === client.global.get("nameValue") + "_edited", "Name is not valid");
    });
}

export function Job() {
// Checking the value of the 'job' field
    client.test("Checking the value of the 'job' field", function () {
        client.assert(response.body.job === client.global.get("jobValue") + "_edited", "Job is not valid");
    });
}

export function UpdatedAt() {
    // Checking the format of the date and time in the 'UpdatedAt' field
    const updatedAtPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    client.test("Checking the format of the date and time in the 'UpdatedAt' field", function() {
        client.assert(updatedAtPattern.test(response.body.updatedAt), "Invalid 'UpdatedAt' format");
    });
}
export function StatusCode200() {
    // Status code
    client.test("Status code", function () {
        client.assert(response.status === 200, "Response status is not 200");
    });
}

export function StatusCode404() {
    // Status code
    client.test("Status code", function () {
        client.assert(response.status === 404, "Response status is not 404");
    });
}
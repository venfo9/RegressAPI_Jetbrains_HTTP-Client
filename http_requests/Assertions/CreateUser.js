export function Name() {
    // Checking the value of the 'name' field
    client.test("Checking the value of the 'name' field", function() {
        client.assert(response.body.name === client.global.get("nameValue"), "Name is not valid");
    });

}
export function Job() {
    // Checking the value of the 'job' field
    client.test("Checking the value of the 'job' field", function() {
        client.assert(response.body.job === client.global.get("jobValue"), "Job is not valid");
    });
}

export function NameEmpty() {
    // Checking the value of the 'name' field
    client.test("Checking the value of the 'name' field", function() {
        client.assert(response.body.name === "", "Name is not valid");
    });

}
export function JobEmpty() {
    // Checking the value of the 'job' field
    client.test("Checking the value of the 'job' field", function() {
        client.assert(response.body.job === "", "Job is not valid");
    });
}

export function Id() {
    // Checking that the value of the 'id' field is numeric
    client.test("Checking that the value of the 'id' field is numeric", function() {
        client.global.set("userId", response.body.id);
        console.log('Value of userId:', client.global.get("userId"));
        client.assert(typeof response.body.id === 'string', "Id is not a number");
    });
}
export function CreatedAt() {
    // Checking the format of the date and time in the 'createdAt' field
    const createdAtPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    client.test("Checking the format of the date and time in the 'createdAt' field", function() {
        client.assert(createdAtPattern.test(response.body.createdAt), "Invalid 'createdAt' format");
    });
}

export function CreatedAt() {
// Checking the format of the date and time in the 'createdAt' field
const updatedAtPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
client.test("Checking the format of the date and time in the 'updatedAt' field", function() {
    client.assert(updatedAtPattern.test(response.body.updatedAt), "Invalid 'updatedAt' format");
});
}

export function StatusCode201() {
    // Status code
    client.test("Status code", function () {
        client.assert(response.status === 201, "Response status is not 201");
    });
}

export function StatusCode404() {
    // Status code
    client.test("Status code", function () {
        client.assert(response.status === 404, "Response status is not 404");
    });
}
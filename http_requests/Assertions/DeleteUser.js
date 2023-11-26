export function statusCode204() {
    client.test("Status code", function () {
        client.assert(response.status === 204, "Response status is not 204");
    });
}
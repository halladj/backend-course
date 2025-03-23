import http from "node:http";

const PORT = 3000;

let cart = [
    { id: 1, name: "APPLE", quantity: 2, price: 1.5 },
    { id: 2, name: "BANANA", quantity: 3, price: 1.2 }
];

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/cart":
            if (req.method === "GET") {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(cart));
            }

            if (req.method === "POST") {
                let body = "";

                // Collect chunks of data as they arrive
                req.on('data', (chunk) => {
                    body += chunk.toString();
                });

                // When the entire body has been received
                req.on('end', () => {
                    try {
                        const newItem = JSON.parse(body);

                        // Check if the new item has the required fields
                        if (newItem && newItem.id && newItem.name && newItem.quantity && newItem.price) {
                            // Add new item to the cart
                            cart.push(newItem);

                            // Send back the updated cart
                            res.writeHead(200, { "Content-Type": "application/json" });
                            res.end(JSON.stringify({ cart }));
                        } else {
                            res.writeHead(400, { "Content-Type": "application/json" });
                            res.end(JSON.stringify({ message: "Invalid item data" }));
                        }
                    } catch (error) {
                        // Handle JSON parsing errors
                        res.writeHead(400, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({ message: 'Error parsing request body' }));
                    }
                });
            }
            break;

        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Page not found");
            break;
    }
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

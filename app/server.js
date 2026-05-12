const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello from Node.js DevOps Projectssssssssss 🚀");
});

app.get('/health', (req, res) => {
    res.status(200).send("OK");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

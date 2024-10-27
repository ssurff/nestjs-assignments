const express = require('express');
const app = express();
const port = 9090;


app.get('/Assignment/fibonacci-sequence/:n', (req, res) => {
    const n = parseInt(req.params.n);

    if (isNaN(n) || n < 1) {
        return res.status(400).json({ error: 'n must be a positive integer' });
    }

    const fibonacciSequence = generateFibonacciSequence(n);
    res.json({ sequence: fibonacciSequence });
});

function generateFibonacciSequence(n) {
    const sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence.slice(0, n);
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
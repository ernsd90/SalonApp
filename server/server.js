const express = require('express');
const app = express();

app.use(express.json());
app.use(require('./routes')); // You will set up routes later

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

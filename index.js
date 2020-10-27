const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const port = 4400;
app.use(cors())
app.use(express.json());
app.use(express.static('public/dist'))
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, "/public", 'dist/index.html'))
})
app.listen(port, () => { console.log("SERVER IS LISTENING ON PORT===>>> ", port, " AND ENVIROMENT IS ===>>>") })
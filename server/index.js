const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const app = express();
console.log(PORT);
// const start = async () => {
//   try {
//     app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));
//   } catch (e) {
//     console.log(e);
//   }
// };

app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));

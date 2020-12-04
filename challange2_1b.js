const express = require("express") //memanggil library express js
const bodyParser= require("body-parser") //memanggil library body-parser
const cors = require("cors") //memanggil library cors
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

//menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

// KUBUS //

app.post("/kubus", (req,res) =>
{
//menampung data
  let s = Number(req.body.s)

//rumus
  let volume = s * s * s
  let luaspermukaan = 6 * s * s

//objek
  let response =
{
    s: sisi
    volume: volume
    luaspermukaan: luaspermukaan
}

res.json(response)
})

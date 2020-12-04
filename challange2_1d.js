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

// BOLA //

app.post("/bola", (req,res) =>
{
//menampung data
  let r = Number(req.body.r)

//rumus
let volume = 4/3 * 3.14 * r * r * r
let luas_permukaan = 4 * 3.14 * r * r

//objek
  let response =
{
  jari_jari: r,
  volume: volume,
  luaspermukaan: luaspermukaan
}

res.json(response)
})

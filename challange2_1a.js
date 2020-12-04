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

// BALOK //

app.post("/balok", (req,res) =>
{
//menampung data
  let p = Number(req.body.p)
  let l = Number(req.body.l)
  let t = Number(req.body.t)
//rumus
  let volume = p * l * t
  let luaspermukaan = 2 * (p * l + p * t + l * t)

//objek
  let response =
{
    panjang: p,
    lebar: l,
    tinggi: t,
    volume: volume,
    luaspermukaan: luaspermukaan
}

res.json(response)
})

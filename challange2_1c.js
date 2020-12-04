const express = require("express") //memanggil library express js
const bodyParser= require("body-parser") //memanggil library body-parser
const cors = require("cors") //memanggil library cors
const app = express()

app.use(const express = require("express") //memanggil library express js
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

// LIMAS //

app.post("/kerucut", (req,res) =>
{
//menampung data
  let r = Number(req.body.r)
  let s = Number(req.body.s)
  let t = Number(req.body.t)
//rumus
  let volume = 1/3 * 3.14 * r * r * t
  let luaspermukaan = (3.14 * r * r) + (3.14 * r * s)

//objek
  let response =
{
  jari_jari: r,
  selimut: s,
  tinggi: t,
  volume: volume,
  luaspermukaan: luaspermukaan
}

res.json(response)
})

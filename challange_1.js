// class TanahPakArman{
//
//     constructor(p, l) {
//         this.panjang = p
//         this.lebar = l
//     }
//
//       luas = () => {
//         return this.panjang * this.lebar
//       }
//
//       harga = () => {
//         return 1500000 * (this.panjang * this.lebar)
//       }
//
//       pajak = () => {
//         return 1500000 * (this.panjang * this.lebar) * 15%
//       }
// }
//
// let total = new LuasTanah (20.5,30)
// console.log("Total Harga Tanah = " + total.harga() * total.pajak());



class TanahPakArman {
    constructor(p, l, t){
        /**
         * properti/atribut dari sebuah objek
         * didefinisikan di dalam method constructor
         */
        this.panjang = p
        this.lebar = l
        this.harga = h
        this.pajak = t

    }

    luas = () => {
        return this.panjang * this.lebar
    }

    harga = () => {
        return (1500000 * this.panjang * this.lebar * this.harga
    }  

    pajak = () => {
        return (1500000 * this.panjang * this.lebar) + (1500000 * this.panjang * this.lebar*15/100)
    }

}

let total = new TanahPakArman(20.5,30)
console.log("Luas Tanah = " + total.luas());
console.log("Harga Tanah = " + tanah.pajak());















//
// console.log
// ("Luas Tanah dengan ukuran 20,5m x 30m = " + total.luas())
// console.log
// ("Harga Tanah dengan ukuran 20,5m x 30m dengan harga 1.500.000 permeter persegi =  " + total.harga())
// console.log
// ("Luas Tanah dengan tambahan ppn 15% = " + total.pajak())
// console.log
// ("Nominal yang harus di bayarkan adalah " + tanah.hargatanahppn())

function Tugas25() {
    var bilangan = ["2", "39", "76", "50", "9", "7", "41", "2", "24", "1", "16"];
    console.log("Sebelumnya  : ".concat(bilangan));
    console.log("Ascending   : "+bilangan.sort());
    console.log("Descending  : "+bilangan.reverse());
    const isi = [];
    for (i = 0; i <= bilangan.length; i++) {
        if (bilangan[i] >= 10) {
            isi.push(bilangan[i])
        }
    }
    console.log("filter > 10 : ".concat()+isi.join());
}
Tugas25();
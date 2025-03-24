function JalankanFungsi(){
    const KumpulanJawaban = [
     "Gak tau kok tanya saya",
     "cie nyari jawaban ya",
     "kamu nanya",
     "banyakin berdoa",
     "gak bahaya tah",
     "kamu sudah yakin"
  ];
  const jawabanAcak = Math.floor(Math.random() * KumpulanJawaban.length)
  const hasilAcak = KumpulanJawaban[jawabanAcak]

  document.getElementById("jawaban").innerHTML = hasilAcak;
  document.getElementById("tampilsekali").disabled = true;
}
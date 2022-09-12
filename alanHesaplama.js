var arguments = process.argv.slice(2);
function hesapla(yaricap){
    let alan = Math.PI * (yaricap * yaricap);
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}`);

}
hesapla(arguments[0]);

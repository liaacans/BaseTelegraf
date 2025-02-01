/*
Base Ori Rahman x Ifaa karisma

Sosmed media :
Ig : @4xglrs_
Tele : @idstore74_pw
Wa : Privet
Yt : A. Aulia Rahman Official (@auliarhmanproduction)

BTW SUBDOMAIN BELUM WORK

Thanks too::
Allah swt
Nabi Muhammad
Aulia Rahman
Ifaa karisma
Icha Maulidah Putriii
Zeeone Ofc
WanOfc
And Pengguna Copy/Paste:v

Note : don't remove copyright of this script!
*/
const fs = require("fs");
const chalk = require('chalk')
const {
   indonesia
} = require("./language");

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot
//Simbol YT
global.simbolYT = "📁"
global.userTelelu = "girlchaw"


global.BOT_TOKEN = "7666196346:AAFNLDoamK1-IpLoGRRjL70usLvBzIHW3GM" // buat bot di sini https://t.me/Botfather dan dapatkan token bot
global.apikey = "cad9fc6564a1390bba34fb5f" // CREATE API LOLHUMAN PAKAI APIKEY SENDIRI YY
global.BOT_NAME = "Ichaa Botz" //your bot name
global.OWNER_NAME = "Ichaa cntik" //your name
global.OWNER_NUMBER = "6285849331770" //your telegram number
global.OWNER = ["https://t.me/idstore74pw"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.OWNERID = "7080243871" // Change your owner id, btw jgn di apus ntr error
global.owneridlu = "7080243871" // Change your owner id
global.pp = "./image/ifaaja.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
// SETTING LAINNYA
global.linkGrup = "https://t.me/Cari_Teman_Telegrram" // taroh link tele lu disini
global.linkCh = "https://t.me/gamerandomhot" // taroh link ch lu disini
global.linkLuu = "https://t.me/+HkZd0_bHmAwxYWRl" // taroh link lu yang asli
// Name Grup Anda atau grup lain
global.setName1 = "Cari Teman Telegram" // SETNAME1 / LINK GRUP
global.setName2 = "Cari Doi disini" // SETNAME2 / LINK CH
global.setName3 = "Game Online" // SETNAME3 / LINK LUU
// TAMAT🗿
global.DONASI = false // "./image/donasi.jpg" // foto donasi di folder image
global.lang = language
    //SERVER 1
  global.domain = 'https://cp.risma.web.id', // Isi dengan domain yang digunakan
  global.plta = 'ptla_G9d7meYAT58RvLnn2jFRB5s2CjB0URMJDJjZNIHW92f', // Isi dengan nilai plta yang sesuai
  global.pltc = 'ptlc_CIjBtmICZNSGe6jHnWHXX8K92NMXn5EC5EXuFT5Ve1W', // Isi dengan nilai pltc yang sesuai
  
  //CREATE PANEL
  global.loc = '1', // Isi dengan lokasi yang diinginkan
  global.eggs = '15'
  
  //=========== Api Domain ===========//
global.zone1 = "f43ae9a651f02649a55eb57e1f3611ba"
global.apitoken1 = "nNCbqQwR2Sn13XBCaqq4L1I6Gz_f1R-37YbgZyAB"
global.tld1 = "aar-offc.web.id"

//========== Api Domain 2 ==========//
global.zone2 = "475b59feb30ac9ab490eb78d4e9b32a3";
global.apitoken2 = "nNCbqQwR2Sn13XBCaqq4L1I6Gz_f1R-37YbgZyAB";
global.tld2 = "risma.web.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";
//━━━━━━━━━━━━━━━[ BATAS SETTING ]━━━━━━━━━━━━━━━━━//
  
  
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
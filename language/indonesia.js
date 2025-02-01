/*
DI EDIT ULANG BY IFAA X RAHMAN
*/

//Paantuh:v
const { runtime } = require("../lib/myfunc2")
const fs = require('fs')
const chalk = require('chalk')
const moment = require("moment-timezone");

//Taroh token bot lu, yang lu create di @BotFather
 exports.noToken = "7871960175:AAEY3OTBE3CZoGLX4srtj0p0NsiiQIeTI9s"
 
//lopyuuu
exports.first_chat = (botname, pushname) => {
    return `Halo Kak ${pushname}! Nama saya ${botname} - Saya adalah Bot Telegram multi fungsi! Klik /menu untuk mengetahui lebih lanjut tentang cara menggunakan bot ini.

Join Grup Telegram👇`
}
exports.snk = "Syarat & Ketentuan Bot\n\n1. Dilarang Spam Bot\n2. Boleh Chat Sendiri, Kecuali Jgn Spam!\n3. Dilarang Rasis/Sara Di Bot!\n4. Ngobrol Sendiri Sambil Senyum, Kecuali Jgn Spam Juga!\n5. Boleh Masukin Bot Ke Dalam Grup Anda, Bisa Nambahin Grup Anda Sebanyak Banyak Mungkin.\n\n\nNote : Bantu Donasi Buat Untuk Menambahkan Fitur Terbarunya Lagi\nNo.Rek : 901945179969 (Seabank) A/N AKHMAD AULIA RAHMAN\n\nCreate By © [Ifaa karisma](https://t.me/idstore74_pw)"
exports.getStyle = (style, style2) => {
    return `**${style2} Yg Kamu Masukkan Salah**\n\n__Berikut List ${style2} Yg Benar, Total__ **${style}** __${style2}__\n\n`
}
exports.wait = "`⏳ Wait.... Sedang Diproses.`"
exports.ok = "`Done ✅`"
exports.error = "Error kak, silahkan cek di console panel lu"

exports.help = async (Ifaa, sender, isCreator, user_id) => {
    text = `Hi kak @${sender}
╭─❒ 「 User Info 」 
├ Creator : @${userTelelu}
├ Name : @${sender}
├ Profile : @${sender}
├ ID Telegram Anda: ${Ifaa.from.id}
├ Hostname : Linux
├ Platform : Bot Telegram
├ Runtime : ${runtime(process.uptime())}
├ Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
├ Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
╰❒ Owner : ${isCreator ? 'True' : `False`}
Silahkan pilih button dibawah ini!`
    options = {
        reply_markup: {
            inline_keyboard: [
                [
            {
                text: 'Cpanel Menu',
                callback_data: 'cpanelmenu ' + user_id
            },
            {
                text: 'Random Text 📑',
                callback_data: 'randtext ' + user_id
            }
        ],
        [{
                text: 'Ephoto 360 🖊',
                callback_data: 'ephoto ' + user_id
        },
        {
        text: 'Group Menu',
        callback_data: 'groupmenu ' + user_id
        }
        ],
        [{ 
                text: 'Obf Menu',
                callback_data: 'obfmenu ' + user_id
        },
        { 
               text: 'Islami ☪️',
               callback_data: 'islamimenu ' + user_id
        },
        ],
        [{
                text: 'Movie & Story 🎥',
                callback_data: 'movie ' + user_id
            },
            {
                text: 'Download Menu',
                callback_data: 'downloadmenu ' + user_id
            }
          ],
            [{
            text: 'Owner Menu',
            callback_data: 'ownermenu ' + user_id
            },
        ],
      ]
    }
 }
    try {
        await Ifaa.editMessageText(text, options)
    } catch {
        await Ifaa.reply(text, options)
    }
}

exports.randtext = async(Ifaa, user_id) => {
    text = `Random Text Menu :

❏ /quotes
❏ /quotesdilan
❏ /quotesanime
❏ /quotesimage
❏ /faktaunik
❏ /katabijak
❏ /pantun
❏ /apakah
❏ /bisakah
❏ /kapankah
❏ /cekkhodam
❏ /dox
❏ /bucin
❏ /randomnama
`
    options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                text: 'Back To Menu',
                callback_data: 'mymenu ' + user_id
            },
        ],
      ]
    }
 }
    try {
        await Ifaa.editMessageText(text, options)
    } catch {
        await Ifaa.reply(text, options)
    }
}

exports.movie = async(Ifaa, user_id) => {

    text = `Movie & Story Menu :

❏ /drakorongoing
❏ /lk21 query
❏ /wattpad url_wattpad
❏ /wattpadsearch query
❏ /cerpen
❏ /ceritahoror
`
    options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                text: 'Back To Menu',
                callback_data: 'mymenu ' + user_id
            },
        ],
      ]
    }
 }
    try {
        await Ifaa.editMessageText(text, options)
    } catch {
        await Ifaa.reply(text, options)
    }
}

exports.islami = async(Ifaa, user_id) => {
    text = `Islami Menu :

❏ /listsurah
❏ /alquran no_surah
❏ /alquran no_surah/no_ayat
❏ /alquran no_surah/no_ayat1-no_ayat2
❏ /alquranaudio no_surah
❏ /alquranaudio no_surah/no_ayat
❏ /asmaulhusna
❏ /kisahnabi
❏ /jadwalsholat daerah
`
    options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                text: 'Back To Menu',
                callback_data: 'mymenu ' + user_id
            },
        ],
      ]
    }
 }
    try {
        await Ifaa.editMessageText(text, options)
    } catch {
        await Ifaa.reply(text, options)
    }
}

exports.downloadmenu = async(Ifaa, user_id) => {
    text = `▧ Download Menu
│ • /tt link
│ • /instagram link
│ • /ytmp3 link
│ • /ytmp4 link
│ • /videy link videy.co
└───···`
options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                text: 'Back To Menu',
                callback_data: 'mymenu ' + user_id
            },
        ],
      ]
    }
 }
    try {
        await Ifaa.editMessageText(text, options)
    } catch {
        await Ifaa.reply(text, options)
    }
}

exports.cpanelmenu = async(Ifaa, user_id) => {
   text = `
╭──❏「 CreatePanel Menu
│ • /1gb work
│ • /2gb work
│ • /3gb work
│ • /4gb work
│ • /5gb work
│ • /6gb work
│ • /7gb work
│ • /8gb work
│ • /9gb work
│ • /10gb work
│ • /unli work
│ • /listsrv work
│ • /listadmin work
│ • /createadmin work
│ • /cekid work
└───···
⚠️ 𝗡𝗼𝘁𝗲 :
➥ Chat Bot Terlebih Dahulu Agar Panel Bisa Masuk / Di Berikan Ke Pada Anda. !!!`
options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                text: 'Back To Menu',
                callback_data: 'mymenu ' + user_id
            },
        ],
      ]
    }
 }
    try {
        await Ifaa.editMessageText(text, options)
    } catch {
        await Ifaa.reply(text, options)
    }
}

exports.ephoto = async(Ifaa, user_id) => {
    text = `Ephoto 360 Menu :

❏ /wetglass text
❏ /multicolor3d text
❏ /watercolor text
❏ /luxurygold text
❏ /galaxywallpaper text
❏ /lighttext text
❏ /beautifulflower text
❏ /puppycute text
❏ /royaltext text
❏ /heartshaped text
❏ /birthdaycake text
❏ /galaxystyle text
❏ /hologram3d text
❏ /greenneon text
❏ /glossychrome text
❏ /greenbush text
❏ /metallogo text
❏ /noeltext text
❏ /glittergold text
❏ /textcake text
❏ /starsnight text
❏ /wooden3d text
❏ /textbyname text
❏ /writegalacy text
❏ /galaxybat text
❏ /snow3d text
❏ /birthdayday text
❏ /goldplaybutton text
❏ /silverplaybutton text
❏ /freefire text
❏ /cartoongravity text
❏ /anonymhacker text
❏ /anonymhacker text
❏ /mlwall text
❏ /pubgmaskot text
❏ /aovwall text
❏ /logogaming text
❏ /fpslogo text
❏ /avatarlolnew text
❏ /lolbanner text
❏ /avatardota text
`
    options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                text: 'Back To Menu',
                callback_data: 'mymenu ' + user_id
            },
        ],
      ]
    }
 }
    try {
        await Ifaa.editMessageText(text, options)
    } catch {
        await Ifaa.reply(text, options)
    }
}

exports.obfmenu =  async(Ifaa, user_id) => {
const menuText = `
**Obfuscation Menu**:
1. /obf1 - Var [HardObf!]
2. /obf2 - Var [ExtremeObf!]
3. /obf3 - DeadCode [ExtremeObf!]
4. /obf4 - EncCode [ExtremeObf!!]
5. /obf5 - ABCD [HardObf!]
6. /obf6 - Name [ExtremeObf!!]
7. /obf7 - Name [ExtremeObf!!]
8. /obf8 - Name [ExtremeObf!]
9. /obf9 - Crass [HardObf!]
        FIX ERROR ALL

📄 Send your .js file after selecting the obfuscation type.
    `
options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                text: 'Back To Menu',
                callback_data: 'mymenu ' + user_id
            },
        ],
      ]
    }
 }
    try {
        await Ifaa.editMessageText(menuText, options)
    } catch {
        await Ifaa.reply(menuText, options)
    }
}

exports.groupmenu = async(Ifaa, user_id) => {
const groupMenu = `
┎━「 GROUP MENU ｣
┃⤷ /infogroup
┃⤷ /hidetag
┃⤷ /delete
┃⤷ /pin
┃⤷ /unpin
┃⤷ /setdesc
┃⤷ /setppgc
┃⤷ /promote 
┃⤷ /demote
┃⤷ /createpoll
┃⤷ /setnamegc
┃⤷ /linkgc
┗━━━━━━━━━`
options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                text: 'Back To Menu',
                callback_data: 'mymenu ' + user_id
            },
        ],
      ]
    }
 }
    try {
        await Ifaa.editMessageText(groupMenu, options)
    } catch {
        await Ifaa.reply(groupMenu, options)
    }
}

exports.ownermenu = async(Ifaa, user_id) => {
const ownerMenu = `
┎━「 OWNER MENU ｣
┃⤷ /addprem
┃⤷ /delprem
┃⤷ /addcase
┃⤷ /bc
┃⤷ /listuser
┃⤷ $
┃⤷ x
┗━━━━━━━━━`
options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                text: 'Back To Menu',
                callback_data: 'mymenu ' + user_id
            },
        ],
      ]
    }
 }
    try {
        await Ifaa.editMessageText(ownerMenu, options)
    } catch {
        await Ifaa.reply(ownerMenu, options)
    }
}

exports.mainMenu = async(Ifaa, user_id) => {
const mainYuk = `
╭──❒ 「 *MAIN MENU* 」
├• /listram
├• /listcase
├• /snk
├• /runtime
├• /translate
├• /jadwaltv
├• /infocuaca
├• /gempa
╰❑ 「 *TELE MD* 」`
options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                text: 'Back To Menu',
                callback_data: 'mymenu ' + user_id
            },
        ],
      ]
    }
 }
    try {
        await Ifaa.editMessageText(mainYuk, options)
    } catch {
        await Ifaa.reply(mainYuk, options)
    }
}
//===========> UPDATE CASE / BIAR KE SAVE SENDIRI <============\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
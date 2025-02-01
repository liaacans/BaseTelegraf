/*
Base Ori Rahman x Ifaa karisma

Sosmed media :
Ig : @4xglrs_
Tele : @idstore74_pw
Wa : Privet
Yt : A. Aulia Rahman Official (@auliarhmanproduction)

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


require("./settings")
const {
    Telegraf,
    Context,
    Markup
} = require('telegraf')
const {
    message,
    editedMessage,
    channelPost,
    editedChannelPost,
    callbackQuery
} = require("telegraf/filters");
const {toFirstCase,
        isNumber,
        formatp,
        parseMention, 
        resize, 
        getRandom,
        generateProfilePicture, 
        getCase, 
        runtime, 
        FileSize, 
        h2k, 
        makeid, 
        kyun, 
        randomNomor, 
        jsonformat, 
        isUrl,
        fetchJson, 
        sleep,
        parseMarkdown,
        range,
        getBuffer
        } = require("./lib/myfunc2");
        const { formatSize } = require("./lib/myfunc3");
const chalk = require('chalk')
const fs = require('fs')
const fetch = require('node-fetch')
const TelegramBot = require('node-telegram-bot-api');
const os = require('os')
const speed = require('performance-now')
const util = require('util')
const yts = require('yt-search')
const axios = require('axios');
const tele = require('./lib/tele')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const {
    simple
} = require('./lib/myfunc')
const { pinterest, wallpaper, wikimedia, quotesAnime } = require('./lib/scraper')
const { primbon } = require('scrape-primbon')

const hxz = require ("hxz-api")

let entertainment = {}

module.exports = Ifaa = async (Ifaa, bot, m, chatUpdate, store) => {
    //console.log(Ifaa)
    try {
        const body = Ifaa.message.text || Ifaa.message.caption || ''
        const budy = (typeof Ifaa.message.text == 'string' ? Ifaa.message.text : '')
        const {
            isUrl
        } = simple
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)        
        const args = body.trim().split(/ +/).slice(1)
        const text = q = args.join(" ")
        const user = simple.getUserName(Ifaa.message.from)
        const pushname = user.full_name;
        const user_id = Ifaa.message.from.id + " "
        const username = Ifaa.message.from.username ? Ifaa.message.from.username : "Ifaa";
        const isCreator = OWNER[0].replace("https://t.me/", '') == Ifaa.update.message.from.username
        const from = Ifaa.message.chat.id
        const prefix = isCmd ? body[0] : ''
        const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
        const isGroup = Ifaa.chat.type.includes('group')
        const groupName = isGroup ? Ifaa.chat.title : ''
        
        
        const isImage = Ifaa.message.hasOwnProperty('photo')
        const isVideo = Ifaa.message.hasOwnProperty('video')
        const isAudio = Ifaa.message.hasOwnProperty('audio')
        const isSticker = Ifaa.message.hasOwnProperty('sticker')
        const isContact = Ifaa.message.hasOwnProperty('contact')
        const isLocation = Ifaa.message.hasOwnProperty('location')
        const isDocument = Ifaa.message.hasOwnProperty('document')
        const isAnimation = Ifaa.message.hasOwnProperty('animation')
        const quotedMessage = Ifaa.message.reply_to_message || {}
        const isQuotedImage = quotedMessage.hasOwnProperty('photo')
        const isQuotedVideo = quotedMessage.hasOwnProperty('video')
        const isQuotedAudio = quotedMessage.hasOwnProperty('audio')
        const isQuotedSticker = quotedMessage.hasOwnProperty('sticker')
        const isQuotedContact = quotedMessage.hasOwnProperty('contact')
        const isQuotedLocation = quotedMessage.hasOwnProperty('location')
        const isQuotedDocument = quotedMessage.hasOwnProperty('document')
        const isQuotedAnimation = quotedMessage.hasOwnProperty('animation')
        const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation
        const isQuoted = Ifaa.message.hasOwnProperty('reply_to_message')
        const timestampi = speed();
        const latensii = speed() - timestampi
        const opts = { parse_mode: 'MARKDOWN' };

        const reply = async (text) => {
            for (var x of simple.range(0, text.length, 4096)) { //maks 4096 character, jika lebih akan eror
                return await Ifaa.replyWithMarkdown(text.substr(x, 4096), {
                    disable_web_page_preview: true
                })
            }
        }
        const getStyle = (style_, style, style2) => {
            listt = `${lang.getStyle(style, style2)}`
            for (var i = 0; i < 300; i++) {
                listt += '» `' + style_[i] + '`\n'
            }
            reply(listt)
        }
        
        if (entertainment[Ifaa.update.message.from.id] && entertainment[Ifaa.update.message.from.id] === Ifaa.update.message.text.toLowerCase()) {
			delete entertainment[Ifaa.update.message.from.id]
			return reply('Jawaban Anda benar.')
		}

        //get type message 
        var typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = 'Image'
        else if (isVideo) typeMessage = 'Video'
        else if (isAudio) typeMessage = 'Audio'
        else if (isSticker) typeMessage = 'Sticker'
        else if (isContact) typeMessage = 'Contact'
        else if (isLocation) typeMessage = 'Location'
        else if (isDocument) typeMessage = 'Document'
        else if (isAnimation) typeMessage = 'Animation'

        //push message to console
        if (Ifaa.message) {
            console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(body || typeMessage)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname) + '\n' + chalk.blueBright('=> In'), chalk.green(isGroup ? groupName : 'Private Chat', Ifaa.message.chat.id))
        }
        
        var file_id = ''
		if (isQuoted) {
			file_id = isQuotedImage
				? Ifaa.message.reply_to_message.photo[Ifaa.message.reply_to_message.photo.length - 1].file_id
				: isQuotedVideo
				? Ifaa.message.reply_to_message.video.file_id
				: isQuotedAudio
				? Ifaa.message.reply_to_message.audio.file_id
				: isQuotedDocument
				? Ifaa.message.reply_to_message.document.file_id
				: isQuotedAnimation
				? Ifaa.message.reply_to_message.animation.file_id
				: ''
		}
		var mediaLink = file_id != '' ? await tele.getLink(file_id) : ''
        
//================> DATABASE <=================\\
    const { osInfo } = require('./lib/os');
    const pendaftar = JSON.parse(fs.readFileSync('./lib/json/user.json'))
    const isUser = pendaftar.includes(from)
    
                                           
      
      const sendMessage = (from, text) => bot.sendMessage(from, text);
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}       

// Auto Regist || By. Aulia Rhman
        if (isCmd && !isUser){
			pendaftar.push(from)
			fs.writeFileSync('./lib/json/user.json', JSON.stringify(pendaftar))
        } 
     

let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${command}* ${teks}\n`
}
      
        switch (command) {
        case 'listram':{
        let ramnya = `
        ╭──❏「 CreatePanel Menu
│ • 1GB ( Premiumm Only ) ✅
│ • 2GB ( Premiumm Only ) ✅
│ • 3GB ( Premiumm Only ) ✅
│ • 4GB ( Premiumm Only ) ✅
│ • 5GB ( Premiumm Only ) ✅
│ • 6GB ( Premiumm Only ) ✅
│ • 7GB ( Premiumm Only ) ✅
│ • 8GB ( Premiumm Only ) ✅
│ • 9GB ( Premiumm Only ) ✅
│ • 10GB ( Premiumm Only ) ✅
│ • UNLI ( Premiumm Only ) ✅ 
└───···

🛑 JOIN RESELLER CUMA 10K BANG ( Server Private )
𝗕𝘂𝘆 𝗣𝗿𝗲𝗺? 𝗕𝘂𝘆 𝗩𝗽𝘀? 𝗕𝘂𝘆 𝗔𝗱𝗺𝗶𝗻𝗣&𝗣𝘁 𝗣𝗮𝗻𝗲𝗹? 𝗣𝘃 (@girlchaa)`
reply(ramnya)
}
break
case 'runtime':{
    Ifaa.deleteMessage().catch(() => {});
      reply(`Ifaa Online ${runtime(process.uptime())}`)
    }
  break  
  case 'listcase': {
  Ifaa.deleteMessage().catch(() => {});
let { listCase } = require('./lib/scrapelistCase.js')
reply(listCase())
}
break
case "privacy":
            case "snk": {
            Ifaa.deleteMessage().catch(() => {});
                reply(lang.snk)
            }
            break
            case 'mymenu':
            case 'help': case 'menu':
            Ifaa.deleteMessage().catch(() => {});
            const pushname = user.full_name;
            const isCreator = OWNER[0].replace("https://t.me/", '') == Ifaa.update.message.from.username
				await lang.help(Ifaa, isCreator, pushname, Ifaa.message.from.id.toString())
				break
            case 'addcase': {
                if (!isCreator) return reply(`maaf kak khusus owner nyet`)
    if (!q) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = './case.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) { 
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('*Succes Menambahkan case*');
            }
        });
    } else {
        reply('Tidak dapat menemukan case gimage dalam file.');
    }
        }
             );
        }
    break;
case 'bisakah': {
Ifaa.deleteMessage().catch(() => {});
            	if (!q) throw `Example : ${prefix + command} saya menang?`
            	let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `Pertanyaan : Bisakah ${q}\nJawab : ${keh}`
            reply(jawab)
            }
            break
            case 'apakah': {
            Ifaa.deleteMessage().catch(() => {});
            	if (!q) throw `Example : ${prefix + command} saya bisa menang?`
            	let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `Pertanyaan : apakah ${q}\nJawab : ${kah}`
            reply(jawab)
            }
            break
            case 'kapan': case 'kapankah': {
            Ifaa.deleteMessage().catch(() => {});
            	if (!q) throw `Example : ${prefix + command} saya menang?`
            	let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `Pertanyaan : ${command} ${q}\nJawab : ${koh}`
            reply(jawab)
            }
            break
            case 'cekkodam': case 'cekkhodam': {
            if (!q) throw `Example : ${prefix + command} rahman`
            let cekKhodam = ["harimau","singa","ular","ikan lele","ikan hiu","ayam","kambing","macan tutul","macan putih","ikan mas","ikan bawal","ikan tongkol","ikan teri","ikan kerapu","patin siam","laba laba","kelelawar","gajah","lembu","dugong","buaya","banteng","komodo","belalang sembah","lebah","nyamuk","capung","kunang kunang","kupu kupu","kecoa","serigala","beruang","katak"]
            let cekKh = cekKhodam[Math.floor(Math.random() * cekKhodam.length)]
            let hasilKhodam = `⌜ CEK KHODAM ⌟\n\n\nKhodam Lo Adalah : ${cekKh}\n\nNote : selamat ya khodam lu ${cekKh}, btw ini macam permainan tapi jangan di anggap serius ya sayangku😘`
            reply(hasilKhodam)
            }
            break
 case 'tt': case 'tiktok': {
 Ifaa.deleteMessage().catch(() => {});
if (!q) return reply('_[!] Link...!_')
            reply('_[!] Wait Result..._')
   let datanya = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(q)}`)   
   const vidnya = datanya.video.noWatermark
   await Ifaa.replyWithVideo({
                url: vidnya,
                   }, {
                caption: `[ TIKTOK DOWNLOAD V1 ]\n\n
   Caption: ${datanya.title}\n
   Likes: ${datanya.stats.likeCount}\n
   Comment: ${datanya.stats.commentCount}\nShare: ${datanya.stats.shareCount}\n
   Views: ${datanya.stats.playCount}`
            }
        )
    }
  break
case 'nikparser': case 'dox':
Ifaa.deleteMessage().catch(() => {});
if (!q) return reply(`</> Anda harus mendapatkan nik target terlebih dahulu dan lakukan command seperti ini : ${prefix + command} 16070xxxxx\n\n`)
const { nikParser } = require('nik-parser')
const ktp = q
const nik = nikParser(ktp)
reply(`Nik: ${nik.isValid()}\nProvinsi ID: ${nik.provinceId()}\nNama Provinsi: ${nik.province()}\nKabupaten ID: ${nik.kabupatenKotaId()}\nNama Kabupaten: ${nik.kabupatenKota()}\nKecamatan ID: ${nik.kecamatanId()}\nNama Kecamatan: ${nik.kecamatan()}\nKode Pos: ${nik.kodepos()}\nJenis Kelamin: ${nik.kelamin()}\nTanggal Lahir: ${nik.lahir()}\nUniqcode: ${nik.uniqcode()}`)
break

// Islami //
			/*case 'listsurah':
				anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
				result = anu.result
				for (var x in result) {
				text = `List Surah:\n${x}. ${result[x]}\n`
				}
				await reply(text)
				break
			case 'alquran':
				if (args.length < 1) return await reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
				quran = await fetchJson(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey}`)
				anu = quran.result
				ayat = ayat.ayat
				text = `QS. ${anu.surah} : 1-${ayat.length}\n\n`
				for (var x of ayat) {
					arab = x.arab
					nomor = x.ayat
					latin = x.latin
					indo = x.indonesia
					text += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
				}
				await reply(text)
				break*/
			case 'alquranaudio':
				if (args.length == 0) return await reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
				surah = args[0]
				await Ifaa.replyWithAudio({ url: `https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${apikey}` })
				break
			/*case 'asmaulhusna':
				let data = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
				result = data.result
				text = `No        : ${result.index}\nLatin     : ${result.latin}\nArab      : ${result.ar}\nIndonesia : ${result.id}\nEnglish   : ${result.en}`
				await reply(text)
				break
			case 'kisahnabi':
				if (args.length == 0) return await reply(`Example: ${prefix + command} Muhammad`)
				query = args.join(' ')
				let data = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${apikey}`)
				result = data.result
				text = `Name   : ${result.name}\nLahir  : ${result.thn_kelahiran}\nUmur   : ${result.age}\nTempat : ${result.place}\nStory  :\n${result.story}`
				await reply(text)
				break
			case 'jadwalsholat':
				if (args.length == 0) return await reply(`Example: ${prefix + command} Yogyakarta`)
				daerah = args.join(' ')
				let data = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${apikey}`)
				result = data.result
				text = `Wilayah : ${result.wilayah}\nTanggal : ${result.tanggal}\nSahur   : ${result.sahur}\nImsak   : ${result.imsak}\nSubuh   : ${result.subuh}\nTerbit  : ${result.terbit}\nDhuha   : ${result.dhuha}\nDzuhur  : ${result.dzuhur}\nAshar   : ${result.ashar}\nMaghrib : ${result.maghrib}\nIsya    : ${result.isya}`
				await reply(text)
				break*/
				case 'instagram':
			case 'ig':
			Ifaa.deleteMessage().catch(() => {});
				if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CU0MhPjBZO2/`)
				return fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${args[0]}`).then(async (data) => {
					for (let link of data.result) {
						if (link.includes('.mp4')) {
							await Ifaa.replyWithVideo({ url: link }, { caption: `NIH KAK VIDEONYA` })
						} else {
							await Ifaa.replyWithPhoto({ url: link }, { caption: `NIH KAK FOTONYA` })
						}
					}
				})
				break
				case 'ig2': case 'instagram2': // apala' jika mau fixed fixed aja capee anjir
				Ifaa.deleteMessage().catch(() => {});
				if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CU0MhPjBZO2/`)
				return fetchJson(`https://api.diioffc.web.id/api/download/instagram?url=${args[0]}`).then(async (data) => {
				const response = await data.json()
                const link = response.result[0].url
				    for (let link of data.result) {
				        if (url.includes('.mp4')) {
							await Ifaa.replyWithVideo({ url: link }, { caption: `NIH KAK VIDEONYA` })
						} else {
							await Ifaa.replyWithPhoto({ url: link }, { caption: `NIH KAK FOTONYA` })
						}
					}
				})
				break
				// Movie & Story
			/*case 'lk21':
				if (args.length == 0) return await reply(`Example: ${prefix + command} Transformer`)
				query = args.join(' ')
				laikco = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${apikey}&query=${query}`)
				let result = laikco.result
				let text = `Title : ${result.title}\nLink : ${result.link}\nGenre : ${result.genre}\nViews : ${result.views}\nDuration : ${result.duration}\nTahun : ${result.tahun}\nRating : ${result.rating}\nDesc : ${result.desc}\nActors : ${result.actors.join(', ')}\nLocation : ${result.location}\nDate Release : ${result.date_release}\nLanguage : ${result.language}\nLink Download : ${result.link_dl}`
				await Ifaa.replyWithPhoto({ url: result.thumbnail }, { caption: text })
				break
			case 'drakorongoing':
				drkoryuk = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${apikey}`)
				result = drkoryuk.result
				for (var x of result) {
				text = `Ongoing Drakor\n\nTitle : ${x.title}\nLink : ${x.link}\nThumbnail : ${x.thumbnail}\nYear : ${x.category}\nTotal Episode : ${x.total_episode}\n${x.genre.join(', ')}\n\n`
				}
				await reply(text)
				break
			case 'wattpad':
				if (args.length == 0) return await reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
				wattpad = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${apikey}&url=${args[0]}`)
				result = wattpad.result
				text = `Title : ${result.title}\nRating : ${result.rating}\nMotify date : ${result.modifyDate}\nCreate date: ${result.createDate}\nWord : ${result.word}\nComment : ${result.comment}\nVote : ${result.vote}\nReader : ${result.reader}\nPages : ${result.pages}\nDescription : ${result.desc}\n\nStory : \n${result.story}`
				await Ifaa.replyWithPhoto({ url: result.photo }, { caption: text })
				break
			case 'wattpadsearch':
				if (args.length == 0) return await reply(`Example: ${prefix + command} Tere Liye`)
				query = args.join(' ')
				wwttappad = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${apikey}&query=${query}`)
				result = wwttappad.result
				for (var x of result) {
				text = `Wattpad Seach : \nTitle : ${x.title}\nUrl : ${x.url}\nPart : ${x.parts}\nMotify date : ${x.modifyDate}\nCreate date: ${x.createDate}\nComent count: ${x.commentCount}\n\n`
				}
				await reply(text)
				break
				case 'cerpen':
				cerrpen = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${apikey}`)
				result = cerrpen.result
				text = `Title : ${result.title}\nCreator : ${result.creator}\nStory :\n${result.cerpen}`
				await reply(text)
				break*/
				case 'quotes':
				Ifaa.deleteMessage().catch(() => {});
				quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${apikey}`)
				quotes = quotes.result
				await reply(`_${quotes.by}_\n\n*― ${quotes.quote}*`)
				break
				case 'quotesanime':
				otaklu = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${apikey}`)
				quotes = otaklu.result
				await reply(`_${quotes.quote}_\n\n*― ${quotes.character}*\n*― ${quotes.anime} ${quotes.episode}*`)
				break
				case 'quotesdilan':
				Ifaa.deleteMessage().catch(() => {});
				quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${apikey}`)
				await reply(quotedilan.result)
				break
				case 'faktaunik':
			case 'katabijak':
			case 'pantun':
			case 'bucin':
			Ifaa.deleteMessage().catch(() => {});
				fkpbIfaa = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
				await reply(fkpbIfaa.result)
				break
				// Ephoto 360 //
			case 'wetglass':
			case 'multicolor3d':
			case 'watercolor':
			case 'luxurygold':
			case 'galaxywallpaper':
			case 'lighttext':
			case 'beautifulflower':
			case 'puppycute':
			case 'royaltext':
			case 'heartshaped':
			case 'birthdaycake':
			case 'galaxystyle':
			case 'hologram3d':
			case 'greenneon':
			case 'glossychrome':
			case 'greenbush':
			case 'metallogo':
			case 'noeltext':
			case 'glittergold':
			case 'textcake':
			case 'starsnight':
			case 'wooden3d':
			case 'textbyname':
			case 'writegalacy':
			case 'galaxybat':
			case 'snow3d':
			case 'birthdayday':
			case 'goldplaybutton':
			case 'silverplaybutton':
			case 'freefire':
			case 'cartoongravity':
			case 'anonymhacker':
			case 'anonymhacker':
			case 'mlwall':
			case 'pubgmaskot':
			case 'aovwall':
			case 'logogaming':
			case 'fpslogo':
			case 'avatarIfaanew':
			case 'Ifaabanner':
			case 'avatardota':
			Ifaa.deleteMessage().catch(() => {});
				if (args.length == 0) return await reply(`Example: ${prefix + command} Ifaa Human`)
				reply(`_Tunggu Sebentar_, Sedang proses`)
				await Ifaa.replyWithPhoto({ url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${args.join(' ')}` })
				break
			case 'randomnama':
			Ifaa.deleteMessage().catch(() => {});
				baby = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${apikey}`)
				await reply(baby.result)
				break
        /*case 'emojimix': { // ERROR
	let [emoji1, emoji2] = text.split`+`
	if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
	if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
	let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
	for (let res of anu.results) {
	    let encmedia = await liaacans.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.titlestic, categories: res.tags })
	    await fs.unlinkSync(encmedia)
	}
        }
        break
        case 'emojimix2': {
        if (!text) throw `Example : ${prefix + command} 😅`
	let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
	for (let res of anu.results) {
	    let encmedia = await liaacans.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.titlestic, categories: res.tags })
	    await fs.unlinkSync(encmedia)
	}
        }
        break*/
case 'zodiak': case 'zodiac': {
                if (!q) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                reply(`⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
			case 'translate':{
			Ifaa.deleteMessage().catch(() => {});
			if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
			reply(`Tunggu ya titid`)
			var kode_negara = args[0]
			args.shift()
			var tittt = args.join(' ')
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${global.apikey}&text=${tittt}`)
			init_txt = `From : ${data.result.from}\n`
			init_txt += `To : ${data.result.to}\n`
			init_txt += `Original : ${data.result.original}\n`
			init_txt += `Translated : ${data.result.translated}\n`
			init_txt += `Pronunciation : ${data.result.pronunciation}\n`
			reply(init_txt)
			}
			break
			case 'jadwaltv':
			Ifaa.deleteMessage().catch(() => {});
			if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
			reply(`Proses dataa...`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/${args[0]}?apikey=${global.apikey}`)
			var titttt = `Jadwal TV ${args[0].toUpperCase()}\n`
			for (var x in data.result) {
				titttt += `${x} - ${data.result[x]}\n`
			}
			reply(titttt)
			break
			case 'infocuaca':{
			Ifaa.deleteMessage().catch(() => {});
			if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
			reply(`Proses data...`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${args[0]}?apikey=${global.apikey}`)
			var titttttttttt = `Tempat : ${data.result.tempat}\n`
			titttttttttt += `Cuaca : ${data.result.cuaca}\n`
			titttttttttt += `Angin : ${data.result.angin}\n`
			titttttttttt += `Description : ${data.result.description}\n`
			titttttttttt += `Kelembapan : ${data.result.kelembapan}\n`
			titttttttttt += `Suhu : ${data.result.suhu}\n`
			titttttttttt += `Udara : ${data.result.udara}\n`
			titttttttttt += `Permukaan laut : ${data.result.permukaan_laut}\n`
			reply(titttttttttt)
			}
			break
			case 'simi': case 'simsimi': {
			if (!q) throw `apaan manggil gue?`
const url = `https://api.elxyzgpt.xyz/ai/character-ai?apikey=KC-d25a3f0c02be4021&character=Kamu adalah simi, memiliki sifat nyebelin dan kasar, serta gak banyak basa basi langsung jawab singkat dan langsung ke intinya, serta gunakan kata kata gaul seperti kamu dan aku&text=${q}`
    const data = await fetchJson(url)
    const response = data.result.response
    reply(response)
    }
    break
                // FIX AJA DAH, CAPE AKU:V
                /*case 'hd': case 'remini': case 'tohd': { 
                //if (!isPremium) throw `maaf kak, kamu bukan premium, silahkan hubungi admin, untuk mendapatkan user premium!`
                if (!q) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    //if (!/photo/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    //if (/sticker/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    reply(lang.wait)
                    const media = await downloadAndSaveMediaMessage(q)
                    const rreminii = await TelegraPh(media)
                    let get_result = await fetchJson(`https://api.lolhuman.xyz/api/imagetoanime?apikey=${global.apikey}&img=${rreminii}`)
                    Ifaa.replyWithPhoto({ url: get_result }, { caption: `nih uda jadi cantik/ganteng, foto kamu uda cantik nih😋` })
            }
            break*/
            case 'videy':
case 'vid': {
Ifaa.deleteMessage().catch(() => {});
  if(!text) return reply(`Linknya mana bocah?`);
  const url = `https://api.diioffc.web.id/api/download/videy?url=${encodeURIComponent(text)}`
  reply(lang.wait)
    const data = await fetchJson(url)
    result = data.result
    Ifaa.replyWithVideo({ url: result.link, mimeType: 'video/mp4'})
}
break
case 'mediafire': { // BTW MASIH KAGAK WORK
if (!q) return reply(`Example : ${prefix + command} https://www.mediafire.com/file/44y33kgur9gwu2a/IchaaTeleV1.0.zip/file`)
reply(lang.wait)
    result = await fetchJson(`https://api.diioffc.web.id/api/download/mediafire?url=${encodeURIComponent(q)}`)
    result = result.result
    caption = `${simbolYT} Nama : ${result.nama}\n`
    caption += `${simbolYT} Mime : ${result.mime}\n`
    caption += `${simbolYT} Size : ${result.size}\n`
    caption += `${simbolYT} Link : ${result.link}`
    await Ifaa.replyWithDocument({ url: result.link, filename: result.nama })
    }
    break
            case 'ytmp3':
				if (args.length == 0) return await reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
				reply(lang.wait)
				result = await fetchJson(`https://api.diioffc.web.id/api/download/ytmp3?url=${args[0]}`)
				result = result.result
				caption = `${simbolYT} Title    : *${result.title}*\n`
				caption += `${simbolYT} Description : *${result.description}*\n`
				caption += `${simbolYT} Size     : *${result.size}*\n`
				caption += `${simbolYT} Ago : *${result.ago}*\n`
				caption += `${simbolYT} Views : *${result.views}*\n`
				caption += `${simbolYT} Url : ${result.url}`
				await Ifaa.replyWithPhoto({ url: result.thumbnail }, { caption: caption, parse_mode: 'Markdown' })
				await Ifaa.replyWithAudio({ url: result.download.url, filename: result.title, mimetype: 'audio/mpeg'})
				break
			case 'ytmp4':
				if (args.length == 0) return await reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
				reply(lang.wait)
				result = await fetchJson(`https://api.diioffc.web.id/api/download/ytmp4?url=${args[0]}`)
				result = result.result
				caption = `${simbolYT} Title    : *${result.title}*\n`
				caption += `${simbolYT} Description : *${result.description}*\n`
				caption += `${simbolYT} Size     : *${result.size}*\n`
				caption += `${simbolYT} Ago : *${result.ago}*\n`
				caption += `${simbolYT} Views : *${result.views}*\n`
				caption += `${simbolYT} Url : ${result.url}`
				await Ifaa.replyWithPhoto({ url: result.thumbnail }, { caption: caption, parse_mode: 'Markdown' })
				await Ifaa.replyWithVideo({ url: result.download.url, filename: result.title, mimetype: 'video/mp4'})
				break
				case 'zippyshare':
				if (args.length == 0) return await reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
				url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${apikey}&url=${args[0]}`)
				url = url.result
				text = `\`❖ File Name    :\` *${url.name_file}*\n`
				text += `\`❖ Size         :\` *${url.size}*\n`
				text += `\`❖ Date Upload  :\` *${url.date_upload}*\n`
				text += `\`❖ Download Url :\` *${url.download_url}*`
				await reply(text)
				break
				// Entertainment
			case 'caklontong':
				var { result } = await fetchJson(`https://api.lolhuman.xyz/api/tebak/caklontong2?apikey=${apikey}`)
				entertainment[Ifaa.update.message.from.id] = result.answer.toLowerCase()
				Ifaa.reply(result.question)
				break
			case 'siapaaku':
				var { result } = await fetchJson(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${apikey}`)
				entertainment[Ifaa.update.message.from.id] = result.answer.toLowerCase()
				Ifaa.reply(result.question)
				break
			case 'tebakgambar':
				var { result } = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar2?apikey=${apikey}`)
				entertainment[Ifaa.update.message.from.id] = result.answer.toLowerCase()
				Ifaa.replyWithPhoto({ url: result.image })
				break
			case 'tebakkata':
				var { result } = await fetchJson(`https://api.lolhuman.xyz/api/tebak/kata?apikey=${apikey}`)
				entertainment[Ifaa.update.message.from.id] = result.jawaban.toLowerCase()
				Ifaa.reply(result.pertanyaan)
				break
			case 'tebakjenaka':
				var { result } = await fetchJson(`https://api.lolhuman.xyz/api/tebak/jenaka?apikey=${apikey}`)
				entertainment[Ifaa.update.message.from.id] = result.answer.toLowerCase()
				Ifaa.reply(result.question)
				break
				case 'tiktok':
			case 'arcade8bit':
			case 'battlefield4':
			case 'pubg':
				if (args.length == 0) return await reply(`Example: ${prefix + command} LoL Human`)
				await Ifaa.replyWithPhoto({ url: `https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${apikey}&text1=${args[0]}&text2=${args[1]}` })
				break
				case "gempa": {
                reply(lang.wait)
                let anu = await fetchJson('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')
                Ifaa.replyWithPhoto({
                    url: 'https://data.bmkg.go.id/DataMKG/TEWS/' + anu.Infogempa.gempa.Shakemap
                }, {
                    caption: `⭔ Tanggal : ${anu.Infogempa.gempa.Tanggal}\n⭔ Jam : ${anu.Infogempa.gempa.Jam}\n⭔ Date Time : ${anu.Infogempa.gempa.DateTime}\n⭔ Coordinate : ${anu.Infogempa.gempa.Coordinates}\n⭔ Lintang : ${anu.Infogempa.gempa.Lintang}\n⭔ Bujur : ${anu.Infogempa.gempa.Bujur}\n⭔ Magnitude : ${anu.Infogempa.gempa.Magnitude}\n⭔ Kedalaman : ${anu.Infogempa.gempa.Kedalaman}\n⭔ Wilayah : ${anu.Infogempa.gempa.Wilayah}\n⭔ Potensi : ${anu.Infogempa.gempa.Potensi}\n⭔ Dirasakan : ${anu.Infogempa.gempa.Dirasakan}` 
                })
            }
            break
            case "listuser2": {
                let teks = '*「 DAFTAR ID USER 」*\n\n';
                for (let pengguna of pendaftar) {
                    teks += `- ${pengguna}\n`;
                }
                teks += `\n_Total User : ${pendaftar.length}_`;
                if (teks.length > 4096) {
                    const maxMessageLength = 4096;
                    const messages = [];
                    let currentMessage = '';
                    // Memisahkan teks menjadi beberapa pesan dengan panjang maksimum 4096 karakter
                    const lines = teks.split('\n');
                    for (let line of lines) {
                        if ((currentMessage + line).length > maxMessageLength) {
                            messages.push(currentMessage.trim());
                            currentMessage = '';
                        }
                        currentMessage += line + '\n';
                    }
                    // Mengirim pesan-pesan yang terpisah
                    for (let i = 0; i < messages.length; i++) {
                        const isLastMessage = i === messages.length - 1;
                        const messageText = isLastMessage ? messages[i].trim() : messages[i].trim() + '...';
                        Ifaa.sendMessage(from, { text: messageText }, opts);
                    }
                } else {
                    Ifaa.sendMessage(from, { text: teks.trim() }, opts);
                }
            }
            break
//===================> BATAS CASE <==================\\
            default:
        }
    } catch (e) {
        Ifaa.reply(util.format(e))
        console.log('[ ERROR ] ' + e)
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
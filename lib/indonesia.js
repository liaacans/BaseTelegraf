/*SUBSCRIBE MY YOUTUBE IRULZXD YT*/
 exports.noToken = "7871960175:AAEY3OTBE3CZoGLX4srtj0p0NsiiQIeTI9s"

exports.first_chat = (botname, pushname) => {
    return `Halo Kak ${pushname}! Nama saya ${botname} - Saya adalah Bot Telegram multi fungsi! Klik /menu untuk mengetahui lebih lanjut tentang cara menggunakan bot ini.

[Join Grup Telegram](https://t.me/bestfriendsforeveroffc)`
}
exports.snk = "Syarat & Ketentuan Bot\n\n1. Dilarang Spam Bot\n2. Boleh Chat Sendiri, Kecuali Jgn Spam!\n3. Dilarang Rasis/Sara Di Bot!\n4. Ngobrol Sendiri Sambil Senyum, Kecuali Jgn Spam Juga!\n5. Boleh Masukin Bot Ke Dalam Grup Anda, Bisa Nambahin Grup Anda Sebanyak Banyak Mungkin.\n\n\nNote : Bantu Donasi Buat Untuk Menambahkan Fitur Terbarunya Lagi\nNo.Rek : 901945179969 (Seabank) A/N AKHMAD AULIA RAHMAN\n\nCreate By © [Ifaa karisma](https://t.me/idstore74_pw)"
exports.getStyle = (style, style2) => {
    return `**${style2} Yg Kamu Masukkan Salah**\n\n__Berikut List ${style2} Yg Benar, Total__ **${style}** __${style2}__\n\n`
}
exports.wait = "`⏳ Wait.... Sedang Diproses.`"
exports.ok = "`Done ✅`"
exports.menu = async (Kajessa, thumbnail, pushname, OWNER_NAME, OWNER, prefix, hitall, latensii, os, simple, week, date, dateIslamic, username, isCreator, user_id) => {
    var ini_anu = `Hi ${pushname}

╭─❒ 「 Bot Info 」 
├ Creator :  [@${OWNER_NAME}](${OWNER[0]})
├ Sponsored :  [@idstore74_pw](https://t.m/idstore74_pw)
├ Prefix :   ${prefix}
├ Total hit : ${hitall}
├ Speed : ${latensii.toFixed(4)} Second
├ Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
╰❒ Runtime : ${simple.runtime(process.uptime())}

╭─❒ 「 Date Info 」 
├ Masehi : ${week}, ${date}
├ Hijriah : ${dateIslamic}
╰❒

╭─❒ 「 TqTo 」 
├ Ifaa karisma : [@idstore74_pw](https://t.me/idstore74_pw)
├ Irulz Dev
├ Team Xbot 
╰❒ Menu ini di tambah kan oleh ifa karisma

╭─❒ 「 User Info 」 
├ Name : ${pushname}
├ Profile : [@${pushname}](https://t.me/${username})
╰❒ Owner : ${isCreator ? 'True' : `False`}
`
    var button = [
        [{
                text: '🃏 Anime',
                callback_data: 'animecmd ' + user_id
            },
            {
                text: 'Asupan 😋',
                callback_data: 'asupancmd ' + user_id
            }
        ],
        [{
                text: '👧 Cecan',
                callback_data: 'cecancmd ' + user_id
            },
            {
                text: 'Cogan️ 👦',
                callback_data: 'cogancmd ' + user_id
            }
        ],
        [{
                text: '📥 Download',
                callback_data: 'downloadcmd ' + user_id
            },
            {
                text: 'Ephoto 360 🖼️',
                callback_data: 'ephotocmd ' + user_id
            },
        ],
        [{
                text: '🖼️ Logo Maker',
                callback_data: 'logocmd ' + user_id
            },
            {
                text: 'Islamic 🕌',
                callback_data: 'islamcmd ' + user_id
            },
        ],
        [{
                text: '👙 Nsfw & Sfw',
                callback_data: 'nsfwcmd ' + user_id
            },
            {
                text: 'Photooxy 🖼️',
                callback_data: 'photooxycmd ' + user_id
            },
        ],
        [{
                text: '👦 Owner',
                callback_data: 'owner ' + user_id
            },
            {
                text: 'Text Pro 🖌️',
                callback_data: 'textprocmd ' + user_id
            },
        ],
    ]
    try {
        await Kajessa.editMessageMedia({
            type: "photo",
            media: {
                source: thumbnail
            },
            caption: ini_anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true
        }, {
            reply_markup: {
                inline_keyboard: button
            }
        })
    } catch {
        await Kajessa.replyWithPhoto({
            source: thumbnail
        }, {
            caption: ini_anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
    }
}
exports.animecmd = async (Kajessa, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Kembali !!',
                callback_data: 'menucmd ' + user_id
            },
            {
                text: 'Asupan 😋',
                callback_data: 'asupancmd ' + user_id
            }
        ],
        [{
            text: 'My Owner',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 ANIME 」 
» /akame
» /anna
» /asuna-yuki
» /ayuzawa
» /chitoge
» /emilia
» /erza
» /hinata
» /inori
» /kaga-kouko
» /kaori-miyazono
» /kotori-minami
» /killua
» /mikasa
» /mio-akiyama
» /mizore-sirayuki
» /nakiri-alice
» /naruto
» /riyas-gremori
» /sakura
» /sento-isuzu
» /shana
» /shiina
» /shinka
» /winry
» /yukino
» /yuzuki
» /mikosiba
» /luffy
» /zoro
» /ussop
» /sanji
» /minato
» /boruto
» /sarada
» /mitsuki
» /orochimaru
» /tsunade
» /kakashi
» /rimuru
» /sagiri
» /natsu
» /tanjirou
» /loli
╰──────────◇
`
    await Kajessa.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.asupancmd = async (Kajessa, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Kembali !!',
                callback_data: 'animecmd ' + user_id
            },
            {
                text: 'Cecan 👧',
                callback_data: 'cecancmd ' + user_id
            }
        ],
        [{
            text: 'My Owner',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 ASUPAN 」 
» /chika
» /rikagusriani
» /bocil
» /geayubi
» /santuy
» /ukhty
» /asupan
» /delvira
» /ayu
» /bunga
» /aura
» /nisa
» /ziva
» /yana
» /viona
» /syania
» /riri
» /syifa
» /mama-gina
» /alcakenya
» /mangayutri
╰──────────◇
`
    await Kajessa.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.cecancmd = async (Kajessa, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Kembali !!',
                callback_data: 'asupancmd ' + user_id
            },
            {
                text: 'Cogan️ 👦',
                callback_data: 'cogancmd ' + user_id
            }
        ],
        [{
            text: 'My Owner',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 CECAN 」 
» /china
» /indonesia
» /malaysia
» /thailand
» /korea
» /japan
» /vietnam
» /jenni
» /jiiso
» /lisa
» /rose
╰──────────◇
`
    await Kajessa.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.cogancmd = async (Kajessa, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Kembali !!',
                callback_data: 'cecancmd ' + user_id
            },
            {
                text: 'Download 📥 ',
                callback_data: 'downloadcmd ' + user_id
            }
        ],
        [{
            text: 'My Owner',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 COGAN 」 
» /wuyifan
» /suga
» /parkchanyeol
» /ohsehun
» /luhan
» /kimtaehyung
» /kimseok
» /kimnanjoon
» /kimminseok
» /kimjunmyeon
» /kimjong
» /kimjondae
» /jungkook
» /jimin
» /jhope
» /huangzitao
» /dohkyungsoo
» /baekhyung
╰──────────◇
`
    await Kajessa.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.downloadcmd = async (Kajessa, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Kembali !!',
                callback_data: 'cogancmd ' + user_id
            },
            {
                text: 'Ephoto 360 🖼️',
                callback_data: 'ephotocmd ' + user_id
            }
        ],
        [{
            text: 'My Owner',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 DOWNLOAD 」 
» /ytmp4
» /ytmp3
» /play
» /ytsearch
» /igdl
» /igphoto
» /igvideo
» /igreels
» /pinterest
» /mediafire
» /tiktok
» /tiktokaudio
╰──────────◇
`
    await Kajessa.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.ephotocmd = async (Kajessa, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Kembali !!',
                callback_data: 'downloadcmd ' + user_id
            },
            {
                text: 'Next ➡️',
                callback_data: 'ephotocmd2 ' + user_id
            }
        ],
        [{
            text: 'My Owner',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 EPHOTO 360 」 
» /1917text
» /angelwing
» /announofwin
» /birthdaycake
» /capercut
» /cardhalloween
» /christmascard
» /christmasseason
» /covergamepubg
» /covergraffiti
» /dragonfire
» /embroider
» /fabrictext
» /facebookgold
» /facebooksilver
» /funnyanimations
» /funnyhalloween
» /galaxybat
» /galaxywallpaper
» /generalexam
» /glowingtext
» /graffiti3d
» /graffititext
» /graffititext2
» /graffititext3
» /greetingcardvideo
» /halloweenbats
» /heartcup
» /heartflashlight
» /horrorletter
» /icetext
» /instagramgold
» /instagramsilver
» /lightningpubg
» /lovecard
» /lovelycute
» /masteryavatar
» /merrycard
» /messagecoffee
» /metalstar
» /milkcake
» /modengold3
╰──────────◇
`
    await Kajessa.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.ephotocmd2 = async (Kajessa, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Kembali !!',
                callback_data: 'ephotocmd ' + user_id
            },
            {
                text: 'Logo Maker 🎨',
                callback_data: 'logocmd ' + user_id
            }
        ],
        [{
            text: 'My Owner',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 EPHOTO 360 」 
» /moderngold
» /moderngold2
» /moderngoldsilver
» /nameonheart
» /noeltext
» /projectyasuo
» /pubgbirthday
» /pubgglicthvideo
» /pubgmascotlogo
» /puppycute
» /realembroidery
» /retrotext
» /rosebirthday
» /snowontext
» /starsnight
» /summerbeach
» /sunglightshadow
» /textcakes
» /texthalloween
» /textonglass
» /textsky
» /thundertext
» /twittergold
» /twittersilver
» /viettel
» /vintagetelevision
» /watercolor2
» /womansday
» /writeblood
» /writegalaxy
» /writehorror
» /youtubegold
» /youtubesilver
» /zombie3d
» /shirtclub
» /steellettering
» /letterstext
» /barcashirt
» /premiercup
» /stylepoligon
» /lifebuoys
» /juventusshirt
╰──────────◇
`
    await Kajessa.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.logocmd = async (Kajessa, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Kembali !!',
                callback_data: 'ephotocmd ' + user_id
            },
            {
                text: 'Next ➡️',
                callback_data: 'logocmd2 ' + user_id
            }
        ],
        [{
            text: 'My Owner',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 LOGO MAKER 」 
» /anonymous2
» /astronotspace
» /avatar3q360
» /avatarff
» /avatarleagueofking
» /avatarlolbyname
» /avataroverwatch
» /bannerofaov
» /bannerofaov2
» /bannerofapex
» /banneroffreefire
» /banneroflol
» /bannerofoverwatch
» /bannerofpubg
» /bannerytcsgo
» /beautifulgalaxylol
» /beautifulshimmering
» /blueneon
» /circlemarcotteam
» /colorfulpubg
» /companylogo
» /companylogo2
» /coverbannerlol
» /coverdota2
» /coverfblol
» /coverfreefirefb
» /coverleagueofking
» /coverloknew
» /coverofwarface
» /coveronepiecefb
» /crossfirecover
» /crossfirestyle
» /csgocover
╰──────────◇
`
    await Kajessa.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.logocmd2 = async (Kajessa, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Kembali !!',
                callback_data: 'ephotocmd ' + user_id
            },
            {
                text: 'Islamic 🕌',
                callback_data: 'islamcmd ' + user_id
            }
        ],
        [{
            text: 'My Owner',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 LOGO MAKER 」 
» /cutegirlgamer
» /cyberhunterfb
» /dragonballfb
» /effect3donbeach
» /elegantrotation
» /fbgamepubgcover
» /footballteam
» /gaminglogo4fvs
» /gamingmascot
» /gradientlogo
» /gunlogogaming
» /introvideomaker
» /letterlogos 
» /logoaccording 
» /logogamingassasin 
» /lolcoverbyname 
» /lolpentakill 
» /lolwallpaper 
» /maketeamlogo 
» /mascotstyle 
» /metalmascot 
» /newlolavatar 
» /overwatchcover 
» /overwatchwallpaper 
» /pencilsketch 
» /pubgcutelogo 
» /pubglogomaker 
» /rovwallpaper 
» /rovwallpaperhd 
» /teamlogo 
» /wallpaperaov 
» /wallpaperml
╰──────────◇
`
    await Kajessa.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.islamcmd = async (Kajessa, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Kembali !!',
                callback_data: 'logocmd ' + user_id
            },
            {
                text: 'Nsfw & Sfw 👙',
                callback_data: 'nsfwcmd ' + user_id
            }
        ],
        [{
            text: 'My Owner',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 ISLAMIC 」 
» /asmaulhusna
» /kisahnabi
» /jadwalshalat
» /randomquran
» /randomquran2
» /dictator
» /listsurah
» /tafsirsurah
» /alquranaudio
╰──────────◇
`
    await Kajessa.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.nsfwcmd = async (Kajessa, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Kembali !!',
                callback_data: 'islamcmd ' + user_id
            },
            {
                text: 'Photooxy 🖼️',
                callback_data: 'photooxycmd ' + user_id
            }
        ],
        [{
            text: 'My Owner',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 NSFW & SFW 」 
» /baka
» /smug
» /neko-sfw
» /hentai-gif
» /spank
» /blowjob
» /cumarts
» /eroyuri
» /eroneko
» /erokemonomimi
» /erokitsune
» /ero
» /feet
» /erofeet
» /feetgif
» /femdom
» /futanari
» /hentai
» /holoero
» /holo
» /keta
» /kitsune
» /kemonomimi
» /pussyart
» /pussywankgif
» /girl-solo
» /girl-solo-gif
» /tits
» /trap
» /yuri
» /avatar2
» /anal
» /bj
» /boobs
» /classic
» /cumsluts
» /kuni
» /lesbian
» /neko
» /neko-gif
» /ahegao
» /bdsm
» /cuckold
» /cum
» /foot
» /gangbang
» /glasses
» /jahy
» /masturbation
» /nsfw-neko
» /orgy
» /panties
» /tentacles
» /thighs
» /zettai
» /cuddle
» /foxgirl
» /kemonomimi2
» /woof
» /holo2
» /hug
» /kiss
» /lizard
» /meowi
» /neko2
» /pat
» /poke
» /slap
» /tickle
╰──────────◇
`
    await Kajessa.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.photooxycmd = async (Kajessa, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Kembali !!',
                callback_data: 'nsfwcmd ' + user_id
            },
            {
                text: 'Text Pro 🖌️',
                callback_data: 'textprocmd ' + user_id
            }
        ],
        [{
            text: 'My Owner',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 NSFW & SFW 」 
» /typography-flower
» /under-flower
» /bevel-text
» /silk-text
» /sweet-andy
» /smoke-typography
» /carvedwood
» /scary-cemetery
» /royallook
» /coffeecup2
» /illuminated
» /harry-potter2
» /birthday-cake
» /embroidery
» /flaming
» /furtext
» /nightsky
» /glow-rainbow
» /gradient-avatar
» /white-cube
» /graffiti-cover
» /rainbow-shine
» /smoky-neon
» /quotes-underfall
» /vector-nature
» /yellow-rose
» /love-text
» /underwater-ocean
» /nature-text
» /wolf-metal
» /summer-text
» /wooden-board
» /quote-wood
» /love-text
» /quotes-undergrass
» /naruto-banner
» /love-message
» /textoncup2
» /burn-paper
» /smoke
» /romantic-messages
» /shadow-sky
» /text-cup
» /coffecup
» /battlegrounds-logo
» /battlefield4
» /text-8bit
╰──────────◇
`
    await Kajessa.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.textprocmd = async (Kajessa, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Kembali !!',
                callback_data: 'photooxycmd ' + user_id
            },
            {
                text: 'Next ➡️',
                callback_data: 'textprocmd2 ' + user_id
            }
        ],
        [{
            text: 'My Owner',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「  TEXT PRO 」 
» /3dbox
» /3dchrome
» /3dglue
» /3dstone
» /abstra
» /advanced
» /bear
» /berry
» /biscuit
» /black-metal
» /blackpink
» /blood
» /blood2
» /blue-balloon
» /blue-gem
» /blue-glass
» /blue-glitter
» /blue-jewelry
» /blue-metal
» /blue-sparkling
» /bokeh
» /bread
» /broken
» /bronze-glitter
» /candy
» /captain-as2
» /carbon
» /chocolate
» /chrismast
» /christmas
» /cloudsky
» /cyan-balloon
» /cyan-glass
» /cyan-jewelry
» /cyan-sparkling
» /dark-gold
» /decorate
» /decorate-purple
» /decorative
» /deluxe-gold
» /demon
» /denim
» /discovery
» /dropwater
» /drug
» /embossed
» /engraved
» /equalizer
» /eroded-metal
╰──────────◇
`
    await Kajessa.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.textprocmd2 = async (Kajessa, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Kembali !!',
                callback_data: 'textprocmd ' + user_id
            },
            {
                text: 'Next ➡️',
                callback_data: 'textprocmd3 ' + user_id
            }
        ],
        [{
            text: 'My Owner',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「  TEXT PRO 」 
» /fabric
» /fiction
» /firework
» /glitch
» /gloss
» /glossy
» /glossy-blue
» /glossy-carbon
» /gold-balloon
» /gold-glitter
» /gold-sparkling
» /golden
» /gradient
» /gradient2
» /green-balloon
» /green-glass
» /green-glitter
» /green-jewelry
» /green-neon
» /green-sparkling
» /halloween
» /halloween2
» /holographic
» /honey2
» /hot-metal
» /ice
» /joker
» /juice
» /koifish
» /luxury2
» /magma
» /marble
» /marble2
» /matrix
» /metal-silver
» /metaldark
» /metallic2
» /minion
» /multicolor
» /natural
» /neon
» /neon-devil
» /neon-light
» /neon2
» /neonc
» /neonlight
» /neonligth2
» /newyear
» /newyear2
» /orange-glass
» /orange-jewelry
» /oscar
» /papercut
» /peridot
» /pink-balloon
» /pink-glitter
╰──────────◇
`
    await Kajessa.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.textprocmd3 = async (Kajessa, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Kembali !!',
                callback_data: 'textprocmd2 ' + user_id
            },
            {
                text: 'Anime 🃏',
                callback_data: 'animecmd ' + user_id
            }
        ],
        [{
            text: 'My Owner',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「  TEXT PRO 」 
» /pink-sparkling
» /purple
» /purple-balloon
» /purple-gem
» /purple-glass
» /purple-glitter
» /purple-jewelry
» /purple-shiny-glass
» /purple-sparkling
» /rainbow2
» /red-balloon
» /red-glass
» /red-jewelry
» /red-sparkling
» /road-warning
» /robot
» /rock
» /rusty
» /scifi
» /shiny
» /silver-glitter
» /silver-jewelry
» /sircuit
» /skeleton
» /sketch
» /snow
» /steel
» /strawberry
» /summer
» /summery
» /thunder
» /thunder2
» /toxic
» /transformer
» /underwater
» /wall
» /water-pipe
» /watercolor
» /wicker
» /wonderful-graffiti
» /wood
» /writing
» /xmas
» /yellow-glass
» /yellow-jewelry
» /horror
» /game8bit
» /layered
» /glitch2
» /cool-graffiti
» /cool-wall-graffiti
» /realistic
» /space3d
» /glitch-tiktok
» /stone
» /marvel
» /marvel2
» /metal-rose-gold
» /pornhub
» /avengers
» /metal-rainbow
» /metal-gold
» /metal-galaxy
» /lion
» /wolf-black-white
» /wolf-galaxy
» /ninja
» /3dsteel
» /horror2
» /lava
» /bagel
╰──────────◇
`
    await Kajessa.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
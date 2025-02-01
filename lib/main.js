/*
Base Ori Rahman x Ifaa karisma
const sc = require("scripts/scnya")
Script ulang by aulia rahman
Base bot telegram node js
const script = require("sc/botnya")

// FIXED CPANEL TELE
// MASIH PROSES NAMBAH FITUR

Sosmed media :
Ig : @4xglrs_
Tele : @idstore74_pw
Wa : Privet
Yt : A. Aulia Rahman Official (@auliarhmanproduction)

Thanks too::
Allah swt
Nabi Muhammad
Rahman
Ifaa karisma
Zeeone Ofc
Wannofc
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
    simple
} = require("./lib/myfunc")
const tele = require('./lib/tele')
const obfuscateCode = require('./lib/toolsobf')
const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
if (BOT_TOKEN == 'YOUR_TELEGRAM_BOT_TOKEN') {
    return console.log("tidak ada token")
}
const { Client } = require('ssh2');
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
    ...query,
    ...(apikeyqueryname ? {
        [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
    } : {})
})) : '')

const OWNER_ID = '8043709464'; // Change owner your id
const adminfile = 'lib/adminID.json';
const premiumUsersFile = 'lib/premiumUsers.json';
try {
    premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
} catch (error) {
    console.error('Error reading premiumUsers file:', error);
}
try {
    adminUsers = JSON.parse(fs.readFileSync(adminfile));
} catch (error) {
    console.error('Error reading adminUsers file:', error);
}


// Initialize userSessions
let userSessions = {};


const domain = global.domain;
const plta = global.plta;
const pltc = global.pltc;        

async function uploadToCdn(Path) {
    return new Promise(async (resolve, reject) => {
        if (!fs.existsSync(Path)) return reject(new Error("File tidak ditemukan."));
        try {
            const form = new BodyForm();
            form.append("file", fs.createReadStream(Path));
            const response = await axios({
                url: "https://cdn.meitang.xyz/upload",
                method: "POST",
                headers: {
                    ...form.getHeaders()
                },
                data: form
            });
            return resolve(response.data.file.url)
        } catch (err) {
            return reject(new Error(`Gagal upload: ${err.message}`));
        }
    });
}

function getTargetUserId(Ifaa) {
    const replyMessage = Ifaa.message.reply_to_message;
    if (replyMessage && replyMessage.from && replyMessage.from.id) {
        return replyMessage.from.id;
    }
    return null;
}

async function checkAdmin(Ifaa) {
    const chatMember = await Ifaa.telegram.getChatMember(Ifaa.chat.id, Ifaa.from.id);
    return chatMember && (chatMember.status === 'administrator' || chatMember.status === 'creator');
}

const bot = new Telegraf(BOT_TOKEN)

async function startIfaa() {
    bot.on('callback_query', async (Ifaa) => {
        // Split the action and extract user ID
        const action = Ifaa.callbackQuery.data.split(' ');
        const user_id = Number(action[1]);

        // Check if the callback is from the correct user
        if (Ifaa.callbackQuery.from.id !== user_id) {
            return Ifaa.answerCbQuery('Uppss... this button not for you!', {
                show_alert: true
            });
        }

        const timestampi = speed();
        const latensii = speed() - timestampi;
        const user = simple.getUserName(Ifaa.callbackQuery.from);
        const pushname = user.full_name;
        const username = user.username ? user.username : "Ifaa";
        const isCreator = [Ifaa.botInfo.username, ...global.OWNER].map(v => v.replace("https://t.me/", '')).includes(username);
        
        const parseMarkdown = (text) => {
    text = text.replace(/(\[[^\][]*]\(http[^()]*\))|[_*[\]()~>#+=|{}.!-]/gi, (x, y) => y ? y : '\\' + x)
    return text
}
        
        const range = function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }
    if (typeof step == 'undefined') {
        step = 1;
    }
    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }
    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }
    return result;
}

        const reply = async (text) => {
            for (let x of simple.range(0, text.length, 4096)) { // Split text to avoid overflow
                await Ifaa.replyWithMarkdown(text.substr(x, 4096), {
                    disable_web_page_preview: true
                });
            }
        };

        const downloadMediaMessage = async (message) => {
        let mime = (message.Ifaa || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }

    const downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {

        let quoted = message.Ifaa ? message.Ifaa : message

        let mime = (message.Ifaa || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
        try {
            switch (action[0]) {
           case "mymenu": case "menu": {
                    lang.help(Ifaa, isCreator, pushname, user.id.toString())
                }
                break
                case "islamimenu": {
                    lang.islami(Ifaa, user_id.toString())
                }
                break
                case "cpanelmenu": {
                    lang.cpanelmenu(Ifaa, user_id.toString())
                }
                break
                case "movie": {
                    lang.movie(Ifaa, user_id.toString())
                }
                break
                case "downloadmenu": {
                    lang.downloadmenu(Ifaa, user_id.toString())
                }
                break
                case "randtext": {
                    lang.randtext(Ifaa, user_id.toString())
                }
                break
                case "ephoto": {
                    lang.ephoto(Ifaa, user_id.toString())
                }
                break
                case "obfmenu": {
                    lang.obfmenu(Ifaa, user_id.toString())
                }
                break
                case "groupmenu": {
                    lang.groupmenu(Ifaa, user_id.toString())
                }
                break
                case "ownermenu": {
                    lang.ownermenu(Ifaa, user_id.toString())
                }
                break
           }
        } catch (e) {
            console.log(e)
        }
    })

    bot.command('start', async (Ifaa) => {
        let user = simple.getUserName(Ifaa.message.from)
        await Ifaa.reply(lang.first_chat(BOT_NAME, user.full_name), {
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: 'My Owner',
                        url: "https://t.me/idstore74_pw"
                    }, {
                        text: 'My Telegram',
                        url: "https://t.me/cecancgroup"
                    }],
                    [{
                        text: 'My Website',
                        url: "https://idstore74.pw"
                    }]
                ]
            }
        })
    })
    
//=============== BATAS MENU 2 ===============\\
   
   bot.command('menu2', async(Ifaa) => {
   Ifaa.reply(`Silahkan pilih salah satu button dibawah ini`, {
   reply_markup: {
            keyboard: [
                [
                    {text: 'Cpanel Menu'},
                    {text: "Islami Menu"},
                    {text: "Random Text"}
                ],
                [
                    {text: "Download Menu"},
                    {text: "Ephoto Menu"},
                    {text: "Movie Menu"}
                ],
                [
                    {text: 'Remove keyboard!!'}
                ]
            ]
        }
    })
})

bot.hears('Islami Menu', async(Ifaa) => {
Ifaa.reply(`Silahkan pilih salah satu menu dibawah ini`, {
reply_markup: {
            keyboard: [
                    [
                    { text: 'List surah' },
                    { text: 'Al Quran' },
                    { text: 'Quran Audio' }
                    ],
                    [
                    { text: 'Asmaul Husna' },
                    { text: 'Kisah Nabi' },
                    { text: 'Jadwal Sholat' }
                    ],
                    [
                        {text: 'Remove keyboard!!'}
                    ]
            ]
        }
    })
})
                    
                    

bot.hears('Cpanel Menu', async(Ifaa) => {
Ifaa.reply(`Silahkan pilih salah satu menu dibawah ini`, lang.cpanelmenu(Ifaa), {
reply_markup: {
            keyboard: [
                    [
                        {text: 'List Panel'},
                        {text: 'Buat Panel'},
                        {text: 'List Admin'}
                    ],
                    [
                        {text: 'List Server'},
                        {text: 'Cek id'}
                    ],
                    [
                        {text: 'Kembali Ke Menu Utama'}
                    ],
                    [
                        {text: 'Remove keyboard!!'}
                    ]
            ]
        }
    })
})

bot.hears('Random Text', async(Ifaa) => {
Ifaa.reply(`Silahkan pilih salah satu menu dibawah ini`, lang.randtext(Ifaa), {
reply_markup: {
           keyboard: [
            [
                {text: 'Qoutes', callback_data: 'quotes'},
                {text: 'Quotes Dilan', callback_data: 'quotesdilan'},
                {text: 'Quotes Anime', callback_data: 'quotesanime'},
                ],
                [
                {text: 'Quotes Image', callback_data: 'quotesimage'},
                {text: 'Fakta Unik', callback_data: 'faktaunik'},
                {text: 'Kata Bijak', callback_data: 'katabijak'},
                {text: 'Pantun', callback_data: 'pantun'},
               ],
               [
                {text: 'Apakah', callback_data: 'apakah'},
                {text: 'Bisakah', callback_data: 'bisakah'},
                {text: 'Kapankah', callback_data: 'kapankah'},
                {text: 'Dox', callback_data: 'dox'},
                ],
                [
                {text: 'Bucin', callback_data: 'bucin'},
                {text: 'Randomnama', callback_data: 'randommenu'},
                {text: 'Remove keyboard!!'}
                ]
            ]
        }
    })
})

bot.hears('Kembali Ke Menu Utama', async(Ifaa) => {
Ifaa.reply(`Silahkan pilih salah satu button dibawah ini`, {
reply_markup: {
            keyboard: [
                [
                    {text: 'Cpanel Menu'},
                    {text: "Islami Menu"},
                    {text: "Random Text"}
                ],
                [
                    {text: "Download Menu"},
                    {text: "Ephoto Menu"},
                    {text: "Movie Menu"}
                ],
                [
                    {text: 'Remove keyboard!!'}
                ]
            ]
        }
    })
})

//=============== COMMAND PERINTAH ==============\\
// hahahha capek coyyy🙄
// yauda lanjutin aja🙄

// Command action seperti hatiku😋
bot.action('bucin', async (Ifaa) => {
Ifaa.deleteMessage().catch(() => {});
				result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
				await reply(result.result)
				})



// Group Feature
/*bot.command('hidetag', async (Ifaa) => { // GA WORK, KALAU MAU FIXED AJA
    const isAdmin = Ifaa.message.chat.type === 'group' || Ifaa.message.chat.type === 'supergroup' ? await bot.telegram.getChatMember(Ifaa.message.chat.id, Ifaa.message.from.id).then(member => member.status === 'administrator' || member.status === 'creator') : false;
    if (!isAdmin && !isCreator) {
        Ifaa.reply('Fitur Ini Khusus Untuk Admin Group!');
        return;
    }

    const message = Ifaa.message.text.split(' ').slice(1).join(' ');
    const members = await bot.telegram.getChatMembersCount(Ifaa.message.chat.id);
    const userIds = [];
    for (let i = 0; i < Math.ceil(members / 200); i++) {
        const memberIds = await bot.telegram.getChatAdministrators(Ifaa.message.chat.id);
        memberIds.forEach(member => {
            if (!member.user.is_bot) {
                userIds.push(member.user.id);
            }
        });
    }

    try {
        userIds.forEach(userId => {
            bot.telegram.sendMessage(Ifaa.message.chat.id, `[\u200c](tg://user?id=${userId})${message}`, { parse_mode: 'MarkdownV2' });
        });
    } catch (error) {
        console.error('Error sending message:', error);
        Ifaa.reply('An error occurred while sending the message.');
    }
});*/

bot.command('del', async (Ifaa) => {
    if (Ifaa.chat.type === 'supergroup' || Ifaa.chat.type === 'group') {
        const botInfo = await Ifaa.telegram.getMe();
        const botId = botInfo.id;
        const chatAdmins = await Ifaa.getChatAdministrators(Ifaa.chat.id);
        const isBotAdmin = chatAdmins.some(admin => admin.user.id === botId);
        if (!isBotAdmin) {
            await Ifaa.reply('Bot Harus Menjadi Admin Terlebih Dahulu!');
            return;
        }

        try {
            const messageId = Ifaa.message.message_id;
            await Ifaa.telegram.deleteMessage(Ifaa.chat.id, messageId);
        } catch (error) {
            console.error('Error:', error);
            await Ifaa.reply('An error occurred while deleting the message.');
        }

        const replyMessage = Ifaa.message.reply_to_message;
        if (!replyMessage) {
            await Ifaa.reply('Use the /delete command to reply to the message you want to delete.');
            return;
        }

        const senderId = Ifaa.from.id.toString();
        const isAdmin = chatAdmins.some(admin => admin.user.id.toString() === senderId && (admin.status === 'creator' || admin.status === 'administrator'));
        if (!isAdmin) {
            await Ifaa.reply('Fitur Ini Khusus Untuk Admin Group!');
            return;
        }

        try {
            await Ifaa.telegram.deleteMessage(Ifaa.chat.id, replyMessage.message_id);
        } catch (error) {
            console.error('Error:', error);
            await Ifaa.reply('An error occurred while deleting the message.');
        }
    } else if (Ifaa.chat.type === 'private') {
        try {
            const messageId = Ifaa.message.message_id;
            await Ifaa.telegram.deleteMessage(Ifaa.chat.id, messageId);
        } catch (error) {
            console.error('Error:', error);
            await Ifaa.reply('An error occurred while deleting the message.');
        }
    } else {
        await Ifaa.reply('This command can only be used in a group or private chat.');
    }
});

bot.command('pin', async (Ifaa) => {
    if (!Ifaa.message.chat.type || (Ifaa.message.chat.type !== 'group' && Ifaa.message.chat.type !== 'supergroup')) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Group!');
    }

    const isAdmin = await checkAdmin(Ifaa);
    if (!isAdmin) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Admin Group!');
    }
    
    const chatMember = await Ifaa.telegram.getChatMember(Ifaa.chat.id, Ifaa.botInfo.id);
    if (!chatMember || chatMember.status !== 'administrator') {
        return Ifaa.reply('Bot Harus Menjadi Admin Terlebih Dahulu!');
    }

    const repliedMessage = Ifaa.message.reply_to_message;
    if (!repliedMessage) {
        return Ifaa.reply('Please reply to the message you want to pin in the group.');
    }

    try {
        await Ifaa.telegram.pinChatMessage(Ifaa.chat.id, repliedMessage.message_id, { disable_notification: true });
        return Ifaa.reply('The message was successfully pin in the group.');
    } catch (error) {
        console.error('Failed to pin message in group:', error);
        return Ifaa.reply('Failed to pin message in group.');
    }
});

bot.command('unpin', async (Ifaa) => {
    if (!Ifaa.message.chat.type || (Ifaa.message.chat.type !== 'group' && Ifaa.message.chat.type !== 'supergroup')) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Group!');
    }

    const isAdmin = await checkAdmin(Ifaa);
    if (!isAdmin) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Admin Group!');
    }
    
    const chatMember = await Ifaa.telegram.getChatMember(Ifaa.chat.id, Ifaa.botInfo.id);
    if (!chatMember || chatMember.status !== 'administrator') {
        return Ifaa.reply('Bot Harus Menjadi Admin Terlebih Dahulu!');
    }

    try {
        await Ifaa.telegram.unpinChatMessage(Ifaa.chat.id);
        return Ifaa.reply('Message successfully unpin from group.');
    } catch (error) {
        console.error('Failed to unpin message from group:', error);
        return Ifaa.reply('Failed to unpin message from group.');
    }
});

bot.command('setdesc', async (Ifaa) => {
    if (!Ifaa.message.chat.type || (Ifaa.message.chat.type !== 'group' && Ifaa.message.chat.type !== 'supergroup')) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Group!');
    }

    const chatMember = await Ifaa.telegram.getChatMember(Ifaa.chat.id, Ifaa.botInfo.id);
    if (!chatMember || chatMember.status !== 'administrator') {
        return Ifaa.reply('Bot Harus Menjadi Admin Terlebih Dahulu!');
    }

    const isAdmin = await checkAdmin(Ifaa);
    if (!isAdmin) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Admin Group!');
    }

    const commandParts = Ifaa.message.text.split(' ');
    commandParts.shift(); 
    const newDescription = commandParts.join(' ');
    
    if (!newDescription.trim()) {
        return Ifaa.reply('Description cannot be empty.');
    }

    try {
        await Ifaa.telegram.setChatDescription(Ifaa.chat.id, newDescription);
        return Ifaa.reply('The group description was changed successfully.');
    } catch (error) {
        console.error('Failed to change group description:', error);
        return Ifaa.reply('Failed to change group description.');
    }
});

bot.command('setppgc', async (Ifaa) => {
    if (!Ifaa.message.chat.type || (Ifaa.message.chat.type !== 'group' && Ifaa.message.chat.type !== 'supergroup')) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Group!');
    }

    const chatMember = await Ifaa.telegram.getChatMember(Ifaa.chat.id, Ifaa.botInfo.id);
    if (!chatMember || chatMember.status !== 'administrator') {
        return Ifaa.reply('Bot Harus Menjadi Admin Terlebih Dahulu!');
    }

    const isAdmin = await checkAdmin(Ifaa);
    if (!isAdmin) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Admin Group!');
    }

    const repliedMessage = Ifaa.message.reply_to_message;
    if (!repliedMessage || !repliedMessage.photo) {
        return Ifaa.reply('Please reply with the image you want to use as the group profile photo.');
    }

    const photo = repliedMessage.photo[repliedMessage.photo.length - 1];
    try {
        const photoInfo = await Ifaa.telegram.getFile(photo.file_id);
        const photoUrl = `https://api.telegram.org/file/bot${botToken}/${photoInfo.file_path}`;
        await Ifaa.telegram.setChatPhoto(Ifaa.chat.id, { url: photoUrl });
        return Ifaa.reply('The group profile photo has been successfully changed.');
    } catch (error) {
        console.error('Failed to change group profile photo:', error);
        return Ifaa.reply('Failed to change group profile photo.');
    }
});

bot.command('promote', async (Ifaa) => {
    if (!Ifaa.message.chat.type || (Ifaa.message.chat.type !== 'group' && Ifaa.message.chat.type !== 'supergroup')) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Group!');
    }

    const chatMember = await Ifaa.telegram.getChatMember(Ifaa.chat.id, Ifaa.botInfo.id);
    if (!chatMember || chatMember.status !== 'administrator') {
        return Ifaa.reply('Bot Harus Menjadi Admin Terlebih Dahulu!');
    }

    const isAdmin = await checkAdmin(Ifaa);
    if (!isAdmin) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Admin Group!');
    }

    const targetUserId = getTargetUserId(Ifaa);
    if (!targetUserId) {
        return Ifaa.reply('Please reply to the message of the user you want to make admin and use the /promote command.');
    }

    const chatId = Ifaa.message.chat.id;

    try {
        await Ifaa.telegram.promoteChatMember(chatId, targetUserId, {
            can_change_info: true,
            can_delete_messages: true,
            can_invite_users: true,
            can_restrict_members: true,
            can_pin_messages: true,
            can_promote_members: false,
        });
        return Ifaa.reply('User has been promote as admin.');
    } catch (error) {
        console.error('Failed to promote users:', error);
        return Ifaa.reply('Failed to promote users.');
    }
});

bot.command('demote', async (Ifaa) => {
    if (!Ifaa.message.chat.type || (Ifaa.message.chat.type !== 'group' && Ifaa.message.chat.type !== 'supergroup')) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Group!');
    }

    const chatMember = await Ifaa.telegram.getChatMember(Ifaa.chat.id, Ifaa.botInfo.id);
    if (!chatMember || chatMember.status !== 'administrator') {
        return Ifaa.reply('Bot Harus Menjadi Admin Terlebih Dahulu!');
    }

    const isAdmin = await checkAdmin(Ifaa);
    if (!isAdmin) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Admin Group!');
    }

    const targetUserId = getTargetUserId(Ifaa);
    if (!targetUserId) {
        return Ifaa.reply('Please reply to the message of the user you want to demote as admin and use the /demote command.');
    }

    const chatId = Ifaa.message.chat.id;

    try {
        await Ifaa.telegram.promoteChatMember(chatId, targetUserId, {
            can_change_info: false,
            can_delete_messages: false,
            can_invite_users: false,
            can_restrict_members: false,
            can_pin_messages: false,
            can_promote_members: false,
        });
        return Ifaa.reply('Admin has been demote.');
    } catch (error) {
        console.error('Failed to demote admin:', error);
        return Ifaa.reply('Failed to demote admin.');
    }
});

bot.command('createpoll', async (Ifaa) => {
	    if (!Ifaa.message.chat.type || (Ifaa.message.chat.type !== 'group' && Ifaa.message.chat.type !== 'supergroup')) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Group!');
    }
    
    const isAdmin = await checkAdmin(Ifaa);
    if (!isAdmin) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Admin Group!');
    }

    const pollArgs = Ifaa.message.text.split(';');
    const question = pollArgs[1];
    const options = pollArgs.slice(2);

    if (options.length < 2) {
        return Ifaa.reply('Polls must have at least two options.');
    }

    const keyboard = {
        inline_keyboard: options.map((option) => [{ text: option, callback_data: option }])
    };

    return Ifaa.telegram.sendPoll(Ifaa.message.chat.id, question, options, { reply_markup: keyboard });
});

bot.command('infogroup', async (Ifaa) => {
    if (!Ifaa.message.chat.type || (Ifaa.message.chat.type !== 'group' && Ifaa.message.chat.type !== 'supergroup')) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Group!');
    }

    const chatId = Ifaa.message.chat.id;
    const chatInfo = await Ifaa.telegram.getChat(chatId);
    const membersCount = await Ifaa.telegram.getChatMembersCount(chatId);
    const adminList = await Ifaa.telegram.getChatAdministrators(chatId);
    const adminNames = adminList.map(admin => admin.user.username).join(', ');

    let photo = '';
    if (chatInfo.photo) {
        photo = chatInfo.photo.big_file_id;
    } else {
        photo = 'AgACAgIAAxkBAAIBomE9MfM-NCaU-UeritVgN-gouSYKAAJysTEbs8S5SswybVqdfl3H--mjli4AAwEAAwIAA3gAA5FpAAIfBA'; // PP kosong
    }

    let message = `
    Information about the group:
    - Group Name: ${chatInfo.title}
    - Group Description: ${chatInfo.description ? chatInfo.description : 'No description.'}
    - Group Link: ${chatInfo.invite_link ? chatInfo.invite_link : 'No Link.'}
    - Group ID: ${chatId}
    - Group Type: ${chatInfo.type}
    - Number of Members: ${membersCount}
    - Group Admins: ${adminNames}
    `;

    Ifaa.replyWithPhoto(photo, { caption: message });
});

bot.command('linkgc', async (Ifaa) => {
    if (!Ifaa.message.chat.type || (Ifaa.message.chat.type !== 'group' && Ifaa.message.chat.type !== 'supergroup')) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Group!');
    }

    try {
        const inviteLink = await Ifaa.telegram.exportChatInviteLink(Ifaa.message.chat.id);
        Ifaa.reply('Group invite link: ' + inviteLink);
    } catch (error) {
        console.error('Error while getting group link:', error);
        Ifaa.reply('An error occurred while getting the group invite link.');
    }
});

bot.command('setnamegc', async (Ifaa) => {
    if (!Ifaa.message.chat.type || (Ifaa.message.chat.type !== 'group' && Ifaa.message.chat.type !== 'supergroup')) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Group!');
    }
    
    const isAdmin = await checkAdmin(Ifaa);
    if (!isAdmin) {
        return Ifaa.reply('Fitur Ini Khusus Untuk Admin Group!');
    }
    
    const chatMember = await Ifaa.telegram.getChatMember(Ifaa.chat.id, Ifaa.botInfo.id);
    if (!chatMember || chatMember.status !== 'administrator') {
        return Ifaa.reply('Bot Harus Menjadi Admin Terlebih Dahulu!');
    }

    const chatId = Ifaa.message.chat.id;
    const newName = Ifaa.message.text.split(' ').slice(1).join(' '); 

    try {
        await Ifaa.telegram.setChatTitle(chatId, newName);
        Ifaa.reply('The group name has been successfully changed to: ' + newName);
    } catch (error) {
        console.error('Error while setting group name:', error);
        Ifaa.reply('An error occurred while changing the group name.');
    }
});

// Owner Feature
bot.command('listuser', async (Ifaa) => {
  const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));
  if (!isAdmin) {
    try {
       const users = Ifaa.from.id;

      const userList = users.map((user) => `ID: \`${user.id}\`, Username: ${user.username}, Status: ${user.status}\n`).join('\n');

      Ifaa.reply(`List of Users:\n\n${userList}`);
    } catch (error) {
      console.error('Error fetching users:', error);
      Ifaa.reply('Failed to fetch users.');
    }
  } else {
    Ifaa.reply('Fitur Ini Khusus Untuk Owner Bot');
  }
});

bot.command('bc', async (Ifaa) => {
    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));
  if (!isAdmin) {
    const commandParts = Ifaa.message.text.split(' ');
    commandParts.shift();
    const message = commandParts.join(' ');

    if (message || Ifaa.message.caption || Ifaa.message.photo || Ifaa.message.document || Ifaa.message.video || Ifaa.message.animation || Ifaa.message.audio || Ifaa.message.sticker) {
      const users = Ifaa.from.id;

      for (const user of users) {
        try {
          if (Ifaa.message.photo) {
            const photo = Ifaa.message.photo[Ifaa.message.photo.length - 1];
            await bot.telegram.sendPhoto(user.id, photo.file_id, { caption: message || Ifaa.message.caption });
          } else if (Ifaa.message.document) {
            const document = Ifaa.message.document;
            const fileSizeMB = document.file_size / (1024 * 1024);

            if (fileSizeMB <= fileLimit) {
              await bot.telegram.sendDocument(user.id, document.file_id, { caption: message || Ifaa.message.caption });
            } else {
              console.error(`File size exceeds the limit for user ${user.username} (ID: ${user.id})`);
            }
          } else if (Ifaa.message.video) {
            const video = Ifaa.message.video;
            await bot.telegram.sendVideo(user.id, video.file_id, { caption: message || Ifaa.message.caption });
          } else if (Ifaa.message.animation) {
            const animation = Ifaa.message.animation;
            await bot.telegram.sendAnimation(user.id, animation.file_id, { caption: message || Ifaa.message.caption });
          } else if (Ifaa.message.audio) {
            const audio = Ifaa.message.audio;
            await bot.telegram.sendAudio(user.id, audio.file_id, { caption: message || Ifaa.message.caption });
          } else if (Ifaa.message.sticker) {
            const sticker = Ifaa.message.sticker;
            await bot.telegram.sendSticker(user.id, sticker.file_id);
          } else {
            await bot.telegram.sendMessage(user.id, message || Ifaa.message.caption);
          }

          console.log(`Broadcast message sent to user ${user.username} (ID: ${user.id})`);
        } catch (error) {
          console.error(`Failed to send broadcast message to user ${user.username} (ID: ${user.id}): ${error.message}`);
        }
      }

      Ifaa.reply('Broadcast completed. Check the console for details.');
    } else {
      Ifaa.reply('Invalid command. Please use: /bc <message>');
    }
} else {
      Ifaa.reply('Fitur Ini Khusus Untuk Owner Bot')
  }
});
// Message lainnya:->
bot.hears(['hai', 'hii', 'hi', 'halo', 'hallo', 'hwalo', 'hwloo', 'hiii'], async (Ifaa) => {
Ifaa.reply(`Iyaa ada ya kak? kalau bingung tanya ma bapak lo ya`)
})

// gatau mau buat apa😔
// gada cwe bjir
bot.hears(["assalamualaikum", "mikum", "assalamu'alaikum"], async (Ifaa) => {
Ifaa.reply(`Waalaikumsalam, ada apa ya kak? kalau bingung tanya sama bapak lo ya kak😋`)
})

bot.hears(['sayang', 'syng', 'syg', 'syang', 'sayng', 'yang', 'ayy', 'ayyang', 'ayng', 'ayg', 'ayang'], async (Ifaa) => {
Ifaa.reply(`Lu ngapainnn dahh?? stres kah?`)
})

bot.hears(['p', 'pp', 'pe', 'pppp', 'ppp'], async (Ifaa) => {
Ifaa.reply(`Tolong ucapkan salam, Non Muslim? Ucapkan Hi, hai, halo, atau agama kalian masing masing yaa`)
})

//=============== KEYBOARD DELETE ===============\\
   // HILANGKAN KEYBOARD
   bot.hears('Remove keyboard!!', async (Ifaa) => {
    Ifaa.deleteMessage()
    Ifaa.reply('Keyboard Berhasil Dihilangkan!!',
    {
        reply_markup: {
            remove_keyboard: true //kalau ngak ngerti jngan di utak atik
        }
    })
})
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
//

// del srv
bot.command('delsrv', async (Ifaa) => {
    const chatId = Ifaa.chat.id;
    const srv = Ifaa.message.text.split(' ').slice(1).join(' ');

    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));

    if (!isAdmin) {
        Ifaa.reply('Khusus Owner', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Owner', url: 'https://t.me/idstore74_pw' }
                    ]
                ]
            }
        });
        return;
    }

    if (!srv) {
        Ifaa.reply('Command /delsrv ID');
        return;
    }

    try {
        let f = await fetch(`${domain}/api/application/servers/${srv}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });

        let res = f.ok ? { errors: null } : await f.json();

        if (res.errors) {
            Ifaa.reply('Server Tidak Di Temukan');
        } else {
            Ifaa.reply('Sukses Hapus Server');
        }
    } catch (error) {
        console.error(error);
        Ifaa.reply('Fitur Khusus Owner');
    }
});

// list srv
bot.command('listsrv', async (Ifaa) => {
    const chatId = Ifaa.chat.id;
    const userId = Ifaa.from.id;   
// Check if the user is the Owner
    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));   
    if (!isAdmin) {
        Ifaa.reply('Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'HUBUNGI ADMIN', url: 'https://t.me/idstore74_pw' }
                    ]
                ]
            }
        });
        return;
    }
    let page = 1; // Mengubah penggunaan args[0] yang tidak didefinisikan sebelumnya
    try {
        let f = await fetch(`${domain}/api/application/servers?page=${page}`, { // Menggunakan backticks untuk string literal
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });
        let res = await f.json();
        let servers = res.data;
        let messageText = "Daftar server aktif yang dimiliki:\n\n";
        for (let server of servers) {
            let s = server.attributes;

            let f3 = await fetch(`${domain}/api/client/servers/${s.uuid.split('-')[0]}/resources`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${pltc}`
                }
            });
            let data = await f3.json();
            let status = data.attributes ? data.attributes.current_state : s.status;

            messageText += `ID Server: ${s.id}\n`;
            messageText += `Nama Server: ${s.name}\n`;
            messageText += `Status: ${status}\n\n`;
        }

        Ifaa.reply(messageText);
    } catch (error) {
        console.error(error);
        Ifaa.reply('Terjadi kesalahan dalam memproses permintaan.');
    }
});

bot.command('delusr', async (Ifaa) => {
    const chatId = Ifaa.chat.id;
    const usr = Ifaa.message.text.split(' ').slice(1).join(' ');

    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));

    if (!isAdmin) {
        Ifaa.reply('Perintah hanya untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Hubungi Admin', url: 'https://t.me/idstore74_pw' }
                    ]
                ]
            }
        });
        return;
    }

    if (!usr) {
        Ifaa.reply('Mohon masukkan ID server yang ingin dihapus, contoh: /delusr 1234');
        return;
    }

    try {
        let f = await fetch(`${domain}/api/application/users/${usr}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });

        let res = f.ok ? { errors: null } : await f.json();

        if (res.errors) {
            Ifaa.reply('SERVER NOT FOUND');
        } else {
            Ifaa.reply('SUCCESSFULLY DELETE THE SERVER');
        }
    } catch (error) {
        console.error(error);
        Ifaa.reply('Terjadi kesalahan saat menghapus server.');
    }
});

bot.command('listadmin', async (Ifaa) => {
    const chatId = Ifaa.chat.id;
    const userId = Ifaa.from.id;
    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));
    if (!isAdmin) {
        await Ifaa.reply('Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', Markup.inlineKeyboard([
            [Markup.button.url('HUBUNGI ADMIN', 'https://t.me/idstore74_pw')]
        ]));
        return;
    }

    let page = '1';
    try {
        let response = await fetch(`${domain}/api/application/users?page=${page}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });
        let res = await response.json();
        let users = res.data;

        let messageText = "Berikut list admin :\n\n";
        for (let user of users) {
            let u = user.attributes;
            if (u.root_admin) {
                messageText += `🆔 ID: ${u.id} - 🌟 Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
                messageText += `${u.username}\n`;
                messageText += `${u.first_name} ${u.last_name}\n\n`;
                messageText += 'Script By Ifaa\n';
            }
        }
        messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
        messageText += `Total Admin: ${res.meta.pagination.count}`;

        const keyboard = Markup.inlineKeyboard([
            [
                Markup.button.callback('BACK', JSON.stringify({ action: 'back', page: parseInt(res.meta.pagination.current_page) - 1 })),
                Markup.button.callback('NEXT', JSON.stringify({ action: 'next', page: parseInt(res.meta.pagination.current_page) + 1 }))
            ]
        ]);

        await Ifaa.reply(messageText, keyboard);

    } catch (err) {
        console.error(err);
        await Ifaa.reply('Terjadi kesalahan dalam mengambil data admin.');
    }
});

bot.action('back', async (Ifaa) => {
    const data = JSON.parse(Ifaa.match[0]);
    let page = data.page;
    if (page < 1) {
        page = 1;
    }
    // Panggil kembali API dengan page yang diminta
    try {
        let response = await fetch(`${domain}/api/application/users?page=${page}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });
        let res = await response.json();
        let users = res.data;

        let messageText = "Berikut list admin :\n\n";
        for (let user of users) {
            let u = user.attributes;
            if (u.root_admin) {
                messageText += `🆔 ID: ${u.id} - 🌟 Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
                messageText += `${u.username}\n`;
                messageText += `${u.first_name} ${u.last_name}\n\n`;
                messageText += 'By Ifaa\n';
            }
        }
        messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
        messageText += `Total Admin: ${res.meta.pagination.count}`;

        const keyboard = Markup.inlineKeyboard([
            [
                Markup.button.callback('BACK', JSON.stringify({ action: 'back', page: parseInt(res.meta.pagination.current_page) - 1 })),
                Markup.button.callback('NEXT', JSON.stringify({ action: 'next', page: parseInt(res.meta.pagination.current_page) + 1 }))
            ]
        ]);

        await Ifaa.editMessageText(messageText, keyboard);

    } catch (err) {
        console.error(err);
        await Ifaa.reply('Terjadi kesalahan dalam mengambil data admin.');
    }
});

bot.action('next', async (Ifaa) => {
    const data = JSON.parse(Ifaa.match[0]);
    let page = data.page;
    // Panggil kembali API dengan page yang diminta
    try {
        let response = await fetch(`${domain}/api/application/users?page=${page}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });
        let res = await response.json();
        let users = res.data;

        let messageText = "Berikut list admin :\n\n";
        for (let user of users) {
            let u = user.attributes;
            if (u.root_admin) {
                messageText += `🆔 ID: ${u.id} - 🌟 Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
                messageText += `${u.username}\n`;
                messageText += `${u.first_name} ${u.last_name}\n\n`;
                messageText += 'By Ifaa\n';
            }
        }
        messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
        messageText += `Total Admin: ${res.meta.pagination.count}`;

        const keyboard = Markup.inlineKeyboard([
            [
                Markup.button.callback('BACK', JSON.stringify({ action: 'back', page: parseInt(res.meta.pagination.current_page) - 1 })),
                Markup.button.callback('NEXT', JSON.stringify({ action: 'next', page: parseInt(res.meta.pagination.current_page) + 1 }))
            ]
        ]);

        await Ifaa.editMessageText(messageText, keyboard);

    } catch (err) {
        console.error(err);
        await Ifaa.reply('Terjadi kesalahan dalam mengambil data admin.');
    }
});

// 1gb
bot.command('1gb', async (Ifaa) => {
  const chatId = Ifaa.chat.id;
  const text = Ifaa.message.text.split(' ').slice(1).join(' ');
  const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));
  if (!isAdmin) {
    Ifaa.reply('Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/idstore74_pw' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    Ifaa.reply('Invalid format. Usage: /1gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '1gb';
  const egg = global.eggs;
  const loc = global.loc;
  const memo = '1024';
  const cpu = '30';
  const disk = '1024';
  const email = `${username}@gmail.com`;
  const akunlo = global.pp;
  const password = `${username}362`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        Ifaa.reply('Email already exists. Please use a different email.');
      } else {
        Ifaa.reply(`Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'npm start',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    Ifaa.reply(`Error: ${error.message}`);
  }
  if (user && server) {
    Ifaa.reply(`BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);

    if (akunlo) {
    
      Ifaa.telegram.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

╭──❏「 INFO DATA PANEL 」❏
┃➥  Login : ${domain}
┃➥  Username : ${user.username}
┃➥  Password : ${password} 
┗━━━━━[ RISMAA BOTZ ]━━━━
THANKS FOR YOUR SUDAH BELI PANEL DI WANZ
ADA KENDALA CHAT RISMA YA ` 
        });
      Ifaa.reply('PANEL CREATE SUKSES .');
    }
  } else {
    Ifaa.reply('Gagal membuat data panel. Silakan coba lagi.');
  }
});

bot.command('2gb', async (Ifaa) => {
  const text = Ifaa.message.text.split(' ').slice(1).join(' ');
  
 const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));

  if (!isAdmin) {
    Ifaa.reply('Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'HUBUNGI ADMIN', url: 'https://t.me/idstore74_pw' }]
        ]
      }
    });
    return;
  }
   
  
  const t = text.split(',');
  if (t.length < 2) {
    return Ifaa.reply('Invalid format. Usage: /2gb namapanel,idtele');
  }

  const username = t[0];
  const u = t[1];
  const name = username + '2gb';
  const egg = global.eggs;
  const loc = global.loc;
  const memo = '2024';
  const cpu = '40';
  const disk = '2024';
  const email = `${username}@gmail.com`;
  const akunlo = global.pp;
  const password = `${username}258`;

  let user;
  let server;

  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password,
      }),
    });

    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        return Ifaa.reply('Email already exists. Please use a different email.');
      } else {
        return Ifaa.reply(`Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
    }

    user = data.attributes;

    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'npm start',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start',
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu,
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1,
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: [],
        },
      }),
    });

    const data2 = await response2.json();
    server = data2.attributes;

  } catch (error) {
    return Ifaa.reply(`Error: ${error.message}`);
  }

  if (user && server) {
    Ifaa.reply(`BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);

    if (akunlo) {
      Ifaa.telegram.sendPhoto(u, akunlo, {
        caption: `Hai @${u}
        
╭──❏「 INFO DATA PANEL 」❏
┃➥  Login : ${domain}
┃➥  Username : ${user.username}
┃➥  Password : ${password} 
┗━━━━━[ RISMAA BOTZ  ]━━━━
THANKS FOR YOUR SUDAH BELI PANEL DI Ifaa
ADA KENDALA CHAT RISMAA BOTZ YA`,
      });
      Ifaa.reply('PANEL CREATE SUKSES.');
    }
  } else {
    Ifaa.reply('Gagal membuat data panel. Silakan coba lagi.');
  }
});

bot.command('3gb', async (Ifaa) => {
  const text = Ifaa.message.text.split(' ').slice(1).join(' ');
  
 const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));

  if (!isAdmin) {
    Ifaa.reply('Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'HUBUNGI ADMIN', url: 'https://t.me/idstore74_pw' }]
        ]
      }
    });
    return;
  }
   
  
  const t = text.split(',');
  if (t.length < 2) {
    return Ifaa.reply('Invalid format. Usage: /3gb namapanel,idtele');
  }

  const username = t[0];
  const u = t[1];
  const name = username + '3gb';
  const egg = global.eggs;
  const loc = global.loc;
  const memo = '3072';
  const cpu = '90';
  const disk = '3072';
  const email = `${username}@gmail.com`;
  const akunlo = global.pp;
  const password = `${username}258`;

  let user;
  let server;

  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password,
      }),
    });

    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        return Ifaa.reply('Email already exists. Please use a different email.');
      } else {
        return Ifaa.reply(`Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
    }

    user = data.attributes;

    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'npm start',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start',
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu,
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1,
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: [],
        },
      }),
    });

    const data2 = await response2.json();
    server = data2.attributes;

  } catch (error) {
    return Ifaa.reply(`Error: ${error.message}`);
  }

  if (user && server) {
    Ifaa.reply(`BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);

    if (akunlo) {
      Ifaa.telegram.sendPhoto(u, akunlo, {
        caption: `Hai @${u}
        
╭──❏「 INFO DATA PANEL 」❏
┃➥  Login : ${domain}
┃➥  Username : ${user.username}
┃➥  Password : ${password} 
┗━━━━━[ RISMAA BOTZ  ]━━━━
THANKS FOR YOUR SUDAH BELI PANEL DI Ifaa
ADA KENDALA CHAT RISMAA BOTZ YA`,
      });
      Ifaa.reply('PANEL CREATE SUKSES.');
    }
  } else {
    Ifaa.reply('Gagal membuat data panel. Silakan coba lagi.');
  }
});

bot.command('4gb', async (Ifaa) => {
  const text = Ifaa.message.text.split(' ').slice(1).join(' ');
  
 const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));

  if (!isAdmin) {
    Ifaa.reply('Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'HUBUNGI ADMIN', url: 'https://t.me/idstore74_pw' }]
        ]
      }
    });
    return;
  }
   
  
  const t = text.split(',');
  if (t.length < 2) {
    return Ifaa.reply('Invalid format. Usage: /4gb namapanel,idtele');
  }

  const username = t[0];
  const u = t[1];
  const name = username + '4gb';
  const egg = global.eggs;
  const loc = global.loc;
  const memo = '4048';
  const cpu = '110';
  const disk = '4048';
  const email = `${username}@gmail.com`;
  const akunlo = global.pp;
  const password = `${username}258`;

  let user;
  let server;

  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password,
      }),
    });

    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        return Ifaa.reply('Email already exists. Please use a different email.');
      } else {
        return Ifaa.reply(`Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
    }

    user = data.attributes;

    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'npm start',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start',
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu,
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1,
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: [],
        },
      }),
    });

    const data2 = await response2.json();
    server = data2.attributes;

  } catch (error) {
    return Ifaa.reply(`Error: ${error.message}`);
  }

  if (user && server) {
    Ifaa.reply(`BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);

    if (akunlo) {
      Ifaa.telegram.sendPhoto(u, akunlo, {
        caption: `Hai @${u}
        
╭──❏「 INFO DATA PANEL 」❏
┃➥  Login : ${domain}
┃➥  Username : ${user.username}
┃➥  Password : ${password} 
┗━━━━━[ RISMAA BOTZ  ]━━━━
THANKS FOR YOUR SUDAH BELI PANEL DI Ifaa
ADA KENDALA CHAT RISMAA BOTZ YA`,
      });
      Ifaa.reply('PANEL CREATE SUKSES.');
    }
  } else {
    Ifaa.reply('Gagal membuat data panel. Silakan coba lagi.');
  }
});

bot.command('5gb', async (Ifaa) => {
  const text = Ifaa.message.text.split(' ').slice(1).join(' ');
  
 const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));

  if (!isAdmin) {
    Ifaa.reply('Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'HUBUNGI ADMIN', url: 'https://t.me/idstore74_pw' }]
        ]
      }
    });
    return;
  }
   
  
  const t = text.split(',');
  if (t.length < 2) {
    return Ifaa.reply('Invalid format. Usage: /5gb namapanel,idtele');
  }

  const username = t[0];
  const u = t[1];
  const name = username + '5gb';
  const egg = global.eggs;
  const loc = global.loc;
  const memo = '5048';
  const cpu = '140';
  const disk = '5048';
  const email = `${username}@gmail.com`;
  const akunlo = global.pp;
  const password = `${username}258`;

  let user;
  let server;

  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password,
      }),
    });

    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        return Ifaa.reply('Email already exists. Please use a different email.');
      } else {
        return Ifaa.reply(`Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
    }

    user = data.attributes;

    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'npm start',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start',
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu,
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1,
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: [],
        },
      }),
    });

    const data2 = await response2.json();
    server = data2.attributes;

  } catch (error) {
    return Ifaa.reply(`Error: ${error.message}`);
  }

  if (user && server) {
    Ifaa.reply(`BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);

    if (akunlo) {
      Ifaa.telegram.sendPhoto(u, akunlo, {
        caption: `Hai @${u}
        
╭──❏「 INFO DATA PANEL 」❏
┃➥  Login : ${domain}
┃➥  Username : ${user.username}
┃➥  Password : ${password} 
┗━━━━━[ RISMAA BOTZ  ]━━━━
THANKS FOR YOUR SUDAH BELI PANEL DI Ifaa
ADA KENDALA CHAT RISMAA BOTZ YA`,
      });
      Ifaa.reply('PANEL CREATE SUKSES.');
    }
  } else {
    Ifaa.reply('Gagal membuat data panel. Silakan coba lagi.');
  }
});

bot.command('6gb', async (Ifaa) => {
  const text = Ifaa.message.text.split(' ').slice(1).join(' ');
  
 const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));

  if (!isAdmin) {
    Ifaa.reply('Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'HUBUNGI ADMIN', url: 'https://t.me/idstore74_pw' }]
        ]
      }
    });
    return;
  }
   
  
  const t = text.split(',');
  if (t.length < 2) {
    return Ifaa.reply('Invalid format. Usage: /6gb namapanel,idtele');
  }

  const username = t[0];
  const u = t[1];
  const name = username + '6gb';
  const egg = global.eggs;
  const loc = global.loc;
  const memo = '6048';
  const cpu = '170';
  const disk = '6048';
  const email = `${username}@gmail.com`;
  const akunlo = global.pp;
  const password = `${username}258`;

  let user;
  let server;

  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password,
      }),
    });

    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        return Ifaa.reply('Email already exists. Please use a different email.');
      } else {
        return Ifaa.reply(`Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
    }

    user = data.attributes;

    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'npm start',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start',
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu,
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1,
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: [],
        },
      }),
    });

    const data2 = await response2.json();
    server = data2.attributes;

  } catch (error) {
    return Ifaa.reply(`Error: ${error.message}`);
  }

  if (user && server) {
    Ifaa.reply(`BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);

    if (akunlo) {
      Ifaa.telegram.sendPhoto(u, akunlo, {
        caption: `Hai @${u}
        
╭──❏「 INFO DATA PANEL 」❏
┃➥  Login : ${domain}
┃➥  Username : ${user.username}
┃➥  Password : ${password} 
┗━━━━━[ RISMAA BOTZ  ]━━━━
THANKS FOR YOUR SUDAH BELI PANEL DI Ifaa
ADA KENDALA CHAT RISMAA BOTZ YA`,
      });
      Ifaa.reply('PANEL CREATE SUKSES.');
    }
  } else {
    Ifaa.reply('Gagal membuat data panel. Silakan coba lagi.');
  }
});

bot.command('7gb', async (Ifaa) => {
  const text = Ifaa.message.text.split(' ').slice(1).join(' ');
  
 const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));

  if (!isAdmin) {
    Ifaa.reply('Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'HUBUNGI ADMIN', url: 'https://t.me/idstore74_pw' }]
        ]
      }
    });
    return;
  }
   
  
  const t = text.split(',');
  if (t.length < 2) {
    return Ifaa.reply('Invalid format. Usage: /7gb namapanel,idtele');
  }

  const username = t[0];
  const u = t[1];
  const name = username + '7gb';
  const egg = global.eggs;
  const loc = global.loc;
  const memo = '7048';
  const cpu = '200';
  const disk = '7048';
  const email = `${username}@gmail.com`;
  const akunlo = global.pp;
  const password = `${username}258`;

  let user;
  let server;

  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password,
      }),
    });

    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        return Ifaa.reply('Email already exists. Please use a different email.');
      } else {
        return Ifaa.reply(`Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
    }

    user = data.attributes;

    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'npm start',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start',
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu,
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1,
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: [],
        },
      }),
    });

    const data2 = await response2.json();
    server = data2.attributes;

  } catch (error) {
    return Ifaa.reply(`Error: ${error.message}`);
  }

  if (user && server) {
    Ifaa.reply(`BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);

    if (akunlo) {
      Ifaa.telegram.sendPhoto(u, akunlo, {
        caption: `Hai @${u}
        
╭──❏「 INFO DATA PANEL 」❏
┃➥  Login : ${domain}
┃➥  Username : ${user.username}
┃➥  Password : ${password} 
┗━━━━━[ RISMAA BOTZ  ]━━━━
THANKS FOR YOUR SUDAH BELI PANEL DI Ifaa
ADA KENDALA CHAT RISMAA BOTZ YA`,
      });
      Ifaa.reply('PANEL CREATE SUKSES.');
    }
  } else {
    Ifaa.reply('Gagal membuat data panel. Silakan coba lagi.');
  }
});

bot.command('8gb', async (Ifaa) => {
  const text = Ifaa.message.text.split(' ').slice(1).join(' ');
  
 const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));

  if (!isAdmin) {
    Ifaa.reply('Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'HUBUNGI ADMIN', url: 'https://t.me/idstore74_pw' }]
        ]
      }
    });
    return;
  }
   
  
  const t = text.split(',');
  if (t.length < 2) {
    return Ifaa.reply('Invalid format. Usage: /8gb namapanel,idtele');
  }

  const username = t[0];
  const u = t[1];
  const name = username + '8gb';
  const egg = global.eggs;
  const loc = global.loc;
  const memo = '8048';
  const cpu = '230';
  const disk = '8048';
  const email = `${username}@gmail.com`;
  const akunlo = global.pp;
  const password = `${username}258`;

  let user;
  let server;

  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password,
      }),
    });

    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        return Ifaa.reply('Email already exists. Please use a different email.');
      } else {
        return Ifaa.reply(`Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
    }

    user = data.attributes;

    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'npm start',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start',
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu,
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1,
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: [],
        },
      }),
    });

    const data2 = await response2.json();
    server = data2.attributes;

  } catch (error) {
    return Ifaa.reply(`Error: ${error.message}`);
  }

  if (user && server) {
    Ifaa.reply(`BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);

    if (akunlo) {
      Ifaa.telegram.sendPhoto(u, akunlo, {
        caption: `Hai @${u}
        
╭──❏「 INFO DATA PANEL 」❏
┃➥  Login : ${domain}
┃➥  Username : ${user.username}
┃➥  Password : ${password} 
┗━━━━━[ RISMAA BOTZ  ]━━━━
THANKS FOR YOUR SUDAH BELI PANEL DI Ifaa
ADA KENDALA CHAT RISMAA BOTZ YA`,
      });
      Ifaa.reply('PANEL CREATE SUKSES.');
    }
  } else {
    Ifaa.reply('Gagal membuat data panel. Silakan coba lagi.');
  }
});

bot.command('9gb', async (Ifaa) => {
  const text = Ifaa.message.text.split(' ').slice(1).join(' ');
  
 const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));

  if (!isAdmin) {
    Ifaa.reply('Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'HUBUNGI ADMIN', url: 'https://t.me/idstore74_pw' }]
        ]
      }
    });
    return;
  }
   
  
  const t = text.split(',');
  if (t.length < 2) {
    return Ifaa.reply('Invalid format. Usage: /9gb namapanel,idtele');
  }

  const username = t[0];
  const u = t[1];
  const name = username + '9gb';
  const egg = global.eggs;
  const loc = global.loc;
  const memo = '9048';
  const cpu = '260';
  const disk = '9048';
  const email = `${username}@gmail.com`;
  const akunlo = global.pp;
  const password = `${username}258`;

  let user;
  let server;

  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password,
      }),
    });

    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        return Ifaa.reply('Email already exists. Please use a different email.');
      } else {
        return Ifaa.reply(`Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
    }

    user = data.attributes;

    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'npm start',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start',
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu,
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1,
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: [],
        },
      }),
    });

    const data2 = await response2.json();
    server = data2.attributes;

  } catch (error) {
    return Ifaa.reply(`Error: ${error.message}`);
  }

  if (user && server) {
    Ifaa.reply(`BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);

    if (akunlo) {
      Ifaa.telegram.sendPhoto(u, akunlo, {
        caption: `Hai @${u}
        
╭──❏「 INFO DATA PANEL 」❏
┃➥  Login : ${domain}
┃➥  Username : ${user.username}
┃➥  Password : ${password} 
┗━━━━━[ RISMAA BOTZ  ]━━━━
THANKS FOR YOUR SUDAH BELI PANEL DI Ifaa
ADA KENDALA CHAT RISMAA BOTZ YA`,
      });
      Ifaa.reply('PANEL CREATE SUKSES.');
    }
  } else {
    Ifaa.reply('Gagal membuat data panel. Silakan coba lagi.');
  }
});

bot.command('10gb', async (Ifaa) => {
  const text = Ifaa.message.text.split(' ').slice(1).join(' ');
  
 const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));

  if (!isAdmin) {
    Ifaa.reply('Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'HUBUNGI ADMIN', url: 'https://t.me/idstore74_pw' }]
        ]
      }
    });
    return;
  }
   
  
  const t = text.split(',');
  if (t.length < 2) {
    return Ifaa.reply('Invalid format. Usage: /10gb namapanel,idtele');
  }

  const username = t[0];
  const u = t[1];
  const name = username + '10gb';
  const egg = global.eggs;
  const loc = global.loc;
  const memo = '10048';
  const cpu = '300';
  const disk = '10048';
  const email = `${username}@gmail.com`;
  const akunlo = global.pp;
  const password = `${username}258`;

  let user;
  let server;

  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password,
      }),
    });

    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        return Ifaa.reply('Email already exists. Please use a different email.');
      } else {
        return Ifaa.reply(`Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
    }

    user = data.attributes;

    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'npm start',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start',
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu,
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1,
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: [],
        },
      }),
    });

    const data2 = await response2.json();
    server = data2.attributes;

  } catch (error) {
    return Ifaa.reply(`Error: ${error.message}`);
  }

  if (user && server) {
    Ifaa.reply(`BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);

    if (akunlo) {
      Ifaa.telegram.sendPhoto(u, akunlo, {
        caption: `Hai @${u}
        
╭──❏「 INFO DATA PANEL 」❏
┃➥  Login : ${domain}
┃➥  Username : ${user.username}
┃➥  Password : ${password} 
┗━━━━━[ RISMAA BOTZ  ]━━━━
THANKS FOR YOUR SUDAH BELI PANEL DI Ifaa
ADA KENDALA CHAT RISMAA BOTZ YA`,
      });
      Ifaa.reply('PANEL CREATE SUKSES.');
    }
  } else {
    Ifaa.reply('Gagal membuat data panel. Silakan coba lagi.');
  }
});

bot.command('unli', async (Ifaa) => {
  const text = Ifaa.message.text.split(' ').slice(1).join(' ');
  
 const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));

  if (!isAdmin) {
    Ifaa.reply('Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'HUBUNGI ADMIN', url: 'https://t.me/idstore74_pw' }]
        ]
      }
    });
    return;
  }
   
  
  const t = text.split(',');
  if (t.length < 2) {
    return Ifaa.reply('Invalid format. Usage: /unli namapanel,idtele');
  }

  const username = t[0];
  const u = t[1];
  const name = username + 'unli';
  const egg = global.eggs;
  const loc = global.loc;
  const memo = '0';
  const cpu = '0';
  const disk = '0';
  const email = `${username}@gmail.com`;
  const akunlo = global.pp;
  const password = `${username}258`;

  let user;
  let server;

  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password,
      }),
    });

    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        return Ifaa.reply('Email already exists. Please use a different email.');
      } else {
        return Ifaa.reply(`Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
    }

    user = data.attributes;

    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`,
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'npm start',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start',
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu,
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1,
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: [],
        },
      }),
    });

    const data2 = await response2.json();
    server = data2.attributes;

  } catch (error) {
    return Ifaa.reply(`Error: ${error.message}`);
  }

  if (user && server) {
    Ifaa.reply(`BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);

    if (akunlo) {
      Ifaa.telegram.sendPhoto(u, akunlo, {
        caption: `Hai @${u}
        
╭──❏「 INFO DATA PANEL 」❏
┃➥  Login : ${domain}
┃➥  Username : ${user.username}
┃➥  Password : ${password} 
┗━━━━━[ RISMAA BOTZ  ]━━━━
THANKS FOR YOUR SUDAH BELI PANEL DI Ifaa
ADA KENDALA CHAT RISMAA YA `,
      });
      Ifaa.reply('PANEL CREATE SUKSES.');
    }
  } else {
    Ifaa.reply('Gagal membuat data panel. Silakan coba lagi.');
  }
});

bot.command('createadmin', async (Ifaa) => {
  const chatId = Ifaa.chat.id;
  const userId = Ifaa.from.id;

  const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(Ifaa.from.id));

  if (!isAdmin) {
    Ifaa.reply('Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'HUBUNGI ADMIN', url: 'https://t.me/idstore74_pw' }]
        ]
      }
    });
    return;
  }

  const commandParams = Ifaa.message.text.split(' ')[1]; // Ambil argumen perintah
  if (!commandParams) {
    Ifaa.reply('Format Salah! Penggunaan: /createadmin namapanel,idtele');
    return;
  }

  const params = commandParams.split(',');
  if (params.length < 2) {
    Ifaa.reply('Format Salah! Penggunaan: /createadmin namapanel,idtele');
    return;
  }

  const panelName = params[0].trim();
  const telegramId = params[1].trim();
  const password = panelName + "653";

  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: `${panelName}@gmail.com`,
        username: panelName,
        first_name: panelName,
        last_name: "Memb",
        language: "en",
        root_admin: true,
        password: password
      })
    });

    const data = await response.json();

    if (data.errors) {
      Ifaa.reply(JSON.stringify(data.errors[0], null, 2));
      return;
    }

    const user = data.attributes;
    const userInfo = `
TYPE: user
➟ ID: ${user.id}
➟ USERNAME: ${user.username}
➟ EMAIL: ${user.email}
➟ NAME: ${user.first_name} ${user.last_name}
➟ LANGUAGE: ${user.language}
➟ ADMIN: ${user.root_admin}
➟ CREATED AT: ${user.created_at}
➟ LOGIN: ${domain}
    `;

    Ifaa.reply(userInfo);
    bot.telegram.sendMessage(telegramId, `
╭──❏「 INFO DATA ADMIN PANEL 」❏
┃➥  Login : ${domain}
┃➥  Username : ${user.username}
┃➥  Password : ${password} 
┗━━━━━[ RISMAA BOTZ ]━━━━
➡️ Rules : 
• Jangan Curi Sc
• Jangan Buka Panel Orang
• Jangan Ddos Server
• Kalo jualan sensor domainnya
• Jangan Bagi² Panel Free
• Jangan Jualan AdminP Kecuali Pt Gw !!

NGEYEL? KICK NO REFF NO DRAMA
Jangan Lupa Bilang Done Jika Sudah Di Cek
==============================
THANKS FOR BUYING SMART BUYYER
    `);
  } catch (error) {
    console.error(error);
    Ifaa.reply('Terjadi kesalahan dalam pembuatan admin. Silakan coba lagi nanti.');
  }
});
//============= BATAS PANEL ==============\\

bot.command('installpanel', async (Ifaa) => {
  const text = Ifaa.message.text.split(' ')[1]; // Mengambil argumen setelah perintah /installpanel
  if (!text) {
    return Ifaa.reply('Format salah!\nPenggunaan: /installpanel ipvps,password,domainpnl,domainnode,ramvps (contoh: 8000 = ram 8)\nscript by Ifaa');
  }
  
  const t = text.split(',');
  if (!global.adminId.includes(String(Ifaa.from.id))) {
    return Ifaa.reply('Fitur Ini Khusus Owner Saya!!!');
  }

  if (t.length < 5) {
    return Ifaa.reply('Format salah!\nPenggunaan: /installpanel ipvps,password,domainpnl,domainnode,ramvps ( contoh : 8000 = ram 8\nscript by Ifaa');
  }

  const ipvps = t[0];
  const passwd = t[1];
  const subdomain = t[2];
  const domainnode = t[3];
  const ramvps = t[4];

  const connSettings = {
    host: ipvps,
    port: 22,
    username: 'root',
    password: passwd
  };

  let password = generateRandomPassword();
  const command = 'bash <(curl -s https://pterodactyl-installer.se)';
  const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
  const conn = new Client();

  conn.on('ready', () => {
    Ifaa.reply('PROSES PENGINSTALLAN SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT\nscript by Ifaa');
    conn.exec(command, (err, stream) => {
      if (err) throw err;

      stream.on('close', (code, signal) => {
        console.log(`Stream closed with code ${code} and signal ${signal}`);
        installWings(conn, domainnode, subdomain, password, ramvps);
      }).on('data', (data) => {
        handlePanelInstallationInput(data, stream, subdomain, password);
      }).stderr.on('data', (data) => {
        console.log('STDERR: ' + data);
      });
    });
  }).connect(connSettings);

  async function installWings(conn, domainnode, subdomain, password, ramvps) {
    Ifaa.reply('PROSES PENGINSTALLAN WINGS SEDANG BERLANGSUNG MOHON TUNGGU 5 MENIT\nscript by Ifaa');
    conn.exec(commandWings, (err, stream) => {
      if (err) throw err;
      stream.on('close', (code, signal) => {
        console.log('Wings installation stream closed with code ${code} and signal ${signal}');
        createNode(conn, domainnode, ramvps, subdomain, password);
      }).on('data', (data) => {
        handleWingsInstallationInput(data, stream, domainnode, subdomain);
      }).stderr.on('data', (data) => {
        console.log('STDERR: ' + data);
      });
    });
  }

  async function createNode(conn, domainnode, ramvps, subdomain, password) {
    const command = 'bash <(curl -s https://raw.githubusercontent.com/wndrzzka/installer-pterodactlty/main/install.sh)';
    Ifaa.reply('MEMULAI CREATE NODE & LOCATION\nscript by Ifaa');
    conn.exec(command, (err, stream) => {
      if (err) throw err;
      stream.on('close', (code, signal) => {
        console.log('Node creation stream closed with code ${code} and ${signal} signal');
        conn.end();
        sendPanelData(subdomain, password);
      }).on('data', (data) => {
        handleNodeCreationInput(data, stream, domainnode, ramvps);
      }).stderr.on('data', (data) => {
        console.log('STDERR: ' + data);
      });
    });
  }

  function sendPanelData(subdomain, password) {
    Ifaa.reply(`DATA PANEL ANDA\n\nUSERNAME: admin\nPASSWORD: ${password}\nLOGIN: ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA\nscript by Ifaa`);
  }

  function handlePanelInstallationInput(data, stream, subdomain, password) {
    const input = data.toString();
    if (input.includes('Input')) stream.write('0\n');
    if (input.includes('Input')) stream.write('\n');
    if (input.includes('Input')) stream.write('1248\n');
    if (input.includes('Input')) stream.write('Asia/Jakarta\n');
    if (input.includes('Input')) stream.write('admin@gmail.com\n');
    if (input.includes('Input')) stream.write('admin\n');
    if (input.includes('Input')) stream.write(`${password}\n`);
    if (input.includes('Input')) stream.write(`${subdomain}\n`);
    if (input.includes('Input')) stream.write('y\n');
    if (input.includes('Please read the Terms of Service')) stream.write('A\n');
    if (input.includes('Input')) stream.write('1\n');
    console.log('STDOUT: ' + data);
  }

  function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
    const input = data.toString();
    if (input.includes('Input')) stream.write('1\n');
    if (input.includes('Input')) stream.write('y\n');
    if (input.includes('Input')) stream.write(`${subdomain}\n`);
    if (input.includes('Input')) stream.write(`${domainnode}\n`);
    if (input.includes('Input')) stream.write('admin@gmail.com\n');
    console.log('STDOUT: ' + data);
  }

  function handleNodeCreationInput(data, stream, domainnode, ramvps) {
    stream.write('iniwannbroku\n');
    stream.write('4\n');
    stream.write('SGP\n');
    stream.write('Autonode WannFyy\n');
    stream.write(`${domainnode}\n`);
    stream.write(`${ramvps}\n`);
    stream.write('1\n');
    console.log('STDOUT: ' + data);
  }
});

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// panel
bot.command('panel', (Ifaa) => {
    const chatId = Ifaa.chat.id;
    const sender = Ifaa.from.username;
    const owner = '-'; // Ganti dengan ID pemilik bot 
    Ifaa.reply(`*Hi @${sender} 👋*
    
𝗖𝗔𝗥𝗔 𝗕𝗜𝗞𝗜𝗡 𝗣𝗔𝗡𝗘𝗟

𝗖𝗔𝗥𝗔 𝗔𝗗𝗗 𝗨𝗦𝗘𝗥 𝗣𝗔𝗡𝗘𝗟 :
𝗿𝗮𝗺 𝘂𝘀𝗲𝗿𝘀,𝗜𝗱

𝗰𝗼𝗻𝘁𝗼𝗵 : /𝟭𝗴𝗯 Ifaa,𝟭𝟯𝟰𝟰𝟱𝟱𝘅𝘅𝘅

𝗕𝘂𝘆 𝗣𝗿𝗲𝗺? 𝗕𝘂𝘆 𝗩𝗽𝘀? 𝗕𝘂𝘆 𝗔𝗱𝗺𝗶𝗻𝗣&𝗣𝘁 𝗣𝗮𝗻𝗲𝗹? 𝗕𝘂𝘆 𝗦𝗰? 𝗣𝘃 (@idstore74_pw x @idstore74pw)`)
})

bot.command('obf1', (Ifaa) => {
    const userId = Ifaa.from.id.toString();

    if (!isPremium(userId)) {
        return Ifaa.reply('❌ You do not have premium access.');
    }

    userSessions[userId] = { obfuscationType: 'obf1' };
    Ifaa.reply('📄 Please send your .js file for Obfuscation (Rename All Variable Var).');
});

// Command for obfuscation type obf2 (Hexadecimal Anti Dec)
bot.command('obf2', (Ifaa) => {
    const userId = Ifaa.from.id.toString();

    if (!isPremium(userId)) {
        return Ifaa.reply('❌ You do not have premium access.');
    }

    userSessions[userId] = { obfuscationType: 'obf2' };
    Ifaa.reply('📄 Please send your .js file for Obfuscation (Hexadecimal Anti Dec).');
});

// Command for obfuscation type obf3 (Random Deadcode)
bot.command('obf3', (Ifaa) => {
    const userId = Ifaa.from.id.toString();

    if (!isPremium(userId)) {
        return Ifaa.reply('❌ You do not have premium access.');
    }

    userSessions[userId] = { obfuscationType: 'obf3' };
    Ifaa.reply('📄 Please send your .js file for Obfuscation (Random Deadcode).');
});

// Command for obfuscation type obf4 (Return Obfuscation)
bot.command('obf4', (Ifaa) => {
    const userId = Ifaa.from.id.toString();

    if (!isPremium(userId)) {
        return Ifaa.reply('❌ You do not have premium access.');
    }

    userSessions[userId] = { obfuscationType: 'obf4' };
    Ifaa.reply('📄 Please send your .js file for Return Obfuscation.');
});

//mangled
bot.command('obf5', (Ifaa) => {
    const userId = Ifaa.from.id.toString();

    if (!isPremium(userId)) {
        return Ifaa.reply('❌ You do not have premium access.');
    }

    userSessions[userId] = { obfuscationType: 'obf5' };
    Ifaa.reply('📄 Please send your .js file for Mangled Obfuscation (Type 5).');
});

bot.command('obf6', (Ifaa) => {
    const userId = Ifaa.from.id.toString();

    if (!isPremium(userId)) {
        return Ifaa.reply('❌ You do not have premium access.');
    }

    userSessions[userId] = { obfuscationType: 'obf6' };
    Ifaa.reply('📄 Please send your .js file for Mangled Obfuscation (Type 6).');
});

bot.command('obf7', (Ifaa) => {
    const userId = Ifaa.from.id.toString();

    if (!isPremium(userId)) {
        return Ifaa.reply('❌ You do not have premium access.');
    }

    userSessions[userId] = { obfuscationType: 'obf7' };
    Ifaa.reply('📄 Please send your .js file for Mangled Obfuscation (Type 7).');
});

bot.command('obf8', (Ifaa) => {
    const userId = Ifaa.from.id.toString();

    if (!isPremium(userId)) {
        return Ifaa.reply('❌ You do not have premium access.');
    }

    userSessions[userId] = { obfuscationType: 'obf8' };
    Ifaa.reply('📄 Please send your .js file for Mangled Obfuscation (Type 8).');
});

bot.command('obf9', (Ifaa) => {
    const userId = Ifaa.from.id.toString();

    if (!isPremium(userId)) {
        return Ifaa.reply('❌ You do not have premium access.');
    }

    userSessions[userId] = { obfuscationType: 'obf9' };
    Ifaa.reply('📄 Please send your .js file for Mangled Obfuscation (Type 9).');
});
  
  // Check premium status
bot.command('status', (Ifaa) => {
    const userId = Ifaa.from.id.toString();

    if (isPremium(userId)) {
        const remainingDays = Math.ceil((premiumUsers[userId].premiumUntil - Date.now()) / (24 * 60 * 60 * 1000));
        Ifaa.reply(`📅 You have ${remainingDays} days of premium remaining.`);
    } else {
        Ifaa.reply('❌ You do not have premium access.');
    }
});

// Command to add premium (Owner only)
bot.command('addprem', (Ifaa) => {
    const args = Ifaa.message.text.split(' ').slice(1);
    const userId = args[0];
    const days = parseInt(args[1]);

    if (!isCreator(Ifaa.from.id)) {
        return Ifaa.reply('❌ You do not have permission to use this command.');
    }

    if (!premiumUsers[userId]) {
        premiumUsers[userId] = { premiumUntil: Date.now() + days * 24 * 60 * 60 * 1000 };
    } else {
        premiumUsers[userId].premiumUntil += days * 24 * 60 * 60 * 1000;
    }

    fs.writeFileSync(premiumUsersFile, JSON.stringify(premiumUsers));
    Ifaa.reply(`✅ User ${userId} has been granted ${days} days of premium.`);
});

// Reduce premium days function
function reducePremiumDays(userId) {
    if (premiumUsers[userId] && premiumUsers[userId].premiumUntil > Date.now()) {
        premiumUsers[userId].premiumUntil -= 24 * 60 * 60 * 1000; // Reduce by 1 day
        fs.writeFileSync(premiumUsersFile, JSON.stringify(premiumUsers));
    } else if (premiumUsers[userId]) {
        delete premiumUsers[userId]; // Remove user from premium list
        fs.writeFileSync(premiumUsersFile, JSON.stringify(premiumUsers));
    }
}

// Check if user is premium
function isPremium(userId) {
    return premiumUsers[userId] && premiumUsers[userId].premiumUntil > Date.now();
}

// Check if user is owner
function isCreator(userId) {
    return userId.toString() === OWNER_ID;
}

// Interval to reduce premium days
setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        for (const userId in premiumUsers) {
            reducePremiumDays(userId);
        }
    }
}, 60 * 60 * 1000); // Check every hour

bot.on('new_chat_members', async (Ifaa) => {
let d = new Date(new Date + 3600000)
			let locale = 'id'
			let week = d.toLocaleDateString(locale, { weekday: 'long' })
			let date = d.toLocaleDateString(locale, {
     		 day: 'numeric',
  		    month: 'long',
    		  year: 'numeric'
		    })
            const jamnyy = moment.tz("Asia/Jakarta").format('HH:mm:ss')
	var message = Ifaa.message
	var groupname = message.chat.title
	var groupmembers = await bot.telegram.getChatMembersCount(message.chat.id)
	const isCreator = OWNER[0].replace("https://t.me/", '') == Ifaa.update.message.from.username
	for (x of message.new_chat_members) {
		var full_name = tele.getUser(x).full_name
		console.log(chalk.whiteBright('├'), chalk.cyanBright('[  JOINS  ]'), chalk.whiteBright(full_name), chalk.greenBright('join in'), chalk.whiteBright(groupname))
		let txtwlcm = `𝙷𝚊𝚕𝚘 𝙺𝚊𝚔 ${full_name}

╭─❒ 「 User Info 」 
├ 📛 : ${full_name}
├ 🆔 : ${message.from.id}
├ 🌐 : ${message.from.language_code}
├ 🏅 : ${groupmembers} Members
├ 📆 : ${week}, ${date}
╰❒ ⏰ : ${jamnyy} Asia/Jakarta
Selamat Datang Di Grup ${groupname} 👋`
		await Ifaa.reply(txtwlcm, {
		parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: 'Join Grup', url: 'https://t.me/+7T2b_0r3E2MwMTY9'},
                        {text: 'Asupan Ch', url: 'https://t.me/+NYFGlTRuG_5iMTI1'}
                    ],
                    [
                        {text: 'Game Online', url: 'https://t.me/gamerandomhot'}
                        ]
                ]
            }
        });
    }
});
     

bot.on('left_chat_member', async (Ifaa) => {
	var message = Ifaa.message
	var groupname = message.chat.title
	var groupmembers = await bot.telegram.getChatMembersCount(message.chat.id)
	var full_name = tele.getUser(message.left_chat_member).full_name
	console.log(chalk.whiteBright('├'), chalk.cyanBright('[  LEAVE  ]'), chalk.whiteBright(full_name), chalk.greenBright('leave from'), chalk.whiteBright(groupname))
	let txtleft = `◪ Goodbye ${full_name}
Kasiann dikick admin lain wkwkwk, makanya jangan caper, toxic, promosi, link wkwkwk, jika mau dimasukin lagi ke grup ini, silahkan hubungi adminnya.
Kalau mau left izin dulu sesama mem/admin🥰-
Note : Jangan lupa bawa makanan yaa😘
Leave from group: ${groupname}`
	await Ifaa.reply(txtleft, {
	parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: 'Join Grup', url: 'https://t.me/+7T2b_0r3E2MwMTY9'},
                        {text: 'Asupan ch', url: 'https://t.me/+NYFGlTRuG_5iMTI1'}
                    ],
                    [
                        {text: 'Game Online', url: 'https://t.me/gamerandomhot'}
                        ]
                ]
            }
        }
    );
});

bot.command('cekid', (Ifaa) => {
    const chatId = Ifaa.chat.id;
    const sender = Ifaa.from.username;
    const id = Ifaa.from.id;
    const owner = '7954160048'; // Ganti dengan ID pemilik bot 
    const text12 = `ʜᴀɪ @${sender} 👋
    
👤 ᴅᴀʀɪ ${id}
  └🙋🏽 ᴋᴀᴍᴜ
  
 ɪᴅ ᴛᴇʟᴇɢʀᴀᴍ ᴋᴀᴍᴜ ᴀᴅᴀʟᴀʜ : ${id}
 ɴᴀᴍᴀ ᴀɴᴅᴀ ᴀᴅᴀʟᴀʜ : @${sender}
 
 ᴅᴇᴠᴇʟᴏᴘᴇʀ : Ifaa karismaa`;
    Ifaa.reply(text12)
    })

//=============== STREAMING MUSIK ==========\\
/*const musik = ['judul1', 'judul2', 'judul3'];

async function putarMusik(chatId) {
  const judul = musik[Math.floor(Math.random() * musik.length)];
  yt.search(judul, (err, hasil) => {
    if (err) return Ifaa.reply('Error menemukan lagu');
    const idVideo = hasil[0].id;
    const url = (`https://api.lolhuman.xyz/api/downloader/ytaudio?apikey=${apikey}&url=${musik}`);
    Ifaa.reply(`Memutar ${judul}`);

    ffmpeg(url)
      .audioBitrate(128)
      .format('mp3')
      .pipe(Ifaa.replyWithAudio(chatId)); // kita coba
  });
}

bot.command('play', (Ifaa) => {
  putarMusik((url));
});

bot.command('stop', (Ifaa) => {
  Ifaa.reply((url), 'Berhenti memutar musik');
  process.exit(0);
});*/
//=============== END STREAMING MUSIK ==========\\

// Handle document uploads for premium users
bot.on('document', async (Ifaa) => {
    const userId = Ifaa.from.id.toString();

    if (!isPremium(userId)) {
        return Ifaa.reply('❌ This feature is only available for premium users.');
    }

    const fileName = Ifaa.message.document.file_name;

    if (!fileName.endsWith('.js')) {
        return Ifaa.reply('❌ Please send a file with the .js extension.');
    }

    if (!userSessions[userId] || !userSessions[userId].obfuscationType) {
        return Ifaa.reply('❌ Please select an obfuscation type first using one of the commands.');
    }

    const obfuscationType = userSessions[userId].obfuscationType;

    // Reduce premium days
    reducePremiumDays(userId);

    await handleDocumentObfuscation(Ifaa, obfuscationType);
});

async function handleDocumentObfuscation(Ifaa, option) {
    const fileId = Ifaa.message.document.file_id;
    const loadingMessage = await Ifaa.reply('🚧 Preparing obfuscation...');

    try {
        const fileLink = await Ifaa.telegram.getFileLink(fileId);
        const code = await downloadFile(fileLink);

        await Ifaa.telegram.editMessageText(Ifaa.chat.id, loadingMessage.message_id, undefined, '🔄 Encrypting...');
        const obfuscatedCode = await obfuscateCode(code, option);

        await Ifaa.telegram.editMessageText(Ifaa.chat.id, loadingMessage.message_id, undefined, '🎉 Obfuscation complete! Sending file...');
        await Ifaa.replyWithDocument({ source: Buffer.from(obfuscatedCode), filename: 'obfuscated.js' }, {
            caption: `Tools Obf: ${option}\nOwner: Gesyaa x Rahman\nChannel: @cecancgroup\nBuy Premium @idstore74pw\nThis bot created and credits @idstore74pw`,
            parse_mode: 'Markdown'
        });

    } catch (error) {
        console.error('Error during obfuscation process:', error);
        await Ifaa.telegram.editMessageText(Ifaa.chat.id, loadingMessage.message_id, undefined, '❌ An error occurred during obfuscation.');
    }
}
 
async function downloadAndSaveMediaMessage(Ifaa, message, filename, attachExtension = true) {
let quoted = message.msg ? message.msg : message

        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
 
async function downloadFile(fileLink) {
    try {
        const response = await axios.get(fileLink);
        return response.data;
    } catch (error) {
        console.error('Error downloading the file:', error);
        throw new Error('Failed to download the file');
    }
}

    bot.on('message', async (Ifaa) => {
        require("./case")(Ifaa, bot)
    })

    bot.launch({
        dropPendingUpdates: true
    })

    bot.telegram.getMe().then((getme) => {
        console.table({
            "Bot Name": getme.first_name,
            "Username": "@" + getme.username,
            "ID": getme.id,
            "Link": `https://t.me/${getme.username}`,
            "Author": "https://t.me/idstore74_pw"
        })
    })
}
startIfaa()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
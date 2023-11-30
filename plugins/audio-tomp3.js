import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let media = await q.download?.()
    if (!media) throw '🇱🇰 Failed on ❤️ Queen Zyan║🇱🇰 Server'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '🇱🇰 Error ❤️ Queen Zyan║🇱🇰 Server'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3']
handler.tags = ['fun']
handler.command = /^to(mp3|a(udio)?)$/i

export default handler

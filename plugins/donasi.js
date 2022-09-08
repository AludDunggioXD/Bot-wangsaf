let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0895-3303-73634]
╰─「 Donasi • Pulsa 」
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

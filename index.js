const fs = require('fs')
const youtubedl = require('ytdl-core')
const readline = require('readline')

function makeid(length) {
  var result = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength))
  }
  return result
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Enter the video URL: ', async (url) => {
  console.log('Downloading video...')
  await youtubedl(url).pipe(fs.createWriteStream(`video-${makeid(4)}.mp4`))
  console.log('Video downloaded!')
  process.exit()
})

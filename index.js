const fs = require('fs')
const youtubedl = require('ytdl-core')
const config = require('./config.json')

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}




youtubedl(config.youtubeURL).pipe(fs.createWriteStream('jun-' + makeid(5) + '.mp4'));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "📎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello my name is  *DULLAH MD V6 * \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *DULLAH MD*';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/5a0a3058b3949a15b3501.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Hi my name is *DULLAH_ MD V6* \n\n '+' I'm a Multi-device Whatsapp bot '
      let d =' developed by *DULLAH MD*'
      let varmess=z+d
      var img='https://telegra.ph/file/5a0a3058b3949a15b3501.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 

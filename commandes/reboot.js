const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"💧"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner or DULLAH_MD");
  }

  const {exec}=require("child_process")

    repondre("DULLAH-MD V6 bot Restarting ⏳");

  exec("pm2 restart all");
  

  



})

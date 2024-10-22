const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Troy99:TroyDGamer99@cluster.agfzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Troy99:TroyDGamer99@cluster.agfzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347040327910";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347040327910,234xxxxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_48_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgODMsXG4gICAgICAgIDY1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4LFxuICAgICAgICAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDg5LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjU1LFxuICAgICAgICA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJQZjcxbUdqSmpJQjhFdjhQYlpKRUQvc1BqdHdaRS81eGlodU1WYkl6V0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0MDMyNzkxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEE4Q0JFMjI4Q0Q0N0REQzYzRTRBMTUyQThFMDA0MEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NjIyODg2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBCdUhuMGJyUk1hMEROS0RHY0g2a3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWRlMTQ5NjktZTdlMS00ODg4LThiYmItNTk5M2UxYzZkMDFjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgODcsXG4gICAgICAxMjgsXG4gICAgICA2LFxuICAgICAgMTQ3LFxuICAgICAgMjI1LFxuICAgICAgNjksXG4gICAgICA5NyxcbiAgICAgIDQ2LFxuICAgICAgNDMsXG4gICAgICAyMTUsXG4gICAgICA3NyxcbiAgICAgIDE3OCxcbiAgICAgIDEyNyxcbiAgICAgIDI5LFxuICAgICAgOTQsXG4gICAgICAyNTUsXG4gICAgICAxOTEsXG4gICAgICAyNDgsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgsXG4gICAgICAxMyxcbiAgICAgIDk2LFxuICAgICAgNSxcbiAgICAgIDIzOCxcbiAgICAgIDE2OSxcbiAgICAgIDU1LFxuICAgICAgODIsXG4gICAgICA0OSxcbiAgICAgIDI0LFxuICAgICAgMTk1LFxuICAgICAgMTE0LFxuICAgICAgMzcsXG4gICAgICAxNDMsXG4gICAgICAxOTYsXG4gICAgICAxODEsXG4gICAgICAyMzksXG4gICAgICAyMDcsXG4gICAgICAyNTEsXG4gICAgICA0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRVDJCTFRTMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MDMyNzkxMDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjYyMDMzMTkwNTg2MzU6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZkpscnNCRU5ubTM3Z0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlByUXV6ZjVCck1zRjBhdFhZTWZuaWRlc2o0WUNPSFd3dU91eUlHQ1hiazA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT2lmUVlvRWpnT1J6dURzT0ppOEhnbnRiYXJISUxJYjZzQ0ozQVZ6SEp5WjUxV2ptdWVPSzkwYmVoRWFRTDFKUlNEZnBadktSUVJJUHRUL2RXY1FaRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid1BWOTduWmUzRU9mdWpKSFJSVjNNZUgvUDdGa0NSWkJXOURrVTNKaytTZk9pSnRJMUZkbU1qUlAvQU9JR1I3WFZoSmxsTVpkUi84K2hXVFFzOUFvRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MDMyNzkxMDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk2MjI4NzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDSzZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNLNi5qc29uIjogIntcImtleURhdGFcIjpcIm9EbmVuVlp5UWpsRWlwYTE0blQyOEx6NVFDelptZjhxb1I1NWJHNkRJWUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzkyNTM3Mjg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "Troy" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "么・TRØY99 🎧🤍",
  packname: process.env.PACK_NAME || "么・TRØY99 🎧🤍",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "么・TRØY99 🎧🤍",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

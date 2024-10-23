const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Troy99:TroyDGamer99@cluster.agfzi.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Troy99:TroyDGamer99@cluster.agfzi.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234704xxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234704xxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347040327910,234704xxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_24_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDkzLFxuICAgICAgICAxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDYwLFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM3LFxuICAgICAgICA0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMixcbiAgICAgICAgMjMzLFxuICAgICAgICA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDUwLFxuICAgICAgICAzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MCxcbiAgICAgICAgNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyLFxuICAgICAgICA4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDMzLFxuICAgICAgICAyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA0LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDgwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImV0YnJySGhJS1RHRDZKYWpWUENSay8zMFNuNVUrRFpwb25rdjdxKzd0L2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjY5a0wyZWVtUmx5Qko5YURfemFKaGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODAyOTA1M2MtMjc2YS00MzM2LWJkYmItNWYxNDhhYzMzMDNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMTY3LFxuICAgICAgMTA3LFxuICAgICAgMjQ2LFxuICAgICAgMTA5LFxuICAgICAgMjI1LFxuICAgICAgMjAwLFxuICAgICAgMTQzLFxuICAgICAgNjQsXG4gICAgICA4OCxcbiAgICAgIDMyLFxuICAgICAgODMsXG4gICAgICAxMjQsXG4gICAgICAxNDIsXG4gICAgICAyMzIsXG4gICAgICAxMDYsXG4gICAgICA0OSxcbiAgICAgIDY0LFxuICAgICAgMTksXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAxOTksXG4gICAgICAyNTAsXG4gICAgICAxNjksXG4gICAgICAyMTIsXG4gICAgICAxNjMsXG4gICAgICAzNCxcbiAgICAgIDE1MixcbiAgICAgIDIzOCxcbiAgICAgIDE2NSxcbiAgICAgIDEyNyxcbiAgICAgIDYsXG4gICAgICAxLFxuICAgICAgMTg0LFxuICAgICAgNjEsXG4gICAgICAxOCxcbiAgICAgIDExNyxcbiAgICAgIDI1NSxcbiAgICAgIDI0MixcbiAgICAgIDE2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0M1FKRU03TlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MDMyNzkxMDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjYyMDMzMTkwNTg2MzU6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNakpscnNCRUwrRTRiZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlByUXV6ZjVCck1zRjBhdFhZTWZuaWRlc2o0WUNPSFd3dU91eUlHQ1hiazA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTjh0Wkk3TEY5Qm8yQjZ5cXNLVnhSdnV1VFVXQjRhNHBUZmxNM05KTVJWa1RpT084bUZ5bXFBMUIyZWt6akh6aFRORUlUdnFGUnRjTk14R013akNJQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK0MyWVRZb3NtQTZlelJiMkZXZXVDcU4rdVZMNWxGQnFOcVZQQlhIK2RVbnlvb25QdnVsR2pOLytZaWVPMXMwcFlVWHhLNFpvSWZZa01Pb0NOa2g3Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MDMyNzkxMDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk2NDMwNzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDSzZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNLNi5qc29uIjogIntcImtleURhdGFcIjpcIm9EbmVuVlp5UWpsRWlwYTE0blQyOEx6NVFDelptZjhxb1I1NWJHNkRJWUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzkyNTM3Mjg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="


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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
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

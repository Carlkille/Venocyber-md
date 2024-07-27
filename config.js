//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "48699558907";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0xJVjl2YVBYa3dtNkxFWWJFeHozTVRoOWFLMW9JSlFXUEtOWVhSaGtWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzJYSmNta2JzZkR4RU5UbWg4d09MMm8rVlhTNnBVVE5iSlZldWg3SThHdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTjVIcFhPcHp2NkZORmg2QXlROHJyaGtSRFRsM01hcTZxdjNCQTRnNFVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1NXo3bGYyUWFrcDNHTWdhZUVraUpTWkhOWWt1QlR0N1ZaZXJudlpmSVYwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdETUxqS3Ryd1cweDkrdXQwU0RQaWJxbTQydU5VRENuNFUwYzNRVnlGbjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5HMkh5dU9TVE5UTnJIVjRrWVN0eklLaDlOVDUwYTBhV3VldlpySTF2VVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE9RVERoNGVHMndVTnljanpLL21ydkVBVWtndXdnOFp0ZDBKRTBVaWVrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlROelp4dzlXR1Z4OVZJOGovajFxZGU3dWxLWGlrU3Z6S0lxeWtBMFZXWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVyKzQ3S3FUb2Z5aXAvN3lPVEZmVzd1Q3Y2aGlpTHg4dE50cGlZR1BZRmpLcUxxaWFNd1psa3E1Vzlrd2g3MEw3dlpMNUpSK1JHRWduWGZnNTZSWWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiJUdUd1Y0dSdCtNNG95NmlsajB3VmRRZ2xaelV2c3FvN1B2TU9KK3p6bFhRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjQ4Njk5NTU4OTA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk0QjEwNzRGNzZEMUI4OUQwOTkwMDI0NEU1MzU4RjYzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIwNDM3NDZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQ4Njk5NTU4OTA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdFNEI3Mzk5OTFGREJCMDc0NEYwMEEwQzM5MjlEQjRCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIwNDM3NDZ9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJjYTk4Y0VpU0lHYk9TRlNDMFp6cWciLCJwaG9uZUlkIjoiYTc1NjhkYjUtMzA0Yy00N2FkLWE4MzQtMzlmMmQ2YjQxNDE4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldhWGpCbmYvcUx0T2taVmNNMDVhSm03cE5UST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2cFFLR0oyTDBTQnJKRjh5UjBRWDZlcG1xcFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkJSMUZRM1EiLCJtZSI6eyJpZCI6IjQ4Njk5NTU4OTA3OjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pPRWk4c0VFTStha2JVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IncrRlNJODNLK2VvYVdsVjYzbUZRejk2L2dTajEzdHptc1JDTkd5dE1iUVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJtRWhyb2F2TGIwWXUvSjUxOFkzTlM2azltTWxCOXRoc2lEbzNxd1pQSWQzS0ZkUW1aamk4S0NXS0F2WSt4cENiMzRUNitURENvTzdlNVhwRlRvTUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0Z2hPWDFkMWV4cDVFYUJra04wdWxIZHZUV1ZYazRNKyt5eG55TVpzS05vdisyeHVvZy9ZeXhzamZLUnlMNndWQ090LzI0Nk5lbGx3bHI0c0ROVWxpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQ4Njk5NTU4OTA3OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY1BoVWlQTnl2bnFHbHBWZXQ1aFVNL2V2NEVvOWQ3YzVyRVFqUnNyVEcwRyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjA0Mzc0MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFENnYifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

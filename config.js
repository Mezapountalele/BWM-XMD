const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUWW+rOBj9L35NelkTIFKlCYSQjSRkJ6OrkQMGXMAQY0hIlf8+Im3VPsytOjxZYI6Pz/K9ApLhAk1RDXqvIKe4ggw1S1bnCPSAXgYBoqANfMgg6IHC8qxoeVjoUwlW9lg7LRXtvMILPVp3DpJb3ZakUpkpdw/2M7i3QV6eEux9A1jnF21ykUjmQS5SR0Nx76XFxZkfzqPOZna1jivmznZeoJLxM7g3iBBTTEIzj1CKKEymqF5CTH9GX7RggmF6USq9fgmiLaryIJ6/YKXllcftnnS7fF5gFy4Ozs/o5/Mz3JQ4Nfz9VZSplgYr1Bpc1YBsX4y53B3fAi3W13Wy2b7RL3BIkD/2EWGY1T/W/WKrs7mfopHmGM5gvFjM1BafTNltPlydlc5wcz5ujDA92SP5Z8S5kJ8kzNF8/+Ir2nYRTHRuL05xNXOOZ66ONzc/vlaJu9CLr8SX9CMr8f/R3ZrfmDCudBxp5UskU82MhTBTnZzRo+rvzYM5iUwydC3zh7qf5iO9okFoLXXtul5mc7Se2PzEdbdC5IiDk2JpNJVeapqEn/QhK+l3LJPcceJxIitkehGMfJMZ28PppFO6XW1glZkzuqd1xIyrmnCCeJNbpZLD23TR5TZV7s4JjKhiH1NHvE1Dw3WRIbDrIHx+3ChG9dgHPeHeBhSFuGAUMpyR5p3IS20A/WqNPIrYQ16wcHfDmvpTuG5Vx0hxyo6pWINgU20Pizin7m7MF4ad6qOt+QzaIKeZh4oC+SNcsIzWNioKGKIC9P7+3QYEXdmbcc1xktAGAaYF25IyTzLof7j68RF6XlYStq6JZzQLREGP/3yNGMMkLBodSwKpF+EKGRFkBegFMCnQvQ18VGEPNXiAHdUhMuyBE5c0kXdZzP+zcp2GcpSRty0a39VQV+OfIBSDJ7nDe0+ah6SnwFdRVxShDE8eaAP83pnmnz9auIsLOcDLHelXnaJuKZ3MmtF0tti1vIcNb9ojinzQY7REbXCCXlzmmyxG5Btc9+J7qBVKW4sKA0GPtLKrRVyUGUr4BffNU9B7/ZxTRuY3eLa0Gzj97gG0QfqIIG5u3uE1SVI0nleUnvZX8evSyAjz/BdBrEF9l7zZ7yMGcVKAHjBmA9jxVNOcVlE0ky2rPw77RtgHnxZ9ZP0tSwbHiWe/Y4eHg2LLrWNGdOPFGdz2SrxIRJO7DI0sqSZ1IsrP/wECesBJJvPzfKvrhujYPjIKaxBBMlzLVZSPeb6UrviUyxGLT0tu3bqsBHvCa+uhvZyZ2grOtqspOh04OHVt2eyiJN7300hvivERla+HUancZc50x5GuEZ4lfzqSl+uMGtIL34cbRgaa5JyuGhdUx/S8n/NMn/VNPMw39gAdohtexWS4vVrnJGMqiruJzh/dfv+thY8pkLxPX/zox+t7sAKMHsOMwMag7635mnD+3v6C8D4c/5Ai3ak47UzQZjwUWrfFMoWTi5PxfVUoO4Pcj5aq7pwnp9rL/RLc77/bIE8gCzKagh6AxKcZ9kEbJLBg/c+SbnCKCgbTHPQEReYVQRa6ahukdT/P1wyyj26DfvPYMxXc/wWi83769wcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "kelly",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "31738351",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});


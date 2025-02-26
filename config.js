const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXY+qSBT8L/2qc20UFE0mWQRHBVEUHNDNzaaFBlo+bRoUJ/73DTqTmYe9k9m3Tn/Uqa6qc95AmpECa7gGozeQU1Ihhpslq3MMRmBc+j6moA08xBAYAVen/YWG5vxM5vcbuFOoutkasWntFp5RZsZOEUyLTax9L3sGtzbIy0NM3G8AnZddXmdSK+gfLL1U4oohr3ZzE3IBkueJIlSsg5ADYSI+g1uDiAglaTDJQ5xgimIN1wYi9Gf0iVFcU2OaVka1xMhTpuqhvxrb8dx2zlODr6/8enDhMz/tRT+jr1He13cJ23NGetzW6WpjCrIZydtss+LGy+OFGpVVoFng7B70CxKk2Jt7OGWE1T/XfVVKKukYUsLzYn89hzNjGqNe1HFqZzCrAntsi3s1HCex+DPie2XgR7GljBerloGvJyv28vhaR7kcaugCeebxnB2pL1mX/0rcoB9Zif6P7qXaWc+giNLFvEh6q63pXzijw5zJltd8Kq/gOV7N1tpKTIOf0VcvvWTq7dn6qqryVtrymwwqXWsijtGy6MES1p1KVKwkgtEnfcRK+h1LDc+VrnnipSJIspj1B+y0nPV27nZT8Vq5mpWbhR2lFwa1KBhPEvO4ntbmmFL70FLK+WuiQt6su6ZohTlSp1P5kG0YkZ7vP4pwPffAiLu1AcUBKRhFjGRps8d32wB5lYlditldXdARX5QoZLUDT4ezo2oSkiRL1gQzRC0eqtP+9aobdgnhcfcM2iCnmYuLAnszUrCM1jouChTgAoz+/t0GKb6wh29NtR7XBj6hBdumZR5nyPsw9eMQuW5WpsysU1duFpiCEfzcxoyRNCgaGcsUUTckFZZDxAow8lFc4FsbeLgiLm7wQDCR+OU0Dte+NiDZePtPhvj9uqEcZunjiif0cR963SdRgMIT70LuCQm++IRchDzke8OugEAbkPeWad780cFDdfKPGF/yg3A5rVGQbSHtdRPqLPW7Cw/pMcUeGDFa4jY4IDcqcyuLcPoNrm6TV8wtjtzc0zwhFiZh1loPXl9Cb/4F92EpGL19jik58xo8fSkMrf5GBG2Q3BNImp8LcNjrDYYQDgaj7l/Fr3MjI8rzXylmDeq75M19DzNE4gKMgKxd95kOJxMtkTsHOJ1K80CSAwl8WvQR9UeWFh1LkM/VXLG13fXgvFo1jxVFv3BHst+H9vWVUDz0kGxN3ef/AAEjwA+MpXY61uRUnsSjydehIk1sqVUXNNHXcBXO+nSykTn3XM7UranLXBiTCy2Ok9bFXBjddNwSNy2nZXFqFurrTJHjlnJ+bqo9ovK12DCtbdphehLmQ2FsT4ozVryzHLcI52tJeZFh3df11+ULt5y2lvMA8oU51OOjEJGXjeAMOnwkuKKbc2pNSgnbgrORSfBowvsQiN+HL7n3x9t7sHyC77MsRY1B31vzNeHw1v6C8D4b/5CisdmBrXWxqCWOJHqX47ZiOQvOV93b8Ym9ey243alXOXYQXVJwu/1ugzxGzM9oAkYApR7NiAfaIEYFkz6b1CIJLhhKcjDiBjwUxEGPE2//AlVUCf7ZBwAA',
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


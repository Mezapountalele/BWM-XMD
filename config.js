const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID ||BWM-XMD;;;H4sIAAAAAAAAA5WV2Y6rRhCG36VvxxOz2mBppLAZL3jBgLcoF21ooG12Gmw48rtH2DOak+SckwlXCJq//qr6qvgGkhSXaI4aMPoGsgLXkKDuljQZAiMgV76PCtADHiQQjEC+tLVyaYZhdD7Fh1vYyivc9KnbIrMivrEbJR76a8mrqZh6A/ceyKpThN1fCCZcnUOnSUIuQQLhuWSg9rPJ2rx6p0CsmeS0WAhcDpf+1n0D904R4gIngZaFKEYFjOaoWUNcfM1+oyLoW2MmD1W6HBpEwPwRHRQi6H2j7wn4GBMu9yzK26Vfs8+/tNPouN/OslXciFdttZ3HyZmTJhcXRgs8NYv0xV/Xqr2/PO2XOEiQN/VQQjBpvlx3LDPUOTwYW40WDWpd8zXTbOS1RQw9W0R2vpzVZtbGY2oy/ZrxOSz6uf2yETSZdlr20Ni3aFDTRlAvGSN3lkVMail3xuHfja+LD1Yu/6fusdJeaX8toGZ3Mfbz5SpTHJ4ixVUen4tMJ3U4iagxTyjm+jX7pXk0WylV9Wh/8c/D2wzVRrUtXuhNLJ/y2JIo4Uo5IVIC59M+JFXxK5fM2D1Fk6latAt4yZN0odNHuNOieSnLld1KkrO5GgcT6a2R64fa6K+9TSLLCbxgbb4JrowZj2s33a0MjtdKdjjW7JNqvj0yuqBm6oERfe+BAgW4JAUkOE26ZwzN9QD0agu5BSKP8gJjbihOLkg8cWRRiyKmnqJELp1NrZu5VsqS7Z25PBj6t+kb6IGsSF1Ulsib4JKkRbNAZQkDVILRH49OdUkXKE4JmmGvw5YSOYGjBvSA+7387RpCUsIs+y1BBPSAX6TxAoERKSrUA4/ziqiwIsWIA4GWKJZTx+qQH3CyygiMIA7Hgy7D+BnTxjEqCYwzMKKHHM0OhjRL3f/sgQTdyBOfLmmW7gEfFyVxkiqLUuh9sPXxErpuWiXEahJX6W5QAUbfPUaE4CQou8SqBBZuiGukdHmAkQ+jEt17wEM1dlGnB9jsoLqnM2eukZmlZ5quHSWQusKFafJ+hHLRcDDkX5FIua8cf2JeBQHCV5rikC+INHJ5FnTleE5u981PQRKcozyO2Gup3Ny9VQTKbNiXt05oteYDhicBqEDeR5VP0L1UmZ1eUPIL3TCeiKcmWojxnnBQsGqe1PPWsje58J3ukyww+va5LZXU6/QGC421JEEDXbe6OP+EYTT8Nw4J7M6CU4RqPy0i7KMu1HsfOhEPEYijssNkzU7w0VS0RbsqDE7XpWkgPQv90bePMXxiLqu07myhZ3vLl7TRvHDSWvyt3rjZ6sVdSXYaXebierFTwsPbD0TACKRVeq5mHuZ36W4WqpPZTg8T8+pVlRz1XccsC8xc94ooFzJGk3m/EuupvKUyVvESEbYZd7at2+62p4b7mzeYc8MhS9TgrYv25Of7YJAmi2t741XHp8pd/9Y3j8gPDRbpAwdG+vpsqr7Ay6lRH/29Oz7VW/zijmntOLP3SnlUZMtb94Vtous+njN2sOQ4RwqeC+KxoKL3HwN+H90nbT5Gjz373on/6Ncn9tS9953C+97+CVqyaYqbaLxLHNb280U4OWwEqnJP1H5u14kaaIPZUantdhykO3Dv5jmLIPHTIu62cXyCoAciWBLpc2x/sAkYsQfiRsoyi0DyMe1AelzLPrj/BVDdiT6PCAAA
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
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
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
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


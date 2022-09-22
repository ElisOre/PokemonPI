//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { Type } = require('./src/db');
const axios = require('axios');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

async function createTypes() {
  const typeApi = await axios.get('https://pokeapi.co/api/v2/type');
  const typeData = typeApi.data;
  const types = typeData.results.map(el => {
    const obj = {
      id: el.id,
      name: el.name
    }
    return obj;
  });

  await Type.bulkCreate(types);
};

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  await createTypes();
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});

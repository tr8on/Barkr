const {
  db
} = require('../Models/models');

const main = async () => {
  await db.sync({
    force: true
  });
  process.exit()
}

main();

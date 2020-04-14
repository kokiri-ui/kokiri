function random() {
  return Math.floor(Math.random() * 1000) + Date.now() + Math.floor(Math.random() * 1000);
}

const randomLocalIdent = (random() + random()).toString(32);

module.exports = {
  randomLocalIdent,
};

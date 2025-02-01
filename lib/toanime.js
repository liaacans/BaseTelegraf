const axios = require("axios")

async function jadianime(url) {
  try {
    const { data } = await axios.post("https://tools.revesery.com/image-anime/convert.php", new URLSearchParams(Object.entries({
      "image-url": url
    })));
    return Buffer.from(data.image.split(",")[1], "base64");
  } catch (error) {
    console.error(error);
    throw 'Error in jadianime function';
  }
}

module.exports = { jadianime }
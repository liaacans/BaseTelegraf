const axios = require('axios');

function generateRandomID(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let randomID = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomID += characters.charAt(randomIndex);
  }
  return randomID;
}

/**
  * Scraper By QanyPaw
  * Forbidden to sell and delete my wm, respect the creator
*/


const api = axios.create({
  baseURL: 'https://search.lepton.run/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
  * Scraper By QanyPaw
  * Forbidden to sell and delete my wm, respect the creator
*/


async function leptonAi(query) {
  try {
    const rid = generateRandomID(10);
    const postData = { query, rid };
    const response = await api.post('query', postData);
    
    const llmResponseRegex = /__LLM_RESPONSE__([\s\S]*?)__RELATED_QUESTIONS__/;
    const llmResponseMatch = response.data.match(llmResponseRegex);

    if (llmResponseMatch && llmResponseMatch[1]) {
      let llmResponse = llmResponseMatch[1].trim();
      llmResponse = llmResponse.replace(/__LLM_RESPONSE__|__RELATED_QUESTIONS__/g, '').trim();
      return llmResponse;
    } else {
      throw new Error("No LLM response found.");
    }
  } catch (error) {
    throw new Error('Error fetching LLM response: ' + error.message);
  }
}

module.exports = { leptonAi }
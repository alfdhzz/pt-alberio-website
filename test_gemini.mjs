import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI('AIzaSyDLkjFU_wiOq3cote8HlHZoWrlii0oEtlE');
const model = genAI.getGenerativeModel({ 
  model: 'gemini-1.5-flash',
  systemInstruction: 'You are a helpful assistant.'
});
const chat = model.startChat({
  history: [
    {
      role: 'user',
      parts: [{ text: 'Halo' }]
    },
    {
      role: 'model',
      parts: [{ text: 'Halo! Ada yang bisa dibantu?' }]
    }
  ]
});

chat.sendMessage('Testing 123').then(res => {
  console.log('SUCCESS:', res.response.text());
}).catch(err => {
  console.error('ERROR:', err);
});

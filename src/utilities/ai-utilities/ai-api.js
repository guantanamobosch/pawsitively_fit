export async function generateAssessment(selectedPet, symptoms) {
  const symptomList = symptoms.join(', ');
  const prompt = `Assessing ${selectedPet.name}'s situation...\n\n` +
    `Pet information:\n` +
    `- Breed: ${selectedPet.breed}\n` +
    `- Age: ${selectedPet.age}\n` +
    `- Symptoms: ${symptomList}\n\n`;

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 250, // Adjust the value as needed
    temperature: 0.7, // Adjust the value as needed
  });

  console.log(response);

  return response;
}
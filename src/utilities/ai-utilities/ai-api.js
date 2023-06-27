export async function generateAssessment(selectedPet, symptoms) {
  const prompt = `Assessing ${selectedPet.name}'s situation...\n\n`
  + `Pet information:\n`
  + `- Breed: ${selectedPet.breed}\n`
  + `- Age: ${selectedPet.age}\n`
  + `- Symptoms: ${symptoms.join(', ')}\n\n`
  + `Please provide an assessment and possible conditions that could be causing these symptoms.`;

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 7,
    temperature: 0,
  });

  console.log(response)

  return response;
}
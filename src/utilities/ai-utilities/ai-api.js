export async function generateAssessment(
  selectedPet,
  symptoms,
  symptomDurations
) {

    function accountForSymptoms() {
    let symptomText = '';
    for (let i = 0; i < symptoms.length; i++) {
      symptomText += `${symptoms[i]} for ${symptomDurations[i]}`;
      if (i !== symptoms.length - 1) {
        symptomText += ', ';
      }
    }
    return symptomText;
  }

  const symptomList = accountForSymptoms();

  const prompt = `My dog ${selectedPet.name} is ${selectedPet.age} years old. It is a ${selectedPet.breed}. It has been experiencing the following symptoms: ${symptomList}. Can you list 3 possible conditions that may be causing these symptoms? (Limit the descriptions of each condition to 2 sentences maximum.)\n\nFollow the list of 3 possible solutions with a 2-sentence summary why ${selectedPet.name} is experiencing these symptoms.\n\nDon’t include any medical disclaimers before or after listing the conditions. I understand that you’re not a veterinarian and that it’s essential I contact a veterinarian for proper diagnosis and treatment.\n`

  const { Configuration, OpenAIApi } = require('openai')
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
  })
  const openai = new OpenAIApi(configuration)
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 250, // Adjust the value as needed
    temperature: 0.7, // Adjust the value as needed
  })

  console.log(prompt)
  console.log(response)

  return response
}

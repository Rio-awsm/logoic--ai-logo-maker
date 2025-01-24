const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

//   async function run() {
export const AIDesignIdea = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Based on Logo of type Modern Mascot Logos Generate a text prompt to create Logo for Logo title/Brand name : Indian Spices with decription: A indian restaurent chain and refering to prompt: A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design—such as small decorative touches or natural accents—enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character.. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with ideas field\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "ideas": [\n    "Spice Genie with Curry Pot",\n    "Chef Elephant with Chili Pepper",\n    "Turbaned Tiger Holding Biryani",\n    "Smiling Peacock Serving Thali",\n    "Friendly Indian Cook Mascot"\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

export const AILogoPrompt = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a text prompt to create Logo for Logo Title/Brand name : restaurant,with description: indian spices, with Color combination of Sunset Warmth, also include the Curry Bowl 3D Logo and include App Logo design idea and Referring to this Logo Prompt:Create a vibrant and playful 3D logo for an app. The design should feature bold, colorful text with a glossy finish. Include an icon relevant to the apps theme above the text and a background that complements the concept, such as a bright outdoor scene with natural elements like green grass, a blue sky, and fluffy white clouds. Use a rounded square frame with a yellow border and subtle shadows for a polished and inviting look  Give me result in JSON portal with prompt field only\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "prompt": "Create a logo for a restaurant named \'[Restaurant Name - Placeholder]\', specializing in Indian spices. The logo should evoke the warmth of a sunset, using a color palette of warm oranges, yellows, and reds. Incorporate a 3D Curry Bowl as a prominent element of the logo. Also, provide an App Logo design idea inspired by the following: Create a vibrant and playful 3D logo for an app. The design should feature bold, colorful text with a glossy finish, and include an icon related to Indian spices above the text. The app logo\'s background should be a bright outdoor scene with natural elements like green grass, a blue sky, and fluffy white clouds. The app logo should be contained within a rounded square frame with a yellow border and subtle shadows for a polished and inviting look. The overall style of the restaurant logo should be modern and sophisticated, while the app logo should be more playful and inviting."\n}\n```\n',
        },
      ],
    },
  ],
});

//     const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//     console.log(result.response.text());
//   }

//   run();

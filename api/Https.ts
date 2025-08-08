import { GoogleGenAI } from "@google/genai";
import { ContentType, MediaType } from "./TMDB";

const genAI = new GoogleGenAI({ apiKey: `${process.env.GEMINI_API_KEY}` });

function cleanText(input: string): string {
  let cleanedText = input.replace(/\s+/g, "");
  cleanedText = cleanedText.replace(/```json/g, "").replace(/```/g, "");
  return cleanedText;
}

async function fetchGemini(type: ContentType, module: string, input: string) {
  let prompt: string;
  const promptReturnType: string =
    "Return maximum 5 results in JSON format. In the JSON document each content should contain 'imdb_id' field. Make sure the IDs from imdb.com are correct.";

  // Determine content type
  const contentType = type === ContentType.TV ? "tv shows" : "movie";

  // Construct prompt based on module
  switch (module) {
    case "genre":
      prompt = `Suggest ${contentType} type of ${input}. ${promptReturnType}`;
      break;
    case "multiple input":
      prompt = `Suggest ${contentType} familiar to ${input}. Do not suggest ${input} again. ${promptReturnType}`;
      break;
    default:
      prompt = `Suggest ${contentType} familiar with ${input}. Do not suggest ${input} again. ${promptReturnType}`;
      break;
  }

  try {
    const result = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return JSON.parse(cleanText(result.text ?? ""));
  } catch (error) {
    alert("The problem is on our side! Please try again.");
    return null;
  }
}

async function fetchSingleInputSuggestion(req, res) {
  interface RequestBody {
    type: string;
    input: string;
  }
  const { type, input }: RequestBody = req.body;
  let prompt: string;
  const promptReturnType: string =
    "Return maximum 5 results in JSON format. In the JSON document each content should contain 'imdb_id' field. Make sure the IDs from imdb.com are correct.";
  const contentType = type === MediaType.TV ? "tv shows" : "movie";
  prompt = `Suggest ${contentType} familiar with ${input}. Do not suggest ${input} again. ${promptReturnType}`;

  try {
    const result = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    const cleanedText = cleanText(result.text ?? "");
    const parsedResult = JSON.parse(cleanedText);
    res.status(200).json(parsedResult);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function fetchMultipleInputSuggestion(
  type: ContentType,
  input: string,
  input2: string
) {
  let prompt: string;
  const contentType = type === ContentType.TV ? "tv shows" : "movie";
  const promptReturnType: string =
    "Return maximum 5 results in JSON format. In the JSON document each content should contain 'imdb_id' field. Make sure the IDs from imdb.com are correct.";
  prompt = `Suggest ${contentType} familiar with ${input}. Do not suggest ${input} and ${input2} again. ${promptReturnType}`;

  try {
    const result = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return JSON.parse(cleanText(result.text ?? ""));
  } catch (error) {
    alert("The problem is on our side! Please try again.");
    return null;
  }
}

//validate
function isValidJsonStructure(data: any): boolean {
  return Array.isArray(data) && data.every((item) => item.imdb_id);
}

export default {
  fetchGemini,
  fetchSingleInputSuggestion,
  fetchMultipleInputSuggestion,
  isValidJsonStructure,
};

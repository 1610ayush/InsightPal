import dotenv from "dotenv"
dotenv.config()
export const tagGenerationQuery = async(data) => {
    const response = await fetch(
        process.env.TAG_GENERATION_URL,
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify(data), 
        }
    );
    const result = await response.json();
    return result;
}



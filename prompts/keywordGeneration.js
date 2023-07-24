import dotenv from "dotenv"
dotenv.config()
export const keywordQuery = async(data) => {
    const response = await fetch(
        process.env.KEYWORD_GENERATION_URL,
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






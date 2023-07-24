import dotenv from "dotenv"
dotenv.config()
export const sentimentQuery = async(data) => {
    const response = await fetch(
        process.env.SENTIMENT_ANALYSIS_URL,
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
import dotenv from "dotenv"
dotenv.config()
export const summaryQuery = async(data) => {
    const response = await fetch(
        process.env.TEXT_SUMMARISATION_URL,
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



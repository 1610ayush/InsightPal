export const explanationQuery = async(data) => {
    const response = await fetch(
        "http://ec2-3-91-152-186.compute-1.amazonaws.com:3000/api/v1/prediction/a91453f1-c678-4369-b5c8-08050a305690",
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



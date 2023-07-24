export const sentimentQuery = async(data) => {
    const response = await fetch(
        "http://ec2-3-91-152-186.compute-1.amazonaws.com:3000/api/v1/prediction/9e1e4305-f08d-42cc-a7e9-d6b0fe7ba0b0",
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
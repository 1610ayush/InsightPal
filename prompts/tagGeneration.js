export const tagGenerationQuery = async(data) => {
    const response = await fetch(
        "http://ec2-3-91-152-186.compute-1.amazonaws.com:3000/api/v1/prediction/c433d57d-f9a9-4ddd-8ea6-2db1b4141e28",
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



export const keywordQuery = async(data) => {
    const response = await fetch(
        "http://ec2-3-91-152-186.compute-1.amazonaws.com:3000/api/v1/prediction/37810bc8-9d68-4828-bcd2-0ca12db4ad00",
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






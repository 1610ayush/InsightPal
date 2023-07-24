export const summaryQuery = async(data) => {
    const response = await fetch(
        "http://ec2-3-91-152-186.compute-1.amazonaws.com:3000/api/v1/prediction/6c0d41dd-39d9-477b-9690-e39eb1fe9b90",
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



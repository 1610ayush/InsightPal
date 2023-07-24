# Micro SASS - Sentiment Analysis and Summarization System

Micro SASS is a powerful and scalable Sentiment Analysis and Summarization System designed to process feedback messages from a Slack channel. The system leverages Node.js, Express, MongoDB Atlas, Langchain flows, and is hosted on both an EC2 instance and Fly.io. It allows businesses to extract valuable insights from customer feedback, perform sentiment analysis, generate summaries, and categorize feedback through keyword and tag generation.

## Features

- **Slack Integration:** Users can join the Slack channel and send feedback messages.

- **Sentiment Analysis:** Determines the overall sentiment (positive, negative, neutral) of each feedback message.

- **Text Summarization:** Generates concise summaries of the feedback messages without losing the essence of the content.

- **Keywords and Tags Generation:** Extracts relevant keywords and tags for efficient categorization and organization.

- **Text Explanation using Langchain:** Provides detailed explanations and context for the sentiment analysis and summarization results using Langchain flows.

- **Real-time Insights:** Process feedback messages in real-time to provide timely insights and responses.

## How to Use

1. **Join the Slack Channel:** Visit our Slack workspace and click on "Join Slack" to become a member of the feedback channel.

2. **Send Feedback:** Once you are a member, navigate to the feedback channel and send your feedback messages.

3. **Data Processing:** The Micro SASS backend will automatically fetch and process the incoming feedback data using Langchain flows for sentiment analysis, summarization, and keyword generation.

4. **UI Reflection:** The processed results will be reflected on the UI, where you can view the sentiment analysis, summaries, and generated tags.

## Demo

Check out the live demo of Micro SASS: [Micro SASS Live Demo](https://slack-sass.fly.dev/)

## Architecture

The Micro SASS system follows a modern and scalable architecture:

- Backend: Node.js and Express provide the foundation for the backend, handling incoming requests and processing feedback data.

- Database: MongoDB Atlas is used as the cloud-based database for efficient storage and retrieval of feedback messages.

- Language Processing: Langchain flows are integrated into the system to perform sentiment analysis, summarization, and other advanced text processing tasks.

- Deployment: Langchain flows are deployed on your EC2 instance, providing a scalable and dedicated environment for complex processing tasks.

- Hosting: The Micro SASS app is deployed on Fly.io, allowing for easy scaling, load balancing, and efficient handling of incoming requests.

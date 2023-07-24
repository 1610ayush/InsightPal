import dotenv from "dotenv"
dotenv.config()
import express from "express"
import bodyParser from "body-parser";
import path from "path";
import { sentimentQuery } from "./prompts/sentimentAnalysis.js";
import { keywordQuery } from "./prompts/keywordGeneration.js";
import { summaryQuery } from "./prompts/textSummary.js";
import { explanationQuery } from "./prompts/textExplanation.js";
import { tagGenerationQuery } from "./prompts/tagGeneration.js";
import { FeedbackModel } from "./db/feedbackModel.js";
import connectToMongoDB from "./db/db.js";
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let latestMessageTimestamp = 0;

// Serve the static files (including the HTML file)
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, "public")));

app.post('/slack/events', async (req, res) => {
  try {
    const { challenge, event } = req.body;

    if (challenge) {
      console.log('Received a verification challenge:', challenge);

      res.status(200).json({ challenge });
    } else if (event && event.type === 'message' && event.subtype !== 'bot_message') {
       // Check if the incoming event has a greater timestamp than the latest message
       if (event.event_ts > latestMessageTimestamp) {
        latestMessageTimestamp = event.event_ts;
        const feedback = event.text;
        console.log('Received new feedback:', feedback);

        const newFeedback = {
          feedbackText: feedback,
          sentiment: "",
          keywords: "",
          summary: "",
          explanation: "",
          tags: "",
        };

        await sentimentQuery({"question": feedback}).then((response1) => {
          console.log(response1);
          newFeedback.sentiment = response1;
        });
        
        await keywordQuery({"question": feedback}).then((response2) => {
          console.log(response2);
          newFeedback.keywords = response2;
        });
        
        await summaryQuery({"question": feedback}).then((response3) => {
          console.log(response3);
          newFeedback.summary = response3;
        });
        
        await explanationQuery({"question": feedback}).then((response4) => {
          console.log(response4);
          newFeedback.explanation = response4;
        });
        
        await tagGenerationQuery({"question": feedback}).then((response5) => {
          console.log(response5);
          newFeedback.tags = response5;
        });
  
        // Save the feedback to the database
        async function saveFeedbackData(feedbackData) {
          try {
            await connectToMongoDB();
  
            const newFeedback = new FeedbackModel(feedbackData);
            const savedFeedback = await newFeedback.save();
            console.log('Feedback data saved:', savedFeedback);
          } catch (error) {
            console.error('Error saving feedback data:', error);
          } finally {
            mongoose.connection.close(); 
          }
        }
  
        saveFeedbackData(newFeedback);
        
        res.sendStatus(200);
      } else {
        // Respond to duplicate or previous messages with a 200 status code without processing
        console.log('Ignoring duplicate or previous message:', event.text);
        res.sendStatus(200);
      }
    } else {
      // For other events or bot messages, respond with a 200 status code
      res.sendStatus(200);
    }

    
  } catch (error) {
    console.error('Error handling event:', error);
    // Respond with a 500 status code in case of an error
    res.sendStatus(500);
  }
});

app.get('/feedbacks', async (req, res) => {
  try {
    await connectToMongoDB();
    const feedbacks = await FeedbackModel.find({});
    res.json(feedbacks);
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    mongoose.connection.close();
  }
});



// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});



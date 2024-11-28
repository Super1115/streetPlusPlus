"use server"

import { Schema, model, Document } from 'mongoose';

import mongoose from "mongoose";

// Get the MongoDB URI from environment variable
// If undefined, throw an error or provide a fallback URI
const dbConfigFile = require("./mongoDb.json") 
const MONGODB_URI: string = dbConfigFile.mongoDbApi|| "";

if (!MONGODB_URI) {
  throw new Error("MongoDB URI is not defined. Please set the 'mongoDbApi' environment variable.");
}

// Ensure a single connection instance is used across the app

if (!mongoose.connection.readyState) {
  await mongoose.connect(MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB Atlas", err);
    });
}

// Define the schema for the issue report
const issueReportSchema = new Schema(
  {
    userId: { type: String, required: true },
    location: {
      type: { type: String, enum: ['Point'], required: true },
      coordinates: { type: [Number], required: true }, // GeoJSON format [longitude, latitude]
    },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

// Create an interface to type your document
interface IIssueReport extends Document {
  userId: string;
  location: {
    type: string;
    coordinates: number[];
  };
  description: string;
}

// Create the Mongoose model
const IssueReport = mongoose.models.IssueReport || model<IIssueReport>('IssueReport', issueReportSchema);

// Function to save an issue report
export const createIssueReport = async (userId: string, geoLocation: object, description: string) => {
  try {
    // Ensure the userId, geoLocation, and description are valid
    if (!userId || !geoLocation || !description) {
      throw new Error('Invalid data to create the issue report');
    }

    // Create a new instance of the IssueReport model
    const issue = new IssueReport({ userId, location: geoLocation, description });

    // Save the issue report
    await issue.save(); // This is valid if issue is created correctly as a Mongoose instance

    return { success: true, issue };
  } catch (error) {
    console.error("Error saving issue report:", error);
    return { success: false, error: error };
  }
};

export default IssueReport;

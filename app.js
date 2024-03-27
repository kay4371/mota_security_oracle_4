// require('dotenv').config();
// const natural = require('natural');
// const tokenizer = new natural.WordTokenizer();
// const classifier = new natural.BayesClassifier(); // Initialize a Bayesian classifier
// const sanitizeHtml = require('sanitize-html'); // Import sanitize-html library
// const session = require('express-session');
// const pdf = require('html-pdf');
// const PDFDocument = require('pdfkit');
// const fetch = require('node-fetch');
// const FormData = require('form-data');
// const axios = require('axios');
// const bcrypt = require('bcryptjs');
// const mongoUrl = 'mongodb+srv://OlukayodeUser:Kayode4371@cluster0.zds6pi9.mongodb.net/olukayode_sage?retryWrites=true&w=majority';
// const dbName = 'olukayode_sage';
// const socketIo = require('socket.io'); // Make sure to require 'socket.io'

// const fs = require('fs');
// const express = require('express');
// const bodyParser = require('body-parser');
// const https = require('https');
// const WebSocket = require('ws');
// const { Configuration, OpenAIApi } = require("openai");
// const { PDFExtract } = require('pdf.js-extract');
// const jwt = require('jsonwebtoken');
// const crypto = require('crypto');
// const secretKey = crypto.randomBytes(32).toString('hex');
// const { S3Client } = require;
// const aws = require("aws-sdk");
// var multer = require("multer");
// var multerS3 = require("multer-s3-v2");
// // const ObjectId = require('mongodb').ObjectId;
// const { ObjectId } = require('mongodb');
// const { MongoClient } = require('mongodb');
// // const { MongoClient, ObjectId } = require('mongodb');
// const mongoose = require('mongoose');
// const helmet = require('helmet');
// const rateLimit = require("express-rate-limit");
// const http = require('http');
// const path = require("path");

// // Rest of the code...


// const app = express();8080;
// const port = process.env.PORT || 3000;
// // Set up a route for the new visitor page
// function generateUniqueCode() {
//   const timestamp = new Date().getTime();
//   const randomString = Math.random().toString(36).substring(2, 10); // Random alphanumeric string
//   const uniqueCode = `${timestamp}_${randomString}`;
//   console.log('Generated Code:', uniqueCode); // Log the generated code
//   return uniqueCode;
// }

// // Generate the code when the app is initialized
// const generatedCode = generateUniqueCode();

// // const options = {
// //   key: fs.readFileSync('C:\\Users\\motaSecure\\private.key'),
// //   cert: fs.readFileSync('C:\\Users\\motaSecure\\certificate.crt'),
// // };

// // const options = {
// //   key: fs.readFileSync('C:\\Users\\motaSecure\\private.key'),
// //   cert: fs.readFileSync('C:\\Users\\motaSecure\\certificate.crt'),
// // };


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'));
// app.use(helmet());


// app.use((req, res, next) => {
//   req.generatedCode = generatedCode;
//   next();
// });

// // Set up S3 client
// const s3 = new aws.S3({
//    accessKeyId : process.env.AWS_ACCESS_KEY_ID,
//    secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY,
//   region: "us-west-2"
// })


// // Set up multer and S3 storage
// const uploadS3 = () =>
//   multer({
//     storage: multerS3({
//       s3,
//       bucket: 'profile-picture-upload-youtube1',
//       key: function (req, file, cb) {
//         cb(null, Date.now().toString() + '-' + file.originalname);
//       },
//     })
//   });

//   app.use(session({
//     secret: generatedCode, // Change this to a secure secret
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false } // Set to true if using HTTPS
//   }));



// // Set up MongoDB connection
// let registrationDetails = []; // Define a variable to store registration details
// const uri = 'mongodb+srv://OlukayodeUser:Kayode4371@cluster0.zds6pi9.mongodb.net/olukayode_sage?retryWrites=true&w=majority'
// const client = new MongoClient(uri);
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })


// const wss = new WebSocket.Server({ port: 8080});
// // const io = socketIo(server); // Pass your server instance to initialize socket.io

// // Store connected clients for different purposes
// let hrClients = [];
// let securityClients = [];

// // // // //whapi token 3:S36GOqY9anD6SGA7KPynscPVxdju24fN

// // // // /////////////////////////////////////////////////////let manager, supervisor, technician;

// // // // // Function to clean and modify phone numbers
// // // // function cleanPhoneNumber2(phoneNumber) {
// // // //   // Remove any non-numeric characters
// // // //   const cleanedNumber = phoneNumber.replace(/\D/g, '');
  
// // // //   // Check if the number starts with '0'
// // // //   if (cleanedNumber.startsWith('0')) {
// // // //     // Remove the leading '0' and prepend '234'
// // // //     return `234${cleanedNumber.slice(1)}`;
// // // //   }
  
// // // //   // Check if the number starts with '+'
// // // //   if (cleanedNumber.startsWith('+')) {
// // // //     // Remove the '+' sign
// // // //     return cleanedNumber.slice(1);
// // // //   }
  
// // // //   // If the number doesn't start with '0' or '+', return as is
// // // //   return cleanedNumber;
// // // // }

// // // // // Function to fetch token and officer details
// // // // async function getTokenandNumbers() {
// // // //   const uri = 'mongodb+srv://OlukayodeUser:Kayode4371@cluster0.zds6pi9.mongodb.net/olukayode_sage?retryWrites=true&w=majority';
// // // //   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // // //   try {
// // // //     await client.connect();
// // // //     const db = client.db('olukayode_sage');

// // // //     // Fetch token data
// // // //     const otherIDData = db.collection('OtherIDs');
// // // //     const tokenData = await otherIDData.findOne({ idType: 'Token 1' });

// // // //     // Fetch details for manager, supervisor, and technician
// // // //     const Security_officer_collection = db.collection('security_officers');
// // // //     manager = await Security_officer_collection.findOne({ designation: /security manager/i });
// // // //     supervisor = await Security_officer_collection.findOne({ designation: /security supervisor/i });
// // // //     technician = await Security_officer_collection.findOne({ designation: /security technician/i });

// // // //     // Clean and modify phone numbers
// // // //     if (manager) manager.phoneNumber = cleanPhoneNumber2(manager.phoneNumber);
// // // //     if (supervisor) supervisor.phoneNumber = cleanPhoneNumber2(supervisor.phoneNumber);
// // // //     if (technician) technician.phoneNumber = cleanPhoneNumber2(technician.phoneNumber);

// // // //     // Log the officer details
// // // //     console.log("Manager Details:", manager ? `Name: ${manager.name}, Phone: ${manager.phoneNumber}, Email: ${manager.email}` : 'No manager found');
// // // //     console.log("Supervisor Details:", supervisor ? `Name: ${supervisor.name}, Phone: ${supervisor.phoneNumber}, Email: ${supervisor.email}` : 'No supervisor found');
// // // //     console.log("Technician Details:", technician ? `Name: ${technician.name}, Phone: ${technician.phoneNumber}, Email: ${technician.email}` : 'No technician found');

// // // //     // Close the database connection
// // // //     await client.close();

// // // //     // Return token and officer details
// // // //     return {
// // // //       // token: tokenData && tokenData.idNumber ? tokenData.idNumber : null,
// // // //       manager: manager ? { name: manager.name, phone: manager.phoneNumber, email: manager.email } : null,
// // // //       supervisor: supervisor ? { name: supervisor.name, phone: supervisor.phoneNumber, email: supervisor.email } : null,
// // // //       technician: technician ? { name: technician.name, phone: technician.phoneNumber, email: technician.email } : null,
// // // //     };
// // // //   } catch (error) {
// // // //     console.error('An error occurred:', error);
// // // //     return null;
// // // //   }
// // // // }

// // // // // Call the function to fetch token and officer details
// // // // getTokenandNumbers()
// // // //   .then((tokenAndNumbers) => {
// // // //     console.log("officer details:", tokenAndNumbers);
// // // //     // Start the server here
// // // //     // Replace this with your server start logic
// // // //   })
// // // //   .catch((error) => {
// // // //     console.error("An error occurred:", error);
// // // //   });


// // // //   let token1Data, groupIDData,groupId;

// // // //   // Function to extract other details
// // // //   async function extractOtherDetails() {
// // // //     const uri = 'mongodb+srv://OlukayodeUser:Kayode4371@cluster0.zds6pi9.mongodb.net/olukayode_sage?retryWrites=true&w=majority';
// // // //     const client = new MongoClient(uri);
  
// // // //     try {
// // // //       await client.connect();
  
// // // //       const database = client.db('olukayode_sage');
// // // //       const driversHistoryCollection = database.collection('OtherIDs');
  
// // // //       // Fetch the required data from the database
// // // //       token1Data = await driversHistoryCollection.findOne({ idType: 'Token 1' });
// // // //       groupIDData = await driversHistoryCollection.findOne({ idType: 'GroupID' });
  
// // // //       // Log the retrieved data
// // // //       console.log('Extracted Details:');
// // // //       console.log('Token1:', token1Data.idNumber);
// // // //       console.log('GroupID:', groupIDData.idNumber);
  
// // // //       // Close the database connection
// // // //       await client.close();
  
// // // //       // Return the extracted data
// // // //       return {
// // // //         token1: token1Data.idNumber,
// // // //         groupID: groupIDData.idNumber
// // // //       };
// // // //     } catch (error) {
// // // //       console.error('An error occurred:', error);
// // // //       throw new Error('An error occurred while extracting details');
// // // //     }
// // // //   }
  
// // // //   // Function to start the server and extract other details
// // // //   async function startServerAndExtractDetails() {
// // // //     try {
// // // //       // Call the function to extract other details
// // // //       const extractedDetails = await extractOtherDetails();
// // // //       console.log("Extracted details:", extractedDetails);
  
// // // //       // Start the server here
// // // //       // Replace this with your server start logic
  
// // // //       // Access the extracted details
// // // //       const groupId = extractedDetails.groupID; // Corrected variable name
// // // //       const token = extractedDetails.token1; // Replace with your token
  
// // // //       // Now you can use groupId and token
// // // //     } catch (error) {
// // // //       console.error("An error occurred:", error);
// // // //     }
// // // //   }
  
// // // //   // Call the function to start the server and extract other details
// // // //   startServerAndExtractDetails();
  
// // // //   // const token2 = "notWeiRdf4mmY2CWf1Lk1Iz1W7hysaCX"; // Replace with your actual token

// // // // function normalizePhoneNumber(phoneNumber) {
// // // //   const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

// // // //   if (numericPhoneNumber.startsWith('0')) {
// // // //     return `+234${numericPhoneNumber.slice(1)}`;
// // // //   } else {
// // // //     return `+234${numericPhoneNumber}`;
// // // //   }
// // // // }


// // // // const generateVerificationCode = () => {
// // // //   const codeLength = 4; // Adjust the code length as needed
// // // //   const min = Math.pow(10, codeLength - 1);
// // // //   const max = Math.pow(10, codeLength) - 1;
// // // //   return Math.floor(Math.random() * (max - min + 1)) + min;
// // // // };

///////////////////////////////////////////////////

// // // // // // // Import required modules
// // // // // // const jwt = require('jsonwebtoken');

// // // // // // Authentication middleware
// // // // // const authenticateUser = (req, res, next) => {
// // // // //   const token = req.header('Authorization');

// // // // //   if (!token) {
// // // // //     return res.status(401).json({ message: 'Unauthorized - Missing token' });
// // // // //   }

// // // // //   try {
// // // // //     const decoded = jwt.verify(token, secretKey);
// // // // //     req.user = decoded.user;
// // // // //     next();
// // // // //   } catch (error) {
// // // // //     console.error(error);
// // // // //     return res.status(401).json({ message: 'Unauthorized - Invalid token' });
// // // // //   }
// // // // // };

// // // // // // Authorization middleware
// // // // // const authorizeUser = (roles) => {
// // // // //   return (req, res, next) => {
// // // // //     if (roles.includes(req.user.role)) {
// // // // //       next();
// // // // //     } else {
// // // // //       return res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
// // // // //     }
// // // // //   };
// // // // // };

// // // // // module.exports = { authenticateUser, authorizeUser };


// // // // const verifyCode = (enteredCode, generatedCode) => {
// // // //   return enteredCode.toString() === generatedCode.toString();
// // // // };

// // // // const authenticateUser = (req, res, next) => {
// // // //   const token = req.header('Authorization');

// // // //   if (!token) {
// // // //     return res.status(401).json({ message: 'Unauthorized - Missing token' });
// // // //   }

// // // //   try {
// // // //     const decoded = jwt.verify(token, secretKey);
// // // //     req.user = decoded.user;
// // // //     next();
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     return res.status(401).json({ message: 'Unauthorized - Invalid token' });
// // // //   }
// // // // };

// // // // // Authorization middleware
// // // // const authorizeUser = (roles) => {
// // // //   return (req, res, next) => {
// // // //     if (roles.includes(req.user.role)) {
// // // //       next();
// // // //     } else {
// // // //       return res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
// // // //     }
// // // //   };
// // // // };


// // // // // Sample users with configured roles and phone numbers
// // // // const configuredUsers = [
// // // //   { phoneNumber: '1234567890', configuredRole: 'receptionist' },
// // // //   { phoneNumber: '9876543210', configuredRole: 'security' },
// // // //   // Add more users as needed
// // // // ];

// // // // ///////with harshing////////////////////////////////////////
// // // // // Check login status endpoint
// // // // app.get('/check_login_status', (req, res) => {
// // // //   // Check if the user is logged in based on the session
// // // //   if (req.session && req.session.userId) {
// // // //       // User is logged in
// // // //       res.status(200).send('User logged in');
// // // //   } else {
// // // //       // User is not logged in
// // // //       res.status(401).send('User not logged in');
// // // //   }
// // // // });



// // // // // Logout endpoint
// // // // app.post('/logout', (req, res) => {
// // // //   // Clear session data
// // // //   req.session.destroy(err => {
// // // //       if (err) {
// // // //           console.error('Error destroying session:', err);
// // // //           res.status(500).json({ message: 'Error logging out' });
// // // //       } else {
// // // //           // Respond with a success message
// // // //           res.status(200).json({ message: 'Logout successful' });
// // // //       }
// // // //   });
// // // // });


// // // // app.post('/register', async (req, res) => {
// // // //   console.log('Received Registration Request:', req.body);

// // // //   const { phoneNumber, selectedRole, verificationCode, name, email, password, confirmPassword } = req.body;

// // // //   if (!phoneNumber || !selectedRole || !name || !email || !password || !confirmPassword) {
// // // //     console.log('Validation Failed - Missing Parameters');
// // // //     return res.status(400).json({ message: 'Bad Request - Missing parameters' });
// // // //   }

// // // //   const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// // // //   try {
// // // //     await client.connect();
// // // //     const db = client.db("olukayode_sage");
// // // //     const collection = db.collection('user_config_databse');
// // // //     const collection2 = db.collection('registered_user_config_database');
// // // //     const userConfig = await collection.findOne({ phoneNumber });

// // // //     if (!userConfig) {
// // // //       console.log('Access Denied - Phone number not configured for any role');
// // // //       return res.status(403).json({ message: 'Access Denied - Phone number not configured for any role' });
// // // //     }

// // // //     if (selectedRole !== userConfig.configuredRole) {
// // // //       console.log('Access Denied - Invalid account type');
// // // //       return res.status(403).json({ message: 'Access Denied - Invalid account type' });
// // // //     }

// // // //     console.log("Entered code:", verificationCode);
// // // //     console.log("Generated code:", globalVerificationCode);

// // // //     // Add more logging to see the comparison result
// // // //     const isValidVerificationCode = verifyCode(verificationCode, globalVerificationCode);
// // // //     console.log('Is Valid Verification Code:', isValidVerificationCode);

// // // //     if (!isValidVerificationCode) {
// // // //       console.log('Access Denied - Invalid verification code');
// // // //       return res.status(403).json({ message: 'Access Denied - Invalid verification code' });
// // // //     }

// // // //     // Hash the password before storing it in the database
// // // //     const hashedPassword = await bcrypt.hash(password, 10); // Use an appropriate saltRounds value

// // // //     // Save user details along with the hashed password in the database
// // // //     const result = await collection2.insertOne({
// // // //       _id: new ObjectId(),
// // // //       name,
// // // //       email,
// // // //       phoneNumber,
// // // //       configuredRole: selectedRole,
// // // //       configured: true,
// // // //       passwordHash: hashedPassword,
// // // //     });

// // // //     const token = jwt.sign({ phoneNumber, selectedRole }, secretKey, { expiresIn: '7m' });
// // // //     console.log('Registration successful - Token:', token);
// // // //     res.status(200).json({ message: 'Registration successful', token, verificationCode: globalVerificationCode });
// // // //     // res.redirect('/index.html'); 
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     // res.status(500).json({ message: 'Error registering user' });
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });




// // // // app.post('/configureUserAccount', async (req, res) => {
// // // //   const { phoneNumber, configuredRole } = req.body;

// // // //   // Validate input
// // // //   if (!phoneNumber || !configuredRole) {
// // // //     console.log('Validation Failed - Missing Parameters');
// // // //     return res.status(400).json({ message: 'Bad Request - Missing parameters' });
// // // //   }

// // // //   // Normalize the phone number before processing
// // // //   const cleanedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
// // // //   const normalizedPhoneNumber = cleanedPhoneNumber.startsWith('0') ? `+234${cleanedPhoneNumber.slice(1)}` : `+234${cleanedPhoneNumber}`;

// // // //   // Create a new MongoClient
// // // //   const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// // // //   try {
// // // //     // Connect to MongoDB
// // // //     await client.connect();

// // // //     // Select the database and collection
// // // //     const db = client.db(dbName);
// // // //     const collectionName = 'user_config_databse'; // Replace with your collection name
// // // //     const collection = db.collection(collectionName);

// // // //     // Check if the user is already configured
// // // //     const existingUser = await collection.findOne({ phoneNumber: normalizedPhoneNumber });

// // // //     if (existingUser) {
// // // //       return res.status(400).json({ message: 'Bad Request - Phone number already configured for ' + existingUser.configuredRole });
// // // //     }

// // // //     // Save user configuration status to MongoDB
// // // //     await collection.insertOne({ phoneNumber: normalizedPhoneNumber, configuredRole, configured: true });

// // // //     res.status(200).json({ message: 'User account configured successfully' });
  
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).json({ message: 'Error configuring user account' });
// // // //   } finally {
// // // //     // Close the MongoDB connection
// // // //     await client.close();
// // // //   }
// // // // });




// // // // let globalVerificationCode = "";

// // // // // Move the function to the global scope
// // // // const generateVerificationCode2 = () => {
// // // //   const codeLength = 4; // Adjust the code length as needed
// // // //   const min = Math.pow(10, codeLength - 1);
// // // //   const max = Math.pow(10, codeLength) - 1;
// // // //   return Math.floor(Math.random() * (max - min + 1)) + min;
// // // // };

// // // // app.post('/generateVerificationCode', async (req, res) => {
// // // //   // Log the received parameters for debugging
// // // //   console.log('Received Parameters:', req.body);

// // // //   const { phoneNumber, verificationCode, name, email, password, confirmPassword, role } = req.body;

// // // //   // Validate input
// // // //   if (!phoneNumber || !name || !email || !password || !confirmPassword || !role) {
// // // //     console.log('Validation Failed - Missing Parameters');
// // // //     return res.status(400).json({ message: 'Bad Request - Missing parameters' });
// // // //   }

// // // //   // Check if password matches confirm password
// // // //   if (password !== confirmPassword) {
// // // //     console.log('Validation Failed - Passwords do not match');
// // // //     return res.status(400).json({ message: 'Bad Request - Passwords do not match' });
// // // //   }

// // // //   // Create a new MongoClient
// // // //   const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// // // //   try {
// // // //     // Connect to MongoDB
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('user_config_databse');

// // // //     // Check if the user is configured
// // // //     const user = await collection.findOne({ phoneNumber, configured: true });

// // // //     if (!user) {
// // // //       console.log('User not configured. Cannot generate verification code.');
// // // //       return res.status(400).json({ message: 'Bad Request - User not configured' });
// // // //     }

// // // //     // Extract the first name or the first word of the name
// // // //     const firstName = name.split(' ')[0];

// // // //     // Check if phoneNumber is a string before attempting to clean and format it
// // // //     const cleanAndFormatPhoneNumber2 = (phoneNumber) => {
// // // //       if (typeof phoneNumber !== 'string') {
// // // //         console.error('Invalid phoneNumber:', phoneNumber);
// // // //         return phoneNumber;
// // // //       }

// // // //       const cleanedNumber = phoneNumber.replace(/\D/g, '');
// // // //       const formattedNumber = cleanedNumber.startsWith('234') ? cleanedNumber : `234${cleanedNumber.slice(1)}`;
// // // //       return formattedNumber;
// // // //     };

// // // //     const formattedNumber = cleanAndFormatPhoneNumber2(phoneNumber);

// // // //     console.log("nnn", formattedNumber);

// // // //     // Generate a verification code for the user
// // // //     const generatedCode = generateVerificationCode2();
// // // //     globalVerificationCode = generatedCode;
// // // //     console.log('Generated Code:', globalVerificationCode);

// // // //     // Send the verification code message only when the validation conditions are met
// // // //     const messageCode = `Dear ${firstName},\n\nYour *${role} account* setup is underway. Please use the one-time verification code: *${generatedCode}* to complete the process. This code is valid for 7 minutes.\n\nWelcome to Mota Security Oracle!`;

// // // //     const token2 = process.env.TOKEN;

// // // //     const options = {
// // // //       method: 'POST',
// // // //       url: 'https://gate.whapi.cloud/messages/text',
// // // //       headers: {
// // // //         accept: 'application/json',
// // // //         'content-type': 'application/json',
// // // //         authorization: `Bearer ${token2}`,
// // // //       },
// // // //       data: {
// // // //         to: `${formattedNumber}@s.whatsapp.net`,
// // // //         body: messageCode,
// // // //       },
// // // //     };

// // // //     const response = await axios.request(options);
// // // //     console.log(response.data);

// // // //     res.status(200).json({ success: true, message: 'Verification code sent successfully' });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).json({ success: false, message: 'Error sending Verification' });
// // // //   } finally {
// // // //     // Close the MongoDB connection
// // // //     await client.close();
// // // //   }
// // // // });




// // // // ///////////////////////////////////////////////////////////////////////
// // // // // Function to query MongoDB for all data and log entries
// // // // async function queryMongoForAllDataAndLog() {
// // // //   const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// // // //   try {
// // // //     // Connect to MongoDB
// // // //     await client.connect();

// // // //     // Select the database and collection
// // // //     const db = client.db(dbName);
// // // //     const collectionName = 'movement_history_database'; // Replace with your collection name
// // // //     const collection = db.collection(collectionName);

// // // //     // Your query logic here
// // // //     // For example, you might query for all documents
// // // //     const allData = await collection.find({}).toArray();

// // // //     // Log all entries to the console
// // // //     allData.forEach((entry) => {
// // // //       console.log('Entry:', entry);
// // // //     });

// // // //     return allData;
// // // //   } catch (error) {
// // // //     console.error('Error querying MongoDB:', error);
// // // //     throw error;
// // // //   } finally {
// // // //     // Close the MongoDB connection when done
// // // //     client.close();
// // // //   }
// // // // }

////////////////////////////////////////////////////////////////

// // // // // WebSocket server logic
// // // // wss.on('connection', (ws) => {
// // // //   console.log('Client connected');

// // // //   // Handle incoming WebSocket messages from clients
// // // //   ws.on('message', (message) => {
// // // //     console.log(`Received: ${message}`);
// // // //   });

// // // //   // Add the client to the appropriate client list based on the purpose
// // // //   ws.on('close', () => {
// // // //     console.error('WebSocket error:', error);
// // // //     // Remove the client from the corresponding list
// // // //     hrClients = hrClients.filter((client) => client !== ws);
// // // //     securityClients = securityClients.filter((client) => client !== ws);
// // // //   });


// // // //   ws.on('close', () => {
// // // //     console.log('Client disconnected');
// // // //     // Remove the client from the corresponding list
// // // //     hrClients = hrClients.filter((client) => client !== ws);
// // // //     securityClients = securityClients.filter((client) => client !== ws);
// // // //   });


// // // //   const sentEntryIds = new Set(); // Initialize a Set to store sent entry IDs

// // // //   // Periodically query MongoDB and send updates to clients
// // // //   const queryInterval = setInterval(async () => {
// // // //     try {
// // // //       const allData = await queryMongoForAllDataAndLog();

// // // //       // Filter out entries that have already been sent
// // // //       const newEntries = allData.filter((entry) => !sentEntryIds.has(entry._id));

// // // //       // Add new entry IDs to the set of sent entry IDs
// // // //       newEntries.forEach((entry) => sentEntryIds.add(entry._id));

// // // //       // Send the new data as a JSON string to connected clients

// // // //       // Before sending a message
// // // //       // console.log('Sending message:', JSON.stringify(newEntries));

// // // //   //     ws.send(JSON.stringify(newEntries));
// // // //   //   } catch (error) {
// // // //   //     console.error('Error sending data to clients:', error);
// // // //   //   }
// // // //   // }, 1000); // Adjust the interval as needed (e.g., every 5 seconds)
// // // //   // Send the new data as a JSON string to connected clients
// // // //   ws.send(JSON.stringify(newEntries));
// // // // } catch (error) {
// // // //   console.error('Error sending data to clients:', error);
// // // // }
// // // // }, 1000); // Adjust the interval as needed (e.g., every 5 seconds)

// // // //   // When a client disconnects, clear the query interval
// // // //   ws.on('close', () => {
// // // //     console.log('Client disconnected');
// // // //     clearInterval(queryInterval);
// // // //   });
// // // // });


// // // // const serverWebSocket = new WebSocket.Server({ port: 8081 });


// // // // serverWebSocket.on('connection', (ws) => {
// // // //   console.log('WebSocket connection established');

// // // //   // Handle incoming WebSocket messages from clients
// // // //   ws.on('message', (message) => {
// // // //     console.log(`Received: ${message}`);
// // // //   });

// // // //   // Handle WebSocket errors
// // // //   ws.on('error', (error) => {
// // // //     console.error('WebSocket error:', error);
// // // //     // Optionally, you can close the connection or perform any other cleanup here
// // // //   });

// // // //   // Add the client to the appropriate client list based on the purpose
// // // //   ws.on('close', () => {
// // // //     console.log('WebSocket connection closed');
// // // //     // Add logic here to remove the client from the appropriate client list
// // // //   });
// // // // });

// // // // // correct second2
// // // // app.get('/events', (req, res) => {
// // // //   res.setHeader('Content-Type', 'text/event-stream');
// // // //   res.setHeader('Cache-Control', 'no-cache');
// // // //   res.setHeader('Connection', 'keep-alive');

// // // //   // Add the response object to the SSE clients array
// // // //   sseClients.push(res);

// // // //   req.on('close', () => {
// // // //     // Remove the closed response object from the SSE clients array
// // // //     const index = sseClients.indexOf(res);
// // // //     if (index !== -1) {
// // // //       sseClients.splice(index, 1);
// // // //     }
// // // //     // Close the response stream
// // // //     res.end();
// // // //   });
// // // //  // Handle SSE errors
// // // //  res.on('error', (error) => {
// // // //   console.error('SSE error:', error);
// // // //   // Optionally, you can close the connection or perform any other cleanup here
// // // // });
// // // // });




// // // // async function main() {
// // // //   try {
// // // //     const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
// // // //     await client.connect();
// // // //     const db = client.db(dbName);
// // // //     const collectionName = 'drivers_details';
// // // //     const collection = db.collection(collectionName);

// // // //     const changeStream = collection.watch();

// // // //     changeStream.on('change', (next) => {
// // // //       console.log('Change detected:', next);

// // // //       if (next.operationType === 'insert') {
// // // //         const newEntry = next.fullDocument;

// // // //         // Send the new entry to all connected SSE clients
// // // //         sseClients.forEach((client) => {
// // // //           client.write(`data: ${JSON.stringify(newEntry)}\n\n`);
// // // //         });
// // // //       }
// // // //     });

// // // //     console.log('Change stream is running...');
// // // //   } catch (error) {
// // // //     console.error('Error:', error);
// // // //   }
// // // // }

// // // // // Call the main function to start the change stream
// // // // main();
// // // // // ///////////////////////


// // // // const sseVisitorClients = [];
// // // // app.get('/sse_visitor_upload', (req, res) => {
// // // //   res.setHeader('Content-Type', 'text/event-stream');
// // // //   res.setHeader('Cache-Control', 'no-cache');
// // // //   res.setHeader('Connection', 'keep-alive');
// // // //   res.flushHeaders();

// // // //   sseVisitorClients.push(res);

// // // //   req.on('close', () => {
// // // //     const index = sseVisitorClients.indexOf(res);
// // // //     if (index !== -1) {
// // // //       sseVisitorClients.splice(index, 1);
// // // //     }
// // // //   });
// // // // });


// // // // function sendSSEMessage(endpoint, message) {
// // // //   const formattedMessage = `data: ${JSON.stringify(message)}\n\n`;
// // // //   let clientsArray;

// // // //   if (endpoint === 'sse_visitor_upload') {
// // // //     clientsArray = sseVisitorClients;
// // // //   } else if (endpoint === 'sse_driver_authorization') {
// // // //     clientsArray = sseDriverClients;
// // // //   }

// // // //   clientsArray.forEach(client => {
// // // //     try {
// // // //       // Check if the client is still writable
// // // //       if (!client.writableEnded) {
// // // //         client.write(formattedMessage);
// // // //       } else {
// // // //         // If client is no longer writable, remove it from the clients array
// // // //         const index = clientsArray.indexOf(client);
// // // //         if (index !== -1) {
// // // //           clientsArray.splice(index, 1);
// // // //         }
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error sending SSE message:', error);
// // // //     }
// // // //   });
// // // // }

// // // // // app.use(express.json());
// // // // // SSE route for the receptionist
// // // // app.get('/sse_receptionist', (req, res) => {
// // // //   res.setHeader('Content-Type', 'text/event-stream');
// // // //   res.setHeader('Cache-Control', 'no-cache');
// // // //   res.setHeader('Connection', 'keep-alive');
// // // //   res.flushHeaders();

// // // //   const sseStream = new Readable({
// // // //     read() { },
// // // //   });

// // // //   sseStream.pipe(res);

// // // //   // Add the SSE stream to the set of clients
// // // //   sseClients.add(sseStream);

// // // //   // Remove the SSE stream when the client disconnects
// // // //   req.on('close', () => {
// // // //     sseClients.delete(sseStream);
// // // //     sseStream.destroy();
// // // //   });
// // // // });




// // // // // Second whapi account:

// // // // // testmyitproject@gmail.com:

// // // // // Token:
// // // // // S36GOqY9anD6SGA7KPynscPVxdju24fN


// // // // // WhatsApp chat link:
// // // // // https://wa.me/2349010400099?text=start


// // // // // Channel:

// // // // // GAMORA-TPCJD


// // // // ////////////////visitor messaging/////////////////////////////////////////////////////////////
// // // // // const axios = require('axios');
// // // // //Whatsapp messages to visitors
// // // // // API credentials
// // // // // const token = "S36GOqY9anD6SGA7KPynscPVxdju24fN"
// // // // // const token = "notWeiRdf4mmY2CWf1Lk1Iz1W7hysaCX";
// // // // // API endpoint
// // // // const token = process.env.TOKEN;

// // // // const apiUrl = `https://gate.whapi.cloud/messages/text?token=${token}`;

// // // // const cleanAndFormatPhoneNumber = (phoneNumber) => {
// // // //   const cleanedNumber = phoneNumber.replace(/\D/g, '');

// // // //   // Check if cleanedNumber starts with '234', if not, replace the first '0' with '234'
// // // //   const formattedNumber = cleanedNumber.startsWith('234') ? cleanedNumber : `234${cleanedNumber.slice(1)}`;

// // // //   return formattedNumber;
// // // // };

// // // // // Function to generate a random message from a list
// // // // const getRandomMessage = (firstName, accessCode, password, validityPeriodFormatted) => {
// // // //   // const accessCodes = ["2368", "7890", "1234", "5678", "9876"];
// // // //   // const passwords = ["Pink Horse", "Blue Sky", "Golden Key", "Silver Star", "Green Leaf"];

// // // //   const messages = [
// // // //     `Hi ${firstName},\n\nYour access code for Mota-Engil Lagos office is **${accessCode}** and the password is **${password}**. Kindly use this information at the security checkpoint. Access is valid until ${validityPeriodFormatted}.\n\nRegards,\nMota Engil Security`,
// // // //     `Dear ${firstName},\n\nYour access code: **${accessCode}**\nPassword: **${password}**\nThis information is valid until ${validityPeriodFormatted}.\n\nBest regards,\nMota Engil Security`,
// // // //     `Hello ${firstName},\n\nYour access code (${accessCode}) and password (${password}) are required for entry at Mota-Engil Lagos office. This access is valid until ${validityPeriodFormatted}.\n\nSincerely,\nMota Engil Security`,
// // // //     `Dear ${firstName},\n\nAccess Code: **${accessCode}**\nPassword: **${password}**\nKindly use these credentials for entry at Mota-Engil Lagos office. Valid until ${validityPeriodFormatted}.\n\nBest regards,\nMota Engil Security`,
// // // //     `Hi ${firstName},\n\nPlease be informed that your access code for Mota-Engil Lagos office is **${accessCode}** and the password is **${password}**. Use this information at the security checkpoint. Access is valid until ${validityPeriodFormatted}.\n\nKind regards,\nMota Engil Security`,
// // // //     // Add 5 more different formatted messages here
// // // //     `Greetings ${firstName},\n\nYour access to Mota-Engil Lagos office is granted with access code **${accessCode}** and password **${password}**. Ensure you use this information by ${validityPeriodFormatted}.\n\nWarm regards,\nMota Engil Security`,
// // // //     `Dear ${firstName},\n\nAccess has been granted to Mota-Engil Lagos office. Your access code is **${accessCode}** and the password is **${password}**. Valid until ${validityPeriodFormatted}.\n\nBest regards,\nMota Engil Security`,
// // // //     `Hello ${firstName},\n\nYour access to Mota-Engil Lagos office is secured with access code **${accessCode}** and password **${password}**. Utilize this information before ${validityPeriodFormatted}.\n\nKind regards,\nMota Engil Security`,
// // // //     `Hi ${firstName},\n\nAccess has been provisioned for Mota-Engil Lagos office. Your access code (**${accessCode}**) and password (**${password}**) are valid until ${validityPeriodFormatted}.\n\nBest regards,\nMota Engil Security`,
// // // //     `Dear ${firstName},\n\nYour access to Mota-Engil Lagos office is confirmed. Use access code **${accessCode}** and password **${password}**. Access valid until ${validityPeriodFormatted}.\n\nWarm regards,\nMota Engil Security`
// // // //   ];

// // // //   const randomIndex = Math.floor(Math.random() * messages.length);
// // // //   return messages[randomIndex];
// // // // };



// // // // app.post('/upload_visitor_details', async (req, res) => {
// // // //   const fullName = req.body.name;
// // // //   const firstName = fullName.split(' ')[0]; // Extract the first word

// // // //   const visitorDetails = {
// // // //     registrationDate: new Date(),
// // // //     name: firstName,
// // // //     company: req.body.company,
// // // //     whomToSee: req.body.whomToSee,
// // // //     purposeOfVisit: req.body.purposeOfVisit,
// // // //     phoneNumber: cleanAndFormatPhoneNumber(req.body.phone_number),
// // // //     datetime: new Date(req.body.datetime)
// // // //   };

// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('Visitors_details_Database');

// // // //     // Save the visitor details to the database
// // // //     const result = await collection.insertOne(visitorDetails);

// // // //     // Notify SSE clients with a message
// // // //     const message = {
// // // //       type: 'visitor_upload',
// // // //       visitorDetails,
// // // //     };
// // // //     sendSSEMessage('sse_visitor_upload', message);
// // // //     console.log('Sending SSE message:', message);

// // // //     // Message details
// // // //     const to = cleanAndFormatPhoneNumber(req.body.phone_number); // Clean and format the phone number
// // // //     // const accessCodes = ["2368", "7890", "1234", "5678", "9876"];
// // // //     // const passwords = ["Pink Horse", "Blue Sky", "Golden Key", "Silver Star", "Green Leaf"];


// // // //     // Function to generate a random access code
// // // //     const generateAccessCode = () => {
// // // //       const randomCode = crypto.randomBytes(2).toString('hex').toUpperCase();
// // // //       return randomCode;
// // // //     };


// // // //     // Function to generate a secure password (combination of two words)
// // // //     const generatePassword = () => {
// // // //       const getRandomPhrase = () => {
// // // //         const phrases = [
// // // //           "Blue Sky",
// // // //           "Dry Lake",
// // // //           "Green Forest",
// // // //           "Red Rose",
// // // //           "Ocean Wave",
// // // //           "Sunset Glow",
// // // //           "Silent Moon",
// // // //           "Misty Mountain",
// // // //           "Golden Sand",
// // // //           "Crystal Clear",
// // // //           "Whispering Wind",
// // // //           "Starry Night",
// // // //           "Rustic Charm",
// // // //           "Enchanted Garden",
// // // //           "Rolling Hills",
// // // //           "Silver Stream",
// // // //           "Purple Haze",
// // // //           "Autumn Leaves",
// // // //           "Snowy Peak",
// // // //           "Serene Lake",
// // // //           "Blue Ocean",
// // // //           "Desert Mirage",
// // // //           "Emerald Forest",
// // // //           "Crimson Rose",
// // // //           "Wave of Tranquility",
// // // //           "Sunset Horizon",
// // // //           "Lunar Serenity",
// // // //           "Misty Valley",
// // // //           "Golden Meadow",
// // // //           "Crystal Lagoon",
// // // //           "Whispering Canyon",
// // // //           "Starlit Sky",
// // // //           "Rustic Oasis",
// // // //           "Enchanted Oasis",
// // // //           "Rolling Thunder",
// // // //           "Silver Breeze",
// // // //           "Purple Nebula",
// // // //           "Autumn Breeze",
// // // //           "Snowy Silence",
// // // //           "Serene Sanctuary"
// // // //         ];;
// // // //         const randomIndex = Math.floor(Math.random() * phrases.length);
// // // //         return phrases[randomIndex];
// // // //       };

// // // //       const password = getRandomPhrase().replace(/\s+/g, '').toLowerCase(); // Remove spaces and convert to lowercase
// // // //       return password;
// // // //     };

// // // //     const accessCode = generateAccessCode();
// // // //     const password = generatePassword();

// // // //     // Calculate validity period (maximum of 1 hour after the provided datetime)
// // // //     const validityPeriod = new Date(visitorDetails.datetime.getTime() + (60 * 60 * 1000));
// // // //     const validityPeriodFormatted = validityPeriod.toLocaleDateString() + ' ' + validityPeriod.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

// // // //     const formattedMessage = getRandomMessage(firstName, accessCode, password, validityPeriodFormatted);

// // // //     // Make API request
// // // //     const response = await axios.post(apiUrl, {
// // // //       to,
// // // //       body: formattedMessage,
// // // //       view_once: true
// // // //     });

// // // //     // Log response
// // // //     console.log(response.data);

// // // //     res.status(200).send('Visitor details uploaded successfully and message sent.');

// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while uploading visitor details');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });


// // // // app.post('/authorize_driver', async (req, res) => {
// // // //   const driverData = req.body;

// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db(dbName);
// // // //     const collection = database.collection('authorize_driver');

// // // //     // Save the driver data to the "authorize_driver" collection
// // // //     const result = await collection.insertOne(driverData);

// // // //     // Notify HR unit with a message using SSE
// // // //     sseClients.forEach(client => {
// // // //       const message = {
// // // //         type: 'authorization',
// // // //         driverName: driverData.driver_name,
// // // //         timeOut: driverData.time_out,
// // // //         destination: driverData.target_location,
// // // //         passenger: driverData.passenger,
// // // //       };
// // // //       client.write(`data: ${JSON.stringify(message)}\n\n`);
// // // //     });

// // // //     res.json({ success: true, message: 'Driver details authorized successfully' });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).json({ success: false, message: 'An error occurred while authorizing driver details' });
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });



// // // // app.get('/sse', (req, res) => {
// // // //   res.writeHead(200, {
// // // //     'Content-Type': 'text/event-stream',
// // // //     'Cache-Control': 'no-cache',
// // // //     'Connection': 'keep-alive',
// // // //   });

// // // //   res.write('\n');

// // // //   // Add the client to the array
// // // //   sseClients.push(res);

// // // //   // Remove the client when the connection is closed
// // // //   req.on('close', () => {
// // // //     const index = sseClients.indexOf(res);
// // // //     if (index !== -1) {
// // // //       sseClients.splice(index, 1);
// // // //     }
// // // //   });
// // // // });
// // // // // Function to send SSE updates to all connected clients
// // // // function sendSSEUpdate(message) {
// // // //   sseClients.forEach(client => {
// // // //     client.write(`data: ${JSON.stringify(message)}\n\n`);
// // // //   });
// // // // }



// // // // app.post('/awaiting_visitor', async function (req, res) {
// // // //   const registrationDate = new Date();

// // // //   // Format the registration date
// // // //   const formattedDate = registrationDate.toLocaleString('en-US', {
// // // //     hour: 'numeric',
// // // //     minute: 'numeric',
// // // //     hour12: true,
// // // //     day: 'numeric',
// // // //     month: 'short', // Use 'short' to get abbreviated month names
// // // //     year: '2-digit',
// // // //   });

// // // //   const awaiting_visitorDetails = {
// // // //     registrationDate: formattedDate, // Save the formatted date to the database
// // // //     name: req.body.name,
// // // //     address: req.body.company,
// // // //     whomToSee: req.body.whomToSee,
// // // //     purposeOfVisit: req.body.purposeOfVisit,
// // // //   };

// // // //   try {
// // // //     await client.connect(); // Connect to the MongoDB client
// // // //     const database = client.db("olukayode_sage");
// // // //     const collection = database.collection('New_visitors_details_Database');

// // // //     // Save the visitor details to the database
// // // //     const result = await collection.insertOne(awaiting_visitorDetails);

// // // //     console.log(' New visitors :', result);

// // // //     // Send SSE to receptionist page
// // // //     sendSSEUpdate({
// // // //       type: 'new_visitor',
// // // //       visitorName: awaiting_visitorDetails.name,
// // // //       registrationDate: formattedDate,
// // // //       whomToSee: awaiting_visitorDetails.whomToSee,
// // // //       purposeOfVisit: awaiting_visitorDetails.purposeOfVisit,
// // // //     });

// // // //     res.send(`Visitor details uploaded successfully at ${formattedDate}`);
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while uploading awaiting visitor details');
// // // //   } finally {
// // // //     await client.close(); // Close the MongoDB client connection
// // // //   }
// // // // });


// // // // app.get('/get_new__visitor_details', async function (req, res) {
// // // //   try {
// // // //     await client.connect(); // Connect to the MongoDB client
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('New_visitors_details_Database');

// // // //     // Fetch all visitor details from the database
// // // //     const visitorDetails = await collection.find().toArray();

// // // //     res.json(visitorDetails); // Send the visitor details as a JSON response
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while fetching visitor details');
// // // //   } finally {
// // // //     await client.close(); // Close the MongoDB client connection
// // // //   }
// // // // });




// // // // app.get('/get_expected_visitors', async function (req, res) {
// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     // const collection = database.collection('olukayode_collection');
// // // //     const collection = database.collection('Visitors_details_Database');
// // // //     const expectedVisitors = await collection.find({}).toArray();
// // // //     console.log(' Expected visitors :', expectedVisitors);

// // // //     res.json(expectedVisitors);
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while retrieving expected visitors');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // })
// // // //   ;




// // // // app.post('/notify_the_host', (req, res) => {
// // // //   // Extract data from the request body
// // // //   const { name, whomToSee, company, purposeOfVisit, phoneNumber, status, date, time } = req.body;

// // // //   // You can do something with the received data here, for example, logging it
// // // //   console.log('Received notification:');
// // // //   console.log('Name:', name);
// // // //   console.log('Whom to See:', whomToSee);
// // // //   console.log('Address:', company);
// // // //   console.log('Purpose of Visit:', purposeOfVisit);
// // // //   console.log('Phone Number:', phoneNumber);
// // // //   console.log('Status:', status);
// // // //   console.log('Date:', date);
// // // //   console.log('Time:', time);

// // // //   // Send a response back to the client
// // // //   res.status(200).json({ message: 'Notification received successfully' });
// // // // });



// // // // app.get('/get_driver_details', async function (req, res) {
// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('drivers_details');
// // // //     // const collection = database.collection('Visitors_details_Database');
// // // //     const drivers_details = await collection.find({}).toArray();
// // // //     console.log(' Expected visitors :', drivers_details);

// // // //     res.json(drivers_details);
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while retrieving drivers details');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // })


// // // // ////////////////////////perfect use

// // // // app.post('/movement_history', async function (req, res) {
// // // //   const driverDetails = {
// // // //     driver_name: req.body.driver_name,
// // // //     armed_guard: req.body.armed_guard,
// // // //     target_location: req.body.target_location,
// // // //     passenger: req.body.passenger,
// // // //     vehicle_number: req.body.vehicle_number,
// // // //     time_out: req.body.time_out,
// // // //   };

// // // //   try {
// // // //     const client = new MongoClient(uri);
// // // //     await client.connect();

// // // //     const database = client.db('olukayode_sage');
// // // //     const kaydata = database.collection('movement_history_database');
// // // //     const drivers_details = database.collection('drivers_details');

// // // //     const result = await kaydata.insertOne(driverDetails);

// // // //     console.log('Movement added to history:', result.insertedId);

// // // //     console.log('Before deletion: Trying to delete', driverDetails.driver_name);
// // // //     const deleteResult = await drivers_details.deleteOne({ driver_name: driverDetails.driver_name });
// // // //     console.log('Deletion result:', deleteResult);

// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while adding the movement to history and deleting from drivers');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });



// // // // app.get('/get_movement_history', async function (req, res) {
// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     // const collection = database.collection('olukayode_collection');
// // // //     const collection = database.collection('movement_history_database');
// // // //     const movementHistory = await collection.find({}).toArray();
// // // //     console.log(' movement History :', movementHistory);

// // // //     res.json(movementHistory);
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while retrieving emovementHistory');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // })



// // // // client.connect();
// // // // const database = client.db('olukayode_sage');
// // // // const visitorDataCollection = database.collection('Visitorshistory');
// // // // const movementDataCollection = database.collection('movement_history_database');

// // // // // Set up the Express app


// // // // app.get('/get_visitor_counts', async (req, res) => {
// // // //   try {
// // // //     await client.connect();
// // // //     const totalCount = await visitorDataCollection.countDocuments();

// // // //     const today = new Date();
// // // //     today.setHours(0, 0, 0, 0);

// // // //     const todayCount = await visitorDataCollection.countDocuments({ date: { $gte: today } });
// // // //     const weekAgo = new Date(today);
// // // //     weekAgo.setDate(today.getDate() - 7);
// // // //     const weekCount = await visitorDataCollection.countDocuments({ date: { $gte: weekAgo } });

// // // //     res.json({ todayCount, weekCount, totalCount });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while fetching visitor counts.');
// // // //   }
// // // // });



// // // // app.get('/get_movements_counts', async (req, res) => {
// // // //   try {
// // // //     await client.connect();
// // // //     const totalCount = await movementDataCollection.countDocuments();

// // // //     const today = new Date();
// // // //     today.setHours(0, 0, 0, 0);

// // // //     const todayCount = await movementDataCollection.countDocuments({ date: { $gte: today } });
// // // //     const weekAgo = new Date(today);
// // // //     weekAgo.setDate(today.getDate() - 7);
// // // //     const weekCount = await movementDataCollection.countDocuments({ date: { $gte: weekAgo } });

// // // //     res.json({ todayCount, weekCount, totalCount });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while fetching movement counts.');
// // // //   }
// // // // });




// // // // // Function to query MongoDB for all data and log entries
// // // // async function queryMongoForAllDataAndLog() {
// // // //   const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// // // //   try {
// // // //     // Connect to MongoDB
// // // //     await client.connect();

// // // //     // Select the database and collection
// // // //     const db = client.db(dbName);
// // // //     const collectionName = 'movement_history_database'; // Replace with your collection name
// // // //     const collection = db.collection(collectionName);

// // // //     // Your query logic here
// // // //     // For example, you might query for all documents
// // // //     const allData = await collection.find({}).toArray();

// // // //     // Log all entries to the console
// // // //     allData.forEach((entry) => {
// // // //       console.log('Entry:', entry);
// // // //     });

// // // //     return allData;
// // // //   } catch (error) {
// // // //     console.error('Error querying MongoDB:', error);
// // // //     throw error;
// // // //   } finally {
// // // //     // Close the MongoDB connection when done
// // // //     client.close();
// // // //   }
// // // // }

// // // // // WebSocket server logic for HR namespace
// // // // wss.on('connection', (ws, req) => {
// // // //   const pathname = req.url;
// // // //   const isHRNamespace = pathname === '/hr_namespace';
// // // //   const isSecurityNamespace = pathname === '/security_namespace';

// // // //   if (isHRNamespace) {
// // // //     console.log('HR unit connected.');

// // // //     // Listen for messages from HR unit
// // // //     ws.on('message', (message) => {
// // // //       // Handle HR unit's messages
// // // //       console.log(`Received HR message: ${message}`);
// // // //     });
// // // //   // Handle errors on WebSocket connection
// // // //   ws.on('error', (error) => {
// // // //     console.error('WebSocket error:', error);
// // // //   });

// // // //     // Handle disconnection
// // // //     ws.on('close', () => {
// // // //       console.log('HR unit disconnected.');
// // // //       hrClients.delete(ws); // Remove the client from the HR set
// // // //     });
// // // //   } else if (isSecurityNamespace) {
// // // //     console.log('Security unit connected.');

// // // //     // Listen for messages from security unit
// // // //     ws.on('message', (message) => {
// // // //       // Handle security unit's messages
// // // //       console.log(`Received security message: ${message}`);
// // // //     });
// // // // // Handle errors on WebSocket connection
// // // // ws.on('error', (error) => {
// // // //   console.error('WebSocket error:', error);
// // // // });
// // // //     // Handle disconnection
// // // //     ws.on('close', () => {
// // // //       console.log('Security unit disconnected.');
// // // //       securityClients.delete(ws); // Remove the client from the security set
// // // //     });
// // // //   }
// // // // });




// // // // function formatTime(hours, minutes) {
// // // //   // Convert hours to 12-hour format and determine AM/PM
// // // //   const ampm = hours >= 12 ? 'pm' : 'am';
// // // //   const formattedHours = hours % 12 || 12; // Convert 0 to 12 for midnight

// // // //   // Pad minutes with leading zero if needed
// // // //   const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

// // // //   // Get the current date for the month and year
// // // //   const currentDate = new Date();
// // // //   const month = currentDate.getMonth() + 1; // Month is zero-indexed
// // // //   const year = currentDate.getFullYear().toString().slice(-2);

// // // //   // Format the date in MM/DD/YY format
// // // //   const formattedDate = `${month}/${formattedHours}/${year}`;

// // // //   // Combine the formatted time and date
// // // //   const formattedTime = `${formattedHours}:${formattedMinutes}${ampm} ${formattedDate}`;

// // // //   return formattedTime;
// // // // }


// // // // // Hardcoded group ID
// // // // //const groupId = '120363194020948049@g.us';
// // // // // const groupId = groupID;
// // // // ////////////////////////////////////////////////////////////////////////
// // // // let userName;
// // // // app.post('/receive_driver_details', async function (req, res) {
// // // //   const driverDetails = {
// // // //     driver_name: req.body.driver_name,
// // // //     armed_guard: req.body.armed_guard,
// // // //     target_location: req.body.target_location,
// // // //     passenger: req.body.passenger,
// // // //     time_out: req.body.time_out,
// // // //     vehicle_number: req.body.vehicle_number,
// // // //     pick_up: req.body.pick_up,
// // // //   };
// // // //   const code = req.generatedCode;

// // // //   try {
// // // //     // Connect to the MongoDB client
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     const kaydata = database.collection('drivers_details');

// // // //     // Save the driver details to the database
// // // //     const result = await kaydata.insertOne(driverDetails);

// // // //     // Fetch the driver's phone number from the drivers_parameters database
// // // //     const driversParameters = database.collection('drivers_parameters');

// // // //     // Use driverDetails.driver_name instead of driver_name
// // // //     const driverRecord = await driversParameters.findOne({ driver_name: driverDetails.driver_name });
// // // //     // const securityManagerRecord = await expatriatesCollection.findOne({ name: securityManagerName });
// // // //     const expatriatesCollection = database.collection('expatriates_collection'); // Define expatriatesCollection
// // // //     // const securityManagerRecord = await expatriatesCollection.findOne({ name: { $regex: new RegExp("^Vitor Leite$", "i") } });
// // // //     // const securityManagerRecord = await expatriatesCollection.findOne({ name: { $regex: new RegExp("^Vitor Leite$", "i") } });
// // // //     const securityManagerRecord = manager.phoneNumber
// // // //     const expatriateName = req.body.passenger;
 

// // // //     // Assuming expatriateName has a format like "Daniel Abang - Unit: Procurement - and 1 other(s)"
// // // //     const expatriateNameParts = req.body.passenger.split('-')[0].trim().split(' ');
// // // //     const cleanedExpatriateName = expatriateNameParts.slice(0, 2).join(' ');

// // // //     // Define your condition using the cleanedExpatriateName
// // // //     const expatriateCondition = { name: { $regex: new RegExp(`^${cleanedExpatriateName}$`, "i") } };

// // // //     // Fetch the expatriate record
// // // //     const movingExpatriateRecord = await expatriatesCollection.findOne(expatriateCondition);
// // // //     console.log("Moving Expatriate Record:", movingExpatriateRecord);



// // // //     // Access the number of expatriates (assuming there's a field named 'number' in the collection)
// // // //     //  console.log(`Number of expatriates for ${expatriateName}: ${numberOfExpatriates}`);
// // // //     const timeOut = new Date(req.body.time_out);
// // // //     const currentTime = new Date();
// // // //     const timeDifferenceInMinutes = Math.floor((timeOut - currentTime) / (1000 * 60));


// // // //  // Assuming the escort commander's data has a tag 'EscortCommander' in the database
// // // //  const escorts_data= database.collection('escorts');
// // // //  const escortCommanderRecord = await escorts_data.findOne({ designation: "EscortCommander" });
// // // //  const escortCommanderName = `Mr ${escortCommanderRecord.firstName}`;


// //  //////////////////////////////////////////////////////////////////////////////////////////////


// // // console.log("This is the new custom ID 1111:", req.generatedCode);

// // // if (!req.session.userName) {
// // //   // const code = req.generatedCode;

// // //   console.log("Custom ID from the request:", code);

// // //   if (code) {
// // //     const userIdCollection = database.collection('user_id_collection');
// // //     const userMapping = await userIdCollection.findOne({ customId: code });

// // //     if (!userMapping) {
// // //       console.log('User not found in user_id_collection.');
// // //       return res.status(404).send('User not found.');
// // //     }

// // //     const phoneNumber = userMapping.phoneNumber;

// // //     const userCollection = database.collection('registered_user_config_database');
// // //     const user = await userCollection.findOne({ phoneNumber });

// // //     console.log('Received userMapping:', userMapping);

// // //     if (!user) {
// // //       console.log('User not found in registered_user_config_database.');
// // //       return res.status(404).send('User not found.');
// // //     }

// // //     // Save the username in the session
// // //     req.session.userName = user.name;
// // //     console.log('Saved UserName:', req.session.userName);
// // //   } else {
// // //     console.log('CustomId not provided.');
// // //     return res.status(404).json({ message: 'CustomId not provided' });
// // //       }
// // //     } else {
// // //       console.log('Username already in the session:', req.session.userName);
// // //     }

// // // console.log(req.session.userName);

// // //  userName = req.session.userName 


// // //     // Notify security unit with a message
// // //     for (const securityClient of securityClients) {
// // //       securityClient.send('HR unit has a new message');
// // //     }

// // //     // Get driver details for WhatsApp messages
// // //     const { driver_name, target_location, time_out, vehicle_number } = driverDetails;
// // //     // const expatriateMessage = `${driver_name}: "You have been assigned to take ${req.body.passenger}to ${target_location} by ${time_out}. Find below your passcode and password for gate permit."`;

// // //     // Use the formatTime function to get the formatted time
// // //     const formattedTimeOut = formatTime(new Date(time_out).getHours(), new Date(time_out).getMinutes());


// // //     let expatriateMessage = `Dear ${driver_name},

// // // You are assigned to transport ${req.body.passenger} from ${req.body.pick_up} to ${target_location} by ${formattedTimeOut}.`;

// // //     // Check if there is at least one escort
// // //     if (req.body.armed_guard > 0) {
// // //       expatriateMessage += `\n\n${req.body.armed_guard === 1 ? "An armed escort has" : `${req.body.armed_guard} armed escort has`} been assigned to you for the trip.`;
// // //     } else {
// // //       expatriateMessage += `\n\nYou will NOT need an armed escort for the movement.`;
// // //     }

// // //     // Include the vehicle information
// // //     expatriateMessage += `\n\nThe assigned vehicle for this journey is ${vehicle_number}.`;

// // //     expatriateMessage += `\n\nKindly check your dedicated WhatsApp line for your unique passcode and password. Your access gate pass has been sent to the security unit.

// // // Thank you.
// // // ---
// // // *Summary of Movement:*
// // // *Driver:* ${driver_name}
// // // *Destination:* ${target_location}
// // // *Time:* ${formattedTimeOut}
// // // *Pickup:* ${req.body.pick_up}
// // // *Passenger:* ${req.body.passenger}
// // // *Escort:* ${req.body.armed_guard}
// // // *Password:* _Sent to your phone._
// // // *Gate Pass:* _Sent to Security Unit._
// // // `;

// // // //     // // Remove leading space before "you"
// // // //     // expatriateMessage = expatriateMessage.replace(/^ {2}/gm, '');

// // // //     // console.log(expatriateMessage);


// // // //     // const securityManagerMessage = `Security Manager: ${JSON.stringify(driverDetails)}`;

// // //     const securityUnitMessage = `
// // // *SECURITY UNIT*
    
// // // Kindly grant access for the movement with the followings:
          
// // // *Driver Name:* ${req.body.driver_name}
// // // *Vehicle Number:* ${vehicle_number}
// // // *Destination:* ${target_location} 
// // // *Passengers:* ${req.body.passenger}
    
// // // *Note* The gate pass for the movement has been sent to the security portal.
          
// // // Thank you.
// // //         `;



// // //     const today = new Date();
// // //     const formattedToday = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

// // //     const securityManagerMessage =
// // //       `*EXPATRIATES MOVEMENT UPDATE*

// // // *Date:* ${formattedToday}

// // // *Name of Expatriate:* ${req.body.passenger}

// // // *Destination:* ${target_location}

// // // *Time Out:* ${formattedTimeOut}

// // // *Time in:* NA

// // // *Escort:* ${req.body.armed_guard}
// // //     `;

// // //     console.log(securityManagerMessage);


// // //     // const expatriateNotification = `Expatriate: Your movement to ${target_location} has been scheduled for ${time_out}, the pilot's number is ${vehicle_number}, thanks`;



// // //     const tripDescription = timeDifferenceInMinutes < 1
// // //     ? `your trip to ${target_location} has been scheduled for ${formattedTimeOut}.`
// // //       // ? `your trip to ${target_location} has been scheduled for ${formattedTimeOut} (${formattedToday}).`
// // //       : `Your trip with ${req.body.passenger.split('-')[2].trim().replace('and', '').trim()}, to ${target_location} has been scheduled for ${formattedTimeOut} (${formattedToday}).
// // // This will be in ${timeDifferenceInMinutes === 1 ? '1 minute' : `${timeDifferenceInMinutes} minutes`}.`;

// // //     const expatriateNotification = `
// // // Dear ${req.body.passenger.split('-')[0].trim()},

// // // ${tripDescription}

// // // Your driver is ${req.body.driver_name} (Phone: ${cleanAndFormatPhoneNumber(driverRecord.driverPhone)}), 
// // // and the vehicle's number is ${vehicle_number}.

// // // Have a safe trip and maintain situation awareness.

// // // Regards!
// // // `;

// // // //     // const escortMessage = `Escort: You have been assigned to escort ${req.body.passenger.split('-')[2].trim().replace('and', '').trim()}, to ${target_location}, the pilot for the movement is ${driver_name} and the time is ${time_out}. Thank you.`;
// // // //     // const escortMessage = `Dear ${escortCommandee},
// // // //     // Kindly arrange to escort ${expatriateName} to ${targetLocation} by ${formattedTimeOut}, the pilot for the trip is ${driverName}. Thank you.`;
    
// // //     const escortMessage = 
// // //   `Dear ${escortCommanderName},
// // // Kindly arrange to escort ${req.body.passenger.split('-')[0].trim()} and ${req.body.passenger.split('-')[2].trim().replace('and', '').trim()}, to ${target_location} by  ${formattedTimeOut}.
// // // The pilot for the trip is ${req.body.driver_name}, and his phonenumber is ${cleanAndFormatPhoneNumber(driverRecord.driverPhone)}), 
// // // Thank you.`;

  

// // //     const groupId = groupIDData.idNumber; // Replace with your group ID
// // //     const token =  token1Data.idNumber; 
// // //     const sendMessageToGroup2 = async (groupId, message) => {
// // //       try {
// // //         const response = await axios.post(
// // //           'https://gate.whapi.cloud/messages/text',
// // //           {
// // //             to: groupId,
// // //             body: message,
// // //             typing_time: 0,
// // //           },
// // //           {
// // //             headers: {
// // //               Accept: 'application/json',
// // //               'Content-Type': 'application/json',
// // //               Authorization: `Bearer ${token}`,
// // //             },
// // //           }
// // //         );

// // //         console.log('Message sent successfully:', response.data);
// // //       } catch (error) {
// // //         console.error('Error sending message:', error.message);
// // //       }
// // //     };

// // //     // Send messages to the transport group
// // //     if (groupId) {
// // //       sendMessageToGroup2(groupId, expatriateMessage);
// // //     }
// // // ////////////////////////////////////////////////////////////////
// // // const generatePDF = (pdfData, filename, callback) => {
// // //   console.log('Generating PDF...');

// // //   pdf.create(pdfData).toFile(filename, (err, res) => {
// // //     if (err) {
// // //       console.error('Error during PDF generation:', err);
// // //       callback(err);
// // //     } else {
// // //       console.log('PDF generation completed.');
// // //       callback();
// // //     }
// // //   });
// // // };

// // // // const sendMessageToGroup = async (groupId, message, pdfData, pdfFilename) => {
// // // //   try {

// // // //     const pdfResponse = await axios.post(
// // // //       'https://gate.whapi.cloud/messages/document',
// // // //       {
// // // //         to: groupId,
// // // //         media: `data:application/octet-stream;name=${pdfFilename};base64,${pdfData}`,
// // // //       },
// // // //       {
// // // //         headers: {
// // // //           Accept: 'application/json',
// // // //           'Content-Type': 'application/json',
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       }
// // // //     );

// // // //     console.log('PDF file sent successfully:', pdfResponse.data);
// // // //   } catch (error) {
// // // //     console.error('Error sending message and PDF:', error.message);
// // // //   }
// // // // };

// // // // const downloadsFolderPath = "C:\\Users\\Administrator\\Downloads";
// // // // const formattedDate = formattedToday ;
// // // // const uniqueFilename = `M.E_Gate_pass_${formattedDate}_${driver_name}_${target_location}.pdf`;
// // // // const pdfPath = path.join(downloadsFolderPath, uniqueFilename);

// // // // const signatureImagePath = 'C:/Users/Administrator/OneDrive/Desktop/Development tools/playground/backupVisitor-Movement Management/Visitor-Movement Management6/assets/signature1.png';

// // // //     const gatePassHTML = `
// // // //     <!DOCTYPE html>
// // // //     <html lang="en">
// // // //     <head>
// // // //         <meta charset="UTF-8">
// // // //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
// // // //         <title>Gate Pass</title>
// // // //         <style>
// // // //         @page {
// // // //           size: landscape;
// // // //       }

// // // //             /* Add your CSS styles for the gate pass here */
// // // //             body {
// // // //                 font-family: Calibri, sans-serif;
              
// // // //                 margin: 0;
// // // //                 padding: 0;
// // // //             }
    
// // // //             .container_gatePass {
// // // //                 border: 2px solid #000;
// // // //                 padding: 20px;
// // // //                 margin: 20px;
// // // //             }
    
// // // //             .header {
// // // //                 text-align: center;
// // // //                 margin-bottom: 20px;
// // // //             }
    
// // // //             .red-seal {
// // // //                 position: absolute;
// // // //                 bottom: 50px;
// // // //                 right: 50px;
// // // //                 width: 150px;
// // // //                 height: 150px;
// // // //                 background-color: red;
// // // //                 border-radius: 50%;
// // // //                 border: 3px solid #fff;
// // // //                 text-align: center;
// // // //                 display: flex;
// // // //                 align-items: center;
// // // //                 justify-content: center;
// // // //                 clip-path: polygon(
// // // //                     50% 0%,
// // // //                     61.8% 35.4%,
// // // //                     68.6% 57.3%,
// // // //                     79.1% 91%,
// // // //                     50% 70.1%,
// // // //                     20.9% 91%,
// // // //                     31.4% 57.3%,
// // // //                     38.2% 35.4%
// // // //                 );
// // // //                 transform: rotate(-45deg);
// // // //             }
    
// // // //             .seal-text {
// // // //               color: white;
// // // //               font-weight: bold;
// // // //               text-transform: uppercase;
// // // //               font-size: 10px;
// // // //               position: absolute;
// // // //               top: 70px; /* Adjust this value to move the text down */
// // // //               left: 30%;
// // // //               transform: translateX(-50%) rotate(45deg); /* Rotate the text by 45 degrees */
// // // //           }
// // // //             table {
// // // //                 width: 100%;
// // // //                 border-collapse: collapse;
// // // //             }
    
// // // //             table, th, td {
// // // //                 border: 1px solid #000;
// // // //             }
    
// // // //             th, td {
// // // //                 padding: 10px;
// // // //                 text-align: left;
// // // //                 font-size: 16px;
// // // //             }
    
 
// // // //         </style>
// // // //     </head>
// // // //     <body>
// // // //     <div class="logo-container">
// // // //     <main>
// // // //       <!-- Your SVG content here -->
// // // //       <svg xmlns="http://www.w3.org/2000/svg" height="200" width="400" version="1.0" viewBox="-14.709615 -11.98125 127.48333 71.8875">
// // // //           <defs>
// // // //               <!-- Define the clip path -->
// // // //               <clipPath id="a">
// // // //                   <path d="M0 841.89h1785.827V0H0z"/>
// // // //               </clipPath>
// // // //           </defs>
// // // //              <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 -1155.7275 543.7908)">
// // // //               <path d="M924.582 415.8627h19.169v-19.17h-19.169z" fill="#f7a30a" fill-rule="evenodd"/>
// // // //               <path d="M943.751 435.0327h19.17v-19.169h-19.17z" fill="#005ec4" fill-rule="evenodd"/>
// // // //               <path d="M942.4095 435.0324h1.342v-19.169h-19.169v1.341h17.827zm1.3418-19.1694h19.17v-1.342h-17.827v-17.828h-1.343v17.828z" fill="#231f20"/>
// // // //               <path d="M956.972 409.0544h-.851c-.916-1.695-1.841-3.4-2.767-5.196-.832 1.796-1.674 3.501-2.516 5.196h-.972v-6.381h.748v5.195h.019c.252-.837 1.608-3.564 2.42-5.195h.366c.879 1.631 2.365 4.448 2.627 5.195h.019v-5.195h.907zm4.5322-5.9629c-1.691 0-2.271 1.523-2.271 2.771 0 1.196.654 2.553 2.271 2.553 1.618 0 2.272-1.357 2.272-2.553 0-1.248-.579-2.771-2.272-2.771m0-.637c2.021 0 3.273 1.504 3.273 3.408 0 1.788-1.383 3.192-3.273 3.192-1.889 0-3.271-1.404-3.271-3.192 0-1.904 1.251-3.408 3.271-3.408m19.9776 6.5969l-4.021.003v-6.385h4.426v.639l-3.511.002v2.052h3.058v.637h-3.058v2.414h3.106zm7.1982 0h-.752v-5.087h-.019c-.444.638-2.876 3.428-4.329 5.087h-.679v-6.382h.755v5.078h.018c.397-.555 2.858-3.418 4.29-5.078h.716zm5.9082-3.5732v-2.16c-.367-.174-.783-.229-1.339-.229-1.432 0-2.573 1.084-2.573 2.699 0 1.495.961 2.626 2.677 2.626.725 0 1.329-.247 1.725-.511l.377.528c-.396.319-1.15.62-2.111.62-2.377 0-3.678-1.668-3.678-3.282 0-1.75 1.207-3.318 3.555-3.318.839 0 1.64.21 2.282.428v2.599zm3.2888 3.5735h-.914v-6.382h.914zm1.4983-6.3821h3.658v.639h-2.744v5.743h-.914zm-31.3632.0039v5.742l2.139.001v.638h-5.297v-.639h2.203v-5.742z" fill="#333333" fill-rule="evenodd"/>
// // // //               <path d="M972.3656 409.0544l-2.607-6.381h.974l.945 2.689.225.639.671 1.91 1.987-5.238h1.102l-2.568 6.381z" fill="#333333"/>
// // // //               <path d="M972.2015 405.362h4.695V406h-4.466z" fill="#333333" fill-rule="evenodd"/>
// // // //             </g>
// // // //       </svg>
// // // //   </main>
// // // // </div>

// // // //      </div>
// // // //      <div class="container_gatePass ">
// // // //         <div class="header">
// // // //         <div style="color: #333333; font-weight: bold; font-size: 24px; font-family: Arial, sans-serif;">Gate Pass</div>
// // // //     </div>
    
// // // //             <!-- Table for Gate Pass Data -->
// // // //             <table>
// // // //                 <tr>
// // // //                     <th>Driver's Name</th>
// // // //                     <td>${driver_name}</td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                     <th>Destination</th>
// // // //                     <td>${target_location}</td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                 <th>Date</th>
// // // //                 <td>${formattedDate}</td>
// // // //             </tr>
          
// // // //             <tr>
// // // //                 <th>Armed Guard</th>
// // // //                 <td>${req.body.armed_guard}</td>
// // // //             </tr>
// // // //             <tr>
// // // //                 <th>Passenger</th>
// // // //                 <td>${req.body.passenger}</td>
// // // //             </tr>
// // // //             <tr>
// // // //                 <th>Destination</th>
// // // //                 <td>${target_location}</td>
// // // //             </tr>
// // // //             <tr>
// // // //                 <th>Vehicle Number</th>
// // // //                 <td>${vehicle_number}</td>
// // // //             </tr>
         
// // // //             <tr>
// // // //                 <th>HR Authorization</th>
// // // //               <td>${userName}</td>
// // // //             </tr
            
           
// // // //             <tr>
// // // //             <th>Authorizer's Signature</th>
// // // //             <td><img src="file:///C:/Users/Administrator/OneDrive/Desktop/Development tools/playground/backupVisitor-Movement Management/Visitor-Movement Management6/assets/signature1.png" alt="Authorizer's Signature" /></td>
// // // //           </tr>

// // // //     <div class="red-seal">
// // // //                 <div class="seal-text">Authorized</div>
// // // //             </div>
// // // //             </tr
// // // //         </table>
// // // //     </div>
// // // // </body>
// // // // </html>
// // // // `;


// // // // generatePDF(gatePassHTML, pdfPath, (error) => {
// // // //   if (error) {
// // // //     console.error('PDF generation failed:', error);
// // // //   } else {
// // // //     const pdfData = fs.readFileSync(pdfPath, { encoding: 'base64' });

// // // //     // Send message with PDF only (no additional descriptive message)
// // // //     sendMessageToGroup(groupId, '', pdfData, uniqueFilename);
// // // //   }
// // // // });

// // // // //////////////////////////////////////////////////////////////////////////////////
// // // //     //send to driver
// // // //     const sendMessageToNumber = async (phoneNumber, message, callback) => {
// // // //       try {
// // // //         const response = await axios.post(
// // // //           'https://gate.whapi.cloud/messages/text',
// // // //           {
// // // //             to: `${phoneNumber}@s.whatsapp.net`,
// // // //             body: message,
// // // //             typing_time: 0,
// // // //           },
// // // //           {
// // // //             headers: {
// // // //               Accept: 'application/json',
// // // //               'Content-Type': 'application/json',
// // // //               Authorization: `Bearer ${token}`,
// // // //             },
// // // //           }
// // // //         );

// // // //         console.log(`Message sent to ${phoneNumber} successfully:`, response.data);
// // // //         if (callback) {
// // // //           callback(null, response.data);
// // // //         }
// // // //       } catch (error) {
// // // //         console.error(`Error sending message to ${phoneNumber}:`, error.message);
// // // //         if (callback) {
// // // //           callback(error, null);
// // // //         }
// // // //       }
// // // //     };

// // // //     // Example of using the callback
// // // //     if (driverRecord) {
// // // //       const driverPhoneNumber = cleanAndFormatPhoneNumber(driverRecord.driverPhone);

// // // //       // const driverMessage = `Hi ${driverDetails.driver_name},\n\n${expatriateMessage}`;
// // // //       const driverMessage = `${expatriateMessage}`;
// // // //       sendMessageToNumber(driverPhoneNumber, driverMessage, (error, responseData) => {
// // // //         if (error) {
// // // //           console.error('Error occurred:', error);
// // // //         } else {
// // // //           console.log('Driver message sent successfully.', responseData);
// // // //         }
// // // //       });
// // // //     } else {
// // // //       console.error('Driver record not found.');
// // // //     }


// // // // /////////////////////////////////////////////////////////////////
// // // // const newsecurityManagerNumber = manager.phoneNumber
// // // //     /////Send to manager
// // // //     const sendMessageToManager = async (newsecurityManagerNumber, message, callback) => {
// // // //       try {
// // // //         const response = await axios.post(
// // // //           'https://gate.whapi.cloud/messages/text',
// // // //           {
// // // //             // to: `${securityManagerNumber}@s.whatsapp.net`,
// // // //             to: `${newsecurityManagerNumber}@s.whatsapp.net`,
            
// // // //             body: message,
// // // //             typing_time: 0,
// // // //           },
// // // //           {
// // // //             headers: {
// // // //               Accept: 'application/json',
// // // //               'Content-Type': 'application/json',
// // // //               Authorization: `Bearer ${token}`,
// // // //             },
// // // //           }
// // // //         );

// // // //         console.log(`Message sent to ${newsecurityManagerNumber} successfully:`, response.data);
// // // //         if (callback) {
// // // //           callback(null, response.data);
// // // //         }
// // // //       } catch (error) {
// // // //         console.error(`Error sending message to ${newsecurityManagerNumber}:`, error.message);
// // // //         if (callback) {
// // // //           callback(error, null);
// // // //         }
// // // //       }
// // // //     };

// // // //     if (newsecurityManagerNumber) {

// // // //       const newsecurityManagerNumber= manager.phoneNumber;

// // // //       sendMessageToManager(newsecurityManagerNumber, securityManagerMessage, (error, responseData) => {
// // // //         if (error) {
// // // //           console.error('Error occurred:', error);
// // // //         } else {
// // // //           console.log('Driver message sent successfully.', responseData);
// // // //         }
// // // //       });
// // // //     } else {
// // // //       console.error('Driver record not found.');
// // // //     }

  
// // // //     ////////////////send to expatriate
// // // //     const send_moving_expatriate = async (movingExpatriatePhoneNumber, message, callback) => {
// // // //       try {
// // // //         const response = await axios.post(
// // // //           'https://gate.whapi.cloud/messages/text',
// // // //           {
// // // //             to: `${movingExpatriatePhoneNumber}@s.whatsapp.net`,
// // // //             body: message,
// // // //             typing_time: 0,
// // // //           },
// // // //           {
// // // //             headers: {
// // // //               Accept: 'application/json',
// // // //               'Content-Type': 'application/json',
// // // //               Authorization: `Bearer ${token}`,
// // // //             },
// // // //           }
// // // //         );

// // // //         console.log(`Message sent to ${movingExpatriatePhoneNumber} successfully:`, response.data);
// // // //         if (callback) {
// // // //           callback(null, response.data);
// // // //         }
// // // //       } catch (error) {
// // // //         console.error(`Error sending message to ${movingExpatriatePhoneNumber}:`, error.message);
// // // //         if (callback) {
// // // //           callback(error, null);
// // // //         }
// // // //       }
// // // //     };



// // // //     if (movingExpatriateRecord) {
// // // //       // Use the phoneNumber field from the expatriate record
// // // //       const movingExpatriatePhoneNumber = cleanAndFormatPhoneNumber(movingExpatriateRecord.phoneNumber);
// // // //       console.log('Moving Expatriate Phone Number:', movingExpatriatePhoneNumber);

// // // //       // Notify the expatriate
// // // //       send_moving_expatriate(movingExpatriatePhoneNumber, expatriateNotification, (error, responseData) => {
// // // //         if (error) {
// // // //           console.error('Error occurred while sending expatriate message:', error);
// // // //           res.status(500).send(`Error sending expatriate message: ${error.message}`);
// // // //         } else {
// // // //           console.log('Expatriate message sent successfully.', responseData);
// // // //         }
// // // //       });
// // // //     } else {
// // // //       console.log('Moving expatriate record not found.');
// // // //       // Handle the case where there is no movingExpatriateRecord, e.g., send an error response
// // // //       res.status(404).send('Moving expatriate record not found.');
// // // //     }

// // // // //     ... (rest of your code)

// // // // //   } catch (error) {
// // // // //     console.error('Error occurred:', error);
// // // // //     res.status(500).send(`An error occurred while uploading visitor details: ${error.message}`);
// // // // //   } finally {
// // // // //     await client.close();
// // // // //   }
// // // // // })
// // // // ////////////////////send to security unit/////////////////////////////////////////////////

// // // //   // const security_unit_n="2349010400099" 
// // // //   const security_unit_n = supervisor.phoneNumber

// // // //       const token2 = token; // Replace with your actual token
// // // //       // const token2 = 'notWeiRdf4mmY2CWf1Lk1Iz1W7hysaCX'; // Replace with your actual token
// // // //       const sendMessageToSecurity_unit = async (security_unit_n, message) => {
// // // //         try {
// // // //           const response = await axios.post(
// // // //             'https://gate.whapi.cloud/messages/text',
// // // //             {
// // // //               to: security_unit_n,
// // // //               body: message,
// // // //               typing_time: 0,
// // // //             },
// // // //             {
// // // //               headers: {
// // // //                 Accept: 'application/json',
// // // //                 'Content-Type': 'application/json',
// // // //                 Authorization: `Bearer ${token2}`,
// // // //               },
// // // //             }
// // // //           );
  
// // // //           console.log('Message sent successfully:', response.data);
// // // //         } catch (error) {
// // // //           console.error('Error sending message:', error.message);
// // // //         }
// // // //       };
  
// // // //       // Send messages to the transport group
// // // //       if (security_unit_n) {
// // // //         sendMessageToSecurity_unit(security_unit_n, securityUnitMessage);
// // // //       }
  

// // // // //////////////////////////////////////////////////////////////////////////////
// // // // /////Send to Escort Commander
// // // // ////////////////send to expatriate
// // // // const send_to_escort= async (escort_commander_phone_number, message, callback) => {
// // // //   try {
// // // //     const response = await axios.post(
// // // //       'https://gate.whapi.cloud/messages/text',
// // // //       {
// // // //         to: `${escort_commander_phone_number}@s.whatsapp.net`,
// // // //         body: message,
// // // //         typing_time: 0,
// // // //       },
// // // //       {
// // // //         headers: {
// // // //           Accept: 'application/json',
// // // //           'Content-Type': 'application/json',
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       }
// // // //     );

// // // //     console.log(`Message sent to ${escort_commander_phone_number} successfully:`, response.data);
// // // //     if (callback) {
// // // //       callback(null, response.data);
// // // //     }
// // // //   } catch (error) {
// // // //     console.error(`Error sending message to ${escort_commander_phone_number}:`, error.message);
// // // //     if (callback) {
// // // //       callback(error, null);
// // // //     }
// // // //   }
// // // // };




// // // // // Add the escort commander's phone number to the driverDetails object
// // // // if (escortCommanderRecord) {

// // // //   const  escort_commander_phone_number = cleanAndFormatPhoneNumber(escortCommanderRecord.phoneNumber);
// // // //   console.log('Escort commander Phone Number:', escort_commander_phone_number);

// // // //   // Notify the expatriate
// // // //   send_to_escort(escort_commander_phone_number, escortMessage , (error, responseData) => {
// // // //     if (error) {
// // // //       console.error('Error occurred while sending escortMessage:', error);
// // // //       res.status(500).send(`Error sending escortMessage: ${error.message}`);
// // // //     } else {
// // // //       console.log('escort message sent successfully.', responseData);
// // // //     }
// // // //   });
// // // // } else {
// // // //   console.log('escortcommander record not found.');
// // // //   // Handle the case where there is no movingExpatriateRecord, e.g., send an error response
// // // //   res.status(404).send('escortcommander record not found.');
// // // // }

// // // // } catch (error) {
// // // //   console.error('Error occurred:', error);
// // // //   res.status(500).send(`An error occurred while uploading visitor details: ${error.message}`);


// // // // } finally {
// // // //   await client.close();
// // // // }
// // // // })

// // // // // ////////////////////pdf//////////////////////////////////////////////////////////////


// // // // //////////////////////////////////////////////////////////////
// // // // app.post('/receive_gate_pass', async function (req, res) {
// // // //   const gatePassTicket = req.body;

// // // //   try {
// // // //     await client.connect(); // Connect to the MongoDB client
// // // //     const database = client.db('olukayode_sage');
// // // //     const kaydata = database.collection('drivers_details');

// // // //     // Generate the gate pass ticket from the previously sent driver data
// // // //     const driverData = await collection.findOne({ _id: gatePassTicket.driverId });
// // // //     const generatedTicket = generateGatePassTicket(driverData);

// // // //     // Save the gate pass ticket to the database
// // // //     const result = await collection.insertOne(generatedTicket);

// // // //     // Generate the ticket in PDF format
// // // //     const ticketPath = await generateTicketPDF(generatedTicket);

// // // //     res.send('Gate pass ticket received successfully');
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while receiving gate pass ticket');
// // // //   } finally {
// // // //     await client.close(); // Close the MongoDB client connection
// // // //   }
// // // // });

// // // // // Helper function to generate gate pass ticket from driver data
// // // // function generateGatePassTicket(driverData) {
// // // //   // Generate the ticket using driver data
// // // //   const gatePassTicket = {
// // // //     driverName: driverData.name,
// // // //     vehicleDetails: driverData.vehicleDetails,
// // // //     accessAuthorization: 'Authorized', // Set the access authorization status
// // // //     // Include additional ticket information
// // // //     // ...
// // // //   };

// // // //   // Return the generated ticket object
// // // //   return gatePassTicket;
// // // // }

// // // // // Helper function to generate the gate pass ticket in PDF format
// // // // function generateTicketPDF(ticketData) {
// // // //   return new Promise((resolve, reject) => {
// // // //     const doc = new PDFDocument();

// // // //     // Set the PDF document properties
// // // //     doc.info.Title = 'Gate Pass Ticket';
// // // //     doc.info.Author = 'Your Company';

// // // //     // Create the PDF content
// // // //     doc.font('Helvetica-Bold').fontSize(14).text('Gate Pass Ticket', { align: 'center' });
// // // //     doc.moveDown();
// // // //     doc.font('Helvetica').fontSize(12).text(`Driver Name: ${ticketData.driverName}`);
// // // //     doc.moveDown();
// // // //     doc.font('Helvetica').fontSize(12).text(`Vehicle Details: ${ticketData.vehicleDetails}`);
// // // //     doc.moveDown();
// // // //     doc.font('Helvetica').fontSize(12).text(`Access Authorization: ${ticketData.accessAuthorization}`);
// // // //     // Include additional ticket information
// // // //     // ...

// // // //     // Generate the ticket file
// // // //     const ticketPath = 'gate_pass_ticket.pdf';
// // // //     const stream = fs.createWriteStream(ticketPath);
// // // //     doc.pipe(stream);
// // // //     doc.end();

// // // //     stream.on('finish', () => {
// // // //       resolve(ticketPath);
// // // //     });

// // // //     stream.on('error', (error) => {
// // // //       reject(error);
// // // //     });
// // // //   });
// // // // }


// // // // app.delete('/deleteDriver/:id', async function (req, res) {
// // // //   const driverId = req.params.id;

// // // //   try {
// // // //     const client = new MongoClient(uri);
// // // //     await client.connect();

// // // //     const database = client.db('olukayode_sage');
// // // //     const driversCollection = database.collection('drivers_details');
// // // //     const driversHistoryCollection = database.collection('drivershistory');

// // // //     // Find the driver data by ID
// // // //     const driver = await driversCollection.findOne({ _id: new ObjectId(driverId) });

// // // //     if (!driver) {
// // // //       res.status(404).json({ message: 'Driver not found' });
// // // //       return;
// // // //     }

// // // //     // Delete the driver data from the drivers collection
// // // //     const deleteResult = await driversCollection.deleteOne({ _id: new ObjectId(driverId) });

// // // //     if (deleteResult.deletedCount === 0) {
// // // //       res.status(404).json({ message: 'Driver not found in the drivers collection' });
// // // //       return;
// // // //     }

// // // //     res.status(200).json({ message: 'Driver deleted successfully', _id: driverId });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while deleting the driver');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });

// // // // app.post('/addDriverToHistory', async function (req, res) {
// // // //   const driverData = req.body;

// // // //   try {
// // // //     const client = new MongoClient(uri);
// // // //     await client.connect();

// // // //     const database = client.db('olukayode_sage');
// // // //     const driversHistoryCollection = database.collection('drivershistory');

// // // //     // Insert the driver data into the drivers history collection
// // // //     const result = await driversHistoryCollection.insertOne(driverData);
// // // //     console.log('Driver added to history:', result);

// // // //     res.status(200).json({ message: 'Driver added to history' });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while adding the driver to history');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });


// // // // // Security guard portal: Return driver
// // // // app.post('/return_driver/:driverId', async function (req, res) {
// // // //   const driverId = req.params.driverId;

// // // //   try {
// // // //     await client.connect(); // Connect to the MongoDB client
// // // //     const database = client.db('olukayode_sage');
// // // //     const kaydata = database.collection('olukayode_collection');

// // // //     // Mark the driver as returned in the database
// // // //     const result = await collection.updateOne(
// // // //       { _id: driverId },
// // // //       { $set: { returned: true } }
// // // //     );



// // // //     res.send('Driver returned successfully');
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while returning driver');
// // // //   } finally {
// // // //     await client.close(); // Close the MongoDB client connection
// // // //   }
// // // // });


// // // // app.get('/get_visitor_history', async function (req, res) {
// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     // const collection = database.collection('olukayode_collection');
// // // //     const collection = database.collection('Visitorshistory');
// // // //     const visithistory = await collection.find({}).toArray();
// // // //     console.log(' History :', visithistory);

// // // //     res.json(visithistory);
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while retrieving History');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // })

// // // // app.post('/send_driver_details', async function (req, res) {
// // // //   const MovementData = req.body; // Assuming the visitor data is sent in the request body

// // // //   try {
// // // //     const client = new MongoClient(uri); // Create a new MongoClient instance

// // // //     // Connect to the MongoDB client
// // // //     await client.connect();

// // // //     const database = client.db('olukayode_sage');
// // // //     const movementCollection = database.collection('Visitors_details_Database');
// // // //     const movementDatas = database.collection('movementData');

// // // //     // Insert the visitor data into the history collection
// // // //     const result = await movementCollection.insertOne(MovementData);
// // // //     console.log('Movement Data:', result);

// // // //     res.status(200).json({ message: 'Visitor added to history and deleted from visitors successfully' });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while adding the visitor to history and deleting from visitors');
// // // //   } finally {
// // // //     await client.close(); // Close the MongoDB client connection
// // // //   }
// // // // });



// // // // // app.post('/addVisitorHistory', async function (req, res) {
// // // // //   const visitorData = req.body; // Assuming the visitor data is sent in the request body

// // // // //   try {
// // // // //     const client = new MongoClient(uri); // Create a new MongoClient instance

// // // // //     // Connect to the MongoDB client
// // // // //     await client.connect();

// // // // //     const database = client.db('olukayode_sage');
// // // // //     const visitorsCollection = database.collection('Visitors_details_Database');
// // // // //     const historyCollection = database.collection('Visitorshistory');

// // // // //     // Check if a similar visitor entry exists in the history collection within the past 15 minutes
// // // // //     const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000); // Get the timestamp 15 minutes ago
// // // // //     const existingEntry = await historyCollection.findOne({
// // // // //       name: visitorData.name,
// // // // //       whomToSee: visitorData.whomToSee,
// // // // //       date: { $gte: fifteenMinutesAgo },
// // // // //     });

// // // // //     if (existingEntry) {
// // // // //       res.status(409).json({ message: 'Visitor already exists in history within the last 15 minutes' });
// // // // //       return;
// // // // //     }

// // // // //     // Insert the visitor data into the history collection
// // // // //     const result = await historyCollection.insertOne(visitorData);
// // // // //     console.log('Visitor added to history:', result);

// // // // //     // Remove the visitor data from the visitors_details collection based on the visitor name
// // // // //     const visitorName = visitorData.name; // Assuming the visitor name is present in visitorData
// // // // //     const deleteResult = await visitorsCollection.deleteOne({ name: visitorName });

// // // // //     if (deleteResult.deletedCount === 0) {
// // // // //       res.status(404).json({ message: 'Visitor not found in the visitors collection' });
// // // // //       return;
// // // // //     }

// // // // //     res.status(200).json({ message: 'Visitor added to history and deleted from visitors successfully', name: visitorName });

// // // // //   } catch (error) {
// // // // //     console.error(error);
// // // // //     res.status(500).send('An error occurred while adding the visitor to history and deleting from visitors');
// // // // //   } finally {
// // // // //     await client.close(); // Close the MongoDB client connection
// // // // //   }
// // // // // });


// // // // app.post('/addVisitorHistory', async function (req, res) {
// // // //   const visitorData = req.body; // Assuming the visitor data is sent in the request body

// // // //   try {
// // // //     const client = new MongoClient(uri); // Create a new MongoClient instance

// // // //     // Connect to the MongoDB client
// // // //     await client.connect();

// // // //     const database = client.db('olukayode_sage');
// // // //     const visitorsCollection = database.collection('Visitors_details_Database');
// // // //     const historyCollection = database.collection('Visitorshistory');
// // // //     const expatriatesCollection = database.collection('expatriates_collection');

// // // //     // const collection = database.collection('Visitors_details_Database');
   
// // // //     // Check if a similar visitor entry exists in the history collection within the past 15 minutes
// // // //     const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000); // Get the timestamp 15 minutes ago
// // // //     const existingEntry = await historyCollection.findOne({
// // // //       name: visitorData.name,
// // // //       whomToSee: visitorData.whomToSee,
// // // //       date: { $gte: fifteenMinutesAgo },
// // // //     });

// // // //     if (existingEntry) {
// // // //       res.status(409).json({ message: 'Visitor already exists in history within the last 15 minutes' });
// // // //       return;
// // // //     }

// // // //     // Insert the visitor data into the history collection
// // // //     const result = await historyCollection.insertOne(visitorData);
// // // //     console.log('Visitor added to history:', result);

// // // //     // Remove the visitor data from the visitors_details collection based on the visitor name
// // // //     const visitorName = visitorData.name; // Assuming the visitor name is present in visitorData
// // // //     const deleteResult = await visitorsCollection.deleteOne({ name: visitorName });

// // // //     if (deleteResult.deletedCount === 0) {
// // // //       res.status(404).json({ message: 'Visitor not found in the visitors collection' });
// // // //       return;
// // // //     }

// // // //  // Fetch the expatriate document
// // // //       const expatriate = await expatriatesCollection.findOne({
// // // //         name: { $regex: new RegExp(visitorData.whomToSee, 'i') } // Case-insensitive regex match
// // // //       });


// // // //     if (expatriate) {
// // // //       // Extract phone number if name matches at least two words
// // // //       const expatriateNameWords = expatriate.name.split(' ');
// // // //       const visitorWhomToSeeWords = visitorData.whomToSee.split(' ');
  
// // // //       // Count the number of words from the expatriate's name that match the visitor's "whomToSee"
// // // //       const matchedWords = expatriateNameWords.filter(word => visitorWhomToSeeWords.includes(word));
  
// // // //       // Check if at least two words match
// // // //       if (matchedWords.length >= 2) {
// // // //           // Phone number extraction
// // // //           const HostphoneNumber = expatriate.phoneNumber;
// // // //           console.log('Expatriate phone number:', HostphoneNumber);
// // // //     const cleanedHostNumber = cleanPhoneNumber2(HostphoneNumber);
// // // //     console.log('Cleaned host number:', cleanedHostNumber);

// // // //     const arrivalMessage = `Hi ${visitorData.whomToSee}, 
// // // // your guest ${visitorData.name} from ${visitorData.company} is here! 
// // // // He arrived at about ${visitorData.time}. 
// // // // Kindly reach out to the receptionist to meet them.`;

// // // //     // const token2 = "notWeiRdf4mmY2CWf1Lk1Iz1W7hysaCX"; // Replace with your actual token
// // // //     const token2 = process.env.TOKEN;


// // // //     const sendMessageToHost = async (cleanedHostNumber, arrivalMessage) => {
// // // //       try {
// // // //         const response = await axios.post(
// // // //           'https://gate.whapi.cloud/messages/text',
// // // //           {
// // // //             to: cleanedHostNumber,
// // // //             body: arrivalMessage,
// // // //             typing_time: 0,
// // // //           },
// // // //           {
// // // //             headers: {
// // // //               Accept: 'application/json',
// // // //               'Content-Type': 'application/json',
// // // //               Authorization: `Bearer ${token2}`,
// // // //             },
// // // //           }
// // // //         );

// // // //         console.log('Message sent successfully:', response.data);
// // // //       } catch (error) {
// // // //         console.error('Error sending message:', error.message);
// // // //       }
// // // //     };

// // // //     // Send arrival message to the host
// // // //     if (cleanedHostNumber) {
// // // //       sendMessageToHost(cleanedHostNumber, arrivalMessage);
// // // //     }
  
// // // //         }
// // // //       }
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while adding the visitor to history and deleting from visitors');
// // // //   } finally {
// // // //     await client.close(); // Close the MongoDB client connection
// // // //   }
// // // // });




// // // // app.post('/receptionist_newVisitor_entry', (req, res) => {
// // // //   // Handle saving visitor details logic here
// // // //   // Render the "awaiting visitor" page
// // // //   res.render('receptionist_newVisitor_entry.html'); // Replace with your template engine logic
// // // // });



// // // // app.post('/new_visitor', (req, res) => {
// // // //   // Handle saving visitor details logic here
// // // //   // Render the "awaiting visitor" page
// // // //   res.render('new_visitor.html'); // Replace with your template engine logic
// // // // });

// // // // // app.get('/new_visitor', (req, res) => {
// // // // //   res.sendFile(__dirname + '/new_visitor.html');
// // // // // });
// // // // // HR portal: WebSocket connection
// // // // app.get('/hr_portal', (req, res) => {
// // // //   res.sendFile(__dirname + '/hr_portal.html');
// // // // });

// // // // // Security guard portal: WebSocket connection
// // // // app.get('/security_portal', (req, res) => {
// // // //   res.sendFile(__dirname + '/security_portal.html');
// // // // });

// // // // // Handle WebSocket upgrade requests for HR and security portals
// // // // app.on('upgrade', (req, socket, head) => {
// // // //   const pathname = req.url;
// // // //   const isHRPortal = pathname === '/hr_portal';
// // // //   const isSecurityPortal = pathname === '/security_portal';

// // // //   if (isHRPortal) {
// // // //     wss.handleUpgrade(req, socket, head, (ws) => {
// // // //       wss.emit('connection', ws);
// // // //       hrClients.push(ws);
// // // //     });
// // // //   } else if (isSecurityPortal) {
// // // //     wss.handleUpgrade(req, socket, head, (ws) => {
// // // //       wss.emit('connection', ws);
// // // //       securityClients.push(ws);
// // // //     });
// // // //   } else {
// // // //     socket.destroy();
// // // //   }
// // // // });




// // // // app.delete('/delete_visitor_details/:id', async function (req, res) {
// // // //   const visitorId = req.params.id; // Get the visitor's ID from the request parameters

// // // //   try {
// // // //     await client.connect(); // Connect to the MongoDB client
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('Visitors_details_Database');

// // // //     // Delete the visitor details from the database based on the ID
// // // //     const result = await collection.deleteOne({ _id: ObjectId(visitorId) });

// // // //     if (result.deletedCount === 1) {
// // // //       res.send('Visitor details deleted successfully');
// // // //     } else {
// // // //       res.status(404).send('Visitor not found');
// // // //     }
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while deleting visitor details');
// // // //   } finally {
// // // //     await client.close(); // Close the MongoDB client connection
// // // //   }
// // // // });


// // // // app.put('/edit_visitor_details/:id', async function (req, res) {
// // // //   const visitorId = req.params.id; // Get the visitor's ID from the request parameters
// // // //   const updatedVisitorDetails = {
// // // //     // Fields to be updated based on the request body
// // // //     name: req.body.name,
// // // //     address: req.body.address,
// // // //     whomToSee: req.body.whomToSee,
// // // //     purposeOfVisit: req.body.purposeOfVisit,
// // // //     phoneNumber: req.body.phoneNumber
// // // //   };

// // // //   try {
// // // //     await client.connect(); // Connect to the MongoDB client
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('Visitors_details_Database');

// // // //     // Update the visitor details in the database based on the ID
// // // //     const result = await collection.updateOne(
// // // //       { _id: ObjectId(visitorId) },
// // // //       { $set: updatedVisitorDetails }
// // // //     );

// // // //     if (result.matchedCount === 1) {
// // // //       res.send('Visitor details updated successfully');
// // // //     } else {
// // // //       res.status(404).send('Visitor not found');
// // // //     }
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while updating visitor details');
// // // //   } finally {
// // // //     await client.close(); // Close the MongoDB client connection
// // // //   }
// // // // });
// // // // ///////////////////////////////////////////////////////////////////////////////////////////////


// // // // app.post('/add_new_driver', async (req, res) => {
// // // //   const newDriver = {
// // // //     // _id: req.body._id,
// // // //     driver_name: req.body.driver_name,
// // // //     driverPhone: req.body.driverPhone,
// // // //     pAssignee: req.body.pAssignee,
// // // //     driversAddress: req.body.driversAddress,
// // // //     sourceCompany: req.body.sourceCompany,
// // // //     dateofemployment: req.body.dateofemployment,

// // // //   };
// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('drivers_parameters');
// // // //     // Save the new driver details to the database
// // // //     const result = await collection.insertOne(newDriver);

// // // //     // const message = {
// // // //     //   type: 'new_driver_added',
// // // //     //   newDriver,
// // // //     // };
// // // //     // sendSSEMessage('sse_new_driver_added', message);
// // // //     // console.log('Sending SSE message:', message);

// // // //     res.status(201).json({ message: 'New drivers details added successfully' });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while adding new drivers details');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });


// // // // //add new expatriates
// // // // app.post('/add_new_expatriate', async (req, res) => {
// // // //   const newExpatriateDetails = {
// // // //     name: req.body.name,
// // // //     countryOfOrigin: req.body.country_of_origin,
// // // //     phoneNumber: req.body.phone_number,
// // // //     houseAddress: req.body.house_address,
// // // //     unit: req.body.unit,
// // // //   };

// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('expatriates_collection');

// // // //     // Save the new expatriate details to the database
// // // //     const result = await collection.insertOne(newExpatriateDetails);

// // // //     res.status(201).json({ message: 'New expatriate details added successfully' });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while adding new expatriate details');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });


// // // // app.post('/add_new_vehicle', async (req, res) => {
// // // //   const newVehicleDetails = {
// // // //     plate_number: req.body.plate_number,
// // // //     vehicle_brand: req.body.vehicle_brand,
// // // //     vehicle_type: req.body.vehicle_type,
// // // //   };

// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('vehicles_collection');

// // // //     // Save the new vehicle details to the database
// // // //     const result = await collection.insertOne(newVehicleDetails);

// // // //     res.status(201).json({ success: true, message: 'New vehicle details added successfully' });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).json({ success: false, message: 'An error occurred while adding new vehicle details' });
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });


// // // // app.get('/get_vehicle_numbers', async (req, res) => {
// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('vehicles_collection');

// // // //     // Omitting the projection parameter to include all fields
// // // //     const vehicles = await collection.find({}).toArray();

// // // //     res.json({ success: true, vehicleNumbers: vehicles });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).json({ success: false, message: 'An error occurred while retrieving vehicle plate numbers' });
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });



// // // // // // //retrieve expatriates naes;
// // // // // // app.get('/get_expatriate_names', async (req, res) => {
// // // // // //   try {
// // // // // //     await client.connect();
// // // // // //     const database = client.db('olukayode_sage');
// // // // // //     const collection = database.collection('expatriates_collection');

// // // // // //     const expatriates = await collection.find({}, { projection: { _id: 0, name: 1 } }).toArray();

// // // // // //     res.json(expatriates);
// // // // // //   } catch (error) {
// // // // // //     console.error(error);
// // // // // //     res.status(500).send('An error occurred while retrieving expatriate names');
// // // // // //   } finally {
// // // // // //     await client.close();
// // // // // //   }
// // // // // // });

// // // // app.get('/get_expatriate_names', async (req, res) => {
// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('expatriates_collection');

// // // //     // Fetch expatriates data
// // // //     const expatriates = await collection.find({}, { projection: { _id: 1, name: 1, unit: 1, phoneNumber: 1 } }).toArray();

// // // //     // Map expatriates data to options for the dropdown
// // // //     const expatriateOptions = expatriates.map(expatriate => ({
// // // //       _id: expatriate._id.toString(),
// // // //       name: expatriate.name,
// // // //       unit: expatriate.unit,
// // // //       phoneNumber: expatriate.phoneNumber
// // // //     }));

// // // //     res.json(expatriateOptions);
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while retrieving expatriate names');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });

// // // // // //////////////////////////////////////////////////////////

// // // // // Start the server
// // // // app.get('/receive_driver_parameters', async function (req, res) {
// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('drivers_parameters');
// // // //     const drivers_details = await collection.find({}).toArray();
// // // //     console.log('Expected visitors:', drivers_details);
// // // //     res.json(drivers_details);
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while retrieving drivers details');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });

// // // // app.post('/send_driver_parameters', async function (req, res) {
// // // //   const driverDetails = {
// // // //     driver_name: req.body.driver_name,
// // // //     driverPhone: req.body.driverPhone,
// // // //     pAssignee: req.body.pAssignee,
// // // //     driversAddress: req.body.driversAddress,
// // // //     sourceCompany: req.body.sourceCompany,
// // // //     dateofemployment: req.body.dateofemployment,
// // // //   };

// // // //   try {
// // // //     // Connect to the MongoDB client
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     const kaydata = database.collection('drivers_parameters');

// // // //     // Save the driver details to the database
// // // //     const result = await kaydata.insertOne(driverDetails);

// // // //     // Notify HR unit with a message
// // // //     for (const hrClient of hrClients) {
// // // //       hrClient.send('HR unit has a new message');
// // // //     }

// // // //     // Notify security unit with a message
// // // //     for (const securityClient of securityClients) {
// // // //       securityClient.send('HR unit has a new message');
// // // //     }

// // // //     res.send('Driver details sent successfully');
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while receiving driver details');
// // // //   } finally {
// // // //     await client.close(); // Close the MongoDB client connection
// // // //   }
// // // // });



// // // // // Endpoint for adding a new escort to the escort database

// // // // app.post('/add_new_escort', async (req, res) => {
// // // //   const newEscort = {
// // // //     firstName: req.body.firstName,
// // // //     lastName: req.body.lastName,
// // // //     phoneNumber: req.body.phoneNumber,
// // // //     unit: req.body.unit,
// // // //     houseAddress: req.body.houseAddress,
// // // //     rank: req.body.rank,
// // // //     designation: req.body.designation, // Include the new designation field
// // // //   };

// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('escorts');
// // // //     const result = await collection.insertOne(newEscort);

// // // //     res.status(201).json({ message: 'New escort added successfully' });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while adding new escort');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });



// // // // // Add a new endpoint for fetching escorts
// // // // app.get('/fetch_armed_guards', async (req, res) => {
// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('escorts');
// // // //     const escorts = await collection.find().toArray();

// // // //     res.json(escorts);
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while fetching escorts');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });


// // // // const cleanPhoneNumber = (phoneNumber) => {
// // // //   // Remove any non-numeric characters except '+'
// // // //   const cleanedNumber = phoneNumber.replace(/[^\d+]/g, '');

// // // //   // Check if the cleaned number starts with +2340
// // // //   if (cleanedNumber.startsWith('+2340')) {
// // // //     // Remove the "0" after +234
// // // //     return '+234' + cleanedNumber.slice(5);
// // // //   }

// // // //   // Return the cleaned number as is
// // // //   return cleanedNumber;
// // // // };


// // // // // /////////////////////////////////////////////////working no stored id
// // // // app.use(session({ secret: secretKey, resave: true, saveUninitialized: true }));


// // // // // Login endpoint
// // // // app.post('/login', async (req, res) => {
// // // //   const { phoneNumber, password } = req.body;
// // // //   const cleanedPhoneNumber = cleanPhoneNumber(phoneNumber);
// // // //   const code = req.generatedCode;

// // // //   // Use the code in your logic
// // // //   // res.json({ message: 'Using generated code', code });
  
// // // //   try {
// // // //     // Connect to MongoDB
// // // //     await client.connect();

// // // //     const database = client.db('olukayode_sage');
// // // //     const userCollection = database.collection('registered_user_config_database');
// // // //     const configCollection = database.collection('user_config_databse');
// // // //     const userIdCollection = database.collection('user_id_collection');

// // // //     // Find user by phoneNumber instead of cleaned one
// // // //     const user = await userCollection.findOne({ phoneNumber: cleanedPhoneNumber });
// // // //     console.log('Using generated code 1', code)
// // // //     // Check if the user is found
// // // //     if (!user) {
// // // //       res.status(404).json({ message: 'Account not registered. Please register an account.' });
// // // //       return; // Return to avoid further processing
// // // //     }

// // // //     // Ensure that user._id is defined before accessing it
// // // //     if (user._id) {
// // // //         // Use the same customId generation logic as in the middleware
// // // //         const generatedCustomId = code;
// // // //         console.log('Generated CustomId:', generatedCustomId);
      
// // // //         // Save user_id mapping in user_id_collection
// // // //         await userIdCollection.updateOne(
// // // //           { _id: user._id },
// // // //           { $set: { customId: generatedCustomId, phoneNumber: cleanedPhoneNumber } },
// // // //           { upsert: true }
// // // //         );
      

// // // //       // Inside the login endpoint
// // // //       if (await bcrypt.compare(password, user.passwordHash)) {
// // // //         // Store user's unique identifier and name in the session
// // // //         req.session.userId = user._id;
// // // //         req.session.userName = user.name;

// // // //         // Fetch user role from the config collection
// // // //         const config = await configCollection.findOne({ phoneNumber: user.phoneNumber });

// // // //         if (config) {
// // // //           // Passwords match, generate a JWT token
// // // //           const token = jwt.sign(
// // // //             { phoneNumber: user.phoneNumber, role: config.configuredRole },
// // // //             secretKey,
// // // //             { expiresIn: '1h' }
// // // //           );

// // // //           // Redirect based on user role
// // // //           switch (config.configuredRole) {
// // // //             case 'security':
// // // //               res.json({ redirect: '/security_portal.html', token });
// // // //               break;
// // // //             case 'receptionist':
// // // //               res.json({ redirect: '/receptionist.html', token });
// // // //               break;
// // // //             case 'transport':
// // // //               res.json({ redirect: '/transport_unit.html', token });
// // // //               break;
// // // //             // Add more cases for other roles if needed
// // // //             default:
// // // //               res.status(400).json({ message: 'Unknown role' });
// // // //               return;
// // // //           }
// // // //         } else {
// // // //           console.log('User configuration not found.');
// // // //           res.status(400).json({ message: 'User configuration not found' });
// // // //         }
// // // //       } else {
// // // //         // Invalid credentials
// // // //         console.log('Invalid credentials.');
// // // //         res.status(401).json({ message: 'Invalid credentials...' });
// // // //       }
// // // //     } else {
// // // //       console.log('User id not found.');
// // // //       res.status(500).json({ message: 'Internal server error' });
// // // //     }
// // // //   } catch (error) {
// // // //     console.error('Error during login:', error);
// // // //     res.status(500).json({ message: 'Internal server error' });
// // // //   } finally {
// // // //     // Close the MongoDB connection
// // // //     await client.close();
// // // //   }
// // // // });
// // // // // const user = await usersCollection.findOne({ _id: new ObjectId(userId) });
// // // // // Fetch user name endpoint
// // // // // Fetch user name endpoint
// // // // app.post('/registered_user_name', async (req, res) => {
// // // //   const userId = req.session.userId;

// // // //   try {
// // // //     // Connect to MongoDB
// // // //     await client.connect();

// // // //     const database = client.db('olukayode_sage');
// // // //     const usersCollection = database.collection('registered_user_config_database');

// // // //     // Fetch the name of the registered person from registered_user_config_database
// // // //     const user = await usersCollection.findOne({ _id: new ObjectId(userId) });

// // // //     if (user) {
// // // //       // Extract the first name from the full name
// // // //       const fullName = user.name;
// // // //       const firstName = fullName.split(' ')[0]; // Assuming the first name is the first word

// // // //       // Send both the user's full name and first name as a JSON response
// // // //       res.json({ fullName, firstName });
// // // //     } else {
// // // //       // If user not found, send an appropriate response
// // // //       res.status(404).json({ message: 'User not found' });
// // // //     }
// // // //   } catch (error) {
// // // //     console.error('Error fetching user name:', error);
// // // //     res.status(500).json({ message: 'Internal server error' });
// // // //   } finally {
// // // //     // Close the MongoDB connection
// // // //     await client.close();
// // // //   }
// // // // });
// // // // // /////////////////////////////////////////////////////////////


// // // // app.post('/securityOfficers', async (req, res) => {
// // // //   const { name, phoneNumber, designation, email } = req.body;
// // // //   const securityOfficer = {
// // // //     name: name,
// // // //     phoneNumber: phoneNumber,
// // // //     designation: designation,
// // // //     email: email
// // // //   };

// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('security_officers');
// // // //     const result = await collection.insertOne(securityOfficer);

// // // //     res.status(201).json({ message: 'New security_officers added successfully' });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while adding new security_officers');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });





// // // // // Fetch the data of security officers
// // // // app.get('/rerieve_security_Officers', async (req, res) => {
// // // //   try {
// // // //     await client.connect();
// // // //     const database = client.db('olukayode_sage');
// // // //     const collection = database.collection('security_officers');

// // // //     // Query to retrieve security managers (case-insensitive)
// // // //     const managers = await collection.find({ designation: { $regex: 'security manager', $options: 'i' } })
// // // //       .project({ _id: 0, name: 1, phoneNumber: 1, email: 1, designation: 1 })
// // // //       .toArray();

// // // //     // Query to retrieve security technicians (case-insensitive)
// // // //     const technicians = await collection.find({ designation: { $regex: 'security technician', $options: 'i' } })
// // // //       .project({ _id: 0, name: 1, phoneNumber: 1, email: 1, designation: 1 })
// // // //       .toArray();

// // // //     // Query to retrieve security supervisors (case-insensitive)
// // // //     const supervisors = await collection.find({ designation: { $regex: 'security supervisor', $options: 'i' } })
// // // //       .project({ _id: 0, name: 1, phoneNumber: 1, email: 1, designation: 1 })
// // // //       .toArray();

// // // //     // Combine all security officers into a single object
// // // //     const allSecurityOfficers = {
// // // //       managers: managers,
// // // //       technicians: technicians,
// // // //       supervisors: supervisors
// // // //     };

// // // //     // Send response with all security officers
// // // //     res.status(200).json(allSecurityOfficers);
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).json({ success: false, message: 'An error occurred while retrieving security officers' });
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });





// // // // const formatDate2 = (date) => {
// // // //   const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
// // // //   return date.toLocaleDateString('en-US', options);
// // // // };

// // // // const currentDate = new Date();

// // // // const formattedToday2 = formatDate2(currentDate);

// // // // const lastWeek2 = new Date(currentDate);
// // // // lastWeek2.setDate(lastWeek2.getDate() - 7);
// // // // const formattedStartDate2 = formatDate2(lastWeek2);

// // // // const timeFrame = `from ${formattedStartDate2} to ${formattedToday2}`;



// // // // const generateSVGMap = () => {
// // // //   // Your dynamic SVG generation logic goes here
// // // //   return `
  
// // // //   <div class="map-container">
   
// // // //     <svg width="800" height="610">   

// // // //   <rect x="10" y="10" width="740" height="900" fill="#f0f0f0" stroke="#ccc" stroke-width="2" />
  
// // // //   <text x="400" y="30" font-family="Arial, sans-serif" font-size="20" fill="#000000" text-anchor="middle">Security Incident Map</text>

// // // //   <svg id="nigerian-map" x="20" y="20" width="750" height="650" viewBox="0 100 800 500">

// // // //  <path
// // // //  d="m 291.01165,491.65874 0.6,0.77 4.83,-0.89 2.71,0.27 2.05,1.34 0.33,1.46 0,0 0.07,4.36 -0.55,2.86 0.05,0.73 0.94,1.03 14.09,0.86 1.24,1.86 0.22,2.19 0.7,1.04 3.21,2.33 1.34,0.21 0,0 1.08,1.29 -0.59,3.72 0.15,3.78 1.37,4.63 0.73,1.68 1.71,2 0.76,2.55 -0.6,1.21 -3.42,-0.76 0,0 -2.69,-2.61 -2.54,-0.84 -2.76,-2.14 -0.58,-2.11 -1.19,-1.47 -3.4,-0.91 -2.42,0.14 -0.28,0.91 0.53,3.51 -1.84,5.1 0.32,0.45 2.23,-0.16 -0.7,2.44 -0.73,0.9 -6.08,-0.16 -1.1,0.98 -0.07,0.75 1.07,1.94 -1.21,5.81 -0.03,2.4 0.66,2.49 -1.17,2.89 -2.52,1.94 0.09,0.77 -0.47,0.64 0.22,1.47 0.59,0.67 0.02,1.17 -0.67,1.62 1.79,3.37 0.13,1.85 0,0 -2.36,-1.79 -2.94,-1.41 -1.8,0.43 -3.28,-1.22 -2.79,0.12 -1.11,0.64 -3.13,0.58 -1.8,-0.27 -1.45,-1.41 -0.59,-1.1 0.16,-1.1 1.37,-3.7 3.42,-4.33 2.39,-4.19 -0.05,-2.78 -0.66,-1.72 -0.54,-0.05 0,0 3.09,-10.25 2.1,-3.87 1.82,-1.68 1.18,-3.04 0.89,-0.9 0.43,-2.01 -0.36,-3.45 0.28,-2.05 -1.51,-2.44 1.23,-0.77 -0.38,-8.47 -0.47,-1.35 -1.04,-1.45 -5.34,-1.78 -2.01,-1.69 0,0 1.27,-2.22 1.36,-1.3 z"
// // // //  title="Abia"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-AB" />


// // // // <path
// // // //  d="m 682.64165,187.16874 -0.13,1.83 -0.82,1.76 -1.02,1.57 -1.1,0.83 -1.77,2.9 -1.36,4.89 -2.66,2.45 -0.48,1.1 -0.61,3.01 0.72,3.61 0.77,1.06 0,1.7 -1.61,1.66 -0.26,4.61 -0.97,1.67 0.13,3.45 -0.78,1.94 -2.05,2.57 -0.26,3.02 -1.61,1.04 -1.44,2.61 -5.87,1.16 -4.18,5.88 0.15,0.98 1.54,1.62 0.04,0.64 -1.15,2.74 -1.85,1.39 -0.03,1.77 0.69,1.6 2.69,1.33 1.01,1.59 -2.16,3.09 -0.13,2.25 -0.54,1.29 0.27,1.11 -1.08,1.47 0.33,0.78 -0.22,1.41 0.43,0.63 -0.74,2.2 -1.02,1.64 -0.97,-0.13 -1.7,1.32 -8.01,0.82 -2.75,2.16 -1.62,0.29 -3.76,3.39 -3.76,1.98 0.09,1.34 2.37,0.27 0.49,0.42 0.09,7.48 -0.73,0.69 -0.83,4.41 0.84,2.07 -1.16,4.03 0.3,1.32 -2.81,4.8 -2.64,2.3 -0.01,1 0.71,0.99 -0.82,2.05 1.27,3.92 -1.13,1.85 -1.09,0.38 -1.67,-0.23 -1.46,0.54 -0.57,1.1 -0.16,2.73 -0.98,0.74 -0.99,1.85 -2.18,0.19 -3.4,2.76 -0.83,0.12 -5.88,-1.64 -0.66,0.66 -0.24,1.71 -1.18,1.16 -0.81,3.05 -1.77,2.34 -2.33,0.14 -1.12,0.89 -2.47,-0.28 -1.85,1.21 -1.91,0.33 -0.72,0.82 -0.68,4.04 1.44,5.22 0.58,5.77 -0.06,1.04 -0.77,0.56 -2.43,4.51 0.62,2.51 0.22,3.73 -4.13,6.35 -3.49,3.09 -1.76,3.01 -0.48,2 -1.12,1.47 -0.41,3.45 -1.11,1.56 0.69,6.14 0.65,1.8 -2.93,1.48 -1.96,0.27 -2.75,3.14 0,0 -1.22,-0.88 0.05,-1.56 -1.94,-4.62 -0.38,-3.54 -0.74,-1.73 0.58,-5.49 -1.04,-2.02 -2.15,-2.6 -4.32,-3.84 -2.5,-3.15 -1.52,-1.12 -1.42,-0.43 -1.64,0.38 -2.83,4.01 -2.72,1.99 -2.71,-2.45 -2.91,-4.7 -2.52,-6.73 0.82,-1.58 4.14,-4.78 3.8,-3.22 5.08,-5.48 8.63,-11.52 6.12,-5.22 0.44,-2.08 -0.38,-5.78 5.99,-11.44 1,-3.62 -0.26,-1.81 -2.02,-3.84 -4.14,-1.47 -2.66,-2.94 -0.34,-3.84 0.46,-2.17 -5.26,-9.82 -2.08,-1.29 -4.65,-1.08 -1.46,-1.92 -5.45,-10.18 0,0 6.2,-0.91 3.37,-1.43 9.4,-5.66 5.75,-4 1.1,-2.33 -0.52,-3.7 0.68,-10.23 0,0 6.34,0.97 2.7,-0.19 4.57,-1.32 1.74,-1.07 1.7,-1.9 3.73,-5.55 6.2,-7.06 2.51,-0.87 6.29,-0.49 5.9,-2.22 2.44,-2.62 0.82,-2.66 3.32,-0.14 2.35,-1.14 2.22,-3.7 2.1,-2.16 2.51,-1.47 8.52,0.79 2.87,1.03 2.58,1.55 2.84,3.11 2.43,1.15 2.38,1.02 4.39,-0.01 1.14,-1.22 1.48,-7.76 2.71,-5.68 1.22,-3.64 0.88,-4.1 0.28,-8.01 3.09,-0.43 0.62,0.74 3.75,1.14 3.86,-0.29 5.62,-1.74 0,0 z"
// // // //  title="Adamawa"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-AD" />


// // // // <path
// // // //  d="m 302.91165,585.31874 0,0.01 0,0 -0.02,-0.02 0,0 0.02,0.01 z m 7.57,-0.7 0.97,0.5 0.92,-0.19 0.88,-0.14 0.33,0.28 -3.58,0.75 -0.49,-0.59 0.97,-0.61 z m 40.31,-7.56 0.88,2.09 -0.76,0.82 -1.07,0.22 -0.22,-1.24 0.56,-0.1 0.35,-0.9 0.26,-0.89 z m -51.56,-11.07 -0.12,-1.85 -1.79,-3.36 0.67,-1.63 -0.02,-1.17 -0.59,-0.67 -0.22,-1.47 0.47,-0.65 -0.09,-0.77 2.52,-1.94 1.18,-2.89 -0.66,-2.49 0.02,-2.41 1.21,-5.81 -1.07,-1.94 0.07,-0.75 1.1,-0.98 6.09,0.16 0.73,-0.9 0.7,-2.44 -2.23,0.16 -0.32,-0.45 1.84,-5.1 -0.53,-3.51 0.29,-0.91 2.42,-0.14 3.4,0.91 1.19,1.47 0.58,2.11 2.75,2.14 2.54,0.84 2.69,2.61 0,0 -0.85,0.1 -1.15,2.45 0.66,1.79 0.84,0.31 0.78,1.94 4.77,-0.56 4.96,2.68 0.4,2.1 -0.61,6.1 1.63,5.13 3.41,4.91 3.19,2.8 3.77,4.33 3.67,2.81 0.59,1.01 0,0 -0.43,2.16 0.79,0.44 0.03,2.5 -0.5,0.45 -0.41,-0.67 -0.07,0.58 1.19,1.17 -0.6,1.8 -0.74,0.19 0.1,1.03 -1.03,1.15 0.24,0.17 -1.05,2.38 -5.23,-0.63 -5.74,-0.07 -10.71,0.55 -12.05,1.68 -0.52,-0.46 -1.82,0.36 -0.93,-0.48 -0.88,0.36 -0.95,-0.09 -0.02,0.03 0.5,0.81 0.27,0.43 -3.32,1.32 -0.98,-1.7 -1.17,-0.65 -0.86,-0.19 -0.96,-1.06 0.38,-0.91 -0.09,-0.12 -0.53,0.5 -0.5,-0.38 0,0 -0.61,-1.17 0.04,-0.64 0.51,-0.32 -0.58,-4.55 0.96,-4.27 -0.63,-2.3 -1.98,-3.47 z"
// // // //  title="Akwa Ibom"
// // // //   fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-AK" />


// // // // <path
// // // //  d="m 262.67165,444.90874 0.44,0.4 0.09,3.62 3.83,-0.13 2.44,1.41 2.05,0.08 3.73,1.7 0.36,0.79 -1.25,3.45 -0.75,1.08 -1.69,1.14 -1.85,2.48 0.24,0.96 -0.62,0.83 -0.43,2.35 0.39,0.54 3.85,1.16 1.42,1.8 1.34,3.64 1.31,1.85 -0.3,0.96 -0.82,0.29 0.41,1.37 -0.5,1.62 0.72,0.74 1.89,-1.13 0.61,0.13 0.59,2.58 1.33,0.63 -0.35,2.15 1.88,3.79 0.18,1.51 0.76,0.98 2.39,1.4 1.66,-0.96 1.08,0.09 1.12,0.74 -0.04,0.54 0.83,0.17 0,0 -4.4,2.31 -1.36,1.3 -1.27,2.22 0,0 -5.32,1.42 -5.38,-1.25 -6.31,1.16 -1.78,1.04 -0.93,3.55 -2.37,4.61 -2.68,0.27 -4.51,-1.92 -1.62,0.8 -3,3.83 -2.09,0.83 0,0 -2.4,-0.21 -1.11,-1.28 0,0 1.01,-1.17 1.92,-3.9 0.34,-2.64 1.77,-4.69 2.5,-4.55 0.38,-6.01 1.28,-3.65 -1.23,-3.77 -1.48,-7.29 0.08,-1.37 -1.13,-1.13 -2.13,-9.57 0,0 -0.07,-0.29 0,0 1.67,-0.77 3.59,0.66 1.43,-0.89 1.84,-2.51 0.06,-2.73 1.24,-4.12 2.24,-2.31 1.54,-0.86 z"
// // // //  title="Anambra"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-AN" />


// // // // <path
// // // //  d="m 491.94165,87.518745 7.74,6.19 1.14,2.93 0.77,7.079995 -0.19,1.81 3.16,4.66 0.21,6.74 0.33,2.7 0.95,2.71 0.2,3.87 8.35,20.91 -0.23,4.92 -1.05,2.72 -0.99,6.78 1.63,1.53 3.04,0.37 0,0 -0.8,0.24 -2.71,3.76 -6.04,3.28 -2.57,3.7 -2.01,1.75 -1.49,0.76 -3.91,0.88 -1.44,1.36 -1.38,2.03 -0.97,4.94 -2.61,7.43 -3.61,5.07 -0.2,1.38 7.38,2.99 1.14,1.71 0.87,7.15 0.88,1.15 7.2,2.62 2.08,4.94 -0.48,8.63 0.4,2.86 -0.83,1.76 -3.9,0.63 -1.99,0.92 -1.31,1.91 0.33,1.62 4.29,4.38 2.5,1.41 9.15,7.09 1.23,3.79 0.61,6.19 2.58,5.28 1.69,2.12 -0.13,0.95 -0.58,0.16 0,0 -3.99,-0.03 -6.44,-1.09 -10.59,4.85 -5.85,-0.78 -4.59,2.65 0,0 -6.36,-3.43 -6.18,-4.04 -11.07,-4.74 -9.26,-4.93 -2.57,-0.51 -7.6,-3.95 -3.03,1.78 -0.3,1.44 3.17,4.06 0.27,1.74 -0.5,1.67 -4.76,1.3 -2.89,5.21 -4.39,1.41 -10.04,0.59 -5.47,-1.48 -4.8,-0.27 -1.51,-0.53 -1.56,-1.34 -1.65,-4.07 -0.9,-1.16 -0.79,-0.71 -3.92,-1.42 -0.6,-0.85 0.09,-1.69 2.38,-4.47 0.23,-1.17 -0.26,-5.94 -0.97,-3.13 -1.8,-1.92 -1.06,-0.21 -10.97,2.19 0.04,-12.38 -0.78,-4.8 -2.61,-4.16 -2.78,-0.88 -3.18,-0.08 -1.53,0.49 0,0 -2.53,-2.71 -2.79,-1.75 -0.27,-0.73 2.35,-4.2 0.53,-3.96 0,0 0.99,-0.56 2.59,-4.09 1.33,-3.85 -0.08,-2 -0.77,-1.67 -3.86,-4.33 -0.45,-1.99 -0.4,-6.89 0.45,-3.5 1.6,-4.57 1.02,-0.43 2.7,0.16 2.04,-0.51 2.74,-3.21 2.65,-4.11 4.74,-4.17 0.67,-1.1 2.48,-1.57 1.69,-0.3 1.14,1.07 1.14,0.09 5.52,-2.17 0,0 1,-0.19 6,1.1 7.43,2.41 3.35,-1.46 2.3,0.73 1.78,3.67 3.13,0.21 7.7,-0.48 3.57,-0.91 1.14,0.3 2.67,4.9 0.54,2.15 -0.83,7.85 0.81,2.05 1.35,1.36 5.7,1.19 5.6,-1.39 1.56,0.17 1.86,1.36 2.46,0.62 1.86,-0.57 -1.11,-3.43 0.04,-1.8 1.53,-1.91 2.53,-1.36 4.04,-0.99 1.44,-0.78 1.85,-1.39 1.1,-2.72 -1.04,-1.46 -8.87,-0.56 -5.72,-1.27 -6.39,-0.77 -2.99,-1.85 -5.3,-7.42 -1.05,-2.5 -0.47,-2.57 -3.84,0.94 -1.18,-1.11 -0.55,-1.74 2.51,-5 -0.52,-4.32 -1.46,-4.42 -1.81,-0.5 -2.75,0.27 -2.12,1.03 -2.61,0.04 -1.35,-0.63 0.49,-4.26 3.22,-4.54 6.16,-0.46 5.47,-3.04 10.94,-3.73 6.23,-2.51 1.19,-0.94 -0.03,-2.25 -0.57,-1.88 6.71,-20.589995 4.54,-1.95 3.48,-0.55 0.99,0.82 0.83,1.64 0.12,1.39 z"
// // // //  title="Bauchi"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-BA" />
// // // // <path
// // // //  d="m 309.66165,367.75874 9.13,2.48 8.51,1.25 8.71,3.55 4.92,2.82 5.25,0.99 1.07,-0.14 3.32,2.8 5.33,2.23 1.14,-1.1 0.09,-1.36 -4.7,-11.64 -0.08,-2.52 1.02,-2.86 1.24,-1.41 3.95,-2.2 1.38,-0.28 2.59,-0.18 2.68,0.44 10.09,3.72 6.86,1.55 4.88,0.41 3.96,-0.22 0.01,-0.7 11.79,8.93 0,0 -3.79,5.97 1.9,0.57 6.12,-2.63 7.47,-0.95 8.18,0.48 7.48,1.77 5.14,4.9 4.44,5.65 8.37,7.57 -0.14,0.65 1.17,1.36 -0.26,1.04 0.56,1.78 -0.59,3.23 -2.38,5.89 0.29,5.92 -0.92,1.43 -3.09,1.94 -3.44,3.25 -3.31,6.16 -2.11,11.5 0.61,0.73 -0.33,1.08 -0.03,8.76 -1.9,8.19 0,0 -0.72,0.3 -2.12,-0.73 -0.78,1.42 0.1,2 -2.82,1.74 -1.79,0.22 -2.78,-0.44 0,0 -0.65,-1.55 -4.88,-6.63 -5.53,-5.73 -1.49,-0.72 -3.09,-0.22 -9.57,2.24 -4.38,-0.44 -1.21,-0.89 0.66,-4.77 -0.56,-1.64 -8.64,-5.38 -5.43,-1.69 -2.11,-0.07 -2.31,0.59 -2.11,0.67 -1.52,1.2 0.77,4.5 -3.14,1.92 -3.13,0.83 -3.84,-0.14 -2.06,-0.67 -1.92,0.45 -1.36,1.75 -2.36,1.96 -2.99,0.49 0,0 -1.7,-2.27 -0.84,-4.26 -1.76,-1.3 -1.02,2.31 -3.41,0.37 -1.77,2.88 -1.92,0.93 -2.95,-0.25 -3.45,0.4 -1.25,8.23 -0.99,2.05 -1.41,0.59 -1.78,-0.74 -4.01,-3.68 -0.65,-1.54 0.17,-0.91 0,0 2.28,-6.42 -0.9,-5.62 -1.42,-2.14 -1.52,-1.15 -2.81,-0.35 -2.21,2.11 -2.1,0.73 -2.92,-1.52 -3.58,-2.76 -2.89,-3.35 -2.74,-6.51 0.13,-0.53 0,0 0.41,-0.5 0.84,0.58 3.37,3.29 0.82,-0.1 1.35,1.05 1.76,0 0.34,-4.42 0.96,-1.44 6.44,-3.12 3.3,-3.11 1.94,-5.83 0.42,-3.93 0.47,-1.29 1.23,-1.21 0.36,-1.81 -1.48,-0.47 -3.31,0.32 -1.27,-1.05 -1.24,-5.53 -0.57,-6.81 -0.01,-6.9 -0.73,-1.85 -2.7,-2.61 -1.88,-3.22 -0.54,-5.87 z"
// // // //  title="Benue"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-BE" />
// // // // <path
// // // //  d="m 662.15165,11.078745 0.7,5.65 -0.83,3 3.49,6.26 -0.2,2.52 -0.46,0.49 0.28,-2.17 -1.04,1.33 -0.22,1.92 2.38,2.55 2.46,0.61 -0.65,0.67 0.28,0.54 0.78,0.19 4.46,7.53 2.83,3.08 1.05,0.22 1.72,0.96 1.63,1.2 3.87,0.75 0.26,0.86 -0.58,-0.01 -0.56,1.1 -0.2,-1.04 -0.66,0.58 -0.74,-0.04 1.44,1.6 0.27,1.76 3.88,-1.16 2.31,-2.61 2.47,-2.02 1.6,-0.67 -1.08,1.76 0.15,0.45 0.65,-0.19 0.57,2.34 -0.33,0.22 -0.67,-1.38 -0.85,0.48 -0.57,1.23 -2.02,0.57 0.67,1.88 -1.19,1.13 -1.86,3.73 0.41,0.77 1.37,-0.45 -0.07,2.44 -0.58,1.15 0.85,0.04 -0.34,1.36 -1.15,1.54 0.4,0.57 1.57,-0.43 0.29,0.55 -2.63,1.39 1.97,0.5 -0.15,0.89 1.2,0.05 -0.75,0.85 -1.32,0.33 0.12,0.42 1.24,-0.23 0.12,0.6 -0.48,0.44 -0.23,-0.37 -1.01,0.23 0.24,0.75 0.74,-0.12 -0.85,1.67 1.51,0.21 0.22,1.34 -0.57,0.74 0.26,1.25 0.97,0.22 0.53,1.21 -0.24,1.15 1.95,0.55 0.34,1.46 0.61,0.52 1.61,-0.95 0.46,0.2 0.71,1.91 1.22,0.71 0.31,1.08 2.16,0.77 -0.03,1.1 0.67,1 -0.37,1.19 0.71,0.64 1.11,0.55 1.41,-0.5 2,0.26 -0.27,1.04 0.83,0.06 0.39,-0.69 1.81,-0.07 1.47,-0.81 2.46,-0.08 0.17,1.22 1.07,0.09 -0.12,0.91 -1.25,0.32 0.22,0.53 -0.38,0.64 0.95,0.28 2.25,2.61 3.42,-0.53 1.03,-0.05 0.43,0.81 1.72,-0.87 2.93,0.87 3.5,-0.35 0.68,0.31 0.85,0.12 1.61,0.34 0.79,1.2 1.27,0.34 0.34,0.87 -0.67,0.02 0.08,1.119995 2.17,1.01 0.7,1.37 -0.72,1.39 2.99,0.77 0.76,1.5 -0.54,0.46 1.13,0.54 0.78,0.12 0.12,-0.49 0.97,-0.08 0.51,-0.51 1.33,2.51 -1.37,1.29 -0.32,1.8 -0.74,0.87 0.68,2 -1.72,1.16 -0.06,1.57 2.2,3.78 -1.21,1.74 0.23,1.35 -2.32,2.77 0.01,1.5 0.29,3.79 -0.7,1.23 -2.81,2.15 -0.06,0.55 1.26,1.72 2.01,1.13 2.16,2.18 0.44,2.16 -0.62,4.68 -1.26,0.93 -6.36,2.57 -3.88,0.9 -1.7,3.09 -8.09,3.17 -3.28,2.07 -1.93,2.65 -4.46,1.94 -2.32,0.04 -2.72,-2.37 -2.52,-0.44 -1.07,-0.83 -1.07,0.16 -0.61,0.76 -0.58,2.32 -2.08,2.36 -0.78,2.68 -0.72,1.05 -1.46,0.96 0.24,1.49 -0.65,0.21 -1.08,1.68 -2.32,2.04 -1.21,2.91 -3.24,1.61 -2.42,0.54 -0.77,0.75 -0.19,1.74 0,0 -5.62,1.74 -3.86,0.29 -3.75,-1.14 -0.62,-0.74 -3.09,0.43 -0.28,8.01 -0.88,4.1 -1.22,3.64 -2.71,5.68 -1.48,7.76 -1.14,1.22 -4.39,0.01 -2.38,-1.02 -2.43,-1.15 -2.84,-3.11 -2.58,-1.55 -2.87,-1.03 -8.52,-0.79 -2.51,1.47 -2.1,2.16 -2.22,3.7 -2.35,1.14 -3.32,0.14 -0.82,2.66 -2.44,2.62 -5.9,2.22 -6.29,0.49 -2.51,0.87 -6.2,7.06 -3.73,5.55 -1.7,1.9 -1.74,1.07 -4.57,1.32 -2.7,0.19 -6.34,-0.97 0,0 -3.91,-2.2 -1.81,-1.6 -3.13,-6.17 -5.66,-2.34 -1.83,-1.82 -2.43,-3.51 -0.81,-2.83 5.18,-7.56 0.62,-3.02 -1.35,-3.3 0,0 3.04,-0.69 3.41,-4.53 -0.28,-8.39 0.61,-2.77 1.72,-2.83 2.66,-1.92 11.21,-3.02 6.11,-3.65 2.09,-3.08 0.24,-2.94 -0.76,-4.15 -0.04,-2.97 0.9,-2.86 2.89,-3.35 3.3,-5.9 4.54,-4.43 0.99,-2.11 -0.84,-3.33 -3.13,-3.75 -4.91,0.21 -0.64,-0.36 -0.15,-1.94 4.72,-9.14 -1.69,-7.44 0.13,-3.5 2.54,-16.29 0.05,-5.789995 -1.72,-3.83 0.55,-2.2 7.06,-6.31 2.37,-3.08 1.84,-4.21 -0.48,-3.74 -4.8,-3.84 -1.45,-1.82 -1.23,-3.85 1.49,-8.02 0.08,-4.21 0,0 1.45,-0.12 4.38,0.88 0.03,-1.19 0.59,-0.41 0.07,-0.74 0.19,-1.71 1.48,-1.33 1.14,0.24 1.35,-0.73 -0.34,-1.16 0.73,-1.08 -0.23,-0.32 -0.89,-0.19 0.4,-1.13 0.77,-1.33 0.8,-1.78 0.64,-0.6 2.28,0.35 1.38,-0.87 0.96,0.09 0.61,0.74 0.96,-1.11 0.23,-1.44 1.34,-0.23 1.47,-0.29 0.29,-0.46 -0.34,-0.4 0.98,-1.17 2.11,-0.48 0.62,-1.24 1.37,-0.78 0.16,-0.79 0.58,-0.74 0.4,-0.74 -0.02,-0.86 1.1,-0.43 0.43,-1.02 -0.81,-0.31 0.57,-0.61 1.23,0.63 -0.29,-1.57 1.1,0.12 0.06,0.47 0.85,0.29 1.1,-0.14 1.87,-1.67 1.02,-0.37 0.32,0.38 1.98,-0.1 1.39,-1.33 1.02,0.49 0.05,-1.08 1.08,-0.36 1.02,0.09 -0.89,1.17 1.47,0.79 0.92,-1.31 1.35,1.04 -0.2,-1.31 1.48,-0.51 -0.31,2.08 0.92,0.12 0.45,-0.97 1.15,-0.25 0.92,1.39 0.96,-2.53 1.66,-0.84 0.02,-0.44 -0.55,-0.19 0.19,-0.71 1.19,0.2 0.64,-0.8 -0.64,-0.17 -0.4,-1.02 1.68,-1.6 -0.06,-0.58 1.49,-0.67 -0.05,-0.93 1.05,-1.06 1.24,-0.24 0.39,-1.06 z"
// // // //  title="Borno"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-BO" />
// // // // <path
// // // //  d="m 251.22165,579.30874 -0.21,-0.62 -0.68,0.1 -3.96,-2.6 -1.2,-4.38 -1.38,-1.87 -1.99,-0.02 -6.54,2.54 -1.04,-0.26 -0.35,-1.94 0.42,-1.46 -3.31,-1.44 -0.5,-0.83 0.07,-4.34 1.9,-2.67 0.76,-2.05 0.03,-1.27 -1.29,0.16 -0.84,-0.78 1.33,-4.44 4.49,-7.84 2.77,0.17 0.55,-0.5 0.75,-2.49 1.54,-0.79 -0.23,-1.81 1.58,-1.07 0.95,-1.48 -0.03,-1.94 -0.63,-1.54 -0.76,-0.58 -1.92,-0.83 -2.94,0.49 -1.04,-0.28 0.77,2.47 -1.2,0.85 -5.08,2.19 -3.49,-0.44 -2.74,0.49 -2.01,4.1 -2.11,0.52 -0.79,-0.6 -1.47,-0.08 -0.36,0.95 0.26,2.31 -2.83,1.56 -1.62,0.56 -3.01,-0.24 -1.23,1.99 -2.31,0.62 -1.89,-0.67 -0.99,-1.66 -2.11,-1.28 -0.75,0.5 -1.48,3.07 -3.3,1.64 -2.62,-0.42 -7.48,4.1 -0.94,-0.37 -2.32,0.4 -1,-1.1 -2.69,-1.6 -3.05,-0.71 -2.9,-1.66 -2.1,-2.1 -0.56,0.72 -0.72,-0.57 -1.43,0.53 -0.36,-0.5 -1.63,0.84 2.36,4.61 1.91,5.81 -0.34,0.79 0.95,1.52 0.35,1.86 4.06,6.77 0.19,1.44 0.94,0.55 0.01,0.17 0.05,1.1 7.5,10.38 1.19,0.62 -0.02,0.75 2.77,1.35 -0.27,0.41 1.05,0.75 0.12,0.65 2.56,1.59 0.19,-0.39 0.31,0.34 -0.22,0.24 0.02,0.34 2.61,2.16 0.48,-0.02 -0.14,-0.77 -0.45,-0.21 1.58,-0.46 -0.76,0.7 0.33,0.72 -0.26,0.27 0.07,0.51 2.32,1.7 5.07,2.36 0.19,-2 -0.79,-0.51 -0.55,-1.25 0.34,0.12 0.29,0.89 0.79,0.22 -0.12,-0.7 0.41,0.03 -0.02,0.7 0.52,0.17 0.26,0.77 -0.62,1.18 0.26,0.43 -0.34,1.3 0.4,0.29 5.18,1.32 0.19,-2.23 0.65,-0.58 0.38,3.84 8.34,-0.7 -0.64,-2.4 1.03,-3.05 0.65,-1.1 -0.29,-1.37 -1.91,-1.15 0.48,-0.05 1.19,0.27 0.96,1.58 0.6,-1.13 -0.55,-0.79 0.09,-2.14 -0.84,-1.35 0.31,-0.74 0.17,1.03 0.69,0.55 0.03,0.38 0.74,2.02 -0.1,3.1 2.72,-2.47 -0.58,-0.63 0.1,-1.94 1.91,-0.6 0.5,-0.63 0.69,1.61 0.12,1.29 -0.48,1.03 0.6,1.32 0.05,1.61 1.34,0.26 1.08,1.51 0.48,-0.05 -0.19,0.33 0.22,0.43 2.17,-0.48 0.19,0.34 -0.62,0.65 1.53,0.79 8.46,-0.91 0.02,-0.48 -0.4,-0.51 -0.07,-0.77 -0.1,-0.34 0.67,-0.86 0.6,-0.58 -0.52,2.04 0.22,0.39 2.03,1.76 0.96,-0.98 3.53,-0.38 -0.5,-2.47 -0.09,-0.38 -0.38,-1.13 -1.15,-0.75 -0.19,-0.99 0.02,-0.19 0.29,-1.06 -0.53,-2.25 -0.41,-0.55 0.35,-0.36 0.76,0.9 1.25,4.2 0.38,-0.58 -0.65,-5.23 1.7,-3.39 0.26,-1.83 z m -78.3,-19.41 0,0 0.01,0.01 -0.01,-0.01 z m 59.51,37.48 -8.22,0.99 -2.8,-0.1 -0.22,-0.7 1.36,-2.52 0.15,-0.02 0.45,0.04 0.14,-1.3 1.98,-2.19 0.12,-0.31 0.43,-0.89 0.45,-0.19 -0.59,-0.77 -0.18,-1.3 0.55,-0.35 1.03,-0.19 0.9,1.34 -0.5,1.33 0.78,1.62 -0.22,1.57 1.63,0.44 0.65,0.92 2.11,2.58 z"
// // // //  title="Bayelsa"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-BY" />
// // // // <path
// // // //  d="m 348.48165,451.12874 2.99,-0.49 2.36,-1.96 1.36,-1.75 1.92,-0.45 2.06,0.67 3.84,0.14 3.13,-0.83 3.14,-1.92 -0.77,-4.5 1.52,-1.2 2.11,-0.67 2.31,-0.59 2.11,0.07 5.43,1.69 8.64,5.38 0.56,1.64 -0.66,4.77 1.21,0.89 4.38,0.44 9.57,-2.24 3.09,0.22 1.49,0.72 5.53,5.73 4.88,6.63 0.65,1.55 0,0 -2.17,8.34 -5.15,-2.21 -0.78,1.84 -0.02,1.98 -0.58,0.73 -1.08,0.94 -2.8,4.86 -3.23,0.94 -1.63,1.19 -1.2,1.18 -0.95,2.5 -0.99,0.97 -8.72,7.77 -3.81,2.73 -1.12,0.33 -1.64,2.3 -1.69,0.87 -1.3,1.48 0.4,0.86 1.36,1.04 -1.05,1.48 0.4,0.83 -0.45,0.96 -1.47,1.87 -0.57,-0.58 0.05,1.5 5.1,5.64 0.31,1.76 -2.4,4.05 -0.64,2.4 -1.12,1.36 0.21,3.89 -1.81,5.88 0.15,6.56 -2.54,4.2 -1.89,0.77 -0.08,0.84 -1.34,1.04 -1.22,3.3 -1.25,1.04 0.97,1.02 -0.9,0.35 -0.98,1.24 0.05,0.57 -1.01,0.38 0.09,1.76 -1.97,0.75 -1.02,1.25 -0.02,0.96 1.2,1.14 0.34,1.53 -2.42,1.46 -1.09,-0.24 -0.68,-0.72 -1.03,0.82 -0.64,1.52 -0.75,0.53 -0.16,1.47 0.67,0.07 0.6,-1.75 0.26,2.51 -0.36,0.56 -0.43,-0.67 -0.6,0.14 0.58,1.44 -1.48,0.27 0.06,0.76 -1.78,0.29 -1.47,-0.6 0.51,-1.77 1.07,-0.12 -1.27,-1.61 -0.8,1.22 -1.16,0.48 -2.07,-0.46 -0.65,-1.15 0.77,-0.7 0.21,-0.16 -0.31,-0.91 -1.36,0.41 -1.13,-0.63 -2.38,2.18 0,0 -0.59,-1.01 -3.67,-2.81 -3.78,-4.34 -3.18,-2.8 -3.41,-4.91 -1.63,-5.13 0.61,-6.1 -0.39,-2.1 -4.96,-2.68 -4.77,0.56 -0.79,-1.94 -0.83,-0.31 -0.66,-1.79 1.15,-2.45 0.85,-0.1 0,0 3.42,0.76 0.6,-1.21 -0.76,-2.55 -1.71,-2 -0.73,-1.68 -1.37,-4.63 -0.15,-3.78 0.59,-3.72 -1.08,-1.29 0,0 0.38,-2.39 2.34,-3.11 -0.36,-2.66 1.46,-1.26 0.34,-1.35 1.98,-2.29 0.08,-2.42 -1.14,-1.8 0.19,-0.98 2.27,-1.08 2.62,-0.18 2.69,4.5 1.34,-2.08 2.16,-0.77 2.2,-1.71 0.28,-1.31 1.88,-0.29 2.18,1.26 0.84,-0.91 0.68,-2.3 0.1,-2.59 0.8,-1.47 6.92,-8.39 0.02,-1.4 -1.86,-2.6 -0.01,-1.6 1.65,-1.63 2.19,-0.37 0.83,-1.7 -0.24,-1.05 -1.38,-1 -0.41,-1.5 -0.52,-0.37 0.1,-1.94 -1.28,-1.12 -0.5,-1.71 -2.7,-1.87 -1.99,-2.62 z"
// // // //  title="Cross River"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-CR" />
// // // // <path
// // // //  d="m 252.45165,479.95874 -1.48,-7.29 0.08,-1.37 -1.13,-1.13 -2.13,-9.57 -1.88,2.04 -4.1,-0.38 -3.73,0.81 -8.19,5.12 -7.35,3.1 -4.03,4.53 -0.64,0.05 -2.58,-3.94 -1.01,-0.42 -1.67,-0.31 -1.78,1.58 -0.89,2.03 -0.15,2.37 0.4,0.75 1.46,0.81 0.54,4.82 2.03,3.59 1.96,2.42 1.88,1.46 2.23,0.81 0.29,1.75 -0.7,3.24 -1.55,1.91 -1.63,1.66 -3.08,2.03 -2.29,3.07 -2.78,1.99 -1.81,0.6 -5.23,1.04 -2.13,-0.56 0.7,-1.8 -1.6,-1.61 2.04,-4.03 -0.47,-0.83 -3.91,-2.35 -2,-2.83 -4.67,-2.62 -3.17,-1.25 -1.64,-1.34 -5.12,1.85 -1.85,2.38 -1.77,-0.4 -2.27,-1.98 -1.38,-0.29 -3.17,0.67 -2.98,-0.72 -0.99,0.31 -0.63,0.3 -0.06,1.03 0.89,1.57 -0.52,1.06 -4.1,3.22 -1.66,0.07 -0.05,-2.47 -0.66,-2.55 0.7,-2.93 -0.15,-1.43 -1.66,-1.67 -5.43,-2.8 -6.9,16.74 2.48,4.48 1.39,0.88 0.58,-1.6 1.31,-1.25 7.76,-4.22 1.26,-0.22 1.85,-1.28 1.13,-0.54 0.36,0.51 -0.02,0.17 -2,0.95 -1.01,1.6 -0.07,0.26 -0.83,-0.53 -2.25,0.98 -3.18,2.51 -0.34,0.75 -1.98,-0.45 -1.05,0.82 -0.79,3.14 0.26,1.54 2.63,4.5 3.18,3.14 1.12,-0.53 3.01,-1.34 2.97,0.41 0.74,-3.16 1.15,-2.15 -0.02,-0.38 0.4,-0.3 0,0.01 0.38,0.12 -0.23,0.14 -0.24,1.9 -1.12,2.27 1,2.13 1.91,0.63 1.63,-0.27 1.58,-3.18 1.6,0.1 0.19,-0.25 0,0.01 2.99,1.54 1.12,0.67 0.19,0.48 -1.19,-0.34 0.27,0.77 0.1,1.32 -1.33,-0.35 0.97,-0.67 -0.33,-1.34 -1.12,-0.72 -3.13,-0.29 -0.6,0.14 0.09,1.63 -0.55,1.13 -2.34,1.97 1,-1.58 -1.79,0.15 -2.1,-0.55 -4.44,-0.67 -1.96,0.19 -0.12,0.84 -1.62,1.08 -1.26,1.67 2.77,3.96 3.04,2.61 6.04,2.63 5.09,0.29 0.02,-0.65 -1.19,-1.39 -0.95,-2.9 -0.26,-0.45 0.07,-0.74 0.47,-0.12 -0.19,0.82 1,2.2 0.83,-0.6 0.36,0 -0.07,0.22 -0.95,1.08 0.26,0.5 2.65,1.12 0.57,-0.21 1.65,-4.8 0.84,-1.46 0.96,-0.62 -0.64,-0.33 3.2,0.12 0.48,0.15 1.05,-0.46 0.46,-1.13 0.74,-0.38 1.12,0.17 0.95,0.91 0.61,-0.66 0.09,0.23 -0.12,0.75 -0.89,0.04 -1.38,-0.94 -1.01,1.68 -1.58,0.79 -1.81,-0.12 0.22,0.86 -0.96,-0.98 -1.32,0.36 -0.55,3.02 0.27,1.32 0.58,1.08 0.45,0.72 3.36,1.09 -0.3,0.8 -1.55,-1.12 -0.65,0.36 -0.03,0.7 -0.07,0.22 -0.49,0.13 0.32,-1.47 -0.31,-0.12 -0.43,-0.34 -0.45,-0.46 -0.45,0.48 -0.74,0.5 -0.36,0.53 -0.79,0.12 -1.12,0.57 0.91,0.46 2.05,-0.1 -2.97,0.96 -0.4,0.63 -1,-1.61 -0.6,0.05 -0.28,-0.02 -2.53,0.15 -1.17,0.63 -0.07,-0.39 -0.69,-0.07 -0.41,-0.31 -0.67,0.22 -0.83,-0.43 0.05,2.44 1.91,7.63 -0.24,1.66 2.08,2.26 2.05,-0.88 2.65,-0.17 -0.89,-1.35 -0.09,-1.12 0.15,-0.24 0.5,-2.38 0.29,-0.03 -0.15,0.6 0.15,0.41 -0.52,2.69 0.88,0.55 -0.1,1.53 -0.8,0.31 2.1,2.1 2.9,1.66 3.05,0.71 2.69,1.6 1,1.1 2.32,-0.4 0.94,0.37 7.48,-4.1 2.62,0.42 3.3,-1.64 1.48,-3.07 0.75,-0.5 2.11,1.28 0.99,1.66 1.89,0.67 2.31,-0.62 1.23,-1.99 3.01,0.24 1.62,-0.56 2.83,-1.56 -0.26,-2.31 0.36,-0.95 1.47,0.08 0.79,0.6 2.11,-0.52 2.01,-4.1 2.74,-0.49 3.49,0.44 5.08,-2.19 1.2,-0.85 -0.77,-2.47 -0.57,-1.04 0.21,-0.44 3.52,-1.81 0.19,-5.3 0.7,-1.48 2.05,-1.42 0.89,-1.75 0.82,-3.18 -1.09,-3.54 0.23,-0.35 1.01,-1.17 1.92,-3.9 0.34,-2.63 1.76,-4.69 2.5,-4.55 0.38,-6.01 1.27,-3.65 -1.18,-3.74 z"
// // // //  title="Delta"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-DE" />
// // // // <path
// // // //  d="m 319.74165,453.93874 -0.17,0.91 0.65,1.54 4.01,3.68 1.78,0.74 1.41,-0.59 0.99,-2.05 1.25,-8.23 3.45,-0.4 2.95,0.25 1.92,-0.93 1.77,-2.88 3.41,-0.37 1.02,-2.31 1.76,1.3 0.84,4.26 1.7,2.27 0,0 0.49,2.89 1.99,2.62 2.7,1.87 0.5,1.71 1.28,1.12 -0.1,1.94 0.52,0.37 0.41,1.5 1.38,1 0.24,1.05 -0.83,1.7 -2.19,0.37 -1.65,1.63 0.01,1.6 1.86,2.6 -0.02,1.4 -6.92,8.39 -0.8,1.47 -0.1,2.59 -0.68,2.3 -0.84,0.91 -2.18,-1.26 -1.88,0.29 -0.28,1.31 -2.2,1.71 -2.16,0.77 -1.34,2.08 -2.69,-4.5 -2.62,0.18 -2.27,1.08 -0.19,0.98 1.14,1.8 -0.08,2.42 -1.98,2.29 -0.34,1.35 -1.46,1.26 0.36,2.66 -2.34,3.11 -0.38,2.39 0,0 -1.34,-0.21 -3.21,-2.33 -0.7,-1.04 -0.22,-2.19 -1.24,-1.86 -14.09,-0.86 -0.94,-1.03 -0.05,-0.73 0.55,-2.86 -0.07,-4.36 0,0 3.63,-1.01 1.99,1.7 0.77,0.09 2.11,2.51 0.73,0.07 0.65,-1.44 -0.8,-2.92 -0.15,-2.64 2.67,-2.73 0.8,-1.73 -0.99,-6.64 -0.62,-2.55 -1.08,-1.07 0.02,-1.23 2.74,-6.11 0.01,-5.82 -0.65,-1.15 -0.38,-3.29 -1.48,-4.9 6.45,0.55 z"
// // // //  title="Ebonyi"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-EB" />
// // // // <path
// // // //  d="m 208.35165,395.48874 0.77,0.64 1.75,-0.37 0.7,0.36 0.28,0.68 -0.38,0.89 0.46,0.65 2.18,-0.25 0.27,0.8 -0.96,1.85 -0.23,1.93 0.28,1.05 1.08,0.78 2.13,0.53 5.94,-2.93 1.56,2.1 0.65,-0.07 1.26,1.41 0.55,-0.06 1.96,2.23 2.26,-0.19 0.74,-0.51 2.56,0.15 1.06,2.01 0.07,1.22 0.85,0.61 0.48,1.74 0.74,0.56 -0.24,0.51 0.66,1.63 3.75,-0.84 0.43,0.38 1.46,-0.99 1.87,-0.41 1.75,1.41 0.55,2.12 1.45,1.08 0.79,2.01 0.15,3.41 -0.31,1.92 -1.62,3.94 0.06,4.16 -1.91,4.82 -2.16,3.55 1.28,2.15 -0.93,5.52 0.89,2.6 1.41,2.01 1.03,6.03 0,0 0.07,0.29 0,0 -1.88,2.03 -4.09,-0.38 -3.73,0.81 -8.19,5.11 -7.35,3.1 -4.03,4.53 -0.65,0.04 -2.58,-3.94 -1.01,-0.41 -1.66,-0.32 -1.79,1.59 -0.89,2.02 -0.15,2.37 0.4,0.75 1.46,0.81 0.54,4.82 2.03,3.58 1.96,2.42 1.88,1.46 2.23,0.81 0.28,1.74 -0.69,3.24 -1.55,1.91 -1.62,1.66 -3.08,2.03 -2.3,3.07 -2.77,1.99 -1.81,0.6 -5.24,1.04 -2.13,-0.57 0.7,-1.8 -1.6,-1.61 2.03,-4.03 -0.47,-0.83 -3.9,-2.35 -2,-2.83 -4.68,-2.62 -3.16,-1.25 -1.64,-1.34 -5.12,1.85 -1.85,2.38 -1.77,-0.4 -2.27,-1.98 -1.38,-0.29 -3.17,0.67 -2.97,-0.72 -0.99,0.31 -0.64,0.3 -0.06,1.03 0.89,1.57 -0.52,1.06 -4.09,3.23 -1.66,0.07 -0.05,-2.47 -0.66,-2.55 0.71,-2.93 -0.15,-1.43 -1.66,-1.67 -5.43,-2.79 0,0 0.39,-1.16 -1.23,-2.26 -1.33,-1.04 -1.56,-0.09 -1.65,-2.94 -1.94,-1.36 -0.7,-0.06 -0.44,-0.91 0.25,-0.59 -0.28,0.44 0.8,-0.7 0.96,-3.63 0.58,-0.61 2.95,-0.87 0.84,-3.74 1.74,-1.71 0.84,-1.96 0.35,-1.72 -0.57,-1.45 -1.4,-2.28 -1.23,-0.64 0,-2.84 0.81,-0.98 -0.1,-2.22 0.49,-0.96 1.75,-1.62 0.45,-1.03 1.73,-0.8 0.79,-2.27 0.96,-0.69 0.09,-1.95 0.45,-0.78 2.2,-1.01 2.13,0.4 2.28,-0.38 1.68,0.36 6.64,0.11 3.29,-0.38 1.64,0.34 1.74,2.08 -2.01,2.26 2.1,5.46 0.74,-0.03 3.77,-3.16 1.34,0.12 1.19,1.48 0.81,0.35 2.68,-1.02 1.51,-3.39 0.95,-4.96 0.25,-0.25 1.19,0.51 0.01,-1.63 0.88,-0.52 -0.15,-0.81 -1.18,-1.28 0.61,-4.64 1.24,-1.66 1.52,-0.73 0.37,-0.85 -0.32,-0.84 3.23,-6.89 -0.15,-1.39 0.47,-1.04 1.76,-1.83 2.15,-1.05 1.43,-3.54 -0.43,-0.28 -0.77,-2.48 0.87,-2.89 -2.01,-0.82 -0.4,-0.84 0.18,-1.39 1.41,-1.72 1.56,0.14 0.89,-0.6 z"
// // // //  title="Edo"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-ED" />
// // // // <path
// // // //  d="m 148.66165,367.10874 0.41,-0.17 0.61,1.67 1.03,0.49 4.48,-1.25 0.95,0.37 1.47,2.06 0.95,0.49 2.33,-0.23 2.3,0.62 1.95,-0.58 1.29,0.55 1.04,-2.16 -0.29,-0.63 0.82,-2.22 4.11,-1.34 5.76,-0.09 0,0 -1.09,0.42 -0.03,4.28 0.55,0.45 2.48,-1.42 3.67,-0.64 2.31,0.27 0.56,0.7 -0.28,1.37 -1.34,0.64 -2.29,3.01 -0.08,1.56 1.32,3.75 1.32,0.96 1.28,0.03 1.85,1.69 6.82,2.39 0,0 -1.52,2.4 -0.82,0.3 -1.5,-1.25 -1.86,0.39 -0.85,2.06 -2.18,1.45 -2.4,2.48 -1.13,2.14 -1.71,8.1 -1.7,3.92 -3.05,4.43 -5.53,3.49 -2.27,-0.59 -1.09,-2.68 0.16,-0.86 -1.04,-3.19 -1.42,-2.22 -1.55,-0.52 -6.97,0.31 -7.78,-0.44 -4.55,1.45 0,0 -0.83,-1.7 -0.84,-3.79 -2.85,-6.11 -0.69,-4.78 1.19,-3.99 -0.81,-2.81 0.12,-1.4 1.9,-4.25 1.62,-1.5 2.18,-0.94 1.99,-1.64 z"
// // // //  title="Ekiti"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-EK" />
// // // // <path
// // // //  d="m 262.67165,444.90874 2.73,-5.01 0.91,0.25 0.18,2.28 0.74,0.05 1.33,2.01 0.69,0.34 1.24,-0.33 4.97,-5.39 5.98,-3.86 6.18,-7.42 2.44,-0.91 2.14,-2.1 3.31,-0.76 2.44,0.75 1.11,1.62 0,0 -0.13,0.53 2.74,6.51 2.89,3.35 3.58,2.76 2.92,1.52 2.1,-0.73 2.21,-2.11 2.81,0.35 1.52,1.15 1.42,2.14 0.9,5.62 -2.28,6.42 0,0 -1.79,0.36 -6.45,-0.55 1.48,4.9 0.38,3.29 0.65,1.15 -0.01,5.82 -2.74,6.11 -0.02,1.23 1.08,1.07 0.62,2.55 0.99,6.64 -0.8,1.73 -2.67,2.73 0.15,2.64 0.8,2.92 -0.65,1.44 -0.73,-0.07 -2.11,-2.51 -0.77,-0.09 -1.99,-1.7 -3.63,1.01 0,0 -0.33,-1.46 -2.05,-1.34 -2.71,-0.27 -4.83,0.89 -0.6,-0.77 0,0 -0.83,-0.17 0.04,-0.54 -1.12,-0.74 -1.08,-0.09 -1.66,0.96 -2.39,-1.4 -0.76,-0.98 -0.18,-1.51 -1.88,-3.79 0.35,-2.15 -1.33,-0.63 -0.59,-2.58 -0.61,-0.13 -1.89,1.13 -0.72,-0.74 0.5,-1.62 -0.41,-1.37 0.82,-0.29 0.3,-0.96 -1.31,-1.85 -1.34,-3.64 -1.42,-1.8 -3.85,-1.16 -0.39,-0.54 0.43,-2.35 0.62,-0.83 -0.24,-0.96 1.85,-2.48 1.69,-1.14 0.75,-1.08 1.25,-3.45 -0.36,-0.79 -3.73,-1.7 -2.05,-0.08 -2.44,-1.41 -3.83,0.13 -0.09,-3.62 z"
// // // //  title="Enugu"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-EN" />
// // // // <path
// // // //  d="m 287.74165,288.29874 6.12,-0.63 3.2,0.32 1.52,0.85 1.13,-0.85 1.81,-3.04 1.06,-0.54 1.07,0.43 1.47,3.11 0.94,0.31 1.18,-0.79 0,0 -0.07,2.44 -0.42,0.62 -1.03,0.07 -0.53,0.61 -2.11,6.52 -0.08,5.62 0.51,2.19 -0.55,7 -1.98,5.27 -1.52,7.95 -0.79,0.36 -1.08,3.4 -1.04,1.64 -3.78,4.62 -6.96,3.64 -4.63,1.06 -2.91,1.2 -11.13,1.75 0,0 -1.4,0.46 -7.46,-0.15 0,0 -1.83,0.21 -1.42,-0.47 -1.95,-4.91 0.46,-1.37 -0.75,-30.21 0.36,-13.66 0.34,-0.38 2.68,-0.33 11.03,-0.47 1.76,0.63 9.19,8.1 0.94,-0.24 z"
// // // //  title="Federal Capital Territory"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-FC" />
// // // // <path
// // // //  d="m 517.00165,163.43874 0.91,-0.88 4.17,-1.51 4.04,0.17 2.98,1.01 2.18,1.29 8.49,6.26 4.75,6.4 3.42,3.58 -1,1.54 1.58,-1.02 3.68,3.38 0.67,4.87 -1.2,11.85 0.77,6.45 0.3,0.51 6.78,-0.01 0,0 1.35,3.3 -0.62,3.02 -5.18,7.56 0.81,2.83 2.43,3.51 1.83,1.82 5.66,2.34 3.13,6.17 1.81,1.6 3.91,2.2 0,0 -0.68,10.23 0.52,3.7 -1.1,2.33 -5.75,4 -9.4,5.66 -3.37,1.43 -6.2,0.91 0,0 -6.37,0.47 -12.46,-0.02 -5.9,0.6 -3.57,-0.71 0,0 0.58,-0.16 0.13,-0.95 -1.69,-2.12 -2.58,-5.28 -0.61,-6.19 -1.23,-3.79 -9.15,-7.09 -2.5,-1.41 -4.29,-4.38 -0.33,-1.62 1.31,-1.91 1.99,-0.92 3.9,-0.63 0.83,-1.76 -0.4,-2.86 0.48,-8.63 -2.08,-4.94 -7.2,-2.62 -0.88,-1.15 -0.87,-7.15 -1.14,-1.71 -7.38,-2.99 0.2,-1.38 3.61,-5.07 2.61,-7.43 0.97,-4.94 1.38,-2.03 1.44,-1.36 3.91,-0.88 1.49,-0.76 2.01,-1.75 2.57,-3.7 6.04,-3.28 2.71,-3.76 z"
// // // //  title="Gombe"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-GO" />
// // // // <path
// // // //  d="m 283.98165,497.48874 2.01,1.69 5.34,1.78 1.04,1.45 0.47,1.35 0.38,8.47 -1.23,0.77 1.51,2.44 -0.28,2.05 0.36,3.45 -0.43,2.01 -0.89,0.9 -1.18,3.04 -1.82,1.68 -2.1,3.87 -3.09,10.25 0,0 -2.57,0.95 -4.52,-1.13 -2.13,0.04 -4.15,1.06 -4.69,-1.11 -6.72,0.14 -2.14,-0.41 -2.16,-1.65 -1.72,-3.4 -1.84,-1.3 -0.26,-1.37 1.09,-2.76 0.52,-4.63 -0.45,-1.66 -2.12,-0.77 -3.46,0.67 -1.51,-0.44 2.75,-13.09 0,0 2.09,-0.83 3,-3.83 1.62,-0.8 4.51,1.92 2.68,-0.27 2.37,-4.61 0.93,-3.55 1.78,-1.04 6.31,-1.16 5.38,1.25 z"
// // // //  title="Imo"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-IM" />
// // // // <path
// // // //  d="m 434.10165,67.298745 1.79,1.18 6,0.73 3.14,-1.8 2.1,-3.99 5.32,-2.59 3.16,-0.63 2.82,-1.37 6.33,-1.96 2.21,1.25 2.13,4.78 0.69,4.35 1.46,2.53 1.12,-0.72 5.86,-1.86 4.99,2.22 2.03,-0.61 1.85,0.88 2.21,3.4 1.76,11.53 0.87,2.9 0,0 -11.06,6.93 -0.12,-1.39 -0.83,-1.64 -0.99,-0.82 -3.48,0.55 -4.54,1.95 -6.71,20.589995 0.57,1.88 0.03,2.25 -1.19,0.94 -6.23,2.51 -10.94,3.73 -5.47,3.04 -6.16,0.46 -3.22,4.54 -0.49,4.26 1.35,0.63 2.61,-0.04 2.12,-1.03 2.75,-0.27 1.81,0.5 1.46,4.42 0.52,4.32 -2.51,5 0.55,1.74 1.18,1.11 3.84,-0.94 0.47,2.57 1.05,2.5 5.3,7.42 2.99,1.85 6.39,0.77 5.72,1.27 8.87,0.56 1.04,1.46 -1.1,2.72 -1.85,1.39 -1.44,0.78 -4.04,0.99 -2.53,1.36 -1.53,1.91 -0.04,1.8 1.11,3.43 -1.86,0.57 -2.46,-0.62 -1.86,-1.36 -1.56,-0.17 -5.6,1.39 -5.7,-1.19 -1.35,-1.36 -0.81,-2.05 0.83,-7.85 -0.54,-2.15 -2.67,-4.9 -1.14,-0.3 -3.57,0.91 -7.7,0.48 -3.13,-0.21 -1.78,-3.67 -2.3,-0.73 -3.35,1.46 -7.43,-2.41 -6,-1.1 -1,0.19 0,0 -0.08,-2.24 1.08,-3.72 7.12,-6.88 -0.89,-1.15 -2.09,-0.53 -2.83,-2.64 -1.48,-2.75 -0.5,-2 -1.09,-0.99 -5.06,0.15 -0.2,-1.96 0.5,-2.09 3.36,-4.69 0.19,-2.05 1.06,-1.84 -0.19,-2.46 -2.28,-7.18 -1.25,0.53 -1.47,1.75 -2.32,1.42 -1.82,0.18 -1.37,-0.25 -0.01,-2.57 -0.57,-1.44 -3.14,0.25 -1.9,1.19 0,-1.03 -1.65,-0.72 0.53,-1.72 1.18,-1.39 0.08,-5.61 -0.8,-2.94 -0.92,-0.81 -1.85,-0.56 -5.44,-0.56 -0.83,-0.42 -1.02,-1.389995 0.57,-2.01 -1.1,-3.08 -3.81,-2.12 -1.13,-1.38 -0.45,-5.92 -7.78,-2.02 -3.77,0.35 -3.99,1.93 -1.73,1.35 -0.62,2.6 -1.87,3.61 -1.07,-1.12 -0.1,-1.96 -3.51,-6.28 0,0 -1.24,-2.62 -0.83,-0.7 -4.94,-0.12 -2.86,-0.93 -0.59,-0.72 -0.07,-3.85 0.75,-3.4 -0.02,-2.69 0.46,-0.3 10.39,-1.38 5.37,0.99 9.22,-0.78 1.17,1.23 1.41,4.68 0.68,0.94 2.66,1.67 1.99,0.52 2.62,-1.51 0.64,1.56 1.49,0.7 3.68,-0.55 4.18,-1.74 3.19,-2.58 1.03,-2.63 0.58,-0.75 2,-0.88 0.01,-0.86 0,0 1.27,-0.39 10.06,0.44 9.02,1.42 5.24,-0.75 6.06,0.78 10.03,0.45 z"
// // // //  title="Jigawa"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-JI" />
// // // // <path
// // // //  d="m 316.55165,159.39874 3.09,0.02 2.44,-0.67 4.18,-3.83 4.8,-2.84 1.65,0 4.08,-1.24 1.22,0.19 1.13,0.82 0.32,1.25 -2.11,4.02 0.53,2.57 1.04,1.18 3.53,1.83 3.75,1.23 3.51,4.13 1.53,0.55 2.78,-0.03 2.45,0.59 5.38,4.43 3.59,6.42 0.38,3.88 -1.01,2.44 -1.01,4.91 1.2,6.05 -0.2,1.73 -0.72,1.1 -3.55,0.96 -0.55,0.79 0.6,2.08 1.06,1.07 7.02,0.97 1.98,2.75 1.6,1.05 3,0.64 1.05,-0.29 0,0 -0.53,3.96 -2.35,4.2 0.27,0.73 2.79,1.75 2.53,2.71 0,0 -0.37,0.29 -0.21,2.9 -0.55,1.43 -1.32,1.56 -2.19,0.73 -1.9,1.4 -2.13,4.97 -0.22,2.71 1.36,2.82 0.75,3.52 -2.39,1.97 -0.34,1.1 0.18,1.97 -0.7,7.81 0.53,2.1 -0.42,1.07 -1.91,1.55 -0.4,3.08 -1.76,1.28 0.21,4.74 -1.05,1.4 0.1,1.16 3.26,5.28 2.57,3.08 1.71,1.21 1,2.09 0.12,3.41 -1.67,3.94 0,0 -1.09,0.57 -2.65,5.61 -3.31,5.4 -0.82,0.72 -1.61,0.42 -2.47,-0.13 -0.6,-1.9 -5.34,-5.91 -3.81,-0.24 -1.5,-1.25 -1.33,-0.22 -1.29,0.98 -0.89,1.9 -4.16,4.75 -2.35,1.6 -1.15,0.21 -1.34,-0.96 -0.4,-1.31 0.05,-9.7 -1.03,-1.61 -4.22,-2.44 -0.32,-3.25 -2.93,-2.67 -1.1,-0.39 -1.01,0.35 -1.65,2.12 -0.94,2.54 -2.31,2.1 -1.1,0 -1.75,-1.06 -1.34,0.25 -2.44,-1.79 -0.93,-0.14 -1.5,0.61 -0.7,-0.79 -0.6,-1.88 -0.75,-0.11 -1.34,1.02 0,0 -1.18,0.79 -0.94,-0.31 -1.47,-3.11 -1.07,-0.43 -1.06,0.54 -1.81,3.04 -1.13,0.85 -1.52,-0.85 -3.2,-0.32 -6.12,0.63 0,0 -1.23,-0.42 -2.46,0.6 1.38,-4.13 -3.39,-2.78 0.09,-2.32 0.56,-0.93 2.45,-1.29 0.79,-0.87 0.6,-2.79 3.09,-3.17 -0.58,-1.88 -3,-1.62 0.83,-3.02 -3.62,-1.36 -1.13,-0.77 -0.17,-0.91 0.29,-0.64 0.88,-0.42 3.23,-0.41 0.63,-1.51 -0.1,-3.09 -0.92,-3.88 -0.16,-5.06 -0.33,-1.01 -1.37,-0.67 -12.87,0.08 -6.67,-2.49 -1.71,-1.66 -1.03,-1.98 0.91,-1.24 2.17,-1.36 1.62,-1.68 0.85,-1.48 4.24,-2.6 1.02,-1.79 0.31,-1.98 -3.23,-1.75 -4.83,-1.66 1.35,-4.14 0.05,-2.57 -1.98,-3.8 -1.61,-0.44 -2.25,0.67 -1.39,-0.14 -0.28,-4.5 -0.48,-1.92 -0.61,-0.51 -4.73,-0.5 -1.18,1.2 0.67,2.39 -0.64,0.98 -3.97,-0.56 -7.63,2.86 -1.04,-2.66 -1.02,-1 -2.91,0.13 -2.1,0.61 -2.46,1.5 -5.59,4.5 -5.38,7.01 -1.41,0.89 -1.43,-0.6 -1.22,-3.52 -3.05,-2 -0.22,-1.37 0.33,-2.31 1.84,-1.8 -0.24,-3.81 0.74,-2 -0.14,-1.48 -1.44,-2.38 0.4,-4.79 3.04,-5.38 0,0 1.68,-0.12 1.28,-0.76 2.86,-4.16 5.27,-4.71 5.64,-0.95 7.94,0.57 4.71,-0.62 2.33,-1.51 3.04,-3.1 1.51,-3.23 0.64,-3.55 1.71,-3.41 0.85,-1.14 2.75,-1.77 2.34,-2.38 1.01,0.03 0,0 4.41,0.88 1.94,-0.18 1.36,0.9 0.79,1.74 -0.23,1.07 -2.89,2.69 -0.39,1.32 6.35,1.93 4.25,4.29 1.75,0.23 2.69,-1.52 1.38,-1.91 -1.81,-3.36 -0.12,-2.04 3.45,-1.09 1.95,0.11 2.77,1.1 1.4,-0.09 0.58,-0.54 -0.01,-1.39 1.2,-2.97 3.06,-2.59 1.39,-0.28 6.78,2.29 2.05,1.73 0.97,1.58 1.57,0.78 5.62,-2.24 0.84,-2.05 z"
// // // //  title="Kaduna"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-KD" />
// // // // <path
// // // //  d="m 90.771651,42.718745 6.62,-0.14 1.86,0.74 4.629999,-1.58 0.76,0.31 1.65,2.12 3.19,1.82 1.06,1.1 9.56,3.12 2.95,2.07 3.06,0.68 1.82,-0.43 0.63,-0.56 2.49,-3.69 1.16,-0.31 1.08,0.88 0.4,1.25 -1.62,3.93 0.09,2.4 -1.42,2.98 -0.42,3.7 1.86,2.15 1.8,4.28 -0.18,3.32 -1.3,6.06 0.04,2.04 1.68,5.52 -0.24,8.02 -0.64,1.56 -1.02,0.04 -3.17,-2.04 -2.68,0.02 -3.95,1.18 -1.28,1.48 -1.01,3.779995 -0.14,9.94 0.79,13.05 -2.12,9.79 -2.61,5.63 -1.16,4.77 2.55,3.65 0.76,0.51 2.78,0.29 1.71,-1.35 2.4,-3 12,-5.45 1.69,-0.12 1.89,0.86 2.04,-0.72 0.77,1.75 0.94,0.07 1.62,-0.97 0,0 0.86,-0.48 1.82,0 4.11,2.25 6.34,-1.46 0.82,-2.32 1.06,-0.62 0.79,-0.15 0.91,0.64 2.09,0.31 3.61,-0.65 1.08,0.57 1.69,3.3 2.87,0.11 3.65,2.41 5.47,-0.76 3.79,0.5 2.49,-0.59 1.22,-0.81 4.85,0.62 4.35,1.77 1.41,2.15 -0.01,2.47 -2.05,6.49 0,1.2 5.38,2.71 1.93,3.01 1.38,7.58 0.21,5.48 0,0 -1.36,-1.1 -1.85,-0.36 -3.42,2.76 -1.28,2.2 -3.93,0.41 -12.1,5.08 -10.67,0.69 -1.64,-1.25 -0.36,-4.02 0.37,-4.81 -0.48,-1.78 -3.75,-2.47 -0.81,-1.26 -0.98,-6.51 -1.69,-1.6 -2.84,-0.71 -3.64,-0.04 -9.86,1.59 -7.87,1.83 -4.43,1.62 -4.85,2.59 -1.37,2.07 0.16,1.54 0.87,1.26 3.63,2.01 5.4,2.19 5.36,0.53 1.05,2.01 1.71,-0.03 0.78,0.74 1.12,6.56 -0.25,1.07 -2.18,1.45 -0.63,1.47 0.49,1.45 2.74,1.63 1.17,1.36 -0.07,2.07 -1.01,1.49 -3.8,0.97 -5.22,2.64 -5,-0.52 -1.55,0.42 -0.9,0.75 -0.04,9.59 -0.45,1.37 1.25,2.83 1.81,1.97 1.86,3.03 0.75,2.44 -0.28,1.53 -1.77,2.13 -2.64,1.57 -3.38,0.26 -7.42,2.5 -0.5,5.85 -0.56,0.48 -4.32,-0.46 -1.42,-0.99 -0.02,-2.28 1.03,-3.28 0.29,-3.94 -2.93,-2.66 -1.12,-2.41 0.18,-6.32 1.46,-3.26 1.84,-2 1.48,-1.01 3.92,-1.44 4.62,-4.43 2.43,-10.71 0.2,-4.05 -0.51,-0.74 -2.89,-1.06 -1.58,0.1 -8.4,-5.7 -5.24,-1.69 -2.94,0.07 -4.5,0.85 -6.189999,-0.36 -12.17,0.81 -1.86,-0.29 -3.49,-1.42 -11.04,-6.08 -2.89,-0.36 -0.89,0.52 0,0 -1.29,-0.01 -12.13,-10.28 4.33,-20.39 2.12,-4.71 4.89,-4.18 -0.82,-3.26 -2.42,-1.82 -0.57,-4.87 3.17,-3.84 -2.36,-8.76 0.39,-5.22 1.27,-4.3 -0.93,-15.849995 10.82,-9.33 7.73,-6.05 9.53,-14.62 2.08,-9.63 z"
// // // //  title="Kebbi"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-KE" />
// // // // <path
// // // //  d="m 347.91165,83.288745 3.51,6.28 0.1,1.96 1.07,1.12 1.87,-3.61 0.62,-2.6 1.73,-1.35 3.99,-1.93 3.77,-0.35 7.78,2.02 0.45,5.92 1.13,1.38 3.81,2.12 1.1,3.08 -0.57,2.01 1.02,1.389995 0.83,0.42 5.44,0.56 1.85,0.56 0.92,0.81 0.8,2.94 -0.08,5.61 -1.18,1.39 -0.53,1.72 1.65,0.72 0,1.03 1.9,-1.19 3.14,-0.25 0.57,1.44 0.01,2.57 1.37,0.25 1.82,-0.18 2.32,-1.42 1.47,-1.75 1.25,-0.53 2.28,7.18 0.19,2.46 -1.06,1.84 -0.19,2.05 -3.36,4.69 -0.5,2.09 0.2,1.96 5.06,-0.15 1.09,0.99 0.5,2 1.48,2.75 2.83,2.64 2.09,0.53 0.89,1.15 -7.12,6.88 -1.08,3.72 0.08,2.24 0,0 -5.52,2.17 -1.14,-0.09 -1.14,-1.07 -1.69,0.3 -2.48,1.57 -0.67,1.1 -4.74,4.17 -2.65,4.11 -2.74,3.21 -2.04,0.51 -2.7,-0.16 -1.02,0.43 -1.6,4.57 -0.45,3.5 0.4,6.89 0.45,1.99 3.86,4.33 0.77,1.67 0.08,2 -1.33,3.85 -2.59,4.09 -0.99,0.56 0,0 -1.05,0.29 -3,-0.64 -1.6,-1.05 -1.98,-2.75 -7.02,-0.97 -1.06,-1.07 -0.6,-2.08 0.55,-0.79 3.55,-0.96 0.72,-1.1 0.2,-1.73 -1.2,-6.05 1.01,-4.91 1.01,-2.44 -0.38,-3.88 -3.59,-6.42 -5.38,-4.43 -2.45,-0.59 -2.78,0.03 -1.53,-0.55 -3.51,-4.13 -3.75,-1.23 -3.53,-1.83 -1.04,-1.18 -0.53,-2.57 2.11,-4.02 -0.32,-1.25 -1.13,-0.82 -1.22,-0.19 -4.08,1.24 -1.65,0 -4.8,2.84 -4.18,3.83 -2.44,0.67 -3.09,-0.02 0,0 -3.6,-2.68 -1.11,-2.26 -0.78,-3.61 1.52,-2.67 0.07,-2.21 1.82,-1.63 3.75,-1.03 2.45,-1.7 2.71,-0.07 0.95,-0.58 -3.14,-7.8 0.67,-4.06 -2.09,-4.58 0.86,-6.33 -0.7,-12.32 0.27,-2.89 2.18,-2.28 4.25,-2.369995 7.64,-2.38 3.68,-1.93 0.78,-0.85 1.13,-4.39 2.14,-4.61 1.28,-0.52 z"
// // // //  title="Kano"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-KN" />
// // // // <path
// // // //  d="m 219.65165,323.91874 2.2,0.57 2.77,1.58 3.52,3.25 2.77,4.32 2.55,8.25 3.71,2.3 2.71,2.69 5.47,7.27 2.72,2.54 1.63,0.25 0.33,-0.35 0.62,-2.89 1.24,-2.53 0.19,-0.26 0.99,0.88 0.46,-0.09 0.06,-2.97 3.57,-1.74 1.12,-3.25 0,0 7.46,0.15 1.4,-0.46 0,0 -0.6,2.64 -1.55,2.66 0,0.86 0.82,1.69 2.19,2.66 0.54,6.17 -1.17,4.71 -0.04,4.69 -1.61,1.67 -0.85,2.12 -0.17,3.74 0.69,0.56 4.26,-2.95 9.26,-4.07 12.4,-3.37 7.07,-0.7 3.58,0.68 7.7,0.57 0,0 -0.32,2.84 0.54,5.87 1.88,3.22 2.7,2.61 0.73,1.85 0.01,6.9 0.57,6.81 1.24,5.53 1.27,1.05 3.31,-0.32 1.48,0.47 -0.36,1.81 -1.23,1.21 -0.47,1.29 -0.42,3.93 -1.94,5.83 -3.3,3.11 -6.44,3.12 -0.96,1.44 -0.34,4.42 -1.76,0 -1.35,-1.05 -0.82,0.1 -3.37,-3.29 -0.84,-0.58 -0.41,0.5 0,0 -1.11,-1.62 -2.44,-0.75 -3.31,0.76 -2.14,2.1 -2.44,0.91 -6.18,7.42 -5.98,3.86 -4.97,5.39 -1.24,0.33 -0.69,-0.34 -1.33,-2.01 -0.74,-0.05 -0.18,-2.28 -0.91,-0.25 -2.73,5.01 0,0 0,0 0,0 -1.34,1.87 -1.54,0.86 -2.24,2.31 -1.24,4.12 -0.06,2.73 -1.84,2.51 -1.43,0.89 -3.59,-0.66 -1.67,0.77 0,0 -1.03,-6.03 -1.41,-2.01 -0.89,-2.6 0.93,-5.52 -1.28,-2.15 2.16,-3.55 1.91,-4.82 -0.06,-4.16 1.62,-3.94 0.31,-1.92 -0.15,-3.41 -0.79,-2.01 -1.45,-1.08 -0.55,-2.12 -1.75,-1.41 -1.87,0.41 -1.46,0.99 -0.43,-0.38 -3.75,0.84 -0.66,-1.63 0.24,-0.51 -0.74,-0.56 -0.48,-1.74 -0.85,-0.61 -0.07,-1.22 -1.06,-2.01 -2.56,-0.15 -0.74,0.51 -2.26,0.19 -1.96,-2.23 -0.55,0.06 -1.26,-1.41 -0.65,0.07 -1.56,-2.1 -5.94,2.93 -2.13,-0.53 -1.08,-0.78 -0.28,-1.05 0.23,-1.93 0.96,-1.85 -0.27,-0.8 -2.18,0.25 -0.46,-0.65 0.38,-0.89 -0.28,-0.68 -0.7,-0.36 -1.75,0.37 -0.77,-0.64 0,0 -0.23,-0.78 -4.74,-4.17 -2.04,-2.7 0.71,-4.14 -2.51,-0.43 -4.62,0.88 0,0 -6.82,-2.39 -1.85,-1.69 -1.28,-0.03 -1.32,-0.96 -1.32,-3.75 0.08,-1.56 2.29,-3.01 1.34,-0.64 0.28,-1.37 -0.56,-0.7 -2.31,-0.27 -3.67,0.64 -2.48,1.42 -0.55,-0.45 0.03,-4.28 1.09,-0.42 0,0 0.75,-1.44 -0.82,-2.41 -4.76,-2.58 -0.13,-0.59 -2.42,-1.81 -0.07,-0.67 -2.41,-2.45 -1.92,-3.7 0.17,-0.99 2.14,-2.43 2.29,-3.91 3.71,-4.04 3.6,-2.29 1.77,2.62 2.17,1.76 7.04,3.01 1.84,0.08 2.76,1.08 3.71,-0.21 2.13,0.69 3.92,-0.12 6.3,1.52 3.03,-0.5 1.57,-3.76 0.64,-6.49 2.31,-7.79 z"
// // // //  title="Kogi"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-KO" />
// // // // <path
// // // //  d="m 322.66165,35.138745 9.16,1.35 5.19,1.38 3.58,1.94 2.92,2.5 2.73,0.73 9.89,9.64 3.29,-0.88 2.92,0.38 3.03,1.55 2.29,1.75 1.85,2.11 1.04,2.44 2.96,1.37 5.26,1.27 12.11,3.92 0,0 -0.01,0.86 -2,0.88 -0.58,0.75 -1.03,2.63 -3.19,2.58 -4.18,1.74 -3.68,0.55 -1.49,-0.7 -0.64,-1.56 -2.62,1.51 -1.99,-0.52 -2.66,-1.67 -0.68,-0.94 -1.41,-4.68 -1.17,-1.23 -9.22,0.78 -5.37,-0.99 -10.39,1.38 -0.46,0.3 0.02,2.69 -0.75,3.4 0.07,3.85 0.59,0.72 2.86,0.93 4.94,0.12 0.83,0.7 1.24,2.62 0,0 -4.63,0.36 -1.28,0.52 -2.14,4.61 -1.13,4.39 -0.78,0.85 -3.68,1.93 -7.64,2.38 -4.25,2.369995 -2.18,2.28 -0.27,2.89 0.7,12.32 -0.86,6.33 2.09,4.58 -0.67,4.06 3.14,7.8 -0.95,0.58 -2.71,0.07 -2.45,1.7 -3.75,1.03 -1.82,1.63 -0.07,2.21 -1.52,2.67 0.78,3.61 1.11,2.26 3.6,2.68 0,0 -0.99,1.1 -0.84,2.05 -5.62,2.24 -1.57,-0.78 -0.97,-1.58 -2.05,-1.73 -6.78,-2.29 -1.39,0.28 -3.06,2.59 -1.2,2.97 0.01,1.39 -0.58,0.54 -1.4,0.09 -2.77,-1.1 -1.95,-0.11 -3.45,1.09 0.12,2.04 1.81,3.36 -1.38,1.91 -2.69,1.52 -1.75,-0.23 -4.25,-4.29 -6.35,-1.93 0.39,-1.32 2.89,-2.69 0.23,-1.07 -0.79,-1.74 -1.36,-0.9 -1.94,0.18 -4.41,-0.88 0,0 0.02,-2.33 1.25,-6.1 -0.9,-3.69 -1.91,-1.9 -0.16,-1.07 0.45,-3.76 1.56,-4.14 0.65,-4 1.5,-0.84 6.61,-0.13 1.28,0.87 4.88,-3.97 0.55,-3.2 3.34,0.81 1.89,-1.62 -0.5,-1.95 -1.16,-1.43 -2.68,-2.29 -2.53,-1.16 -1.26,-1.21 1.82,-3.63 1.09,-5.16 -0.95,-2.47 0.13,-1.68 -0.69,-3.05 -2.5,-5.199995 0.4,-3.57 -1.31,-3.21 -0.39,-4.75 -1,-5.17 0.07,-6.05 -0.99,-6.17 1.44,-10.82 0,0 4.86,-1.57 5.28,-5.36 8.7,0.78 3.58,-0.74 23.4,-14.15 1.28,-0.33 z"
// // // //  title="Katsina"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-KT" />
// // // // <path
// // // //  d="m 62.361651,236.35874 5.38,-0.92 11.32,-0.35 3.62,0.93 13.98,15.86 1.99,3.1 5.609999,6.48 2.29,1.58 1.7,-0.18 1.04,0.48 0.27,2.94 -0.73,4.65 0.06,5.38 0.88,3.68 1.3,0.39 7.57,-0.79 0.84,0.74 0.43,1.62 -0.19,3.43 0.35,1.4 0.66,1.02 3.21,2.41 3.04,0.39 1.07,0.55 0.9,2.11 0.74,5.45 1.89,1.32 2,-0.01 9.16,-3.56 2.41,-0.16 6.35,3.01 1.42,1.1 6.35,7.23 2.25,0.69 3.96,-1.16 4.52,0.81 3.73,1.61 0.64,-0.27 11.77,7.32 5.19,3.67 0.93,1.49 1.46,0.71 1.84,0.6 4.92,0.32 3.39,-0.91 7.52,-0.31 8.26,1.71 0,0 -2.46,3.35 -2.31,7.79 -0.64,6.49 -1.57,3.76 -3.03,0.5 -6.3,-1.52 -3.92,0.12 -2.13,-0.69 -3.71,0.21 -2.76,-1.08 -1.84,-0.08 -7.04,-3.01 -2.17,-1.76 -1.77,-2.62 -3.6,2.29 -3.71,4.04 -2.29,3.91 -2.14,2.43 -0.17,0.99 1.92,3.7 2.41,2.45 0.07,0.67 2.42,1.81 0.13,0.59 4.76,2.58 0.82,2.41 -0.75,1.44 0,0 -5.76,0.09 -4.11,1.34 -0.82,2.22 0.29,0.63 -1.04,2.16 -1.29,-0.55 -1.95,0.58 -2.3,-0.62 -2.33,0.23 -0.95,-0.49 -1.47,-2.06 -0.95,-0.37 -4.48,1.25 -1.03,-0.49 -0.61,-1.67 -0.41,0.17 0,0 -0.39,-0.54 -1.67,0.8 -3.49,0.13 -1.48,-3.17 -2.18,-0.58 -4.74,1.7 -2.65,-0.38 0.08,0.88 -0.18,-0.85 -0.36,0.09 -3.55,1.61 -2.6,0.31 -8.27,-0.22 0,0 -0.49,-0.66 -1.45,-0.07 -0.71,-0.94 -1.9,-4.81 -0.39,-2.77 -0.78,-0.66 -0.03,-0.8 -3.46,-2.25 -2.95,-4.24 -1.22,-3.44 -0.09,-2.1 -0.79,-2.77 -1.97,-2.63 -2.999999,-7.11 -1.66,-1.91 -1.32,-5.29 -0.81,-1.58 1.03,-4.5 2.08,-1.55 0.35,-1.6 0.57,-0.59 3.159999,-2.09 2.34,-3.16 -0.16,-1.3 -1.31,-0.78 -2.829999,1.8 -2.21,0.08 -3.83,-1.08 -1.1,0.13 -2.4,-1.54 -5.7,-1.74 -3.25,-2.42 -1.69,-2.04 -0.54,-2.48 -4.08,-2.46 -2.04,0.09 -3.82,2.08 -1.69,3.71 -0.02,2.65 -0.45,1.11 -4.42,3.43 -6.64,2.92 -5.79,3.3 -2.49,1.94 -1.13,0.26 -3.01,2.21 -7,3.26 -0.93,0.15 -0.53,-0.75 -0.45,0.11 -0.91,-1.13 -0.69,-0.19 -2.57,0.27 -6.93,5.53 -1.66,0.66 -3.91,3.44 -0.19,0.99 -1.5,0.79 -4.08,0.72 -3.17,0.02 -3.19,2.78 0,0 0.56,-1.78 -0.59,-1.36 -0.01,-3.54 -0.71,-0.9 0.24,-1.44 0.55,-1.39 -0.39,-2.71 -0.97,-1.79 0.74,-1.4 1.43,-0.91 -0.4,-3.34 0.69,-0.23 0.34,-1.72 -0.2,-0.62 0.02,-0.88 0.69,-1.64 0.43,-1.56 -0.41,-0.76 -0.27,-0.77 -0.35,-0.78 0.13,-1.17 0.25,-1.73 0.16,-0.69 5.37,0.18 0.71,-0.16 1.05,-1.18 3.55,-0.56 0.66,0.82 1.24,0.45 1.49,-0.1 4.95,-1.73 0.25,-1.76 1.95,-3.88 0.17,-3.74 1.91,-1.88 -0.34,-5.82 -1.28,-4.01 0.31,-1.42 1.16,-1.88 2.47,-1.38 0.82,-1.83 2.59,-3.62 0.85,-3.1 1.04,-0.59 2.14,0.25 2.09,-1.73 0.1,-1.22 -1.34,-2.56 -0.32,-1.93 0.37,-1.34 1.11,-1.22 6.75,-2.7 3.39,0.24 1.14,-0.3 2.02,-2.06 0.12,-1.3 2.36,-2.59 0.57,-2.41 0.25,-4.97 0.85,-1.1 2.08,-0.86 z"
// // // //  title="Kwara"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-KW" />
// // // // <path
// // // //  d="m 3.411651,463.64874 1.25,0.4 3.41,-0.43 1.94,0.89 3.46,-2.44 0,-1.61 0.41,-0.11 3.55,0.53 13.71,-0.19 1.06,-1.01 0.77,-3.95 2.08,-1.65 0.09,-2.35 1.36,-2.51 1.85,0.25 3.41,1.43 1.2,0.8 0.81,1.43 4.57,-0.48 -0.51,-1.45 1.59,-1.06 37.58,0.39 1.07,0.21 0.54,0.9 -2.73,2.88 -0.23,0.94 0.73,1.24 0.04,1.46 2.19,1.09 3.22,-2.16 3.45,-0.41 1.06,1.48 0.12,0.95 -1.12,1.06 -2.8,1.31 -0.56,1.03 0.22,0.7 0.92,0.74 2.77,0.77 1.13,1.31 0.58,0.14 1.12,-0.58 5.269999,0.65 0.35,1.25 -0.36,2.36 0,0 -9.529999,-1.15 -2.19,-0.67 -12.02,-1.84 -8.59,-0.46 -9.91,0.94 -15.11,0.16 -0.57,0.31 -0.19,1.32 -0.53,-0.1 0.24,0.34 -5.42,-0.82 -6.02,0.01 -21.6,0.73 -9.49,1.1 -0.36,-3.11 z"
// // // //  title="Lagos"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-LA" />
// // // // <path
// // // //  d="m 307.24165,287.46874 1.34,-1.02 0.75,0.11 0.6,1.88 0.7,0.79 1.5,-0.61 0.93,0.14 2.44,1.79 1.34,-0.25 1.75,1.06 1.1,0 2.31,-2.1 0.94,-2.54 1.65,-2.12 1.01,-0.35 1.1,0.39 2.93,2.67 0.32,3.25 4.22,2.44 1.03,1.61 -0.05,9.7 0.4,1.31 1.34,0.96 1.15,-0.21 2.35,-1.6 4.16,-4.75 0.89,-1.9 1.29,-0.98 1.33,0.22 1.5,1.25 3.81,0.24 5.34,5.91 0.6,1.9 2.47,0.13 1.61,-0.42 0.82,-0.72 3.31,-5.4 2.65,-5.61 1.09,-0.57 0,0 1.69,1.65 2.42,0.11 2.08,0.85 0.63,4.48 1.93,3.41 2.16,0.98 5.32,0.56 3.7,0 2.77,-1.35 1.04,0.56 2.01,2.21 -0.79,2.93 -2.7,4.01 -2.11,1.98 -1.41,0.2 -1.46,1.05 -1.55,2.86 -1.55,1.36 -0.32,2.25 0.64,1.72 2.09,2.43 0.32,1.24 -0.3,5.41 1.44,2.07 5.15,2.71 3.66,1.3 8.19,-0.15 9.76,-2.79 10.36,4.33 2.52,2.07 1.46,2.68 0,0 -2.58,3.68 -2.74,0.82 -4.51,-0.95 -0.33,-0.41 -1.52,0.23 -1,-1.07 -1.73,-0.9 -1.86,0 -1.28,0.86 -1.33,2.14 -0.73,2.86 1.71,1.36 2.03,2.51 0.35,2.88 -0.54,0.65 1,2.68 -0.11,1.19 -11.23,7.21 -1.21,1.39 0,0 -11.79,-8.93 -0.01,0.7 -3.96,0.22 -4.88,-0.41 -6.86,-1.55 -10.09,-3.72 -2.68,-0.44 -2.59,0.18 -1.38,0.28 -3.95,2.2 -1.24,1.41 -1.02,2.86 0.08,2.52 4.7,11.64 -0.09,1.36 -1.14,1.1 -5.33,-2.23 -3.32,-2.8 -1.07,0.14 -5.25,-0.99 -4.92,-2.82 -8.71,-3.55 -8.51,-1.25 -9.13,-2.48 0,0 -7.7,-0.57 -3.58,-0.68 -7.07,0.7 -12.4,3.37 -9.26,4.07 -4.26,2.95 -0.69,-0.56 0.17,-3.74 0.85,-2.12 1.61,-1.67 0.04,-4.69 1.17,-4.71 -0.54,-6.17 -2.19,-2.66 -0.82,-1.69 0,-0.86 1.55,-2.66 0.6,-2.64 0,0 11.13,-1.75 2.91,-1.2 4.63,-1.06 6.96,-3.64 3.78,-4.62 1.04,-1.64 1.08,-3.4 0.79,-0.36 1.52,-7.95 1.98,-5.27 0.55,-7 -0.51,-2.19 0.08,-5.62 2.11,-6.52 0.53,-0.61 1.03,-0.07 0.42,-0.62 z"
// // // //  title="Nassarawa"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-NA" />
// // // // <path
// // // //  d="m 65.001651,173.89874 0.89,-0.52 2.89,0.36 11.04,6.08 3.49,1.42 1.86,0.29 12.17,-0.81 6.189999,0.36 4.5,-0.85 2.94,-0.07 5.24,1.69 8.4,5.7 1.58,-0.1 2.89,1.06 0.51,0.74 -0.2,4.05 -2.43,10.71 -4.62,4.43 -3.92,1.44 -1.48,1.01 -1.84,2 -1.46,3.26 -0.18,6.32 1.12,2.41 2.93,2.66 -0.29,3.94 -1.03,3.28 0.02,2.28 1.42,0.99 4.32,0.46 0.56,-0.48 0.5,-5.85 7.42,-2.5 3.38,-0.26 2.64,-1.57 1.77,-2.13 0.28,-1.53 -0.75,-2.44 -1.86,-3.03 -1.81,-1.97 -1.25,-2.83 0.45,-1.37 0.04,-9.59 0.9,-0.75 1.55,-0.42 5,0.52 5.22,-2.64 3.8,-0.97 1.01,-1.49 0.07,-2.07 -1.17,-1.36 -2.74,-1.63 -0.49,-1.45 0.63,-1.47 2.18,-1.45 0.25,-1.07 -1.12,-6.56 -0.78,-0.74 -1.71,0.03 -1.05,-2.01 -5.36,-0.53 -5.4,-2.19 -3.63,-2.01 -0.87,-1.26 -0.16,-1.54 1.37,-2.07 4.85,-2.59 4.43,-1.62 7.87,-1.83 9.86,-1.59 3.64,0.04 2.84,0.71 1.69,1.6 0.98,6.51 0.81,1.26 3.75,2.47 0.48,1.78 -0.37,4.81 0.36,4.02 1.64,1.25 10.67,-0.69 12.1,-5.08 3.93,-0.41 1.28,-2.2 3.42,-2.76 1.85,0.36 1.36,1.1 0,0 3.32,4.4 3.8,6.64 1.59,4.09 -0.07,0.84 0,0 -3.04,5.38 -0.4,4.79 1.44,2.38 0.14,1.48 -0.74,2 0.24,3.81 -1.84,1.8 -0.33,2.31 0.22,1.37 3.05,2 1.22,3.52 1.43,0.6 1.41,-0.89 5.38,-7.01 5.59,-4.5 2.46,-1.5 2.1,-0.61 2.91,-0.13 1.02,1 1.04,2.66 7.63,-2.86 3.97,0.56 0.64,-0.98 -0.67,-2.39 1.18,-1.2 4.73,0.5 0.61,0.51 0.48,1.92 0.28,4.5 1.39,0.14 2.25,-0.67 1.61,0.44 1.98,3.8 -0.05,2.57 -1.35,4.14 4.83,1.66 3.23,1.75 -0.31,1.98 -1.02,1.79 -4.24,2.6 -0.85,1.48 -1.62,1.68 -2.17,1.36 -0.91,1.24 1.03,1.98 1.71,1.66 6.67,2.49 12.87,-0.08 1.37,0.67 0.33,1.01 0.16,5.06 0.92,3.88 0.1,3.09 -0.63,1.51 -3.23,0.41 -0.88,0.42 -0.29,0.64 0.17,0.91 1.13,0.77 3.62,1.36 -0.83,3.02 3,1.62 0.58,1.88 -3.09,3.17 -0.6,2.79 -0.79,0.87 -2.45,1.29 -0.56,0.93 -0.09,2.32 3.39,2.78 -1.38,4.13 2.46,-0.6 1.23,0.42 0,0 -8.65,12.34 -0.94,0.24 -9.19,-8.1 -1.76,-0.63 -11.03,0.47 -2.68,0.33 -0.34,0.38 -0.36,13.66 0.75,30.21 -0.46,1.37 1.95,4.91 1.42,0.47 1.83,-0.21 0,0 -1.12,3.25 -3.57,1.74 -0.06,2.97 -0.46,0.09 -0.99,-0.88 -0.19,0.26 -1.24,2.53 -0.62,2.89 -0.33,0.35 -1.63,-0.25 -2.72,-2.54 -5.47,-7.27 -2.71,-2.69 -3.71,-2.3 -2.55,-8.25 -2.77,-4.32 -3.52,-3.25 -2.77,-1.58 -2.2,-0.57 0,0 -8.26,-1.71 -7.52,0.31 -3.39,0.91 -4.92,-0.32 -1.84,-0.6 -1.46,-0.71 -0.93,-1.49 -5.19,-3.67 -11.77,-7.32 -0.64,0.27 -3.73,-1.61 -4.52,-0.81 -3.96,1.16 -2.25,-0.69 -6.35,-7.23 -1.42,-1.1 -6.35,-3.01 -2.41,0.16 -9.16,3.56 -2,0.01 -1.89,-1.32 -0.74,-5.45 -0.9,-2.11 -1.07,-0.55 -3.04,-0.39 -3.21,-2.41 -0.66,-1.02 -0.35,-1.4 0.19,-3.43 -0.43,-1.62 -0.84,-0.74 -7.57,0.79 -1.3,-0.39 -0.88,-3.68 -0.06,-5.38 0.73,-4.65 -0.27,-2.94 -1.04,-0.48 -1.7,0.18 -2.29,-1.58 -5.609999,-6.48 -1.99,-3.1 -13.98,-15.86 -3.62,-0.93 -11.32,0.35 -5.38,0.92 0,0 0.49,-3.02 -1.96,-0.7 -2.1,-2.02 -1.75,-3.54 3.08,-6.97 -0.14,-1.69 0.89,-1.14 2.58,-1.33 6.08,3.19 1,-3.12 0.25,-2.99 2.82,-6.43 -0.66,-6.2 -2.69,-1.9 -2.97,-5.6 1.21,-4.6 0.13,-2.04 -1.23,-5.05 -2.13,-0.82 0.42,-1.95 -0.28,-1.95 0.51,-1.95 z"
// // // //  title="Niger"
// // // //  fill="blue"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-NI" />
// // // // <path
// // // //  d="m 0.96165097,375.38874 5.97000003,-4.29 3.49,-0.21 1.9,0.93 1.24,1.79 0.41,1.43 0.15,6.48 0.56,2.36 1.31,2.17 0.84,0.13 0.94,-5.56 0.57,-1.25 0.47,-0.45 1.37,0 0.88,0.61 0.54,1.75 -0.16,3.09 -1.74,5.98 -0.41,-0.24 -0.51,0.57 0.52,3.66 2.12,2.51 3.05,2.47 1.02,3.04 3.2,4.51 3.01,2.36 2.34,1.13 4.05,0.28 1.74,-0.49 2.78,-3.97 1.14,-4.24 1.62,-1.48 2.6,0.29 1.75,4.34 1.59,1.13 1.02,-0.26 1.13,-1.11 2.47,-0.6 6.2,0.22 1.17,1.89 0.33,5.66 0.41,0.71 2.98,1.22 0.64,1.1 -0.1,2.22 1.1,2.7 0.41,2.87 -3.97,4.01 -0.33,1.13 0.37,0.28 6.09,-0.25 2.7,-0.58 3.04,0.13 3.18,-1.24 1.51,-1.37 5.89,-0.88 0,0 2.74,-1.08 1.4,-1.11 0.94,0.39 0.52,0.84 0.59,4.28 1.97,-0.01 3.85,-1.98 3.389999,0.59 2.97,7.11 3.06,-1.96 1.1,-0.02 1.15,0.69 2.12,-0.92 4.16,-0.26 0.31,0.13 -0.3,1.01 0,0 -0.75,5.5 -1.06,3.26 -2.35,2.1 -2.06,0.97 -3.63,3.28 -2.98,4.92 0.03,3.41 2.01,1.97 4.81,0.81 1.83,-0.13 1.42,-1.06 1.65,-2.27 1.76,-0.51 0.65,0.78 -0.02,4.47 0.85,3.57 -0.72,1.81 -2.44,0.66 -0.77,1.14 -1.12,0.68 -2.4,0.11 -1.32,1.34 0.98,0.43 2.79,-0.25 3.3,1.74 0.21,1.08 -0.82,1.72 -4.01,-0.28 0,0 -5,-2.24 -4.38,-0.93 0,0 0.36,-2.36 -0.35,-1.25 -5.269999,-0.65 -1.12,0.58 -0.58,-0.14 -1.13,-1.31 -2.77,-0.77 -0.92,-0.74 -0.22,-0.7 0.56,-1.03 2.8,-1.31 1.12,-1.06 -0.12,-0.95 -1.06,-1.48 -3.45,0.41 -3.22,2.16 -2.19,-1.09 -0.04,-1.46 -0.73,-1.24 0.23,-0.94 2.73,-2.88 -0.54,-0.9 -1.07,-0.21 -37.58,-0.39 -1.59,1.06 0.51,1.45 -4.57,0.48 -0.81,-1.43 -1.2,-0.8 -3.41,-1.43 -1.85,-0.25 -1.36,2.51 -0.09,2.35 -2.08,1.65 -0.77,3.95 -1.06,1.01 -13.71,0.19 -3.55,-0.53 -0.41,0.11 0,1.61 -3.46,2.44 -1.94,-0.89 -3.41,0.43 -1.25,-0.4 0,0 0.42,-3.28 1.13,-1.18 0.63,-1.54 -1.34,-3.74 1.3,-2.16 2.11,-1.8 0.2,-2.74 -0.21,-0.96 -2.14,-0.28 -0.78,-0.39 -0.41,-0.86 -0.17,-1.82 1.2,-1.9 -0.34,-1.07 0.48,-3.46 -0.22,-0.98 -1.3,-0.14 -0.54,-0.61 0.15,-2.86 1.4,-1.61 3.06,-1.78 -2.46,-2.23 -0.48,-0.96 1.87,-2.2 0.59,-1.92 -0.66,-4.66 -1.53,-1.66 -0.12,-9.69 2.37,-0.08 0.82,-0.48 0.04,-0.72 -0.42,-3.5 -2.68,-2.04 -0.22,-1.76 -0.98,-1.52 -0.3,-4.2 0.25,-8.96 -0.3,-0.95 -0.82,-0.35 -0.97,-2.58 -1.69000003,-2.17 z"
// // // //  title="Ogun"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-OG" />
// // // // <path
// // // //  d="m 194.92165,384.14874 4.62,-0.88 2.51,0.43 -0.71,4.14 2.04,2.7 4.74,4.17 0.23,0.78 0,0 -2.45,3.49 -0.9,0.6 -1.56,-0.14 -1.41,1.72 -0.18,1.38 0.4,0.84 2.02,0.82 -0.88,2.89 0.77,2.49 0.42,0.28 -1.43,3.54 -2.15,1.05 -1.76,1.83 -0.47,1.04 0.15,1.39 -3.23,6.89 0.32,0.83 -0.37,0.85 -1.51,0.73 -1.24,1.67 -0.62,4.63 1.18,1.28 0.16,0.82 -0.88,0.51 -0.01,1.63 -1.19,-0.51 -0.25,0.25 -0.95,4.96 -1.51,3.39 -2.68,1.03 -0.81,-0.36 -1.19,-1.48 -1.34,-0.12 -3.77,3.16 -0.74,0.03 -2.1,-5.46 2.01,-2.25 -1.74,-2.09 -1.64,-0.34 -3.29,0.39 -6.64,-0.11 -1.68,-0.36 -2.28,0.38 -2.12,-0.39 -2.2,1.01 -0.46,0.78 -0.09,1.96 -0.95,0.68 -0.79,2.27 -1.73,0.8 -0.45,1.04 -1.76,1.61 -0.49,0.96 0.09,2.22 -0.8,0.99 0,2.84 1.23,0.64 1.39,2.28 0.58,1.45 -0.36,1.72 -0.83,1.96 -1.74,1.71 -0.85,3.74 -2.94,0.86 -0.58,0.62 -0.96,3.62 -0.8,0.7 0.28,-0.44 -0.25,0.6 0.44,0.91 0.7,0.05 1.94,1.36 1.65,2.94 1.56,0.1 1.33,1.04 1.24,2.26 -0.39,1.16 0,0 -6.9,16.74 0,0 -4.86,-5.94 -9.17,-9.24 -14.82,-11.96 -2.7,-1.66 0,0 4,0.28 0.83,-1.73 -0.21,-1.07 -3.3,-1.74 -2.79,0.25 -0.98,-0.43 1.32,-1.35 2.4,-0.1 1.11,-0.68 0.78,-1.14 2.44,-0.66 0.72,-1.82 -0.84,-3.57 0.01,-4.47 -0.64,-0.78 -1.77,0.51 -1.65,2.27 -1.42,1.06 -1.83,0.13 -4.8,-0.81 -2.01,-1.96 -0.03,-3.41 2.98,-4.92 3.63,-3.28 2.06,-0.96 2.35,-2.1 1.07,-3.25 0.74,-5.51 0,0 2.67,-1.42 2.15,-4.97 4.29,-3.44 2.32,-0.02 2.51,1.24 2.91,2.22 1.81,0.03 0.64,-1.26 -0.23,-1.63 0.41,-2.11 -0.46,-3.98 1.56,-6.54 0.84,-0.57 5.86,-1.59 -0.62,-2.4 0,0 4.55,-1.45 7.78,0.43 6.97,-0.31 1.55,0.53 1.42,2.21 1.03,3.19 -0.16,0.86 1.09,2.69 2.28,0.59 5.53,-3.5 3.04,-4.43 1.71,-3.92 1.7,-8.1 1.13,-2.14 2.4,-2.48 2.18,-1.45 0.85,-2.06 1.86,-0.38 1.5,1.24 0.82,-0.3 1.49,-2.44 z"
// // // //  title="Ondo"
// // // //  fill="green"
// // // //  stroke="#888888"
// // // //  stroke-width="2"

// // // //  id="NG-ON" />
// // // // <path
// // // //  d="m 117.18165,366.88874 8.27,0.22 2.6,-0.31 3.55,-1.61 0.36,-0.09 0.18,0.85 -0.08,-0.88 2.65,0.38 4.74,-1.7 2.18,0.58 1.48,3.17 3.49,-0.13 1.67,-0.8 0.39,0.54 0,0 -1.52,5.3 -1.99,1.64 -2.18,0.94 -1.62,1.5 -1.9,4.25 -0.12,1.4 0.81,2.81 -1.19,3.99 0.69,4.78 2.85,6.11 0.84,3.79 0.83,1.7 0,0 0.62,2.41 -5.86,1.58 -0.84,0.58 -1.56,6.54 0.46,3.98 -0.4,2.11 0.23,1.63 -0.64,1.26 -1.81,-0.03 -2.91,-2.22 -2.51,-1.24 -2.32,0.01 -4.28,3.45 -2.15,4.96 -2.67,1.43 0,0 0.3,-1.01 -0.31,-0.13 -4.16,0.26 -2.12,0.92 -1.15,-0.69 -1.1,0.02 -3.06,1.96 -2.97,-7.11 -3.389999,-0.59 -3.85,1.98 -1.97,0.01 -0.59,-4.28 -0.52,-0.84 -0.94,-0.39 -1.4,1.11 -2.74,1.08 0,0 2.34,-9.84 0.43,-5.29 1.67,-8.72 -0.87,-0.49 -3.05,-4.88 -3.11,-2.33 -0.27,-0.93 -0.14,-0.88 1.15,-1.09 0.78,-1.76 0.87,-9.27 0.6,-0.28 4.3,1.34 2.32,-0.75 0.78,-0.99 0.13,-2.3 1.06,-0.57 2.81,-3.32 3.009999,1.84 3.59,5.56 2.13,-0.93 0.65,-1.43 2.05,-1.16 0.98,-1.39 0.28,0.39 1.83,-1.51 2.29,-0.76 0.25,0.38 0.99,-1.34 0.31,-1.28 z"
// // // //  title="Osun"
// // // //  fill="white"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-OS" />
// // // // <path
// // // //  d="m 5.381651,335.88874 3.19,-2.78 3.17,-0.02 4.08,-0.72 1.5,-0.79 0.19,-0.99 3.91,-3.44 1.66,-0.66 6.93,-5.53 2.57,-0.27 0.69,0.19 0.91,1.13 0.45,-0.11 0.53,0.75 0.93,-0.15 7,-3.26 3.01,-2.21 1.13,-0.26 2.49,-1.94 5.79,-3.3 6.64,-2.92 4.42,-3.43 0.45,-1.11 0.02,-2.65 1.69,-3.71 3.82,-2.08 2.04,-0.09 4.08,2.46 0.54,2.48 1.69,2.04 3.25,2.42 5.7,1.74 2.4,1.54 1.1,-0.13 3.83,1.08 2.21,-0.08 2.829999,-1.8 1.31,0.78 0.16,1.3 -2.34,3.16 -3.159999,2.09 -0.57,0.59 -0.35,1.6 -2.08,1.55 -1.03,4.5 0.81,1.58 1.32,5.29 1.66,1.91 2.999999,7.11 1.97,2.63 0.79,2.77 0.09,2.1 1.22,3.44 2.95,4.24 3.46,2.25 0.03,0.8 0.78,0.66 0.39,2.77 1.9,4.81 0.71,0.94 1.45,0.07 0.49,0.66 0,0 0.53,3.2 -0.31,1.28 -0.99,1.34 -0.25,-0.38 -2.29,0.76 -1.83,1.51 -0.28,-0.39 -0.98,1.39 -2.05,1.16 -0.65,1.43 -2.13,0.93 -3.59,-5.56 -3.009999,-1.84 -2.81,3.32 -1.06,0.57 -0.13,2.3 -0.78,0.99 -2.32,0.75 -4.3,-1.34 -0.6,0.28 -0.87,9.27 -0.78,1.76 -1.15,1.09 0.14,0.88 0.27,0.93 3.11,2.33 3.05,4.88 0.87,0.49 -1.67,8.72 -0.43,5.29 -2.34,9.84 0,0 -5.89,0.88 -1.51,1.37 -3.18,1.24 -3.04,-0.13 -2.7,0.58 -6.09,0.25 -0.37,-0.28 0.33,-1.13 3.97,-4.01 -0.41,-2.87 -1.1,-2.7 0.1,-2.22 -0.64,-1.1 -2.98,-1.22 -0.41,-0.71 -0.33,-5.66 -1.17,-1.89 -6.2,-0.22 -2.47,0.6 -1.13,1.11 -1.02,0.26 -1.59,-1.13 -1.75,-4.34 -2.6,-0.29 -1.62,1.48 -1.14,4.24 -2.78,3.97 -1.74,0.49 -4.05,-0.28 -2.34,-1.13 -3.01,-2.36 -3.2,-4.51 -1.02,-3.04 -3.05,-2.47 -2.12,-2.51 -0.52,-3.66 0.51,-0.57 0.41,0.24 1.74,-5.98 0.16,-3.09 -0.54,-1.75 -0.88,-0.61 -1.37,0 -0.47,0.45 -0.57,1.25 -0.94,5.56 -0.84,-0.13 -1.31,-2.17 -0.56,-2.36 -0.15,-6.48 -0.41,-1.43 -1.24,-1.79 -1.9,-0.93 -3.49,0.21 -5.97000003,4.29 0,0 1.07000003,-2.08 0.73,-4.3 1.33,-4.15 -0.3,-1.12 0.37,-2.7 1.13,-2.26 0.36,-2.89 -2.44,-3.06 -1.17,-3.99 0.08,-2.02 1.05,-1.87 -0.44,-2.05 0.48,-0.7 1.25,-0.3 1.37,-2.88 -0.43,-0.44 0.73,-0.97 0.01,-1.07 z"
// // // //  title="Oyo"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-OY" />
// // // // <path
// // // //  d="m 379.00165,223.49874 1.53,-0.49 3.18,0.08 2.78,0.88 2.61,4.16 0.78,4.8 -0.04,12.38 10.97,-2.19 1.06,0.21 1.8,1.92 0.97,3.13 0.26,5.94 -0.23,1.17 -2.38,4.47 -0.09,1.69 0.6,0.85 3.92,1.42 0.79,0.71 0.9,1.16 1.65,4.07 1.56,1.34 1.51,0.53 4.8,0.27 5.47,1.48 10.04,-0.59 4.39,-1.41 2.89,-5.21 4.76,-1.3 0.5,-1.67 -0.27,-1.74 -3.17,-4.06 0.3,-1.44 3.03,-1.78 7.6,3.95 2.57,0.51 9.26,4.93 11.07,4.74 6.18,4.04 6.36,3.43 0,0 1.56,3.94 0.21,2.15 -0.51,4.08 0.76,5.96 2.3,3.86 1.05,6.02 -0.55,1.33 0.3,2.25 0.43,0 0.21,5.54 -1.78,3.08 -12.18,5.86 -1.9,-0.11 -9.52,2.1 -2.49,1.44 -2.06,4.19 -4.74,5.72 -7.11,3.76 -7.68,7.65 -2.43,1.19 -4.41,1.01 -4.11,0.54 -3.85,-0.25 0,0 -1.46,-2.68 -2.52,-2.07 -10.36,-4.33 -9.76,2.79 -8.19,0.15 -3.66,-1.3 -5.15,-2.71 -1.44,-2.07 0.3,-5.41 -0.32,-1.24 -2.09,-2.43 -0.64,-1.72 0.32,-2.25 1.55,-1.36 1.55,-2.86 1.46,-1.05 1.41,-0.2 2.11,-1.98 2.7,-4.01 0.79,-2.93 -2.01,-2.21 -1.04,-0.56 -2.77,1.35 -3.7,0 -5.32,-0.56 -2.16,-0.98 -1.93,-3.41 -0.63,-4.48 -2.08,-0.85 -2.42,-0.11 -1.69,-1.65 0,0 1.67,-3.94 -0.12,-3.41 -1,-2.09 -1.71,-1.21 -2.57,-3.08 -3.26,-5.28 -0.1,-1.16 1.05,-1.4 -0.21,-4.74 1.76,-1.28 0.4,-3.08 1.91,-1.55 0.42,-1.07 -0.53,-2.1 0.7,-7.81 -0.18,-1.97 0.34,-1.1 2.39,-1.97 -0.75,-3.52 -1.36,-2.82 0.22,-2.71 2.13,-4.97 1.9,-1.4 2.19,-0.73 1.32,-1.56 0.55,-1.43 0.21,-2.9 z"
// // // //  title="Plateau"
// // // //  fill="red"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-PL" />
// // // // <path
// // // //  d="m 277.72165,584.56874 -1.46,1.39 0.02,0.77 -0.62,-0.24 0.22,-1.42 1.44,-0.82 0.4,0.32 z m -3.14,-1.84 -1.72,-0.98 -0.55,0.15 -0.55,0.15 -0.21,-0.69 0.86,-0.79 -0.31,-0.67 0.31,-0.65 -0.07,-1.05 -0.57,-0.81 -0.91,-0.17 -0.22,0.16 -0.71,-1.7 -0.27,-0.17 0.14,-0.46 -0.86,-0.86 -0.27,0.36 -0.96,0.15 -0.19,0.82 0.57,1.03 0.5,1.05 0.41,2.04 -0.48,-0.23 -0.45,0.63 1.07,3.48 -0.14,1.27 1.17,4.04 -0.24,0.22 0.77,0.46 2.06,-0.43 0.4,-0.45 0.13,-0.58 1.75,0.49 0.03,-2.23 0.67,-1.56 -1.16,-2.02 z m -3.8,-10.26 0.41,0.46 2.18,0.09 0.19,-0.91 -0.41,-0.31 -1.69,0.3 -0.68,0.37 z m 1.27,-2.46 0.36,1.13 0.52,0.19 -0.29,-1.9 -0.59,0.58 z m 7.2,9.74 -1.44,-2.86 -1,-0.7 -1.63,-0.81 -0.27,-0.12 -0.84,0.65 0.65,0.09 1.31,1.13 0.14,0.21 -0.23,0.46 0.52,0.93 0.12,1.92 1.29,1.2 0.91,0.17 0.67,-1.41 -0.2,-0.86 z m 5.92,6.12 -2.08,-2.62 -1.31,1.63 0.79,0.79 0.81,-0.24 0.38,0.91 0.76,0 0.22,0.62 1.17,-0.5 1.08,1.08 1.86,-1.49 -0.62,-0.55 -3.06,0.37 z m -19.91,-6.61 -1.12,0.53 -0.28,1.32 1.14,0.4 1.44,1.08 1.03,2.28 -0.29,-3.36 -0.36,-0.15 0.26,-1.49 -1.82,-0.61 z m 18.13,2.56 -2.37,-1.62 -1.55,-2.35 -0.03,-0.27 -0.48,-1.7 -0.48,0.43 -0.4,-0.36 0.43,-0.67 -0.03,-1.49 -0.12,-0.07 -0.57,1.85 -2.25,-0.7 -0.53,-0.1 -0.88,-1.08 -0.07,-1.52 -0.36,-0.29 -0.07,-0.46 -0.26,-0.17 -0.15,-0.65 0.5,-0.79 -0.98,-1.22 -0.81,0.53 -0.34,0.89 0.65,1.54 -2.06,0.77 -0.41,0.36 -0.93,0.38 -0.52,0.05 -1,0.77 -0.46,0.62 -0.09,-1.51 -0.58,0.74 -0.22,0.51 1,1.65 0.55,2.45 -1.31,0.45 -0.53,0.21 -1.38,-1.61 -0.71,-1.9 -1.45,-2.41 -1.5,-0.51 0.56,-1.55 -0.68,-2.22 0.98,-0.81 0.35,-0.48 -0.53,-0.67 -1.81,-0.24 -1.81,-1.11 -0.28,1.59 -0.89,0.57 -0.33,-0.77 -1.27,-0.14 -0.34,-0.34 -0.64,0.19 -0.77,0.03 -0.62,-0.87 -0.19,-0.14 -0.55,0.41 0.19,0.99 -0.14,0.33 0.46,0.31 1.27,1.27 -0.12,1.53 0.98,4.64 3.22,3.31 0.02,1.18 -1.81,1.46 -0.1,0.58 1.82,6.56 0.55,3.32 2.41,2.48 -0.29,0.33 -7.24,0.69 -2.24,-0.75 -0.09,-2.71 -0.24,-2.54 0.14,-0.46 -0.03,-0.17 -0.46,-2.71 -0.19,-0.75 1.94,-3.67 -0.19,-2.67 -0.67,0.15 -0.68,0.1 -3.96,-2.6 -1.2,-4.38 -1.38,-1.87 -1.99,-0.02 -6.54,2.54 -1.04,-0.26 -0.35,-1.94 0.42,-1.46 -3.31,-1.44 -0.5,-0.83 0.07,-4.34 1.9,-2.67 0.76,-2.05 0.03,-1.27 -1.29,0.16 -0.84,-0.78 1.33,-4.44 4.49,-7.84 2.77,0.17 0.55,-0.5 0.75,-2.49 1.54,-0.79 -0.23,-1.81 1.58,-1.07 0.95,-1.48 -0.03,-1.94 -0.63,-1.54 -0.76,-0.58 -1.92,-0.83 -2.94,0.49 -1.04,-0.28 -0.57,-1.04 0.21,-0.44 3.52,-1.81 0.19,-5.3 0.7,-1.48 2.05,-1.42 0.89,-1.75 0.82,-3.18 -1.09,-3.54 0.23,-0.35 1.11,1.28 2.4,0.21 -2.75,13.08 1.51,0.44 3.47,-0.67 2.12,0.78 0.44,1.66 -0.52,4.62 -1.09,2.76 0.26,1.37 1.84,1.3 1.72,3.41 2.16,1.65 2.14,0.41 6.72,-0.14 4.7,1.12 4.15,-1.07 2.13,-0.03 4.51,1.13 2.57,-0.95 0.55,0.05 0.66,1.72 0.06,2.78 -2.4,4.19 -3.41,4.33 -1.37,3.71 -0.16,1.09 0.6,1.11 1.45,1.41 1.8,0.27 3.13,-0.59 1.11,-0.64 2.79,-0.12 3.28,1.22 1.81,-0.42 2.94,1.4 2.35,1.79 1.95,3.49 0.63,2.3 -0.96,4.27 0.58,4.55 -0.51,0.32 -0.04,0.64 0.61,1.17 -1.22,0.77 -0.84,-0.72 -0.17,-0.98 -1.22,-0.27 -0.55,-0.26 -0.26,0.46 -1.39,1.18 -0.58,-0.24 -0.26,-0.36 -0.38,-0.02 -0.71,0.39 -1.5,-2.36 -1.27,0.96 -0.93,-0.36 -1.6,-0.5 -0.65,-1.03 -0.67,0.19 -0.74,-0.86 -0.62,0.51 -0.19,0.79 -0.89,0.33 0.34,1.08 0.27,1.03 0.24,0.6 0.78,0.6 0.77,-0.24 0.57,0.08 0.86,-0.31 -0.17,1.75 -1.77,0.17 -1.44,0.53 -0.74,-1.2 -0.1,-0.33 -1.05,-1.17 -0.15,-0.94 0.11,-0.22 z m 21.52,4.31 -0.69,-0.39 -0.43,-0.03 -0.88,-0.36 -0.02,-0.02 -0.4,-0.36 -0.42,0.46 -0.32,-0.13 0.35,-0.54 -0.88,-1.49 -0.9,0.53 -1.04,-0.9 -0.36,-0.34 -0.17,-0.51 -1.39,0.01 -0.26,0.28 -1.23,0.87 -1.33,-0.05 -0.46,0.04 -0.43,-0.23 -0.63,-0.63 -0.53,-0.31 -0.09,-0.81 -1.24,0.34 -1.03,0.02 0.02,-0.42 -1.25,-0.34 -0.91,-0.46 -1.34,-0.09 -0.48,0.24 -0.23,0.58 -0.02,0.79 1.72,0 0.09,0.08 1.17,1.07 0.23,0.67 0.36,1.37 0.84,0.31 0.16,-0.4 0.34,0.28 1.07,0.03 0.06,0.22 -1.84,0.74 -0.43,0.15 -0.69,2.4 5.47,0.77 4.18,-0.92 5.93,-0.14 -0.19,-1.22 0.52,-1.16 z m -48.68,-18.07 0.79,-0.17 0.92,-0.79 0.08,-1.12 1.29,0.9 1.6,0.63 -0.96,1.17 0.43,1.85 0.27,0.32 -0.03,0.58 -0.6,0.94 0.22,0.64 1.01,0.31 1.26,1.35 2.07,4.36 -0.93,0.61 -0.42,0.84 0.15,0.91 3.15,1.85 0.6,2.9 0.88,1.32 -0.12,1.39 0.48,1.61 1.48,1.13 -1.12,1.39 -0.96,0.36 -0.86,-0.5 -0.6,0.41 -6.38,-1.39 -0.81,-2.54 0.53,-0.62 -0.6,0.02 -1.36,-3.89 -0.81,-1.9 0.1,-2.06 1.63,-1.56 -0.17,-1.35 -1.81,-1.66 -1.69,-1.15 -0.76,-4.06 -0.29,-0.58 0.02,-1.82 -0.77,-1.08 1.24,-0.74 0.88,0.63 0.67,0 0.3,0.56 z"
// // // //  title="Rivers"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-RI" />
// // // // <path
// // // //  d="m 178.43165,0.2287449 12.88,5.68 20.53,7.2500001 4,2.35 4.64,-1.49 3.65,-0.02 8.54,4.12 15.88,15.56 5.98,10.42 0,0 -3.03,2.6 -7.1,4 -9.51,-1.28 -1.9,-0.66 -1.7,-2.05 -2.27,-0.68 -4.97,-0.19 -0.59,5.48 -0.73,1.89 -0.5,0.22 -2.7,-1.44 -2.79,0 -4.85,1.56 -2.11,1.82 -0.11,0.7 0.78,5.14 0.07,8.44 -1.35,1 -4.04,1.64 -10.02,0.79 -6.09,0.95 -5.83,8.58 -1.88,1.87 -3.07,1.91 0.06,2.88 1.43,4.64 0.65,4.25 -0.74,3.029995 -2.46,1.7 -6.11,0.53 -1.28,-0.29 -4.8,0.64 -2.64,-0.31 -4.47,0.33 -9.33,-1.67 -0.92,0.6 -0.93,4.51 0.1,18.21 -0.66,13.78 0,0 -1.62,0.97 -0.94,-0.07 -0.77,-1.75 -2.04,0.72 -1.89,-0.86 -1.69,0.12 -12,5.45 -2.4,3 -1.71,1.35 -2.78,-0.29 -0.76,-0.51 -2.55,-3.65 1.16,-4.77 2.61,-5.63 2.12,-9.79 -0.79,-13.05 0.14,-9.94 1.01,-3.779995 1.28,-1.48 3.95,-1.18 2.68,-0.02 3.17,2.04 1.02,-0.04 0.64,-1.56 0.24,-8.02 -1.68,-5.52 -0.04,-2.04 1.3,-6.06 0.18,-3.32 -1.8,-4.28 -1.86,-2.15 0.42,-3.7 1.42,-2.98 -0.09,-2.4 1.62,-3.93 -0.4,-1.25 -1.08,-0.88 -1.16,0.31 -2.49,3.69 -0.63,0.56 -1.82,0.43 -3.06,-0.68 -2.95,-2.07 -9.56,-3.12 -1.06,-1.1 -3.19,-1.82 -1.65,-2.12 -0.76,-0.31 -4.629999,1.58 -1.86,-0.74 -6.62,0.14 0,0 0.09,-16.44 4.14,-0.02 16.559999,-14.58 25.12,-5.0100001 2.41,2.14 5.71,0.48 6.45,-0.72 4.85,0.56 5.33,-0.16 5.25,-6.26"
// // // //  title="Sokoto"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-SO" />
// // // // <path
// // // //  d="m 488.91165,275.87874 4.59,-2.65 5.85,0.78 10.59,-4.85 6.44,1.09 3.99,0.03 0,0 3.57,0.71 5.9,-0.6 12.46,0.02 6.37,-0.47 0,0 5.45,10.18 1.46,1.92 4.65,1.08 2.08,1.29 5.26,9.82 -0.46,2.17 0.34,3.84 2.66,2.94 4.14,1.47 2.02,3.84 0.26,1.81 -1,3.62 -5.99,11.44 0.38,5.78 -0.44,2.08 -6.12,5.22 -8.63,11.52 -5.08,5.48 -3.8,3.22 -4.14,4.78 -0.82,1.58 2.52,6.73 2.91,4.7 2.71,2.45 2.72,-1.99 2.83,-4.01 1.64,-0.38 1.42,0.43 1.52,1.12 2.5,3.15 4.32,3.84 2.15,2.6 1.04,2.02 -0.58,5.49 0.74,1.73 0.38,3.54 1.94,4.62 -0.05,1.56 1.22,0.88 0,0 -4.94,5.48 -1.09,1.94 -0.89,2.92 0.38,5.92 0.92,3.32 1.33,2.12 -0.18,1.29 -0.98,0.73 -4.04,-0.35 -0.68,0.46 -2.06,0.06 -0.18,1.64 -1.72,0.75 -1.54,1.93 -1.91,0.43 -1.09,4.21 -2.12,0.65 -1.37,2.72 0.06,0.5 0.94,-0.05 0.46,0.44 0.09,1.77 0.88,0.11 0.19,0.89 -0.99,0.43 -0.62,1.15 0.94,1.52 -0.08,1.04 -1.92,1.11 -0.22,3.22 -1.46,1.44 -0.57,1.91 -1.81,0.78 -1.77,-0.83 -0.6,0.54 -1.24,0.15 -0.46,0.64 0.46,0.88 -0.18,1.73 -0.44,0.5 -3.75,0.68 -0.42,0.22 -0.2,1.37 -1.37,-0.18 -3.03,-2.03 -2.25,1.01 -0.67,-0.7 -3.01,-0.66 -1.42,-1.22 -0.58,0.05 -1.22,1.41 -2.03,-0.08 0.24,-8.73 -2.03,-2.16 -2.24,-0.11 -2.36,2.14 -2.84,-0.48 -1.86,-0.85 -1.43,-3.38 -1.18,-2.19 -1.22,-0.81 -1.17,-0.07 -1.31,-2.11 -0.12,-0.73 1.66,-4.79 -2.66,-1.84 -1.49,-0.2 -0.6,0.74 -1.69,-2.15 -1.03,-0.08 -1.5,-1.61 -0.77,-0.07 -0.36,-1.52 -1.25,-0.63 -0.4,0.46 -1.47,-0.36 -1.85,-1.58 0.52,-1.93 -0.4,-2.09 -1.65,-1.31 -0.76,4.76 0.08,2.89 -1.39,6.02 -0.88,1 -1.67,0.57 -0.34,0.87 -0.64,0.11 -0.94,-0.97 -15.69,1.52 -2.64,-3.08 0.62,-1.75 -0.85,-2.06 -0.19,-1.18 0.07,-0.81 -0.89,-0.32 -8.2,7.4 -0.64,1.12 -2.44,1.72 -1.12,1.84 -4.62,4.63 -1.34,-0.72 -2.2,-0.1 -1.6,-0.22 -0.8,-0.61 -0.9,2.13 0.3,0.79 -0.76,0.97 -0.38,1.8 0.36,2.03 -0.28,1.07 -0.6,0.37 -1.02,2.82 -1.35,5.37 -0.5,0.39 -0.68,-0.34 -1.32,0.37 -1.03,-1.32 -0.44,0.46 0,0 1.9,-8.19 0.03,-8.76 0.33,-1.08 -0.61,-0.73 2.11,-11.5 3.31,-6.16 3.44,-3.25 3.09,-1.94 0.92,-1.43 -0.29,-5.92 2.38,-5.89 0.59,-3.23 -0.56,-1.78 0.26,-1.04 -1.17,-1.36 0.14,-0.65 -8.37,-7.57 -4.44,-5.65 -5.14,-4.9 -7.48,-1.77 -8.18,-0.48 -7.47,0.95 -6.12,2.63 -1.9,-0.57 3.79,-5.97 0,0 1.21,-1.39 11.23,-7.21 0.11,-1.19 -1,-2.68 0.54,-0.65 -0.35,-2.88 -2.03,-2.51 -1.71,-1.36 0.73,-2.86 1.33,-2.14 1.28,-0.86 1.86,0 1.73,0.9 1,1.07 1.52,-0.23 0.33,0.41 4.51,0.95 2.74,-0.82 2.58,-3.68 0,0 3.85,0.25 4.11,-0.54 4.41,-1.01 2.43,-1.19 7.68,-7.65 7.11,-3.76 4.74,-5.72 2.06,-4.19 2.49,-1.44 9.52,-2.1 1.9,0.11 12.18,-5.86 1.78,-3.08 -0.21,-5.54 -0.43,0 -0.3,-2.25 0.55,-1.33 -1.05,-6.02 -2.3,-3.86 -0.76,-5.96 0.51,-4.08 -0.21,-2.15 z"
// // // //  title="Taraba"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-TA" />
// // // // <path
// // // //  d="m 526.42165,32.448745 12.45,0.19 9.56,1.2 10.76,4.18 11.69,2.55 2.73,1.51 6.09,5.17 4.78,3 1.58,0.14 0.3,-0.82 1,-0.28 1.65,0.65 0.62,-0.52 -0.55,-1.18 1.49,0.16 1.7,0.94 1.66,-0.42 0.83,0.71 0.63,1.07 1.04,-0.62 2.85,0.61 0.74,0.5 0.93,0.12 0.99,-0.01 0,0 -0.08,4.21 -1.49,8.02 1.23,3.85 1.45,1.82 4.8,3.84 0.48,3.74 -1.84,4.21 -2.37,3.08 -7.06,6.31 -0.55,2.2 1.72,3.83 -0.05,5.789995 -2.54,16.29 -0.13,3.5 1.69,7.44 -4.72,9.14 0.15,1.94 0.64,0.36 4.91,-0.21 3.13,3.75 0.84,3.33 -0.99,2.11 -4.54,4.43 -3.3,5.9 -2.89,3.35 -0.9,2.86 0.04,2.97 0.76,4.15 -0.24,2.94 -2.09,3.08 -6.11,3.65 -11.21,3.02 -2.66,1.92 -1.72,2.83 -0.61,2.77 0.28,8.39 -3.41,4.53 -3.04,0.69 0,0 -6.78,0.01 -0.3,-0.51 -0.77,-6.45 1.2,-11.85 -0.67,-4.87 -3.68,-3.38 -1.58,1.02 1,-1.54 -3.42,-3.58 -4.75,-6.4 -8.49,-6.26 -2.18,-1.29 -2.98,-1.01 -4.04,-0.17 -4.17,1.51 -0.91,0.88 0,0 -3.04,-0.37 -1.63,-1.53 0.99,-6.78 1.05,-2.72 0.23,-4.92 -8.35,-20.91 -0.2,-3.87 -0.95,-2.71 -0.33,-2.7 -0.21,-6.74 -3.16,-4.66 0.19,-1.81 -0.77,-7.079995 -1.14,-2.93 -7.74,-6.19 0,0 -0.87,-2.9 -1.76,-11.53 -2.21,-3.4 -1.85,-0.88 -2.03,0.61 -4.99,-2.22 -5.86,1.86 -1.12,0.72 -1.46,-2.53 -0.69,-4.35 -2.13,-4.78 -2.21,-1.25 -6.33,1.96 -2.82,1.37 -3.16,0.63 -5.32,2.59 -2.1,3.99 -3.14,1.8 -6,-0.73 -1.79,-1.18 0,0 7.38,-7.5 3.25,-4.6 4.08,-3.51 5.19,-5.85 3.98,-2.54 9.05,-4.06 16.06,-0.94 12.55,-4.7 19.58,-1.07 z"
// // // //  title="Yobe"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-YO" />
// // // // <path
// // // //  d="m 258.59165,50.268745 5.45,6.52 5.08,-0.11 3.34,-0.61 0,0 -1.44,10.82 0.99,6.17 -0.07,6.05 1,5.17 0.39,4.75 1.31,3.21 -0.4,3.57 2.5,5.199995 0.69,3.05 -0.13,1.68 0.95,2.47 -1.09,5.16 -1.82,3.63 1.26,1.21 2.53,1.16 2.68,2.29 1.16,1.43 0.5,1.95 -1.89,1.62 -3.34,-0.81 -0.55,3.2 -4.88,3.97 -1.28,-0.87 -6.61,0.13 -1.5,0.84 -0.65,4 -1.56,4.14 -0.45,3.76 0.16,1.07 1.91,1.9 0.9,3.69 -1.25,6.1 -0.02,2.33 0,0 -1.01,-0.03 -2.34,2.38 -2.75,1.77 -0.85,1.14 -1.71,3.41 -0.64,3.55 -1.51,3.23 -3.04,3.1 -2.33,1.51 -4.71,0.62 -7.94,-0.57 -5.64,0.95 -5.27,4.71 -2.86,4.16 -1.28,0.76 -1.68,0.12 0,0 0.07,-0.84 -1.59,-4.09 -3.8,-6.64 -3.32,-4.4 0,0 -0.21,-5.48 -1.38,-7.58 -1.93,-3.01 -5.38,-2.71 0,-1.2 2.05,-6.49 0.01,-2.47 -1.41,-2.15 -4.35,-1.77 -4.85,-0.62 -1.22,0.81 -2.49,0.59 -3.79,-0.5 -5.47,0.76 -3.65,-2.41 -2.87,-0.11 -1.69,-3.3 -1.08,-0.57 -3.61,0.65 -2.09,-0.31 -0.91,-0.64 -0.79,0.15 -1.06,0.62 -0.82,2.32 -6.34,1.46 -4.11,-2.25 -1.82,0 -0.86,0.48 0,0 0.66,-13.78 -0.1,-18.21 0.93,-4.51 0.92,-0.6 9.33,1.67 4.47,-0.33 2.64,0.31 4.8,-0.64 1.28,0.29 6.11,-0.53 2.46,-1.7 0.74,-3.029995 -0.65,-4.25 -1.43,-4.64 -0.06,-2.88 3.07,-1.91 1.88,-1.87 5.83,-8.58 6.09,-0.95 10.02,-0.79 4.04,-1.64 1.35,-1 -0.07,-8.44 -0.78,-5.14 0.11,-0.7 2.11,-1.82 4.85,-1.56 2.79,0 2.7,1.44 0.5,-0.22 0.73,-1.89 0.59,-5.48 4.97,0.19 2.27,0.68 1.7,2.05 1.9,0.66 9.51,1.28 7.1,-4 3.03,-2.6 0,0 z"
// // // //  title="Zamfara"
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-ZA" />
// // // //  fill="orange"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // // </svg>

// // // // <!-- Indicator Matrix -->
// // // //   <rect x="600" y="520" width="140" height="80" fill="#ffffff" stroke="#000000" stroke-width="2" />
// // // //   <text x="630" y="540" font-family="Arial, sans-serif" font-size="12" fill="#000000">Indicator Matrix</text>
// // // //   <!-- Sample data for indicator matrix -->
// // // //   <rect x="640" y="550" width="20" height="20" fill="green" />
// // // //   <rect x="670" y="550" width="20" height="20" fill="yellow" />
// // // //   <rect x="700" y="550" width="20" height="20" fill="red" />
// // // //   <text x="635" y="590" font-family="Arial, sans-serif" font-size="12" fill="#000000">Low</text>
// // // //   <text x="660" y="590" font-family="Arial, sans-serif" font-size="12" fill="#000000">Medium</text>
// // // //   <text x="705" y="590" font-family="Arial, sans-serif" font-size="12" fill="#000000">High</text>

// // // //   `;
// // // // };



// // // // const generateMotaEngilMap = () => {
// // // //   // Your dynamic SVG generation logic for Mota-Engil map goes here
// // // //   return `
// // // //   <div class="map-container">
// // // //   <svg width="800" height="610">   

// // // //   <rect x="10" y="10" width="740" height="900" fill="#f0f0f0" stroke="#ccc" stroke-width="2" />
  
// // // //   <text x="400" y="30" font-family="Arial, sans-serif" font-size="20" fill="#000000" text-anchor="middle">Security Incident Map</text>

// // // //   <svg id="nigerian-map" x="20" y="20" width="750" height="650" viewBox="0 100 800 500">

// // // //  <path
// // // //  d="m 291.01165,491.65874 0.6,0.77 4.83,-0.89 2.71,0.27 2.05,1.34 0.33,1.46 0,0 0.07,4.36 -0.55,2.86 0.05,0.73 0.94,1.03 14.09,0.86 1.24,1.86 0.22,2.19 0.7,1.04 3.21,2.33 1.34,0.21 0,0 1.08,1.29 -0.59,3.72 0.15,3.78 1.37,4.63 0.73,1.68 1.71,2 0.76,2.55 -0.6,1.21 -3.42,-0.76 0,0 -2.69,-2.61 -2.54,-0.84 -2.76,-2.14 -0.58,-2.11 -1.19,-1.47 -3.4,-0.91 -2.42,0.14 -0.28,0.91 0.53,3.51 -1.84,5.1 0.32,0.45 2.23,-0.16 -0.7,2.44 -0.73,0.9 -6.08,-0.16 -1.1,0.98 -0.07,0.75 1.07,1.94 -1.21,5.81 -0.03,2.4 0.66,2.49 -1.17,2.89 -2.52,1.94 0.09,0.77 -0.47,0.64 0.22,1.47 0.59,0.67 0.02,1.17 -0.67,1.62 1.79,3.37 0.13,1.85 0,0 -2.36,-1.79 -2.94,-1.41 -1.8,0.43 -3.28,-1.22 -2.79,0.12 -1.11,0.64 -3.13,0.58 -1.8,-0.27 -1.45,-1.41 -0.59,-1.1 0.16,-1.1 1.37,-3.7 3.42,-4.33 2.39,-4.19 -0.05,-2.78 -0.66,-1.72 -0.54,-0.05 0,0 3.09,-10.25 2.1,-3.87 1.82,-1.68 1.18,-3.04 0.89,-0.9 0.43,-2.01 -0.36,-3.45 0.28,-2.05 -1.51,-2.44 1.23,-0.77 -0.38,-8.47 -0.47,-1.35 -1.04,-1.45 -5.34,-1.78 -2.01,-1.69 0,0 1.27,-2.22 1.36,-1.3 z"
// // // //  title="Abia"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-AB" />


// // // // <path
// // // //  d="m 682.64165,187.16874 -0.13,1.83 -0.82,1.76 -1.02,1.57 -1.1,0.83 -1.77,2.9 -1.36,4.89 -2.66,2.45 -0.48,1.1 -0.61,3.01 0.72,3.61 0.77,1.06 0,1.7 -1.61,1.66 -0.26,4.61 -0.97,1.67 0.13,3.45 -0.78,1.94 -2.05,2.57 -0.26,3.02 -1.61,1.04 -1.44,2.61 -5.87,1.16 -4.18,5.88 0.15,0.98 1.54,1.62 0.04,0.64 -1.15,2.74 -1.85,1.39 -0.03,1.77 0.69,1.6 2.69,1.33 1.01,1.59 -2.16,3.09 -0.13,2.25 -0.54,1.29 0.27,1.11 -1.08,1.47 0.33,0.78 -0.22,1.41 0.43,0.63 -0.74,2.2 -1.02,1.64 -0.97,-0.13 -1.7,1.32 -8.01,0.82 -2.75,2.16 -1.62,0.29 -3.76,3.39 -3.76,1.98 0.09,1.34 2.37,0.27 0.49,0.42 0.09,7.48 -0.73,0.69 -0.83,4.41 0.84,2.07 -1.16,4.03 0.3,1.32 -2.81,4.8 -2.64,2.3 -0.01,1 0.71,0.99 -0.82,2.05 1.27,3.92 -1.13,1.85 -1.09,0.38 -1.67,-0.23 -1.46,0.54 -0.57,1.1 -0.16,2.73 -0.98,0.74 -0.99,1.85 -2.18,0.19 -3.4,2.76 -0.83,0.12 -5.88,-1.64 -0.66,0.66 -0.24,1.71 -1.18,1.16 -0.81,3.05 -1.77,2.34 -2.33,0.14 -1.12,0.89 -2.47,-0.28 -1.85,1.21 -1.91,0.33 -0.72,0.82 -0.68,4.04 1.44,5.22 0.58,5.77 -0.06,1.04 -0.77,0.56 -2.43,4.51 0.62,2.51 0.22,3.73 -4.13,6.35 -3.49,3.09 -1.76,3.01 -0.48,2 -1.12,1.47 -0.41,3.45 -1.11,1.56 0.69,6.14 0.65,1.8 -2.93,1.48 -1.96,0.27 -2.75,3.14 0,0 -1.22,-0.88 0.05,-1.56 -1.94,-4.62 -0.38,-3.54 -0.74,-1.73 0.58,-5.49 -1.04,-2.02 -2.15,-2.6 -4.32,-3.84 -2.5,-3.15 -1.52,-1.12 -1.42,-0.43 -1.64,0.38 -2.83,4.01 -2.72,1.99 -2.71,-2.45 -2.91,-4.7 -2.52,-6.73 0.82,-1.58 4.14,-4.78 3.8,-3.22 5.08,-5.48 8.63,-11.52 6.12,-5.22 0.44,-2.08 -0.38,-5.78 5.99,-11.44 1,-3.62 -0.26,-1.81 -2.02,-3.84 -4.14,-1.47 -2.66,-2.94 -0.34,-3.84 0.46,-2.17 -5.26,-9.82 -2.08,-1.29 -4.65,-1.08 -1.46,-1.92 -5.45,-10.18 0,0 6.2,-0.91 3.37,-1.43 9.4,-5.66 5.75,-4 1.1,-2.33 -0.52,-3.7 0.68,-10.23 0,0 6.34,0.97 2.7,-0.19 4.57,-1.32 1.74,-1.07 1.7,-1.9 3.73,-5.55 6.2,-7.06 2.51,-0.87 6.29,-0.49 5.9,-2.22 2.44,-2.62 0.82,-2.66 3.32,-0.14 2.35,-1.14 2.22,-3.7 2.1,-2.16 2.51,-1.47 8.52,0.79 2.87,1.03 2.58,1.55 2.84,3.11 2.43,1.15 2.38,1.02 4.39,-0.01 1.14,-1.22 1.48,-7.76 2.71,-5.68 1.22,-3.64 0.88,-4.1 0.28,-8.01 3.09,-0.43 0.62,0.74 3.75,1.14 3.86,-0.29 5.62,-1.74 0,0 z"
// // // //  title="Adamawa"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-AD" />


// // // // <path
// // // //  d="m 302.91165,585.31874 0,0.01 0,0 -0.02,-0.02 0,0 0.02,0.01 z m 7.57,-0.7 0.97,0.5 0.92,-0.19 0.88,-0.14 0.33,0.28 -3.58,0.75 -0.49,-0.59 0.97,-0.61 z m 40.31,-7.56 0.88,2.09 -0.76,0.82 -1.07,0.22 -0.22,-1.24 0.56,-0.1 0.35,-0.9 0.26,-0.89 z m -51.56,-11.07 -0.12,-1.85 -1.79,-3.36 0.67,-1.63 -0.02,-1.17 -0.59,-0.67 -0.22,-1.47 0.47,-0.65 -0.09,-0.77 2.52,-1.94 1.18,-2.89 -0.66,-2.49 0.02,-2.41 1.21,-5.81 -1.07,-1.94 0.07,-0.75 1.1,-0.98 6.09,0.16 0.73,-0.9 0.7,-2.44 -2.23,0.16 -0.32,-0.45 1.84,-5.1 -0.53,-3.51 0.29,-0.91 2.42,-0.14 3.4,0.91 1.19,1.47 0.58,2.11 2.75,2.14 2.54,0.84 2.69,2.61 0,0 -0.85,0.1 -1.15,2.45 0.66,1.79 0.84,0.31 0.78,1.94 4.77,-0.56 4.96,2.68 0.4,2.1 -0.61,6.1 1.63,5.13 3.41,4.91 3.19,2.8 3.77,4.33 3.67,2.81 0.59,1.01 0,0 -0.43,2.16 0.79,0.44 0.03,2.5 -0.5,0.45 -0.41,-0.67 -0.07,0.58 1.19,1.17 -0.6,1.8 -0.74,0.19 0.1,1.03 -1.03,1.15 0.24,0.17 -1.05,2.38 -5.23,-0.63 -5.74,-0.07 -10.71,0.55 -12.05,1.68 -0.52,-0.46 -1.82,0.36 -0.93,-0.48 -0.88,0.36 -0.95,-0.09 -0.02,0.03 0.5,0.81 0.27,0.43 -3.32,1.32 -0.98,-1.7 -1.17,-0.65 -0.86,-0.19 -0.96,-1.06 0.38,-0.91 -0.09,-0.12 -0.53,0.5 -0.5,-0.38 0,0 -0.61,-1.17 0.04,-0.64 0.51,-0.32 -0.58,-4.55 0.96,-4.27 -0.63,-2.3 -1.98,-3.47 z"
// // // //  title="Akwa Ibom"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-AK" />


// // // // <path
// // // //  d="m 262.67165,444.90874 0.44,0.4 0.09,3.62 3.83,-0.13 2.44,1.41 2.05,0.08 3.73,1.7 0.36,0.79 -1.25,3.45 -0.75,1.08 -1.69,1.14 -1.85,2.48 0.24,0.96 -0.62,0.83 -0.43,2.35 0.39,0.54 3.85,1.16 1.42,1.8 1.34,3.64 1.31,1.85 -0.3,0.96 -0.82,0.29 0.41,1.37 -0.5,1.62 0.72,0.74 1.89,-1.13 0.61,0.13 0.59,2.58 1.33,0.63 -0.35,2.15 1.88,3.79 0.18,1.51 0.76,0.98 2.39,1.4 1.66,-0.96 1.08,0.09 1.12,0.74 -0.04,0.54 0.83,0.17 0,0 -4.4,2.31 -1.36,1.3 -1.27,2.22 0,0 -5.32,1.42 -5.38,-1.25 -6.31,1.16 -1.78,1.04 -0.93,3.55 -2.37,4.61 -2.68,0.27 -4.51,-1.92 -1.62,0.8 -3,3.83 -2.09,0.83 0,0 -2.4,-0.21 -1.11,-1.28 0,0 1.01,-1.17 1.92,-3.9 0.34,-2.64 1.77,-4.69 2.5,-4.55 0.38,-6.01 1.28,-3.65 -1.23,-3.77 -1.48,-7.29 0.08,-1.37 -1.13,-1.13 -2.13,-9.57 0,0 -0.07,-0.29 0,0 1.67,-0.77 3.59,0.66 1.43,-0.89 1.84,-2.51 0.06,-2.73 1.24,-4.12 2.24,-2.31 1.54,-0.86 z"
// // // //  title="Anambra"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-AN" />


// // // // <path
// // // //  d="m 491.94165,87.518745 7.74,6.19 1.14,2.93 0.77,7.079995 -0.19,1.81 3.16,4.66 0.21,6.74 0.33,2.7 0.95,2.71 0.2,3.87 8.35,20.91 -0.23,4.92 -1.05,2.72 -0.99,6.78 1.63,1.53 3.04,0.37 0,0 -0.8,0.24 -2.71,3.76 -6.04,3.28 -2.57,3.7 -2.01,1.75 -1.49,0.76 -3.91,0.88 -1.44,1.36 -1.38,2.03 -0.97,4.94 -2.61,7.43 -3.61,5.07 -0.2,1.38 7.38,2.99 1.14,1.71 0.87,7.15 0.88,1.15 7.2,2.62 2.08,4.94 -0.48,8.63 0.4,2.86 -0.83,1.76 -3.9,0.63 -1.99,0.92 -1.31,1.91 0.33,1.62 4.29,4.38 2.5,1.41 9.15,7.09 1.23,3.79 0.61,6.19 2.58,5.28 1.69,2.12 -0.13,0.95 -0.58,0.16 0,0 -3.99,-0.03 -6.44,-1.09 -10.59,4.85 -5.85,-0.78 -4.59,2.65 0,0 -6.36,-3.43 -6.18,-4.04 -11.07,-4.74 -9.26,-4.93 -2.57,-0.51 -7.6,-3.95 -3.03,1.78 -0.3,1.44 3.17,4.06 0.27,1.74 -0.5,1.67 -4.76,1.3 -2.89,5.21 -4.39,1.41 -10.04,0.59 -5.47,-1.48 -4.8,-0.27 -1.51,-0.53 -1.56,-1.34 -1.65,-4.07 -0.9,-1.16 -0.79,-0.71 -3.92,-1.42 -0.6,-0.85 0.09,-1.69 2.38,-4.47 0.23,-1.17 -0.26,-5.94 -0.97,-3.13 -1.8,-1.92 -1.06,-0.21 -10.97,2.19 0.04,-12.38 -0.78,-4.8 -2.61,-4.16 -2.78,-0.88 -3.18,-0.08 -1.53,0.49 0,0 -2.53,-2.71 -2.79,-1.75 -0.27,-0.73 2.35,-4.2 0.53,-3.96 0,0 0.99,-0.56 2.59,-4.09 1.33,-3.85 -0.08,-2 -0.77,-1.67 -3.86,-4.33 -0.45,-1.99 -0.4,-6.89 0.45,-3.5 1.6,-4.57 1.02,-0.43 2.7,0.16 2.04,-0.51 2.74,-3.21 2.65,-4.11 4.74,-4.17 0.67,-1.1 2.48,-1.57 1.69,-0.3 1.14,1.07 1.14,0.09 5.52,-2.17 0,0 1,-0.19 6,1.1 7.43,2.41 3.35,-1.46 2.3,0.73 1.78,3.67 3.13,0.21 7.7,-0.48 3.57,-0.91 1.14,0.3 2.67,4.9 0.54,2.15 -0.83,7.85 0.81,2.05 1.35,1.36 5.7,1.19 5.6,-1.39 1.56,0.17 1.86,1.36 2.46,0.62 1.86,-0.57 -1.11,-3.43 0.04,-1.8 1.53,-1.91 2.53,-1.36 4.04,-0.99 1.44,-0.78 1.85,-1.39 1.1,-2.72 -1.04,-1.46 -8.87,-0.56 -5.72,-1.27 -6.39,-0.77 -2.99,-1.85 -5.3,-7.42 -1.05,-2.5 -0.47,-2.57 -3.84,0.94 -1.18,-1.11 -0.55,-1.74 2.51,-5 -0.52,-4.32 -1.46,-4.42 -1.81,-0.5 -2.75,0.27 -2.12,1.03 -2.61,0.04 -1.35,-0.63 0.49,-4.26 3.22,-4.54 6.16,-0.46 5.47,-3.04 10.94,-3.73 6.23,-2.51 1.19,-0.94 -0.03,-2.25 -0.57,-1.88 6.71,-20.589995 4.54,-1.95 3.48,-0.55 0.99,0.82 0.83,1.64 0.12,1.39 z"
// // // //  title="Bauchi"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-BA" />
// // // // <path
// // // //  d="m 309.66165,367.75874 9.13,2.48 8.51,1.25 8.71,3.55 4.92,2.82 5.25,0.99 1.07,-0.14 3.32,2.8 5.33,2.23 1.14,-1.1 0.09,-1.36 -4.7,-11.64 -0.08,-2.52 1.02,-2.86 1.24,-1.41 3.95,-2.2 1.38,-0.28 2.59,-0.18 2.68,0.44 10.09,3.72 6.86,1.55 4.88,0.41 3.96,-0.22 0.01,-0.7 11.79,8.93 0,0 -3.79,5.97 1.9,0.57 6.12,-2.63 7.47,-0.95 8.18,0.48 7.48,1.77 5.14,4.9 4.44,5.65 8.37,7.57 -0.14,0.65 1.17,1.36 -0.26,1.04 0.56,1.78 -0.59,3.23 -2.38,5.89 0.29,5.92 -0.92,1.43 -3.09,1.94 -3.44,3.25 -3.31,6.16 -2.11,11.5 0.61,0.73 -0.33,1.08 -0.03,8.76 -1.9,8.19 0,0 -0.72,0.3 -2.12,-0.73 -0.78,1.42 0.1,2 -2.82,1.74 -1.79,0.22 -2.78,-0.44 0,0 -0.65,-1.55 -4.88,-6.63 -5.53,-5.73 -1.49,-0.72 -3.09,-0.22 -9.57,2.24 -4.38,-0.44 -1.21,-0.89 0.66,-4.77 -0.56,-1.64 -8.64,-5.38 -5.43,-1.69 -2.11,-0.07 -2.31,0.59 -2.11,0.67 -1.52,1.2 0.77,4.5 -3.14,1.92 -3.13,0.83 -3.84,-0.14 -2.06,-0.67 -1.92,0.45 -1.36,1.75 -2.36,1.96 -2.99,0.49 0,0 -1.7,-2.27 -0.84,-4.26 -1.76,-1.3 -1.02,2.31 -3.41,0.37 -1.77,2.88 -1.92,0.93 -2.95,-0.25 -3.45,0.4 -1.25,8.23 -0.99,2.05 -1.41,0.59 -1.78,-0.74 -4.01,-3.68 -0.65,-1.54 0.17,-0.91 0,0 2.28,-6.42 -0.9,-5.62 -1.42,-2.14 -1.52,-1.15 -2.81,-0.35 -2.21,2.11 -2.1,0.73 -2.92,-1.52 -3.58,-2.76 -2.89,-3.35 -2.74,-6.51 0.13,-0.53 0,0 0.41,-0.5 0.84,0.58 3.37,3.29 0.82,-0.1 1.35,1.05 1.76,0 0.34,-4.42 0.96,-1.44 6.44,-3.12 3.3,-3.11 1.94,-5.83 0.42,-3.93 0.47,-1.29 1.23,-1.21 0.36,-1.81 -1.48,-0.47 -3.31,0.32 -1.27,-1.05 -1.24,-5.53 -0.57,-6.81 -0.01,-6.9 -0.73,-1.85 -2.7,-2.61 -1.88,-3.22 -0.54,-5.87 z"
// // // //  title="Benue"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-BE" />
// // // // <path
// // // //  d="m 662.15165,11.078745 0.7,5.65 -0.83,3 3.49,6.26 -0.2,2.52 -0.46,0.49 0.28,-2.17 -1.04,1.33 -0.22,1.92 2.38,2.55 2.46,0.61 -0.65,0.67 0.28,0.54 0.78,0.19 4.46,7.53 2.83,3.08 1.05,0.22 1.72,0.96 1.63,1.2 3.87,0.75 0.26,0.86 -0.58,-0.01 -0.56,1.1 -0.2,-1.04 -0.66,0.58 -0.74,-0.04 1.44,1.6 0.27,1.76 3.88,-1.16 2.31,-2.61 2.47,-2.02 1.6,-0.67 -1.08,1.76 0.15,0.45 0.65,-0.19 0.57,2.34 -0.33,0.22 -0.67,-1.38 -0.85,0.48 -0.57,1.23 -2.02,0.57 0.67,1.88 -1.19,1.13 -1.86,3.73 0.41,0.77 1.37,-0.45 -0.07,2.44 -0.58,1.15 0.85,0.04 -0.34,1.36 -1.15,1.54 0.4,0.57 1.57,-0.43 0.29,0.55 -2.63,1.39 1.97,0.5 -0.15,0.89 1.2,0.05 -0.75,0.85 -1.32,0.33 0.12,0.42 1.24,-0.23 0.12,0.6 -0.48,0.44 -0.23,-0.37 -1.01,0.23 0.24,0.75 0.74,-0.12 -0.85,1.67 1.51,0.21 0.22,1.34 -0.57,0.74 0.26,1.25 0.97,0.22 0.53,1.21 -0.24,1.15 1.95,0.55 0.34,1.46 0.61,0.52 1.61,-0.95 0.46,0.2 0.71,1.91 1.22,0.71 0.31,1.08 2.16,0.77 -0.03,1.1 0.67,1 -0.37,1.19 0.71,0.64 1.11,0.55 1.41,-0.5 2,0.26 -0.27,1.04 0.83,0.06 0.39,-0.69 1.81,-0.07 1.47,-0.81 2.46,-0.08 0.17,1.22 1.07,0.09 -0.12,0.91 -1.25,0.32 0.22,0.53 -0.38,0.64 0.95,0.28 2.25,2.61 3.42,-0.53 1.03,-0.05 0.43,0.81 1.72,-0.87 2.93,0.87 3.5,-0.35 0.68,0.31 0.85,0.12 1.61,0.34 0.79,1.2 1.27,0.34 0.34,0.87 -0.67,0.02 0.08,1.119995 2.17,1.01 0.7,1.37 -0.72,1.39 2.99,0.77 0.76,1.5 -0.54,0.46 1.13,0.54 0.78,0.12 0.12,-0.49 0.97,-0.08 0.51,-0.51 1.33,2.51 -1.37,1.29 -0.32,1.8 -0.74,0.87 0.68,2 -1.72,1.16 -0.06,1.57 2.2,3.78 -1.21,1.74 0.23,1.35 -2.32,2.77 0.01,1.5 0.29,3.79 -0.7,1.23 -2.81,2.15 -0.06,0.55 1.26,1.72 2.01,1.13 2.16,2.18 0.44,2.16 -0.62,4.68 -1.26,0.93 -6.36,2.57 -3.88,0.9 -1.7,3.09 -8.09,3.17 -3.28,2.07 -1.93,2.65 -4.46,1.94 -2.32,0.04 -2.72,-2.37 -2.52,-0.44 -1.07,-0.83 -1.07,0.16 -0.61,0.76 -0.58,2.32 -2.08,2.36 -0.78,2.68 -0.72,1.05 -1.46,0.96 0.24,1.49 -0.65,0.21 -1.08,1.68 -2.32,2.04 -1.21,2.91 -3.24,1.61 -2.42,0.54 -0.77,0.75 -0.19,1.74 0,0 -5.62,1.74 -3.86,0.29 -3.75,-1.14 -0.62,-0.74 -3.09,0.43 -0.28,8.01 -0.88,4.1 -1.22,3.64 -2.71,5.68 -1.48,7.76 -1.14,1.22 -4.39,0.01 -2.38,-1.02 -2.43,-1.15 -2.84,-3.11 -2.58,-1.55 -2.87,-1.03 -8.52,-0.79 -2.51,1.47 -2.1,2.16 -2.22,3.7 -2.35,1.14 -3.32,0.14 -0.82,2.66 -2.44,2.62 -5.9,2.22 -6.29,0.49 -2.51,0.87 -6.2,7.06 -3.73,5.55 -1.7,1.9 -1.74,1.07 -4.57,1.32 -2.7,0.19 -6.34,-0.97 0,0 -3.91,-2.2 -1.81,-1.6 -3.13,-6.17 -5.66,-2.34 -1.83,-1.82 -2.43,-3.51 -0.81,-2.83 5.18,-7.56 0.62,-3.02 -1.35,-3.3 0,0 3.04,-0.69 3.41,-4.53 -0.28,-8.39 0.61,-2.77 1.72,-2.83 2.66,-1.92 11.21,-3.02 6.11,-3.65 2.09,-3.08 0.24,-2.94 -0.76,-4.15 -0.04,-2.97 0.9,-2.86 2.89,-3.35 3.3,-5.9 4.54,-4.43 0.99,-2.11 -0.84,-3.33 -3.13,-3.75 -4.91,0.21 -0.64,-0.36 -0.15,-1.94 4.72,-9.14 -1.69,-7.44 0.13,-3.5 2.54,-16.29 0.05,-5.789995 -1.72,-3.83 0.55,-2.2 7.06,-6.31 2.37,-3.08 1.84,-4.21 -0.48,-3.74 -4.8,-3.84 -1.45,-1.82 -1.23,-3.85 1.49,-8.02 0.08,-4.21 0,0 1.45,-0.12 4.38,0.88 0.03,-1.19 0.59,-0.41 0.07,-0.74 0.19,-1.71 1.48,-1.33 1.14,0.24 1.35,-0.73 -0.34,-1.16 0.73,-1.08 -0.23,-0.32 -0.89,-0.19 0.4,-1.13 0.77,-1.33 0.8,-1.78 0.64,-0.6 2.28,0.35 1.38,-0.87 0.96,0.09 0.61,0.74 0.96,-1.11 0.23,-1.44 1.34,-0.23 1.47,-0.29 0.29,-0.46 -0.34,-0.4 0.98,-1.17 2.11,-0.48 0.62,-1.24 1.37,-0.78 0.16,-0.79 0.58,-0.74 0.4,-0.74 -0.02,-0.86 1.1,-0.43 0.43,-1.02 -0.81,-0.31 0.57,-0.61 1.23,0.63 -0.29,-1.57 1.1,0.12 0.06,0.47 0.85,0.29 1.1,-0.14 1.87,-1.67 1.02,-0.37 0.32,0.38 1.98,-0.1 1.39,-1.33 1.02,0.49 0.05,-1.08 1.08,-0.36 1.02,0.09 -0.89,1.17 1.47,0.79 0.92,-1.31 1.35,1.04 -0.2,-1.31 1.48,-0.51 -0.31,2.08 0.92,0.12 0.45,-0.97 1.15,-0.25 0.92,1.39 0.96,-2.53 1.66,-0.84 0.02,-0.44 -0.55,-0.19 0.19,-0.71 1.19,0.2 0.64,-0.8 -0.64,-0.17 -0.4,-1.02 1.68,-1.6 -0.06,-0.58 1.49,-0.67 -0.05,-0.93 1.05,-1.06 1.24,-0.24 0.39,-1.06 z"
// // // //  title="Borno"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-BO" />
// // // // <path
// // // //  d="m 251.22165,579.30874 -0.21,-0.62 -0.68,0.1 -3.96,-2.6 -1.2,-4.38 -1.38,-1.87 -1.99,-0.02 -6.54,2.54 -1.04,-0.26 -0.35,-1.94 0.42,-1.46 -3.31,-1.44 -0.5,-0.83 0.07,-4.34 1.9,-2.67 0.76,-2.05 0.03,-1.27 -1.29,0.16 -0.84,-0.78 1.33,-4.44 4.49,-7.84 2.77,0.17 0.55,-0.5 0.75,-2.49 1.54,-0.79 -0.23,-1.81 1.58,-1.07 0.95,-1.48 -0.03,-1.94 -0.63,-1.54 -0.76,-0.58 -1.92,-0.83 -2.94,0.49 -1.04,-0.28 0.77,2.47 -1.2,0.85 -5.08,2.19 -3.49,-0.44 -2.74,0.49 -2.01,4.1 -2.11,0.52 -0.79,-0.6 -1.47,-0.08 -0.36,0.95 0.26,2.31 -2.83,1.56 -1.62,0.56 -3.01,-0.24 -1.23,1.99 -2.31,0.62 -1.89,-0.67 -0.99,-1.66 -2.11,-1.28 -0.75,0.5 -1.48,3.07 -3.3,1.64 -2.62,-0.42 -7.48,4.1 -0.94,-0.37 -2.32,0.4 -1,-1.1 -2.69,-1.6 -3.05,-0.71 -2.9,-1.66 -2.1,-2.1 -0.56,0.72 -0.72,-0.57 -1.43,0.53 -0.36,-0.5 -1.63,0.84 2.36,4.61 1.91,5.81 -0.34,0.79 0.95,1.52 0.35,1.86 4.06,6.77 0.19,1.44 0.94,0.55 0.01,0.17 0.05,1.1 7.5,10.38 1.19,0.62 -0.02,0.75 2.77,1.35 -0.27,0.41 1.05,0.75 0.12,0.65 2.56,1.59 0.19,-0.39 0.31,0.34 -0.22,0.24 0.02,0.34 2.61,2.16 0.48,-0.02 -0.14,-0.77 -0.45,-0.21 1.58,-0.46 -0.76,0.7 0.33,0.72 -0.26,0.27 0.07,0.51 2.32,1.7 5.07,2.36 0.19,-2 -0.79,-0.51 -0.55,-1.25 0.34,0.12 0.29,0.89 0.79,0.22 -0.12,-0.7 0.41,0.03 -0.02,0.7 0.52,0.17 0.26,0.77 -0.62,1.18 0.26,0.43 -0.34,1.3 0.4,0.29 5.18,1.32 0.19,-2.23 0.65,-0.58 0.38,3.84 8.34,-0.7 -0.64,-2.4 1.03,-3.05 0.65,-1.1 -0.29,-1.37 -1.91,-1.15 0.48,-0.05 1.19,0.27 0.96,1.58 0.6,-1.13 -0.55,-0.79 0.09,-2.14 -0.84,-1.35 0.31,-0.74 0.17,1.03 0.69,0.55 0.03,0.38 0.74,2.02 -0.1,3.1 2.72,-2.47 -0.58,-0.63 0.1,-1.94 1.91,-0.6 0.5,-0.63 0.69,1.61 0.12,1.29 -0.48,1.03 0.6,1.32 0.05,1.61 1.34,0.26 1.08,1.51 0.48,-0.05 -0.19,0.33 0.22,0.43 2.17,-0.48 0.19,0.34 -0.62,0.65 1.53,0.79 8.46,-0.91 0.02,-0.48 -0.4,-0.51 -0.07,-0.77 -0.1,-0.34 0.67,-0.86 0.6,-0.58 -0.52,2.04 0.22,0.39 2.03,1.76 0.96,-0.98 3.53,-0.38 -0.5,-2.47 -0.09,-0.38 -0.38,-1.13 -1.15,-0.75 -0.19,-0.99 0.02,-0.19 0.29,-1.06 -0.53,-2.25 -0.41,-0.55 0.35,-0.36 0.76,0.9 1.25,4.2 0.38,-0.58 -0.65,-5.23 1.7,-3.39 0.26,-1.83 z m -78.3,-19.41 0,0 0.01,0.01 -0.01,-0.01 z m 59.51,37.48 -8.22,0.99 -2.8,-0.1 -0.22,-0.7 1.36,-2.52 0.15,-0.02 0.45,0.04 0.14,-1.3 1.98,-2.19 0.12,-0.31 0.43,-0.89 0.45,-0.19 -0.59,-0.77 -0.18,-1.3 0.55,-0.35 1.03,-0.19 0.9,1.34 -0.5,1.33 0.78,1.62 -0.22,1.57 1.63,0.44 0.65,0.92 2.11,2.58 z"
// // // //  title="Bayelsa"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-BY" />
// // // // <path
// // // //  d="m 348.48165,451.12874 2.99,-0.49 2.36,-1.96 1.36,-1.75 1.92,-0.45 2.06,0.67 3.84,0.14 3.13,-0.83 3.14,-1.92 -0.77,-4.5 1.52,-1.2 2.11,-0.67 2.31,-0.59 2.11,0.07 5.43,1.69 8.64,5.38 0.56,1.64 -0.66,4.77 1.21,0.89 4.38,0.44 9.57,-2.24 3.09,0.22 1.49,0.72 5.53,5.73 4.88,6.63 0.65,1.55 0,0 -2.17,8.34 -5.15,-2.21 -0.78,1.84 -0.02,1.98 -0.58,0.73 -1.08,0.94 -2.8,4.86 -3.23,0.94 -1.63,1.19 -1.2,1.18 -0.95,2.5 -0.99,0.97 -8.72,7.77 -3.81,2.73 -1.12,0.33 -1.64,2.3 -1.69,0.87 -1.3,1.48 0.4,0.86 1.36,1.04 -1.05,1.48 0.4,0.83 -0.45,0.96 -1.47,1.87 -0.57,-0.58 0.05,1.5 5.1,5.64 0.31,1.76 -2.4,4.05 -0.64,2.4 -1.12,1.36 0.21,3.89 -1.81,5.88 0.15,6.56 -2.54,4.2 -1.89,0.77 -0.08,0.84 -1.34,1.04 -1.22,3.3 -1.25,1.04 0.97,1.02 -0.9,0.35 -0.98,1.24 0.05,0.57 -1.01,0.38 0.09,1.76 -1.97,0.75 -1.02,1.25 -0.02,0.96 1.2,1.14 0.34,1.53 -2.42,1.46 -1.09,-0.24 -0.68,-0.72 -1.03,0.82 -0.64,1.52 -0.75,0.53 -0.16,1.47 0.67,0.07 0.6,-1.75 0.26,2.51 -0.36,0.56 -0.43,-0.67 -0.6,0.14 0.58,1.44 -1.48,0.27 0.06,0.76 -1.78,0.29 -1.47,-0.6 0.51,-1.77 1.07,-0.12 -1.27,-1.61 -0.8,1.22 -1.16,0.48 -2.07,-0.46 -0.65,-1.15 0.77,-0.7 0.21,-0.16 -0.31,-0.91 -1.36,0.41 -1.13,-0.63 -2.38,2.18 0,0 -0.59,-1.01 -3.67,-2.81 -3.78,-4.34 -3.18,-2.8 -3.41,-4.91 -1.63,-5.13 0.61,-6.1 -0.39,-2.1 -4.96,-2.68 -4.77,0.56 -0.79,-1.94 -0.83,-0.31 -0.66,-1.79 1.15,-2.45 0.85,-0.1 0,0 3.42,0.76 0.6,-1.21 -0.76,-2.55 -1.71,-2 -0.73,-1.68 -1.37,-4.63 -0.15,-3.78 0.59,-3.72 -1.08,-1.29 0,0 0.38,-2.39 2.34,-3.11 -0.36,-2.66 1.46,-1.26 0.34,-1.35 1.98,-2.29 0.08,-2.42 -1.14,-1.8 0.19,-0.98 2.27,-1.08 2.62,-0.18 2.69,4.5 1.34,-2.08 2.16,-0.77 2.2,-1.71 0.28,-1.31 1.88,-0.29 2.18,1.26 0.84,-0.91 0.68,-2.3 0.1,-2.59 0.8,-1.47 6.92,-8.39 0.02,-1.4 -1.86,-2.6 -0.01,-1.6 1.65,-1.63 2.19,-0.37 0.83,-1.7 -0.24,-1.05 -1.38,-1 -0.41,-1.5 -0.52,-0.37 0.1,-1.94 -1.28,-1.12 -0.5,-1.71 -2.7,-1.87 -1.99,-2.62 z"
// // // //  title="Cross River"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-CR" />
// // // // <path
// // // //  d="m 252.45165,479.95874 -1.48,-7.29 0.08,-1.37 -1.13,-1.13 -2.13,-9.57 -1.88,2.04 -4.1,-0.38 -3.73,0.81 -8.19,5.12 -7.35,3.1 -4.03,4.53 -0.64,0.05 -2.58,-3.94 -1.01,-0.42 -1.67,-0.31 -1.78,1.58 -0.89,2.03 -0.15,2.37 0.4,0.75 1.46,0.81 0.54,4.82 2.03,3.59 1.96,2.42 1.88,1.46 2.23,0.81 0.29,1.75 -0.7,3.24 -1.55,1.91 -1.63,1.66 -3.08,2.03 -2.29,3.07 -2.78,1.99 -1.81,0.6 -5.23,1.04 -2.13,-0.56 0.7,-1.8 -1.6,-1.61 2.04,-4.03 -0.47,-0.83 -3.91,-2.35 -2,-2.83 -4.67,-2.62 -3.17,-1.25 -1.64,-1.34 -5.12,1.85 -1.85,2.38 -1.77,-0.4 -2.27,-1.98 -1.38,-0.29 -3.17,0.67 -2.98,-0.72 -0.99,0.31 -0.63,0.3 -0.06,1.03 0.89,1.57 -0.52,1.06 -4.1,3.22 -1.66,0.07 -0.05,-2.47 -0.66,-2.55 0.7,-2.93 -0.15,-1.43 -1.66,-1.67 -5.43,-2.8 -6.9,16.74 2.48,4.48 1.39,0.88 0.58,-1.6 1.31,-1.25 7.76,-4.22 1.26,-0.22 1.85,-1.28 1.13,-0.54 0.36,0.51 -0.02,0.17 -2,0.95 -1.01,1.6 -0.07,0.26 -0.83,-0.53 -2.25,0.98 -3.18,2.51 -0.34,0.75 -1.98,-0.45 -1.05,0.82 -0.79,3.14 0.26,1.54 2.63,4.5 3.18,3.14 1.12,-0.53 3.01,-1.34 2.97,0.41 0.74,-3.16 1.15,-2.15 -0.02,-0.38 0.4,-0.3 0,0.01 0.38,0.12 -0.23,0.14 -0.24,1.9 -1.12,2.27 1,2.13 1.91,0.63 1.63,-0.27 1.58,-3.18 1.6,0.1 0.19,-0.25 0,0.01 2.99,1.54 1.12,0.67 0.19,0.48 -1.19,-0.34 0.27,0.77 0.1,1.32 -1.33,-0.35 0.97,-0.67 -0.33,-1.34 -1.12,-0.72 -3.13,-0.29 -0.6,0.14 0.09,1.63 -0.55,1.13 -2.34,1.97 1,-1.58 -1.79,0.15 -2.1,-0.55 -4.44,-0.67 -1.96,0.19 -0.12,0.84 -1.62,1.08 -1.26,1.67 2.77,3.96 3.04,2.61 6.04,2.63 5.09,0.29 0.02,-0.65 -1.19,-1.39 -0.95,-2.9 -0.26,-0.45 0.07,-0.74 0.47,-0.12 -0.19,0.82 1,2.2 0.83,-0.6 0.36,0 -0.07,0.22 -0.95,1.08 0.26,0.5 2.65,1.12 0.57,-0.21 1.65,-4.8 0.84,-1.46 0.96,-0.62 -0.64,-0.33 3.2,0.12 0.48,0.15 1.05,-0.46 0.46,-1.13 0.74,-0.38 1.12,0.17 0.95,0.91 0.61,-0.66 0.09,0.23 -0.12,0.75 -0.89,0.04 -1.38,-0.94 -1.01,1.68 -1.58,0.79 -1.81,-0.12 0.22,0.86 -0.96,-0.98 -1.32,0.36 -0.55,3.02 0.27,1.32 0.58,1.08 0.45,0.72 3.36,1.09 -0.3,0.8 -1.55,-1.12 -0.65,0.36 -0.03,0.7 -0.07,0.22 -0.49,0.13 0.32,-1.47 -0.31,-0.12 -0.43,-0.34 -0.45,-0.46 -0.45,0.48 -0.74,0.5 -0.36,0.53 -0.79,0.12 -1.12,0.57 0.91,0.46 2.05,-0.1 -2.97,0.96 -0.4,0.63 -1,-1.61 -0.6,0.05 -0.28,-0.02 -2.53,0.15 -1.17,0.63 -0.07,-0.39 -0.69,-0.07 -0.41,-0.31 -0.67,0.22 -0.83,-0.43 0.05,2.44 1.91,7.63 -0.24,1.66 2.08,2.26 2.05,-0.88 2.65,-0.17 -0.89,-1.35 -0.09,-1.12 0.15,-0.24 0.5,-2.38 0.29,-0.03 -0.15,0.6 0.15,0.41 -0.52,2.69 0.88,0.55 -0.1,1.53 -0.8,0.31 2.1,2.1 2.9,1.66 3.05,0.71 2.69,1.6 1,1.1 2.32,-0.4 0.94,0.37 7.48,-4.1 2.62,0.42 3.3,-1.64 1.48,-3.07 0.75,-0.5 2.11,1.28 0.99,1.66 1.89,0.67 2.31,-0.62 1.23,-1.99 3.01,0.24 1.62,-0.56 2.83,-1.56 -0.26,-2.31 0.36,-0.95 1.47,0.08 0.79,0.6 2.11,-0.52 2.01,-4.1 2.74,-0.49 3.49,0.44 5.08,-2.19 1.2,-0.85 -0.77,-2.47 -0.57,-1.04 0.21,-0.44 3.52,-1.81 0.19,-5.3 0.7,-1.48 2.05,-1.42 0.89,-1.75 0.82,-3.18 -1.09,-3.54 0.23,-0.35 1.01,-1.17 1.92,-3.9 0.34,-2.63 1.76,-4.69 2.5,-4.55 0.38,-6.01 1.27,-3.65 -1.18,-3.74 z"
// // // //  title="Delta"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-DE" />
// // // // <path
// // // //  d="m 319.74165,453.93874 -0.17,0.91 0.65,1.54 4.01,3.68 1.78,0.74 1.41,-0.59 0.99,-2.05 1.25,-8.23 3.45,-0.4 2.95,0.25 1.92,-0.93 1.77,-2.88 3.41,-0.37 1.02,-2.31 1.76,1.3 0.84,4.26 1.7,2.27 0,0 0.49,2.89 1.99,2.62 2.7,1.87 0.5,1.71 1.28,1.12 -0.1,1.94 0.52,0.37 0.41,1.5 1.38,1 0.24,1.05 -0.83,1.7 -2.19,0.37 -1.65,1.63 0.01,1.6 1.86,2.6 -0.02,1.4 -6.92,8.39 -0.8,1.47 -0.1,2.59 -0.68,2.3 -0.84,0.91 -2.18,-1.26 -1.88,0.29 -0.28,1.31 -2.2,1.71 -2.16,0.77 -1.34,2.08 -2.69,-4.5 -2.62,0.18 -2.27,1.08 -0.19,0.98 1.14,1.8 -0.08,2.42 -1.98,2.29 -0.34,1.35 -1.46,1.26 0.36,2.66 -2.34,3.11 -0.38,2.39 0,0 -1.34,-0.21 -3.21,-2.33 -0.7,-1.04 -0.22,-2.19 -1.24,-1.86 -14.09,-0.86 -0.94,-1.03 -0.05,-0.73 0.55,-2.86 -0.07,-4.36 0,0 3.63,-1.01 1.99,1.7 0.77,0.09 2.11,2.51 0.73,0.07 0.65,-1.44 -0.8,-2.92 -0.15,-2.64 2.67,-2.73 0.8,-1.73 -0.99,-6.64 -0.62,-2.55 -1.08,-1.07 0.02,-1.23 2.74,-6.11 0.01,-5.82 -0.65,-1.15 -0.38,-3.29 -1.48,-4.9 6.45,0.55 z"
// // // //  title="Ebonyi"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-EB" />
// // // // <path
// // // //  d="m 208.35165,395.48874 0.77,0.64 1.75,-0.37 0.7,0.36 0.28,0.68 -0.38,0.89 0.46,0.65 2.18,-0.25 0.27,0.8 -0.96,1.85 -0.23,1.93 0.28,1.05 1.08,0.78 2.13,0.53 5.94,-2.93 1.56,2.1 0.65,-0.07 1.26,1.41 0.55,-0.06 1.96,2.23 2.26,-0.19 0.74,-0.51 2.56,0.15 1.06,2.01 0.07,1.22 0.85,0.61 0.48,1.74 0.74,0.56 -0.24,0.51 0.66,1.63 3.75,-0.84 0.43,0.38 1.46,-0.99 1.87,-0.41 1.75,1.41 0.55,2.12 1.45,1.08 0.79,2.01 0.15,3.41 -0.31,1.92 -1.62,3.94 0.06,4.16 -1.91,4.82 -2.16,3.55 1.28,2.15 -0.93,5.52 0.89,2.6 1.41,2.01 1.03,6.03 0,0 0.07,0.29 0,0 -1.88,2.03 -4.09,-0.38 -3.73,0.81 -8.19,5.11 -7.35,3.1 -4.03,4.53 -0.65,0.04 -2.58,-3.94 -1.01,-0.41 -1.66,-0.32 -1.79,1.59 -0.89,2.02 -0.15,2.37 0.4,0.75 1.46,0.81 0.54,4.82 2.03,3.58 1.96,2.42 1.88,1.46 2.23,0.81 0.28,1.74 -0.69,3.24 -1.55,1.91 -1.62,1.66 -3.08,2.03 -2.3,3.07 -2.77,1.99 -1.81,0.6 -5.24,1.04 -2.13,-0.57 0.7,-1.8 -1.6,-1.61 2.03,-4.03 -0.47,-0.83 -3.9,-2.35 -2,-2.83 -4.68,-2.62 -3.16,-1.25 -1.64,-1.34 -5.12,1.85 -1.85,2.38 -1.77,-0.4 -2.27,-1.98 -1.38,-0.29 -3.17,0.67 -2.97,-0.72 -0.99,0.31 -0.64,0.3 -0.06,1.03 0.89,1.57 -0.52,1.06 -4.09,3.23 -1.66,0.07 -0.05,-2.47 -0.66,-2.55 0.71,-2.93 -0.15,-1.43 -1.66,-1.67 -5.43,-2.79 0,0 0.39,-1.16 -1.23,-2.26 -1.33,-1.04 -1.56,-0.09 -1.65,-2.94 -1.94,-1.36 -0.7,-0.06 -0.44,-0.91 0.25,-0.59 -0.28,0.44 0.8,-0.7 0.96,-3.63 0.58,-0.61 2.95,-0.87 0.84,-3.74 1.74,-1.71 0.84,-1.96 0.35,-1.72 -0.57,-1.45 -1.4,-2.28 -1.23,-0.64 0,-2.84 0.81,-0.98 -0.1,-2.22 0.49,-0.96 1.75,-1.62 0.45,-1.03 1.73,-0.8 0.79,-2.27 0.96,-0.69 0.09,-1.95 0.45,-0.78 2.2,-1.01 2.13,0.4 2.28,-0.38 1.68,0.36 6.64,0.11 3.29,-0.38 1.64,0.34 1.74,2.08 -2.01,2.26 2.1,5.46 0.74,-0.03 3.77,-3.16 1.34,0.12 1.19,1.48 0.81,0.35 2.68,-1.02 1.51,-3.39 0.95,-4.96 0.25,-0.25 1.19,0.51 0.01,-1.63 0.88,-0.52 -0.15,-0.81 -1.18,-1.28 0.61,-4.64 1.24,-1.66 1.52,-0.73 0.37,-0.85 -0.32,-0.84 3.23,-6.89 -0.15,-1.39 0.47,-1.04 1.76,-1.83 2.15,-1.05 1.43,-3.54 -0.43,-0.28 -0.77,-2.48 0.87,-2.89 -2.01,-0.82 -0.4,-0.84 0.18,-1.39 1.41,-1.72 1.56,0.14 0.89,-0.6 z"
// // // //  title="Edo"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-ED" />
// // // // <path
// // // //  d="m 148.66165,367.10874 0.41,-0.17 0.61,1.67 1.03,0.49 4.48,-1.25 0.95,0.37 1.47,2.06 0.95,0.49 2.33,-0.23 2.3,0.62 1.95,-0.58 1.29,0.55 1.04,-2.16 -0.29,-0.63 0.82,-2.22 4.11,-1.34 5.76,-0.09 0,0 -1.09,0.42 -0.03,4.28 0.55,0.45 2.48,-1.42 3.67,-0.64 2.31,0.27 0.56,0.7 -0.28,1.37 -1.34,0.64 -2.29,3.01 -0.08,1.56 1.32,3.75 1.32,0.96 1.28,0.03 1.85,1.69 6.82,2.39 0,0 -1.52,2.4 -0.82,0.3 -1.5,-1.25 -1.86,0.39 -0.85,2.06 -2.18,1.45 -2.4,2.48 -1.13,2.14 -1.71,8.1 -1.7,3.92 -3.05,4.43 -5.53,3.49 -2.27,-0.59 -1.09,-2.68 0.16,-0.86 -1.04,-3.19 -1.42,-2.22 -1.55,-0.52 -6.97,0.31 -7.78,-0.44 -4.55,1.45 0,0 -0.83,-1.7 -0.84,-3.79 -2.85,-6.11 -0.69,-4.78 1.19,-3.99 -0.81,-2.81 0.12,-1.4 1.9,-4.25 1.62,-1.5 2.18,-0.94 1.99,-1.64 z"
// // // //  title="Ekiti"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-EK" />
// // // // <path
// // // //  d="m 262.67165,444.90874 2.73,-5.01 0.91,0.25 0.18,2.28 0.74,0.05 1.33,2.01 0.69,0.34 1.24,-0.33 4.97,-5.39 5.98,-3.86 6.18,-7.42 2.44,-0.91 2.14,-2.1 3.31,-0.76 2.44,0.75 1.11,1.62 0,0 -0.13,0.53 2.74,6.51 2.89,3.35 3.58,2.76 2.92,1.52 2.1,-0.73 2.21,-2.11 2.81,0.35 1.52,1.15 1.42,2.14 0.9,5.62 -2.28,6.42 0,0 -1.79,0.36 -6.45,-0.55 1.48,4.9 0.38,3.29 0.65,1.15 -0.01,5.82 -2.74,6.11 -0.02,1.23 1.08,1.07 0.62,2.55 0.99,6.64 -0.8,1.73 -2.67,2.73 0.15,2.64 0.8,2.92 -0.65,1.44 -0.73,-0.07 -2.11,-2.51 -0.77,-0.09 -1.99,-1.7 -3.63,1.01 0,0 -0.33,-1.46 -2.05,-1.34 -2.71,-0.27 -4.83,0.89 -0.6,-0.77 0,0 -0.83,-0.17 0.04,-0.54 -1.12,-0.74 -1.08,-0.09 -1.66,0.96 -2.39,-1.4 -0.76,-0.98 -0.18,-1.51 -1.88,-3.79 0.35,-2.15 -1.33,-0.63 -0.59,-2.58 -0.61,-0.13 -1.89,1.13 -0.72,-0.74 0.5,-1.62 -0.41,-1.37 0.82,-0.29 0.3,-0.96 -1.31,-1.85 -1.34,-3.64 -1.42,-1.8 -3.85,-1.16 -0.39,-0.54 0.43,-2.35 0.62,-0.83 -0.24,-0.96 1.85,-2.48 1.69,-1.14 0.75,-1.08 1.25,-3.45 -0.36,-0.79 -3.73,-1.7 -2.05,-0.08 -2.44,-1.41 -3.83,0.13 -0.09,-3.62 z"
// // // //  title="Enugu"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-EN" />
// // // // <path
// // // //  d="m 287.74165,288.29874 6.12,-0.63 3.2,0.32 1.52,0.85 1.13,-0.85 1.81,-3.04 1.06,-0.54 1.07,0.43 1.47,3.11 0.94,0.31 1.18,-0.79 0,0 -0.07,2.44 -0.42,0.62 -1.03,0.07 -0.53,0.61 -2.11,6.52 -0.08,5.62 0.51,2.19 -0.55,7 -1.98,5.27 -1.52,7.95 -0.79,0.36 -1.08,3.4 -1.04,1.64 -3.78,4.62 -6.96,3.64 -4.63,1.06 -2.91,1.2 -11.13,1.75 0,0 -1.4,0.46 -7.46,-0.15 0,0 -1.83,0.21 -1.42,-0.47 -1.95,-4.91 0.46,-1.37 -0.75,-30.21 0.36,-13.66 0.34,-0.38 2.68,-0.33 11.03,-0.47 1.76,0.63 9.19,8.1 0.94,-0.24 z"
// // // //  title="Federal Capital Territory"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-FC" />
// // // // <path
// // // //  d="m 517.00165,163.43874 0.91,-0.88 4.17,-1.51 4.04,0.17 2.98,1.01 2.18,1.29 8.49,6.26 4.75,6.4 3.42,3.58 -1,1.54 1.58,-1.02 3.68,3.38 0.67,4.87 -1.2,11.85 0.77,6.45 0.3,0.51 6.78,-0.01 0,0 1.35,3.3 -0.62,3.02 -5.18,7.56 0.81,2.83 2.43,3.51 1.83,1.82 5.66,2.34 3.13,6.17 1.81,1.6 3.91,2.2 0,0 -0.68,10.23 0.52,3.7 -1.1,2.33 -5.75,4 -9.4,5.66 -3.37,1.43 -6.2,0.91 0,0 -6.37,0.47 -12.46,-0.02 -5.9,0.6 -3.57,-0.71 0,0 0.58,-0.16 0.13,-0.95 -1.69,-2.12 -2.58,-5.28 -0.61,-6.19 -1.23,-3.79 -9.15,-7.09 -2.5,-1.41 -4.29,-4.38 -0.33,-1.62 1.31,-1.91 1.99,-0.92 3.9,-0.63 0.83,-1.76 -0.4,-2.86 0.48,-8.63 -2.08,-4.94 -7.2,-2.62 -0.88,-1.15 -0.87,-7.15 -1.14,-1.71 -7.38,-2.99 0.2,-1.38 3.61,-5.07 2.61,-7.43 0.97,-4.94 1.38,-2.03 1.44,-1.36 3.91,-0.88 1.49,-0.76 2.01,-1.75 2.57,-3.7 6.04,-3.28 2.71,-3.76 z"
// // // //  title="Gombe"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-GO" />
// // // // <path
// // // //  d="m 283.98165,497.48874 2.01,1.69 5.34,1.78 1.04,1.45 0.47,1.35 0.38,8.47 -1.23,0.77 1.51,2.44 -0.28,2.05 0.36,3.45 -0.43,2.01 -0.89,0.9 -1.18,3.04 -1.82,1.68 -2.1,3.87 -3.09,10.25 0,0 -2.57,0.95 -4.52,-1.13 -2.13,0.04 -4.15,1.06 -4.69,-1.11 -6.72,0.14 -2.14,-0.41 -2.16,-1.65 -1.72,-3.4 -1.84,-1.3 -0.26,-1.37 1.09,-2.76 0.52,-4.63 -0.45,-1.66 -2.12,-0.77 -3.46,0.67 -1.51,-0.44 2.75,-13.09 0,0 2.09,-0.83 3,-3.83 1.62,-0.8 4.51,1.92 2.68,-0.27 2.37,-4.61 0.93,-3.55 1.78,-1.04 6.31,-1.16 5.38,1.25 z"
// // // //  title="Imo"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-IM" />
// // // // <path
// // // //  d="m 434.10165,67.298745 1.79,1.18 6,0.73 3.14,-1.8 2.1,-3.99 5.32,-2.59 3.16,-0.63 2.82,-1.37 6.33,-1.96 2.21,1.25 2.13,4.78 0.69,4.35 1.46,2.53 1.12,-0.72 5.86,-1.86 4.99,2.22 2.03,-0.61 1.85,0.88 2.21,3.4 1.76,11.53 0.87,2.9 0,0 -11.06,6.93 -0.12,-1.39 -0.83,-1.64 -0.99,-0.82 -3.48,0.55 -4.54,1.95 -6.71,20.589995 0.57,1.88 0.03,2.25 -1.19,0.94 -6.23,2.51 -10.94,3.73 -5.47,3.04 -6.16,0.46 -3.22,4.54 -0.49,4.26 1.35,0.63 2.61,-0.04 2.12,-1.03 2.75,-0.27 1.81,0.5 1.46,4.42 0.52,4.32 -2.51,5 0.55,1.74 1.18,1.11 3.84,-0.94 0.47,2.57 1.05,2.5 5.3,7.42 2.99,1.85 6.39,0.77 5.72,1.27 8.87,0.56 1.04,1.46 -1.1,2.72 -1.85,1.39 -1.44,0.78 -4.04,0.99 -2.53,1.36 -1.53,1.91 -0.04,1.8 1.11,3.43 -1.86,0.57 -2.46,-0.62 -1.86,-1.36 -1.56,-0.17 -5.6,1.39 -5.7,-1.19 -1.35,-1.36 -0.81,-2.05 0.83,-7.85 -0.54,-2.15 -2.67,-4.9 -1.14,-0.3 -3.57,0.91 -7.7,0.48 -3.13,-0.21 -1.78,-3.67 -2.3,-0.73 -3.35,1.46 -7.43,-2.41 -6,-1.1 -1,0.19 0,0 -0.08,-2.24 1.08,-3.72 7.12,-6.88 -0.89,-1.15 -2.09,-0.53 -2.83,-2.64 -1.48,-2.75 -0.5,-2 -1.09,-0.99 -5.06,0.15 -0.2,-1.96 0.5,-2.09 3.36,-4.69 0.19,-2.05 1.06,-1.84 -0.19,-2.46 -2.28,-7.18 -1.25,0.53 -1.47,1.75 -2.32,1.42 -1.82,0.18 -1.37,-0.25 -0.01,-2.57 -0.57,-1.44 -3.14,0.25 -1.9,1.19 0,-1.03 -1.65,-0.72 0.53,-1.72 1.18,-1.39 0.08,-5.61 -0.8,-2.94 -0.92,-0.81 -1.85,-0.56 -5.44,-0.56 -0.83,-0.42 -1.02,-1.389995 0.57,-2.01 -1.1,-3.08 -3.81,-2.12 -1.13,-1.38 -0.45,-5.92 -7.78,-2.02 -3.77,0.35 -3.99,1.93 -1.73,1.35 -0.62,2.6 -1.87,3.61 -1.07,-1.12 -0.1,-1.96 -3.51,-6.28 0,0 -1.24,-2.62 -0.83,-0.7 -4.94,-0.12 -2.86,-0.93 -0.59,-0.72 -0.07,-3.85 0.75,-3.4 -0.02,-2.69 0.46,-0.3 10.39,-1.38 5.37,0.99 9.22,-0.78 1.17,1.23 1.41,4.68 0.68,0.94 2.66,1.67 1.99,0.52 2.62,-1.51 0.64,1.56 1.49,0.7 3.68,-0.55 4.18,-1.74 3.19,-2.58 1.03,-2.63 0.58,-0.75 2,-0.88 0.01,-0.86 0,0 1.27,-0.39 10.06,0.44 9.02,1.42 5.24,-0.75 6.06,0.78 10.03,0.45 z"
// // // //  title="Jigawa"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-JI" />
// // // // <path
// // // //  d="m 316.55165,159.39874 3.09,0.02 2.44,-0.67 4.18,-3.83 4.8,-2.84 1.65,0 4.08,-1.24 1.22,0.19 1.13,0.82 0.32,1.25 -2.11,4.02 0.53,2.57 1.04,1.18 3.53,1.83 3.75,1.23 3.51,4.13 1.53,0.55 2.78,-0.03 2.45,0.59 5.38,4.43 3.59,6.42 0.38,3.88 -1.01,2.44 -1.01,4.91 1.2,6.05 -0.2,1.73 -0.72,1.1 -3.55,0.96 -0.55,0.79 0.6,2.08 1.06,1.07 7.02,0.97 1.98,2.75 1.6,1.05 3,0.64 1.05,-0.29 0,0 -0.53,3.96 -2.35,4.2 0.27,0.73 2.79,1.75 2.53,2.71 0,0 -0.37,0.29 -0.21,2.9 -0.55,1.43 -1.32,1.56 -2.19,0.73 -1.9,1.4 -2.13,4.97 -0.22,2.71 1.36,2.82 0.75,3.52 -2.39,1.97 -0.34,1.1 0.18,1.97 -0.7,7.81 0.53,2.1 -0.42,1.07 -1.91,1.55 -0.4,3.08 -1.76,1.28 0.21,4.74 -1.05,1.4 0.1,1.16 3.26,5.28 2.57,3.08 1.71,1.21 1,2.09 0.12,3.41 -1.67,3.94 0,0 -1.09,0.57 -2.65,5.61 -3.31,5.4 -0.82,0.72 -1.61,0.42 -2.47,-0.13 -0.6,-1.9 -5.34,-5.91 -3.81,-0.24 -1.5,-1.25 -1.33,-0.22 -1.29,0.98 -0.89,1.9 -4.16,4.75 -2.35,1.6 -1.15,0.21 -1.34,-0.96 -0.4,-1.31 0.05,-9.7 -1.03,-1.61 -4.22,-2.44 -0.32,-3.25 -2.93,-2.67 -1.1,-0.39 -1.01,0.35 -1.65,2.12 -0.94,2.54 -2.31,2.1 -1.1,0 -1.75,-1.06 -1.34,0.25 -2.44,-1.79 -0.93,-0.14 -1.5,0.61 -0.7,-0.79 -0.6,-1.88 -0.75,-0.11 -1.34,1.02 0,0 -1.18,0.79 -0.94,-0.31 -1.47,-3.11 -1.07,-0.43 -1.06,0.54 -1.81,3.04 -1.13,0.85 -1.52,-0.85 -3.2,-0.32 -6.12,0.63 0,0 -1.23,-0.42 -2.46,0.6 1.38,-4.13 -3.39,-2.78 0.09,-2.32 0.56,-0.93 2.45,-1.29 0.79,-0.87 0.6,-2.79 3.09,-3.17 -0.58,-1.88 -3,-1.62 0.83,-3.02 -3.62,-1.36 -1.13,-0.77 -0.17,-0.91 0.29,-0.64 0.88,-0.42 3.23,-0.41 0.63,-1.51 -0.1,-3.09 -0.92,-3.88 -0.16,-5.06 -0.33,-1.01 -1.37,-0.67 -12.87,0.08 -6.67,-2.49 -1.71,-1.66 -1.03,-1.98 0.91,-1.24 2.17,-1.36 1.62,-1.68 0.85,-1.48 4.24,-2.6 1.02,-1.79 0.31,-1.98 -3.23,-1.75 -4.83,-1.66 1.35,-4.14 0.05,-2.57 -1.98,-3.8 -1.61,-0.44 -2.25,0.67 -1.39,-0.14 -0.28,-4.5 -0.48,-1.92 -0.61,-0.51 -4.73,-0.5 -1.18,1.2 0.67,2.39 -0.64,0.98 -3.97,-0.56 -7.63,2.86 -1.04,-2.66 -1.02,-1 -2.91,0.13 -2.1,0.61 -2.46,1.5 -5.59,4.5 -5.38,7.01 -1.41,0.89 -1.43,-0.6 -1.22,-3.52 -3.05,-2 -0.22,-1.37 0.33,-2.31 1.84,-1.8 -0.24,-3.81 0.74,-2 -0.14,-1.48 -1.44,-2.38 0.4,-4.79 3.04,-5.38 0,0 1.68,-0.12 1.28,-0.76 2.86,-4.16 5.27,-4.71 5.64,-0.95 7.94,0.57 4.71,-0.62 2.33,-1.51 3.04,-3.1 1.51,-3.23 0.64,-3.55 1.71,-3.41 0.85,-1.14 2.75,-1.77 2.34,-2.38 1.01,0.03 0,0 4.41,0.88 1.94,-0.18 1.36,0.9 0.79,1.74 -0.23,1.07 -2.89,2.69 -0.39,1.32 6.35,1.93 4.25,4.29 1.75,0.23 2.69,-1.52 1.38,-1.91 -1.81,-3.36 -0.12,-2.04 3.45,-1.09 1.95,0.11 2.77,1.1 1.4,-0.09 0.58,-0.54 -0.01,-1.39 1.2,-2.97 3.06,-2.59 1.39,-0.28 6.78,2.29 2.05,1.73 0.97,1.58 1.57,0.78 5.62,-2.24 0.84,-2.05 z"
// // // //  title="Kaduna"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-KD" />
// // // // <path
// // // //  d="m 90.771651,42.718745 6.62,-0.14 1.86,0.74 4.629999,-1.58 0.76,0.31 1.65,2.12 3.19,1.82 1.06,1.1 9.56,3.12 2.95,2.07 3.06,0.68 1.82,-0.43 0.63,-0.56 2.49,-3.69 1.16,-0.31 1.08,0.88 0.4,1.25 -1.62,3.93 0.09,2.4 -1.42,2.98 -0.42,3.7 1.86,2.15 1.8,4.28 -0.18,3.32 -1.3,6.06 0.04,2.04 1.68,5.52 -0.24,8.02 -0.64,1.56 -1.02,0.04 -3.17,-2.04 -2.68,0.02 -3.95,1.18 -1.28,1.48 -1.01,3.779995 -0.14,9.94 0.79,13.05 -2.12,9.79 -2.61,5.63 -1.16,4.77 2.55,3.65 0.76,0.51 2.78,0.29 1.71,-1.35 2.4,-3 12,-5.45 1.69,-0.12 1.89,0.86 2.04,-0.72 0.77,1.75 0.94,0.07 1.62,-0.97 0,0 0.86,-0.48 1.82,0 4.11,2.25 6.34,-1.46 0.82,-2.32 1.06,-0.62 0.79,-0.15 0.91,0.64 2.09,0.31 3.61,-0.65 1.08,0.57 1.69,3.3 2.87,0.11 3.65,2.41 5.47,-0.76 3.79,0.5 2.49,-0.59 1.22,-0.81 4.85,0.62 4.35,1.77 1.41,2.15 -0.01,2.47 -2.05,6.49 0,1.2 5.38,2.71 1.93,3.01 1.38,7.58 0.21,5.48 0,0 -1.36,-1.1 -1.85,-0.36 -3.42,2.76 -1.28,2.2 -3.93,0.41 -12.1,5.08 -10.67,0.69 -1.64,-1.25 -0.36,-4.02 0.37,-4.81 -0.48,-1.78 -3.75,-2.47 -0.81,-1.26 -0.98,-6.51 -1.69,-1.6 -2.84,-0.71 -3.64,-0.04 -9.86,1.59 -7.87,1.83 -4.43,1.62 -4.85,2.59 -1.37,2.07 0.16,1.54 0.87,1.26 3.63,2.01 5.4,2.19 5.36,0.53 1.05,2.01 1.71,-0.03 0.78,0.74 1.12,6.56 -0.25,1.07 -2.18,1.45 -0.63,1.47 0.49,1.45 2.74,1.63 1.17,1.36 -0.07,2.07 -1.01,1.49 -3.8,0.97 -5.22,2.64 -5,-0.52 -1.55,0.42 -0.9,0.75 -0.04,9.59 -0.45,1.37 1.25,2.83 1.81,1.97 1.86,3.03 0.75,2.44 -0.28,1.53 -1.77,2.13 -2.64,1.57 -3.38,0.26 -7.42,2.5 -0.5,5.85 -0.56,0.48 -4.32,-0.46 -1.42,-0.99 -0.02,-2.28 1.03,-3.28 0.29,-3.94 -2.93,-2.66 -1.12,-2.41 0.18,-6.32 1.46,-3.26 1.84,-2 1.48,-1.01 3.92,-1.44 4.62,-4.43 2.43,-10.71 0.2,-4.05 -0.51,-0.74 -2.89,-1.06 -1.58,0.1 -8.4,-5.7 -5.24,-1.69 -2.94,0.07 -4.5,0.85 -6.189999,-0.36 -12.17,0.81 -1.86,-0.29 -3.49,-1.42 -11.04,-6.08 -2.89,-0.36 -0.89,0.52 0,0 -1.29,-0.01 -12.13,-10.28 4.33,-20.39 2.12,-4.71 4.89,-4.18 -0.82,-3.26 -2.42,-1.82 -0.57,-4.87 3.17,-3.84 -2.36,-8.76 0.39,-5.22 1.27,-4.3 -0.93,-15.849995 10.82,-9.33 7.73,-6.05 9.53,-14.62 2.08,-9.63 z"
// // // //  title="Kebbi"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-KE" />
// // // // <path
// // // //  d="m 347.91165,83.288745 3.51,6.28 0.1,1.96 1.07,1.12 1.87,-3.61 0.62,-2.6 1.73,-1.35 3.99,-1.93 3.77,-0.35 7.78,2.02 0.45,5.92 1.13,1.38 3.81,2.12 1.1,3.08 -0.57,2.01 1.02,1.389995 0.83,0.42 5.44,0.56 1.85,0.56 0.92,0.81 0.8,2.94 -0.08,5.61 -1.18,1.39 -0.53,1.72 1.65,0.72 0,1.03 1.9,-1.19 3.14,-0.25 0.57,1.44 0.01,2.57 1.37,0.25 1.82,-0.18 2.32,-1.42 1.47,-1.75 1.25,-0.53 2.28,7.18 0.19,2.46 -1.06,1.84 -0.19,2.05 -3.36,4.69 -0.5,2.09 0.2,1.96 5.06,-0.15 1.09,0.99 0.5,2 1.48,2.75 2.83,2.64 2.09,0.53 0.89,1.15 -7.12,6.88 -1.08,3.72 0.08,2.24 0,0 -5.52,2.17 -1.14,-0.09 -1.14,-1.07 -1.69,0.3 -2.48,1.57 -0.67,1.1 -4.74,4.17 -2.65,4.11 -2.74,3.21 -2.04,0.51 -2.7,-0.16 -1.02,0.43 -1.6,4.57 -0.45,3.5 0.4,6.89 0.45,1.99 3.86,4.33 0.77,1.67 0.08,2 -1.33,3.85 -2.59,4.09 -0.99,0.56 0,0 -1.05,0.29 -3,-0.64 -1.6,-1.05 -1.98,-2.75 -7.02,-0.97 -1.06,-1.07 -0.6,-2.08 0.55,-0.79 3.55,-0.96 0.72,-1.1 0.2,-1.73 -1.2,-6.05 1.01,-4.91 1.01,-2.44 -0.38,-3.88 -3.59,-6.42 -5.38,-4.43 -2.45,-0.59 -2.78,0.03 -1.53,-0.55 -3.51,-4.13 -3.75,-1.23 -3.53,-1.83 -1.04,-1.18 -0.53,-2.57 2.11,-4.02 -0.32,-1.25 -1.13,-0.82 -1.22,-0.19 -4.08,1.24 -1.65,0 -4.8,2.84 -4.18,3.83 -2.44,0.67 -3.09,-0.02 0,0 -3.6,-2.68 -1.11,-2.26 -0.78,-3.61 1.52,-2.67 0.07,-2.21 1.82,-1.63 3.75,-1.03 2.45,-1.7 2.71,-0.07 0.95,-0.58 -3.14,-7.8 0.67,-4.06 -2.09,-4.58 0.86,-6.33 -0.7,-12.32 0.27,-2.89 2.18,-2.28 4.25,-2.369995 7.64,-2.38 3.68,-1.93 0.78,-0.85 1.13,-4.39 2.14,-4.61 1.28,-0.52 z"
// // // //  title="Kano"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-KN" />
// // // // <path
// // // //  d="m 219.65165,323.91874 2.2,0.57 2.77,1.58 3.52,3.25 2.77,4.32 2.55,8.25 3.71,2.3 2.71,2.69 5.47,7.27 2.72,2.54 1.63,0.25 0.33,-0.35 0.62,-2.89 1.24,-2.53 0.19,-0.26 0.99,0.88 0.46,-0.09 0.06,-2.97 3.57,-1.74 1.12,-3.25 0,0 7.46,0.15 1.4,-0.46 0,0 -0.6,2.64 -1.55,2.66 0,0.86 0.82,1.69 2.19,2.66 0.54,6.17 -1.17,4.71 -0.04,4.69 -1.61,1.67 -0.85,2.12 -0.17,3.74 0.69,0.56 4.26,-2.95 9.26,-4.07 12.4,-3.37 7.07,-0.7 3.58,0.68 7.7,0.57 0,0 -0.32,2.84 0.54,5.87 1.88,3.22 2.7,2.61 0.73,1.85 0.01,6.9 0.57,6.81 1.24,5.53 1.27,1.05 3.31,-0.32 1.48,0.47 -0.36,1.81 -1.23,1.21 -0.47,1.29 -0.42,3.93 -1.94,5.83 -3.3,3.11 -6.44,3.12 -0.96,1.44 -0.34,4.42 -1.76,0 -1.35,-1.05 -0.82,0.1 -3.37,-3.29 -0.84,-0.58 -0.41,0.5 0,0 -1.11,-1.62 -2.44,-0.75 -3.31,0.76 -2.14,2.1 -2.44,0.91 -6.18,7.42 -5.98,3.86 -4.97,5.39 -1.24,0.33 -0.69,-0.34 -1.33,-2.01 -0.74,-0.05 -0.18,-2.28 -0.91,-0.25 -2.73,5.01 0,0 0,0 0,0 -1.34,1.87 -1.54,0.86 -2.24,2.31 -1.24,4.12 -0.06,2.73 -1.84,2.51 -1.43,0.89 -3.59,-0.66 -1.67,0.77 0,0 -1.03,-6.03 -1.41,-2.01 -0.89,-2.6 0.93,-5.52 -1.28,-2.15 2.16,-3.55 1.91,-4.82 -0.06,-4.16 1.62,-3.94 0.31,-1.92 -0.15,-3.41 -0.79,-2.01 -1.45,-1.08 -0.55,-2.12 -1.75,-1.41 -1.87,0.41 -1.46,0.99 -0.43,-0.38 -3.75,0.84 -0.66,-1.63 0.24,-0.51 -0.74,-0.56 -0.48,-1.74 -0.85,-0.61 -0.07,-1.22 -1.06,-2.01 -2.56,-0.15 -0.74,0.51 -2.26,0.19 -1.96,-2.23 -0.55,0.06 -1.26,-1.41 -0.65,0.07 -1.56,-2.1 -5.94,2.93 -2.13,-0.53 -1.08,-0.78 -0.28,-1.05 0.23,-1.93 0.96,-1.85 -0.27,-0.8 -2.18,0.25 -0.46,-0.65 0.38,-0.89 -0.28,-0.68 -0.7,-0.36 -1.75,0.37 -0.77,-0.64 0,0 -0.23,-0.78 -4.74,-4.17 -2.04,-2.7 0.71,-4.14 -2.51,-0.43 -4.62,0.88 0,0 -6.82,-2.39 -1.85,-1.69 -1.28,-0.03 -1.32,-0.96 -1.32,-3.75 0.08,-1.56 2.29,-3.01 1.34,-0.64 0.28,-1.37 -0.56,-0.7 -2.31,-0.27 -3.67,0.64 -2.48,1.42 -0.55,-0.45 0.03,-4.28 1.09,-0.42 0,0 0.75,-1.44 -0.82,-2.41 -4.76,-2.58 -0.13,-0.59 -2.42,-1.81 -0.07,-0.67 -2.41,-2.45 -1.92,-3.7 0.17,-0.99 2.14,-2.43 2.29,-3.91 3.71,-4.04 3.6,-2.29 1.77,2.62 2.17,1.76 7.04,3.01 1.84,0.08 2.76,1.08 3.71,-0.21 2.13,0.69 3.92,-0.12 6.3,1.52 3.03,-0.5 1.57,-3.76 0.64,-6.49 2.31,-7.79 z"
// // // //  title="Kogi"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-KO" />
// // // // <path
// // // //  d="m 322.66165,35.138745 9.16,1.35 5.19,1.38 3.58,1.94 2.92,2.5 2.73,0.73 9.89,9.64 3.29,-0.88 2.92,0.38 3.03,1.55 2.29,1.75 1.85,2.11 1.04,2.44 2.96,1.37 5.26,1.27 12.11,3.92 0,0 -0.01,0.86 -2,0.88 -0.58,0.75 -1.03,2.63 -3.19,2.58 -4.18,1.74 -3.68,0.55 -1.49,-0.7 -0.64,-1.56 -2.62,1.51 -1.99,-0.52 -2.66,-1.67 -0.68,-0.94 -1.41,-4.68 -1.17,-1.23 -9.22,0.78 -5.37,-0.99 -10.39,1.38 -0.46,0.3 0.02,2.69 -0.75,3.4 0.07,3.85 0.59,0.72 2.86,0.93 4.94,0.12 0.83,0.7 1.24,2.62 0,0 -4.63,0.36 -1.28,0.52 -2.14,4.61 -1.13,4.39 -0.78,0.85 -3.68,1.93 -7.64,2.38 -4.25,2.369995 -2.18,2.28 -0.27,2.89 0.7,12.32 -0.86,6.33 2.09,4.58 -0.67,4.06 3.14,7.8 -0.95,0.58 -2.71,0.07 -2.45,1.7 -3.75,1.03 -1.82,1.63 -0.07,2.21 -1.52,2.67 0.78,3.61 1.11,2.26 3.6,2.68 0,0 -0.99,1.1 -0.84,2.05 -5.62,2.24 -1.57,-0.78 -0.97,-1.58 -2.05,-1.73 -6.78,-2.29 -1.39,0.28 -3.06,2.59 -1.2,2.97 0.01,1.39 -0.58,0.54 -1.4,0.09 -2.77,-1.1 -1.95,-0.11 -3.45,1.09 0.12,2.04 1.81,3.36 -1.38,1.91 -2.69,1.52 -1.75,-0.23 -4.25,-4.29 -6.35,-1.93 0.39,-1.32 2.89,-2.69 0.23,-1.07 -0.79,-1.74 -1.36,-0.9 -1.94,0.18 -4.41,-0.88 0,0 0.02,-2.33 1.25,-6.1 -0.9,-3.69 -1.91,-1.9 -0.16,-1.07 0.45,-3.76 1.56,-4.14 0.65,-4 1.5,-0.84 6.61,-0.13 1.28,0.87 4.88,-3.97 0.55,-3.2 3.34,0.81 1.89,-1.62 -0.5,-1.95 -1.16,-1.43 -2.68,-2.29 -2.53,-1.16 -1.26,-1.21 1.82,-3.63 1.09,-5.16 -0.95,-2.47 0.13,-1.68 -0.69,-3.05 -2.5,-5.199995 0.4,-3.57 -1.31,-3.21 -0.39,-4.75 -1,-5.17 0.07,-6.05 -0.99,-6.17 1.44,-10.82 0,0 4.86,-1.57 5.28,-5.36 8.7,0.78 3.58,-0.74 23.4,-14.15 1.28,-0.33 z"
// // // //  title="Katsina"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-KT" />
// // // // <path
// // // //  d="m 62.361651,236.35874 5.38,-0.92 11.32,-0.35 3.62,0.93 13.98,15.86 1.99,3.1 5.609999,6.48 2.29,1.58 1.7,-0.18 1.04,0.48 0.27,2.94 -0.73,4.65 0.06,5.38 0.88,3.68 1.3,0.39 7.57,-0.79 0.84,0.74 0.43,1.62 -0.19,3.43 0.35,1.4 0.66,1.02 3.21,2.41 3.04,0.39 1.07,0.55 0.9,2.11 0.74,5.45 1.89,1.32 2,-0.01 9.16,-3.56 2.41,-0.16 6.35,3.01 1.42,1.1 6.35,7.23 2.25,0.69 3.96,-1.16 4.52,0.81 3.73,1.61 0.64,-0.27 11.77,7.32 5.19,3.67 0.93,1.49 1.46,0.71 1.84,0.6 4.92,0.32 3.39,-0.91 7.52,-0.31 8.26,1.71 0,0 -2.46,3.35 -2.31,7.79 -0.64,6.49 -1.57,3.76 -3.03,0.5 -6.3,-1.52 -3.92,0.12 -2.13,-0.69 -3.71,0.21 -2.76,-1.08 -1.84,-0.08 -7.04,-3.01 -2.17,-1.76 -1.77,-2.62 -3.6,2.29 -3.71,4.04 -2.29,3.91 -2.14,2.43 -0.17,0.99 1.92,3.7 2.41,2.45 0.07,0.67 2.42,1.81 0.13,0.59 4.76,2.58 0.82,2.41 -0.75,1.44 0,0 -5.76,0.09 -4.11,1.34 -0.82,2.22 0.29,0.63 -1.04,2.16 -1.29,-0.55 -1.95,0.58 -2.3,-0.62 -2.33,0.23 -0.95,-0.49 -1.47,-2.06 -0.95,-0.37 -4.48,1.25 -1.03,-0.49 -0.61,-1.67 -0.41,0.17 0,0 -0.39,-0.54 -1.67,0.8 -3.49,0.13 -1.48,-3.17 -2.18,-0.58 -4.74,1.7 -2.65,-0.38 0.08,0.88 -0.18,-0.85 -0.36,0.09 -3.55,1.61 -2.6,0.31 -8.27,-0.22 0,0 -0.49,-0.66 -1.45,-0.07 -0.71,-0.94 -1.9,-4.81 -0.39,-2.77 -0.78,-0.66 -0.03,-0.8 -3.46,-2.25 -2.95,-4.24 -1.22,-3.44 -0.09,-2.1 -0.79,-2.77 -1.97,-2.63 -2.999999,-7.11 -1.66,-1.91 -1.32,-5.29 -0.81,-1.58 1.03,-4.5 2.08,-1.55 0.35,-1.6 0.57,-0.59 3.159999,-2.09 2.34,-3.16 -0.16,-1.3 -1.31,-0.78 -2.829999,1.8 -2.21,0.08 -3.83,-1.08 -1.1,0.13 -2.4,-1.54 -5.7,-1.74 -3.25,-2.42 -1.69,-2.04 -0.54,-2.48 -4.08,-2.46 -2.04,0.09 -3.82,2.08 -1.69,3.71 -0.02,2.65 -0.45,1.11 -4.42,3.43 -6.64,2.92 -5.79,3.3 -2.49,1.94 -1.13,0.26 -3.01,2.21 -7,3.26 -0.93,0.15 -0.53,-0.75 -0.45,0.11 -0.91,-1.13 -0.69,-0.19 -2.57,0.27 -6.93,5.53 -1.66,0.66 -3.91,3.44 -0.19,0.99 -1.5,0.79 -4.08,0.72 -3.17,0.02 -3.19,2.78 0,0 0.56,-1.78 -0.59,-1.36 -0.01,-3.54 -0.71,-0.9 0.24,-1.44 0.55,-1.39 -0.39,-2.71 -0.97,-1.79 0.74,-1.4 1.43,-0.91 -0.4,-3.34 0.69,-0.23 0.34,-1.72 -0.2,-0.62 0.02,-0.88 0.69,-1.64 0.43,-1.56 -0.41,-0.76 -0.27,-0.77 -0.35,-0.78 0.13,-1.17 0.25,-1.73 0.16,-0.69 5.37,0.18 0.71,-0.16 1.05,-1.18 3.55,-0.56 0.66,0.82 1.24,0.45 1.49,-0.1 4.95,-1.73 0.25,-1.76 1.95,-3.88 0.17,-3.74 1.91,-1.88 -0.34,-5.82 -1.28,-4.01 0.31,-1.42 1.16,-1.88 2.47,-1.38 0.82,-1.83 2.59,-3.62 0.85,-3.1 1.04,-0.59 2.14,0.25 2.09,-1.73 0.1,-1.22 -1.34,-2.56 -0.32,-1.93 0.37,-1.34 1.11,-1.22 6.75,-2.7 3.39,0.24 1.14,-0.3 2.02,-2.06 0.12,-1.3 2.36,-2.59 0.57,-2.41 0.25,-4.97 0.85,-1.1 2.08,-0.86 z"
// // // //  title="Kwara"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-KW" />
// // // // <path
// // // //  d="m 3.411651,463.64874 1.25,0.4 3.41,-0.43 1.94,0.89 3.46,-2.44 0,-1.61 0.41,-0.11 3.55,0.53 13.71,-0.19 1.06,-1.01 0.77,-3.95 2.08,-1.65 0.09,-2.35 1.36,-2.51 1.85,0.25 3.41,1.43 1.2,0.8 0.81,1.43 4.57,-0.48 -0.51,-1.45 1.59,-1.06 37.58,0.39 1.07,0.21 0.54,0.9 -2.73,2.88 -0.23,0.94 0.73,1.24 0.04,1.46 2.19,1.09 3.22,-2.16 3.45,-0.41 1.06,1.48 0.12,0.95 -1.12,1.06 -2.8,1.31 -0.56,1.03 0.22,0.7 0.92,0.74 2.77,0.77 1.13,1.31 0.58,0.14 1.12,-0.58 5.269999,0.65 0.35,1.25 -0.36,2.36 0,0 -9.529999,-1.15 -2.19,-0.67 -12.02,-1.84 -8.59,-0.46 -9.91,0.94 -15.11,0.16 -0.57,0.31 -0.19,1.32 -0.53,-0.1 0.24,0.34 -5.42,-0.82 -6.02,0.01 -21.6,0.73 -9.49,1.1 -0.36,-3.11 z"
// // // //  title="Lagos"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-LA" />
// // // // <path
// // // //  d="m 307.24165,287.46874 1.34,-1.02 0.75,0.11 0.6,1.88 0.7,0.79 1.5,-0.61 0.93,0.14 2.44,1.79 1.34,-0.25 1.75,1.06 1.1,0 2.31,-2.1 0.94,-2.54 1.65,-2.12 1.01,-0.35 1.1,0.39 2.93,2.67 0.32,3.25 4.22,2.44 1.03,1.61 -0.05,9.7 0.4,1.31 1.34,0.96 1.15,-0.21 2.35,-1.6 4.16,-4.75 0.89,-1.9 1.29,-0.98 1.33,0.22 1.5,1.25 3.81,0.24 5.34,5.91 0.6,1.9 2.47,0.13 1.61,-0.42 0.82,-0.72 3.31,-5.4 2.65,-5.61 1.09,-0.57 0,0 1.69,1.65 2.42,0.11 2.08,0.85 0.63,4.48 1.93,3.41 2.16,0.98 5.32,0.56 3.7,0 2.77,-1.35 1.04,0.56 2.01,2.21 -0.79,2.93 -2.7,4.01 -2.11,1.98 -1.41,0.2 -1.46,1.05 -1.55,2.86 -1.55,1.36 -0.32,2.25 0.64,1.72 2.09,2.43 0.32,1.24 -0.3,5.41 1.44,2.07 5.15,2.71 3.66,1.3 8.19,-0.15 9.76,-2.79 10.36,4.33 2.52,2.07 1.46,2.68 0,0 -2.58,3.68 -2.74,0.82 -4.51,-0.95 -0.33,-0.41 -1.52,0.23 -1,-1.07 -1.73,-0.9 -1.86,0 -1.28,0.86 -1.33,2.14 -0.73,2.86 1.71,1.36 2.03,2.51 0.35,2.88 -0.54,0.65 1,2.68 -0.11,1.19 -11.23,7.21 -1.21,1.39 0,0 -11.79,-8.93 -0.01,0.7 -3.96,0.22 -4.88,-0.41 -6.86,-1.55 -10.09,-3.72 -2.68,-0.44 -2.59,0.18 -1.38,0.28 -3.95,2.2 -1.24,1.41 -1.02,2.86 0.08,2.52 4.7,11.64 -0.09,1.36 -1.14,1.1 -5.33,-2.23 -3.32,-2.8 -1.07,0.14 -5.25,-0.99 -4.92,-2.82 -8.71,-3.55 -8.51,-1.25 -9.13,-2.48 0,0 -7.7,-0.57 -3.58,-0.68 -7.07,0.7 -12.4,3.37 -9.26,4.07 -4.26,2.95 -0.69,-0.56 0.17,-3.74 0.85,-2.12 1.61,-1.67 0.04,-4.69 1.17,-4.71 -0.54,-6.17 -2.19,-2.66 -0.82,-1.69 0,-0.86 1.55,-2.66 0.6,-2.64 0,0 11.13,-1.75 2.91,-1.2 4.63,-1.06 6.96,-3.64 3.78,-4.62 1.04,-1.64 1.08,-3.4 0.79,-0.36 1.52,-7.95 1.98,-5.27 0.55,-7 -0.51,-2.19 0.08,-5.62 2.11,-6.52 0.53,-0.61 1.03,-0.07 0.42,-0.62 z"
// // // //  title="Nassarawa"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-NA" />
// // // // <path
// // // //  d="m 65.001651,173.89874 0.89,-0.52 2.89,0.36 11.04,6.08 3.49,1.42 1.86,0.29 12.17,-0.81 6.189999,0.36 4.5,-0.85 2.94,-0.07 5.24,1.69 8.4,5.7 1.58,-0.1 2.89,1.06 0.51,0.74 -0.2,4.05 -2.43,10.71 -4.62,4.43 -3.92,1.44 -1.48,1.01 -1.84,2 -1.46,3.26 -0.18,6.32 1.12,2.41 2.93,2.66 -0.29,3.94 -1.03,3.28 0.02,2.28 1.42,0.99 4.32,0.46 0.56,-0.48 0.5,-5.85 7.42,-2.5 3.38,-0.26 2.64,-1.57 1.77,-2.13 0.28,-1.53 -0.75,-2.44 -1.86,-3.03 -1.81,-1.97 -1.25,-2.83 0.45,-1.37 0.04,-9.59 0.9,-0.75 1.55,-0.42 5,0.52 5.22,-2.64 3.8,-0.97 1.01,-1.49 0.07,-2.07 -1.17,-1.36 -2.74,-1.63 -0.49,-1.45 0.63,-1.47 2.18,-1.45 0.25,-1.07 -1.12,-6.56 -0.78,-0.74 -1.71,0.03 -1.05,-2.01 -5.36,-0.53 -5.4,-2.19 -3.63,-2.01 -0.87,-1.26 -0.16,-1.54 1.37,-2.07 4.85,-2.59 4.43,-1.62 7.87,-1.83 9.86,-1.59 3.64,0.04 2.84,0.71 1.69,1.6 0.98,6.51 0.81,1.26 3.75,2.47 0.48,1.78 -0.37,4.81 0.36,4.02 1.64,1.25 10.67,-0.69 12.1,-5.08 3.93,-0.41 1.28,-2.2 3.42,-2.76 1.85,0.36 1.36,1.1 0,0 3.32,4.4 3.8,6.64 1.59,4.09 -0.07,0.84 0,0 -3.04,5.38 -0.4,4.79 1.44,2.38 0.14,1.48 -0.74,2 0.24,3.81 -1.84,1.8 -0.33,2.31 0.22,1.37 3.05,2 1.22,3.52 1.43,0.6 1.41,-0.89 5.38,-7.01 5.59,-4.5 2.46,-1.5 2.1,-0.61 2.91,-0.13 1.02,1 1.04,2.66 7.63,-2.86 3.97,0.56 0.64,-0.98 -0.67,-2.39 1.18,-1.2 4.73,0.5 0.61,0.51 0.48,1.92 0.28,4.5 1.39,0.14 2.25,-0.67 1.61,0.44 1.98,3.8 -0.05,2.57 -1.35,4.14 4.83,1.66 3.23,1.75 -0.31,1.98 -1.02,1.79 -4.24,2.6 -0.85,1.48 -1.62,1.68 -2.17,1.36 -0.91,1.24 1.03,1.98 1.71,1.66 6.67,2.49 12.87,-0.08 1.37,0.67 0.33,1.01 0.16,5.06 0.92,3.88 0.1,3.09 -0.63,1.51 -3.23,0.41 -0.88,0.42 -0.29,0.64 0.17,0.91 1.13,0.77 3.62,1.36 -0.83,3.02 3,1.62 0.58,1.88 -3.09,3.17 -0.6,2.79 -0.79,0.87 -2.45,1.29 -0.56,0.93 -0.09,2.32 3.39,2.78 -1.38,4.13 2.46,-0.6 1.23,0.42 0,0 -8.65,12.34 -0.94,0.24 -9.19,-8.1 -1.76,-0.63 -11.03,0.47 -2.68,0.33 -0.34,0.38 -0.36,13.66 0.75,30.21 -0.46,1.37 1.95,4.91 1.42,0.47 1.83,-0.21 0,0 -1.12,3.25 -3.57,1.74 -0.06,2.97 -0.46,0.09 -0.99,-0.88 -0.19,0.26 -1.24,2.53 -0.62,2.89 -0.33,0.35 -1.63,-0.25 -2.72,-2.54 -5.47,-7.27 -2.71,-2.69 -3.71,-2.3 -2.55,-8.25 -2.77,-4.32 -3.52,-3.25 -2.77,-1.58 -2.2,-0.57 0,0 -8.26,-1.71 -7.52,0.31 -3.39,0.91 -4.92,-0.32 -1.84,-0.6 -1.46,-0.71 -0.93,-1.49 -5.19,-3.67 -11.77,-7.32 -0.64,0.27 -3.73,-1.61 -4.52,-0.81 -3.96,1.16 -2.25,-0.69 -6.35,-7.23 -1.42,-1.1 -6.35,-3.01 -2.41,0.16 -9.16,3.56 -2,0.01 -1.89,-1.32 -0.74,-5.45 -0.9,-2.11 -1.07,-0.55 -3.04,-0.39 -3.21,-2.41 -0.66,-1.02 -0.35,-1.4 0.19,-3.43 -0.43,-1.62 -0.84,-0.74 -7.57,0.79 -1.3,-0.39 -0.88,-3.68 -0.06,-5.38 0.73,-4.65 -0.27,-2.94 -1.04,-0.48 -1.7,0.18 -2.29,-1.58 -5.609999,-6.48 -1.99,-3.1 -13.98,-15.86 -3.62,-0.93 -11.32,0.35 -5.38,0.92 0,0 0.49,-3.02 -1.96,-0.7 -2.1,-2.02 -1.75,-3.54 3.08,-6.97 -0.14,-1.69 0.89,-1.14 2.58,-1.33 6.08,3.19 1,-3.12 0.25,-2.99 2.82,-6.43 -0.66,-6.2 -2.69,-1.9 -2.97,-5.6 1.21,-4.6 0.13,-2.04 -1.23,-5.05 -2.13,-0.82 0.42,-1.95 -0.28,-1.95 0.51,-1.95 z"
// // // //  title="Niger"
// // // //  fill="blue"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-NI" />
// // // // <path
// // // //  d="m 0.96165097,375.38874 5.97000003,-4.29 3.49,-0.21 1.9,0.93 1.24,1.79 0.41,1.43 0.15,6.48 0.56,2.36 1.31,2.17 0.84,0.13 0.94,-5.56 0.57,-1.25 0.47,-0.45 1.37,0 0.88,0.61 0.54,1.75 -0.16,3.09 -1.74,5.98 -0.41,-0.24 -0.51,0.57 0.52,3.66 2.12,2.51 3.05,2.47 1.02,3.04 3.2,4.51 3.01,2.36 2.34,1.13 4.05,0.28 1.74,-0.49 2.78,-3.97 1.14,-4.24 1.62,-1.48 2.6,0.29 1.75,4.34 1.59,1.13 1.02,-0.26 1.13,-1.11 2.47,-0.6 6.2,0.22 1.17,1.89 0.33,5.66 0.41,0.71 2.98,1.22 0.64,1.1 -0.1,2.22 1.1,2.7 0.41,2.87 -3.97,4.01 -0.33,1.13 0.37,0.28 6.09,-0.25 2.7,-0.58 3.04,0.13 3.18,-1.24 1.51,-1.37 5.89,-0.88 0,0 2.74,-1.08 1.4,-1.11 0.94,0.39 0.52,0.84 0.59,4.28 1.97,-0.01 3.85,-1.98 3.389999,0.59 2.97,7.11 3.06,-1.96 1.1,-0.02 1.15,0.69 2.12,-0.92 4.16,-0.26 0.31,0.13 -0.3,1.01 0,0 -0.75,5.5 -1.06,3.26 -2.35,2.1 -2.06,0.97 -3.63,3.28 -2.98,4.92 0.03,3.41 2.01,1.97 4.81,0.81 1.83,-0.13 1.42,-1.06 1.65,-2.27 1.76,-0.51 0.65,0.78 -0.02,4.47 0.85,3.57 -0.72,1.81 -2.44,0.66 -0.77,1.14 -1.12,0.68 -2.4,0.11 -1.32,1.34 0.98,0.43 2.79,-0.25 3.3,1.74 0.21,1.08 -0.82,1.72 -4.01,-0.28 0,0 -5,-2.24 -4.38,-0.93 0,0 0.36,-2.36 -0.35,-1.25 -5.269999,-0.65 -1.12,0.58 -0.58,-0.14 -1.13,-1.31 -2.77,-0.77 -0.92,-0.74 -0.22,-0.7 0.56,-1.03 2.8,-1.31 1.12,-1.06 -0.12,-0.95 -1.06,-1.48 -3.45,0.41 -3.22,2.16 -2.19,-1.09 -0.04,-1.46 -0.73,-1.24 0.23,-0.94 2.73,-2.88 -0.54,-0.9 -1.07,-0.21 -37.58,-0.39 -1.59,1.06 0.51,1.45 -4.57,0.48 -0.81,-1.43 -1.2,-0.8 -3.41,-1.43 -1.85,-0.25 -1.36,2.51 -0.09,2.35 -2.08,1.65 -0.77,3.95 -1.06,1.01 -13.71,0.19 -3.55,-0.53 -0.41,0.11 0,1.61 -3.46,2.44 -1.94,-0.89 -3.41,0.43 -1.25,-0.4 0,0 0.42,-3.28 1.13,-1.18 0.63,-1.54 -1.34,-3.74 1.3,-2.16 2.11,-1.8 0.2,-2.74 -0.21,-0.96 -2.14,-0.28 -0.78,-0.39 -0.41,-0.86 -0.17,-1.82 1.2,-1.9 -0.34,-1.07 0.48,-3.46 -0.22,-0.98 -1.3,-0.14 -0.54,-0.61 0.15,-2.86 1.4,-1.61 3.06,-1.78 -2.46,-2.23 -0.48,-0.96 1.87,-2.2 0.59,-1.92 -0.66,-4.66 -1.53,-1.66 -0.12,-9.69 2.37,-0.08 0.82,-0.48 0.04,-0.72 -0.42,-3.5 -2.68,-2.04 -0.22,-1.76 -0.98,-1.52 -0.3,-4.2 0.25,-8.96 -0.3,-0.95 -0.82,-0.35 -0.97,-2.58 -1.69000003,-2.17 z"
// // // //  title="Ogun"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-OG" />
// // // // <path
// // // //  d="m 194.92165,384.14874 4.62,-0.88 2.51,0.43 -0.71,4.14 2.04,2.7 4.74,4.17 0.23,0.78 0,0 -2.45,3.49 -0.9,0.6 -1.56,-0.14 -1.41,1.72 -0.18,1.38 0.4,0.84 2.02,0.82 -0.88,2.89 0.77,2.49 0.42,0.28 -1.43,3.54 -2.15,1.05 -1.76,1.83 -0.47,1.04 0.15,1.39 -3.23,6.89 0.32,0.83 -0.37,0.85 -1.51,0.73 -1.24,1.67 -0.62,4.63 1.18,1.28 0.16,0.82 -0.88,0.51 -0.01,1.63 -1.19,-0.51 -0.25,0.25 -0.95,4.96 -1.51,3.39 -2.68,1.03 -0.81,-0.36 -1.19,-1.48 -1.34,-0.12 -3.77,3.16 -0.74,0.03 -2.1,-5.46 2.01,-2.25 -1.74,-2.09 -1.64,-0.34 -3.29,0.39 -6.64,-0.11 -1.68,-0.36 -2.28,0.38 -2.12,-0.39 -2.2,1.01 -0.46,0.78 -0.09,1.96 -0.95,0.68 -0.79,2.27 -1.73,0.8 -0.45,1.04 -1.76,1.61 -0.49,0.96 0.09,2.22 -0.8,0.99 0,2.84 1.23,0.64 1.39,2.28 0.58,1.45 -0.36,1.72 -0.83,1.96 -1.74,1.71 -0.85,3.74 -2.94,0.86 -0.58,0.62 -0.96,3.62 -0.8,0.7 0.28,-0.44 -0.25,0.6 0.44,0.91 0.7,0.05 1.94,1.36 1.65,2.94 1.56,0.1 1.33,1.04 1.24,2.26 -0.39,1.16 0,0 -6.9,16.74 0,0 -4.86,-5.94 -9.17,-9.24 -14.82,-11.96 -2.7,-1.66 0,0 4,0.28 0.83,-1.73 -0.21,-1.07 -3.3,-1.74 -2.79,0.25 -0.98,-0.43 1.32,-1.35 2.4,-0.1 1.11,-0.68 0.78,-1.14 2.44,-0.66 0.72,-1.82 -0.84,-3.57 0.01,-4.47 -0.64,-0.78 -1.77,0.51 -1.65,2.27 -1.42,1.06 -1.83,0.13 -4.8,-0.81 -2.01,-1.96 -0.03,-3.41 2.98,-4.92 3.63,-3.28 2.06,-0.96 2.35,-2.1 1.07,-3.25 0.74,-5.51 0,0 2.67,-1.42 2.15,-4.97 4.29,-3.44 2.32,-0.02 2.51,1.24 2.91,2.22 1.81,0.03 0.64,-1.26 -0.23,-1.63 0.41,-2.11 -0.46,-3.98 1.56,-6.54 0.84,-0.57 5.86,-1.59 -0.62,-2.4 0,0 4.55,-1.45 7.78,0.43 6.97,-0.31 1.55,0.53 1.42,2.21 1.03,3.19 -0.16,0.86 1.09,2.69 2.28,0.59 5.53,-3.5 3.04,-4.43 1.71,-3.92 1.7,-8.1 1.13,-2.14 2.4,-2.48 2.18,-1.45 0.85,-2.06 1.86,-0.38 1.5,1.24 0.82,-0.3 1.49,-2.44 z"
// // // //  title="Ondo"
// // // //  fill="green"
// // // //  stroke="#888888"
// // // //  stroke-width="2"

// // // //  id="NG-ON" />
// // // // <path
// // // //  d="m 117.18165,366.88874 8.27,0.22 2.6,-0.31 3.55,-1.61 0.36,-0.09 0.18,0.85 -0.08,-0.88 2.65,0.38 4.74,-1.7 2.18,0.58 1.48,3.17 3.49,-0.13 1.67,-0.8 0.39,0.54 0,0 -1.52,5.3 -1.99,1.64 -2.18,0.94 -1.62,1.5 -1.9,4.25 -0.12,1.4 0.81,2.81 -1.19,3.99 0.69,4.78 2.85,6.11 0.84,3.79 0.83,1.7 0,0 0.62,2.41 -5.86,1.58 -0.84,0.58 -1.56,6.54 0.46,3.98 -0.4,2.11 0.23,1.63 -0.64,1.26 -1.81,-0.03 -2.91,-2.22 -2.51,-1.24 -2.32,0.01 -4.28,3.45 -2.15,4.96 -2.67,1.43 0,0 0.3,-1.01 -0.31,-0.13 -4.16,0.26 -2.12,0.92 -1.15,-0.69 -1.1,0.02 -3.06,1.96 -2.97,-7.11 -3.389999,-0.59 -3.85,1.98 -1.97,0.01 -0.59,-4.28 -0.52,-0.84 -0.94,-0.39 -1.4,1.11 -2.74,1.08 0,0 2.34,-9.84 0.43,-5.29 1.67,-8.72 -0.87,-0.49 -3.05,-4.88 -3.11,-2.33 -0.27,-0.93 -0.14,-0.88 1.15,-1.09 0.78,-1.76 0.87,-9.27 0.6,-0.28 4.3,1.34 2.32,-0.75 0.78,-0.99 0.13,-2.3 1.06,-0.57 2.81,-3.32 3.009999,1.84 3.59,5.56 2.13,-0.93 0.65,-1.43 2.05,-1.16 0.98,-1.39 0.28,0.39 1.83,-1.51 2.29,-0.76 0.25,0.38 0.99,-1.34 0.31,-1.28 z"
// // // //  title="Osun"
// // // //  fill="white"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-OS" />
// // // // <path
// // // //  d="m 5.381651,335.88874 3.19,-2.78 3.17,-0.02 4.08,-0.72 1.5,-0.79 0.19,-0.99 3.91,-3.44 1.66,-0.66 6.93,-5.53 2.57,-0.27 0.69,0.19 0.91,1.13 0.45,-0.11 0.53,0.75 0.93,-0.15 7,-3.26 3.01,-2.21 1.13,-0.26 2.49,-1.94 5.79,-3.3 6.64,-2.92 4.42,-3.43 0.45,-1.11 0.02,-2.65 1.69,-3.71 3.82,-2.08 2.04,-0.09 4.08,2.46 0.54,2.48 1.69,2.04 3.25,2.42 5.7,1.74 2.4,1.54 1.1,-0.13 3.83,1.08 2.21,-0.08 2.829999,-1.8 1.31,0.78 0.16,1.3 -2.34,3.16 -3.159999,2.09 -0.57,0.59 -0.35,1.6 -2.08,1.55 -1.03,4.5 0.81,1.58 1.32,5.29 1.66,1.91 2.999999,7.11 1.97,2.63 0.79,2.77 0.09,2.1 1.22,3.44 2.95,4.24 3.46,2.25 0.03,0.8 0.78,0.66 0.39,2.77 1.9,4.81 0.71,0.94 1.45,0.07 0.49,0.66 0,0 0.53,3.2 -0.31,1.28 -0.99,1.34 -0.25,-0.38 -2.29,0.76 -1.83,1.51 -0.28,-0.39 -0.98,1.39 -2.05,1.16 -0.65,1.43 -2.13,0.93 -3.59,-5.56 -3.009999,-1.84 -2.81,3.32 -1.06,0.57 -0.13,2.3 -0.78,0.99 -2.32,0.75 -4.3,-1.34 -0.6,0.28 -0.87,9.27 -0.78,1.76 -1.15,1.09 0.14,0.88 0.27,0.93 3.11,2.33 3.05,4.88 0.87,0.49 -1.67,8.72 -0.43,5.29 -2.34,9.84 0,0 -5.89,0.88 -1.51,1.37 -3.18,1.24 -3.04,-0.13 -2.7,0.58 -6.09,0.25 -0.37,-0.28 0.33,-1.13 3.97,-4.01 -0.41,-2.87 -1.1,-2.7 0.1,-2.22 -0.64,-1.1 -2.98,-1.22 -0.41,-0.71 -0.33,-5.66 -1.17,-1.89 -6.2,-0.22 -2.47,0.6 -1.13,1.11 -1.02,0.26 -1.59,-1.13 -1.75,-4.34 -2.6,-0.29 -1.62,1.48 -1.14,4.24 -2.78,3.97 -1.74,0.49 -4.05,-0.28 -2.34,-1.13 -3.01,-2.36 -3.2,-4.51 -1.02,-3.04 -3.05,-2.47 -2.12,-2.51 -0.52,-3.66 0.51,-0.57 0.41,0.24 1.74,-5.98 0.16,-3.09 -0.54,-1.75 -0.88,-0.61 -1.37,0 -0.47,0.45 -0.57,1.25 -0.94,5.56 -0.84,-0.13 -1.31,-2.17 -0.56,-2.36 -0.15,-6.48 -0.41,-1.43 -1.24,-1.79 -1.9,-0.93 -3.49,0.21 -5.97000003,4.29 0,0 1.07000003,-2.08 0.73,-4.3 1.33,-4.15 -0.3,-1.12 0.37,-2.7 1.13,-2.26 0.36,-2.89 -2.44,-3.06 -1.17,-3.99 0.08,-2.02 1.05,-1.87 -0.44,-2.05 0.48,-0.7 1.25,-0.3 1.37,-2.88 -0.43,-0.44 0.73,-0.97 0.01,-1.07 z"
// // // //  title="Oyo"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-OY" />
// // // // <path
// // // //  d="m 379.00165,223.49874 1.53,-0.49 3.18,0.08 2.78,0.88 2.61,4.16 0.78,4.8 -0.04,12.38 10.97,-2.19 1.06,0.21 1.8,1.92 0.97,3.13 0.26,5.94 -0.23,1.17 -2.38,4.47 -0.09,1.69 0.6,0.85 3.92,1.42 0.79,0.71 0.9,1.16 1.65,4.07 1.56,1.34 1.51,0.53 4.8,0.27 5.47,1.48 10.04,-0.59 4.39,-1.41 2.89,-5.21 4.76,-1.3 0.5,-1.67 -0.27,-1.74 -3.17,-4.06 0.3,-1.44 3.03,-1.78 7.6,3.95 2.57,0.51 9.26,4.93 11.07,4.74 6.18,4.04 6.36,3.43 0,0 1.56,3.94 0.21,2.15 -0.51,4.08 0.76,5.96 2.3,3.86 1.05,6.02 -0.55,1.33 0.3,2.25 0.43,0 0.21,5.54 -1.78,3.08 -12.18,5.86 -1.9,-0.11 -9.52,2.1 -2.49,1.44 -2.06,4.19 -4.74,5.72 -7.11,3.76 -7.68,7.65 -2.43,1.19 -4.41,1.01 -4.11,0.54 -3.85,-0.25 0,0 -1.46,-2.68 -2.52,-2.07 -10.36,-4.33 -9.76,2.79 -8.19,0.15 -3.66,-1.3 -5.15,-2.71 -1.44,-2.07 0.3,-5.41 -0.32,-1.24 -2.09,-2.43 -0.64,-1.72 0.32,-2.25 1.55,-1.36 1.55,-2.86 1.46,-1.05 1.41,-0.2 2.11,-1.98 2.7,-4.01 0.79,-2.93 -2.01,-2.21 -1.04,-0.56 -2.77,1.35 -3.7,0 -5.32,-0.56 -2.16,-0.98 -1.93,-3.41 -0.63,-4.48 -2.08,-0.85 -2.42,-0.11 -1.69,-1.65 0,0 1.67,-3.94 -0.12,-3.41 -1,-2.09 -1.71,-1.21 -2.57,-3.08 -3.26,-5.28 -0.1,-1.16 1.05,-1.4 -0.21,-4.74 1.76,-1.28 0.4,-3.08 1.91,-1.55 0.42,-1.07 -0.53,-2.1 0.7,-7.81 -0.18,-1.97 0.34,-1.1 2.39,-1.97 -0.75,-3.52 -1.36,-2.82 0.22,-2.71 2.13,-4.97 1.9,-1.4 2.19,-0.73 1.32,-1.56 0.55,-1.43 0.21,-2.9 z"
// // // //  title="Plateau"
// // // //  fill="red"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-PL" />
// // // // <path
// // // //  d="m 277.72165,584.56874 -1.46,1.39 0.02,0.77 -0.62,-0.24 0.22,-1.42 1.44,-0.82 0.4,0.32 z m -3.14,-1.84 -1.72,-0.98 -0.55,0.15 -0.55,0.15 -0.21,-0.69 0.86,-0.79 -0.31,-0.67 0.31,-0.65 -0.07,-1.05 -0.57,-0.81 -0.91,-0.17 -0.22,0.16 -0.71,-1.7 -0.27,-0.17 0.14,-0.46 -0.86,-0.86 -0.27,0.36 -0.96,0.15 -0.19,0.82 0.57,1.03 0.5,1.05 0.41,2.04 -0.48,-0.23 -0.45,0.63 1.07,3.48 -0.14,1.27 1.17,4.04 -0.24,0.22 0.77,0.46 2.06,-0.43 0.4,-0.45 0.13,-0.58 1.75,0.49 0.03,-2.23 0.67,-1.56 -1.16,-2.02 z m -3.8,-10.26 0.41,0.46 2.18,0.09 0.19,-0.91 -0.41,-0.31 -1.69,0.3 -0.68,0.37 z m 1.27,-2.46 0.36,1.13 0.52,0.19 -0.29,-1.9 -0.59,0.58 z m 7.2,9.74 -1.44,-2.86 -1,-0.7 -1.63,-0.81 -0.27,-0.12 -0.84,0.65 0.65,0.09 1.31,1.13 0.14,0.21 -0.23,0.46 0.52,0.93 0.12,1.92 1.29,1.2 0.91,0.17 0.67,-1.41 -0.2,-0.86 z m 5.92,6.12 -2.08,-2.62 -1.31,1.63 0.79,0.79 0.81,-0.24 0.38,0.91 0.76,0 0.22,0.62 1.17,-0.5 1.08,1.08 1.86,-1.49 -0.62,-0.55 -3.06,0.37 z m -19.91,-6.61 -1.12,0.53 -0.28,1.32 1.14,0.4 1.44,1.08 1.03,2.28 -0.29,-3.36 -0.36,-0.15 0.26,-1.49 -1.82,-0.61 z m 18.13,2.56 -2.37,-1.62 -1.55,-2.35 -0.03,-0.27 -0.48,-1.7 -0.48,0.43 -0.4,-0.36 0.43,-0.67 -0.03,-1.49 -0.12,-0.07 -0.57,1.85 -2.25,-0.7 -0.53,-0.1 -0.88,-1.08 -0.07,-1.52 -0.36,-0.29 -0.07,-0.46 -0.26,-0.17 -0.15,-0.65 0.5,-0.79 -0.98,-1.22 -0.81,0.53 -0.34,0.89 0.65,1.54 -2.06,0.77 -0.41,0.36 -0.93,0.38 -0.52,0.05 -1,0.77 -0.46,0.62 -0.09,-1.51 -0.58,0.74 -0.22,0.51 1,1.65 0.55,2.45 -1.31,0.45 -0.53,0.21 -1.38,-1.61 -0.71,-1.9 -1.45,-2.41 -1.5,-0.51 0.56,-1.55 -0.68,-2.22 0.98,-0.81 0.35,-0.48 -0.53,-0.67 -1.81,-0.24 -1.81,-1.11 -0.28,1.59 -0.89,0.57 -0.33,-0.77 -1.27,-0.14 -0.34,-0.34 -0.64,0.19 -0.77,0.03 -0.62,-0.87 -0.19,-0.14 -0.55,0.41 0.19,0.99 -0.14,0.33 0.46,0.31 1.27,1.27 -0.12,1.53 0.98,4.64 3.22,3.31 0.02,1.18 -1.81,1.46 -0.1,0.58 1.82,6.56 0.55,3.32 2.41,2.48 -0.29,0.33 -7.24,0.69 -2.24,-0.75 -0.09,-2.71 -0.24,-2.54 0.14,-0.46 -0.03,-0.17 -0.46,-2.71 -0.19,-0.75 1.94,-3.67 -0.19,-2.67 -0.67,0.15 -0.68,0.1 -3.96,-2.6 -1.2,-4.38 -1.38,-1.87 -1.99,-0.02 -6.54,2.54 -1.04,-0.26 -0.35,-1.94 0.42,-1.46 -3.31,-1.44 -0.5,-0.83 0.07,-4.34 1.9,-2.67 0.76,-2.05 0.03,-1.27 -1.29,0.16 -0.84,-0.78 1.33,-4.44 4.49,-7.84 2.77,0.17 0.55,-0.5 0.75,-2.49 1.54,-0.79 -0.23,-1.81 1.58,-1.07 0.95,-1.48 -0.03,-1.94 -0.63,-1.54 -0.76,-0.58 -1.92,-0.83 -2.94,0.49 -1.04,-0.28 -0.57,-1.04 0.21,-0.44 3.52,-1.81 0.19,-5.3 0.7,-1.48 2.05,-1.42 0.89,-1.75 0.82,-3.18 -1.09,-3.54 0.23,-0.35 1.11,1.28 2.4,0.21 -2.75,13.08 1.51,0.44 3.47,-0.67 2.12,0.78 0.44,1.66 -0.52,4.62 -1.09,2.76 0.26,1.37 1.84,1.3 1.72,3.41 2.16,1.65 2.14,0.41 6.72,-0.14 4.7,1.12 4.15,-1.07 2.13,-0.03 4.51,1.13 2.57,-0.95 0.55,0.05 0.66,1.72 0.06,2.78 -2.4,4.19 -3.41,4.33 -1.37,3.71 -0.16,1.09 0.6,1.11 1.45,1.41 1.8,0.27 3.13,-0.59 1.11,-0.64 2.79,-0.12 3.28,1.22 1.81,-0.42 2.94,1.4 2.35,1.79 1.95,3.49 0.63,2.3 -0.96,4.27 0.58,4.55 -0.51,0.32 -0.04,0.64 0.61,1.17 -1.22,0.77 -0.84,-0.72 -0.17,-0.98 -1.22,-0.27 -0.55,-0.26 -0.26,0.46 -1.39,1.18 -0.58,-0.24 -0.26,-0.36 -0.38,-0.02 -0.71,0.39 -1.5,-2.36 -1.27,0.96 -0.93,-0.36 -1.6,-0.5 -0.65,-1.03 -0.67,0.19 -0.74,-0.86 -0.62,0.51 -0.19,0.79 -0.89,0.33 0.34,1.08 0.27,1.03 0.24,0.6 0.78,0.6 0.77,-0.24 0.57,0.08 0.86,-0.31 -0.17,1.75 -1.77,0.17 -1.44,0.53 -0.74,-1.2 -0.1,-0.33 -1.05,-1.17 -0.15,-0.94 0.11,-0.22 z m 21.52,4.31 -0.69,-0.39 -0.43,-0.03 -0.88,-0.36 -0.02,-0.02 -0.4,-0.36 -0.42,0.46 -0.32,-0.13 0.35,-0.54 -0.88,-1.49 -0.9,0.53 -1.04,-0.9 -0.36,-0.34 -0.17,-0.51 -1.39,0.01 -0.26,0.28 -1.23,0.87 -1.33,-0.05 -0.46,0.04 -0.43,-0.23 -0.63,-0.63 -0.53,-0.31 -0.09,-0.81 -1.24,0.34 -1.03,0.02 0.02,-0.42 -1.25,-0.34 -0.91,-0.46 -1.34,-0.09 -0.48,0.24 -0.23,0.58 -0.02,0.79 1.72,0 0.09,0.08 1.17,1.07 0.23,0.67 0.36,1.37 0.84,0.31 0.16,-0.4 0.34,0.28 1.07,0.03 0.06,0.22 -1.84,0.74 -0.43,0.15 -0.69,2.4 5.47,0.77 4.18,-0.92 5.93,-0.14 -0.19,-1.22 0.52,-1.16 z m -48.68,-18.07 0.79,-0.17 0.92,-0.79 0.08,-1.12 1.29,0.9 1.6,0.63 -0.96,1.17 0.43,1.85 0.27,0.32 -0.03,0.58 -0.6,0.94 0.22,0.64 1.01,0.31 1.26,1.35 2.07,4.36 -0.93,0.61 -0.42,0.84 0.15,0.91 3.15,1.85 0.6,2.9 0.88,1.32 -0.12,1.39 0.48,1.61 1.48,1.13 -1.12,1.39 -0.96,0.36 -0.86,-0.5 -0.6,0.41 -6.38,-1.39 -0.81,-2.54 0.53,-0.62 -0.6,0.02 -1.36,-3.89 -0.81,-1.9 0.1,-2.06 1.63,-1.56 -0.17,-1.35 -1.81,-1.66 -1.69,-1.15 -0.76,-4.06 -0.29,-0.58 0.02,-1.82 -0.77,-1.08 1.24,-0.74 0.88,0.63 0.67,0 0.3,0.56 z"
// // // //  title="Rivers"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-RI" />
// // // // <path
// // // //  d="m 178.43165,0.2287449 12.88,5.68 20.53,7.2500001 4,2.35 4.64,-1.49 3.65,-0.02 8.54,4.12 15.88,15.56 5.98,10.42 0,0 -3.03,2.6 -7.1,4 -9.51,-1.28 -1.9,-0.66 -1.7,-2.05 -2.27,-0.68 -4.97,-0.19 -0.59,5.48 -0.73,1.89 -0.5,0.22 -2.7,-1.44 -2.79,0 -4.85,1.56 -2.11,1.82 -0.11,0.7 0.78,5.14 0.07,8.44 -1.35,1 -4.04,1.64 -10.02,0.79 -6.09,0.95 -5.83,8.58 -1.88,1.87 -3.07,1.91 0.06,2.88 1.43,4.64 0.65,4.25 -0.74,3.029995 -2.46,1.7 -6.11,0.53 -1.28,-0.29 -4.8,0.64 -2.64,-0.31 -4.47,0.33 -9.33,-1.67 -0.92,0.6 -0.93,4.51 0.1,18.21 -0.66,13.78 0,0 -1.62,0.97 -0.94,-0.07 -0.77,-1.75 -2.04,0.72 -1.89,-0.86 -1.69,0.12 -12,5.45 -2.4,3 -1.71,1.35 -2.78,-0.29 -0.76,-0.51 -2.55,-3.65 1.16,-4.77 2.61,-5.63 2.12,-9.79 -0.79,-13.05 0.14,-9.94 1.01,-3.779995 1.28,-1.48 3.95,-1.18 2.68,-0.02 3.17,2.04 1.02,-0.04 0.64,-1.56 0.24,-8.02 -1.68,-5.52 -0.04,-2.04 1.3,-6.06 0.18,-3.32 -1.8,-4.28 -1.86,-2.15 0.42,-3.7 1.42,-2.98 -0.09,-2.4 1.62,-3.93 -0.4,-1.25 -1.08,-0.88 -1.16,0.31 -2.49,3.69 -0.63,0.56 -1.82,0.43 -3.06,-0.68 -2.95,-2.07 -9.56,-3.12 -1.06,-1.1 -3.19,-1.82 -1.65,-2.12 -0.76,-0.31 -4.629999,1.58 -1.86,-0.74 -6.62,0.14 0,0 0.09,-16.44 4.14,-0.02 16.559999,-14.58 25.12,-5.0100001 2.41,2.14 5.71,0.48 6.45,-0.72 4.85,0.56 5.33,-0.16 5.25,-6.26"
// // // //  title="Sokoto"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-SO" />
// // // // <path
// // // //  d="m 488.91165,275.87874 4.59,-2.65 5.85,0.78 10.59,-4.85 6.44,1.09 3.99,0.03 0,0 3.57,0.71 5.9,-0.6 12.46,0.02 6.37,-0.47 0,0 5.45,10.18 1.46,1.92 4.65,1.08 2.08,1.29 5.26,9.82 -0.46,2.17 0.34,3.84 2.66,2.94 4.14,1.47 2.02,3.84 0.26,1.81 -1,3.62 -5.99,11.44 0.38,5.78 -0.44,2.08 -6.12,5.22 -8.63,11.52 -5.08,5.48 -3.8,3.22 -4.14,4.78 -0.82,1.58 2.52,6.73 2.91,4.7 2.71,2.45 2.72,-1.99 2.83,-4.01 1.64,-0.38 1.42,0.43 1.52,1.12 2.5,3.15 4.32,3.84 2.15,2.6 1.04,2.02 -0.58,5.49 0.74,1.73 0.38,3.54 1.94,4.62 -0.05,1.56 1.22,0.88 0,0 -4.94,5.48 -1.09,1.94 -0.89,2.92 0.38,5.92 0.92,3.32 1.33,2.12 -0.18,1.29 -0.98,0.73 -4.04,-0.35 -0.68,0.46 -2.06,0.06 -0.18,1.64 -1.72,0.75 -1.54,1.93 -1.91,0.43 -1.09,4.21 -2.12,0.65 -1.37,2.72 0.06,0.5 0.94,-0.05 0.46,0.44 0.09,1.77 0.88,0.11 0.19,0.89 -0.99,0.43 -0.62,1.15 0.94,1.52 -0.08,1.04 -1.92,1.11 -0.22,3.22 -1.46,1.44 -0.57,1.91 -1.81,0.78 -1.77,-0.83 -0.6,0.54 -1.24,0.15 -0.46,0.64 0.46,0.88 -0.18,1.73 -0.44,0.5 -3.75,0.68 -0.42,0.22 -0.2,1.37 -1.37,-0.18 -3.03,-2.03 -2.25,1.01 -0.67,-0.7 -3.01,-0.66 -1.42,-1.22 -0.58,0.05 -1.22,1.41 -2.03,-0.08 0.24,-8.73 -2.03,-2.16 -2.24,-0.11 -2.36,2.14 -2.84,-0.48 -1.86,-0.85 -1.43,-3.38 -1.18,-2.19 -1.22,-0.81 -1.17,-0.07 -1.31,-2.11 -0.12,-0.73 1.66,-4.79 -2.66,-1.84 -1.49,-0.2 -0.6,0.74 -1.69,-2.15 -1.03,-0.08 -1.5,-1.61 -0.77,-0.07 -0.36,-1.52 -1.25,-0.63 -0.4,0.46 -1.47,-0.36 -1.85,-1.58 0.52,-1.93 -0.4,-2.09 -1.65,-1.31 -0.76,4.76 0.08,2.89 -1.39,6.02 -0.88,1 -1.67,0.57 -0.34,0.87 -0.64,0.11 -0.94,-0.97 -15.69,1.52 -2.64,-3.08 0.62,-1.75 -0.85,-2.06 -0.19,-1.18 0.07,-0.81 -0.89,-0.32 -8.2,7.4 -0.64,1.12 -2.44,1.72 -1.12,1.84 -4.62,4.63 -1.34,-0.72 -2.2,-0.1 -1.6,-0.22 -0.8,-0.61 -0.9,2.13 0.3,0.79 -0.76,0.97 -0.38,1.8 0.36,2.03 -0.28,1.07 -0.6,0.37 -1.02,2.82 -1.35,5.37 -0.5,0.39 -0.68,-0.34 -1.32,0.37 -1.03,-1.32 -0.44,0.46 0,0 1.9,-8.19 0.03,-8.76 0.33,-1.08 -0.61,-0.73 2.11,-11.5 3.31,-6.16 3.44,-3.25 3.09,-1.94 0.92,-1.43 -0.29,-5.92 2.38,-5.89 0.59,-3.23 -0.56,-1.78 0.26,-1.04 -1.17,-1.36 0.14,-0.65 -8.37,-7.57 -4.44,-5.65 -5.14,-4.9 -7.48,-1.77 -8.18,-0.48 -7.47,0.95 -6.12,2.63 -1.9,-0.57 3.79,-5.97 0,0 1.21,-1.39 11.23,-7.21 0.11,-1.19 -1,-2.68 0.54,-0.65 -0.35,-2.88 -2.03,-2.51 -1.71,-1.36 0.73,-2.86 1.33,-2.14 1.28,-0.86 1.86,0 1.73,0.9 1,1.07 1.52,-0.23 0.33,0.41 4.51,0.95 2.74,-0.82 2.58,-3.68 0,0 3.85,0.25 4.11,-0.54 4.41,-1.01 2.43,-1.19 7.68,-7.65 7.11,-3.76 4.74,-5.72 2.06,-4.19 2.49,-1.44 9.52,-2.1 1.9,0.11 12.18,-5.86 1.78,-3.08 -0.21,-5.54 -0.43,0 -0.3,-2.25 0.55,-1.33 -1.05,-6.02 -2.3,-3.86 -0.76,-5.96 0.51,-4.08 -0.21,-2.15 z"
// // // //  title="Taraba"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-TA" />
// // // // <path
// // // //  d="m 526.42165,32.448745 12.45,0.19 9.56,1.2 10.76,4.18 11.69,2.55 2.73,1.51 6.09,5.17 4.78,3 1.58,0.14 0.3,-0.82 1,-0.28 1.65,0.65 0.62,-0.52 -0.55,-1.18 1.49,0.16 1.7,0.94 1.66,-0.42 0.83,0.71 0.63,1.07 1.04,-0.62 2.85,0.61 0.74,0.5 0.93,0.12 0.99,-0.01 0,0 -0.08,4.21 -1.49,8.02 1.23,3.85 1.45,1.82 4.8,3.84 0.48,3.74 -1.84,4.21 -2.37,3.08 -7.06,6.31 -0.55,2.2 1.72,3.83 -0.05,5.789995 -2.54,16.29 -0.13,3.5 1.69,7.44 -4.72,9.14 0.15,1.94 0.64,0.36 4.91,-0.21 3.13,3.75 0.84,3.33 -0.99,2.11 -4.54,4.43 -3.3,5.9 -2.89,3.35 -0.9,2.86 0.04,2.97 0.76,4.15 -0.24,2.94 -2.09,3.08 -6.11,3.65 -11.21,3.02 -2.66,1.92 -1.72,2.83 -0.61,2.77 0.28,8.39 -3.41,4.53 -3.04,0.69 0,0 -6.78,0.01 -0.3,-0.51 -0.77,-6.45 1.2,-11.85 -0.67,-4.87 -3.68,-3.38 -1.58,1.02 1,-1.54 -3.42,-3.58 -4.75,-6.4 -8.49,-6.26 -2.18,-1.29 -2.98,-1.01 -4.04,-0.17 -4.17,1.51 -0.91,0.88 0,0 -3.04,-0.37 -1.63,-1.53 0.99,-6.78 1.05,-2.72 0.23,-4.92 -8.35,-20.91 -0.2,-3.87 -0.95,-2.71 -0.33,-2.7 -0.21,-6.74 -3.16,-4.66 0.19,-1.81 -0.77,-7.079995 -1.14,-2.93 -7.74,-6.19 0,0 -0.87,-2.9 -1.76,-11.53 -2.21,-3.4 -1.85,-0.88 -2.03,0.61 -4.99,-2.22 -5.86,1.86 -1.12,0.72 -1.46,-2.53 -0.69,-4.35 -2.13,-4.78 -2.21,-1.25 -6.33,1.96 -2.82,1.37 -3.16,0.63 -5.32,2.59 -2.1,3.99 -3.14,1.8 -6,-0.73 -1.79,-1.18 0,0 7.38,-7.5 3.25,-4.6 4.08,-3.51 5.19,-5.85 3.98,-2.54 9.05,-4.06 16.06,-0.94 12.55,-4.7 19.58,-1.07 z"
// // // //  title="Yobe"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-YO" />
// // // // <path
// // // //  d="m 258.59165,50.268745 5.45,6.52 5.08,-0.11 3.34,-0.61 0,0 -1.44,10.82 0.99,6.17 -0.07,6.05 1,5.17 0.39,4.75 1.31,3.21 -0.4,3.57 2.5,5.199995 0.69,3.05 -0.13,1.68 0.95,2.47 -1.09,5.16 -1.82,3.63 1.26,1.21 2.53,1.16 2.68,2.29 1.16,1.43 0.5,1.95 -1.89,1.62 -3.34,-0.81 -0.55,3.2 -4.88,3.97 -1.28,-0.87 -6.61,0.13 -1.5,0.84 -0.65,4 -1.56,4.14 -0.45,3.76 0.16,1.07 1.91,1.9 0.9,3.69 -1.25,6.1 -0.02,2.33 0,0 -1.01,-0.03 -2.34,2.38 -2.75,1.77 -0.85,1.14 -1.71,3.41 -0.64,3.55 -1.51,3.23 -3.04,3.1 -2.33,1.51 -4.71,0.62 -7.94,-0.57 -5.64,0.95 -5.27,4.71 -2.86,4.16 -1.28,0.76 -1.68,0.12 0,0 0.07,-0.84 -1.59,-4.09 -3.8,-6.64 -3.32,-4.4 0,0 -0.21,-5.48 -1.38,-7.58 -1.93,-3.01 -5.38,-2.71 0,-1.2 2.05,-6.49 0.01,-2.47 -1.41,-2.15 -4.35,-1.77 -4.85,-0.62 -1.22,0.81 -2.49,0.59 -3.79,-0.5 -5.47,0.76 -3.65,-2.41 -2.87,-0.11 -1.69,-3.3 -1.08,-0.57 -3.61,0.65 -2.09,-0.31 -0.91,-0.64 -0.79,0.15 -1.06,0.62 -0.82,2.32 -6.34,1.46 -4.11,-2.25 -1.82,0 -0.86,0.48 0,0 0.66,-13.78 -0.1,-18.21 0.93,-4.51 0.92,-0.6 9.33,1.67 4.47,-0.33 2.64,0.31 4.8,-0.64 1.28,0.29 6.11,-0.53 2.46,-1.7 0.74,-3.029995 -0.65,-4.25 -1.43,-4.64 -0.06,-2.88 3.07,-1.91 1.88,-1.87 5.83,-8.58 6.09,-0.95 10.02,-0.79 4.04,-1.64 1.35,-1 -0.07,-8.44 -0.78,-5.14 0.11,-0.7 2.11,-1.82 4.85,-1.56 2.79,0 2.7,1.44 0.5,-0.22 0.73,-1.89 0.59,-5.48 4.97,0.19 2.27,0.68 1.7,2.05 1.9,0.66 9.51,1.28 7.1,-4 3.03,-2.6 0,0 z"
// // // //  title="Zamfara"
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // //  id="NG-ZA" />
// // // //  fill="#ADD8E6"
// // // //  stroke="#888888"
// // // //  stroke-width="2"
// // // // </svg>

// // // // <!-- Indicator Matrix -->
// // // //   <rect x="600" y="520" width="140" height="80" fill="#ffffff" stroke="#000000" stroke-width="2" />
// // // //   <text x="630" y="540" font-family="Arial, sans-serif" font-size="12" fill="#000000">Indicator Matrix</text>
// // // //   <!-- Sample data for indicator matrix -->
// // // //   <rect x="640" y="550" width="20" height="20" fill="green" />
// // // //   <rect x="670" y="550" width="20" height="20" fill="yellow" />
// // // //   <rect x="700" y="550" width="20" height="20" fill="red" />
// // // //   <text x="635" y="590" font-family="Arial, sans-serif" font-size="12" fill="#000000">Low</text>
// // // //   <text x="660" y="590" font-family="Arial, sans-serif" font-size="12" fill="#000000">Medium</text>
// // // //   <text x="705" y="590" font-family="Arial, sans-serif" font-size="12" fill="#000000">High</text>
// // // //   `;
// // // // };

// // // // // Example usage:
// // // // const motaEngilMapSVG = generateMotaEngilMap();

// // // // const today = new Date();
// // // // const staff_no= "2347035517578"

// // // // const keySecurityIncidents = [
// // // //   {
// // // //     location: "Akwa Ibom",
// // // //     date: "August 22, 2023",
// // // //     details: "Gunmen suspected to be armed robbers intercepted a man along Uyo-Etinan Road in Etinan, Etinan LGA, and stole his saloon car."
// // // //   },


// // // //     {
// // // //       location: "Abuja",
// // // //       date: "August 21, 2023",
// // // //       details: "Gunmen suspected to be kidnappers reportedly abducted two persons at a residential estate in Sabon Lugbe along Airport Road, AMAC. No further details were available."
// // // //     },
// // // //     {
// // // //       location: "Benue",
// // // //       date: "August 21, 2023",
// // // //       details: "Gunmen belonging to rival groups suspected to be herdsmen reportedly engaged themselves in a gun battle at Chito village, Ukum LGA. Five persons were reportedly killed in the gun battle while others sustained gunshot injuries."
// // // //     },
// // // //     // Add more incidents here...
// // // //     {
// // // //       location: "Imo",
// // // //       date: "August 22, 2023",
// // // //       details: "The Nigerian Army reportedly engaged in a gun battle with armed men suspected to be separatist members along the Owerri-Onitsha expressway at Ukwuorji, Mbaitoli LGA, forcing the assailants to flee the area."
// // // //     },
  
// // // //   {
// // // //     location: "Edo",
// // // //     date: "August 23, 2023",
// // // //     details: "Gunmen suspected to be armed robbers reportedly attacked a patrol vehicle belonging to soldiers along Akpakpava street in Benin, Oredo LGA. The assailants reportedly injured one soldier."
// // // //   },
// // // //   {
// // // //     location: "Delta",
// // // //     date: "August 24, 2023",
// // // //     details: "Gunmen on motorcycles suspected to be cultists reportedly attacked a Police Division in Isiokolo community, Ethiope East LGA. The assailants reportedly killed one Policeman while another sustained gunshot injury."
// // // //   },
// // // //   {
// // // //     location: "Rivers",
// // // //     date: "August 22, 2023",
// // // //     details: "Suspected criminals vandalised a pipeline and siphoned fuel at a fuel dump in Rex Lawson Street in Borikiri town, Port Harcourt which resulted in an explosion and reportedly killed one person."
// // // //   },
// // // //   {
// // // //     location: "Rivers",
// // // //     date: "August 22, 2023",
// // // //     details: "Two factions of the National Union of Road Transport Workers (NURTW) reportedly clashed along the Port Harcourt-Aba Road in Oyigbo, Obior/Akpor LGA. No further details were available."
// // // //   },
// // // //   {
// // // //     location: "Rivers",
// // // //     date: "August 22, 2023",
// // // //     details: "Armed men suspected to be cultists reportedly attacked a student at his residence in Rumuolumeni Town, Obio/Akpor LGA. The assailants reportedly stabbed the victim with broken bottles."
// // // //   },
// // // //   {
// // // //     location: "Rivers",
// // // //     date: "August 23, 2023",
// // // //     details: "Armed robbers reportedly attacked the Rivers State University Girls Hostel at Eagles Island, Rumueme, Port Harcourt LGA. The assailants reportedly assaulted students with machetes, robbed, and dispossessed an unspecified number of the students of their cash and other valuables."
// // // //   },
// // // //   {
// // // //     location: "Rivers",
// // // //     date: "August 25, 2023",
// // // //     details: "Armed men suspected to be cultists reportedly shot and killed a Policeman on security escort duty along Olusegun Obasanjo Road in Oroworukwo area, Port Harcourt LGA."
// // // //   },
// // // //   {
// // // //     location: "Abia",
// // // //     date: "August 21, 2023",
// // // //     details: "Armed men suspected to be kidnappers, reportedly engaged in a shootout with government security forces at Ndiawa village, Umuneochi LGA. Three of the assailants were reportedly killed while others fled."
// // // //   },
// // // //   {
// // // //     location: "Ebonyi",
// // // //     date: "August 23, 2023",
// // // //     details: "Armed men suspected to be separatist members, reportedly engaged Soldiers in a gunshot battle at Effium community, Ohaukwu LGA. The assailants reportedly fled the scene. No further details were available."
// // // //   },
// // // //   {
// // // //     location: "Enugu",
// // // //     date: "August 21, 2023",
// // // //     details: "Armed men suspected to be kidnappers reportedly engaged Policemen in a shootout along Enugu-Port Harcourt Expressway, in Awkunanaw town, Enugu South LGA. Two of the assailants were reportedly killed in the gunfire, while others fled with gunshot injuries."
// // // //   },
// // // //   {
// // // //     location: "Enugu",
// // // //     date: "August 21, 2023",
// // // //     details: "Gunmen suspected to be kidnappers, reportedly shot at a vehicle along Old Enugu-Onitsha Road in Obioma town, Udi LGA, forcing the vehicle to stop. The assailants reportedly abducted one person while the other two occupants died from gunshot injuries."
// // // //   }
// // // // ];


// // // // const fatalities = 70;
// // // // const injuries = 36;
// // // // const abductions = 51;

// // // // const formatDate = (date) => {
// // // //   const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
// // // //   return date.toLocaleDateString('en-US', options);
// // // // };

// // // // const formattedToday = formatDate(today);

// // // // const generate_security_report_PDF = () => {

// // // //   const svgMapContent = generateSVGMap();
// // // //   const lastWeek = new Date(today);
// // // //   lastWeek.setDate(lastWeek.getDate() - 7);
// // // //   const formattedStartDate = formatDate(lastWeek);
// // // //   const formattedEndDate = formattedToday;

// // // //   const incidentsData = {
// // // //     fatalities: 70,
// // // //     injuries: 36,
// // // //     abductions: 51,
// // // //     effectsOnAssets: "Some relevant data about effects on assets goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ex urna. Donec id tempus nulla. Duis eget nunc vitae elit interdum dapibus.",
// // // //     riskImpact: "Some relevant data about risk impact goes here. Vestibulum efficitur ligula et nisi semper, ac eleifend dolor mollis. Suspendisse potenti. Nulla facilisi. Integer vel lacus nec arcu gravida malesuada.",
// // // //     briefSummary: "Highlights of Week 4 incidents:\n- Increased security patrols in high-risk areas\n- Collaboration with local authorities for incident response\n- Implementation of new security protocols"
// // // //   };


  
// // // //   const fatalitiesPercentage = (incidentsData.fatalities / 100) * 100;
// // // //   const injuriesPercentage = (incidentsData.injuries / 100) * 100;
// // // //   const abductionsPercentage = (incidentsData.abductions / 100) * 100;

// // // //   const keySecurityIncidentsHTML = keySecurityIncidents.map((incident, index) => `
// // // //   <p>${index + 1}. ${incident.location}. ${incident.date}, ${incident.details}</p>
// // // // `).join('');


// // // //   const maxVal = Math.max(fatalities, injuries, abductions);
// // // //   const graphWidth = 400;
// // // //   const barWidth = 100;
// // // //   const barSpacing = 20;
// // // //   const graphHeight = 200;

// // // //   const fatalitiesHeight = (fatalities / maxVal) * graphHeight;
// // // //   const injuriesHeight = (injuries / maxVal) * graphHeight;
// // // //   const abductionsHeight = (abductions / maxVal) * graphHeight;


// // // //   const generatePieChart = (data) => {
// // // //     const total = data.reduce((acc, item) => acc + item.value, 0);
// // // //     const centerX = 200;
// // // //     const centerY = 200;
// // // //     const radius = 150;
// // // //     let startAngle = -90; // Start angle at 12 o'clock position

// // // //     let chartSVG = `<svg width="400" height="400">`;

// // // //     // Add heading for the pie chart
// // // //     chartSVG += `<text x="${centerX}" y="30" text-anchor="middle" font-size="16" font-weight="bold">Security Incidents Breakdown</text>`;

// // // //     data.forEach((item, index) => {
// // // //         const percent = (item.value / total) * 100;
// // // //         const angle = (percent / 100) * 360;
// // // //         const largeArcFlag = angle > 180 ? 1 : 0;
// // // //         const endAngle = startAngle + angle;

// // // //         // Calculate coordinates for the arc
// // // //         const x1 = centerX + radius * Math.cos((startAngle / 180) * Math.PI);
// // // //         const y1 = centerY + radius * Math.sin((startAngle / 180) * Math.PI);
// // // //         const x2 = centerX + radius * Math.cos((endAngle / 180) * Math.PI);
// // // //         const y2 = centerY + radius * Math.sin((endAngle / 180) * Math.PI);

// // // //         // Calculate midpoint of the arc
// // // //         const midAngle = startAngle + angle / 2;
// // // //         const midX = centerX + (radius / 2) * Math.cos((midAngle / 180) * Math.PI);
// // // //         const midY = centerY + (radius / 2) * Math.sin((midAngle / 180) * Math.PI);

// // // //         // Draw the arc
// // // //         chartSVG += `
// // // //             <path d="M${centerX},${centerY} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z" fill="${item.color}"></path>
// // // //         `;

// // // //         // Add text for the indicator
// // // //         chartSVG += `<text x="${midX}" y="${midY}" text-anchor="middle" font-size="12">${item.label} (${item.value})</text>`;

// // // //         // Update start angle for the next segment
// // // //         startAngle = endAngle;
// // // //     });

// // // //     chartSVG += `</svg>`;

// // // //     return chartSVG;
// // // // };

// // // // // Example data
// // // // const dataPie = [
// // // //     { label: 'Terrorism', value: 25, color: '#FF5733' },
// // // //     { label: 'Violent Protests', value: 15, color: '#3498DB' },
// // // //     { label: 'Kidnapping', value: 20, color: '#27AE60' },
// // // //     { label: 'Other', value: 40, color: '#F39C12' }
// // // // ];

// // // // const pieChartSVG = generatePieChart(dataPie);

// // // // console.log(pieChartSVG); // Output the SVG for verification




// // // //   const graphSVG = `
// // // //     <svg width="${graphWidth}" height="${graphHeight + 60}">
// // // //       <rect x="${barSpacing}" y="${graphHeight - fatalitiesHeight}" width="${barWidth}" height="${fatalitiesHeight}" fill="#FF5733"></rect>
// // // //       <text x="${barSpacing + (barWidth / 2)}" y="${graphHeight + 20}" text-anchor="middle" font-size="12">${fatalities}</text>
// // // //       <text x="${barSpacing + (barWidth / 2)}" y="${graphHeight + 40}" text-anchor="middle" font-size="12">Fatalities</text>
      
// // // //       <rect x="${(2 * barSpacing) + barWidth}" y="${graphHeight - injuriesHeight}" width="${barWidth}" height="${injuriesHeight}" fill="#3498DB"></rect>
// // // //       <text x="${(2 * barSpacing) + barWidth + (barWidth / 2)}" y="${graphHeight + 20}" text-anchor="middle" font-size="12">${injuries}</text>
// // // //       <text x="${(2 * barSpacing) + barWidth + (barWidth / 2)}" y="${graphHeight + 40}" text-anchor="middle" font-size="12">Injuries</text>
      
// // // //       <rect x="${(3 * barSpacing) + (2 * barWidth)}" y="${graphHeight - abductionsHeight}" width="${barWidth}" height="${abductionsHeight}" fill="#27AE60"></rect>
// // // //       <text x="${(3 * barSpacing) + (2 * barWidth) + (barWidth / 2)}" y="${graphHeight + 20}" text-anchor="middle" font-size="12">${abductions}</text>
// // // //       <text x="${(3 * barSpacing) + (2 * barWidth) + (barWidth / 2)}" y="${graphHeight + 40}" text-anchor="middle" font-size="12">Abduction/Kidnap</text>
// // // //     </svg>
// // // //   `;
// // // //   const svgDataURI = `data:image/svg+xml;base64,${Buffer.from(svgMapContent).toString('base64')}`;

// // // //   const securityReportHTML = `
// // // //     <!DOCTYPE html>
// // // //     <html lang="en">
// // // //     <head>
// // // //         <meta charset="UTF-8">
// // // //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
// // // //         <title>Weekly Security Incident Report Nigeria</title>
// // // //         <style>
        
// // // //             body {
// // // //                 font-family: Arial, sans-serif;
// // // //                 margin: 0;
// // // //                 padding: 0;
// // // //             }
// // // //             .container_security_report {
// // // //                 max-width: 800px;
// // // //                 margin: 0 auto;
// // // //                 padding: 20px;
// // // //                 background-color: #f8f9fa;
// // // //                 border-radius: 10px;
// // // //             }
// // // //             .header {
// // // //                 text-align: center;
// // // //                 margin-bottom: 20px;
// // // //             }
// // // //             .footer {
// // // //                 text-align: right;
// // // //                 margin-top: 20px;
// // // //                 font-size: 14px;
// // // //             }
// // // //             .footer p {
// // // //                 margin: 0;
// // // //             }
// // // //             .signature {
// // // //                 text-align: center;
// // // //                 margin-top: 40px;
// // // //             }
// // // //             .watermark {
// // // //                 position: fixed;
// // // //                 top: 50%;
// // // //                 left: 50%;
// // // //                 transform: translate(-50%, -50%);
// // // //                 color: rgba(0, 0, 0, 0.1);
// // // //                 font-size: 5em;
// // // //                 z-index: -1;
// // // //             }
// // // //             .icon {
// // // //                 width: 50px;
// // // //                 height: 50px;
// // // //                 display: inline-block;
// // // //                 background-color: #007bff;
// // // //                 border-radius: 50%;
// // // //                 text-align: center;
// // // //                 line-height: 50px;
// // // //                 margin-right: 10px;
// // // //                 color: #fff;
// // // //                 font-size: 24px;
// // // //             }
// // // //         </style>
// // // //     </head>
// // // //     <body>

// // // //     <main>
// // // //     <!-- Your SVG content here -->
// // // //     <svg xmlns="http://www.w3.org/2000/svg" height="250" width="450" version="1.0" viewBox="-14.709615 -11.98125 127.48333 71.8875">
// // // //         <defs>
// // // //             <!-- Define the clip path -->
// // // //             <clipPath id="a">
// // // //                 <path d="M0 841.89h1785.827V0H0z"/>
// // // //             </clipPath>
// // // //         </defs>
// // // //         <!-- Apply the clip path to the group -->
// // // //         <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 -1155.7275 543.7908)">
// // // //             <!-- Your existing paths and shapes here -->
// // // //             <path d="M924.582 415.8627h19.169v-19.17h-19.169z" fill="#f7a30a" fill-rule="evenodd"/>
// // // //             <path d="M943.751 435.0327h19.17v-19.169h-19.17z" fill="#005ec4" fill-rule="evenodd"/>
// // // //             <path d="M942.4095 435.0324h1.342v-19.169h-19.169v1.341h17.827zm1.3418-19.1694h19.17v-1.342h-17.827v-17.828h-1.343v17.828z" fill="#231f20"/>
// // // //             <path d="M956.972 409.0544h-.851c-.916-1.695-1.841-3.4-2.767-5.196-.832 1.796-1.674 3.501-2.516 5.196h-.972v-6.381h.748v5.195h.019c.252-.837 1.608-3.564 2.42-5.195h.366c.879 1.631 2.365 4.448 2.627 5.195h.019v-5.195h.907zm4.5322-5.9629c-1.691 0-2.271 1.523-2.271 2.771 0 1.196.654 2.553 2.271 2.553 1.618 0 2.272-1.357 2.272-2.553 0-1.248-.579-2.771-2.272-2.771m0-.637c2.021 0 3.273 1.504 3.273 3.408 0 1.788-1.383 3.192-3.273 3.192-1.889 0-3.271-1.404-3.271-3.192 0-1.904 1.251-3.408 3.271-3.408m19.9776 6.5969l-4.021.003v-6.385h4.426v.639l-3.511.002v2.052h3.058v.637h-3.058v2.414h3.106zm7.1982 0h-.752v-5.087h-.019c-.444.638-2.876 3.428-4.329 5.087h-.679v-6.382h.755v5.078h.018c.397-.555 2.858-3.418 4.29-5.078h.716zm5.9082-3.5732v-2.16c-.367-.174-.783-.229-1.339-.229-1.432 0-2.573 1.084-2.573 2.699 0 1.495.961 2.626 2.677 2.626.725 0 1.329-.247 1.725-.511l.377.528c-.396.319-1.15.62-2.111.62-2.377 0-3.678-1.668-3.678-3.282 0-1.75 1.207-3.318 3.555-3.318.839 0 1.64.21 2.282.428v2.599zm3.2888 3.5735h-.914v-6.382h.914zm1.4983-6.3821h3.658v.639h-2.744v5.743h-.914zm-31.3632.0039v5.742l2.139.001v.638h-5.297v-.639h2.203v-5.742z" fill="#636466" fill-rule="evenodd"/>
// // // //             <path d="M972.3656 409.0544l-2.607-6.381h.974l.945 2.689.225.639.671 1.91 1.987-5.238h1.102l-2.568 6.381z" fill="#636466"/>
// // // //             <path d="M972.2015 405.362h4.695V406h-4.466z" fill="#636466" fill-rule="evenodd"/>
// // // //             </g>
// // // //     </svg>
// // // //     <!-- Text added to the right -->
// // // //     <text x="430" y="40" font-family="Calibri, sans-serif" font-size="24" fill="#333333" font-weight="bold" text-anchor="end">Nigeria Weekly Report</text>
// // // //     <svg width="100%" height="1">
// // // //         <line x1="0" y1="0" x2="100%" y2="0" style="stroke: grey; stroke-width: 1;" />
// // // //     </svg>
// // // // </main>

// // // // <div class="container_security_report">
// // // // <div class="header">
// // // //     <h2 style="color: #00008B; font-size: 24px;">SECURITY ADVISORY</h2>
// // // //     <h3 style="color: #00008B;">WEEK: ${formattedStartDate} to ${formattedEndDate}</h3>
// // // //     <h3 style="color: #00008B;">Fatalities: ${incidentsData.fatalities} | Injuries: ${incidentsData.injuries} | Abduction/Kidnap: ${incidentsData.abductions}</h3>
// // // // </div>
// // // // <div class="content">
// // // //     <img src="${svgDataURI}" alt="" />
// // // //     <div id="map-container">${svgMapContent}</div>
// // // //     <h2 style="color: #00008B;">Security Risk Update:</h2>
// // // //     <p style="color: #444; font-family: 'Trebuchet MS', sans-serif; font-size: 12px;">${incidentsData.effectsOnAssets}</p>

// // // //     <div class="graph">
// // // //         ${graphSVG}
// // // //     </div>

// // // //     <h2 style="color: #00008B;">Risk Impact:</h2>
// // // //     <p style="color: #444; font-family: 'Trebuchet MS', sans-serif; font-size: 12px;">${incidentsData.riskImpact}</p>
// // // //     <h3 style="color: #00008B; font-size: 16px;">${incidentsData.briefSummary}</h3>
// // // // </div>
// // // // <div class="graph">
// // // //     ${graphSVG}
// // // // </div>

// // // // <h2 style="color: #00008B;">Key security incidents</h2>
// // // // <div style="color: #444; font-family: 'Trebuchet MS', sans-serif; font-size: 12px;">
// // // //     ${keySecurityIncidentsHTML}
// // // // </div>
// // // // <div class="graph">
// // // //     ${pieChartSVG} <!-- Insert the pie chart SVG here -->
// // // // </div>

// // // // <h2 style="color: #00008B;">Mota-Engil Operational Zones: Security Overview</h2>
// // // // ${motaEngilMapSVG}
// // // // <!-- map here -->

// // // // <div class="footer">
// // // //         <p style="color: #333; font-size: 18px; font-weight: bold; line-height: 1.5;">Vitor Leite,</p>
// // // //         <p style="color: #444; font-family: 'Trebuchet MS', sans-serif; font-size: 12px; line-height: 1.5;">Security Manager,</p>
// // // //         <p style="color: #444; font-family: 'Trebuchet MS', sans-serif; font-size: 12px; line-height: 1.5;">Kama Railway Project</p>
// // // //     </div>
// // // // </div>
// // // // <div class="signature">
// // // // <p>______________________________</p>
// // // // <p>Signature</p>
// // // // </div>

// // // //     </body>
// // // //     </html>
// // // //   `;

// // // //   return securityReportHTML;
// // // // };

// // // // const downloadsFolderPath = "C:\\Users\\Administrator\\Downloads";
// // // // const uniqueFilename = `Mota-Engil Nigeria National Weekly_Security Report ${formattedToday}.pdf`;
// // // // const pdfPath = path.join(downloadsFolderPath, uniqueFilename);

// // // // const generate_incident_report_PDF = (pdfData, filename, callback) => {
// // // //   console.log('Generating PDF...');
// // // //   pdf.create(pdfData).toFile(filename, (err, res) => {
// // // //     if (err) {
// // // //       console.error('Error during PDF generation:', err);
// // // //       callback(err);
// // // //     } else {
// // // //       console.log('PDF generation completed.');
// // // //       callback();
// // // //     }
// // // //   });
// // // // // // // };
// // // // ///////////////////////////unlock
// // // // const sendMessageToStaffs = async (groupId, pdfData, pdfFilename) => {
// // // //   try {
// // // //     const pdfResponse = await axios.post(
// // // //       'https://gate.whapi.cloud/messages/document',
// // // //       {
// // // //         to: `${staff_no}@s.whatsapp.net`,
// // // //         media: `data:application/octet-stream;name=${pdfFilename};base64,${pdfData}`,
// // // //       },
// // // //       {
// // // //         headers: {
// // // //           Accept: 'application/json',
// // // //           'Content-Type': 'application/json',
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       }
// // // //     );

// // // //     console.log('PDF file sent successfully:', pdfResponse.data);
// // // //   } catch (error) {
// // // //     console.error('Error sending message and PDF:', error.message);
// // // //   }
// // // // };

// // // // const securityReportHTML = generate_security_report_PDF();

// // // // generate_incident_report_PDF(securityReportHTML, pdfPath, (error) => {
// // // //   if (error) {
// // // //     console.error('PDF generation failed:', error);
// // // //   } else {
// // // //     const pdfData = fs.readFileSync(pdfPath, { encoding: 'base64' });
// // // //     sendMessageToStaffs(groupId, pdfData, uniqueFilename);
// // // //   }
// // // // });

// // // // setInterval(() => {
// // // //   const securityReportHTML = generate_security_report_PDF();
// // // //   generate_incident_report_PDF(securityReportHTML, pdfPath, (error) => {
// // // //     if (error) {
// // // //       console.error('PDF generation failed:', error);
// // // //     } else {
// // // //       const pdfData = fs.readFileSync(pdfPath, { encoding: 'base64' });
// // // //       sendMessageToStaffs(groupId, pdfData, uniqueFilename);
// // // //     }
// // // //   });
// // // // }, 7 * 24 * 60 * 60 * 1000);

// // // // app.post('/OtherIddata', async function (req, res) {
// // // //   const driverData = req.body;

// // // //   try {
// // // //     const client = new MongoClient(uri);
// // // //     await client.connect();

// // // //     const database = client.db('olukayode_sage');
// // // //     const driversHistoryCollection = database.collection('OtherIDs');

// // // //     // Insert the driver data into the drivers history collection
// // // //     const result = await driversHistoryCollection.insertOne(driverData);
// // // //     console.log('Driver added to otherID:', result);

// // // //     res.status(200).json({ message: 'Driver added to OtherId' });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).send('An error occurred while adding the driver to history');
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });

// // // // app.post('/extractOtherDetails', async (req, res) => {
// // // //   try {
// // // //     const client = new MongoClient(uri);
// // // //     await client.connect();

// // // //     const database = client.db('olukayode_sage');
// // // //     const driversHistoryCollection = database.collection('OtherIDs');

// // // //     // Fetch the required data from the database
// // // //     const token1Data = await driversHistoryCollection.findOne({ idType: 'Token 1' });
// // // //     const groupIDData = await driversHistoryCollection.findOne({ idType: 'GroupID' });

// // // //     // Log the retrieved data
// // // //     console.log('Extracted Details:');
// // // //     console.log('Token1:', token1Data.idNumber);
// // // //     console.log('GroupID:', groupIDData.idNumber);

// // // //     // Send response with the extracted data
// // // //     res.status(200).json({
// // // //       message: 'Details extracted successfully',
// // // //       token1: token1Data.idNumber,
// // // //       groupID: groupIDData.idNumber
// // // //     });
// // // //   } catch (error) {
// // // //     console.error('An error occurred:', error);
// // // //     res.status(500).json({ error: 'An error occurred while extracting details' });
// // // //   } finally {
// // // //     await client.close();
// // // //   }
// // // // });


// // // // app.post('/send_expatriate_parameters', async (req, res) => {
// // // //   const { expatriate_name, expatriate_nationality, expatriate_phone_number, expatriate_residence_nigeria, expatriate_department } = req.body;

// // // //   try {
// // // //       await client.connect();

// // // //       const database = client.db('olukayode_sage');
// // // //       const expatriates = database.collection('expatriates_collection');

// // // //       // Insert the expatriate data into the expatriates collection
// // // //       const result = await expatriates.insertOne({
// // // //           name: expatriate_name,
// // // //           countryOfOrigin: expatriate_nationality,
// // // //           phoneNumber: expatriate_phone_number,
// // // //           houseAddress: expatriate_residence_nigeria,
// // // //           unit: expatriate_department
// // // //       });
// // // //       console.log('Expatriate added to collection:', result);

// // // //       // Respond with success message
// // // //       res.status(200).json({ message: 'Expatriate added to collection' });
// // // //   } catch (error) {
// // // //       console.error('An error occurred:', error);
// // // //       res.status(500).send('An error occurred while adding the expatriate to the collection');
// // // //   } finally {
// // // //       await client.close();
// // // //   }
// // // // });
// //////////////////////////////////////////////////////////////
// ///////////////////////////image analysis
// //   const apiKey = 'AIzaSyCDJvJe29Gj2Zwee01dH1vpMSk6ITWMjOk'; // Replace 'YOUR_API_KEY' with your actual API key
// //   // const apiKey = 'AIzaSyAAaq27xrkFhUSYAirdk5LSSm8LkKhySCE'; // Replace 'YOUR_API_KEY' with your actual API key
// //   const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;


// /////////////////////////////////////workin
// //  // Route to handle incoming webhook requests
// // app.post('/incoming_messages', (req, res) => {
// //   // Extract relevant information from the incoming message
// //   const { messages } = req.body;
// //   messages.forEach(message => {
// //     const { from_name, from, timestamp, type, text } = message;
// //     // Log the extracted information to the console
// //     console.log('Incoming message:', req.body);
// //     console.log(`Sender Name: ${from_name}`);
// //     console.log(`Phone Number: ${from}`);
// //     console.log(`Time: ${new Date(timestamp * 1000).toLocaleString()}`); // Convert timestamp to human-readable date
// //     console.log(`Message Type: ${type}`);
// //     console.log(`Message Text: ${text.body}`);
// //     console.log("-------------------------------------------");
// //   });

// //   // Respond with a success message if needed
// //   res.status(200).send('Message received successfully');
// // });

//   /////////////////////////////////////////////
// // // Function to generate content
// // const apiKey = 'AIzaSyAAaq27xrkFhUSYAirdk5LSSm8LkKhySCE';
// // const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

// // const { GoogleGenerativeAI } = require("@google/generative-ai");

// // // Access your API key as an environment variable (see "Set up your API key" above)
// // const genAI = new GoogleGenerativeAI(apiKey);

// // async function run() {
// //   // For text-only input, use the gemini-pro model
// //   const model = genAI.getGenerativeModel({ model: "gemini-pro"});

// //   const prompt = "Meditation"

// //   const result = await model.generateContent(prompt);
// //   const response = await result.response;
// //   const text = response.text();
// //   console.log(text);
// // }

// // run();
// // ///////////in coming mssages best for now//////////////////////////////////////////////
// // Function to check if the text contains job-related keywords
// // Function to generate content
// // const apiKey = 'AIzaSyAAaq27xrkFhUSYAirdk5LSSm8LkKhySCE';
// // const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
// // const { GoogleGenerativeAI } = require("@google/generative-ai");
// // Access your API key as an environment variable (see "Set up your API key" above)
// // const genAI = new GoogleGenerativeAI(apiKey);
// // Function to check if the text contains job-related keywords

// // Function to check if the text contains job-related keywords
// // function containsJobKeywords(text) {
// //   const keywords = ['vacancy', 'job role', 'contact', 'submit'];
// //   return keywords.some(keyword => text.includes(keyword));
// // }

// // // Job vacancy prompt and instructions to AI
// // const jobVacancyPrompt = `
// // Guidelines and Suggestions:
// // 1. Keyword Filtering: Please include specific keywords or phrases such as "vacancy," "job role," "position," "salary," "deadline," etc. in your job vacancy posts to help the AI identify them accurately.
// // 2. Context Analysis: Ensure that your job vacancy posts contain relevant information such as academic qualifications, work experience, contact information, etc., to help the AI recognize them as job-related.
// // 3. Machine Learning Models: Provide labeled examples of job vacancy posts and non-job-related messages to help train the AI in distinguishing between them.
// // - Please ensure that all information provided is accurate and verified before generating the summary.
// // - Specify the formatting style you prefer for presenting the information, such as bullet points, lists, or paragraphs.
// // - Use consistent language and terminology throughout the summary for clarity and coherence.
// // - Include all relevant details from the job vacancy posts, including qualifications, contact information, deadlines, and any additional fields provided.
// // - If possible, verify the accuracy of the information provided in the job vacancy posts before using it as input for generating summaries.

// // Prompt:
// // Please provide the following information for each job vacancy post:

// // Job role: 

// // Location: 

// // Salary: 

// // Academic qualification/requirements:

// // Work experience:

// // Deadline:
// // Date of posting of the vacancy:

// // Additional Fields:
// // - Position: 
// // - Qualifications:
// // - Contact (Email/WhatsApp):
// // - Interview Date:

// // Please ensure that your job vacancy posts follow the guidelines and suggestions provided above. Thank you!
// // `;

// // // Function to summarize job vacancy posts using AI model
// // async function run(posts) {
// //   try {
// //     const batchSize = 10; // Process 10 posts at a time
// //     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// //     const summaries = [];
// //     for (let i = 0; i < posts.length; i += batchSize) {
// //       const batchPosts = posts.slice(i, i + batchSize);
// //       const batchResults = await Promise.all(batchPosts.map(post => model.generateContent(post)));
// //       const batchSummaries = await Promise.all(batchResults.map(result => result.response.text()));
// //       summaries.push(...batchSummaries);
// //     }

// //     return summaries;
// //   } catch (error) {
// //     console.error('Error summarizing job vacancy posts:', error);
// //     throw error;
// //   }
// // }

// // // Route to handle incoming messages
// // app.post('/incoming_messages', async (req, res) => {
// //   try {
// //     const messages = req.body.messages;
// //     const jobVacancyPosts = [];

// //     messages.forEach(message => {
// //       const { from_name, from, timestamp, type, text } = message;
// //       console.log(`Incoming message from ${from_name}: ${text.body}`);
      
// //       if (type === 'text') {
// //         // Extract the text part of the message
// //         const messageText = text.body;

// //         // Check if the message contains keywords related to job vacancies
// //         if (containsJobKeywords(messageText.toLowerCase())) {
// //           jobVacancyPosts.push(messageText);
// //         }
// //       }
// //     });

// //     // Summarize the job vacancy posts using AI model
// //     const jobVacancySummaries = await run(jobVacancyPosts);

// //     // Log the processed message resulting from the AI prompt
// //     console.log("Processed message resulting from AI:");
// //     console.log(jobVacancySummaries);

// //     // Include the prompt and instructions in the response
// //     res.status(200).json({ status: 'success', message: 'Messages processed successfully', summaries: jobVacancySummaries, prompt: jobVacancyPrompt });
    
// //   } catch (error) {
// //     console.error('Error processing incoming messages:', error);
// //     res.status(500).json({ status: 'error', message: 'Internal server error' });
// //   }
// // });

// ///////////////////////////////////////////////////////////////
// // // Route to handle incoming messages for journey requests
// // app.post('/incoming_journey_requests', async (req, res) => {
// //   try {
// //     const messages = req.body.messages;
// //     const journeyRequests = [];

// //     messages.forEach(message => {
// //       // Assuming journey request messages contain specific keywords
// //       const text = message.text.body;
// //       if (containsJourneyKeywords(text.toLowerCase())) {
// //         const senderPhoneNumber = message.sender_phone_number || 'Not specified';
// //         // Extracting relevant information for journey requests
// //         const journeyRequest = {
// //           senderPhoneNumber,
// //           destination: extractDestination(text),
// //           timeOut: extractTimeOut(text),
// //           timeIn: extractTimeIn(text),
// //           escort: extractEscort(text)
// //         };
// //         journeyRequests.push(journeyRequest);
// //       }
// //     });

// //     // Summarize the journey requests using AI model
// //     const journeyRequestSummaries = await run(journeyRequests);

// //     // Further processing: Database insertion, email forwarding, etc.

// //     res.status(200).json({ status: 'success', message: 'Journey requests processed successfully', summaries: journeyRequestSummaries });
// //   } catch (error) {
// //     console.error('Error processing journey requests:', error);
// //     res.status(500).json({ status: 'error', message: 'Internal server error' });
// //   }
// // });

// // // Function to check if the text contains journey-related keywords
// // function containsJourneyKeywords(text) {
// //   const keywords = ['journey', 'travel', 'movement'];
// //   return keywords.some(keyword => text.includes(keyword));
// // }

// // // Function to extract destination from journey request message
// // function extractDestination(text) {
// //   // Example: Extract destination from text
// //   const destinationRegex = /Destination:\s*(.+)/i;
// //   const match = text.match(destinationRegex);
// //   return match ? match[1].trim() : 'Not specified';
// // }

// // // Function to extract time out from journey request message
// // function extractTimeOut(text) {
// //   // Example: Extract time out from text
// //   const timeOutRegex = /Time out:\s*(.+)/i;
// //   const match = text.match(timeOutRegex);
// //   return match ? match[1].trim() : 'Not specified';
// // }

// // // Function to extract time in from journey request message
// // function extractTimeIn(text) {
// //   // Example: Extract time in from text
// //   const timeInRegex = /Time in:\s*(.+)/i;
// //   const match = text.match(timeInRegex);
// //   return match ? match[1].trim() : 'Not specified';
// // }

// // // Function to extract escort from journey request message
// // function extractEscort(text) {
// //   // Example: Extract escort from text
// //   const escortRegex = /Escort:\s*(.+)/i;
// //   const match = text.match(escortRegex);
// //   return match ? match[1].trim() : 'Not specified';
// // }

// // // Job vacancy prompt
// // const journeyRequestPrompt = `Please provide the following information for each journey request message, ensuring accuracy and appropriate formatting:

// // Name of the passenger:

// // Phone number of the sender (if available)
// // Destination:

// // Ikoyi
// // Time out:

// // 7:00 PM tomorrow
// // Time in:

// // Not specified
// // Escort:

// // Not specified

// // Filter out any irrelevant messages to ensure the summary focuses solely on journey requests. Verify the sender's p`;
// /////////////////////////////////////////////////////////////////////////////////////////////
// // Function to train the classifier with labeled data




// // function trainClassifier() {
// //     // Example labeled data for different categories
// //     const labeledData = [
// //         { text: 'urgent job opening for a security manager in Owerri', label: 'jobRole' },
// //         { text: 'security manager needed urgently', label: 'jobRole' },
// //         { text: 'send CV to susan.matthew@niis.com.ng by 11th March', label: 'email' },
// //         { text: 'urgent opening for a security manager in Owerri', label: 'jobRole' },
// //         { text: 'we are looking for a Security Supervisor with 5 years experience', label: 'jobRole' },
// //         { text: 'job opportunity: Security Officer needed in Lagos', label: 'jobRole' },
// //         { text: 'send your CV to recruitment@company.com', label: 'email' },
// //         { text: 'submit your resume to hr@company.com by March 15th', label: 'email' },
// //         { text: 'interested candidates should forward their applications to careers@company.com', label: 'email' },
// //         { text: 'qualification: minimum of Bachelor\'s degree in Computer Science', label: 'qualification' },
// //         { text: 'requirements: at least 3 years of relevant work experience', label: 'qualification' },
// //         { text: 'desired skills: proficiency in Python and SQL', label: 'qualification' },
// //         { text: 'location: Abuja', label: 'location' },
// //         { text: 'workplace: remote', label: 'location' },
// //         { text: 'deadline for application: March 20th', label: 'deadline' },
// //         { text: 'applications must be received by April 1st', label: 'deadline' },
// //         { text: 'interview date: March 25th', label: 'interviewDate' },
// //         { text: 'interviews will be conducted on April 5th', label: 'interviewDate' },
// //         { text: 'urgent vacancy for Chief Security Officer (CSO) in Lekki', label: 'jobRole' },
// //         { text: 'salary range: 300k - 350k', label: 'salary' },
// //         { text: 'qualifications: must have minimum of First Degree', label: 'qualification' },
// //         { text: 'must have leadership and management skills', label: 'qualification' },
// //         { text: 'must not be more than 55 years', label: 'qualification' },
// //         { text: 'must have undergone relevant security training', label: 'qualification' },
// //         { text: 'must be computer literate', label: 'qualification' },
// //         { text: 'must be a retired armed force personnel', label: 'qualification' },
// //         { text: 'interested and qualified persons should come with a clear photocopy of their CVs to 36 Old Yaba Road, Top floor, same building with Lifeback Supermarket', label: 'address' },
// //         { text: 'you can contact 08062856868, 08160121388 via WhatsApp for directions', label: 'whatsappNumber' },
// //         { text: 'interview date: Monday, 5th February 2024', label: 'interviewDate' },
// //         { text: 'time: 11:00am', label: 'interviewTime' },
// //         { text: 'info@augusteyeltd.com', label: 'email' }
// //         // Add more labeled data for different categories as needed
// //     ];
// //     // Train the classifier with labeled data
// //     labeledData.forEach(data => {
// //         const tokens = tokenizer.tokenize(data.text);
// //         classifier.addDocument(tokens, data.label);
// //     });

// //     // Train the classifier
// //     classifier.train();
// // }

// // // Function to process incoming job posts
// // function processJobPost(jobPost) {
// //     // Tokenize the job post
// //     const tokens = tokenizer.tokenize(jobPost);

// //     // Use the trained classifier to predict labels for each token
// //     const predictions = tokens.map(token => classifier.classify(token));

// //     // Extract relevant information based on predicted labels
// //     // (You may need to define rules or patterns for each category)
// //     // Example: Extract email address based on predicted 'email' labels
// //     const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
// //     const emails = predictions.filter(label => label === 'email').map(_ => jobPost.match(emailRegex)).filter(Boolean);

// //     // Output the extracted information
// //     console.log('Emails:', emails);

// //     // Save the extracted information to variables or database
// //     // For example:
// //     // const extractedDetails = {
// //     //     emails,
// //     // };
// //     // Save to database or use the variables as needed in your application.
// // }

// // // Train the classifier before processing job posts
// // trainClassifier();

// // // Example usage: Fetch job posts from WhatsApp API
// // whatsappAPI.fetchJobPosts((jobPost) => {
// //     // Process each incoming job post
// //     processJobPost(jobPost);
// // });


// // const server = https.createServer(options, app);
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);

// });
const unirest = require('unirest');
const cheerio = require('cheerio');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const classifier = new natural.BayesClassifier(); // Initialize a Bayesian classifier
const sanitizeHtml = require('sanitize-html'); // Import sanitize-html library
const session = require('express-session');
const pdf = require('html-pdf');
const PDFDocument = require('pdfkit');
const fetch = require('node-fetch');
const FormData = require('form-data');
const axios = require('axios');
const bcrypt = require('bcryptjs');
const mongoUrl = 'mongodb+srv://OlukayodeUser:Kayode4371@cluster0.zds6pi9.mongodb.net/olukayode_sage?retryWrites=true&w=majority';
const dbName = 'olukayode_sage';
const socketIo = require('socket.io'); // Make sure to require 'socket.io'
const helmet = require('helmet');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const WebSocket = require('ws');
const { Configuration, OpenAIApi } = require("openai");
const { PDFExtract } = require('pdf.js-extract');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');
const { S3Client } = require;
const aws = require("aws-sdk");
var multer = require("multer");
var multerS3 = require("multer-s3-v2");
// const ObjectId = require('mongodb').ObjectId;
const { ObjectId } = require('mongodb');
const { MongoClient } = require('mongodb');
// const { MongoClient, ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const path = require("path");


const app = express();
const port = process.env.PORT || 3000;
// Set up a route for the new visitor page
function generateUniqueCode() {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 10); // Random alphanumeric string
  const uniqueCode = `${timestamp}_${randomString}`;
  console.log('Generated Code:', uniqueCode); // Log the generated code
  return uniqueCode;
}

// Generate the code when the app is initialized
const generatedCode = generateUniqueCode();
const token = process.env.TOKEN
const token2 = process.env.TOKEN2

// const options = {
//   key: fs.readFileSync('C:\\Users\\motaSecure\\private.key'),
//   cert: fs.readFileSync('C:\\Users\\motaSecure\\certificate.crt'),
// };

// const options = {
//   key: fs.readFileSync('C:\\Users\\motaSecure\\private.key'),
//   cert: fs.readFileSync('C:\\Users\\motaSecure\\certificate.crt'),
// };




// const options = {
//     key: fs.readFileSync('C:\\Users\\Public\\motaSecure_test\\private.key'),
//     cert: fs.readFileSync('C:\\Users\\Public\\motaSecure_test\\certificate.crt'),
//   };
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(helmet());
app.use(logger('dev'));
app.use(cors());


app.use((req, res, next) => {
  req.generatedCode = generatedCode;
  next();
});
// Set up S3 client
const s3 = new aws.S3({
   accessKeyId : process.env.AWS_ACCESS_KEY_ID,
   secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-west-2"
})


// Set up multer and S3 storage
const uploadS3 = () =>
  multer({
    storage: multerS3({
      s3,
      bucket: 'profile-picture-upload-youtube1',
      key: function (req, file, cb) {
        cb(null, Date.now().toString() + '-' + file.originalname);
      },
    })
  });

  app.use(session({
    secret: generatedCode, // Change this to a secure secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
  }));

    // Set up MongoDB connection
    let registrationDetails = []; // Define a variable to store registration details
    const uri = 'mongodb+srv://OlukayodeUser:Kayode4371@cluster0.zds6pi9.mongodb.net/olukayode_sage?retryWrites=true&w=majority'
    const client = new MongoClient(uri);
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    
    
    const wss = new WebSocket.Server({ port: 8080});
    // const io = socketIo(server); // Pass your server instance to initialize socket.io
    
    // Store connected clients for different purposes
    let hrClients = [];
    let securityClients = [];


app.get("/", (req, res) => {
    res.sendFile(path.join(htmlDir, 'index.html'));
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//284
/////////////////////////////////////////////////////let manager, supervisor, technician;

// Function to clean and modify phone numbers
function cleanPhoneNumber2(phoneNumber) {
  // Remove any non-numeric characters
  const cleanedNumber = phoneNumber.replace(/\D/g, '');
  
  // Check if the number starts with '0'
  if (cleanedNumber.startsWith('0')) {
    // Remove the leading '0' and prepend '234'
    return `234${cleanedNumber.slice(1)}`;
  }
  
  // Check if the number starts with '+'
  if (cleanedNumber.startsWith('+')) {
    // Remove the '+' sign
    return cleanedNumber.slice(1);
  }
  
  // If the number doesn't start with '0' or '+', return as is
  return cleanedNumber;
}

// Function to fetch token and officer details
async function getTokenandNumbers() {
  const uri = 'mongodb+srv://OlukayodeUser:Kayode4371@cluster0.zds6pi9.mongodb.net/olukayode_sage?retryWrites=true&w=majority';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db('olukayode_sage');

    // Fetch token data
    const otherIDData = db.collection('OtherIDs');
    const tokenData = await otherIDData.findOne({ idType: 'Token 1' });

    // Fetch details for manager, supervisor, and technician
    const Security_officer_collection = db.collection('security_officers');
    manager = await Security_officer_collection.findOne({ designation: /security manager/i });
    supervisor = await Security_officer_collection.findOne({ designation: /security supervisor/i });
    technician = await Security_officer_collection.findOne({ designation: /security technician/i });

    // Clean and modify phone numbers
    if (manager) manager.phoneNumber = cleanPhoneNumber2(manager.phoneNumber);
    if (supervisor) supervisor.phoneNumber = cleanPhoneNumber2(supervisor.phoneNumber);
    if (technician) technician.phoneNumber = cleanPhoneNumber2(technician.phoneNumber);

    // Log the officer details
    console.log("Manager Details:", manager ? `Name: ${manager.name}, Phone: ${manager.phoneNumber}, Email: ${manager.email}` : 'No manager found');
    console.log("Supervisor Details:", supervisor ? `Name: ${supervisor.name}, Phone: ${supervisor.phoneNumber}, Email: ${supervisor.email}` : 'No supervisor found');
    console.log("Technician Details:", technician ? `Name: ${technician.name}, Phone: ${technician.phoneNumber}, Email: ${technician.email}` : 'No technician found');

    // Close the database connection
    await client.close();

    // Return token and officer details
    return {
      // token: tokenData && tokenData.idNumber ? tokenData.idNumber : null,
      manager: manager ? { name: manager.name, phone: manager.phoneNumber, email: manager.email } : null,
      supervisor: supervisor ? { name: supervisor.name, phone: supervisor.phoneNumber, email: supervisor.email } : null,
      technician: technician ? { name: technician.name, phone: technician.phoneNumber, email: technician.email } : null,
    };
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
}

// Call the function to fetch token and officer details
getTokenandNumbers()
  .then((tokenAndNumbers) => {
    console.log("officer details:", tokenAndNumbers);
    // Start the server here
    // Replace this with your server start logic
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });


  let token1Data, groupIDData,groupId;

  // Function to extract other details
  async function extractOtherDetails() {
    const uri = 'mongodb+srv://OlukayodeUser:Kayode4371@cluster0.zds6pi9.mongodb.net/olukayode_sage?retryWrites=true&w=majority';
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
  
      const database = client.db('olukayode_sage');
      const driversHistoryCollection = database.collection('OtherIDs');
  
      // Fetch the required data from the database
      token1Data = await driversHistoryCollection.findOne({ idType: 'Token 1' });
      groupIDData = await driversHistoryCollection.findOne({ idType: 'GroupID' });
  
      // Log the retrieved data
      console.log('Extracted Details:');
      console.log('Token1:', token1Data.idNumber);
      console.log('GroupID:', groupIDData.idNumber);
  
      // Close the database connection
      await client.close();
  
      // Return the extracted data
      return {
        token1: token1Data.idNumber,
        groupID: groupIDData.idNumber
      };
    } catch (error) {
      console.error('An error occurred:', error);
      throw new Error('An error occurred while extracting details');
    }
  }
  
  // Function to start the server and extract other details
  async function startServerAndExtractDetails() {
    try {
      // Call the function to extract other details
      const extractedDetails = await extractOtherDetails();
      console.log("Extracted details:", extractedDetails);
  
      // Start the server here
      // Replace this with your server start logic
  
      // Access the extracted details
      const groupId = extractedDetails.groupID; // Corrected variable name
      const token = extractedDetails.token1; // Replace with your token
  
      // Now you can use groupId and token
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  // Call the function to start the server and extract other details
  startServerAndExtractDetails();
  
  // const token2 = "notWeiRdf4mmY2CWf1Lk1Iz1W7hysaCX"; // Replace with your actual token

function normalizePhoneNumber(phoneNumber) {
  const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

  if (numericPhoneNumber.startsWith('0')) {
    return `+234${numericPhoneNumber.slice(1)}`;
  } else {
    return `+234${numericPhoneNumber}`;
  }
}


const generateVerificationCode = () => {
  const codeLength = 4; // Adjust the code length as needed
  const min = Math.pow(10, codeLength - 1);
  const max = Math.pow(10, codeLength) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
////////////////////////////////////////////////////////////////////////




const verifyCode = (enteredCode, generatedCode) => {
  return enteredCode.toString() === generatedCode.toString();
};

const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Missing token' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

// Authorization middleware
const authorizeUser = (roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      return res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
    }
  };
};


// Sample users with configured roles and phone numbers
const configuredUsers = [
  { phoneNumber: '1234567890', configuredRole: 'receptionist' },
  { phoneNumber: '9876543210', configuredRole: 'security' },
  // Add more users as needed
];

///////with harshing////////////////////////////////////////
// Check login status endpoint
app.get('/check_login_status', (req, res) => {
  // Check if the user is logged in based on the session
  if (req.session && req.session.userId) {
      // User is logged in
      res.status(200).send('User logged in');
  } else {
      // User is not logged in
      res.status(401).send('User not logged in');
  }
});



// Logout endpoint
app.post('/logout', (req, res) => {
  // Clear session data
  req.session.destroy(err => {
      if (err) {
          console.error('Error destroying session:', err);
          res.status(500).json({ message: 'Error logging out' });
      } else {
          // Respond with a success message
          res.status(200).json({ message: 'Logout successful' });
      }
  });
});


app.post('/register', async (req, res) => {
  console.log('Received Registration Request:', req.body);

  const { phoneNumber, selectedRole, verificationCode, name, email, password, confirmPassword } = req.body;

  if (!phoneNumber || !selectedRole || !name || !email || !password || !confirmPassword) {
    console.log('Validation Failed - Missing Parameters');
    return res.status(400).json({ message: 'Bad Request - Missing parameters' });
  }

  const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db("olukayode_sage");
    const collection = db.collection('user_config_databse');
    const collection2 = db.collection('registered_user_config_database');
    const userConfig = await collection.findOne({ phoneNumber });

    if (!userConfig) {
      console.log('Access Denied - Phone number not configured for any role');
      return res.status(403).json({ message: 'Access Denied - Phone number not configured for any role' });
    }

    if (selectedRole !== userConfig.configuredRole) {
      console.log('Access Denied - Invalid account type');
      return res.status(403).json({ message: 'Access Denied - Invalid account type' });
    }

    console.log("Entered code:", verificationCode);
    console.log("Generated code:", globalVerificationCode);

    // Add more logging to see the comparison result
    const isValidVerificationCode = verifyCode(verificationCode, globalVerificationCode);
    console.log('Is Valid Verification Code:', isValidVerificationCode);

    if (!isValidVerificationCode) {
      console.log('Access Denied - Invalid verification code');
      return res.status(403).json({ message: 'Access Denied - Invalid verification code' });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10); // Use an appropriate saltRounds value

    // Save user details along with the hashed password in the database
    const result = await collection2.insertOne({
      _id: new ObjectId(),
      name,
      email,
      phoneNumber,
      configuredRole: selectedRole,
      configured: true,
      passwordHash: hashedPassword,
    });

    const token = jwt.sign({ phoneNumber, selectedRole }, secretKey, { expiresIn: '7m' });
    console.log('Registration successful - Token:', token);
    res.status(200).json({ message: 'Registration successful', token, verificationCode: globalVerificationCode });
    // res.redirect('/index.html'); 
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: 'Error registering user' });
  } finally {
    await client.close();
  }
});




app.post('/configureUserAccount', async (req, res) => {
  const { phoneNumber, configuredRole } = req.body;

  // Validate input
  if (!phoneNumber || !configuredRole) {
    console.log('Validation Failed - Missing Parameters');
    return res.status(400).json({ message: 'Bad Request - Missing parameters' });
  }

  // Normalize the phone number before processing
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
  const normalizedPhoneNumber = cleanedPhoneNumber.startsWith('0') ? `+234${cleanedPhoneNumber.slice(1)}` : `+234${cleanedPhoneNumber}`;

  // Create a new MongoClient
  const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to MongoDB
    await client.connect();

    // Select the database and collection
    const db = client.db(dbName);
    const collectionName = 'user_config_databse'; // Replace with your collection name
    const collection = db.collection(collectionName);

    // Check if the user is already configured
    const existingUser = await collection.findOne({ phoneNumber: normalizedPhoneNumber });

    if (existingUser) {
      return res.status(400).json({ message: 'Bad Request - Phone number already configured for ' + existingUser.configuredRole });
    }

    // Save user configuration status to MongoDB
    await collection.insertOne({ phoneNumber: normalizedPhoneNumber, configuredRole, configured: true });

    res.status(200).json({ message: 'User account configured successfully' });
  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error configuring user account' });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
});




let globalVerificationCode = "";

// Move the function to the global scope
const generateVerificationCode2 = () => {
  const codeLength = 4; // Adjust the code length as needed
  const min = Math.pow(10, codeLength - 1);
  const max = Math.pow(10, codeLength) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

app.post('/generateVerificationCode', async (req, res) => {
  // Log the received parameters for debugging
  console.log('Received Parameters:', req.body);

  const { phoneNumber, verificationCode, name, email, password, confirmPassword, role } = req.body;

  // Validate input
  if (!phoneNumber || !name || !email || !password || !confirmPassword || !role) {
    console.log('Validation Failed - Missing Parameters');
    return res.status(400).json({ message: 'Bad Request - Missing parameters' });
  }

  // Check if password matches confirm password
  if (password !== confirmPassword) {
    console.log('Validation Failed - Passwords do not match');
    return res.status(400).json({ message: 'Bad Request - Passwords do not match' });
  }

  // Create a new MongoClient
  const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to MongoDB
    await client.connect();
    const database = client.db('olukayode_sage');
    const collection = database.collection('user_config_databse');

    // Check if the user is configured
    const user = await collection.findOne({ phoneNumber, configured: true });

    if (!user) {
      console.log('User not configured. Cannot generate verification code.');
      return res.status(400).json({ message: 'Bad Request - User not configured' });
    }

    // Extract the first name or the first word of the name
    const firstName = name.split(' ')[0];

    // Check if phoneNumber is a string before attempting to clean and format it
    const cleanAndFormatPhoneNumber2 = (phoneNumber) => {
      if (typeof phoneNumber !== 'string') {
        console.error('Invalid phoneNumber:', phoneNumber);
        return phoneNumber;
      }

      const cleanedNumber = phoneNumber.replace(/\D/g, '');
      const formattedNumber = cleanedNumber.startsWith('234') ? cleanedNumber : `234${cleanedNumber.slice(1)}`;
      return formattedNumber;
    };

    const formattedNumber = cleanAndFormatPhoneNumber2(phoneNumber);

    console.log("nnn", formattedNumber);

    // Generate a verification code for the user
    const generatedCode = generateVerificationCode2();
    globalVerificationCode = generatedCode;
    console.log('Generated Code:', globalVerificationCode);

    // Send the verification code message only when the validation conditions are met
    const messageCode = `Dear ${firstName},\n\nYour *${role} account* setup is underway. Please use the one-time verification code: *${generatedCode}* to complete the process. This code is valid for 7 minutes.\n\nWelcome to Mota Security Oracle!`;

    const token2 = process.env.TOKEN;

    const options = {
      method: 'POST',
      url: 'https://gate.whapi.cloud/messages/text',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Bearer ${token2}`,
      },
      data: {
        to: `${formattedNumber}@s.whatsapp.net`,
        body: messageCode,
      },
    };

    const response = await axios.request(options);
    console.log(response.data);

    res.status(200).json({ success: true, message: 'Verification code sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error sending Verification' });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
});



///////////////////////////////////////////////////////////////////////
// Function to query MongoDB for all data and log entries
async function queryMongoForAllDataAndLog() {
    const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  
    try {
      // Connect to MongoDB
      await client.connect();
  
      // Select the database and collection
      const db = client.db(dbName);
      const collectionName = 'movement_history_database'; // Replace with your collection name
      const collection = db.collection(collectionName);
  
      // Your query logic here
      // For example, you might query for all documents
      const allData = await collection.find({}).toArray();
  
      // Log all entries to the console
      allData.forEach((entry) => {
        console.log('Entry:', entry);
      });
  
      return allData;
    } catch (error) {
      console.error('Error querying MongoDB:', error);
      throw error;
    } finally {
      // Close the MongoDB connection when done
      client.close();
    }
  }
//////////////////////////////////////////////////////////////////////////////////
// WebSocket server logic
wss.on('connection', (ws) => {
    console.log('Client connected');
  
    // Handle incoming WebSocket messages from clients
    ws.on('message', (message) => {
      console.log(`Received: ${message}`);
    });
  
    // Add the client to the appropriate client list based on the purpose
    ws.on('close', () => {
      // Remove the client from the corresponding list
      hrClients = hrClients.filter((client) => client !== ws);
      securityClients = securityClients.filter((client) => client !== ws);
    });
  
    const sentEntryIds = new Set(); // Initialize a Set to store sent entry IDs
  
    // Periodically query MongoDB and send updates to clients
    const queryInterval = setInterval(async () => {
      try {
        const allData = await queryMongoForAllDataAndLog();
  
        // Filter out entries that have already been sent
        const newEntries = allData.filter((entry) => !sentEntryIds.has(entry._id));
  
        // Add new entry IDs to the set of sent entry IDs
        newEntries.forEach((entry) => sentEntryIds.add(entry._id));
  
        // Send the new data as a JSON string to connected clients
  
        // Before sending a message
        // console.log('Sending message:', JSON.stringify(newEntries));
  
        ws.send(JSON.stringify(newEntries));
      } catch (error) {
        console.error('Error sending data to clients:', error);
      }
    }, 1000); // Adjust the interval as needed (e.g., every 5 seconds)
  
    // When a client disconnects, clear the query interval
    ws.on('close', () => {
      console.log('Client disconnected');
      clearInterval(queryInterval);
    });
  });



////////////////////////////////////////////////////////////////
  
  const serverWebSocket = new WebSocket.Server({ port: 8081 });
  // WebSocket server logic
serverWebSocket.on('connection', (ws) => {
  console.log('WebSocket connection established');

  // Handle incoming WebSocket messages from clients
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
  });

  // Add the client to the appropriate client list based on the purpose
  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

// correct second2
const sseClients = [];
app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Add the response object to the SSE clients array
  sseClients.push(res);

  req.on('close', () => {
    // Remove the closed response object from the SSE clients array
    const index = sseClients.indexOf(res);
    if (index !== -1) {
      sseClients.splice(index, 1);
    }
  });
});

////////////////////////////////////////////////////////////////

async function main() {
  try {
    const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db(dbName);
    const collectionName = 'drivers_details';
    const collection = db.collection(collectionName);

    const changeStream = collection.watch();

    changeStream.on('change', (next) => {
      console.log('Change detected:', next);

      if (next.operationType === 'insert') {
        const newEntry = next.fullDocument;

        // Send the new entry to all connected SSE clients
        sseClients.forEach((client) => {
          client.write(`data: ${JSON.stringify(newEntry)}\n\n`);
        });
      }
    });

    console.log('Change stream is running...');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the main function to start the change stream
main();
// ///////////////////////


const sseVisitorClients = [];
app.get('/sse_visitor_upload', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  sseVisitorClients.push(res);

  req.on('close', () => {
    const index = sseVisitorClients.indexOf(res);
    if (index !== -1) {
      sseVisitorClients.splice(index, 1);
    }
  });
});

function sendSSEMessage(endpoint, message) {
  const formattedMessage = `data: ${JSON.stringify(message)}\n\n`;
  let clientsArray;

  if (endpoint === 'sse_visitor_upload') {
    clientsArray = sseVisitorClients;
  } else if (endpoint === 'sse_driver_authorization') {
    clientsArray = sseDriverClients;
  }

  clientsArray.forEach(client => {
    client.write(formattedMessage);
  });
}
////////////////////////////////////////////////////////////


// SSE route for the receptionist
app.get('https://mota-security-oracle.onrender.com/sse_receptionist', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const sseStream = new Readable({
    read() { },
  });

  sseStream.pipe(res);

  // Add the SSE stream to the set of clients
  sseClients.add(sseStream);

  // Remove the SSE stream when the client disconnects
  req.on('close', () => {
    sseClients.delete(sseStream);
    sseStream.destroy();
  });
});



const apiUrl = `https://gate.whapi.cloud/messages/text?token=${token}`;

const cleanAndFormatPhoneNumber = (phoneNumber) => {
  const cleanedNumber = phoneNumber.replace(/\D/g, '');

  // Check if cleanedNumber starts with '234', if not, replace the first '0' with '234'
  const formattedNumber = cleanedNumber.startsWith('234') ? cleanedNumber : `234${cleanedNumber.slice(1)}`;

  return formattedNumber;
};

// Function to generate a random message from a list
const getRandomMessage = (firstName, accessCode, password, validityPeriodFormatted) => {
  // const accessCodes = ["2368", "7890", "1234", "5678", "9876"];
  // const passwords = ["Pink Horse", "Blue Sky", "Golden Key", "Silver Star", "Green Leaf"];

  const messages = [
    `Hi ${firstName},\n\nYour access code for Mota-Engil Lagos office is **${accessCode}** and the password is **${password}**. Kindly use this information at the security checkpoint. Access is valid until ${validityPeriodFormatted}.\n\nRegards,\nMota Engil Security`,
    `Dear ${firstName},\n\nYour access code: **${accessCode}**\nPassword: **${password}**\nThis information is valid until ${validityPeriodFormatted}.\n\nBest regards,\nMota Engil Security`,
    `Hello ${firstName},\n\nYour access code (${accessCode}) and password (${password}) are required for entry at Mota-Engil Lagos office. This access is valid until ${validityPeriodFormatted}.\n\nSincerely,\nMota Engil Security`,
    `Dear ${firstName},\n\nAccess Code: **${accessCode}**\nPassword: **${password}**\nKindly use these credentials for entry at Mota-Engil Lagos office. Valid until ${validityPeriodFormatted}.\n\nBest regards,\nMota Engil Security`,
    `Hi ${firstName},\n\nPlease be informed that your access code for Mota-Engil Lagos office is **${accessCode}** and the password is **${password}**. Use this information at the security checkpoint. Access is valid until ${validityPeriodFormatted}.\n\nKind regards,\nMota Engil Security`,
    // Add 5 more different formatted messages here
    `Greetings ${firstName},\n\nYour access to Mota-Engil Lagos office is granted with access code **${accessCode}** and password **${password}**. Ensure you use this information by ${validityPeriodFormatted}.\n\nWarm regards,\nMota Engil Security`,
    `Dear ${firstName},\n\nAccess has been granted to Mota-Engil Lagos office. Your access code is **${accessCode}** and the password is **${password}**. Valid until ${validityPeriodFormatted}.\n\nBest regards,\nMota Engil Security`,
    `Hello ${firstName},\n\nYour access to Mota-Engil Lagos office is secured with access code **${accessCode}** and password **${password}**. Utilize this information before ${validityPeriodFormatted}.\n\nKind regards,\nMota Engil Security`,
    `Hi ${firstName},\n\nAccess has been provisioned for Mota-Engil Lagos office. Your access code (**${accessCode}**) and password (**${password}**) are valid until ${validityPeriodFormatted}.\n\nBest regards,\nMota Engil Security`,
    `Dear ${firstName},\n\nYour access to Mota-Engil Lagos office is confirmed. Use access code **${accessCode}** and password **${password}**. Access valid until ${validityPeriodFormatted}.\n\nWarm regards,\nMota Engil Security`
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

/////////////////////////////////////////////////////////////////////////////////////////////

app.post('/upload_visitor_details', async (req, res) => {
  const fullName = req.body.name;
  const firstName = fullName.split(' ')[0]; // Extract the first word

  const visitorDetails = {
    registrationDate: new Date(),
    name: firstName,
    company: req.body.company,
    whomToSee: req.body.whomToSee,
    purposeOfVisit: req.body.purposeOfVisit,
    phoneNumber: cleanAndFormatPhoneNumber(req.body.phone_number),
    datetime: new Date(req.body.datetime)
  };

  try {
    await client.connect();
    const database = client.db('olukayode_sage');
    const collection = database.collection('Visitors_details_Database');

    // Save the visitor details to the database
    const result = await collection.insertOne(visitorDetails);

    // Notify SSE clients with a message
    const message = {
      type: 'visitor_upload',
      visitorDetails,
    };
    sendSSEMessage('sse_visitor_upload', message);
    console.log('Sending SSE message:', message);

    // Message details
    const to = cleanAndFormatPhoneNumber(req.body.phone_number); // Clean and format the phone number
    // const accessCodes = ["2368", "7890", "1234", "5678", "9876"];
    // const passwords = ["Pink Horse", "Blue Sky", "Golden Key", "Silver Star", "Green Leaf"];


    // Function to generate a random access code
    const generateAccessCode = () => {
      const randomCode = crypto.randomBytes(2).toString('hex').toUpperCase();
      return randomCode;
    };


    // Function to generate a secure password (combination of two words)
    const generatePassword = () => {
      const getRandomPhrase = () => {
        const phrases = [
          "Blue Sky",
          "Dry Lake",
          "Green Forest",
          "Red Rose",
          "Ocean Wave",
          "Sunset Glow",
          "Silent Moon",
          "Misty Mountain",
          "Golden Sand",
          "Crystal Clear",
          "Whispering Wind",
          "Starry Night",
          "Rustic Charm",
          "Enchanted Garden",
          "Rolling Hills",
          "Silver Stream",
          "Purple Haze",
          "Autumn Leaves",
          "Snowy Peak",
          "Serene Lake",
          "Blue Ocean",
          "Desert Mirage",
          "Emerald Forest",
          "Crimson Rose",
          "Wave of Tranquility",
          "Sunset Horizon",
          "Lunar Serenity",
          "Misty Valley",
          "Golden Meadow",
          "Crystal Lagoon",
          "Whispering Canyon",
          "Starlit Sky",
          "Rustic Oasis",
          "Enchanted Oasis",
          "Rolling Thunder",
          "Silver Breeze",
          "Purple Nebula",
          "Autumn Breeze",
          "Snowy Silence",
          "Serene Sanctuary"
        ];;
        const randomIndex = Math.floor(Math.random() * phrases.length);
        return phrases[randomIndex];
      };

      const password = getRandomPhrase().replace(/\s+/g, '').toLowerCase(); // Remove spaces and convert to lowercase
      return password;
    };

    const accessCode = generateAccessCode();
    const password = generatePassword();

    // Calculate validity period (maximum of 1 hour after the provided datetime)
    const validityPeriod = new Date(visitorDetails.datetime.getTime() + (60 * 60 * 1000));
    const validityPeriodFormatted = validityPeriod.toLocaleDateString() + ' ' + validityPeriod.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const formattedMessage = getRandomMessage(firstName, accessCode, password, validityPeriodFormatted);

    // Make API request
    const response = await axios.post(apiUrl, {
      to,
      body: formattedMessage,
      view_once: true
    });

    // Log response
    console.log(response.data);

    res.status(200).send('Visitor details uploaded successfully and message sent.');

  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while uploading visitor details');
  } finally {
    await client.close();
  }
});
/////////////////////////////////////////////////////////////////////////////////

app.post('/authorize_driver', async (req, res) => {
  const driverData = req.body;

  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection('authorize_driver');

    // Save the driver data to the "authorize_driver" collection
    const result = await collection.insertOne(driverData);

    // Notify HR unit with a message using SSE
    sseClients.forEach(client => {
      const message = {
        type: 'authorization',
        driverName: driverData.driver_name,
        timeOut: driverData.time_out,
        destination: driverData.target_location,
        passenger: driverData.passenger,
      };
      client.write(`data: ${JSON.stringify(message)}\n\n`);
    });

    res.json({ success: true, message: 'Driver details authorized successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred while authorizing driver details' });
  } finally {
    await client.close();
  }
});



app.get('/sse', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });

  res.write('\n');

  // Add the client to the array
  sseClients.push(res);

  // Remove the client when the connection is closed
  req.on('close', () => {
    const index = sseClients.indexOf(res);
    if (index !== -1) {
      sseClients.splice(index, 1);
    }
  });
});
// Function to send SSE updates to all connected clients
function sendSSEUpdate(message) {
  sseClients.forEach(client => {
    client.write(`data: ${JSON.stringify(message)}\n\n`);
  });
}



app.post('/awaiting_visitor', async function (req, res) {
  const registrationDate = new Date();

  // Format the registration date
  const formattedDate = registrationDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    day: 'numeric',
    month: 'short', // Use 'short' to get abbreviated month names
    year: '2-digit',
  });

  const awaiting_visitorDetails = {
    registrationDate: formattedDate, // Save the formatted date to the database
    name: req.body.name,
    address: req.body.company,
    whomToSee: req.body.whomToSee,
    purposeOfVisit: req.body.purposeOfVisit,
  };

  try {
    await client.connect(); // Connect to the MongoDB client
    const database = client.db("olukayode_sage");
    const collection = database.collection('New_visitors_details_Database');

    // Save the visitor details to the database
    const result = await collection.insertOne(awaiting_visitorDetails);

    console.log(' New visitors :', result);

    // Send SSE to receptionist page
    sendSSEUpdate({
      type: 'new_visitor',
      visitorName: awaiting_visitorDetails.name,
      registrationDate: formattedDate,
      whomToSee: awaiting_visitorDetails.whomToSee,
      purposeOfVisit: awaiting_visitorDetails.purposeOfVisit,
    });

    res.send(`Visitor details uploaded successfully at ${formattedDate}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while uploading awaiting visitor details');
  } finally {
    await client.close(); // Close the MongoDB client connection
  }
});


app.get('/get_new__visitor_details', async function (req, res) {
  try {
    await client.connect(); // Connect to the MongoDB client
    const database = client.db('olukayode_sage');
    const collection = database.collection('New_visitors_details_Database');

    // Fetch all visitor details from the database
    const visitorDetails = await collection.find().toArray();

    res.json(visitorDetails); // Send the visitor details as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching visitor details');
  } finally {
    await client.close(); // Close the MongoDB client connection
  }
});




app.get('/get_expected_visitors', async function (req, res) {
  try {
    await client.connect();
    const database = client.db('olukayode_sage');
    // const collection = database.collection('olukayode_collection');
    const collection = database.collection('Visitors_details_Database');
    const expectedVisitors = await collection.find({}).toArray();
    console.log(' Expected visitors :', expectedVisitors);

    res.json(expectedVisitors);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving expected visitors');
  } finally {
    await client.close();
  }
})
  ;




app.post('/notify_the_host', (req, res) => {
  // Extract data from the request body
  const { name, whomToSee, company, purposeOfVisit, phoneNumber, status, date, time } = req.body;

  // You can do something with the received data here, for example, logging it
  console.log('Received notification:');
  console.log('Name:', name);
  console.log('Whom to See:', whomToSee);
  console.log('Address:', company);
  console.log('Purpose of Visit:', purposeOfVisit);
  console.log('Phone Number:', phoneNumber);
  console.log('Status:', status);
  console.log('Date:', date);
  console.log('Time:', time);

  // Send a response back to the client
  res.status(200).json({ message: 'Notification received successfully' });
});



app.get('/get_driver_details', async function (req, res) {
  try {
    await client.connect();
    const database = client.db('olukayode_sage');
    const collection = database.collection('drivers_details');
    // const collection = database.collection('Visitors_details_Database');
    const drivers_details = await collection.find({}).toArray();
    console.log(' Expected visitors :', drivers_details);

    res.json(drivers_details);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving drivers details');
  } finally {
    await client.close();
  }
})


////////////////////////perfect use

app.post('/movement_history', async function (req, res) {
  const driverDetails = {
    driver_name: req.body.driver_name,
    armed_guard: req.body.armed_guard,
    target_location: req.body.target_location,
    passenger: req.body.passenger,
    vehicle_number: req.body.vehicle_number,
    time_out: req.body.time_out,
  };

  try {
    const client = new MongoClient(uri);
    await client.connect();

    const database = client.db('olukayode_sage');
    const kaydata = database.collection('movement_history_database');
    const drivers_details = database.collection('drivers_details');

    const result = await kaydata.insertOne(driverDetails);

    console.log('Movement added to history:', result.insertedId);

    console.log('Before deletion: Trying to delete', driverDetails.driver_name);
    const deleteResult = await drivers_details.deleteOne({ driver_name: driverDetails.driver_name });
    console.log('Deletion result:', deleteResult);

  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while adding the movement to history and deleting from drivers');
  } finally {
    await client.close();
  }
});



app.get('/get_movement_history', async function (req, res) {
  try {
    await client.connect();
    const database = client.db('olukayode_sage');
    // const collection = database.collection('olukayode_collection');
    const collection = database.collection('movement_history_database');
    const movementHistory = await collection.find({}).toArray();
    console.log(' movement History :', movementHistory);

    res.json(movementHistory);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving emovementHistory');
  } finally {
    await client.close();
  }
})



client.connect();
const database = client.db('olukayode_sage');
const visitorDataCollection = database.collection('Visitorshistory');
const movementDataCollection = database.collection('movement_history_database');

// Set up the Express app


app.get('/get_visitor_counts', async (req, res) => {
  try {
    await client.connect();
    const totalCount = await visitorDataCollection.countDocuments();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayCount = await visitorDataCollection.countDocuments({ date: { $gte: today } });
    const weekAgo = new Date(today);
    weekAgo.setDate(today.getDate() - 7);
    const weekCount = await visitorDataCollection.countDocuments({ date: { $gte: weekAgo } });

    res.json({ todayCount, weekCount, totalCount });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching visitor counts.');
  }
});



app.get('/get_movements_counts', async (req, res) => {
  try {
    await client.connect();
    const totalCount = await movementDataCollection.countDocuments();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayCount = await movementDataCollection.countDocuments({ date: { $gte: today } });
    const weekAgo = new Date(today);
    weekAgo.setDate(today.getDate() - 7);
    const weekCount = await movementDataCollection.countDocuments({ date: { $gte: weekAgo } });

    res.json({ todayCount, weekCount, totalCount });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching movement counts.');
  }
});




// Function to query MongoDB for all data and log entries
async function queryMongoForAllDataAndLog() {
  const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to MongoDB
    await client.connect();

    // Select the database and collection
    const db = client.db(dbName);
    const collectionName = 'movement_history_database'; // Replace with your collection name
    const collection = db.collection(collectionName);

    // Your query logic here
    // For example, you might query for all documents
    const allData = await collection.find({}).toArray();

    // Log all entries to the console
    allData.forEach((entry) => {
      console.log('Entry:', entry);
    });

    return allData;
  } catch (error) {
    console.error('Error querying MongoDB:', error);
    throw error;
  } finally {
    // Close the MongoDB connection when done
    client.close();
  }
}

// WebSocket server logic for HR namespace
wss.on('connection', (ws, req) => {
  const pathname = req.url;
  const isHRNamespace = pathname === '/hr_namespace';
  const isSecurityNamespace = pathname === '/security_namespace';

  if (isHRNamespace) {
    console.log('HR unit connected.');

    // Listen for messages from HR unit
    ws.on('message', (message) => {
      // Handle HR unit's messages
      console.log(`Received HR message: ${message}`);
    });
  // Handle errors on WebSocket connection
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });

    // Handle disconnection
    ws.on('close', () => {
      console.log('HR unit disconnected.');
      hrClients.delete(ws); // Remove the client from the HR set
    });
  } else if (isSecurityNamespace) {
    console.log('Security unit connected.');

    // Listen for messages from security unit
    ws.on('message', (message) => {
      // Handle security unit's messages
      console.log(`Received security message: ${message}`);
    });
// Handle errors on WebSocket connection
ws.on('error', (error) => {
  console.error('WebSocket error:', error);
});
    // Handle disconnection
    ws.on('close', () => {
      console.log('Security unit disconnected.');
      securityClients.delete(ws); // Remove the client from the security set
    });
  }
});




function formatTime(hours, minutes) {
  // Convert hours to 12-hour format and determine AM/PM
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for midnight

  // Pad minutes with leading zero if needed
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Get the current date for the month and year
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1; // Month is zero-indexed
  const year = currentDate.getFullYear().toString().slice(-2);

  // Format the date in MM/DD/YY format
  const formattedDate = `${month}/${formattedHours}/${year}`;

  // Combine the formatted time and date
  const formattedTime = `${formattedHours}:${formattedMinutes}${ampm} ${formattedDate}`;

  return formattedTime;
}


// Hardcoded group ID
//const groupId = '120363194020948049@g.us';
// const groupId = groupID;
////////////////////////////////////////////////////////////////////////
let userName;
app.post('/receive_driver_details', async function (req, res) {
  const driverDetails = {
    driver_name: req.body.driver_name,
    armed_guard: req.body.armed_guard,
    target_location: req.body.target_location,
    passenger: req.body.passenger,
    time_out: req.body.time_out,
    vehicle_number: req.body.vehicle_number,
    pick_up: req.body.pick_up,
  };
  const code = req.generatedCode;

  try {
    // Connect to the MongoDB client
    await client.connect();
    const database = client.db('olukayode_sage');
    const kaydata = database.collection('drivers_details');

    // Save the driver details to the database
    const result = await kaydata.insertOne(driverDetails);

    // Fetch the driver's phone number from the drivers_parameters database
    const driversParameters = database.collection('drivers_parameters');

    // Use driverDetails.driver_name instead of driver_name
    const driverRecord = await driversParameters.findOne({ driver_name: driverDetails.driver_name });
    // const securityManagerRecord = await expatriatesCollection.findOne({ name: securityManagerName });
    const expatriatesCollection = database.collection('expatriates_collection'); // Define expatriatesCollection
    // const securityManagerRecord = await expatriatesCollection.findOne({ name: { $regex: new RegExp("^Vitor Leite$", "i") } });
    // const securityManagerRecord = await expatriatesCollection.findOne({ name: { $regex: new RegExp("^Vitor Leite$", "i") } });
    const securityManagerRecord = manager.phoneNumber
    const expatriateName = req.body.passenger;
 

    // Assuming expatriateName has a format like "Daniel Abang - Unit: Procurement - and 1 other(s)"
    const expatriateNameParts = req.body.passenger.split('-')[0].trim().split(' ');
    const cleanedExpatriateName = expatriateNameParts.slice(0, 2).join(' ');

    // Define your condition using the cleanedExpatriateName
    const expatriateCondition = { name: { $regex: new RegExp(`^${cleanedExpatriateName}$`, "i") } };

    // Fetch the expatriate record
    const movingExpatriateRecord = await expatriatesCollection.findOne(expatriateCondition);
    console.log("Moving Expatriate Record:", movingExpatriateRecord);



    // Access the number of expatriates (assuming there's a field named 'number' in the collection)
    //  console.log(`Number of expatriates for ${expatriateName}: ${numberOfExpatriates}`);
    const timeOut = new Date(req.body.time_out);
    const currentTime = new Date();
    const timeDifferenceInMinutes = Math.floor((timeOut - currentTime) / (1000 * 60));


 // Assuming the escort commander's data has a tag 'EscortCommander' in the database
 const escorts_data= database.collection('escorts');
 const escortCommanderRecord = await escorts_data.findOne({ designation: "EscortCommander" });
 const escortCommanderName = `Mr ${escortCommanderRecord.firstName}`;

console.log("This is the new custom ID 1111:", req.generatedCode);

if (!req.session.userName) {
  // const code = req.generatedCode;

  console.log("Custom ID from the request:", code);

  if (code) {
    const userIdCollection = database.collection('user_id_collection');
    const userMapping = await userIdCollection.findOne({ customId: code });

    if (!userMapping) {
      console.log('User not found in user_id_collection.');
      return res.status(404).send('User not found.');
    }

    const phoneNumber = userMapping.phoneNumber;

    const userCollection = database.collection('registered_user_config_database');
    const user = await userCollection.findOne({ phoneNumber });

    console.log('Received userMapping:', userMapping);

    if (!user) {
      console.log('User not found in registered_user_config_database.');
      return res.status(404).send('User not found.');
    }

    // Save the username in the session
    req.session.userName = user.name;
    console.log('Saved UserName:', req.session.userName);
  } else {
    console.log('CustomId not provided.');
    return res.status(404).json({ message: 'CustomId not provided' });
      }
    } else {
      console.log('Username already in the session:', req.session.userName);
    }

console.log(req.session.userName);

 userName = req.session.userName 


    // Notify security unit with a message
    for (const securityClient of securityClients) {
      securityClient.send('HR unit has a new message');
    }

    // Get driver details for WhatsApp messages
    const { driver_name, target_location, time_out, vehicle_number } = driverDetails;
    // const expatriateMessage = `${driver_name}: "You have been assigned to take ${req.body.passenger}to ${target_location} by ${time_out}. Find below your passcode and password for gate permit."`;

    // Use the formatTime function to get the formatted time
    const formattedTimeOut = formatTime(new Date(time_out).getHours(), new Date(time_out).getMinutes());


    let expatriateMessage = `Dear ${driver_name},

You are assigned to transport ${req.body.passenger} from ${req.body.pick_up} to ${target_location} by ${formattedTimeOut}.`;

    // Check if there is at least one escort
    if (req.body.armed_guard > 0) {
      expatriateMessage += `\n\n${req.body.armed_guard === 1 ? "An armed escort has" : `${req.body.armed_guard} armed escort has`} been assigned to you for the trip.`;
    } else {
      expatriateMessage += `\n\nYou will NOT need an armed escort for the movement.`;
    }

    // Include the vehicle information
    expatriateMessage += `\n\nThe assigned vehicle for this journey is ${vehicle_number}.`;

    expatriateMessage += `\n\nKindly check your dedicated WhatsApp line for your unique passcode and password. Your access gate pass has been sent to the security unit.

Thank you.
---
*Summary of Movement:*
*Driver:* ${driver_name}
*Destination:* ${target_location}
*Time:* ${formattedTimeOut}
*Pickup:* ${req.body.pick_up}
*Passenger:* ${req.body.passenger}
*Escort:* ${req.body.armed_guard}
*Password:* _Sent to your phone._
*Gate Pass:* _Sent to Security Unit._
`;

//     // // Remove leading space before "you"
//     // expatriateMessage = expatriateMessage.replace(/^ {2}/gm, '');

//     // console.log(expatriateMessage);


//     // const securityManagerMessage = `Security Manager: ${JSON.stringify(driverDetails)}`;

    const securityUnitMessage = `
*SECURITY UNIT*
    
Kindly grant access for the movement with the followings:
          
*Driver Name:* ${req.body.driver_name}
*Vehicle Number:* ${vehicle_number}
*Destination:* ${target_location} 
*Passengers:* ${req.body.passenger}
    
*Note* The gate pass for the movement has been sent to the security portal.
          
Thank you.
        `;



    const today = new Date();
    const formattedToday = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    const securityManagerMessage =
      `*EXPATRIATES MOVEMENT UPDATE*

*Date:* ${formattedToday}

*Name of Expatriate:* ${req.body.passenger}

*Destination:* ${target_location}

*Time Out:* ${formattedTimeOut}

*Time in:* NA

*Escort:* ${req.body.armed_guard}
    `;

    console.log(securityManagerMessage);


    // const expatriateNotification = `Expatriate: Your movement to ${target_location} has been scheduled for ${time_out}, the pilot's number is ${vehicle_number}, thanks`;



    const tripDescription = timeDifferenceInMinutes < 1
    ? `your trip to ${target_location} has been scheduled for ${formattedTimeOut}.`
      // ? `your trip to ${target_location} has been scheduled for ${formattedTimeOut} (${formattedToday}).`
      : `Your trip with ${req.body.passenger.split('-')[2].trim().replace('and', '').trim()}, to ${target_location} has been scheduled for ${formattedTimeOut} (${formattedToday}).
This will be in ${timeDifferenceInMinutes === 1 ? '1 minute' : `${timeDifferenceInMinutes} minutes`}.`;

    const expatriateNotification = `
Dear ${req.body.passenger.split('-')[0].trim()},

${tripDescription}

Your driver is ${req.body.driver_name} (Phone: ${cleanAndFormatPhoneNumber(driverRecord.driverPhone)}), 
and the vehicle's number is ${vehicle_number}.

Have a safe trip and maintain situation awareness.

Regards!
`;

//     // const escortMessage = `Escort: You have been assigned to escort ${req.body.passenger.split('-')[2].trim().replace('and', '').trim()}, to ${target_location}, the pilot for the movement is ${driver_name} and the time is ${time_out}. Thank you.`;
//     // const escortMessage = `Dear ${escortCommandee},
//     // Kindly arrange to escort ${expatriateName} to ${targetLocation} by ${formattedTimeOut}, the pilot for the trip is ${driverName}. Thank you.`;
    
    const escortMessage = 
  `Dear ${escortCommanderName},
Kindly arrange to escort ${req.body.passenger.split('-')[0].trim()} and ${req.body.passenger.split('-')[2].trim().replace('and', '').trim()}, to ${target_location} by  ${formattedTimeOut}.
The pilot for the trip is ${req.body.driver_name}, and his phonenumber is ${cleanAndFormatPhoneNumber(driverRecord.driverPhone)}), 
Thank you.`;

  

    const groupId = groupIDData.idNumber; // Replace with your group ID
    const token =  token1Data.idNumber; 
    const sendMessageToGroup2 = async (groupId, message) => {
      try {
        const response = await axios.post(
          'https://gate.whapi.cloud/messages/text',
          {
            to: groupId,
            body: message,
            typing_time: 0,
          },
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log('Message sent successfully:', response.data);
      } catch (error) {
        console.error('Error sending message:', error.message);
      }
    };

    // Send messages to the transport group
    if (groupId) {
      sendMessageToGroup2(groupId, expatriateMessage);
    }
////////////////////////////////////////////////////////////////
const generatePDF = (pdfData, filename, callback) => {
  console.log('Generating PDF...');

  pdf.create(pdfData).toFile(filename, (err, res) => {
    if (err) {
      console.error('Error during PDF generation:', err);
      callback(err);
    } else {
      console.log('PDF generation completed.');
      callback();
    }
  });
};

const sendMessageToGroup = async (groupId, message, pdfData, pdfFilename) => {
  try {

    const pdfResponse = await axios.post(
      'https://gate.whapi.cloud/messages/document',
      {
        to: groupId,
        media: `data:application/octet-stream;name=${pdfFilename};base64,${pdfData}`,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log('PDF file sent successfully:', pdfResponse.data);
  } catch (error) {
    console.error('Error sending message and PDF:', error.message);
  }
};

const downloadsFolderPath = "C:\\Users\\Administrator\\Downloads";
const formattedDate = formattedToday ;
const uniqueFilename = `M.E_Gate_pass_${formattedDate}_${driver_name}_${target_location}.pdf`;
const pdfPath = path.join(downloadsFolderPath, uniqueFilename);

const signatureImagePath = 'C:/Users/Administrator/OneDrive/Desktop/Development tools/playground/backupVisitor-Movement Management/Visitor-Movement Management6/assets/signature1.png';

    const gatePassHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gate Pass</title>
        <style>
        @page {
          size: landscape;
      }

            /* Add your CSS styles for the gate pass here */
            body {
                font-family: Calibri, sans-serif;
              
                margin: 0;
                padding: 0;
            }
    
            .container_gatePass {
                border: 2px solid #000;
                padding: 20px;
                margin: 20px;
            }
    
            .header {
                text-align: center;
                margin-bottom: 20px;
            }
    
            .red-seal {
                position: absolute;
                bottom: 50px;
                right: 50px;
                width: 150px;
                height: 150px;
                background-color: red;
                border-radius: 50%;
                border: 3px solid #fff;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                clip-path: polygon(
                    50% 0%,
                    61.8% 35.4%,
                    68.6% 57.3%,
                    79.1% 91%,
                    50% 70.1%,
                    20.9% 91%,
                    31.4% 57.3%,
                    38.2% 35.4%
                );
                transform: rotate(-45deg);
            }
    
            .seal-text {
              color: white;
              font-weight: bold;
              text-transform: uppercase;
              font-size: 10px;
              position: absolute;
              top: 70px; /* Adjust this value to move the text down */
              left: 30%;
              transform: translateX(-50%) rotate(45deg); /* Rotate the text by 45 degrees */
          }
            table {
                width: 100%;
                border-collapse: collapse;
            }
    
            table, th, td {
                border: 1px solid #000;
            }
    
            th, td {
                padding: 10px;
                text-align: left;
                font-size: 16px;
            }
    
 
        </style>
    </head>
    <body>
    <div class="logo-container">
    <main>
      <!-- Your SVG content here -->
      <svg xmlns="http://www.w3.org/2000/svg" height="200" width="400" version="1.0" viewBox="-14.709615 -11.98125 127.48333 71.8875">
          <defs>
              <!-- Define the clip path -->
              <clipPath id="a">
                  <path d="M0 841.89h1785.827V0H0z"/>
              </clipPath>
          </defs>
             <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 -1155.7275 543.7908)">
              <path d="M924.582 415.8627h19.169v-19.17h-19.169z" fill="#f7a30a" fill-rule="evenodd"/>
              <path d="M943.751 435.0327h19.17v-19.169h-19.17z" fill="#005ec4" fill-rule="evenodd"/>
              <path d="M942.4095 435.0324h1.342v-19.169h-19.169v1.341h17.827zm1.3418-19.1694h19.17v-1.342h-17.827v-17.828h-1.343v17.828z" fill="#231f20"/>
              <path d="M956.972 409.0544h-.851c-.916-1.695-1.841-3.4-2.767-5.196-.832 1.796-1.674 3.501-2.516 5.196h-.972v-6.381h.748v5.195h.019c.252-.837 1.608-3.564 2.42-5.195h.366c.879 1.631 2.365 4.448 2.627 5.195h.019v-5.195h.907zm4.5322-5.9629c-1.691 0-2.271 1.523-2.271 2.771 0 1.196.654 2.553 2.271 2.553 1.618 0 2.272-1.357 2.272-2.553 0-1.248-.579-2.771-2.272-2.771m0-.637c2.021 0 3.273 1.504 3.273 3.408 0 1.788-1.383 3.192-3.273 3.192-1.889 0-3.271-1.404-3.271-3.192 0-1.904 1.251-3.408 3.271-3.408m19.9776 6.5969l-4.021.003v-6.385h4.426v.639l-3.511.002v2.052h3.058v.637h-3.058v2.414h3.106zm7.1982 0h-.752v-5.087h-.019c-.444.638-2.876 3.428-4.329 5.087h-.679v-6.382h.755v5.078h.018c.397-.555 2.858-3.418 4.29-5.078h.716zm5.9082-3.5732v-2.16c-.367-.174-.783-.229-1.339-.229-1.432 0-2.573 1.084-2.573 2.699 0 1.495.961 2.626 2.677 2.626.725 0 1.329-.247 1.725-.511l.377.528c-.396.319-1.15.62-2.111.62-2.377 0-3.678-1.668-3.678-3.282 0-1.75 1.207-3.318 3.555-3.318.839 0 1.64.21 2.282.428v2.599zm3.2888 3.5735h-.914v-6.382h.914zm1.4983-6.3821h3.658v.639h-2.744v5.743h-.914zm-31.3632.0039v5.742l2.139.001v.638h-5.297v-.639h2.203v-5.742z" fill="#333333" fill-rule="evenodd"/>
              <path d="M972.3656 409.0544l-2.607-6.381h.974l.945 2.689.225.639.671 1.91 1.987-5.238h1.102l-2.568 6.381z" fill="#333333"/>
              <path d="M972.2015 405.362h4.695V406h-4.466z" fill="#333333" fill-rule="evenodd"/>
            </g>
      </svg>
  </main>
</div>

     </div>
     <div class="container_gatePass ">
        <div class="header">
        <div style="color: #333333; font-weight: bold; font-size: 24px; font-family: Arial, sans-serif;">Gate Pass</div>
    </div>
    
            <!-- Table for Gate Pass Data -->
            <table>
                <tr>
                    <th>Driver's Name</th>
                    <td>${driver_name}</td>
                </tr>
                <tr>
                    <th>Destination</th>
                    <td>${target_location}</td>
                </tr>
                <tr>
                <th>Date</th>
                <td>${formattedDate}</td>
            </tr>
          
            <tr>
                <th>Armed Guard</th>
                <td>${req.body.armed_guard}</td>
            </tr>
            <tr>
                <th>Passenger</th>
                <td>${req.body.passenger}</td>
            </tr>
            <tr>
                <th>Destination</th>
                <td>${target_location}</td>
            </tr>
            <tr>
                <th>Vehicle Number</th>
                <td>${vehicle_number}</td>
            </tr>
         
            <tr>
                <th>HR Authorization</th>
              <td>${userName}</td>
            </tr
            
           
            <tr>
            <th>Authorizer's Signature</th>
            <td><img src="file:///C:/Users/Administrator/OneDrive/Desktop/Development tools/playground/backupVisitor-Movement Management/Visitor-Movement Management6/assets/signature1.png" alt="Authorizer's Signature" /></td>
          </tr>

    <div class="red-seal">
                <div class="seal-text">Authorized</div>
            </div>
            </tr
        </table>
    </div>
</body>
</html>
`;


generatePDF(gatePassHTML, pdfPath, (error) => {
  if (error) {
    console.error('PDF generation failed:', error);
  } else {
    const pdfData = fs.readFileSync(pdfPath, { encoding: 'base64' });

    // Send message with PDF only (no additional descriptive message)
    sendMessageToGroup(groupId, '', pdfData, uniqueFilename);
  }
});

//////////////////////////////////////////////////////////////////////////////////
    //send to driver
    const sendMessageToNumber = async (phoneNumber, message, callback) => {
      try {
        const response = await axios.post(
          'https://gate.whapi.cloud/messages/text',
          {
            to: `${phoneNumber}@s.whatsapp.net`,
            body: message,
            typing_time: 0,
          },
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(`Message sent to ${phoneNumber} successfully:`, response.data);
        if (callback) {
          callback(null, response.data);
        }
      } catch (error) {
        console.error(`Error sending message to ${phoneNumber}:`, error.message);
        if (callback) {
          callback(error, null);
        }
      }
    };

    // Example of using the callback
    if (driverRecord) {
      const driverPhoneNumber = cleanAndFormatPhoneNumber(driverRecord.driverPhone);

      // const driverMessage = `Hi ${driverDetails.driver_name},\n\n${expatriateMessage}`;
      const driverMessage = `${expatriateMessage}`;
      sendMessageToNumber(driverPhoneNumber, driverMessage, (error, responseData) => {
        if (error) {
          console.error('Error occurred:', error);
        } else {
          console.log('Driver message sent successfully.', responseData);
        }
      });
    } else {
      console.error('Driver record not found.');
    }


/////////////////////////////////////////////////////////////////
const newsecurityManagerNumber = manager.phoneNumber
    /////Send to manager
    const sendMessageToManager = async (newsecurityManagerNumber, message, callback) => {
      try {
        const response = await axios.post(
          'https://gate.whapi.cloud/messages/text',
          {
            // to: `${securityManagerNumber}@s.whatsapp.net`,
            to: `${newsecurityManagerNumber}@s.whatsapp.net`,
            
            body: message,
            typing_time: 0,
          },
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(`Message sent to ${newsecurityManagerNumber} successfully:`, response.data);
        if (callback) {
          callback(null, response.data);
        }
      } catch (error) {
        console.error(`Error sending message to ${newsecurityManagerNumber}:`, error.message);
        if (callback) {
          callback(error, null);
        }
      }
    };

    if (newsecurityManagerNumber) {

      const newsecurityManagerNumber= manager.phoneNumber;

      sendMessageToManager(newsecurityManagerNumber, securityManagerMessage, (error, responseData) => {
        if (error) {
          console.error('Error occurred:', error);
        } else {
          console.log('Driver message sent successfully.', responseData);
        }
      });
    } else {
      console.error('Driver record not found.');
    }

  
    ////////////////send to expatriate
    const send_moving_expatriate = async (movingExpatriatePhoneNumber, message, callback) => {
      try {
        const response = await axios.post(
          'https://gate.whapi.cloud/messages/text',
          {
            to: `${movingExpatriatePhoneNumber}@s.whatsapp.net`,
            body: message,
            typing_time: 0,
          },
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(`Message sent to ${movingExpatriatePhoneNumber} successfully:`, response.data);
        if (callback) {
          callback(null, response.data);
        }
      } catch (error) {
        console.error(`Error sending message to ${movingExpatriatePhoneNumber}:`, error.message);
        if (callback) {
          callback(error, null);
        }
      }
    };



    if (movingExpatriateRecord) {
      // Use the phoneNumber field from the expatriate record
      const movingExpatriatePhoneNumber = cleanAndFormatPhoneNumber(movingExpatriateRecord.phoneNumber);
      console.log('Moving Expatriate Phone Number:', movingExpatriatePhoneNumber);

      // Notify the expatriate
      send_moving_expatriate(movingExpatriatePhoneNumber, expatriateNotification, (error, responseData) => {
        if (error) {
          console.error('Error occurred while sending expatriate message:', error);
          res.status(500).send(`Error sending expatriate message: ${error.message}`);
        } else {
          console.log('Expatriate message sent successfully.', responseData);
        }
      });
    } else {
      console.log('Moving expatriate record not found.');
      // Handle the case where there is no movingExpatriateRecord, e.g., send an error response
      res.status(404).send('Moving expatriate record not found.');
    }

//     ... (rest of your code)

//   } catch (error) {
//     console.error('Error occurred:', error);
//     res.status(500).send(`An error occurred while uploading visitor details: ${error.message}`);
//   } finally {
//     await client.close();
//   }
// })
////////////////////send to security unit/////////////////////////////////////////////////

  // const security_unit_n="2349010400099" 
  const security_unit_n = supervisor.phoneNumber

      const token2 = token; // Replace with your actual token
      // const token2 = 'notWeiRdf4mmY2CWf1Lk1Iz1W7hysaCX'; // Replace with your actual token
      const sendMessageToSecurity_unit = async (security_unit_n, message) => {
        try {
          const response = await axios.post(
            'https://gate.whapi.cloud/messages/text',
            {
              to: security_unit_n,
              body: message,
              typing_time: 0,
            },
            {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token2}`,
              },
            }
          );
  
          console.log('Message sent successfully:', response.data);
        } catch (error) {
          console.error('Error sending message:', error.message);
        }
      };
  
      // Send messages to the transport group
      if (security_unit_n) {
        sendMessageToSecurity_unit(security_unit_n, securityUnitMessage);
      }
  

//////////////////////////////////////////////////////////////////////////////
/////Send to Escort Commander
////////////////send to expatriate
const send_to_escort= async (escort_commander_phone_number, message, callback) => {
  try {
    const response = await axios.post(
      'https://gate.whapi.cloud/messages/text',
      {
        to: `${escort_commander_phone_number}@s.whatsapp.net`,
        body: message,
        typing_time: 0,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(`Message sent to ${escort_commander_phone_number} successfully:`, response.data);
    if (callback) {
      callback(null, response.data);
    }
  } catch (error) {
    console.error(`Error sending message to ${escort_commander_phone_number}:`, error.message);
    if (callback) {
      callback(error, null);
    }
  }
};


// Add the escort commander's phone number to the driverDetails object
if (escortCommanderRecord) {

  const  escort_commander_phone_number = cleanAndFormatPhoneNumber(escortCommanderRecord.phoneNumber);
  console.log('Escort commander Phone Number:', escort_commander_phone_number);

  // Notify the expatriate
  send_to_escort(escort_commander_phone_number, escortMessage , (error, responseData) => {
    if (error) {
      console.error('Error occurred while sending escortMessage:', error);
      res.status(500).send(`Error sending escortMessage: ${error.message}`);
    } else {
      console.log('escort message sent successfully.', responseData);
    }
  });
} else {
  console.log('escortcommander record not found.');
  // Handle the case where there is no movingExpatriateRecord, e.g., send an error response
  res.status(404).send('escortcommander record not found.');
}

} catch (error) {
  console.error('Error occurred:', error);
  res.status(500).send(`An error occurred while uploading visitor details: ${error.message}`);


} finally {
  await client.close();
}
})
////////////////////////////////////////////////////////////////////////

// // ////////////////////pdf//////////////////////////////////////////////////////////////
app.post('/receive_gate_pass', async function (req, res) {
  const gatePassTicket = req.body;

  try {
    await client.connect(); // Connect to the MongoDB client
    const database = client.db('olukayode_sage');
    const kaydata = database.collection('drivers_details');

    // Generate the gate pass ticket from the previously sent driver data
    const driverData = await collection.findOne({ _id: gatePassTicket.driverId });
    const generatedTicket = generateGatePassTicket(driverData);

    // Save the gate pass ticket to the database
    const result = await collection.insertOne(generatedTicket);

    // Generate the ticket in PDF format
    const ticketPath = await generateTicketPDF(generatedTicket);

    res.send('Gate pass ticket received successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while receiving gate pass ticket');
  } finally {
    await client.close(); // Close the MongoDB client connection
  }
});

// Helper function to generate gate pass ticket from driver data
function generateGatePassTicket(driverData) {
  // Generate the ticket using driver data
  const gatePassTicket = {
    driverName: driverData.name,
    vehicleDetails: driverData.vehicleDetails,
    accessAuthorization: 'Authorized', // Set the access authorization status
    // Include additional ticket information
    // ...
  };

  // Return the generated ticket object
  return gatePassTicket;
}

// Helper function to generate the gate pass ticket in PDF format
function generateTicketPDF(ticketData) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();

    // Set the PDF document properties
    doc.info.Title = 'Gate Pass Ticket';
    doc.info.Author = 'Your Company';

    // Create the PDF content
    doc.font('Helvetica-Bold').fontSize(14).text('Gate Pass Ticket', { align: 'center' });
    doc.moveDown();
    doc.font('Helvetica').fontSize(12).text(`Driver Name: ${ticketData.driverName}`);
    doc.moveDown();
    doc.font('Helvetica').fontSize(12).text(`Vehicle Details: ${ticketData.vehicleDetails}`);
    doc.moveDown();
    doc.font('Helvetica').fontSize(12).text(`Access Authorization: ${ticketData.accessAuthorization}`);
    // Include additional ticket information
    // ...

    // Generate the ticket file
    const ticketPath = 'gate_pass_ticket.pdf';
    const stream = fs.createWriteStream(ticketPath);
    doc.pipe(stream);
    doc.end();

    stream.on('finish', () => {
      resolve(ticketPath);
    });

    stream.on('error', (error) => {
      reject(error);
    });
  });
}


app.delete('/deleteDriver/:id', async function (req, res) {
  const driverId = req.params.id;

  try {
    const client = new MongoClient(uri);
    await client.connect();

    const database = client.db('olukayode_sage');
    const driversCollection = database.collection('drivers_details');
    const driversHistoryCollection = database.collection('drivershistory');

    // Find the driver data by ID
    const driver = await driversCollection.findOne({ _id: new ObjectId(driverId) });

    if (!driver) {
      res.status(404).json({ message: 'Driver not found' });
      return;
    }

    // Delete the driver data from the drivers collection
    const deleteResult = await driversCollection.deleteOne({ _id: new ObjectId(driverId) });

    if (deleteResult.deletedCount === 0) {
      res.status(404).json({ message: 'Driver not found in the drivers collection' });
      return;
    }

    res.status(200).json({ message: 'Driver deleted successfully', _id: driverId });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while deleting the driver');
  } finally {
    await client.close();
  }
});

app.post('/addDriverToHistory', async function (req, res) {
  const driverData = req.body;

  try {
    const client = new MongoClient(uri);
    await client.connect();

    const database = client.db('olukayode_sage');
    const driversHistoryCollection = database.collection('drivershistory');

    // Insert the driver data into the drivers history collection
    const result = await driversHistoryCollection.insertOne(driverData);
    console.log('Driver added to history:', result);

    res.status(200).json({ message: 'Driver added to history' });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while adding the driver to history');
  } finally {
    await client.close();
  }
});


// Security guard portal: Return driver
app.post('/return_driver/:driverId', async function (req, res) {
  const driverId = req.params.driverId;

  try {
    await client.connect(); // Connect to the MongoDB client
    const database = client.db('olukayode_sage');
    const kaydata = database.collection('olukayode_collection');

    // Mark the driver as returned in the database
    const result = await collection.updateOne(
      { _id: driverId },
      { $set: { returned: true } }
    );



    res.send('Driver returned successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while returning driver');
  } finally {
    await client.close(); // Close the MongoDB client connection
  }
});


app.get('/get_visitor_history', async function (req, res) {
  try {
    await client.connect();
    const database = client.db('olukayode_sage');
    // const collection = database.collection('olukayode_collection');
    const collection = database.collection('Visitorshistory');
    const visithistory = await collection.find({}).toArray();
    console.log(' History :', visithistory);

    res.json(visithistory);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving History');
  } finally {
    await client.close();
  }
})

app.post('/send_driver_details', async function (req, res) {
  const MovementData = req.body; // Assuming the visitor data is sent in the request body

  try {
    const client = new MongoClient(uri); // Create a new MongoClient instance

    // Connect to the MongoDB client
    await client.connect();

    const database = client.db('olukayode_sage');
    const movementCollection = database.collection('Visitors_details_Database');
    const movementDatas = database.collection('movementData');

    // Insert the visitor data into the history collection
    const result = await movementCollection.insertOne(MovementData);
    console.log('Movement Data:', result);

    res.status(200).json({ message: 'Visitor added to history and deleted from visitors successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while adding the visitor to history and deleting from visitors');
  } finally {
    await client.close(); // Close the MongoDB client connection
  }
});



// app.post('/addVisitorHistory', async function (req, res) {
//   const visitorData = req.body; // Assuming the visitor data is sent in the request body

//   try {
//     const client = new MongoClient(uri); // Create a new MongoClient instance

//     // Connect to the MongoDB client
//     await client.connect();

//     const database = client.db('olukayode_sage');
//     const visitorsCollection = database.collection('Visitors_details_Database');
//     const historyCollection = database.collection('Visitorshistory');

//     // Check if a similar visitor entry exists in the history collection within the past 15 minutes
//     const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000); // Get the timestamp 15 minutes ago
//     const existingEntry = await historyCollection.findOne({
//       name: visitorData.name,
//       whomToSee: visitorData.whomToSee,
//       date: { $gte: fifteenMinutesAgo },
//     });

//     if (existingEntry) {
//       res.status(409).json({ message: 'Visitor already exists in history within the last 15 minutes' });
//       return;
//     }

//     // Insert the visitor data into the history collection
//     const result = await historyCollection.insertOne(visitorData);
//     console.log('Visitor added to history:', result);

//     // Remove the visitor data from the visitors_details collection based on the visitor name
//     const visitorName = visitorData.name; // Assuming the visitor name is present in visitorData
//     const deleteResult = await visitorsCollection.deleteOne({ name: visitorName });

//     if (deleteResult.deletedCount === 0) {
//       res.status(404).json({ message: 'Visitor not found in the visitors collection' });
//       return;
//     }

//     res.status(200).json({ message: 'Visitor added to history and deleted from visitors successfully', name: visitorName });

//   } catch (error) {
//     console.error(error);
//     res.status(500).send('An error occurred while adding the visitor to history and deleting from visitors');
//   } finally {
//     await client.close(); // Close the MongoDB client connection
//   }
// });


app.post('/addVisitorHistory', async function (req, res) {
  const visitorData = req.body; // Assuming the visitor data is sent in the request body

  try {
    const client = new MongoClient(uri); // Create a new MongoClient instance

    // Connect to the MongoDB client
    await client.connect();

    const database = client.db('olukayode_sage');
    const visitorsCollection = database.collection('Visitors_details_Database');
    const historyCollection = database.collection('Visitorshistory');
    const expatriatesCollection = database.collection('expatriates_collection');

    // const collection = database.collection('Visitors_details_Database');
   
    // Check if a similar visitor entry exists in the history collection within the past 15 minutes
    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000); // Get the timestamp 15 minutes ago
    const existingEntry = await historyCollection.findOne({
      name: visitorData.name,
      whomToSee: visitorData.whomToSee,
      date: { $gte: fifteenMinutesAgo },
    });

    if (existingEntry) {
      res.status(409).json({ message: 'Visitor already exists in history within the last 15 minutes' });
      return;
    }

    // Insert the visitor data into the history collection
    const result = await historyCollection.insertOne(visitorData);
    console.log('Visitor added to history:', result);

    // Remove the visitor data from the visitors_details collection based on the visitor name
    const visitorName = visitorData.name; // Assuming the visitor name is present in visitorData
    const deleteResult = await visitorsCollection.deleteOne({ name: visitorName });

    if (deleteResult.deletedCount === 0) {
      res.status(404).json({ message: 'Visitor not found in the visitors collection' });
      return;
    }

 // Fetch the expatriate document
      const expatriate = await expatriatesCollection.findOne({
        name: { $regex: new RegExp(visitorData.whomToSee, 'i') } // Case-insensitive regex match
      });


    if (expatriate) {
      // Extract phone number if name matches at least two words
      const expatriateNameWords = expatriate.name.split(' ');
      const visitorWhomToSeeWords = visitorData.whomToSee.split(' ');
  
      // Count the number of words from the expatriate's name that match the visitor's "whomToSee"
      const matchedWords = expatriateNameWords.filter(word => visitorWhomToSeeWords.includes(word));
  
      // Check if at least two words match
      if (matchedWords.length >= 2) {
          // Phone number extraction
          const HostphoneNumber = expatriate.phoneNumber;
          console.log('Expatriate phone number:', HostphoneNumber);
    const cleanedHostNumber = cleanPhoneNumber2(HostphoneNumber);
    console.log('Cleaned host number:', cleanedHostNumber);

    const arrivalMessage = `Hi ${visitorData.whomToSee}, 
your guest ${visitorData.name} from ${visitorData.company} is here! 
He arrived at about ${visitorData.time}. 
Kindly reach out to the receptionist to meet them.`;

    // const token2 = "notWeiRdf4mmY2CWf1Lk1Iz1W7hysaCX"; // Replace with your actual token
    const token2 = process.env.TOKEN;


    const sendMessageToHost = async (cleanedHostNumber, arrivalMessage) => {
      try {
        const response = await axios.post(
          'https://gate.whapi.cloud/messages/text',
          {
            to: cleanedHostNumber,
            body: arrivalMessage,
            typing_time: 0,
          },
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token2}`,
            },
          }
        );

        console.log('Message sent successfully:', response.data);
      } catch (error) {
        console.error('Error sending message:', error.message);
      }
    };

    // Send arrival message to the host
    if (cleanedHostNumber) {
      sendMessageToHost(cleanedHostNumber, arrivalMessage);
    }
  
        }
      }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while adding the visitor to history and deleting from visitors');
  } finally {
    await client.close(); // Close the MongoDB client connection
  }
});




app.post('/receptionist_newVisitor_entry', (req, res) => {
  // Handle saving visitor details logic here
  // Render the "awaiting visitor" page
  res.render('receptionist_newVisitor_entry.html'); // Replace with your template engine logic
});



app.post('/new_visitor', (req, res) => {
  // Handle saving visitor details logic here
  // Render the "awaiting visitor" page
  res.render('new_visitor.html'); // Replace with your template engine logic
});

// app.get('/new_visitor', (req, res) => {
//   res.sendFile(__dirname + '/new_visitor.html');
// });
// HR portal: WebSocket connection
app.get('/hr_portal', (req, res) => {
  res.sendFile(__dirname + '/hr_portal.html');
});

// Security guard portal: WebSocket connection
app.get('/security_portal', (req, res) => {
  res.sendFile(__dirname + '/security_portal.html');
});

// Handle WebSocket upgrade requests for HR and security portals
app.on('upgrade', (req, socket, head) => {
  const pathname = req.url;
  const isHRPortal = pathname === '/hr_portal';
  const isSecurityPortal = pathname === '/security_portal';

  if (isHRPortal) {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit('connection', ws);
      hrClients.push(ws);
    });
  } else if (isSecurityPortal) {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit('connection', ws);
      securityClients.push(ws);
    });
  } else {
    socket.destroy();
  }
});




app.delete('/delete_visitor_details/:id', async function (req, res) {
  const visitorId = req.params.id; // Get the visitor's ID from the request parameters

  try {
    await client.connect(); // Connect to the MongoDB client
    const database = client.db('olukayode_sage');
    const collection = database.collection('Visitors_details_Database');

    // Delete the visitor details from the database based on the ID
    const result = await collection.deleteOne({ _id: ObjectId(visitorId) });

    if (result.deletedCount === 1) {
      res.send('Visitor details deleted successfully');
    } else {
      res.status(404).send('Visitor not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while deleting visitor details');
  } finally {
    await client.close(); // Close the MongoDB client connection
  }
});


app.put('/edit_visitor_details/:id', async function (req, res) {
  const visitorId = req.params.id; // Get the visitor's ID from the request parameters
  const updatedVisitorDetails = {
    // Fields to be updated based on the request body
    name: req.body.name,
    address: req.body.address,
    whomToSee: req.body.whomToSee,
    purposeOfVisit: req.body.purposeOfVisit,
    phoneNumber: req.body.phoneNumber
  };

  try {
    await client.connect(); // Connect to the MongoDB client
    const database = client.db('olukayode_sage');
    const collection = database.collection('Visitors_details_Database');

    // Update the visitor details in the database based on the ID
    const result = await collection.updateOne(
      { _id: ObjectId(visitorId) },
      { $set: updatedVisitorDetails }
    );

    if (result.matchedCount === 1) {
      res.send('Visitor details updated successfully');
    } else {
      res.status(404).send('Visitor not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while updating visitor details');
  } finally {
    await client.close(); // Close the MongoDB client connection
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////

app.post('/add_new_driver', async (req, res) => {
  const newDriver = {
    // _id: req.body._id,
    driver_name: req.body.driver_name,
    driverPhone: req.body.driverPhone,
    pAssignee: req.body.pAssignee,
    driversAddress: req.body.driversAddress,
    sourceCompany: req.body.sourceCompany,
    dateofemployment: req.body.dateofemployment,

  };
  try {
    await client.connect();
    const database = client.db('olukayode_sage');
    const collection = database.collection('drivers_parameters');
    // Save the new driver details to the database
    const result = await collection.insertOne(newDriver);

    // const message = {
    //   type: 'new_driver_added',
    //   newDriver,
    // };
    // sendSSEMessage('sse_new_driver_added', message);
    // console.log('Sending SSE message:', message);

    res.status(201).json({ message: 'New drivers details added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while adding new drivers details');
  } finally {
    await client.close();
  }
});


//add new expatriates
app.post('/add_new_expatriate', async (req, res) => {
  const newExpatriateDetails = {
    name: req.body.name,
    countryOfOrigin: req.body.country_of_origin,
    phoneNumber: req.body.phone_number,
    houseAddress: req.body.house_address,
    unit: req.body.unit,
  };

  try {
    await client.connect();
    const database = client.db('olukayode_sage');
    const collection = database.collection('expatriates_collection');

    // Save the new expatriate details to the database
    const result = await collection.insertOne(newExpatriateDetails);

    res.status(201).json({ message: 'New expatriate details added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while adding new expatriate details');
  } finally {
    await client.close();
  }
});


app.post('/add_new_vehicle', async (req, res) => {
  const newVehicleDetails = {
    plate_number: req.body.plate_number,
    vehicle_brand: req.body.vehicle_brand,
    vehicle_type: req.body.vehicle_type,
  };

  try {
    await client.connect();
    const database = client.db('olukayode_sage');
    const collection = database.collection('vehicles_collection');

    // Save the new vehicle details to the database
    const result = await collection.insertOne(newVehicleDetails);

    res.status(201).json({ success: true, message: 'New vehicle details added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred while adding new vehicle details' });
  } finally {
    await client.close();
  }
});


app.get('/get_vehicle_numbers', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('olukayode_sage');
    const collection = database.collection('vehicles_collection');

    // Omitting the projection parameter to include all fields
    const vehicles = await collection.find({}).toArray();

    res.json({ success: true, vehicleNumbers: vehicles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred while retrieving vehicle plate numbers' });
  } finally {
    await client.close();
  }
});



// // //retrieve expatriates naes;
// // app.get('/get_expatriate_names', async (req, res) => {
// //   try {
// //     await client.connect();
// //     const database = client.db('olukayode_sage');
// //     const collection = database.collection('expatriates_collection');

// //     const expatriates = await collection.find({}, { projection: { _id: 0, name: 1 } }).toArray();

// //     res.json(expatriates);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send('An error occurred while retrieving expatriate names');
// //   } finally {
// //     await client.close();
// //   }
// // });

app.get('/get_expatriate_names', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('olukayode_sage');
    const collection = database.collection('expatriates_collection');

    // Fetch expatriates data
    const expatriates = await collection.find({}, { projection: { _id: 1, name: 1, unit: 1, phoneNumber: 1 } }).toArray();

    // Map expatriates data to options for the dropdown
    const expatriateOptions = expatriates.map(expatriate => ({
      _id: expatriate._id.toString(),
      name: expatriate.name,
      unit: expatriate.unit,
      phoneNumber: expatriate.phoneNumber
    }));

    res.json(expatriateOptions);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving expatriate names');
  } finally {
    await client.close();
  }
});

// //////////////////////////////////////////////////////////

// Start the server
app.get('/receive_driver_parameters', async function (req, res) {
  try {
    await client.connect();
    const database = client.db('olukayode_sage');
    const collection = database.collection('drivers_parameters');
    const drivers_details = await collection.find({}).toArray();
    console.log('Expected visitors:', drivers_details);
    res.json(drivers_details);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving drivers details');
  } finally {
    await client.close();
  }
});

app.post('/send_driver_parameters', async function (req, res) {
  const driverDetails = {
    driver_name: req.body.driver_name,
    driverPhone: req.body.driverPhone,
    pAssignee: req.body.pAssignee,
    driversAddress: req.body.driversAddress,
    sourceCompany: req.body.sourceCompany,
    dateofemployment: req.body.dateofemployment,
  };

  try {
    // Connect to the MongoDB client
    await client.connect();
    const database = client.db('olukayode_sage');
    const kaydata = database.collection('drivers_parameters');

    // Save the driver details to the database
    const result = await kaydata.insertOne(driverDetails);

    // Notify HR unit with a message
    for (const hrClient of hrClients) {
      hrClient.send('HR unit has a new message');
    }

    // Notify security unit with a message
    for (const securityClient of securityClients) {
      securityClient.send('HR unit has a new message');
    }

    res.send('Driver details sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while receiving driver details');
  } finally {
    await client.close(); // Close the MongoDB client connection
  }
});



// Endpoint for adding a new escort to the escort database

app.post('/add_new_escort', async (req, res) => {
  const newEscort = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    unit: req.body.unit,
    houseAddress: req.body.houseAddress,
    rank: req.body.rank,
    designation: req.body.designation, // Include the new designation field
  };

  try {
    await client.connect();
    const database = client.db('olukayode_sage');
    const collection = database.collection('escorts');
    const result = await collection.insertOne(newEscort);

    res.status(201).json({ message: 'New escort added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while adding new escort');
  } finally {
    await client.close();
  }
});



// Add a new endpoint for fetching escorts
app.get('/fetch_armed_guards', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('olukayode_sage');
    const collection = database.collection('escorts');
    const escorts = await collection.find().toArray();

    res.json(escorts);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching escorts');
  } finally {
    await client.close();
  }
});


const cleanPhoneNumber = (phoneNumber) => {
  // Remove any non-numeric characters except '+'
  const cleanedNumber = phoneNumber.replace(/[^\d+]/g, '');

  // Check if the cleaned number starts with +2340
  if (cleanedNumber.startsWith('+2340')) {
    // Remove the "0" after +234
    return '+234' + cleanedNumber.slice(5);
  }

  // Return the cleaned number as is
  return cleanedNumber;
};
////////////////////////////////////////////////////////////////////////////////


// /////////////////////////////////////////////////working no stored id
app.use(session({ secret: secretKey, resave: true, saveUninitialized: true }));


// // Login endpoint
// app.post('/login', async (req, res) => {
//   const { phoneNumber, password } = req.body;
//   const cleanedPhoneNumber = cleanPhoneNumber(phoneNumber);
//   const code = req.generatedCode;

//   // Use the code in your logic
//   // res.json({ message: 'Using generated code', code });
  
//   try {
//     // Connect to MongoDB
//     await client.connect();

//     const database = client.db('olukayode_sage');
//     const userCollection = database.collection('registered_user_config_database');
//     const configCollection = database.collection('user_config_databse');
//     const userIdCollection = database.collection('user_id_collection');

//     // Find user by phoneNumber instead of cleaned one
//     const user = await userCollection.findOne({ phoneNumber: cleanedPhoneNumber });
//     console.log('Using generated code 1', code)
//     // Check if the user is found
//     if (!user) {
//       res.status(404).json({ message: 'Account not registered. Please register an account.' });
//       return; // Return to avoid further processing
//     }

//     // Ensure that user._id is defined before accessing it
//     if (user._id) {
//         // Use the same customId generation logic as in the middleware
//         const generatedCustomId = code;
//         console.log('Generated CustomId:', generatedCustomId);
      
//         // Save user_id mapping in user_id_collection
//         await userIdCollection.updateOne(
//           { _id: user._id },
//           { $set: { customId: generatedCustomId, phoneNumber: cleanedPhoneNumber } },
//           { upsert: true }
//         );
      

//       // Inside the login endpoint
//       if (await bcrypt.compare(password, user.passwordHash)) {
//         // Store user's unique identifier and name in the session
//         req.session.userId = user._id;
//         req.session.userName = user.name;

//         // Fetch user role from the config collection
//         const config = await configCollection.findOne({ phoneNumber: user.phoneNumber });

//         if (config) {
//           // Passwords match, generate a JWT token
//           const token = jwt.sign(
//             { phoneNumber: user.phoneNumber, role: config.configuredRole },
//             secretKey,
//             { expiresIn: '1h' }
//           );

//           // Redirect based on user role
//           switch (config.configuredRole) {
//             case 'security':
//               res.json({ redirect: '/security_portal.html', token });
//               break;
//             case 'receptionist':
//               res.json({ redirect: '/receptionist.html', token });
//               break;
//             case 'transport':
//               res.json({ redirect: '/transport_unit.html', token });
//               break;
//             // Add more cases for other roles if needed
//             default:
//               res.status(400).json({ message: 'Unknown role' });
//               return;
//           }
//         } else {
//           console.log('User configuration not found.');
//           res.status(400).json({ message: 'User configuration not found' });
//         }
//       } else {
//         // Invalid credentials
//         console.log('Invalid credentials.');
//         res.status(401).json({ message: 'Invalid credentials...' });
//       }
//     } else {
//       console.log('User id not found.');
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   } finally {
//     // Close the MongoDB connection
//     await client.close();
//   }
// });
// // const user = await usersCollection.findOne({ _id: new ObjectId(userId) });
// // Fetch user name endpoint
// // Fetch user name endpoint
app.post('/registered_user_name', async (req, res) => {
  const userId = req.session.userId;

  try {
    // Connect to MongoDB
    await client.connect();

    const database = client.db('olukayode_sage');
    const usersCollection = database.collection('registered_user_config_database');

    // Fetch the name of the registered person from registered_user_config_database
    const user = await usersCollection.findOne({ _id: new ObjectId(userId) });

    if (user) {
      // Extract the first name from the full name
      const fullName = user.name;
      const firstName = fullName.split(' ')[0]; // Assuming the first name is the first word

      // Send both the user's full name and first name as a JSON response
      res.json({ fullName, firstName });
    } else {
      // If user not found, send an appropriate response
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user name:', error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
});
// /////////////////////////////////////////////////////////////


app.post('/securityOfficers', async (req, res) => {
  const { name, phoneNumber, designation, email } = req.body;
  const securityOfficer = {
    name: name,
    phoneNumber: phoneNumber,
    designation: designation,
    email: email
  };

  try {
    await client.connect();
    const database = client.db('olukayode_sage');
    const collection = database.collection('security_officers');
    const result = await collection.insertOne(securityOfficer);

    res.status(201).json({ message: 'New security_officers added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while adding new security_officers');
  } finally {
    await client.close();
  }
});





// Fetch the data of security officers
app.get('/rerieve_security_Officers', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('olukayode_sage');
    const collection = database.collection('security_officers');

    // Query to retrieve security managers (case-insensitive)
    const managers = await collection.find({ designation: { $regex: 'security manager', $options: 'i' } })
      .project({ _id: 0, name: 1, phoneNumber: 1, email: 1, designation: 1 })
      .toArray();

    // Query to retrieve security technicians (case-insensitive)
    const technicians = await collection.find({ designation: { $regex: 'security technician', $options: 'i' } })
      .project({ _id: 0, name: 1, phoneNumber: 1, email: 1, designation: 1 })
      .toArray();

    // Query to retrieve security supervisors (case-insensitive)
    const supervisors = await collection.find({ designation: { $regex: 'security supervisor', $options: 'i' } })
      .project({ _id: 0, name: 1, phoneNumber: 1, email: 1, designation: 1 })
      .toArray();

    // Combine all security officers into a single object
    const allSecurityOfficers = {
      managers: managers,
      technicians: technicians,
      supervisors: supervisors
    };

    // Send response with all security officers
    res.status(200).json(allSecurityOfficers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred while retrieving security officers' });
  } finally {
    await client.close();
  }
});





const formatDate2 = (date) => {
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const currentDate = new Date();

const formattedToday2 = formatDate2(currentDate);

const lastWeek2 = new Date(currentDate);
lastWeek2.setDate(lastWeek2.getDate() - 7);
const formattedStartDate2 = formatDate2(lastWeek2);

const timeFrame = `from ${formattedStartDate2} to ${formattedToday2}`;



const generateSVGMap = () => {
  // Your dynamic SVG generation logic goes here
  return `
  
  <div class="map-container">
   
    <svg width="800" height="610">   

  <rect x="10" y="10" width="740" height="900" fill="#f0f0f0" stroke="#ccc" stroke-width="2" />
  
  <text x="400" y="30" font-family="Arial, sans-serif" font-size="20" fill="#000000" text-anchor="middle">Security Incident Map</text>

  <svg id="nigerian-map" x="20" y="20" width="750" height="650" viewBox="0 100 800 500">

 <path
 d="m 291.01165,491.65874 0.6,0.77 4.83,-0.89 2.71,0.27 2.05,1.34 0.33,1.46 0,0 0.07,4.36 -0.55,2.86 0.05,0.73 0.94,1.03 14.09,0.86 1.24,1.86 0.22,2.19 0.7,1.04 3.21,2.33 1.34,0.21 0,0 1.08,1.29 -0.59,3.72 0.15,3.78 1.37,4.63 0.73,1.68 1.71,2 0.76,2.55 -0.6,1.21 -3.42,-0.76 0,0 -2.69,-2.61 -2.54,-0.84 -2.76,-2.14 -0.58,-2.11 -1.19,-1.47 -3.4,-0.91 -2.42,0.14 -0.28,0.91 0.53,3.51 -1.84,5.1 0.32,0.45 2.23,-0.16 -0.7,2.44 -0.73,0.9 -6.08,-0.16 -1.1,0.98 -0.07,0.75 1.07,1.94 -1.21,5.81 -0.03,2.4 0.66,2.49 -1.17,2.89 -2.52,1.94 0.09,0.77 -0.47,0.64 0.22,1.47 0.59,0.67 0.02,1.17 -0.67,1.62 1.79,3.37 0.13,1.85 0,0 -2.36,-1.79 -2.94,-1.41 -1.8,0.43 -3.28,-1.22 -2.79,0.12 -1.11,0.64 -3.13,0.58 -1.8,-0.27 -1.45,-1.41 -0.59,-1.1 0.16,-1.1 1.37,-3.7 3.42,-4.33 2.39,-4.19 -0.05,-2.78 -0.66,-1.72 -0.54,-0.05 0,0 3.09,-10.25 2.1,-3.87 1.82,-1.68 1.18,-3.04 0.89,-0.9 0.43,-2.01 -0.36,-3.45 0.28,-2.05 -1.51,-2.44 1.23,-0.77 -0.38,-8.47 -0.47,-1.35 -1.04,-1.45 -5.34,-1.78 -2.01,-1.69 0,0 1.27,-2.22 1.36,-1.3 z"
 title="Abia"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-AB" />


<path
 d="m 682.64165,187.16874 -0.13,1.83 -0.82,1.76 -1.02,1.57 -1.1,0.83 -1.77,2.9 -1.36,4.89 -2.66,2.45 -0.48,1.1 -0.61,3.01 0.72,3.61 0.77,1.06 0,1.7 -1.61,1.66 -0.26,4.61 -0.97,1.67 0.13,3.45 -0.78,1.94 -2.05,2.57 -0.26,3.02 -1.61,1.04 -1.44,2.61 -5.87,1.16 -4.18,5.88 0.15,0.98 1.54,1.62 0.04,0.64 -1.15,2.74 -1.85,1.39 -0.03,1.77 0.69,1.6 2.69,1.33 1.01,1.59 -2.16,3.09 -0.13,2.25 -0.54,1.29 0.27,1.11 -1.08,1.47 0.33,0.78 -0.22,1.41 0.43,0.63 -0.74,2.2 -1.02,1.64 -0.97,-0.13 -1.7,1.32 -8.01,0.82 -2.75,2.16 -1.62,0.29 -3.76,3.39 -3.76,1.98 0.09,1.34 2.37,0.27 0.49,0.42 0.09,7.48 -0.73,0.69 -0.83,4.41 0.84,2.07 -1.16,4.03 0.3,1.32 -2.81,4.8 -2.64,2.3 -0.01,1 0.71,0.99 -0.82,2.05 1.27,3.92 -1.13,1.85 -1.09,0.38 -1.67,-0.23 -1.46,0.54 -0.57,1.1 -0.16,2.73 -0.98,0.74 -0.99,1.85 -2.18,0.19 -3.4,2.76 -0.83,0.12 -5.88,-1.64 -0.66,0.66 -0.24,1.71 -1.18,1.16 -0.81,3.05 -1.77,2.34 -2.33,0.14 -1.12,0.89 -2.47,-0.28 -1.85,1.21 -1.91,0.33 -0.72,0.82 -0.68,4.04 1.44,5.22 0.58,5.77 -0.06,1.04 -0.77,0.56 -2.43,4.51 0.62,2.51 0.22,3.73 -4.13,6.35 -3.49,3.09 -1.76,3.01 -0.48,2 -1.12,1.47 -0.41,3.45 -1.11,1.56 0.69,6.14 0.65,1.8 -2.93,1.48 -1.96,0.27 -2.75,3.14 0,0 -1.22,-0.88 0.05,-1.56 -1.94,-4.62 -0.38,-3.54 -0.74,-1.73 0.58,-5.49 -1.04,-2.02 -2.15,-2.6 -4.32,-3.84 -2.5,-3.15 -1.52,-1.12 -1.42,-0.43 -1.64,0.38 -2.83,4.01 -2.72,1.99 -2.71,-2.45 -2.91,-4.7 -2.52,-6.73 0.82,-1.58 4.14,-4.78 3.8,-3.22 5.08,-5.48 8.63,-11.52 6.12,-5.22 0.44,-2.08 -0.38,-5.78 5.99,-11.44 1,-3.62 -0.26,-1.81 -2.02,-3.84 -4.14,-1.47 -2.66,-2.94 -0.34,-3.84 0.46,-2.17 -5.26,-9.82 -2.08,-1.29 -4.65,-1.08 -1.46,-1.92 -5.45,-10.18 0,0 6.2,-0.91 3.37,-1.43 9.4,-5.66 5.75,-4 1.1,-2.33 -0.52,-3.7 0.68,-10.23 0,0 6.34,0.97 2.7,-0.19 4.57,-1.32 1.74,-1.07 1.7,-1.9 3.73,-5.55 6.2,-7.06 2.51,-0.87 6.29,-0.49 5.9,-2.22 2.44,-2.62 0.82,-2.66 3.32,-0.14 2.35,-1.14 2.22,-3.7 2.1,-2.16 2.51,-1.47 8.52,0.79 2.87,1.03 2.58,1.55 2.84,3.11 2.43,1.15 2.38,1.02 4.39,-0.01 1.14,-1.22 1.48,-7.76 2.71,-5.68 1.22,-3.64 0.88,-4.1 0.28,-8.01 3.09,-0.43 0.62,0.74 3.75,1.14 3.86,-0.29 5.62,-1.74 0,0 z"
 title="Adamawa"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-AD" />


<path
 d="m 302.91165,585.31874 0,0.01 0,0 -0.02,-0.02 0,0 0.02,0.01 z m 7.57,-0.7 0.97,0.5 0.92,-0.19 0.88,-0.14 0.33,0.28 -3.58,0.75 -0.49,-0.59 0.97,-0.61 z m 40.31,-7.56 0.88,2.09 -0.76,0.82 -1.07,0.22 -0.22,-1.24 0.56,-0.1 0.35,-0.9 0.26,-0.89 z m -51.56,-11.07 -0.12,-1.85 -1.79,-3.36 0.67,-1.63 -0.02,-1.17 -0.59,-0.67 -0.22,-1.47 0.47,-0.65 -0.09,-0.77 2.52,-1.94 1.18,-2.89 -0.66,-2.49 0.02,-2.41 1.21,-5.81 -1.07,-1.94 0.07,-0.75 1.1,-0.98 6.09,0.16 0.73,-0.9 0.7,-2.44 -2.23,0.16 -0.32,-0.45 1.84,-5.1 -0.53,-3.51 0.29,-0.91 2.42,-0.14 3.4,0.91 1.19,1.47 0.58,2.11 2.75,2.14 2.54,0.84 2.69,2.61 0,0 -0.85,0.1 -1.15,2.45 0.66,1.79 0.84,0.31 0.78,1.94 4.77,-0.56 4.96,2.68 0.4,2.1 -0.61,6.1 1.63,5.13 3.41,4.91 3.19,2.8 3.77,4.33 3.67,2.81 0.59,1.01 0,0 -0.43,2.16 0.79,0.44 0.03,2.5 -0.5,0.45 -0.41,-0.67 -0.07,0.58 1.19,1.17 -0.6,1.8 -0.74,0.19 0.1,1.03 -1.03,1.15 0.24,0.17 -1.05,2.38 -5.23,-0.63 -5.74,-0.07 -10.71,0.55 -12.05,1.68 -0.52,-0.46 -1.82,0.36 -0.93,-0.48 -0.88,0.36 -0.95,-0.09 -0.02,0.03 0.5,0.81 0.27,0.43 -3.32,1.32 -0.98,-1.7 -1.17,-0.65 -0.86,-0.19 -0.96,-1.06 0.38,-0.91 -0.09,-0.12 -0.53,0.5 -0.5,-0.38 0,0 -0.61,-1.17 0.04,-0.64 0.51,-0.32 -0.58,-4.55 0.96,-4.27 -0.63,-2.3 -1.98,-3.47 z"
 title="Akwa Ibom"
  fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-AK" />


<path
 d="m 262.67165,444.90874 0.44,0.4 0.09,3.62 3.83,-0.13 2.44,1.41 2.05,0.08 3.73,1.7 0.36,0.79 -1.25,3.45 -0.75,1.08 -1.69,1.14 -1.85,2.48 0.24,0.96 -0.62,0.83 -0.43,2.35 0.39,0.54 3.85,1.16 1.42,1.8 1.34,3.64 1.31,1.85 -0.3,0.96 -0.82,0.29 0.41,1.37 -0.5,1.62 0.72,0.74 1.89,-1.13 0.61,0.13 0.59,2.58 1.33,0.63 -0.35,2.15 1.88,3.79 0.18,1.51 0.76,0.98 2.39,1.4 1.66,-0.96 1.08,0.09 1.12,0.74 -0.04,0.54 0.83,0.17 0,0 -4.4,2.31 -1.36,1.3 -1.27,2.22 0,0 -5.32,1.42 -5.38,-1.25 -6.31,1.16 -1.78,1.04 -0.93,3.55 -2.37,4.61 -2.68,0.27 -4.51,-1.92 -1.62,0.8 -3,3.83 -2.09,0.83 0,0 -2.4,-0.21 -1.11,-1.28 0,0 1.01,-1.17 1.92,-3.9 0.34,-2.64 1.77,-4.69 2.5,-4.55 0.38,-6.01 1.28,-3.65 -1.23,-3.77 -1.48,-7.29 0.08,-1.37 -1.13,-1.13 -2.13,-9.57 0,0 -0.07,-0.29 0,0 1.67,-0.77 3.59,0.66 1.43,-0.89 1.84,-2.51 0.06,-2.73 1.24,-4.12 2.24,-2.31 1.54,-0.86 z"
 title="Anambra"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-AN" />


<path
 d="m 491.94165,87.518745 7.74,6.19 1.14,2.93 0.77,7.079995 -0.19,1.81 3.16,4.66 0.21,6.74 0.33,2.7 0.95,2.71 0.2,3.87 8.35,20.91 -0.23,4.92 -1.05,2.72 -0.99,6.78 1.63,1.53 3.04,0.37 0,0 -0.8,0.24 -2.71,3.76 -6.04,3.28 -2.57,3.7 -2.01,1.75 -1.49,0.76 -3.91,0.88 -1.44,1.36 -1.38,2.03 -0.97,4.94 -2.61,7.43 -3.61,5.07 -0.2,1.38 7.38,2.99 1.14,1.71 0.87,7.15 0.88,1.15 7.2,2.62 2.08,4.94 -0.48,8.63 0.4,2.86 -0.83,1.76 -3.9,0.63 -1.99,0.92 -1.31,1.91 0.33,1.62 4.29,4.38 2.5,1.41 9.15,7.09 1.23,3.79 0.61,6.19 2.58,5.28 1.69,2.12 -0.13,0.95 -0.58,0.16 0,0 -3.99,-0.03 -6.44,-1.09 -10.59,4.85 -5.85,-0.78 -4.59,2.65 0,0 -6.36,-3.43 -6.18,-4.04 -11.07,-4.74 -9.26,-4.93 -2.57,-0.51 -7.6,-3.95 -3.03,1.78 -0.3,1.44 3.17,4.06 0.27,1.74 -0.5,1.67 -4.76,1.3 -2.89,5.21 -4.39,1.41 -10.04,0.59 -5.47,-1.48 -4.8,-0.27 -1.51,-0.53 -1.56,-1.34 -1.65,-4.07 -0.9,-1.16 -0.79,-0.71 -3.92,-1.42 -0.6,-0.85 0.09,-1.69 2.38,-4.47 0.23,-1.17 -0.26,-5.94 -0.97,-3.13 -1.8,-1.92 -1.06,-0.21 -10.97,2.19 0.04,-12.38 -0.78,-4.8 -2.61,-4.16 -2.78,-0.88 -3.18,-0.08 -1.53,0.49 0,0 -2.53,-2.71 -2.79,-1.75 -0.27,-0.73 2.35,-4.2 0.53,-3.96 0,0 0.99,-0.56 2.59,-4.09 1.33,-3.85 -0.08,-2 -0.77,-1.67 -3.86,-4.33 -0.45,-1.99 -0.4,-6.89 0.45,-3.5 1.6,-4.57 1.02,-0.43 2.7,0.16 2.04,-0.51 2.74,-3.21 2.65,-4.11 4.74,-4.17 0.67,-1.1 2.48,-1.57 1.69,-0.3 1.14,1.07 1.14,0.09 5.52,-2.17 0,0 1,-0.19 6,1.1 7.43,2.41 3.35,-1.46 2.3,0.73 1.78,3.67 3.13,0.21 7.7,-0.48 3.57,-0.91 1.14,0.3 2.67,4.9 0.54,2.15 -0.83,7.85 0.81,2.05 1.35,1.36 5.7,1.19 5.6,-1.39 1.56,0.17 1.86,1.36 2.46,0.62 1.86,-0.57 -1.11,-3.43 0.04,-1.8 1.53,-1.91 2.53,-1.36 4.04,-0.99 1.44,-0.78 1.85,-1.39 1.1,-2.72 -1.04,-1.46 -8.87,-0.56 -5.72,-1.27 -6.39,-0.77 -2.99,-1.85 -5.3,-7.42 -1.05,-2.5 -0.47,-2.57 -3.84,0.94 -1.18,-1.11 -0.55,-1.74 2.51,-5 -0.52,-4.32 -1.46,-4.42 -1.81,-0.5 -2.75,0.27 -2.12,1.03 -2.61,0.04 -1.35,-0.63 0.49,-4.26 3.22,-4.54 6.16,-0.46 5.47,-3.04 10.94,-3.73 6.23,-2.51 1.19,-0.94 -0.03,-2.25 -0.57,-1.88 6.71,-20.589995 4.54,-1.95 3.48,-0.55 0.99,0.82 0.83,1.64 0.12,1.39 z"
 title="Bauchi"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-BA" />
<path
 d="m 309.66165,367.75874 9.13,2.48 8.51,1.25 8.71,3.55 4.92,2.82 5.25,0.99 1.07,-0.14 3.32,2.8 5.33,2.23 1.14,-1.1 0.09,-1.36 -4.7,-11.64 -0.08,-2.52 1.02,-2.86 1.24,-1.41 3.95,-2.2 1.38,-0.28 2.59,-0.18 2.68,0.44 10.09,3.72 6.86,1.55 4.88,0.41 3.96,-0.22 0.01,-0.7 11.79,8.93 0,0 -3.79,5.97 1.9,0.57 6.12,-2.63 7.47,-0.95 8.18,0.48 7.48,1.77 5.14,4.9 4.44,5.65 8.37,7.57 -0.14,0.65 1.17,1.36 -0.26,1.04 0.56,1.78 -0.59,3.23 -2.38,5.89 0.29,5.92 -0.92,1.43 -3.09,1.94 -3.44,3.25 -3.31,6.16 -2.11,11.5 0.61,0.73 -0.33,1.08 -0.03,8.76 -1.9,8.19 0,0 -0.72,0.3 -2.12,-0.73 -0.78,1.42 0.1,2 -2.82,1.74 -1.79,0.22 -2.78,-0.44 0,0 -0.65,-1.55 -4.88,-6.63 -5.53,-5.73 -1.49,-0.72 -3.09,-0.22 -9.57,2.24 -4.38,-0.44 -1.21,-0.89 0.66,-4.77 -0.56,-1.64 -8.64,-5.38 -5.43,-1.69 -2.11,-0.07 -2.31,0.59 -2.11,0.67 -1.52,1.2 0.77,4.5 -3.14,1.92 -3.13,0.83 -3.84,-0.14 -2.06,-0.67 -1.92,0.45 -1.36,1.75 -2.36,1.96 -2.99,0.49 0,0 -1.7,-2.27 -0.84,-4.26 -1.76,-1.3 -1.02,2.31 -3.41,0.37 -1.77,2.88 -1.92,0.93 -2.95,-0.25 -3.45,0.4 -1.25,8.23 -0.99,2.05 -1.41,0.59 -1.78,-0.74 -4.01,-3.68 -0.65,-1.54 0.17,-0.91 0,0 2.28,-6.42 -0.9,-5.62 -1.42,-2.14 -1.52,-1.15 -2.81,-0.35 -2.21,2.11 -2.1,0.73 -2.92,-1.52 -3.58,-2.76 -2.89,-3.35 -2.74,-6.51 0.13,-0.53 0,0 0.41,-0.5 0.84,0.58 3.37,3.29 0.82,-0.1 1.35,1.05 1.76,0 0.34,-4.42 0.96,-1.44 6.44,-3.12 3.3,-3.11 1.94,-5.83 0.42,-3.93 0.47,-1.29 1.23,-1.21 0.36,-1.81 -1.48,-0.47 -3.31,0.32 -1.27,-1.05 -1.24,-5.53 -0.57,-6.81 -0.01,-6.9 -0.73,-1.85 -2.7,-2.61 -1.88,-3.22 -0.54,-5.87 z"
 title="Benue"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-BE" />
<path
 d="m 662.15165,11.078745 0.7,5.65 -0.83,3 3.49,6.26 -0.2,2.52 -0.46,0.49 0.28,-2.17 -1.04,1.33 -0.22,1.92 2.38,2.55 2.46,0.61 -0.65,0.67 0.28,0.54 0.78,0.19 4.46,7.53 2.83,3.08 1.05,0.22 1.72,0.96 1.63,1.2 3.87,0.75 0.26,0.86 -0.58,-0.01 -0.56,1.1 -0.2,-1.04 -0.66,0.58 -0.74,-0.04 1.44,1.6 0.27,1.76 3.88,-1.16 2.31,-2.61 2.47,-2.02 1.6,-0.67 -1.08,1.76 0.15,0.45 0.65,-0.19 0.57,2.34 -0.33,0.22 -0.67,-1.38 -0.85,0.48 -0.57,1.23 -2.02,0.57 0.67,1.88 -1.19,1.13 -1.86,3.73 0.41,0.77 1.37,-0.45 -0.07,2.44 -0.58,1.15 0.85,0.04 -0.34,1.36 -1.15,1.54 0.4,0.57 1.57,-0.43 0.29,0.55 -2.63,1.39 1.97,0.5 -0.15,0.89 1.2,0.05 -0.75,0.85 -1.32,0.33 0.12,0.42 1.24,-0.23 0.12,0.6 -0.48,0.44 -0.23,-0.37 -1.01,0.23 0.24,0.75 0.74,-0.12 -0.85,1.67 1.51,0.21 0.22,1.34 -0.57,0.74 0.26,1.25 0.97,0.22 0.53,1.21 -0.24,1.15 1.95,0.55 0.34,1.46 0.61,0.52 1.61,-0.95 0.46,0.2 0.71,1.91 1.22,0.71 0.31,1.08 2.16,0.77 -0.03,1.1 0.67,1 -0.37,1.19 0.71,0.64 1.11,0.55 1.41,-0.5 2,0.26 -0.27,1.04 0.83,0.06 0.39,-0.69 1.81,-0.07 1.47,-0.81 2.46,-0.08 0.17,1.22 1.07,0.09 -0.12,0.91 -1.25,0.32 0.22,0.53 -0.38,0.64 0.95,0.28 2.25,2.61 3.42,-0.53 1.03,-0.05 0.43,0.81 1.72,-0.87 2.93,0.87 3.5,-0.35 0.68,0.31 0.85,0.12 1.61,0.34 0.79,1.2 1.27,0.34 0.34,0.87 -0.67,0.02 0.08,1.119995 2.17,1.01 0.7,1.37 -0.72,1.39 2.99,0.77 0.76,1.5 -0.54,0.46 1.13,0.54 0.78,0.12 0.12,-0.49 0.97,-0.08 0.51,-0.51 1.33,2.51 -1.37,1.29 -0.32,1.8 -0.74,0.87 0.68,2 -1.72,1.16 -0.06,1.57 2.2,3.78 -1.21,1.74 0.23,1.35 -2.32,2.77 0.01,1.5 0.29,3.79 -0.7,1.23 -2.81,2.15 -0.06,0.55 1.26,1.72 2.01,1.13 2.16,2.18 0.44,2.16 -0.62,4.68 -1.26,0.93 -6.36,2.57 -3.88,0.9 -1.7,3.09 -8.09,3.17 -3.28,2.07 -1.93,2.65 -4.46,1.94 -2.32,0.04 -2.72,-2.37 -2.52,-0.44 -1.07,-0.83 -1.07,0.16 -0.61,0.76 -0.58,2.32 -2.08,2.36 -0.78,2.68 -0.72,1.05 -1.46,0.96 0.24,1.49 -0.65,0.21 -1.08,1.68 -2.32,2.04 -1.21,2.91 -3.24,1.61 -2.42,0.54 -0.77,0.75 -0.19,1.74 0,0 -5.62,1.74 -3.86,0.29 -3.75,-1.14 -0.62,-0.74 -3.09,0.43 -0.28,8.01 -0.88,4.1 -1.22,3.64 -2.71,5.68 -1.48,7.76 -1.14,1.22 -4.39,0.01 -2.38,-1.02 -2.43,-1.15 -2.84,-3.11 -2.58,-1.55 -2.87,-1.03 -8.52,-0.79 -2.51,1.47 -2.1,2.16 -2.22,3.7 -2.35,1.14 -3.32,0.14 -0.82,2.66 -2.44,2.62 -5.9,2.22 -6.29,0.49 -2.51,0.87 -6.2,7.06 -3.73,5.55 -1.7,1.9 -1.74,1.07 -4.57,1.32 -2.7,0.19 -6.34,-0.97 0,0 -3.91,-2.2 -1.81,-1.6 -3.13,-6.17 -5.66,-2.34 -1.83,-1.82 -2.43,-3.51 -0.81,-2.83 5.18,-7.56 0.62,-3.02 -1.35,-3.3 0,0 3.04,-0.69 3.41,-4.53 -0.28,-8.39 0.61,-2.77 1.72,-2.83 2.66,-1.92 11.21,-3.02 6.11,-3.65 2.09,-3.08 0.24,-2.94 -0.76,-4.15 -0.04,-2.97 0.9,-2.86 2.89,-3.35 3.3,-5.9 4.54,-4.43 0.99,-2.11 -0.84,-3.33 -3.13,-3.75 -4.91,0.21 -0.64,-0.36 -0.15,-1.94 4.72,-9.14 -1.69,-7.44 0.13,-3.5 2.54,-16.29 0.05,-5.789995 -1.72,-3.83 0.55,-2.2 7.06,-6.31 2.37,-3.08 1.84,-4.21 -0.48,-3.74 -4.8,-3.84 -1.45,-1.82 -1.23,-3.85 1.49,-8.02 0.08,-4.21 0,0 1.45,-0.12 4.38,0.88 0.03,-1.19 0.59,-0.41 0.07,-0.74 0.19,-1.71 1.48,-1.33 1.14,0.24 1.35,-0.73 -0.34,-1.16 0.73,-1.08 -0.23,-0.32 -0.89,-0.19 0.4,-1.13 0.77,-1.33 0.8,-1.78 0.64,-0.6 2.28,0.35 1.38,-0.87 0.96,0.09 0.61,0.74 0.96,-1.11 0.23,-1.44 1.34,-0.23 1.47,-0.29 0.29,-0.46 -0.34,-0.4 0.98,-1.17 2.11,-0.48 0.62,-1.24 1.37,-0.78 0.16,-0.79 0.58,-0.74 0.4,-0.74 -0.02,-0.86 1.1,-0.43 0.43,-1.02 -0.81,-0.31 0.57,-0.61 1.23,0.63 -0.29,-1.57 1.1,0.12 0.06,0.47 0.85,0.29 1.1,-0.14 1.87,-1.67 1.02,-0.37 0.32,0.38 1.98,-0.1 1.39,-1.33 1.02,0.49 0.05,-1.08 1.08,-0.36 1.02,0.09 -0.89,1.17 1.47,0.79 0.92,-1.31 1.35,1.04 -0.2,-1.31 1.48,-0.51 -0.31,2.08 0.92,0.12 0.45,-0.97 1.15,-0.25 0.92,1.39 0.96,-2.53 1.66,-0.84 0.02,-0.44 -0.55,-0.19 0.19,-0.71 1.19,0.2 0.64,-0.8 -0.64,-0.17 -0.4,-1.02 1.68,-1.6 -0.06,-0.58 1.49,-0.67 -0.05,-0.93 1.05,-1.06 1.24,-0.24 0.39,-1.06 z"
 title="Borno"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-BO" />
<path
 d="m 251.22165,579.30874 -0.21,-0.62 -0.68,0.1 -3.96,-2.6 -1.2,-4.38 -1.38,-1.87 -1.99,-0.02 -6.54,2.54 -1.04,-0.26 -0.35,-1.94 0.42,-1.46 -3.31,-1.44 -0.5,-0.83 0.07,-4.34 1.9,-2.67 0.76,-2.05 0.03,-1.27 -1.29,0.16 -0.84,-0.78 1.33,-4.44 4.49,-7.84 2.77,0.17 0.55,-0.5 0.75,-2.49 1.54,-0.79 -0.23,-1.81 1.58,-1.07 0.95,-1.48 -0.03,-1.94 -0.63,-1.54 -0.76,-0.58 -1.92,-0.83 -2.94,0.49 -1.04,-0.28 0.77,2.47 -1.2,0.85 -5.08,2.19 -3.49,-0.44 -2.74,0.49 -2.01,4.1 -2.11,0.52 -0.79,-0.6 -1.47,-0.08 -0.36,0.95 0.26,2.31 -2.83,1.56 -1.62,0.56 -3.01,-0.24 -1.23,1.99 -2.31,0.62 -1.89,-0.67 -0.99,-1.66 -2.11,-1.28 -0.75,0.5 -1.48,3.07 -3.3,1.64 -2.62,-0.42 -7.48,4.1 -0.94,-0.37 -2.32,0.4 -1,-1.1 -2.69,-1.6 -3.05,-0.71 -2.9,-1.66 -2.1,-2.1 -0.56,0.72 -0.72,-0.57 -1.43,0.53 -0.36,-0.5 -1.63,0.84 2.36,4.61 1.91,5.81 -0.34,0.79 0.95,1.52 0.35,1.86 4.06,6.77 0.19,1.44 0.94,0.55 0.01,0.17 0.05,1.1 7.5,10.38 1.19,0.62 -0.02,0.75 2.77,1.35 -0.27,0.41 1.05,0.75 0.12,0.65 2.56,1.59 0.19,-0.39 0.31,0.34 -0.22,0.24 0.02,0.34 2.61,2.16 0.48,-0.02 -0.14,-0.77 -0.45,-0.21 1.58,-0.46 -0.76,0.7 0.33,0.72 -0.26,0.27 0.07,0.51 2.32,1.7 5.07,2.36 0.19,-2 -0.79,-0.51 -0.55,-1.25 0.34,0.12 0.29,0.89 0.79,0.22 -0.12,-0.7 0.41,0.03 -0.02,0.7 0.52,0.17 0.26,0.77 -0.62,1.18 0.26,0.43 -0.34,1.3 0.4,0.29 5.18,1.32 0.19,-2.23 0.65,-0.58 0.38,3.84 8.34,-0.7 -0.64,-2.4 1.03,-3.05 0.65,-1.1 -0.29,-1.37 -1.91,-1.15 0.48,-0.05 1.19,0.27 0.96,1.58 0.6,-1.13 -0.55,-0.79 0.09,-2.14 -0.84,-1.35 0.31,-0.74 0.17,1.03 0.69,0.55 0.03,0.38 0.74,2.02 -0.1,3.1 2.72,-2.47 -0.58,-0.63 0.1,-1.94 1.91,-0.6 0.5,-0.63 0.69,1.61 0.12,1.29 -0.48,1.03 0.6,1.32 0.05,1.61 1.34,0.26 1.08,1.51 0.48,-0.05 -0.19,0.33 0.22,0.43 2.17,-0.48 0.19,0.34 -0.62,0.65 1.53,0.79 8.46,-0.91 0.02,-0.48 -0.4,-0.51 -0.07,-0.77 -0.1,-0.34 0.67,-0.86 0.6,-0.58 -0.52,2.04 0.22,0.39 2.03,1.76 0.96,-0.98 3.53,-0.38 -0.5,-2.47 -0.09,-0.38 -0.38,-1.13 -1.15,-0.75 -0.19,-0.99 0.02,-0.19 0.29,-1.06 -0.53,-2.25 -0.41,-0.55 0.35,-0.36 0.76,0.9 1.25,4.2 0.38,-0.58 -0.65,-5.23 1.7,-3.39 0.26,-1.83 z m -78.3,-19.41 0,0 0.01,0.01 -0.01,-0.01 z m 59.51,37.48 -8.22,0.99 -2.8,-0.1 -0.22,-0.7 1.36,-2.52 0.15,-0.02 0.45,0.04 0.14,-1.3 1.98,-2.19 0.12,-0.31 0.43,-0.89 0.45,-0.19 -0.59,-0.77 -0.18,-1.3 0.55,-0.35 1.03,-0.19 0.9,1.34 -0.5,1.33 0.78,1.62 -0.22,1.57 1.63,0.44 0.65,0.92 2.11,2.58 z"
 title="Bayelsa"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-BY" />
<path
 d="m 348.48165,451.12874 2.99,-0.49 2.36,-1.96 1.36,-1.75 1.92,-0.45 2.06,0.67 3.84,0.14 3.13,-0.83 3.14,-1.92 -0.77,-4.5 1.52,-1.2 2.11,-0.67 2.31,-0.59 2.11,0.07 5.43,1.69 8.64,5.38 0.56,1.64 -0.66,4.77 1.21,0.89 4.38,0.44 9.57,-2.24 3.09,0.22 1.49,0.72 5.53,5.73 4.88,6.63 0.65,1.55 0,0 -2.17,8.34 -5.15,-2.21 -0.78,1.84 -0.02,1.98 -0.58,0.73 -1.08,0.94 -2.8,4.86 -3.23,0.94 -1.63,1.19 -1.2,1.18 -0.95,2.5 -0.99,0.97 -8.72,7.77 -3.81,2.73 -1.12,0.33 -1.64,2.3 -1.69,0.87 -1.3,1.48 0.4,0.86 1.36,1.04 -1.05,1.48 0.4,0.83 -0.45,0.96 -1.47,1.87 -0.57,-0.58 0.05,1.5 5.1,5.64 0.31,1.76 -2.4,4.05 -0.64,2.4 -1.12,1.36 0.21,3.89 -1.81,5.88 0.15,6.56 -2.54,4.2 -1.89,0.77 -0.08,0.84 -1.34,1.04 -1.22,3.3 -1.25,1.04 0.97,1.02 -0.9,0.35 -0.98,1.24 0.05,0.57 -1.01,0.38 0.09,1.76 -1.97,0.75 -1.02,1.25 -0.02,0.96 1.2,1.14 0.34,1.53 -2.42,1.46 -1.09,-0.24 -0.68,-0.72 -1.03,0.82 -0.64,1.52 -0.75,0.53 -0.16,1.47 0.67,0.07 0.6,-1.75 0.26,2.51 -0.36,0.56 -0.43,-0.67 -0.6,0.14 0.58,1.44 -1.48,0.27 0.06,0.76 -1.78,0.29 -1.47,-0.6 0.51,-1.77 1.07,-0.12 -1.27,-1.61 -0.8,1.22 -1.16,0.48 -2.07,-0.46 -0.65,-1.15 0.77,-0.7 0.21,-0.16 -0.31,-0.91 -1.36,0.41 -1.13,-0.63 -2.38,2.18 0,0 -0.59,-1.01 -3.67,-2.81 -3.78,-4.34 -3.18,-2.8 -3.41,-4.91 -1.63,-5.13 0.61,-6.1 -0.39,-2.1 -4.96,-2.68 -4.77,0.56 -0.79,-1.94 -0.83,-0.31 -0.66,-1.79 1.15,-2.45 0.85,-0.1 0,0 3.42,0.76 0.6,-1.21 -0.76,-2.55 -1.71,-2 -0.73,-1.68 -1.37,-4.63 -0.15,-3.78 0.59,-3.72 -1.08,-1.29 0,0 0.38,-2.39 2.34,-3.11 -0.36,-2.66 1.46,-1.26 0.34,-1.35 1.98,-2.29 0.08,-2.42 -1.14,-1.8 0.19,-0.98 2.27,-1.08 2.62,-0.18 2.69,4.5 1.34,-2.08 2.16,-0.77 2.2,-1.71 0.28,-1.31 1.88,-0.29 2.18,1.26 0.84,-0.91 0.68,-2.3 0.1,-2.59 0.8,-1.47 6.92,-8.39 0.02,-1.4 -1.86,-2.6 -0.01,-1.6 1.65,-1.63 2.19,-0.37 0.83,-1.7 -0.24,-1.05 -1.38,-1 -0.41,-1.5 -0.52,-0.37 0.1,-1.94 -1.28,-1.12 -0.5,-1.71 -2.7,-1.87 -1.99,-2.62 z"
 title="Cross River"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-CR" />
<path
 d="m 252.45165,479.95874 -1.48,-7.29 0.08,-1.37 -1.13,-1.13 -2.13,-9.57 -1.88,2.04 -4.1,-0.38 -3.73,0.81 -8.19,5.12 -7.35,3.1 -4.03,4.53 -0.64,0.05 -2.58,-3.94 -1.01,-0.42 -1.67,-0.31 -1.78,1.58 -0.89,2.03 -0.15,2.37 0.4,0.75 1.46,0.81 0.54,4.82 2.03,3.59 1.96,2.42 1.88,1.46 2.23,0.81 0.29,1.75 -0.7,3.24 -1.55,1.91 -1.63,1.66 -3.08,2.03 -2.29,3.07 -2.78,1.99 -1.81,0.6 -5.23,1.04 -2.13,-0.56 0.7,-1.8 -1.6,-1.61 2.04,-4.03 -0.47,-0.83 -3.91,-2.35 -2,-2.83 -4.67,-2.62 -3.17,-1.25 -1.64,-1.34 -5.12,1.85 -1.85,2.38 -1.77,-0.4 -2.27,-1.98 -1.38,-0.29 -3.17,0.67 -2.98,-0.72 -0.99,0.31 -0.63,0.3 -0.06,1.03 0.89,1.57 -0.52,1.06 -4.1,3.22 -1.66,0.07 -0.05,-2.47 -0.66,-2.55 0.7,-2.93 -0.15,-1.43 -1.66,-1.67 -5.43,-2.8 -6.9,16.74 2.48,4.48 1.39,0.88 0.58,-1.6 1.31,-1.25 7.76,-4.22 1.26,-0.22 1.85,-1.28 1.13,-0.54 0.36,0.51 -0.02,0.17 -2,0.95 -1.01,1.6 -0.07,0.26 -0.83,-0.53 -2.25,0.98 -3.18,2.51 -0.34,0.75 -1.98,-0.45 -1.05,0.82 -0.79,3.14 0.26,1.54 2.63,4.5 3.18,3.14 1.12,-0.53 3.01,-1.34 2.97,0.41 0.74,-3.16 1.15,-2.15 -0.02,-0.38 0.4,-0.3 0,0.01 0.38,0.12 -0.23,0.14 -0.24,1.9 -1.12,2.27 1,2.13 1.91,0.63 1.63,-0.27 1.58,-3.18 1.6,0.1 0.19,-0.25 0,0.01 2.99,1.54 1.12,0.67 0.19,0.48 -1.19,-0.34 0.27,0.77 0.1,1.32 -1.33,-0.35 0.97,-0.67 -0.33,-1.34 -1.12,-0.72 -3.13,-0.29 -0.6,0.14 0.09,1.63 -0.55,1.13 -2.34,1.97 1,-1.58 -1.79,0.15 -2.1,-0.55 -4.44,-0.67 -1.96,0.19 -0.12,0.84 -1.62,1.08 -1.26,1.67 2.77,3.96 3.04,2.61 6.04,2.63 5.09,0.29 0.02,-0.65 -1.19,-1.39 -0.95,-2.9 -0.26,-0.45 0.07,-0.74 0.47,-0.12 -0.19,0.82 1,2.2 0.83,-0.6 0.36,0 -0.07,0.22 -0.95,1.08 0.26,0.5 2.65,1.12 0.57,-0.21 1.65,-4.8 0.84,-1.46 0.96,-0.62 -0.64,-0.33 3.2,0.12 0.48,0.15 1.05,-0.46 0.46,-1.13 0.74,-0.38 1.12,0.17 0.95,0.91 0.61,-0.66 0.09,0.23 -0.12,0.75 -0.89,0.04 -1.38,-0.94 -1.01,1.68 -1.58,0.79 -1.81,-0.12 0.22,0.86 -0.96,-0.98 -1.32,0.36 -0.55,3.02 0.27,1.32 0.58,1.08 0.45,0.72 3.36,1.09 -0.3,0.8 -1.55,-1.12 -0.65,0.36 -0.03,0.7 -0.07,0.22 -0.49,0.13 0.32,-1.47 -0.31,-0.12 -0.43,-0.34 -0.45,-0.46 -0.45,0.48 -0.74,0.5 -0.36,0.53 -0.79,0.12 -1.12,0.57 0.91,0.46 2.05,-0.1 -2.97,0.96 -0.4,0.63 -1,-1.61 -0.6,0.05 -0.28,-0.02 -2.53,0.15 -1.17,0.63 -0.07,-0.39 -0.69,-0.07 -0.41,-0.31 -0.67,0.22 -0.83,-0.43 0.05,2.44 1.91,7.63 -0.24,1.66 2.08,2.26 2.05,-0.88 2.65,-0.17 -0.89,-1.35 -0.09,-1.12 0.15,-0.24 0.5,-2.38 0.29,-0.03 -0.15,0.6 0.15,0.41 -0.52,2.69 0.88,0.55 -0.1,1.53 -0.8,0.31 2.1,2.1 2.9,1.66 3.05,0.71 2.69,1.6 1,1.1 2.32,-0.4 0.94,0.37 7.48,-4.1 2.62,0.42 3.3,-1.64 1.48,-3.07 0.75,-0.5 2.11,1.28 0.99,1.66 1.89,0.67 2.31,-0.62 1.23,-1.99 3.01,0.24 1.62,-0.56 2.83,-1.56 -0.26,-2.31 0.36,-0.95 1.47,0.08 0.79,0.6 2.11,-0.52 2.01,-4.1 2.74,-0.49 3.49,0.44 5.08,-2.19 1.2,-0.85 -0.77,-2.47 -0.57,-1.04 0.21,-0.44 3.52,-1.81 0.19,-5.3 0.7,-1.48 2.05,-1.42 0.89,-1.75 0.82,-3.18 -1.09,-3.54 0.23,-0.35 1.01,-1.17 1.92,-3.9 0.34,-2.63 1.76,-4.69 2.5,-4.55 0.38,-6.01 1.27,-3.65 -1.18,-3.74 z"
 title="Delta"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-DE" />
<path
 d="m 319.74165,453.93874 -0.17,0.91 0.65,1.54 4.01,3.68 1.78,0.74 1.41,-0.59 0.99,-2.05 1.25,-8.23 3.45,-0.4 2.95,0.25 1.92,-0.93 1.77,-2.88 3.41,-0.37 1.02,-2.31 1.76,1.3 0.84,4.26 1.7,2.27 0,0 0.49,2.89 1.99,2.62 2.7,1.87 0.5,1.71 1.28,1.12 -0.1,1.94 0.52,0.37 0.41,1.5 1.38,1 0.24,1.05 -0.83,1.7 -2.19,0.37 -1.65,1.63 0.01,1.6 1.86,2.6 -0.02,1.4 -6.92,8.39 -0.8,1.47 -0.1,2.59 -0.68,2.3 -0.84,0.91 -2.18,-1.26 -1.88,0.29 -0.28,1.31 -2.2,1.71 -2.16,0.77 -1.34,2.08 -2.69,-4.5 -2.62,0.18 -2.27,1.08 -0.19,0.98 1.14,1.8 -0.08,2.42 -1.98,2.29 -0.34,1.35 -1.46,1.26 0.36,2.66 -2.34,3.11 -0.38,2.39 0,0 -1.34,-0.21 -3.21,-2.33 -0.7,-1.04 -0.22,-2.19 -1.24,-1.86 -14.09,-0.86 -0.94,-1.03 -0.05,-0.73 0.55,-2.86 -0.07,-4.36 0,0 3.63,-1.01 1.99,1.7 0.77,0.09 2.11,2.51 0.73,0.07 0.65,-1.44 -0.8,-2.92 -0.15,-2.64 2.67,-2.73 0.8,-1.73 -0.99,-6.64 -0.62,-2.55 -1.08,-1.07 0.02,-1.23 2.74,-6.11 0.01,-5.82 -0.65,-1.15 -0.38,-3.29 -1.48,-4.9 6.45,0.55 z"
 title="Ebonyi"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-EB" />
<path
 d="m 208.35165,395.48874 0.77,0.64 1.75,-0.37 0.7,0.36 0.28,0.68 -0.38,0.89 0.46,0.65 2.18,-0.25 0.27,0.8 -0.96,1.85 -0.23,1.93 0.28,1.05 1.08,0.78 2.13,0.53 5.94,-2.93 1.56,2.1 0.65,-0.07 1.26,1.41 0.55,-0.06 1.96,2.23 2.26,-0.19 0.74,-0.51 2.56,0.15 1.06,2.01 0.07,1.22 0.85,0.61 0.48,1.74 0.74,0.56 -0.24,0.51 0.66,1.63 3.75,-0.84 0.43,0.38 1.46,-0.99 1.87,-0.41 1.75,1.41 0.55,2.12 1.45,1.08 0.79,2.01 0.15,3.41 -0.31,1.92 -1.62,3.94 0.06,4.16 -1.91,4.82 -2.16,3.55 1.28,2.15 -0.93,5.52 0.89,2.6 1.41,2.01 1.03,6.03 0,0 0.07,0.29 0,0 -1.88,2.03 -4.09,-0.38 -3.73,0.81 -8.19,5.11 -7.35,3.1 -4.03,4.53 -0.65,0.04 -2.58,-3.94 -1.01,-0.41 -1.66,-0.32 -1.79,1.59 -0.89,2.02 -0.15,2.37 0.4,0.75 1.46,0.81 0.54,4.82 2.03,3.58 1.96,2.42 1.88,1.46 2.23,0.81 0.28,1.74 -0.69,3.24 -1.55,1.91 -1.62,1.66 -3.08,2.03 -2.3,3.07 -2.77,1.99 -1.81,0.6 -5.24,1.04 -2.13,-0.57 0.7,-1.8 -1.6,-1.61 2.03,-4.03 -0.47,-0.83 -3.9,-2.35 -2,-2.83 -4.68,-2.62 -3.16,-1.25 -1.64,-1.34 -5.12,1.85 -1.85,2.38 -1.77,-0.4 -2.27,-1.98 -1.38,-0.29 -3.17,0.67 -2.97,-0.72 -0.99,0.31 -0.64,0.3 -0.06,1.03 0.89,1.57 -0.52,1.06 -4.09,3.23 -1.66,0.07 -0.05,-2.47 -0.66,-2.55 0.71,-2.93 -0.15,-1.43 -1.66,-1.67 -5.43,-2.79 0,0 0.39,-1.16 -1.23,-2.26 -1.33,-1.04 -1.56,-0.09 -1.65,-2.94 -1.94,-1.36 -0.7,-0.06 -0.44,-0.91 0.25,-0.59 -0.28,0.44 0.8,-0.7 0.96,-3.63 0.58,-0.61 2.95,-0.87 0.84,-3.74 1.74,-1.71 0.84,-1.96 0.35,-1.72 -0.57,-1.45 -1.4,-2.28 -1.23,-0.64 0,-2.84 0.81,-0.98 -0.1,-2.22 0.49,-0.96 1.75,-1.62 0.45,-1.03 1.73,-0.8 0.79,-2.27 0.96,-0.69 0.09,-1.95 0.45,-0.78 2.2,-1.01 2.13,0.4 2.28,-0.38 1.68,0.36 6.64,0.11 3.29,-0.38 1.64,0.34 1.74,2.08 -2.01,2.26 2.1,5.46 0.74,-0.03 3.77,-3.16 1.34,0.12 1.19,1.48 0.81,0.35 2.68,-1.02 1.51,-3.39 0.95,-4.96 0.25,-0.25 1.19,0.51 0.01,-1.63 0.88,-0.52 -0.15,-0.81 -1.18,-1.28 0.61,-4.64 1.24,-1.66 1.52,-0.73 0.37,-0.85 -0.32,-0.84 3.23,-6.89 -0.15,-1.39 0.47,-1.04 1.76,-1.83 2.15,-1.05 1.43,-3.54 -0.43,-0.28 -0.77,-2.48 0.87,-2.89 -2.01,-0.82 -0.4,-0.84 0.18,-1.39 1.41,-1.72 1.56,0.14 0.89,-0.6 z"
 title="Edo"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-ED" />
<path
 d="m 148.66165,367.10874 0.41,-0.17 0.61,1.67 1.03,0.49 4.48,-1.25 0.95,0.37 1.47,2.06 0.95,0.49 2.33,-0.23 2.3,0.62 1.95,-0.58 1.29,0.55 1.04,-2.16 -0.29,-0.63 0.82,-2.22 4.11,-1.34 5.76,-0.09 0,0 -1.09,0.42 -0.03,4.28 0.55,0.45 2.48,-1.42 3.67,-0.64 2.31,0.27 0.56,0.7 -0.28,1.37 -1.34,0.64 -2.29,3.01 -0.08,1.56 1.32,3.75 1.32,0.96 1.28,0.03 1.85,1.69 6.82,2.39 0,0 -1.52,2.4 -0.82,0.3 -1.5,-1.25 -1.86,0.39 -0.85,2.06 -2.18,1.45 -2.4,2.48 -1.13,2.14 -1.71,8.1 -1.7,3.92 -3.05,4.43 -5.53,3.49 -2.27,-0.59 -1.09,-2.68 0.16,-0.86 -1.04,-3.19 -1.42,-2.22 -1.55,-0.52 -6.97,0.31 -7.78,-0.44 -4.55,1.45 0,0 -0.83,-1.7 -0.84,-3.79 -2.85,-6.11 -0.69,-4.78 1.19,-3.99 -0.81,-2.81 0.12,-1.4 1.9,-4.25 1.62,-1.5 2.18,-0.94 1.99,-1.64 z"
 title="Ekiti"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-EK" />
<path
 d="m 262.67165,444.90874 2.73,-5.01 0.91,0.25 0.18,2.28 0.74,0.05 1.33,2.01 0.69,0.34 1.24,-0.33 4.97,-5.39 5.98,-3.86 6.18,-7.42 2.44,-0.91 2.14,-2.1 3.31,-0.76 2.44,0.75 1.11,1.62 0,0 -0.13,0.53 2.74,6.51 2.89,3.35 3.58,2.76 2.92,1.52 2.1,-0.73 2.21,-2.11 2.81,0.35 1.52,1.15 1.42,2.14 0.9,5.62 -2.28,6.42 0,0 -1.79,0.36 -6.45,-0.55 1.48,4.9 0.38,3.29 0.65,1.15 -0.01,5.82 -2.74,6.11 -0.02,1.23 1.08,1.07 0.62,2.55 0.99,6.64 -0.8,1.73 -2.67,2.73 0.15,2.64 0.8,2.92 -0.65,1.44 -0.73,-0.07 -2.11,-2.51 -0.77,-0.09 -1.99,-1.7 -3.63,1.01 0,0 -0.33,-1.46 -2.05,-1.34 -2.71,-0.27 -4.83,0.89 -0.6,-0.77 0,0 -0.83,-0.17 0.04,-0.54 -1.12,-0.74 -1.08,-0.09 -1.66,0.96 -2.39,-1.4 -0.76,-0.98 -0.18,-1.51 -1.88,-3.79 0.35,-2.15 -1.33,-0.63 -0.59,-2.58 -0.61,-0.13 -1.89,1.13 -0.72,-0.74 0.5,-1.62 -0.41,-1.37 0.82,-0.29 0.3,-0.96 -1.31,-1.85 -1.34,-3.64 -1.42,-1.8 -3.85,-1.16 -0.39,-0.54 0.43,-2.35 0.62,-0.83 -0.24,-0.96 1.85,-2.48 1.69,-1.14 0.75,-1.08 1.25,-3.45 -0.36,-0.79 -3.73,-1.7 -2.05,-0.08 -2.44,-1.41 -3.83,0.13 -0.09,-3.62 z"
 title="Enugu"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-EN" />
<path
 d="m 287.74165,288.29874 6.12,-0.63 3.2,0.32 1.52,0.85 1.13,-0.85 1.81,-3.04 1.06,-0.54 1.07,0.43 1.47,3.11 0.94,0.31 1.18,-0.79 0,0 -0.07,2.44 -0.42,0.62 -1.03,0.07 -0.53,0.61 -2.11,6.52 -0.08,5.62 0.51,2.19 -0.55,7 -1.98,5.27 -1.52,7.95 -0.79,0.36 -1.08,3.4 -1.04,1.64 -3.78,4.62 -6.96,3.64 -4.63,1.06 -2.91,1.2 -11.13,1.75 0,0 -1.4,0.46 -7.46,-0.15 0,0 -1.83,0.21 -1.42,-0.47 -1.95,-4.91 0.46,-1.37 -0.75,-30.21 0.36,-13.66 0.34,-0.38 2.68,-0.33 11.03,-0.47 1.76,0.63 9.19,8.1 0.94,-0.24 z"
 title="Federal Capital Territory"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-FC" />
<path
 d="m 517.00165,163.43874 0.91,-0.88 4.17,-1.51 4.04,0.17 2.98,1.01 2.18,1.29 8.49,6.26 4.75,6.4 3.42,3.58 -1,1.54 1.58,-1.02 3.68,3.38 0.67,4.87 -1.2,11.85 0.77,6.45 0.3,0.51 6.78,-0.01 0,0 1.35,3.3 -0.62,3.02 -5.18,7.56 0.81,2.83 2.43,3.51 1.83,1.82 5.66,2.34 3.13,6.17 1.81,1.6 3.91,2.2 0,0 -0.68,10.23 0.52,3.7 -1.1,2.33 -5.75,4 -9.4,5.66 -3.37,1.43 -6.2,0.91 0,0 -6.37,0.47 -12.46,-0.02 -5.9,0.6 -3.57,-0.71 0,0 0.58,-0.16 0.13,-0.95 -1.69,-2.12 -2.58,-5.28 -0.61,-6.19 -1.23,-3.79 -9.15,-7.09 -2.5,-1.41 -4.29,-4.38 -0.33,-1.62 1.31,-1.91 1.99,-0.92 3.9,-0.63 0.83,-1.76 -0.4,-2.86 0.48,-8.63 -2.08,-4.94 -7.2,-2.62 -0.88,-1.15 -0.87,-7.15 -1.14,-1.71 -7.38,-2.99 0.2,-1.38 3.61,-5.07 2.61,-7.43 0.97,-4.94 1.38,-2.03 1.44,-1.36 3.91,-0.88 1.49,-0.76 2.01,-1.75 2.57,-3.7 6.04,-3.28 2.71,-3.76 z"
 title="Gombe"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-GO" />
<path
 d="m 283.98165,497.48874 2.01,1.69 5.34,1.78 1.04,1.45 0.47,1.35 0.38,8.47 -1.23,0.77 1.51,2.44 -0.28,2.05 0.36,3.45 -0.43,2.01 -0.89,0.9 -1.18,3.04 -1.82,1.68 -2.1,3.87 -3.09,10.25 0,0 -2.57,0.95 -4.52,-1.13 -2.13,0.04 -4.15,1.06 -4.69,-1.11 -6.72,0.14 -2.14,-0.41 -2.16,-1.65 -1.72,-3.4 -1.84,-1.3 -0.26,-1.37 1.09,-2.76 0.52,-4.63 -0.45,-1.66 -2.12,-0.77 -3.46,0.67 -1.51,-0.44 2.75,-13.09 0,0 2.09,-0.83 3,-3.83 1.62,-0.8 4.51,1.92 2.68,-0.27 2.37,-4.61 0.93,-3.55 1.78,-1.04 6.31,-1.16 5.38,1.25 z"
 title="Imo"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-IM" />
<path
 d="m 434.10165,67.298745 1.79,1.18 6,0.73 3.14,-1.8 2.1,-3.99 5.32,-2.59 3.16,-0.63 2.82,-1.37 6.33,-1.96 2.21,1.25 2.13,4.78 0.69,4.35 1.46,2.53 1.12,-0.72 5.86,-1.86 4.99,2.22 2.03,-0.61 1.85,0.88 2.21,3.4 1.76,11.53 0.87,2.9 0,0 -11.06,6.93 -0.12,-1.39 -0.83,-1.64 -0.99,-0.82 -3.48,0.55 -4.54,1.95 -6.71,20.589995 0.57,1.88 0.03,2.25 -1.19,0.94 -6.23,2.51 -10.94,3.73 -5.47,3.04 -6.16,0.46 -3.22,4.54 -0.49,4.26 1.35,0.63 2.61,-0.04 2.12,-1.03 2.75,-0.27 1.81,0.5 1.46,4.42 0.52,4.32 -2.51,5 0.55,1.74 1.18,1.11 3.84,-0.94 0.47,2.57 1.05,2.5 5.3,7.42 2.99,1.85 6.39,0.77 5.72,1.27 8.87,0.56 1.04,1.46 -1.1,2.72 -1.85,1.39 -1.44,0.78 -4.04,0.99 -2.53,1.36 -1.53,1.91 -0.04,1.8 1.11,3.43 -1.86,0.57 -2.46,-0.62 -1.86,-1.36 -1.56,-0.17 -5.6,1.39 -5.7,-1.19 -1.35,-1.36 -0.81,-2.05 0.83,-7.85 -0.54,-2.15 -2.67,-4.9 -1.14,-0.3 -3.57,0.91 -7.7,0.48 -3.13,-0.21 -1.78,-3.67 -2.3,-0.73 -3.35,1.46 -7.43,-2.41 -6,-1.1 -1,0.19 0,0 -0.08,-2.24 1.08,-3.72 7.12,-6.88 -0.89,-1.15 -2.09,-0.53 -2.83,-2.64 -1.48,-2.75 -0.5,-2 -1.09,-0.99 -5.06,0.15 -0.2,-1.96 0.5,-2.09 3.36,-4.69 0.19,-2.05 1.06,-1.84 -0.19,-2.46 -2.28,-7.18 -1.25,0.53 -1.47,1.75 -2.32,1.42 -1.82,0.18 -1.37,-0.25 -0.01,-2.57 -0.57,-1.44 -3.14,0.25 -1.9,1.19 0,-1.03 -1.65,-0.72 0.53,-1.72 1.18,-1.39 0.08,-5.61 -0.8,-2.94 -0.92,-0.81 -1.85,-0.56 -5.44,-0.56 -0.83,-0.42 -1.02,-1.389995 0.57,-2.01 -1.1,-3.08 -3.81,-2.12 -1.13,-1.38 -0.45,-5.92 -7.78,-2.02 -3.77,0.35 -3.99,1.93 -1.73,1.35 -0.62,2.6 -1.87,3.61 -1.07,-1.12 -0.1,-1.96 -3.51,-6.28 0,0 -1.24,-2.62 -0.83,-0.7 -4.94,-0.12 -2.86,-0.93 -0.59,-0.72 -0.07,-3.85 0.75,-3.4 -0.02,-2.69 0.46,-0.3 10.39,-1.38 5.37,0.99 9.22,-0.78 1.17,1.23 1.41,4.68 0.68,0.94 2.66,1.67 1.99,0.52 2.62,-1.51 0.64,1.56 1.49,0.7 3.68,-0.55 4.18,-1.74 3.19,-2.58 1.03,-2.63 0.58,-0.75 2,-0.88 0.01,-0.86 0,0 1.27,-0.39 10.06,0.44 9.02,1.42 5.24,-0.75 6.06,0.78 10.03,0.45 z"
 title="Jigawa"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-JI" />
<path
 d="m 316.55165,159.39874 3.09,0.02 2.44,-0.67 4.18,-3.83 4.8,-2.84 1.65,0 4.08,-1.24 1.22,0.19 1.13,0.82 0.32,1.25 -2.11,4.02 0.53,2.57 1.04,1.18 3.53,1.83 3.75,1.23 3.51,4.13 1.53,0.55 2.78,-0.03 2.45,0.59 5.38,4.43 3.59,6.42 0.38,3.88 -1.01,2.44 -1.01,4.91 1.2,6.05 -0.2,1.73 -0.72,1.1 -3.55,0.96 -0.55,0.79 0.6,2.08 1.06,1.07 7.02,0.97 1.98,2.75 1.6,1.05 3,0.64 1.05,-0.29 0,0 -0.53,3.96 -2.35,4.2 0.27,0.73 2.79,1.75 2.53,2.71 0,0 -0.37,0.29 -0.21,2.9 -0.55,1.43 -1.32,1.56 -2.19,0.73 -1.9,1.4 -2.13,4.97 -0.22,2.71 1.36,2.82 0.75,3.52 -2.39,1.97 -0.34,1.1 0.18,1.97 -0.7,7.81 0.53,2.1 -0.42,1.07 -1.91,1.55 -0.4,3.08 -1.76,1.28 0.21,4.74 -1.05,1.4 0.1,1.16 3.26,5.28 2.57,3.08 1.71,1.21 1,2.09 0.12,3.41 -1.67,3.94 0,0 -1.09,0.57 -2.65,5.61 -3.31,5.4 -0.82,0.72 -1.61,0.42 -2.47,-0.13 -0.6,-1.9 -5.34,-5.91 -3.81,-0.24 -1.5,-1.25 -1.33,-0.22 -1.29,0.98 -0.89,1.9 -4.16,4.75 -2.35,1.6 -1.15,0.21 -1.34,-0.96 -0.4,-1.31 0.05,-9.7 -1.03,-1.61 -4.22,-2.44 -0.32,-3.25 -2.93,-2.67 -1.1,-0.39 -1.01,0.35 -1.65,2.12 -0.94,2.54 -2.31,2.1 -1.1,0 -1.75,-1.06 -1.34,0.25 -2.44,-1.79 -0.93,-0.14 -1.5,0.61 -0.7,-0.79 -0.6,-1.88 -0.75,-0.11 -1.34,1.02 0,0 -1.18,0.79 -0.94,-0.31 -1.47,-3.11 -1.07,-0.43 -1.06,0.54 -1.81,3.04 -1.13,0.85 -1.52,-0.85 -3.2,-0.32 -6.12,0.63 0,0 -1.23,-0.42 -2.46,0.6 1.38,-4.13 -3.39,-2.78 0.09,-2.32 0.56,-0.93 2.45,-1.29 0.79,-0.87 0.6,-2.79 3.09,-3.17 -0.58,-1.88 -3,-1.62 0.83,-3.02 -3.62,-1.36 -1.13,-0.77 -0.17,-0.91 0.29,-0.64 0.88,-0.42 3.23,-0.41 0.63,-1.51 -0.1,-3.09 -0.92,-3.88 -0.16,-5.06 -0.33,-1.01 -1.37,-0.67 -12.87,0.08 -6.67,-2.49 -1.71,-1.66 -1.03,-1.98 0.91,-1.24 2.17,-1.36 1.62,-1.68 0.85,-1.48 4.24,-2.6 1.02,-1.79 0.31,-1.98 -3.23,-1.75 -4.83,-1.66 1.35,-4.14 0.05,-2.57 -1.98,-3.8 -1.61,-0.44 -2.25,0.67 -1.39,-0.14 -0.28,-4.5 -0.48,-1.92 -0.61,-0.51 -4.73,-0.5 -1.18,1.2 0.67,2.39 -0.64,0.98 -3.97,-0.56 -7.63,2.86 -1.04,-2.66 -1.02,-1 -2.91,0.13 -2.1,0.61 -2.46,1.5 -5.59,4.5 -5.38,7.01 -1.41,0.89 -1.43,-0.6 -1.22,-3.52 -3.05,-2 -0.22,-1.37 0.33,-2.31 1.84,-1.8 -0.24,-3.81 0.74,-2 -0.14,-1.48 -1.44,-2.38 0.4,-4.79 3.04,-5.38 0,0 1.68,-0.12 1.28,-0.76 2.86,-4.16 5.27,-4.71 5.64,-0.95 7.94,0.57 4.71,-0.62 2.33,-1.51 3.04,-3.1 1.51,-3.23 0.64,-3.55 1.71,-3.41 0.85,-1.14 2.75,-1.77 2.34,-2.38 1.01,0.03 0,0 4.41,0.88 1.94,-0.18 1.36,0.9 0.79,1.74 -0.23,1.07 -2.89,2.69 -0.39,1.32 6.35,1.93 4.25,4.29 1.75,0.23 2.69,-1.52 1.38,-1.91 -1.81,-3.36 -0.12,-2.04 3.45,-1.09 1.95,0.11 2.77,1.1 1.4,-0.09 0.58,-0.54 -0.01,-1.39 1.2,-2.97 3.06,-2.59 1.39,-0.28 6.78,2.29 2.05,1.73 0.97,1.58 1.57,0.78 5.62,-2.24 0.84,-2.05 z"
 title="Kaduna"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-KD" />
<path
 d="m 90.771651,42.718745 6.62,-0.14 1.86,0.74 4.629999,-1.58 0.76,0.31 1.65,2.12 3.19,1.82 1.06,1.1 9.56,3.12 2.95,2.07 3.06,0.68 1.82,-0.43 0.63,-0.56 2.49,-3.69 1.16,-0.31 1.08,0.88 0.4,1.25 -1.62,3.93 0.09,2.4 -1.42,2.98 -0.42,3.7 1.86,2.15 1.8,4.28 -0.18,3.32 -1.3,6.06 0.04,2.04 1.68,5.52 -0.24,8.02 -0.64,1.56 -1.02,0.04 -3.17,-2.04 -2.68,0.02 -3.95,1.18 -1.28,1.48 -1.01,3.779995 -0.14,9.94 0.79,13.05 -2.12,9.79 -2.61,5.63 -1.16,4.77 2.55,3.65 0.76,0.51 2.78,0.29 1.71,-1.35 2.4,-3 12,-5.45 1.69,-0.12 1.89,0.86 2.04,-0.72 0.77,1.75 0.94,0.07 1.62,-0.97 0,0 0.86,-0.48 1.82,0 4.11,2.25 6.34,-1.46 0.82,-2.32 1.06,-0.62 0.79,-0.15 0.91,0.64 2.09,0.31 3.61,-0.65 1.08,0.57 1.69,3.3 2.87,0.11 3.65,2.41 5.47,-0.76 3.79,0.5 2.49,-0.59 1.22,-0.81 4.85,0.62 4.35,1.77 1.41,2.15 -0.01,2.47 -2.05,6.49 0,1.2 5.38,2.71 1.93,3.01 1.38,7.58 0.21,5.48 0,0 -1.36,-1.1 -1.85,-0.36 -3.42,2.76 -1.28,2.2 -3.93,0.41 -12.1,5.08 -10.67,0.69 -1.64,-1.25 -0.36,-4.02 0.37,-4.81 -0.48,-1.78 -3.75,-2.47 -0.81,-1.26 -0.98,-6.51 -1.69,-1.6 -2.84,-0.71 -3.64,-0.04 -9.86,1.59 -7.87,1.83 -4.43,1.62 -4.85,2.59 -1.37,2.07 0.16,1.54 0.87,1.26 3.63,2.01 5.4,2.19 5.36,0.53 1.05,2.01 1.71,-0.03 0.78,0.74 1.12,6.56 -0.25,1.07 -2.18,1.45 -0.63,1.47 0.49,1.45 2.74,1.63 1.17,1.36 -0.07,2.07 -1.01,1.49 -3.8,0.97 -5.22,2.64 -5,-0.52 -1.55,0.42 -0.9,0.75 -0.04,9.59 -0.45,1.37 1.25,2.83 1.81,1.97 1.86,3.03 0.75,2.44 -0.28,1.53 -1.77,2.13 -2.64,1.57 -3.38,0.26 -7.42,2.5 -0.5,5.85 -0.56,0.48 -4.32,-0.46 -1.42,-0.99 -0.02,-2.28 1.03,-3.28 0.29,-3.94 -2.93,-2.66 -1.12,-2.41 0.18,-6.32 1.46,-3.26 1.84,-2 1.48,-1.01 3.92,-1.44 4.62,-4.43 2.43,-10.71 0.2,-4.05 -0.51,-0.74 -2.89,-1.06 -1.58,0.1 -8.4,-5.7 -5.24,-1.69 -2.94,0.07 -4.5,0.85 -6.189999,-0.36 -12.17,0.81 -1.86,-0.29 -3.49,-1.42 -11.04,-6.08 -2.89,-0.36 -0.89,0.52 0,0 -1.29,-0.01 -12.13,-10.28 4.33,-20.39 2.12,-4.71 4.89,-4.18 -0.82,-3.26 -2.42,-1.82 -0.57,-4.87 3.17,-3.84 -2.36,-8.76 0.39,-5.22 1.27,-4.3 -0.93,-15.849995 10.82,-9.33 7.73,-6.05 9.53,-14.62 2.08,-9.63 z"
 title="Kebbi"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-KE" />
<path
 d="m 347.91165,83.288745 3.51,6.28 0.1,1.96 1.07,1.12 1.87,-3.61 0.62,-2.6 1.73,-1.35 3.99,-1.93 3.77,-0.35 7.78,2.02 0.45,5.92 1.13,1.38 3.81,2.12 1.1,3.08 -0.57,2.01 1.02,1.389995 0.83,0.42 5.44,0.56 1.85,0.56 0.92,0.81 0.8,2.94 -0.08,5.61 -1.18,1.39 -0.53,1.72 1.65,0.72 0,1.03 1.9,-1.19 3.14,-0.25 0.57,1.44 0.01,2.57 1.37,0.25 1.82,-0.18 2.32,-1.42 1.47,-1.75 1.25,-0.53 2.28,7.18 0.19,2.46 -1.06,1.84 -0.19,2.05 -3.36,4.69 -0.5,2.09 0.2,1.96 5.06,-0.15 1.09,0.99 0.5,2 1.48,2.75 2.83,2.64 2.09,0.53 0.89,1.15 -7.12,6.88 -1.08,3.72 0.08,2.24 0,0 -5.52,2.17 -1.14,-0.09 -1.14,-1.07 -1.69,0.3 -2.48,1.57 -0.67,1.1 -4.74,4.17 -2.65,4.11 -2.74,3.21 -2.04,0.51 -2.7,-0.16 -1.02,0.43 -1.6,4.57 -0.45,3.5 0.4,6.89 0.45,1.99 3.86,4.33 0.77,1.67 0.08,2 -1.33,3.85 -2.59,4.09 -0.99,0.56 0,0 -1.05,0.29 -3,-0.64 -1.6,-1.05 -1.98,-2.75 -7.02,-0.97 -1.06,-1.07 -0.6,-2.08 0.55,-0.79 3.55,-0.96 0.72,-1.1 0.2,-1.73 -1.2,-6.05 1.01,-4.91 1.01,-2.44 -0.38,-3.88 -3.59,-6.42 -5.38,-4.43 -2.45,-0.59 -2.78,0.03 -1.53,-0.55 -3.51,-4.13 -3.75,-1.23 -3.53,-1.83 -1.04,-1.18 -0.53,-2.57 2.11,-4.02 -0.32,-1.25 -1.13,-0.82 -1.22,-0.19 -4.08,1.24 -1.65,0 -4.8,2.84 -4.18,3.83 -2.44,0.67 -3.09,-0.02 0,0 -3.6,-2.68 -1.11,-2.26 -0.78,-3.61 1.52,-2.67 0.07,-2.21 1.82,-1.63 3.75,-1.03 2.45,-1.7 2.71,-0.07 0.95,-0.58 -3.14,-7.8 0.67,-4.06 -2.09,-4.58 0.86,-6.33 -0.7,-12.32 0.27,-2.89 2.18,-2.28 4.25,-2.369995 7.64,-2.38 3.68,-1.93 0.78,-0.85 1.13,-4.39 2.14,-4.61 1.28,-0.52 z"
 title="Kano"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-KN" />
<path
 d="m 219.65165,323.91874 2.2,0.57 2.77,1.58 3.52,3.25 2.77,4.32 2.55,8.25 3.71,2.3 2.71,2.69 5.47,7.27 2.72,2.54 1.63,0.25 0.33,-0.35 0.62,-2.89 1.24,-2.53 0.19,-0.26 0.99,0.88 0.46,-0.09 0.06,-2.97 3.57,-1.74 1.12,-3.25 0,0 7.46,0.15 1.4,-0.46 0,0 -0.6,2.64 -1.55,2.66 0,0.86 0.82,1.69 2.19,2.66 0.54,6.17 -1.17,4.71 -0.04,4.69 -1.61,1.67 -0.85,2.12 -0.17,3.74 0.69,0.56 4.26,-2.95 9.26,-4.07 12.4,-3.37 7.07,-0.7 3.58,0.68 7.7,0.57 0,0 -0.32,2.84 0.54,5.87 1.88,3.22 2.7,2.61 0.73,1.85 0.01,6.9 0.57,6.81 1.24,5.53 1.27,1.05 3.31,-0.32 1.48,0.47 -0.36,1.81 -1.23,1.21 -0.47,1.29 -0.42,3.93 -1.94,5.83 -3.3,3.11 -6.44,3.12 -0.96,1.44 -0.34,4.42 -1.76,0 -1.35,-1.05 -0.82,0.1 -3.37,-3.29 -0.84,-0.58 -0.41,0.5 0,0 -1.11,-1.62 -2.44,-0.75 -3.31,0.76 -2.14,2.1 -2.44,0.91 -6.18,7.42 -5.98,3.86 -4.97,5.39 -1.24,0.33 -0.69,-0.34 -1.33,-2.01 -0.74,-0.05 -0.18,-2.28 -0.91,-0.25 -2.73,5.01 0,0 0,0 0,0 -1.34,1.87 -1.54,0.86 -2.24,2.31 -1.24,4.12 -0.06,2.73 -1.84,2.51 -1.43,0.89 -3.59,-0.66 -1.67,0.77 0,0 -1.03,-6.03 -1.41,-2.01 -0.89,-2.6 0.93,-5.52 -1.28,-2.15 2.16,-3.55 1.91,-4.82 -0.06,-4.16 1.62,-3.94 0.31,-1.92 -0.15,-3.41 -0.79,-2.01 -1.45,-1.08 -0.55,-2.12 -1.75,-1.41 -1.87,0.41 -1.46,0.99 -0.43,-0.38 -3.75,0.84 -0.66,-1.63 0.24,-0.51 -0.74,-0.56 -0.48,-1.74 -0.85,-0.61 -0.07,-1.22 -1.06,-2.01 -2.56,-0.15 -0.74,0.51 -2.26,0.19 -1.96,-2.23 -0.55,0.06 -1.26,-1.41 -0.65,0.07 -1.56,-2.1 -5.94,2.93 -2.13,-0.53 -1.08,-0.78 -0.28,-1.05 0.23,-1.93 0.96,-1.85 -0.27,-0.8 -2.18,0.25 -0.46,-0.65 0.38,-0.89 -0.28,-0.68 -0.7,-0.36 -1.75,0.37 -0.77,-0.64 0,0 -0.23,-0.78 -4.74,-4.17 -2.04,-2.7 0.71,-4.14 -2.51,-0.43 -4.62,0.88 0,0 -6.82,-2.39 -1.85,-1.69 -1.28,-0.03 -1.32,-0.96 -1.32,-3.75 0.08,-1.56 2.29,-3.01 1.34,-0.64 0.28,-1.37 -0.56,-0.7 -2.31,-0.27 -3.67,0.64 -2.48,1.42 -0.55,-0.45 0.03,-4.28 1.09,-0.42 0,0 0.75,-1.44 -0.82,-2.41 -4.76,-2.58 -0.13,-0.59 -2.42,-1.81 -0.07,-0.67 -2.41,-2.45 -1.92,-3.7 0.17,-0.99 2.14,-2.43 2.29,-3.91 3.71,-4.04 3.6,-2.29 1.77,2.62 2.17,1.76 7.04,3.01 1.84,0.08 2.76,1.08 3.71,-0.21 2.13,0.69 3.92,-0.12 6.3,1.52 3.03,-0.5 1.57,-3.76 0.64,-6.49 2.31,-7.79 z"
 title="Kogi"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-KO" />
<path
 d="m 322.66165,35.138745 9.16,1.35 5.19,1.38 3.58,1.94 2.92,2.5 2.73,0.73 9.89,9.64 3.29,-0.88 2.92,0.38 3.03,1.55 2.29,1.75 1.85,2.11 1.04,2.44 2.96,1.37 5.26,1.27 12.11,3.92 0,0 -0.01,0.86 -2,0.88 -0.58,0.75 -1.03,2.63 -3.19,2.58 -4.18,1.74 -3.68,0.55 -1.49,-0.7 -0.64,-1.56 -2.62,1.51 -1.99,-0.52 -2.66,-1.67 -0.68,-0.94 -1.41,-4.68 -1.17,-1.23 -9.22,0.78 -5.37,-0.99 -10.39,1.38 -0.46,0.3 0.02,2.69 -0.75,3.4 0.07,3.85 0.59,0.72 2.86,0.93 4.94,0.12 0.83,0.7 1.24,2.62 0,0 -4.63,0.36 -1.28,0.52 -2.14,4.61 -1.13,4.39 -0.78,0.85 -3.68,1.93 -7.64,2.38 -4.25,2.369995 -2.18,2.28 -0.27,2.89 0.7,12.32 -0.86,6.33 2.09,4.58 -0.67,4.06 3.14,7.8 -0.95,0.58 -2.71,0.07 -2.45,1.7 -3.75,1.03 -1.82,1.63 -0.07,2.21 -1.52,2.67 0.78,3.61 1.11,2.26 3.6,2.68 0,0 -0.99,1.1 -0.84,2.05 -5.62,2.24 -1.57,-0.78 -0.97,-1.58 -2.05,-1.73 -6.78,-2.29 -1.39,0.28 -3.06,2.59 -1.2,2.97 0.01,1.39 -0.58,0.54 -1.4,0.09 -2.77,-1.1 -1.95,-0.11 -3.45,1.09 0.12,2.04 1.81,3.36 -1.38,1.91 -2.69,1.52 -1.75,-0.23 -4.25,-4.29 -6.35,-1.93 0.39,-1.32 2.89,-2.69 0.23,-1.07 -0.79,-1.74 -1.36,-0.9 -1.94,0.18 -4.41,-0.88 0,0 0.02,-2.33 1.25,-6.1 -0.9,-3.69 -1.91,-1.9 -0.16,-1.07 0.45,-3.76 1.56,-4.14 0.65,-4 1.5,-0.84 6.61,-0.13 1.28,0.87 4.88,-3.97 0.55,-3.2 3.34,0.81 1.89,-1.62 -0.5,-1.95 -1.16,-1.43 -2.68,-2.29 -2.53,-1.16 -1.26,-1.21 1.82,-3.63 1.09,-5.16 -0.95,-2.47 0.13,-1.68 -0.69,-3.05 -2.5,-5.199995 0.4,-3.57 -1.31,-3.21 -0.39,-4.75 -1,-5.17 0.07,-6.05 -0.99,-6.17 1.44,-10.82 0,0 4.86,-1.57 5.28,-5.36 8.7,0.78 3.58,-0.74 23.4,-14.15 1.28,-0.33 z"
 title="Katsina"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-KT" />
<path
 d="m 62.361651,236.35874 5.38,-0.92 11.32,-0.35 3.62,0.93 13.98,15.86 1.99,3.1 5.609999,6.48 2.29,1.58 1.7,-0.18 1.04,0.48 0.27,2.94 -0.73,4.65 0.06,5.38 0.88,3.68 1.3,0.39 7.57,-0.79 0.84,0.74 0.43,1.62 -0.19,3.43 0.35,1.4 0.66,1.02 3.21,2.41 3.04,0.39 1.07,0.55 0.9,2.11 0.74,5.45 1.89,1.32 2,-0.01 9.16,-3.56 2.41,-0.16 6.35,3.01 1.42,1.1 6.35,7.23 2.25,0.69 3.96,-1.16 4.52,0.81 3.73,1.61 0.64,-0.27 11.77,7.32 5.19,3.67 0.93,1.49 1.46,0.71 1.84,0.6 4.92,0.32 3.39,-0.91 7.52,-0.31 8.26,1.71 0,0 -2.46,3.35 -2.31,7.79 -0.64,6.49 -1.57,3.76 -3.03,0.5 -6.3,-1.52 -3.92,0.12 -2.13,-0.69 -3.71,0.21 -2.76,-1.08 -1.84,-0.08 -7.04,-3.01 -2.17,-1.76 -1.77,-2.62 -3.6,2.29 -3.71,4.04 -2.29,3.91 -2.14,2.43 -0.17,0.99 1.92,3.7 2.41,2.45 0.07,0.67 2.42,1.81 0.13,0.59 4.76,2.58 0.82,2.41 -0.75,1.44 0,0 -5.76,0.09 -4.11,1.34 -0.82,2.22 0.29,0.63 -1.04,2.16 -1.29,-0.55 -1.95,0.58 -2.3,-0.62 -2.33,0.23 -0.95,-0.49 -1.47,-2.06 -0.95,-0.37 -4.48,1.25 -1.03,-0.49 -0.61,-1.67 -0.41,0.17 0,0 -0.39,-0.54 -1.67,0.8 -3.49,0.13 -1.48,-3.17 -2.18,-0.58 -4.74,1.7 -2.65,-0.38 0.08,0.88 -0.18,-0.85 -0.36,0.09 -3.55,1.61 -2.6,0.31 -8.27,-0.22 0,0 -0.49,-0.66 -1.45,-0.07 -0.71,-0.94 -1.9,-4.81 -0.39,-2.77 -0.78,-0.66 -0.03,-0.8 -3.46,-2.25 -2.95,-4.24 -1.22,-3.44 -0.09,-2.1 -0.79,-2.77 -1.97,-2.63 -2.999999,-7.11 -1.66,-1.91 -1.32,-5.29 -0.81,-1.58 1.03,-4.5 2.08,-1.55 0.35,-1.6 0.57,-0.59 3.159999,-2.09 2.34,-3.16 -0.16,-1.3 -1.31,-0.78 -2.829999,1.8 -2.21,0.08 -3.83,-1.08 -1.1,0.13 -2.4,-1.54 -5.7,-1.74 -3.25,-2.42 -1.69,-2.04 -0.54,-2.48 -4.08,-2.46 -2.04,0.09 -3.82,2.08 -1.69,3.71 -0.02,2.65 -0.45,1.11 -4.42,3.43 -6.64,2.92 -5.79,3.3 -2.49,1.94 -1.13,0.26 -3.01,2.21 -7,3.26 -0.93,0.15 -0.53,-0.75 -0.45,0.11 -0.91,-1.13 -0.69,-0.19 -2.57,0.27 -6.93,5.53 -1.66,0.66 -3.91,3.44 -0.19,0.99 -1.5,0.79 -4.08,0.72 -3.17,0.02 -3.19,2.78 0,0 0.56,-1.78 -0.59,-1.36 -0.01,-3.54 -0.71,-0.9 0.24,-1.44 0.55,-1.39 -0.39,-2.71 -0.97,-1.79 0.74,-1.4 1.43,-0.91 -0.4,-3.34 0.69,-0.23 0.34,-1.72 -0.2,-0.62 0.02,-0.88 0.69,-1.64 0.43,-1.56 -0.41,-0.76 -0.27,-0.77 -0.35,-0.78 0.13,-1.17 0.25,-1.73 0.16,-0.69 5.37,0.18 0.71,-0.16 1.05,-1.18 3.55,-0.56 0.66,0.82 1.24,0.45 1.49,-0.1 4.95,-1.73 0.25,-1.76 1.95,-3.88 0.17,-3.74 1.91,-1.88 -0.34,-5.82 -1.28,-4.01 0.31,-1.42 1.16,-1.88 2.47,-1.38 0.82,-1.83 2.59,-3.62 0.85,-3.1 1.04,-0.59 2.14,0.25 2.09,-1.73 0.1,-1.22 -1.34,-2.56 -0.32,-1.93 0.37,-1.34 1.11,-1.22 6.75,-2.7 3.39,0.24 1.14,-0.3 2.02,-2.06 0.12,-1.3 2.36,-2.59 0.57,-2.41 0.25,-4.97 0.85,-1.1 2.08,-0.86 z"
 title="Kwara"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-KW" />
<path
 d="m 3.411651,463.64874 1.25,0.4 3.41,-0.43 1.94,0.89 3.46,-2.44 0,-1.61 0.41,-0.11 3.55,0.53 13.71,-0.19 1.06,-1.01 0.77,-3.95 2.08,-1.65 0.09,-2.35 1.36,-2.51 1.85,0.25 3.41,1.43 1.2,0.8 0.81,1.43 4.57,-0.48 -0.51,-1.45 1.59,-1.06 37.58,0.39 1.07,0.21 0.54,0.9 -2.73,2.88 -0.23,0.94 0.73,1.24 0.04,1.46 2.19,1.09 3.22,-2.16 3.45,-0.41 1.06,1.48 0.12,0.95 -1.12,1.06 -2.8,1.31 -0.56,1.03 0.22,0.7 0.92,0.74 2.77,0.77 1.13,1.31 0.58,0.14 1.12,-0.58 5.269999,0.65 0.35,1.25 -0.36,2.36 0,0 -9.529999,-1.15 -2.19,-0.67 -12.02,-1.84 -8.59,-0.46 -9.91,0.94 -15.11,0.16 -0.57,0.31 -0.19,1.32 -0.53,-0.1 0.24,0.34 -5.42,-0.82 -6.02,0.01 -21.6,0.73 -9.49,1.1 -0.36,-3.11 z"
 title="Lagos"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-LA" />
<path
 d="m 307.24165,287.46874 1.34,-1.02 0.75,0.11 0.6,1.88 0.7,0.79 1.5,-0.61 0.93,0.14 2.44,1.79 1.34,-0.25 1.75,1.06 1.1,0 2.31,-2.1 0.94,-2.54 1.65,-2.12 1.01,-0.35 1.1,0.39 2.93,2.67 0.32,3.25 4.22,2.44 1.03,1.61 -0.05,9.7 0.4,1.31 1.34,0.96 1.15,-0.21 2.35,-1.6 4.16,-4.75 0.89,-1.9 1.29,-0.98 1.33,0.22 1.5,1.25 3.81,0.24 5.34,5.91 0.6,1.9 2.47,0.13 1.61,-0.42 0.82,-0.72 3.31,-5.4 2.65,-5.61 1.09,-0.57 0,0 1.69,1.65 2.42,0.11 2.08,0.85 0.63,4.48 1.93,3.41 2.16,0.98 5.32,0.56 3.7,0 2.77,-1.35 1.04,0.56 2.01,2.21 -0.79,2.93 -2.7,4.01 -2.11,1.98 -1.41,0.2 -1.46,1.05 -1.55,2.86 -1.55,1.36 -0.32,2.25 0.64,1.72 2.09,2.43 0.32,1.24 -0.3,5.41 1.44,2.07 5.15,2.71 3.66,1.3 8.19,-0.15 9.76,-2.79 10.36,4.33 2.52,2.07 1.46,2.68 0,0 -2.58,3.68 -2.74,0.82 -4.51,-0.95 -0.33,-0.41 -1.52,0.23 -1,-1.07 -1.73,-0.9 -1.86,0 -1.28,0.86 -1.33,2.14 -0.73,2.86 1.71,1.36 2.03,2.51 0.35,2.88 -0.54,0.65 1,2.68 -0.11,1.19 -11.23,7.21 -1.21,1.39 0,0 -11.79,-8.93 -0.01,0.7 -3.96,0.22 -4.88,-0.41 -6.86,-1.55 -10.09,-3.72 -2.68,-0.44 -2.59,0.18 -1.38,0.28 -3.95,2.2 -1.24,1.41 -1.02,2.86 0.08,2.52 4.7,11.64 -0.09,1.36 -1.14,1.1 -5.33,-2.23 -3.32,-2.8 -1.07,0.14 -5.25,-0.99 -4.92,-2.82 -8.71,-3.55 -8.51,-1.25 -9.13,-2.48 0,0 -7.7,-0.57 -3.58,-0.68 -7.07,0.7 -12.4,3.37 -9.26,4.07 -4.26,2.95 -0.69,-0.56 0.17,-3.74 0.85,-2.12 1.61,-1.67 0.04,-4.69 1.17,-4.71 -0.54,-6.17 -2.19,-2.66 -0.82,-1.69 0,-0.86 1.55,-2.66 0.6,-2.64 0,0 11.13,-1.75 2.91,-1.2 4.63,-1.06 6.96,-3.64 3.78,-4.62 1.04,-1.64 1.08,-3.4 0.79,-0.36 1.52,-7.95 1.98,-5.27 0.55,-7 -0.51,-2.19 0.08,-5.62 2.11,-6.52 0.53,-0.61 1.03,-0.07 0.42,-0.62 z"
 title="Nassarawa"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-NA" />
<path
 d="m 65.001651,173.89874 0.89,-0.52 2.89,0.36 11.04,6.08 3.49,1.42 1.86,0.29 12.17,-0.81 6.189999,0.36 4.5,-0.85 2.94,-0.07 5.24,1.69 8.4,5.7 1.58,-0.1 2.89,1.06 0.51,0.74 -0.2,4.05 -2.43,10.71 -4.62,4.43 -3.92,1.44 -1.48,1.01 -1.84,2 -1.46,3.26 -0.18,6.32 1.12,2.41 2.93,2.66 -0.29,3.94 -1.03,3.28 0.02,2.28 1.42,0.99 4.32,0.46 0.56,-0.48 0.5,-5.85 7.42,-2.5 3.38,-0.26 2.64,-1.57 1.77,-2.13 0.28,-1.53 -0.75,-2.44 -1.86,-3.03 -1.81,-1.97 -1.25,-2.83 0.45,-1.37 0.04,-9.59 0.9,-0.75 1.55,-0.42 5,0.52 5.22,-2.64 3.8,-0.97 1.01,-1.49 0.07,-2.07 -1.17,-1.36 -2.74,-1.63 -0.49,-1.45 0.63,-1.47 2.18,-1.45 0.25,-1.07 -1.12,-6.56 -0.78,-0.74 -1.71,0.03 -1.05,-2.01 -5.36,-0.53 -5.4,-2.19 -3.63,-2.01 -0.87,-1.26 -0.16,-1.54 1.37,-2.07 4.85,-2.59 4.43,-1.62 7.87,-1.83 9.86,-1.59 3.64,0.04 2.84,0.71 1.69,1.6 0.98,6.51 0.81,1.26 3.75,2.47 0.48,1.78 -0.37,4.81 0.36,4.02 1.64,1.25 10.67,-0.69 12.1,-5.08 3.93,-0.41 1.28,-2.2 3.42,-2.76 1.85,0.36 1.36,1.1 0,0 3.32,4.4 3.8,6.64 1.59,4.09 -0.07,0.84 0,0 -3.04,5.38 -0.4,4.79 1.44,2.38 0.14,1.48 -0.74,2 0.24,3.81 -1.84,1.8 -0.33,2.31 0.22,1.37 3.05,2 1.22,3.52 1.43,0.6 1.41,-0.89 5.38,-7.01 5.59,-4.5 2.46,-1.5 2.1,-0.61 2.91,-0.13 1.02,1 1.04,2.66 7.63,-2.86 3.97,0.56 0.64,-0.98 -0.67,-2.39 1.18,-1.2 4.73,0.5 0.61,0.51 0.48,1.92 0.28,4.5 1.39,0.14 2.25,-0.67 1.61,0.44 1.98,3.8 -0.05,2.57 -1.35,4.14 4.83,1.66 3.23,1.75 -0.31,1.98 -1.02,1.79 -4.24,2.6 -0.85,1.48 -1.62,1.68 -2.17,1.36 -0.91,1.24 1.03,1.98 1.71,1.66 6.67,2.49 12.87,-0.08 1.37,0.67 0.33,1.01 0.16,5.06 0.92,3.88 0.1,3.09 -0.63,1.51 -3.23,0.41 -0.88,0.42 -0.29,0.64 0.17,0.91 1.13,0.77 3.62,1.36 -0.83,3.02 3,1.62 0.58,1.88 -3.09,3.17 -0.6,2.79 -0.79,0.87 -2.45,1.29 -0.56,0.93 -0.09,2.32 3.39,2.78 -1.38,4.13 2.46,-0.6 1.23,0.42 0,0 -8.65,12.34 -0.94,0.24 -9.19,-8.1 -1.76,-0.63 -11.03,0.47 -2.68,0.33 -0.34,0.38 -0.36,13.66 0.75,30.21 -0.46,1.37 1.95,4.91 1.42,0.47 1.83,-0.21 0,0 -1.12,3.25 -3.57,1.74 -0.06,2.97 -0.46,0.09 -0.99,-0.88 -0.19,0.26 -1.24,2.53 -0.62,2.89 -0.33,0.35 -1.63,-0.25 -2.72,-2.54 -5.47,-7.27 -2.71,-2.69 -3.71,-2.3 -2.55,-8.25 -2.77,-4.32 -3.52,-3.25 -2.77,-1.58 -2.2,-0.57 0,0 -8.26,-1.71 -7.52,0.31 -3.39,0.91 -4.92,-0.32 -1.84,-0.6 -1.46,-0.71 -0.93,-1.49 -5.19,-3.67 -11.77,-7.32 -0.64,0.27 -3.73,-1.61 -4.52,-0.81 -3.96,1.16 -2.25,-0.69 -6.35,-7.23 -1.42,-1.1 -6.35,-3.01 -2.41,0.16 -9.16,3.56 -2,0.01 -1.89,-1.32 -0.74,-5.45 -0.9,-2.11 -1.07,-0.55 -3.04,-0.39 -3.21,-2.41 -0.66,-1.02 -0.35,-1.4 0.19,-3.43 -0.43,-1.62 -0.84,-0.74 -7.57,0.79 -1.3,-0.39 -0.88,-3.68 -0.06,-5.38 0.73,-4.65 -0.27,-2.94 -1.04,-0.48 -1.7,0.18 -2.29,-1.58 -5.609999,-6.48 -1.99,-3.1 -13.98,-15.86 -3.62,-0.93 -11.32,0.35 -5.38,0.92 0,0 0.49,-3.02 -1.96,-0.7 -2.1,-2.02 -1.75,-3.54 3.08,-6.97 -0.14,-1.69 0.89,-1.14 2.58,-1.33 6.08,3.19 1,-3.12 0.25,-2.99 2.82,-6.43 -0.66,-6.2 -2.69,-1.9 -2.97,-5.6 1.21,-4.6 0.13,-2.04 -1.23,-5.05 -2.13,-0.82 0.42,-1.95 -0.28,-1.95 0.51,-1.95 z"
 title="Niger"
 fill="blue"
 stroke="#888888"
 stroke-width="2"
 id="NG-NI" />
<path
 d="m 0.96165097,375.38874 5.97000003,-4.29 3.49,-0.21 1.9,0.93 1.24,1.79 0.41,1.43 0.15,6.48 0.56,2.36 1.31,2.17 0.84,0.13 0.94,-5.56 0.57,-1.25 0.47,-0.45 1.37,0 0.88,0.61 0.54,1.75 -0.16,3.09 -1.74,5.98 -0.41,-0.24 -0.51,0.57 0.52,3.66 2.12,2.51 3.05,2.47 1.02,3.04 3.2,4.51 3.01,2.36 2.34,1.13 4.05,0.28 1.74,-0.49 2.78,-3.97 1.14,-4.24 1.62,-1.48 2.6,0.29 1.75,4.34 1.59,1.13 1.02,-0.26 1.13,-1.11 2.47,-0.6 6.2,0.22 1.17,1.89 0.33,5.66 0.41,0.71 2.98,1.22 0.64,1.1 -0.1,2.22 1.1,2.7 0.41,2.87 -3.97,4.01 -0.33,1.13 0.37,0.28 6.09,-0.25 2.7,-0.58 3.04,0.13 3.18,-1.24 1.51,-1.37 5.89,-0.88 0,0 2.74,-1.08 1.4,-1.11 0.94,0.39 0.52,0.84 0.59,4.28 1.97,-0.01 3.85,-1.98 3.389999,0.59 2.97,7.11 3.06,-1.96 1.1,-0.02 1.15,0.69 2.12,-0.92 4.16,-0.26 0.31,0.13 -0.3,1.01 0,0 -0.75,5.5 -1.06,3.26 -2.35,2.1 -2.06,0.97 -3.63,3.28 -2.98,4.92 0.03,3.41 2.01,1.97 4.81,0.81 1.83,-0.13 1.42,-1.06 1.65,-2.27 1.76,-0.51 0.65,0.78 -0.02,4.47 0.85,3.57 -0.72,1.81 -2.44,0.66 -0.77,1.14 -1.12,0.68 -2.4,0.11 -1.32,1.34 0.98,0.43 2.79,-0.25 3.3,1.74 0.21,1.08 -0.82,1.72 -4.01,-0.28 0,0 -5,-2.24 -4.38,-0.93 0,0 0.36,-2.36 -0.35,-1.25 -5.269999,-0.65 -1.12,0.58 -0.58,-0.14 -1.13,-1.31 -2.77,-0.77 -0.92,-0.74 -0.22,-0.7 0.56,-1.03 2.8,-1.31 1.12,-1.06 -0.12,-0.95 -1.06,-1.48 -3.45,0.41 -3.22,2.16 -2.19,-1.09 -0.04,-1.46 -0.73,-1.24 0.23,-0.94 2.73,-2.88 -0.54,-0.9 -1.07,-0.21 -37.58,-0.39 -1.59,1.06 0.51,1.45 -4.57,0.48 -0.81,-1.43 -1.2,-0.8 -3.41,-1.43 -1.85,-0.25 -1.36,2.51 -0.09,2.35 -2.08,1.65 -0.77,3.95 -1.06,1.01 -13.71,0.19 -3.55,-0.53 -0.41,0.11 0,1.61 -3.46,2.44 -1.94,-0.89 -3.41,0.43 -1.25,-0.4 0,0 0.42,-3.28 1.13,-1.18 0.63,-1.54 -1.34,-3.74 1.3,-2.16 2.11,-1.8 0.2,-2.74 -0.21,-0.96 -2.14,-0.28 -0.78,-0.39 -0.41,-0.86 -0.17,-1.82 1.2,-1.9 -0.34,-1.07 0.48,-3.46 -0.22,-0.98 -1.3,-0.14 -0.54,-0.61 0.15,-2.86 1.4,-1.61 3.06,-1.78 -2.46,-2.23 -0.48,-0.96 1.87,-2.2 0.59,-1.92 -0.66,-4.66 -1.53,-1.66 -0.12,-9.69 2.37,-0.08 0.82,-0.48 0.04,-0.72 -0.42,-3.5 -2.68,-2.04 -0.22,-1.76 -0.98,-1.52 -0.3,-4.2 0.25,-8.96 -0.3,-0.95 -0.82,-0.35 -0.97,-2.58 -1.69000003,-2.17 z"
 title="Ogun"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-OG" />
<path
 d="m 194.92165,384.14874 4.62,-0.88 2.51,0.43 -0.71,4.14 2.04,2.7 4.74,4.17 0.23,0.78 0,0 -2.45,3.49 -0.9,0.6 -1.56,-0.14 -1.41,1.72 -0.18,1.38 0.4,0.84 2.02,0.82 -0.88,2.89 0.77,2.49 0.42,0.28 -1.43,3.54 -2.15,1.05 -1.76,1.83 -0.47,1.04 0.15,1.39 -3.23,6.89 0.32,0.83 -0.37,0.85 -1.51,0.73 -1.24,1.67 -0.62,4.63 1.18,1.28 0.16,0.82 -0.88,0.51 -0.01,1.63 -1.19,-0.51 -0.25,0.25 -0.95,4.96 -1.51,3.39 -2.68,1.03 -0.81,-0.36 -1.19,-1.48 -1.34,-0.12 -3.77,3.16 -0.74,0.03 -2.1,-5.46 2.01,-2.25 -1.74,-2.09 -1.64,-0.34 -3.29,0.39 -6.64,-0.11 -1.68,-0.36 -2.28,0.38 -2.12,-0.39 -2.2,1.01 -0.46,0.78 -0.09,1.96 -0.95,0.68 -0.79,2.27 -1.73,0.8 -0.45,1.04 -1.76,1.61 -0.49,0.96 0.09,2.22 -0.8,0.99 0,2.84 1.23,0.64 1.39,2.28 0.58,1.45 -0.36,1.72 -0.83,1.96 -1.74,1.71 -0.85,3.74 -2.94,0.86 -0.58,0.62 -0.96,3.62 -0.8,0.7 0.28,-0.44 -0.25,0.6 0.44,0.91 0.7,0.05 1.94,1.36 1.65,2.94 1.56,0.1 1.33,1.04 1.24,2.26 -0.39,1.16 0,0 -6.9,16.74 0,0 -4.86,-5.94 -9.17,-9.24 -14.82,-11.96 -2.7,-1.66 0,0 4,0.28 0.83,-1.73 -0.21,-1.07 -3.3,-1.74 -2.79,0.25 -0.98,-0.43 1.32,-1.35 2.4,-0.1 1.11,-0.68 0.78,-1.14 2.44,-0.66 0.72,-1.82 -0.84,-3.57 0.01,-4.47 -0.64,-0.78 -1.77,0.51 -1.65,2.27 -1.42,1.06 -1.83,0.13 -4.8,-0.81 -2.01,-1.96 -0.03,-3.41 2.98,-4.92 3.63,-3.28 2.06,-0.96 2.35,-2.1 1.07,-3.25 0.74,-5.51 0,0 2.67,-1.42 2.15,-4.97 4.29,-3.44 2.32,-0.02 2.51,1.24 2.91,2.22 1.81,0.03 0.64,-1.26 -0.23,-1.63 0.41,-2.11 -0.46,-3.98 1.56,-6.54 0.84,-0.57 5.86,-1.59 -0.62,-2.4 0,0 4.55,-1.45 7.78,0.43 6.97,-0.31 1.55,0.53 1.42,2.21 1.03,3.19 -0.16,0.86 1.09,2.69 2.28,0.59 5.53,-3.5 3.04,-4.43 1.71,-3.92 1.7,-8.1 1.13,-2.14 2.4,-2.48 2.18,-1.45 0.85,-2.06 1.86,-0.38 1.5,1.24 0.82,-0.3 1.49,-2.44 z"
 title="Ondo"
 fill="green"
 stroke="#888888"
 stroke-width="2"

 id="NG-ON" />
<path
 d="m 117.18165,366.88874 8.27,0.22 2.6,-0.31 3.55,-1.61 0.36,-0.09 0.18,0.85 -0.08,-0.88 2.65,0.38 4.74,-1.7 2.18,0.58 1.48,3.17 3.49,-0.13 1.67,-0.8 0.39,0.54 0,0 -1.52,5.3 -1.99,1.64 -2.18,0.94 -1.62,1.5 -1.9,4.25 -0.12,1.4 0.81,2.81 -1.19,3.99 0.69,4.78 2.85,6.11 0.84,3.79 0.83,1.7 0,0 0.62,2.41 -5.86,1.58 -0.84,0.58 -1.56,6.54 0.46,3.98 -0.4,2.11 0.23,1.63 -0.64,1.26 -1.81,-0.03 -2.91,-2.22 -2.51,-1.24 -2.32,0.01 -4.28,3.45 -2.15,4.96 -2.67,1.43 0,0 0.3,-1.01 -0.31,-0.13 -4.16,0.26 -2.12,0.92 -1.15,-0.69 -1.1,0.02 -3.06,1.96 -2.97,-7.11 -3.389999,-0.59 -3.85,1.98 -1.97,0.01 -0.59,-4.28 -0.52,-0.84 -0.94,-0.39 -1.4,1.11 -2.74,1.08 0,0 2.34,-9.84 0.43,-5.29 1.67,-8.72 -0.87,-0.49 -3.05,-4.88 -3.11,-2.33 -0.27,-0.93 -0.14,-0.88 1.15,-1.09 0.78,-1.76 0.87,-9.27 0.6,-0.28 4.3,1.34 2.32,-0.75 0.78,-0.99 0.13,-2.3 1.06,-0.57 2.81,-3.32 3.009999,1.84 3.59,5.56 2.13,-0.93 0.65,-1.43 2.05,-1.16 0.98,-1.39 0.28,0.39 1.83,-1.51 2.29,-0.76 0.25,0.38 0.99,-1.34 0.31,-1.28 z"
 title="Osun"
 fill="white"
 stroke="#888888"
 stroke-width="2"
 id="NG-OS" />
<path
 d="m 5.381651,335.88874 3.19,-2.78 3.17,-0.02 4.08,-0.72 1.5,-0.79 0.19,-0.99 3.91,-3.44 1.66,-0.66 6.93,-5.53 2.57,-0.27 0.69,0.19 0.91,1.13 0.45,-0.11 0.53,0.75 0.93,-0.15 7,-3.26 3.01,-2.21 1.13,-0.26 2.49,-1.94 5.79,-3.3 6.64,-2.92 4.42,-3.43 0.45,-1.11 0.02,-2.65 1.69,-3.71 3.82,-2.08 2.04,-0.09 4.08,2.46 0.54,2.48 1.69,2.04 3.25,2.42 5.7,1.74 2.4,1.54 1.1,-0.13 3.83,1.08 2.21,-0.08 2.829999,-1.8 1.31,0.78 0.16,1.3 -2.34,3.16 -3.159999,2.09 -0.57,0.59 -0.35,1.6 -2.08,1.55 -1.03,4.5 0.81,1.58 1.32,5.29 1.66,1.91 2.999999,7.11 1.97,2.63 0.79,2.77 0.09,2.1 1.22,3.44 2.95,4.24 3.46,2.25 0.03,0.8 0.78,0.66 0.39,2.77 1.9,4.81 0.71,0.94 1.45,0.07 0.49,0.66 0,0 0.53,3.2 -0.31,1.28 -0.99,1.34 -0.25,-0.38 -2.29,0.76 -1.83,1.51 -0.28,-0.39 -0.98,1.39 -2.05,1.16 -0.65,1.43 -2.13,0.93 -3.59,-5.56 -3.009999,-1.84 -2.81,3.32 -1.06,0.57 -0.13,2.3 -0.78,0.99 -2.32,0.75 -4.3,-1.34 -0.6,0.28 -0.87,9.27 -0.78,1.76 -1.15,1.09 0.14,0.88 0.27,0.93 3.11,2.33 3.05,4.88 0.87,0.49 -1.67,8.72 -0.43,5.29 -2.34,9.84 0,0 -5.89,0.88 -1.51,1.37 -3.18,1.24 -3.04,-0.13 -2.7,0.58 -6.09,0.25 -0.37,-0.28 0.33,-1.13 3.97,-4.01 -0.41,-2.87 -1.1,-2.7 0.1,-2.22 -0.64,-1.1 -2.98,-1.22 -0.41,-0.71 -0.33,-5.66 -1.17,-1.89 -6.2,-0.22 -2.47,0.6 -1.13,1.11 -1.02,0.26 -1.59,-1.13 -1.75,-4.34 -2.6,-0.29 -1.62,1.48 -1.14,4.24 -2.78,3.97 -1.74,0.49 -4.05,-0.28 -2.34,-1.13 -3.01,-2.36 -3.2,-4.51 -1.02,-3.04 -3.05,-2.47 -2.12,-2.51 -0.52,-3.66 0.51,-0.57 0.41,0.24 1.74,-5.98 0.16,-3.09 -0.54,-1.75 -0.88,-0.61 -1.37,0 -0.47,0.45 -0.57,1.25 -0.94,5.56 -0.84,-0.13 -1.31,-2.17 -0.56,-2.36 -0.15,-6.48 -0.41,-1.43 -1.24,-1.79 -1.9,-0.93 -3.49,0.21 -5.97000003,4.29 0,0 1.07000003,-2.08 0.73,-4.3 1.33,-4.15 -0.3,-1.12 0.37,-2.7 1.13,-2.26 0.36,-2.89 -2.44,-3.06 -1.17,-3.99 0.08,-2.02 1.05,-1.87 -0.44,-2.05 0.48,-0.7 1.25,-0.3 1.37,-2.88 -0.43,-0.44 0.73,-0.97 0.01,-1.07 z"
 title="Oyo"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-OY" />
<path
 d="m 379.00165,223.49874 1.53,-0.49 3.18,0.08 2.78,0.88 2.61,4.16 0.78,4.8 -0.04,12.38 10.97,-2.19 1.06,0.21 1.8,1.92 0.97,3.13 0.26,5.94 -0.23,1.17 -2.38,4.47 -0.09,1.69 0.6,0.85 3.92,1.42 0.79,0.71 0.9,1.16 1.65,4.07 1.56,1.34 1.51,0.53 4.8,0.27 5.47,1.48 10.04,-0.59 4.39,-1.41 2.89,-5.21 4.76,-1.3 0.5,-1.67 -0.27,-1.74 -3.17,-4.06 0.3,-1.44 3.03,-1.78 7.6,3.95 2.57,0.51 9.26,4.93 11.07,4.74 6.18,4.04 6.36,3.43 0,0 1.56,3.94 0.21,2.15 -0.51,4.08 0.76,5.96 2.3,3.86 1.05,6.02 -0.55,1.33 0.3,2.25 0.43,0 0.21,5.54 -1.78,3.08 -12.18,5.86 -1.9,-0.11 -9.52,2.1 -2.49,1.44 -2.06,4.19 -4.74,5.72 -7.11,3.76 -7.68,7.65 -2.43,1.19 -4.41,1.01 -4.11,0.54 -3.85,-0.25 0,0 -1.46,-2.68 -2.52,-2.07 -10.36,-4.33 -9.76,2.79 -8.19,0.15 -3.66,-1.3 -5.15,-2.71 -1.44,-2.07 0.3,-5.41 -0.32,-1.24 -2.09,-2.43 -0.64,-1.72 0.32,-2.25 1.55,-1.36 1.55,-2.86 1.46,-1.05 1.41,-0.2 2.11,-1.98 2.7,-4.01 0.79,-2.93 -2.01,-2.21 -1.04,-0.56 -2.77,1.35 -3.7,0 -5.32,-0.56 -2.16,-0.98 -1.93,-3.41 -0.63,-4.48 -2.08,-0.85 -2.42,-0.11 -1.69,-1.65 0,0 1.67,-3.94 -0.12,-3.41 -1,-2.09 -1.71,-1.21 -2.57,-3.08 -3.26,-5.28 -0.1,-1.16 1.05,-1.4 -0.21,-4.74 1.76,-1.28 0.4,-3.08 1.91,-1.55 0.42,-1.07 -0.53,-2.1 0.7,-7.81 -0.18,-1.97 0.34,-1.1 2.39,-1.97 -0.75,-3.52 -1.36,-2.82 0.22,-2.71 2.13,-4.97 1.9,-1.4 2.19,-0.73 1.32,-1.56 0.55,-1.43 0.21,-2.9 z"
 title="Plateau"
 fill="red"
 stroke="#888888"
 stroke-width="2"
 id="NG-PL" />
<path
 d="m 277.72165,584.56874 -1.46,1.39 0.02,0.77 -0.62,-0.24 0.22,-1.42 1.44,-0.82 0.4,0.32 z m -3.14,-1.84 -1.72,-0.98 -0.55,0.15 -0.55,0.15 -0.21,-0.69 0.86,-0.79 -0.31,-0.67 0.31,-0.65 -0.07,-1.05 -0.57,-0.81 -0.91,-0.17 -0.22,0.16 -0.71,-1.7 -0.27,-0.17 0.14,-0.46 -0.86,-0.86 -0.27,0.36 -0.96,0.15 -0.19,0.82 0.57,1.03 0.5,1.05 0.41,2.04 -0.48,-0.23 -0.45,0.63 1.07,3.48 -0.14,1.27 1.17,4.04 -0.24,0.22 0.77,0.46 2.06,-0.43 0.4,-0.45 0.13,-0.58 1.75,0.49 0.03,-2.23 0.67,-1.56 -1.16,-2.02 z m -3.8,-10.26 0.41,0.46 2.18,0.09 0.19,-0.91 -0.41,-0.31 -1.69,0.3 -0.68,0.37 z m 1.27,-2.46 0.36,1.13 0.52,0.19 -0.29,-1.9 -0.59,0.58 z m 7.2,9.74 -1.44,-2.86 -1,-0.7 -1.63,-0.81 -0.27,-0.12 -0.84,0.65 0.65,0.09 1.31,1.13 0.14,0.21 -0.23,0.46 0.52,0.93 0.12,1.92 1.29,1.2 0.91,0.17 0.67,-1.41 -0.2,-0.86 z m 5.92,6.12 -2.08,-2.62 -1.31,1.63 0.79,0.79 0.81,-0.24 0.38,0.91 0.76,0 0.22,0.62 1.17,-0.5 1.08,1.08 1.86,-1.49 -0.62,-0.55 -3.06,0.37 z m -19.91,-6.61 -1.12,0.53 -0.28,1.32 1.14,0.4 1.44,1.08 1.03,2.28 -0.29,-3.36 -0.36,-0.15 0.26,-1.49 -1.82,-0.61 z m 18.13,2.56 -2.37,-1.62 -1.55,-2.35 -0.03,-0.27 -0.48,-1.7 -0.48,0.43 -0.4,-0.36 0.43,-0.67 -0.03,-1.49 -0.12,-0.07 -0.57,1.85 -2.25,-0.7 -0.53,-0.1 -0.88,-1.08 -0.07,-1.52 -0.36,-0.29 -0.07,-0.46 -0.26,-0.17 -0.15,-0.65 0.5,-0.79 -0.98,-1.22 -0.81,0.53 -0.34,0.89 0.65,1.54 -2.06,0.77 -0.41,0.36 -0.93,0.38 -0.52,0.05 -1,0.77 -0.46,0.62 -0.09,-1.51 -0.58,0.74 -0.22,0.51 1,1.65 0.55,2.45 -1.31,0.45 -0.53,0.21 -1.38,-1.61 -0.71,-1.9 -1.45,-2.41 -1.5,-0.51 0.56,-1.55 -0.68,-2.22 0.98,-0.81 0.35,-0.48 -0.53,-0.67 -1.81,-0.24 -1.81,-1.11 -0.28,1.59 -0.89,0.57 -0.33,-0.77 -1.27,-0.14 -0.34,-0.34 -0.64,0.19 -0.77,0.03 -0.62,-0.87 -0.19,-0.14 -0.55,0.41 0.19,0.99 -0.14,0.33 0.46,0.31 1.27,1.27 -0.12,1.53 0.98,4.64 3.22,3.31 0.02,1.18 -1.81,1.46 -0.1,0.58 1.82,6.56 0.55,3.32 2.41,2.48 -0.29,0.33 -7.24,0.69 -2.24,-0.75 -0.09,-2.71 -0.24,-2.54 0.14,-0.46 -0.03,-0.17 -0.46,-2.71 -0.19,-0.75 1.94,-3.67 -0.19,-2.67 -0.67,0.15 -0.68,0.1 -3.96,-2.6 -1.2,-4.38 -1.38,-1.87 -1.99,-0.02 -6.54,2.54 -1.04,-0.26 -0.35,-1.94 0.42,-1.46 -3.31,-1.44 -0.5,-0.83 0.07,-4.34 1.9,-2.67 0.76,-2.05 0.03,-1.27 -1.29,0.16 -0.84,-0.78 1.33,-4.44 4.49,-7.84 2.77,0.17 0.55,-0.5 0.75,-2.49 1.54,-0.79 -0.23,-1.81 1.58,-1.07 0.95,-1.48 -0.03,-1.94 -0.63,-1.54 -0.76,-0.58 -1.92,-0.83 -2.94,0.49 -1.04,-0.28 -0.57,-1.04 0.21,-0.44 3.52,-1.81 0.19,-5.3 0.7,-1.48 2.05,-1.42 0.89,-1.75 0.82,-3.18 -1.09,-3.54 0.23,-0.35 1.11,1.28 2.4,0.21 -2.75,13.08 1.51,0.44 3.47,-0.67 2.12,0.78 0.44,1.66 -0.52,4.62 -1.09,2.76 0.26,1.37 1.84,1.3 1.72,3.41 2.16,1.65 2.14,0.41 6.72,-0.14 4.7,1.12 4.15,-1.07 2.13,-0.03 4.51,1.13 2.57,-0.95 0.55,0.05 0.66,1.72 0.06,2.78 -2.4,4.19 -3.41,4.33 -1.37,3.71 -0.16,1.09 0.6,1.11 1.45,1.41 1.8,0.27 3.13,-0.59 1.11,-0.64 2.79,-0.12 3.28,1.22 1.81,-0.42 2.94,1.4 2.35,1.79 1.95,3.49 0.63,2.3 -0.96,4.27 0.58,4.55 -0.51,0.32 -0.04,0.64 0.61,1.17 -1.22,0.77 -0.84,-0.72 -0.17,-0.98 -1.22,-0.27 -0.55,-0.26 -0.26,0.46 -1.39,1.18 -0.58,-0.24 -0.26,-0.36 -0.38,-0.02 -0.71,0.39 -1.5,-2.36 -1.27,0.96 -0.93,-0.36 -1.6,-0.5 -0.65,-1.03 -0.67,0.19 -0.74,-0.86 -0.62,0.51 -0.19,0.79 -0.89,0.33 0.34,1.08 0.27,1.03 0.24,0.6 0.78,0.6 0.77,-0.24 0.57,0.08 0.86,-0.31 -0.17,1.75 -1.77,0.17 -1.44,0.53 -0.74,-1.2 -0.1,-0.33 -1.05,-1.17 -0.15,-0.94 0.11,-0.22 z m 21.52,4.31 -0.69,-0.39 -0.43,-0.03 -0.88,-0.36 -0.02,-0.02 -0.4,-0.36 -0.42,0.46 -0.32,-0.13 0.35,-0.54 -0.88,-1.49 -0.9,0.53 -1.04,-0.9 -0.36,-0.34 -0.17,-0.51 -1.39,0.01 -0.26,0.28 -1.23,0.87 -1.33,-0.05 -0.46,0.04 -0.43,-0.23 -0.63,-0.63 -0.53,-0.31 -0.09,-0.81 -1.24,0.34 -1.03,0.02 0.02,-0.42 -1.25,-0.34 -0.91,-0.46 -1.34,-0.09 -0.48,0.24 -0.23,0.58 -0.02,0.79 1.72,0 0.09,0.08 1.17,1.07 0.23,0.67 0.36,1.37 0.84,0.31 0.16,-0.4 0.34,0.28 1.07,0.03 0.06,0.22 -1.84,0.74 -0.43,0.15 -0.69,2.4 5.47,0.77 4.18,-0.92 5.93,-0.14 -0.19,-1.22 0.52,-1.16 z m -48.68,-18.07 0.79,-0.17 0.92,-0.79 0.08,-1.12 1.29,0.9 1.6,0.63 -0.96,1.17 0.43,1.85 0.27,0.32 -0.03,0.58 -0.6,0.94 0.22,0.64 1.01,0.31 1.26,1.35 2.07,4.36 -0.93,0.61 -0.42,0.84 0.15,0.91 3.15,1.85 0.6,2.9 0.88,1.32 -0.12,1.39 0.48,1.61 1.48,1.13 -1.12,1.39 -0.96,0.36 -0.86,-0.5 -0.6,0.41 -6.38,-1.39 -0.81,-2.54 0.53,-0.62 -0.6,0.02 -1.36,-3.89 -0.81,-1.9 0.1,-2.06 1.63,-1.56 -0.17,-1.35 -1.81,-1.66 -1.69,-1.15 -0.76,-4.06 -0.29,-0.58 0.02,-1.82 -0.77,-1.08 1.24,-0.74 0.88,0.63 0.67,0 0.3,0.56 z"
 title="Rivers"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-RI" />
<path
 d="m 178.43165,0.2287449 12.88,5.68 20.53,7.2500001 4,2.35 4.64,-1.49 3.65,-0.02 8.54,4.12 15.88,15.56 5.98,10.42 0,0 -3.03,2.6 -7.1,4 -9.51,-1.28 -1.9,-0.66 -1.7,-2.05 -2.27,-0.68 -4.97,-0.19 -0.59,5.48 -0.73,1.89 -0.5,0.22 -2.7,-1.44 -2.79,0 -4.85,1.56 -2.11,1.82 -0.11,0.7 0.78,5.14 0.07,8.44 -1.35,1 -4.04,1.64 -10.02,0.79 -6.09,0.95 -5.83,8.58 -1.88,1.87 -3.07,1.91 0.06,2.88 1.43,4.64 0.65,4.25 -0.74,3.029995 -2.46,1.7 -6.11,0.53 -1.28,-0.29 -4.8,0.64 -2.64,-0.31 -4.47,0.33 -9.33,-1.67 -0.92,0.6 -0.93,4.51 0.1,18.21 -0.66,13.78 0,0 -1.62,0.97 -0.94,-0.07 -0.77,-1.75 -2.04,0.72 -1.89,-0.86 -1.69,0.12 -12,5.45 -2.4,3 -1.71,1.35 -2.78,-0.29 -0.76,-0.51 -2.55,-3.65 1.16,-4.77 2.61,-5.63 2.12,-9.79 -0.79,-13.05 0.14,-9.94 1.01,-3.779995 1.28,-1.48 3.95,-1.18 2.68,-0.02 3.17,2.04 1.02,-0.04 0.64,-1.56 0.24,-8.02 -1.68,-5.52 -0.04,-2.04 1.3,-6.06 0.18,-3.32 -1.8,-4.28 -1.86,-2.15 0.42,-3.7 1.42,-2.98 -0.09,-2.4 1.62,-3.93 -0.4,-1.25 -1.08,-0.88 -1.16,0.31 -2.49,3.69 -0.63,0.56 -1.82,0.43 -3.06,-0.68 -2.95,-2.07 -9.56,-3.12 -1.06,-1.1 -3.19,-1.82 -1.65,-2.12 -0.76,-0.31 -4.629999,1.58 -1.86,-0.74 -6.62,0.14 0,0 0.09,-16.44 4.14,-0.02 16.559999,-14.58 25.12,-5.0100001 2.41,2.14 5.71,0.48 6.45,-0.72 4.85,0.56 5.33,-0.16 5.25,-6.26"
 title="Sokoto"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-SO" />
<path
 d="m 488.91165,275.87874 4.59,-2.65 5.85,0.78 10.59,-4.85 6.44,1.09 3.99,0.03 0,0 3.57,0.71 5.9,-0.6 12.46,0.02 6.37,-0.47 0,0 5.45,10.18 1.46,1.92 4.65,1.08 2.08,1.29 5.26,9.82 -0.46,2.17 0.34,3.84 2.66,2.94 4.14,1.47 2.02,3.84 0.26,1.81 -1,3.62 -5.99,11.44 0.38,5.78 -0.44,2.08 -6.12,5.22 -8.63,11.52 -5.08,5.48 -3.8,3.22 -4.14,4.78 -0.82,1.58 2.52,6.73 2.91,4.7 2.71,2.45 2.72,-1.99 2.83,-4.01 1.64,-0.38 1.42,0.43 1.52,1.12 2.5,3.15 4.32,3.84 2.15,2.6 1.04,2.02 -0.58,5.49 0.74,1.73 0.38,3.54 1.94,4.62 -0.05,1.56 1.22,0.88 0,0 -4.94,5.48 -1.09,1.94 -0.89,2.92 0.38,5.92 0.92,3.32 1.33,2.12 -0.18,1.29 -0.98,0.73 -4.04,-0.35 -0.68,0.46 -2.06,0.06 -0.18,1.64 -1.72,0.75 -1.54,1.93 -1.91,0.43 -1.09,4.21 -2.12,0.65 -1.37,2.72 0.06,0.5 0.94,-0.05 0.46,0.44 0.09,1.77 0.88,0.11 0.19,0.89 -0.99,0.43 -0.62,1.15 0.94,1.52 -0.08,1.04 -1.92,1.11 -0.22,3.22 -1.46,1.44 -0.57,1.91 -1.81,0.78 -1.77,-0.83 -0.6,0.54 -1.24,0.15 -0.46,0.64 0.46,0.88 -0.18,1.73 -0.44,0.5 -3.75,0.68 -0.42,0.22 -0.2,1.37 -1.37,-0.18 -3.03,-2.03 -2.25,1.01 -0.67,-0.7 -3.01,-0.66 -1.42,-1.22 -0.58,0.05 -1.22,1.41 -2.03,-0.08 0.24,-8.73 -2.03,-2.16 -2.24,-0.11 -2.36,2.14 -2.84,-0.48 -1.86,-0.85 -1.43,-3.38 -1.18,-2.19 -1.22,-0.81 -1.17,-0.07 -1.31,-2.11 -0.12,-0.73 1.66,-4.79 -2.66,-1.84 -1.49,-0.2 -0.6,0.74 -1.69,-2.15 -1.03,-0.08 -1.5,-1.61 -0.77,-0.07 -0.36,-1.52 -1.25,-0.63 -0.4,0.46 -1.47,-0.36 -1.85,-1.58 0.52,-1.93 -0.4,-2.09 -1.65,-1.31 -0.76,4.76 0.08,2.89 -1.39,6.02 -0.88,1 -1.67,0.57 -0.34,0.87 -0.64,0.11 -0.94,-0.97 -15.69,1.52 -2.64,-3.08 0.62,-1.75 -0.85,-2.06 -0.19,-1.18 0.07,-0.81 -0.89,-0.32 -8.2,7.4 -0.64,1.12 -2.44,1.72 -1.12,1.84 -4.62,4.63 -1.34,-0.72 -2.2,-0.1 -1.6,-0.22 -0.8,-0.61 -0.9,2.13 0.3,0.79 -0.76,0.97 -0.38,1.8 0.36,2.03 -0.28,1.07 -0.6,0.37 -1.02,2.82 -1.35,5.37 -0.5,0.39 -0.68,-0.34 -1.32,0.37 -1.03,-1.32 -0.44,0.46 0,0 1.9,-8.19 0.03,-8.76 0.33,-1.08 -0.61,-0.73 2.11,-11.5 3.31,-6.16 3.44,-3.25 3.09,-1.94 0.92,-1.43 -0.29,-5.92 2.38,-5.89 0.59,-3.23 -0.56,-1.78 0.26,-1.04 -1.17,-1.36 0.14,-0.65 -8.37,-7.57 -4.44,-5.65 -5.14,-4.9 -7.48,-1.77 -8.18,-0.48 -7.47,0.95 -6.12,2.63 -1.9,-0.57 3.79,-5.97 0,0 1.21,-1.39 11.23,-7.21 0.11,-1.19 -1,-2.68 0.54,-0.65 -0.35,-2.88 -2.03,-2.51 -1.71,-1.36 0.73,-2.86 1.33,-2.14 1.28,-0.86 1.86,0 1.73,0.9 1,1.07 1.52,-0.23 0.33,0.41 4.51,0.95 2.74,-0.82 2.58,-3.68 0,0 3.85,0.25 4.11,-0.54 4.41,-1.01 2.43,-1.19 7.68,-7.65 7.11,-3.76 4.74,-5.72 2.06,-4.19 2.49,-1.44 9.52,-2.1 1.9,0.11 12.18,-5.86 1.78,-3.08 -0.21,-5.54 -0.43,0 -0.3,-2.25 0.55,-1.33 -1.05,-6.02 -2.3,-3.86 -0.76,-5.96 0.51,-4.08 -0.21,-2.15 z"
 title="Taraba"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-TA" />
<path
 d="m 526.42165,32.448745 12.45,0.19 9.56,1.2 10.76,4.18 11.69,2.55 2.73,1.51 6.09,5.17 4.78,3 1.58,0.14 0.3,-0.82 1,-0.28 1.65,0.65 0.62,-0.52 -0.55,-1.18 1.49,0.16 1.7,0.94 1.66,-0.42 0.83,0.71 0.63,1.07 1.04,-0.62 2.85,0.61 0.74,0.5 0.93,0.12 0.99,-0.01 0,0 -0.08,4.21 -1.49,8.02 1.23,3.85 1.45,1.82 4.8,3.84 0.48,3.74 -1.84,4.21 -2.37,3.08 -7.06,6.31 -0.55,2.2 1.72,3.83 -0.05,5.789995 -2.54,16.29 -0.13,3.5 1.69,7.44 -4.72,9.14 0.15,1.94 0.64,0.36 4.91,-0.21 3.13,3.75 0.84,3.33 -0.99,2.11 -4.54,4.43 -3.3,5.9 -2.89,3.35 -0.9,2.86 0.04,2.97 0.76,4.15 -0.24,2.94 -2.09,3.08 -6.11,3.65 -11.21,3.02 -2.66,1.92 -1.72,2.83 -0.61,2.77 0.28,8.39 -3.41,4.53 -3.04,0.69 0,0 -6.78,0.01 -0.3,-0.51 -0.77,-6.45 1.2,-11.85 -0.67,-4.87 -3.68,-3.38 -1.58,1.02 1,-1.54 -3.42,-3.58 -4.75,-6.4 -8.49,-6.26 -2.18,-1.29 -2.98,-1.01 -4.04,-0.17 -4.17,1.51 -0.91,0.88 0,0 -3.04,-0.37 -1.63,-1.53 0.99,-6.78 1.05,-2.72 0.23,-4.92 -8.35,-20.91 -0.2,-3.87 -0.95,-2.71 -0.33,-2.7 -0.21,-6.74 -3.16,-4.66 0.19,-1.81 -0.77,-7.079995 -1.14,-2.93 -7.74,-6.19 0,0 -0.87,-2.9 -1.76,-11.53 -2.21,-3.4 -1.85,-0.88 -2.03,0.61 -4.99,-2.22 -5.86,1.86 -1.12,0.72 -1.46,-2.53 -0.69,-4.35 -2.13,-4.78 -2.21,-1.25 -6.33,1.96 -2.82,1.37 -3.16,0.63 -5.32,2.59 -2.1,3.99 -3.14,1.8 -6,-0.73 -1.79,-1.18 0,0 7.38,-7.5 3.25,-4.6 4.08,-3.51 5.19,-5.85 3.98,-2.54 9.05,-4.06 16.06,-0.94 12.55,-4.7 19.58,-1.07 z"
 title="Yobe"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-YO" />
<path
 d="m 258.59165,50.268745 5.45,6.52 5.08,-0.11 3.34,-0.61 0,0 -1.44,10.82 0.99,6.17 -0.07,6.05 1,5.17 0.39,4.75 1.31,3.21 -0.4,3.57 2.5,5.199995 0.69,3.05 -0.13,1.68 0.95,2.47 -1.09,5.16 -1.82,3.63 1.26,1.21 2.53,1.16 2.68,2.29 1.16,1.43 0.5,1.95 -1.89,1.62 -3.34,-0.81 -0.55,3.2 -4.88,3.97 -1.28,-0.87 -6.61,0.13 -1.5,0.84 -0.65,4 -1.56,4.14 -0.45,3.76 0.16,1.07 1.91,1.9 0.9,3.69 -1.25,6.1 -0.02,2.33 0,0 -1.01,-0.03 -2.34,2.38 -2.75,1.77 -0.85,1.14 -1.71,3.41 -0.64,3.55 -1.51,3.23 -3.04,3.1 -2.33,1.51 -4.71,0.62 -7.94,-0.57 -5.64,0.95 -5.27,4.71 -2.86,4.16 -1.28,0.76 -1.68,0.12 0,0 0.07,-0.84 -1.59,-4.09 -3.8,-6.64 -3.32,-4.4 0,0 -0.21,-5.48 -1.38,-7.58 -1.93,-3.01 -5.38,-2.71 0,-1.2 2.05,-6.49 0.01,-2.47 -1.41,-2.15 -4.35,-1.77 -4.85,-0.62 -1.22,0.81 -2.49,0.59 -3.79,-0.5 -5.47,0.76 -3.65,-2.41 -2.87,-0.11 -1.69,-3.3 -1.08,-0.57 -3.61,0.65 -2.09,-0.31 -0.91,-0.64 -0.79,0.15 -1.06,0.62 -0.82,2.32 -6.34,1.46 -4.11,-2.25 -1.82,0 -0.86,0.48 0,0 0.66,-13.78 -0.1,-18.21 0.93,-4.51 0.92,-0.6 9.33,1.67 4.47,-0.33 2.64,0.31 4.8,-0.64 1.28,0.29 6.11,-0.53 2.46,-1.7 0.74,-3.029995 -0.65,-4.25 -1.43,-4.64 -0.06,-2.88 3.07,-1.91 1.88,-1.87 5.83,-8.58 6.09,-0.95 10.02,-0.79 4.04,-1.64 1.35,-1 -0.07,-8.44 -0.78,-5.14 0.11,-0.7 2.11,-1.82 4.85,-1.56 2.79,0 2.7,1.44 0.5,-0.22 0.73,-1.89 0.59,-5.48 4.97,0.19 2.27,0.68 1.7,2.05 1.9,0.66 9.51,1.28 7.1,-4 3.03,-2.6 0,0 z"
 title="Zamfara"
 fill="orange"
 stroke="#888888"
 stroke-width="2"
 id="NG-ZA" />
 fill="orange"
 stroke="#888888"
 stroke-width="2"
</svg>

<!-- Indicator Matrix -->
  <rect x="600" y="520" width="140" height="80" fill="#ffffff" stroke="#000000" stroke-width="2" />
  <text x="630" y="540" font-family="Arial, sans-serif" font-size="12" fill="#000000">Indicator Matrix</text>
  <!-- Sample data for indicator matrix -->
  <rect x="640" y="550" width="20" height="20" fill="green" />
  <rect x="670" y="550" width="20" height="20" fill="yellow" />
  <rect x="700" y="550" width="20" height="20" fill="red" />
  <text x="635" y="590" font-family="Arial, sans-serif" font-size="12" fill="#000000">Low</text>
  <text x="660" y="590" font-family="Arial, sans-serif" font-size="12" fill="#000000">Medium</text>
  <text x="705" y="590" font-family="Arial, sans-serif" font-size="12" fill="#000000">High</text>

  `;
};



const generateMotaEngilMap = () => {
  // Your dynamic SVG generation logic for Mota-Engil map goes here
  return `
  <div class="map-container">
  <svg width="800" height="610">   

  <rect x="10" y="10" width="740" height="900" fill="#f0f0f0" stroke="#ccc" stroke-width="2" />
  
  <text x="400" y="30" font-family="Arial, sans-serif" font-size="20" fill="#000000" text-anchor="middle">Security Incident Map</text>

  <svg id="nigerian-map" x="20" y="20" width="750" height="650" viewBox="0 100 800 500">

 <path
 d="m 291.01165,491.65874 0.6,0.77 4.83,-0.89 2.71,0.27 2.05,1.34 0.33,1.46 0,0 0.07,4.36 -0.55,2.86 0.05,0.73 0.94,1.03 14.09,0.86 1.24,1.86 0.22,2.19 0.7,1.04 3.21,2.33 1.34,0.21 0,0 1.08,1.29 -0.59,3.72 0.15,3.78 1.37,4.63 0.73,1.68 1.71,2 0.76,2.55 -0.6,1.21 -3.42,-0.76 0,0 -2.69,-2.61 -2.54,-0.84 -2.76,-2.14 -0.58,-2.11 -1.19,-1.47 -3.4,-0.91 -2.42,0.14 -0.28,0.91 0.53,3.51 -1.84,5.1 0.32,0.45 2.23,-0.16 -0.7,2.44 -0.73,0.9 -6.08,-0.16 -1.1,0.98 -0.07,0.75 1.07,1.94 -1.21,5.81 -0.03,2.4 0.66,2.49 -1.17,2.89 -2.52,1.94 0.09,0.77 -0.47,0.64 0.22,1.47 0.59,0.67 0.02,1.17 -0.67,1.62 1.79,3.37 0.13,1.85 0,0 -2.36,-1.79 -2.94,-1.41 -1.8,0.43 -3.28,-1.22 -2.79,0.12 -1.11,0.64 -3.13,0.58 -1.8,-0.27 -1.45,-1.41 -0.59,-1.1 0.16,-1.1 1.37,-3.7 3.42,-4.33 2.39,-4.19 -0.05,-2.78 -0.66,-1.72 -0.54,-0.05 0,0 3.09,-10.25 2.1,-3.87 1.82,-1.68 1.18,-3.04 0.89,-0.9 0.43,-2.01 -0.36,-3.45 0.28,-2.05 -1.51,-2.44 1.23,-0.77 -0.38,-8.47 -0.47,-1.35 -1.04,-1.45 -5.34,-1.78 -2.01,-1.69 0,0 1.27,-2.22 1.36,-1.3 z"
 title="Abia"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-AB" />


<path
 d="m 682.64165,187.16874 -0.13,1.83 -0.82,1.76 -1.02,1.57 -1.1,0.83 -1.77,2.9 -1.36,4.89 -2.66,2.45 -0.48,1.1 -0.61,3.01 0.72,3.61 0.77,1.06 0,1.7 -1.61,1.66 -0.26,4.61 -0.97,1.67 0.13,3.45 -0.78,1.94 -2.05,2.57 -0.26,3.02 -1.61,1.04 -1.44,2.61 -5.87,1.16 -4.18,5.88 0.15,0.98 1.54,1.62 0.04,0.64 -1.15,2.74 -1.85,1.39 -0.03,1.77 0.69,1.6 2.69,1.33 1.01,1.59 -2.16,3.09 -0.13,2.25 -0.54,1.29 0.27,1.11 -1.08,1.47 0.33,0.78 -0.22,1.41 0.43,0.63 -0.74,2.2 -1.02,1.64 -0.97,-0.13 -1.7,1.32 -8.01,0.82 -2.75,2.16 -1.62,0.29 -3.76,3.39 -3.76,1.98 0.09,1.34 2.37,0.27 0.49,0.42 0.09,7.48 -0.73,0.69 -0.83,4.41 0.84,2.07 -1.16,4.03 0.3,1.32 -2.81,4.8 -2.64,2.3 -0.01,1 0.71,0.99 -0.82,2.05 1.27,3.92 -1.13,1.85 -1.09,0.38 -1.67,-0.23 -1.46,0.54 -0.57,1.1 -0.16,2.73 -0.98,0.74 -0.99,1.85 -2.18,0.19 -3.4,2.76 -0.83,0.12 -5.88,-1.64 -0.66,0.66 -0.24,1.71 -1.18,1.16 -0.81,3.05 -1.77,2.34 -2.33,0.14 -1.12,0.89 -2.47,-0.28 -1.85,1.21 -1.91,0.33 -0.72,0.82 -0.68,4.04 1.44,5.22 0.58,5.77 -0.06,1.04 -0.77,0.56 -2.43,4.51 0.62,2.51 0.22,3.73 -4.13,6.35 -3.49,3.09 -1.76,3.01 -0.48,2 -1.12,1.47 -0.41,3.45 -1.11,1.56 0.69,6.14 0.65,1.8 -2.93,1.48 -1.96,0.27 -2.75,3.14 0,0 -1.22,-0.88 0.05,-1.56 -1.94,-4.62 -0.38,-3.54 -0.74,-1.73 0.58,-5.49 -1.04,-2.02 -2.15,-2.6 -4.32,-3.84 -2.5,-3.15 -1.52,-1.12 -1.42,-0.43 -1.64,0.38 -2.83,4.01 -2.72,1.99 -2.71,-2.45 -2.91,-4.7 -2.52,-6.73 0.82,-1.58 4.14,-4.78 3.8,-3.22 5.08,-5.48 8.63,-11.52 6.12,-5.22 0.44,-2.08 -0.38,-5.78 5.99,-11.44 1,-3.62 -0.26,-1.81 -2.02,-3.84 -4.14,-1.47 -2.66,-2.94 -0.34,-3.84 0.46,-2.17 -5.26,-9.82 -2.08,-1.29 -4.65,-1.08 -1.46,-1.92 -5.45,-10.18 0,0 6.2,-0.91 3.37,-1.43 9.4,-5.66 5.75,-4 1.1,-2.33 -0.52,-3.7 0.68,-10.23 0,0 6.34,0.97 2.7,-0.19 4.57,-1.32 1.74,-1.07 1.7,-1.9 3.73,-5.55 6.2,-7.06 2.51,-0.87 6.29,-0.49 5.9,-2.22 2.44,-2.62 0.82,-2.66 3.32,-0.14 2.35,-1.14 2.22,-3.7 2.1,-2.16 2.51,-1.47 8.52,0.79 2.87,1.03 2.58,1.55 2.84,3.11 2.43,1.15 2.38,1.02 4.39,-0.01 1.14,-1.22 1.48,-7.76 2.71,-5.68 1.22,-3.64 0.88,-4.1 0.28,-8.01 3.09,-0.43 0.62,0.74 3.75,1.14 3.86,-0.29 5.62,-1.74 0,0 z"
 title="Adamawa"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-AD" />


<path
 d="m 302.91165,585.31874 0,0.01 0,0 -0.02,-0.02 0,0 0.02,0.01 z m 7.57,-0.7 0.97,0.5 0.92,-0.19 0.88,-0.14 0.33,0.28 -3.58,0.75 -0.49,-0.59 0.97,-0.61 z m 40.31,-7.56 0.88,2.09 -0.76,0.82 -1.07,0.22 -0.22,-1.24 0.56,-0.1 0.35,-0.9 0.26,-0.89 z m -51.56,-11.07 -0.12,-1.85 -1.79,-3.36 0.67,-1.63 -0.02,-1.17 -0.59,-0.67 -0.22,-1.47 0.47,-0.65 -0.09,-0.77 2.52,-1.94 1.18,-2.89 -0.66,-2.49 0.02,-2.41 1.21,-5.81 -1.07,-1.94 0.07,-0.75 1.1,-0.98 6.09,0.16 0.73,-0.9 0.7,-2.44 -2.23,0.16 -0.32,-0.45 1.84,-5.1 -0.53,-3.51 0.29,-0.91 2.42,-0.14 3.4,0.91 1.19,1.47 0.58,2.11 2.75,2.14 2.54,0.84 2.69,2.61 0,0 -0.85,0.1 -1.15,2.45 0.66,1.79 0.84,0.31 0.78,1.94 4.77,-0.56 4.96,2.68 0.4,2.1 -0.61,6.1 1.63,5.13 3.41,4.91 3.19,2.8 3.77,4.33 3.67,2.81 0.59,1.01 0,0 -0.43,2.16 0.79,0.44 0.03,2.5 -0.5,0.45 -0.41,-0.67 -0.07,0.58 1.19,1.17 -0.6,1.8 -0.74,0.19 0.1,1.03 -1.03,1.15 0.24,0.17 -1.05,2.38 -5.23,-0.63 -5.74,-0.07 -10.71,0.55 -12.05,1.68 -0.52,-0.46 -1.82,0.36 -0.93,-0.48 -0.88,0.36 -0.95,-0.09 -0.02,0.03 0.5,0.81 0.27,0.43 -3.32,1.32 -0.98,-1.7 -1.17,-0.65 -0.86,-0.19 -0.96,-1.06 0.38,-0.91 -0.09,-0.12 -0.53,0.5 -0.5,-0.38 0,0 -0.61,-1.17 0.04,-0.64 0.51,-0.32 -0.58,-4.55 0.96,-4.27 -0.63,-2.3 -1.98,-3.47 z"
 title="Akwa Ibom"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-AK" />


<path
 d="m 262.67165,444.90874 0.44,0.4 0.09,3.62 3.83,-0.13 2.44,1.41 2.05,0.08 3.73,1.7 0.36,0.79 -1.25,3.45 -0.75,1.08 -1.69,1.14 -1.85,2.48 0.24,0.96 -0.62,0.83 -0.43,2.35 0.39,0.54 3.85,1.16 1.42,1.8 1.34,3.64 1.31,1.85 -0.3,0.96 -0.82,0.29 0.41,1.37 -0.5,1.62 0.72,0.74 1.89,-1.13 0.61,0.13 0.59,2.58 1.33,0.63 -0.35,2.15 1.88,3.79 0.18,1.51 0.76,0.98 2.39,1.4 1.66,-0.96 1.08,0.09 1.12,0.74 -0.04,0.54 0.83,0.17 0,0 -4.4,2.31 -1.36,1.3 -1.27,2.22 0,0 -5.32,1.42 -5.38,-1.25 -6.31,1.16 -1.78,1.04 -0.93,3.55 -2.37,4.61 -2.68,0.27 -4.51,-1.92 -1.62,0.8 -3,3.83 -2.09,0.83 0,0 -2.4,-0.21 -1.11,-1.28 0,0 1.01,-1.17 1.92,-3.9 0.34,-2.64 1.77,-4.69 2.5,-4.55 0.38,-6.01 1.28,-3.65 -1.23,-3.77 -1.48,-7.29 0.08,-1.37 -1.13,-1.13 -2.13,-9.57 0,0 -0.07,-0.29 0,0 1.67,-0.77 3.59,0.66 1.43,-0.89 1.84,-2.51 0.06,-2.73 1.24,-4.12 2.24,-2.31 1.54,-0.86 z"
 title="Anambra"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-AN" />


<path
 d="m 491.94165,87.518745 7.74,6.19 1.14,2.93 0.77,7.079995 -0.19,1.81 3.16,4.66 0.21,6.74 0.33,2.7 0.95,2.71 0.2,3.87 8.35,20.91 -0.23,4.92 -1.05,2.72 -0.99,6.78 1.63,1.53 3.04,0.37 0,0 -0.8,0.24 -2.71,3.76 -6.04,3.28 -2.57,3.7 -2.01,1.75 -1.49,0.76 -3.91,0.88 -1.44,1.36 -1.38,2.03 -0.97,4.94 -2.61,7.43 -3.61,5.07 -0.2,1.38 7.38,2.99 1.14,1.71 0.87,7.15 0.88,1.15 7.2,2.62 2.08,4.94 -0.48,8.63 0.4,2.86 -0.83,1.76 -3.9,0.63 -1.99,0.92 -1.31,1.91 0.33,1.62 4.29,4.38 2.5,1.41 9.15,7.09 1.23,3.79 0.61,6.19 2.58,5.28 1.69,2.12 -0.13,0.95 -0.58,0.16 0,0 -3.99,-0.03 -6.44,-1.09 -10.59,4.85 -5.85,-0.78 -4.59,2.65 0,0 -6.36,-3.43 -6.18,-4.04 -11.07,-4.74 -9.26,-4.93 -2.57,-0.51 -7.6,-3.95 -3.03,1.78 -0.3,1.44 3.17,4.06 0.27,1.74 -0.5,1.67 -4.76,1.3 -2.89,5.21 -4.39,1.41 -10.04,0.59 -5.47,-1.48 -4.8,-0.27 -1.51,-0.53 -1.56,-1.34 -1.65,-4.07 -0.9,-1.16 -0.79,-0.71 -3.92,-1.42 -0.6,-0.85 0.09,-1.69 2.38,-4.47 0.23,-1.17 -0.26,-5.94 -0.97,-3.13 -1.8,-1.92 -1.06,-0.21 -10.97,2.19 0.04,-12.38 -0.78,-4.8 -2.61,-4.16 -2.78,-0.88 -3.18,-0.08 -1.53,0.49 0,0 -2.53,-2.71 -2.79,-1.75 -0.27,-0.73 2.35,-4.2 0.53,-3.96 0,0 0.99,-0.56 2.59,-4.09 1.33,-3.85 -0.08,-2 -0.77,-1.67 -3.86,-4.33 -0.45,-1.99 -0.4,-6.89 0.45,-3.5 1.6,-4.57 1.02,-0.43 2.7,0.16 2.04,-0.51 2.74,-3.21 2.65,-4.11 4.74,-4.17 0.67,-1.1 2.48,-1.57 1.69,-0.3 1.14,1.07 1.14,0.09 5.52,-2.17 0,0 1,-0.19 6,1.1 7.43,2.41 3.35,-1.46 2.3,0.73 1.78,3.67 3.13,0.21 7.7,-0.48 3.57,-0.91 1.14,0.3 2.67,4.9 0.54,2.15 -0.83,7.85 0.81,2.05 1.35,1.36 5.7,1.19 5.6,-1.39 1.56,0.17 1.86,1.36 2.46,0.62 1.86,-0.57 -1.11,-3.43 0.04,-1.8 1.53,-1.91 2.53,-1.36 4.04,-0.99 1.44,-0.78 1.85,-1.39 1.1,-2.72 -1.04,-1.46 -8.87,-0.56 -5.72,-1.27 -6.39,-0.77 -2.99,-1.85 -5.3,-7.42 -1.05,-2.5 -0.47,-2.57 -3.84,0.94 -1.18,-1.11 -0.55,-1.74 2.51,-5 -0.52,-4.32 -1.46,-4.42 -1.81,-0.5 -2.75,0.27 -2.12,1.03 -2.61,0.04 -1.35,-0.63 0.49,-4.26 3.22,-4.54 6.16,-0.46 5.47,-3.04 10.94,-3.73 6.23,-2.51 1.19,-0.94 -0.03,-2.25 -0.57,-1.88 6.71,-20.589995 4.54,-1.95 3.48,-0.55 0.99,0.82 0.83,1.64 0.12,1.39 z"
 title="Bauchi"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-BA" />
<path
 d="m 309.66165,367.75874 9.13,2.48 8.51,1.25 8.71,3.55 4.92,2.82 5.25,0.99 1.07,-0.14 3.32,2.8 5.33,2.23 1.14,-1.1 0.09,-1.36 -4.7,-11.64 -0.08,-2.52 1.02,-2.86 1.24,-1.41 3.95,-2.2 1.38,-0.28 2.59,-0.18 2.68,0.44 10.09,3.72 6.86,1.55 4.88,0.41 3.96,-0.22 0.01,-0.7 11.79,8.93 0,0 -3.79,5.97 1.9,0.57 6.12,-2.63 7.47,-0.95 8.18,0.48 7.48,1.77 5.14,4.9 4.44,5.65 8.37,7.57 -0.14,0.65 1.17,1.36 -0.26,1.04 0.56,1.78 -0.59,3.23 -2.38,5.89 0.29,5.92 -0.92,1.43 -3.09,1.94 -3.44,3.25 -3.31,6.16 -2.11,11.5 0.61,0.73 -0.33,1.08 -0.03,8.76 -1.9,8.19 0,0 -0.72,0.3 -2.12,-0.73 -0.78,1.42 0.1,2 -2.82,1.74 -1.79,0.22 -2.78,-0.44 0,0 -0.65,-1.55 -4.88,-6.63 -5.53,-5.73 -1.49,-0.72 -3.09,-0.22 -9.57,2.24 -4.38,-0.44 -1.21,-0.89 0.66,-4.77 -0.56,-1.64 -8.64,-5.38 -5.43,-1.69 -2.11,-0.07 -2.31,0.59 -2.11,0.67 -1.52,1.2 0.77,4.5 -3.14,1.92 -3.13,0.83 -3.84,-0.14 -2.06,-0.67 -1.92,0.45 -1.36,1.75 -2.36,1.96 -2.99,0.49 0,0 -1.7,-2.27 -0.84,-4.26 -1.76,-1.3 -1.02,2.31 -3.41,0.37 -1.77,2.88 -1.92,0.93 -2.95,-0.25 -3.45,0.4 -1.25,8.23 -0.99,2.05 -1.41,0.59 -1.78,-0.74 -4.01,-3.68 -0.65,-1.54 0.17,-0.91 0,0 2.28,-6.42 -0.9,-5.62 -1.42,-2.14 -1.52,-1.15 -2.81,-0.35 -2.21,2.11 -2.1,0.73 -2.92,-1.52 -3.58,-2.76 -2.89,-3.35 -2.74,-6.51 0.13,-0.53 0,0 0.41,-0.5 0.84,0.58 3.37,3.29 0.82,-0.1 1.35,1.05 1.76,0 0.34,-4.42 0.96,-1.44 6.44,-3.12 3.3,-3.11 1.94,-5.83 0.42,-3.93 0.47,-1.29 1.23,-1.21 0.36,-1.81 -1.48,-0.47 -3.31,0.32 -1.27,-1.05 -1.24,-5.53 -0.57,-6.81 -0.01,-6.9 -0.73,-1.85 -2.7,-2.61 -1.88,-3.22 -0.54,-5.87 z"
 title="Benue"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-BE" />
<path
 d="m 662.15165,11.078745 0.7,5.65 -0.83,3 3.49,6.26 -0.2,2.52 -0.46,0.49 0.28,-2.17 -1.04,1.33 -0.22,1.92 2.38,2.55 2.46,0.61 -0.65,0.67 0.28,0.54 0.78,0.19 4.46,7.53 2.83,3.08 1.05,0.22 1.72,0.96 1.63,1.2 3.87,0.75 0.26,0.86 -0.58,-0.01 -0.56,1.1 -0.2,-1.04 -0.66,0.58 -0.74,-0.04 1.44,1.6 0.27,1.76 3.88,-1.16 2.31,-2.61 2.47,-2.02 1.6,-0.67 -1.08,1.76 0.15,0.45 0.65,-0.19 0.57,2.34 -0.33,0.22 -0.67,-1.38 -0.85,0.48 -0.57,1.23 -2.02,0.57 0.67,1.88 -1.19,1.13 -1.86,3.73 0.41,0.77 1.37,-0.45 -0.07,2.44 -0.58,1.15 0.85,0.04 -0.34,1.36 -1.15,1.54 0.4,0.57 1.57,-0.43 0.29,0.55 -2.63,1.39 1.97,0.5 -0.15,0.89 1.2,0.05 -0.75,0.85 -1.32,0.33 0.12,0.42 1.24,-0.23 0.12,0.6 -0.48,0.44 -0.23,-0.37 -1.01,0.23 0.24,0.75 0.74,-0.12 -0.85,1.67 1.51,0.21 0.22,1.34 -0.57,0.74 0.26,1.25 0.97,0.22 0.53,1.21 -0.24,1.15 1.95,0.55 0.34,1.46 0.61,0.52 1.61,-0.95 0.46,0.2 0.71,1.91 1.22,0.71 0.31,1.08 2.16,0.77 -0.03,1.1 0.67,1 -0.37,1.19 0.71,0.64 1.11,0.55 1.41,-0.5 2,0.26 -0.27,1.04 0.83,0.06 0.39,-0.69 1.81,-0.07 1.47,-0.81 2.46,-0.08 0.17,1.22 1.07,0.09 -0.12,0.91 -1.25,0.32 0.22,0.53 -0.38,0.64 0.95,0.28 2.25,2.61 3.42,-0.53 1.03,-0.05 0.43,0.81 1.72,-0.87 2.93,0.87 3.5,-0.35 0.68,0.31 0.85,0.12 1.61,0.34 0.79,1.2 1.27,0.34 0.34,0.87 -0.67,0.02 0.08,1.119995 2.17,1.01 0.7,1.37 -0.72,1.39 2.99,0.77 0.76,1.5 -0.54,0.46 1.13,0.54 0.78,0.12 0.12,-0.49 0.97,-0.08 0.51,-0.51 1.33,2.51 -1.37,1.29 -0.32,1.8 -0.74,0.87 0.68,2 -1.72,1.16 -0.06,1.57 2.2,3.78 -1.21,1.74 0.23,1.35 -2.32,2.77 0.01,1.5 0.29,3.79 -0.7,1.23 -2.81,2.15 -0.06,0.55 1.26,1.72 2.01,1.13 2.16,2.18 0.44,2.16 -0.62,4.68 -1.26,0.93 -6.36,2.57 -3.88,0.9 -1.7,3.09 -8.09,3.17 -3.28,2.07 -1.93,2.65 -4.46,1.94 -2.32,0.04 -2.72,-2.37 -2.52,-0.44 -1.07,-0.83 -1.07,0.16 -0.61,0.76 -0.58,2.32 -2.08,2.36 -0.78,2.68 -0.72,1.05 -1.46,0.96 0.24,1.49 -0.65,0.21 -1.08,1.68 -2.32,2.04 -1.21,2.91 -3.24,1.61 -2.42,0.54 -0.77,0.75 -0.19,1.74 0,0 -5.62,1.74 -3.86,0.29 -3.75,-1.14 -0.62,-0.74 -3.09,0.43 -0.28,8.01 -0.88,4.1 -1.22,3.64 -2.71,5.68 -1.48,7.76 -1.14,1.22 -4.39,0.01 -2.38,-1.02 -2.43,-1.15 -2.84,-3.11 -2.58,-1.55 -2.87,-1.03 -8.52,-0.79 -2.51,1.47 -2.1,2.16 -2.22,3.7 -2.35,1.14 -3.32,0.14 -0.82,2.66 -2.44,2.62 -5.9,2.22 -6.29,0.49 -2.51,0.87 -6.2,7.06 -3.73,5.55 -1.7,1.9 -1.74,1.07 -4.57,1.32 -2.7,0.19 -6.34,-0.97 0,0 -3.91,-2.2 -1.81,-1.6 -3.13,-6.17 -5.66,-2.34 -1.83,-1.82 -2.43,-3.51 -0.81,-2.83 5.18,-7.56 0.62,-3.02 -1.35,-3.3 0,0 3.04,-0.69 3.41,-4.53 -0.28,-8.39 0.61,-2.77 1.72,-2.83 2.66,-1.92 11.21,-3.02 6.11,-3.65 2.09,-3.08 0.24,-2.94 -0.76,-4.15 -0.04,-2.97 0.9,-2.86 2.89,-3.35 3.3,-5.9 4.54,-4.43 0.99,-2.11 -0.84,-3.33 -3.13,-3.75 -4.91,0.21 -0.64,-0.36 -0.15,-1.94 4.72,-9.14 -1.69,-7.44 0.13,-3.5 2.54,-16.29 0.05,-5.789995 -1.72,-3.83 0.55,-2.2 7.06,-6.31 2.37,-3.08 1.84,-4.21 -0.48,-3.74 -4.8,-3.84 -1.45,-1.82 -1.23,-3.85 1.49,-8.02 0.08,-4.21 0,0 1.45,-0.12 4.38,0.88 0.03,-1.19 0.59,-0.41 0.07,-0.74 0.19,-1.71 1.48,-1.33 1.14,0.24 1.35,-0.73 -0.34,-1.16 0.73,-1.08 -0.23,-0.32 -0.89,-0.19 0.4,-1.13 0.77,-1.33 0.8,-1.78 0.64,-0.6 2.28,0.35 1.38,-0.87 0.96,0.09 0.61,0.74 0.96,-1.11 0.23,-1.44 1.34,-0.23 1.47,-0.29 0.29,-0.46 -0.34,-0.4 0.98,-1.17 2.11,-0.48 0.62,-1.24 1.37,-0.78 0.16,-0.79 0.58,-0.74 0.4,-0.74 -0.02,-0.86 1.1,-0.43 0.43,-1.02 -0.81,-0.31 0.57,-0.61 1.23,0.63 -0.29,-1.57 1.1,0.12 0.06,0.47 0.85,0.29 1.1,-0.14 1.87,-1.67 1.02,-0.37 0.32,0.38 1.98,-0.1 1.39,-1.33 1.02,0.49 0.05,-1.08 1.08,-0.36 1.02,0.09 -0.89,1.17 1.47,0.79 0.92,-1.31 1.35,1.04 -0.2,-1.31 1.48,-0.51 -0.31,2.08 0.92,0.12 0.45,-0.97 1.15,-0.25 0.92,1.39 0.96,-2.53 1.66,-0.84 0.02,-0.44 -0.55,-0.19 0.19,-0.71 1.19,0.2 0.64,-0.8 -0.64,-0.17 -0.4,-1.02 1.68,-1.6 -0.06,-0.58 1.49,-0.67 -0.05,-0.93 1.05,-1.06 1.24,-0.24 0.39,-1.06 z"
 title="Borno"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-BO" />
<path
 d="m 251.22165,579.30874 -0.21,-0.62 -0.68,0.1 -3.96,-2.6 -1.2,-4.38 -1.38,-1.87 -1.99,-0.02 -6.54,2.54 -1.04,-0.26 -0.35,-1.94 0.42,-1.46 -3.31,-1.44 -0.5,-0.83 0.07,-4.34 1.9,-2.67 0.76,-2.05 0.03,-1.27 -1.29,0.16 -0.84,-0.78 1.33,-4.44 4.49,-7.84 2.77,0.17 0.55,-0.5 0.75,-2.49 1.54,-0.79 -0.23,-1.81 1.58,-1.07 0.95,-1.48 -0.03,-1.94 -0.63,-1.54 -0.76,-0.58 -1.92,-0.83 -2.94,0.49 -1.04,-0.28 0.77,2.47 -1.2,0.85 -5.08,2.19 -3.49,-0.44 -2.74,0.49 -2.01,4.1 -2.11,0.52 -0.79,-0.6 -1.47,-0.08 -0.36,0.95 0.26,2.31 -2.83,1.56 -1.62,0.56 -3.01,-0.24 -1.23,1.99 -2.31,0.62 -1.89,-0.67 -0.99,-1.66 -2.11,-1.28 -0.75,0.5 -1.48,3.07 -3.3,1.64 -2.62,-0.42 -7.48,4.1 -0.94,-0.37 -2.32,0.4 -1,-1.1 -2.69,-1.6 -3.05,-0.71 -2.9,-1.66 -2.1,-2.1 -0.56,0.72 -0.72,-0.57 -1.43,0.53 -0.36,-0.5 -1.63,0.84 2.36,4.61 1.91,5.81 -0.34,0.79 0.95,1.52 0.35,1.86 4.06,6.77 0.19,1.44 0.94,0.55 0.01,0.17 0.05,1.1 7.5,10.38 1.19,0.62 -0.02,0.75 2.77,1.35 -0.27,0.41 1.05,0.75 0.12,0.65 2.56,1.59 0.19,-0.39 0.31,0.34 -0.22,0.24 0.02,0.34 2.61,2.16 0.48,-0.02 -0.14,-0.77 -0.45,-0.21 1.58,-0.46 -0.76,0.7 0.33,0.72 -0.26,0.27 0.07,0.51 2.32,1.7 5.07,2.36 0.19,-2 -0.79,-0.51 -0.55,-1.25 0.34,0.12 0.29,0.89 0.79,0.22 -0.12,-0.7 0.41,0.03 -0.02,0.7 0.52,0.17 0.26,0.77 -0.62,1.18 0.26,0.43 -0.34,1.3 0.4,0.29 5.18,1.32 0.19,-2.23 0.65,-0.58 0.38,3.84 8.34,-0.7 -0.64,-2.4 1.03,-3.05 0.65,-1.1 -0.29,-1.37 -1.91,-1.15 0.48,-0.05 1.19,0.27 0.96,1.58 0.6,-1.13 -0.55,-0.79 0.09,-2.14 -0.84,-1.35 0.31,-0.74 0.17,1.03 0.69,0.55 0.03,0.38 0.74,2.02 -0.1,3.1 2.72,-2.47 -0.58,-0.63 0.1,-1.94 1.91,-0.6 0.5,-0.63 0.69,1.61 0.12,1.29 -0.48,1.03 0.6,1.32 0.05,1.61 1.34,0.26 1.08,1.51 0.48,-0.05 -0.19,0.33 0.22,0.43 2.17,-0.48 0.19,0.34 -0.62,0.65 1.53,0.79 8.46,-0.91 0.02,-0.48 -0.4,-0.51 -0.07,-0.77 -0.1,-0.34 0.67,-0.86 0.6,-0.58 -0.52,2.04 0.22,0.39 2.03,1.76 0.96,-0.98 3.53,-0.38 -0.5,-2.47 -0.09,-0.38 -0.38,-1.13 -1.15,-0.75 -0.19,-0.99 0.02,-0.19 0.29,-1.06 -0.53,-2.25 -0.41,-0.55 0.35,-0.36 0.76,0.9 1.25,4.2 0.38,-0.58 -0.65,-5.23 1.7,-3.39 0.26,-1.83 z m -78.3,-19.41 0,0 0.01,0.01 -0.01,-0.01 z m 59.51,37.48 -8.22,0.99 -2.8,-0.1 -0.22,-0.7 1.36,-2.52 0.15,-0.02 0.45,0.04 0.14,-1.3 1.98,-2.19 0.12,-0.31 0.43,-0.89 0.45,-0.19 -0.59,-0.77 -0.18,-1.3 0.55,-0.35 1.03,-0.19 0.9,1.34 -0.5,1.33 0.78,1.62 -0.22,1.57 1.63,0.44 0.65,0.92 2.11,2.58 z"
 title="Bayelsa"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-BY" />
<path
 d="m 348.48165,451.12874 2.99,-0.49 2.36,-1.96 1.36,-1.75 1.92,-0.45 2.06,0.67 3.84,0.14 3.13,-0.83 3.14,-1.92 -0.77,-4.5 1.52,-1.2 2.11,-0.67 2.31,-0.59 2.11,0.07 5.43,1.69 8.64,5.38 0.56,1.64 -0.66,4.77 1.21,0.89 4.38,0.44 9.57,-2.24 3.09,0.22 1.49,0.72 5.53,5.73 4.88,6.63 0.65,1.55 0,0 -2.17,8.34 -5.15,-2.21 -0.78,1.84 -0.02,1.98 -0.58,0.73 -1.08,0.94 -2.8,4.86 -3.23,0.94 -1.63,1.19 -1.2,1.18 -0.95,2.5 -0.99,0.97 -8.72,7.77 -3.81,2.73 -1.12,0.33 -1.64,2.3 -1.69,0.87 -1.3,1.48 0.4,0.86 1.36,1.04 -1.05,1.48 0.4,0.83 -0.45,0.96 -1.47,1.87 -0.57,-0.58 0.05,1.5 5.1,5.64 0.31,1.76 -2.4,4.05 -0.64,2.4 -1.12,1.36 0.21,3.89 -1.81,5.88 0.15,6.56 -2.54,4.2 -1.89,0.77 -0.08,0.84 -1.34,1.04 -1.22,3.3 -1.25,1.04 0.97,1.02 -0.9,0.35 -0.98,1.24 0.05,0.57 -1.01,0.38 0.09,1.76 -1.97,0.75 -1.02,1.25 -0.02,0.96 1.2,1.14 0.34,1.53 -2.42,1.46 -1.09,-0.24 -0.68,-0.72 -1.03,0.82 -0.64,1.52 -0.75,0.53 -0.16,1.47 0.67,0.07 0.6,-1.75 0.26,2.51 -0.36,0.56 -0.43,-0.67 -0.6,0.14 0.58,1.44 -1.48,0.27 0.06,0.76 -1.78,0.29 -1.47,-0.6 0.51,-1.77 1.07,-0.12 -1.27,-1.61 -0.8,1.22 -1.16,0.48 -2.07,-0.46 -0.65,-1.15 0.77,-0.7 0.21,-0.16 -0.31,-0.91 -1.36,0.41 -1.13,-0.63 -2.38,2.18 0,0 -0.59,-1.01 -3.67,-2.81 -3.78,-4.34 -3.18,-2.8 -3.41,-4.91 -1.63,-5.13 0.61,-6.1 -0.39,-2.1 -4.96,-2.68 -4.77,0.56 -0.79,-1.94 -0.83,-0.31 -0.66,-1.79 1.15,-2.45 0.85,-0.1 0,0 3.42,0.76 0.6,-1.21 -0.76,-2.55 -1.71,-2 -0.73,-1.68 -1.37,-4.63 -0.15,-3.78 0.59,-3.72 -1.08,-1.29 0,0 0.38,-2.39 2.34,-3.11 -0.36,-2.66 1.46,-1.26 0.34,-1.35 1.98,-2.29 0.08,-2.42 -1.14,-1.8 0.19,-0.98 2.27,-1.08 2.62,-0.18 2.69,4.5 1.34,-2.08 2.16,-0.77 2.2,-1.71 0.28,-1.31 1.88,-0.29 2.18,1.26 0.84,-0.91 0.68,-2.3 0.1,-2.59 0.8,-1.47 6.92,-8.39 0.02,-1.4 -1.86,-2.6 -0.01,-1.6 1.65,-1.63 2.19,-0.37 0.83,-1.7 -0.24,-1.05 -1.38,-1 -0.41,-1.5 -0.52,-0.37 0.1,-1.94 -1.28,-1.12 -0.5,-1.71 -2.7,-1.87 -1.99,-2.62 z"
 title="Cross River"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-CR" />
<path
 d="m 252.45165,479.95874 -1.48,-7.29 0.08,-1.37 -1.13,-1.13 -2.13,-9.57 -1.88,2.04 -4.1,-0.38 -3.73,0.81 -8.19,5.12 -7.35,3.1 -4.03,4.53 -0.64,0.05 -2.58,-3.94 -1.01,-0.42 -1.67,-0.31 -1.78,1.58 -0.89,2.03 -0.15,2.37 0.4,0.75 1.46,0.81 0.54,4.82 2.03,3.59 1.96,2.42 1.88,1.46 2.23,0.81 0.29,1.75 -0.7,3.24 -1.55,1.91 -1.63,1.66 -3.08,2.03 -2.29,3.07 -2.78,1.99 -1.81,0.6 -5.23,1.04 -2.13,-0.56 0.7,-1.8 -1.6,-1.61 2.04,-4.03 -0.47,-0.83 -3.91,-2.35 -2,-2.83 -4.67,-2.62 -3.17,-1.25 -1.64,-1.34 -5.12,1.85 -1.85,2.38 -1.77,-0.4 -2.27,-1.98 -1.38,-0.29 -3.17,0.67 -2.98,-0.72 -0.99,0.31 -0.63,0.3 -0.06,1.03 0.89,1.57 -0.52,1.06 -4.1,3.22 -1.66,0.07 -0.05,-2.47 -0.66,-2.55 0.7,-2.93 -0.15,-1.43 -1.66,-1.67 -5.43,-2.8 -6.9,16.74 2.48,4.48 1.39,0.88 0.58,-1.6 1.31,-1.25 7.76,-4.22 1.26,-0.22 1.85,-1.28 1.13,-0.54 0.36,0.51 -0.02,0.17 -2,0.95 -1.01,1.6 -0.07,0.26 -0.83,-0.53 -2.25,0.98 -3.18,2.51 -0.34,0.75 -1.98,-0.45 -1.05,0.82 -0.79,3.14 0.26,1.54 2.63,4.5 3.18,3.14 1.12,-0.53 3.01,-1.34 2.97,0.41 0.74,-3.16 1.15,-2.15 -0.02,-0.38 0.4,-0.3 0,0.01 0.38,0.12 -0.23,0.14 -0.24,1.9 -1.12,2.27 1,2.13 1.91,0.63 1.63,-0.27 1.58,-3.18 1.6,0.1 0.19,-0.25 0,0.01 2.99,1.54 1.12,0.67 0.19,0.48 -1.19,-0.34 0.27,0.77 0.1,1.32 -1.33,-0.35 0.97,-0.67 -0.33,-1.34 -1.12,-0.72 -3.13,-0.29 -0.6,0.14 0.09,1.63 -0.55,1.13 -2.34,1.97 1,-1.58 -1.79,0.15 -2.1,-0.55 -4.44,-0.67 -1.96,0.19 -0.12,0.84 -1.62,1.08 -1.26,1.67 2.77,3.96 3.04,2.61 6.04,2.63 5.09,0.29 0.02,-0.65 -1.19,-1.39 -0.95,-2.9 -0.26,-0.45 0.07,-0.74 0.47,-0.12 -0.19,0.82 1,2.2 0.83,-0.6 0.36,0 -0.07,0.22 -0.95,1.08 0.26,0.5 2.65,1.12 0.57,-0.21 1.65,-4.8 0.84,-1.46 0.96,-0.62 -0.64,-0.33 3.2,0.12 0.48,0.15 1.05,-0.46 0.46,-1.13 0.74,-0.38 1.12,0.17 0.95,0.91 0.61,-0.66 0.09,0.23 -0.12,0.75 -0.89,0.04 -1.38,-0.94 -1.01,1.68 -1.58,0.79 -1.81,-0.12 0.22,0.86 -0.96,-0.98 -1.32,0.36 -0.55,3.02 0.27,1.32 0.58,1.08 0.45,0.72 3.36,1.09 -0.3,0.8 -1.55,-1.12 -0.65,0.36 -0.03,0.7 -0.07,0.22 -0.49,0.13 0.32,-1.47 -0.31,-0.12 -0.43,-0.34 -0.45,-0.46 -0.45,0.48 -0.74,0.5 -0.36,0.53 -0.79,0.12 -1.12,0.57 0.91,0.46 2.05,-0.1 -2.97,0.96 -0.4,0.63 -1,-1.61 -0.6,0.05 -0.28,-0.02 -2.53,0.15 -1.17,0.63 -0.07,-0.39 -0.69,-0.07 -0.41,-0.31 -0.67,0.22 -0.83,-0.43 0.05,2.44 1.91,7.63 -0.24,1.66 2.08,2.26 2.05,-0.88 2.65,-0.17 -0.89,-1.35 -0.09,-1.12 0.15,-0.24 0.5,-2.38 0.29,-0.03 -0.15,0.6 0.15,0.41 -0.52,2.69 0.88,0.55 -0.1,1.53 -0.8,0.31 2.1,2.1 2.9,1.66 3.05,0.71 2.69,1.6 1,1.1 2.32,-0.4 0.94,0.37 7.48,-4.1 2.62,0.42 3.3,-1.64 1.48,-3.07 0.75,-0.5 2.11,1.28 0.99,1.66 1.89,0.67 2.31,-0.62 1.23,-1.99 3.01,0.24 1.62,-0.56 2.83,-1.56 -0.26,-2.31 0.36,-0.95 1.47,0.08 0.79,0.6 2.11,-0.52 2.01,-4.1 2.74,-0.49 3.49,0.44 5.08,-2.19 1.2,-0.85 -0.77,-2.47 -0.57,-1.04 0.21,-0.44 3.52,-1.81 0.19,-5.3 0.7,-1.48 2.05,-1.42 0.89,-1.75 0.82,-3.18 -1.09,-3.54 0.23,-0.35 1.01,-1.17 1.92,-3.9 0.34,-2.63 1.76,-4.69 2.5,-4.55 0.38,-6.01 1.27,-3.65 -1.18,-3.74 z"
 title="Delta"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-DE" />
<path
 d="m 319.74165,453.93874 -0.17,0.91 0.65,1.54 4.01,3.68 1.78,0.74 1.41,-0.59 0.99,-2.05 1.25,-8.23 3.45,-0.4 2.95,0.25 1.92,-0.93 1.77,-2.88 3.41,-0.37 1.02,-2.31 1.76,1.3 0.84,4.26 1.7,2.27 0,0 0.49,2.89 1.99,2.62 2.7,1.87 0.5,1.71 1.28,1.12 -0.1,1.94 0.52,0.37 0.41,1.5 1.38,1 0.24,1.05 -0.83,1.7 -2.19,0.37 -1.65,1.63 0.01,1.6 1.86,2.6 -0.02,1.4 -6.92,8.39 -0.8,1.47 -0.1,2.59 -0.68,2.3 -0.84,0.91 -2.18,-1.26 -1.88,0.29 -0.28,1.31 -2.2,1.71 -2.16,0.77 -1.34,2.08 -2.69,-4.5 -2.62,0.18 -2.27,1.08 -0.19,0.98 1.14,1.8 -0.08,2.42 -1.98,2.29 -0.34,1.35 -1.46,1.26 0.36,2.66 -2.34,3.11 -0.38,2.39 0,0 -1.34,-0.21 -3.21,-2.33 -0.7,-1.04 -0.22,-2.19 -1.24,-1.86 -14.09,-0.86 -0.94,-1.03 -0.05,-0.73 0.55,-2.86 -0.07,-4.36 0,0 3.63,-1.01 1.99,1.7 0.77,0.09 2.11,2.51 0.73,0.07 0.65,-1.44 -0.8,-2.92 -0.15,-2.64 2.67,-2.73 0.8,-1.73 -0.99,-6.64 -0.62,-2.55 -1.08,-1.07 0.02,-1.23 2.74,-6.11 0.01,-5.82 -0.65,-1.15 -0.38,-3.29 -1.48,-4.9 6.45,0.55 z"
 title="Ebonyi"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-EB" />
<path
 d="m 208.35165,395.48874 0.77,0.64 1.75,-0.37 0.7,0.36 0.28,0.68 -0.38,0.89 0.46,0.65 2.18,-0.25 0.27,0.8 -0.96,1.85 -0.23,1.93 0.28,1.05 1.08,0.78 2.13,0.53 5.94,-2.93 1.56,2.1 0.65,-0.07 1.26,1.41 0.55,-0.06 1.96,2.23 2.26,-0.19 0.74,-0.51 2.56,0.15 1.06,2.01 0.07,1.22 0.85,0.61 0.48,1.74 0.74,0.56 -0.24,0.51 0.66,1.63 3.75,-0.84 0.43,0.38 1.46,-0.99 1.87,-0.41 1.75,1.41 0.55,2.12 1.45,1.08 0.79,2.01 0.15,3.41 -0.31,1.92 -1.62,3.94 0.06,4.16 -1.91,4.82 -2.16,3.55 1.28,2.15 -0.93,5.52 0.89,2.6 1.41,2.01 1.03,6.03 0,0 0.07,0.29 0,0 -1.88,2.03 -4.09,-0.38 -3.73,0.81 -8.19,5.11 -7.35,3.1 -4.03,4.53 -0.65,0.04 -2.58,-3.94 -1.01,-0.41 -1.66,-0.32 -1.79,1.59 -0.89,2.02 -0.15,2.37 0.4,0.75 1.46,0.81 0.54,4.82 2.03,3.58 1.96,2.42 1.88,1.46 2.23,0.81 0.28,1.74 -0.69,3.24 -1.55,1.91 -1.62,1.66 -3.08,2.03 -2.3,3.07 -2.77,1.99 -1.81,0.6 -5.24,1.04 -2.13,-0.57 0.7,-1.8 -1.6,-1.61 2.03,-4.03 -0.47,-0.83 -3.9,-2.35 -2,-2.83 -4.68,-2.62 -3.16,-1.25 -1.64,-1.34 -5.12,1.85 -1.85,2.38 -1.77,-0.4 -2.27,-1.98 -1.38,-0.29 -3.17,0.67 -2.97,-0.72 -0.99,0.31 -0.64,0.3 -0.06,1.03 0.89,1.57 -0.52,1.06 -4.09,3.23 -1.66,0.07 -0.05,-2.47 -0.66,-2.55 0.71,-2.93 -0.15,-1.43 -1.66,-1.67 -5.43,-2.79 0,0 0.39,-1.16 -1.23,-2.26 -1.33,-1.04 -1.56,-0.09 -1.65,-2.94 -1.94,-1.36 -0.7,-0.06 -0.44,-0.91 0.25,-0.59 -0.28,0.44 0.8,-0.7 0.96,-3.63 0.58,-0.61 2.95,-0.87 0.84,-3.74 1.74,-1.71 0.84,-1.96 0.35,-1.72 -0.57,-1.45 -1.4,-2.28 -1.23,-0.64 0,-2.84 0.81,-0.98 -0.1,-2.22 0.49,-0.96 1.75,-1.62 0.45,-1.03 1.73,-0.8 0.79,-2.27 0.96,-0.69 0.09,-1.95 0.45,-0.78 2.2,-1.01 2.13,0.4 2.28,-0.38 1.68,0.36 6.64,0.11 3.29,-0.38 1.64,0.34 1.74,2.08 -2.01,2.26 2.1,5.46 0.74,-0.03 3.77,-3.16 1.34,0.12 1.19,1.48 0.81,0.35 2.68,-1.02 1.51,-3.39 0.95,-4.96 0.25,-0.25 1.19,0.51 0.01,-1.63 0.88,-0.52 -0.15,-0.81 -1.18,-1.28 0.61,-4.64 1.24,-1.66 1.52,-0.73 0.37,-0.85 -0.32,-0.84 3.23,-6.89 -0.15,-1.39 0.47,-1.04 1.76,-1.83 2.15,-1.05 1.43,-3.54 -0.43,-0.28 -0.77,-2.48 0.87,-2.89 -2.01,-0.82 -0.4,-0.84 0.18,-1.39 1.41,-1.72 1.56,0.14 0.89,-0.6 z"
 title="Edo"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-ED" />
<path
 d="m 148.66165,367.10874 0.41,-0.17 0.61,1.67 1.03,0.49 4.48,-1.25 0.95,0.37 1.47,2.06 0.95,0.49 2.33,-0.23 2.3,0.62 1.95,-0.58 1.29,0.55 1.04,-2.16 -0.29,-0.63 0.82,-2.22 4.11,-1.34 5.76,-0.09 0,0 -1.09,0.42 -0.03,4.28 0.55,0.45 2.48,-1.42 3.67,-0.64 2.31,0.27 0.56,0.7 -0.28,1.37 -1.34,0.64 -2.29,3.01 -0.08,1.56 1.32,3.75 1.32,0.96 1.28,0.03 1.85,1.69 6.82,2.39 0,0 -1.52,2.4 -0.82,0.3 -1.5,-1.25 -1.86,0.39 -0.85,2.06 -2.18,1.45 -2.4,2.48 -1.13,2.14 -1.71,8.1 -1.7,3.92 -3.05,4.43 -5.53,3.49 -2.27,-0.59 -1.09,-2.68 0.16,-0.86 -1.04,-3.19 -1.42,-2.22 -1.55,-0.52 -6.97,0.31 -7.78,-0.44 -4.55,1.45 0,0 -0.83,-1.7 -0.84,-3.79 -2.85,-6.11 -0.69,-4.78 1.19,-3.99 -0.81,-2.81 0.12,-1.4 1.9,-4.25 1.62,-1.5 2.18,-0.94 1.99,-1.64 z"
 title="Ekiti"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-EK" />
<path
 d="m 262.67165,444.90874 2.73,-5.01 0.91,0.25 0.18,2.28 0.74,0.05 1.33,2.01 0.69,0.34 1.24,-0.33 4.97,-5.39 5.98,-3.86 6.18,-7.42 2.44,-0.91 2.14,-2.1 3.31,-0.76 2.44,0.75 1.11,1.62 0,0 -0.13,0.53 2.74,6.51 2.89,3.35 3.58,2.76 2.92,1.52 2.1,-0.73 2.21,-2.11 2.81,0.35 1.52,1.15 1.42,2.14 0.9,5.62 -2.28,6.42 0,0 -1.79,0.36 -6.45,-0.55 1.48,4.9 0.38,3.29 0.65,1.15 -0.01,5.82 -2.74,6.11 -0.02,1.23 1.08,1.07 0.62,2.55 0.99,6.64 -0.8,1.73 -2.67,2.73 0.15,2.64 0.8,2.92 -0.65,1.44 -0.73,-0.07 -2.11,-2.51 -0.77,-0.09 -1.99,-1.7 -3.63,1.01 0,0 -0.33,-1.46 -2.05,-1.34 -2.71,-0.27 -4.83,0.89 -0.6,-0.77 0,0 -0.83,-0.17 0.04,-0.54 -1.12,-0.74 -1.08,-0.09 -1.66,0.96 -2.39,-1.4 -0.76,-0.98 -0.18,-1.51 -1.88,-3.79 0.35,-2.15 -1.33,-0.63 -0.59,-2.58 -0.61,-0.13 -1.89,1.13 -0.72,-0.74 0.5,-1.62 -0.41,-1.37 0.82,-0.29 0.3,-0.96 -1.31,-1.85 -1.34,-3.64 -1.42,-1.8 -3.85,-1.16 -0.39,-0.54 0.43,-2.35 0.62,-0.83 -0.24,-0.96 1.85,-2.48 1.69,-1.14 0.75,-1.08 1.25,-3.45 -0.36,-0.79 -3.73,-1.7 -2.05,-0.08 -2.44,-1.41 -3.83,0.13 -0.09,-3.62 z"
 title="Enugu"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-EN" />
<path
 d="m 287.74165,288.29874 6.12,-0.63 3.2,0.32 1.52,0.85 1.13,-0.85 1.81,-3.04 1.06,-0.54 1.07,0.43 1.47,3.11 0.94,0.31 1.18,-0.79 0,0 -0.07,2.44 -0.42,0.62 -1.03,0.07 -0.53,0.61 -2.11,6.52 -0.08,5.62 0.51,2.19 -0.55,7 -1.98,5.27 -1.52,7.95 -0.79,0.36 -1.08,3.4 -1.04,1.64 -3.78,4.62 -6.96,3.64 -4.63,1.06 -2.91,1.2 -11.13,1.75 0,0 -1.4,0.46 -7.46,-0.15 0,0 -1.83,0.21 -1.42,-0.47 -1.95,-4.91 0.46,-1.37 -0.75,-30.21 0.36,-13.66 0.34,-0.38 2.68,-0.33 11.03,-0.47 1.76,0.63 9.19,8.1 0.94,-0.24 z"
 title="Federal Capital Territory"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-FC" />
<path
 d="m 517.00165,163.43874 0.91,-0.88 4.17,-1.51 4.04,0.17 2.98,1.01 2.18,1.29 8.49,6.26 4.75,6.4 3.42,3.58 -1,1.54 1.58,-1.02 3.68,3.38 0.67,4.87 -1.2,11.85 0.77,6.45 0.3,0.51 6.78,-0.01 0,0 1.35,3.3 -0.62,3.02 -5.18,7.56 0.81,2.83 2.43,3.51 1.83,1.82 5.66,2.34 3.13,6.17 1.81,1.6 3.91,2.2 0,0 -0.68,10.23 0.52,3.7 -1.1,2.33 -5.75,4 -9.4,5.66 -3.37,1.43 -6.2,0.91 0,0 -6.37,0.47 -12.46,-0.02 -5.9,0.6 -3.57,-0.71 0,0 0.58,-0.16 0.13,-0.95 -1.69,-2.12 -2.58,-5.28 -0.61,-6.19 -1.23,-3.79 -9.15,-7.09 -2.5,-1.41 -4.29,-4.38 -0.33,-1.62 1.31,-1.91 1.99,-0.92 3.9,-0.63 0.83,-1.76 -0.4,-2.86 0.48,-8.63 -2.08,-4.94 -7.2,-2.62 -0.88,-1.15 -0.87,-7.15 -1.14,-1.71 -7.38,-2.99 0.2,-1.38 3.61,-5.07 2.61,-7.43 0.97,-4.94 1.38,-2.03 1.44,-1.36 3.91,-0.88 1.49,-0.76 2.01,-1.75 2.57,-3.7 6.04,-3.28 2.71,-3.76 z"
 title="Gombe"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-GO" />
<path
 d="m 283.98165,497.48874 2.01,1.69 5.34,1.78 1.04,1.45 0.47,1.35 0.38,8.47 -1.23,0.77 1.51,2.44 -0.28,2.05 0.36,3.45 -0.43,2.01 -0.89,0.9 -1.18,3.04 -1.82,1.68 -2.1,3.87 -3.09,10.25 0,0 -2.57,0.95 -4.52,-1.13 -2.13,0.04 -4.15,1.06 -4.69,-1.11 -6.72,0.14 -2.14,-0.41 -2.16,-1.65 -1.72,-3.4 -1.84,-1.3 -0.26,-1.37 1.09,-2.76 0.52,-4.63 -0.45,-1.66 -2.12,-0.77 -3.46,0.67 -1.51,-0.44 2.75,-13.09 0,0 2.09,-0.83 3,-3.83 1.62,-0.8 4.51,1.92 2.68,-0.27 2.37,-4.61 0.93,-3.55 1.78,-1.04 6.31,-1.16 5.38,1.25 z"
 title="Imo"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-IM" />
<path
 d="m 434.10165,67.298745 1.79,1.18 6,0.73 3.14,-1.8 2.1,-3.99 5.32,-2.59 3.16,-0.63 2.82,-1.37 6.33,-1.96 2.21,1.25 2.13,4.78 0.69,4.35 1.46,2.53 1.12,-0.72 5.86,-1.86 4.99,2.22 2.03,-0.61 1.85,0.88 2.21,3.4 1.76,11.53 0.87,2.9 0,0 -11.06,6.93 -0.12,-1.39 -0.83,-1.64 -0.99,-0.82 -3.48,0.55 -4.54,1.95 -6.71,20.589995 0.57,1.88 0.03,2.25 -1.19,0.94 -6.23,2.51 -10.94,3.73 -5.47,3.04 -6.16,0.46 -3.22,4.54 -0.49,4.26 1.35,0.63 2.61,-0.04 2.12,-1.03 2.75,-0.27 1.81,0.5 1.46,4.42 0.52,4.32 -2.51,5 0.55,1.74 1.18,1.11 3.84,-0.94 0.47,2.57 1.05,2.5 5.3,7.42 2.99,1.85 6.39,0.77 5.72,1.27 8.87,0.56 1.04,1.46 -1.1,2.72 -1.85,1.39 -1.44,0.78 -4.04,0.99 -2.53,1.36 -1.53,1.91 -0.04,1.8 1.11,3.43 -1.86,0.57 -2.46,-0.62 -1.86,-1.36 -1.56,-0.17 -5.6,1.39 -5.7,-1.19 -1.35,-1.36 -0.81,-2.05 0.83,-7.85 -0.54,-2.15 -2.67,-4.9 -1.14,-0.3 -3.57,0.91 -7.7,0.48 -3.13,-0.21 -1.78,-3.67 -2.3,-0.73 -3.35,1.46 -7.43,-2.41 -6,-1.1 -1,0.19 0,0 -0.08,-2.24 1.08,-3.72 7.12,-6.88 -0.89,-1.15 -2.09,-0.53 -2.83,-2.64 -1.48,-2.75 -0.5,-2 -1.09,-0.99 -5.06,0.15 -0.2,-1.96 0.5,-2.09 3.36,-4.69 0.19,-2.05 1.06,-1.84 -0.19,-2.46 -2.28,-7.18 -1.25,0.53 -1.47,1.75 -2.32,1.42 -1.82,0.18 -1.37,-0.25 -0.01,-2.57 -0.57,-1.44 -3.14,0.25 -1.9,1.19 0,-1.03 -1.65,-0.72 0.53,-1.72 1.18,-1.39 0.08,-5.61 -0.8,-2.94 -0.92,-0.81 -1.85,-0.56 -5.44,-0.56 -0.83,-0.42 -1.02,-1.389995 0.57,-2.01 -1.1,-3.08 -3.81,-2.12 -1.13,-1.38 -0.45,-5.92 -7.78,-2.02 -3.77,0.35 -3.99,1.93 -1.73,1.35 -0.62,2.6 -1.87,3.61 -1.07,-1.12 -0.1,-1.96 -3.51,-6.28 0,0 -1.24,-2.62 -0.83,-0.7 -4.94,-0.12 -2.86,-0.93 -0.59,-0.72 -0.07,-3.85 0.75,-3.4 -0.02,-2.69 0.46,-0.3 10.39,-1.38 5.37,0.99 9.22,-0.78 1.17,1.23 1.41,4.68 0.68,0.94 2.66,1.67 1.99,0.52 2.62,-1.51 0.64,1.56 1.49,0.7 3.68,-0.55 4.18,-1.74 3.19,-2.58 1.03,-2.63 0.58,-0.75 2,-0.88 0.01,-0.86 0,0 1.27,-0.39 10.06,0.44 9.02,1.42 5.24,-0.75 6.06,0.78 10.03,0.45 z"
 title="Jigawa"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-JI" />
<path
 d="m 316.55165,159.39874 3.09,0.02 2.44,-0.67 4.18,-3.83 4.8,-2.84 1.65,0 4.08,-1.24 1.22,0.19 1.13,0.82 0.32,1.25 -2.11,4.02 0.53,2.57 1.04,1.18 3.53,1.83 3.75,1.23 3.51,4.13 1.53,0.55 2.78,-0.03 2.45,0.59 5.38,4.43 3.59,6.42 0.38,3.88 -1.01,2.44 -1.01,4.91 1.2,6.05 -0.2,1.73 -0.72,1.1 -3.55,0.96 -0.55,0.79 0.6,2.08 1.06,1.07 7.02,0.97 1.98,2.75 1.6,1.05 3,0.64 1.05,-0.29 0,0 -0.53,3.96 -2.35,4.2 0.27,0.73 2.79,1.75 2.53,2.71 0,0 -0.37,0.29 -0.21,2.9 -0.55,1.43 -1.32,1.56 -2.19,0.73 -1.9,1.4 -2.13,4.97 -0.22,2.71 1.36,2.82 0.75,3.52 -2.39,1.97 -0.34,1.1 0.18,1.97 -0.7,7.81 0.53,2.1 -0.42,1.07 -1.91,1.55 -0.4,3.08 -1.76,1.28 0.21,4.74 -1.05,1.4 0.1,1.16 3.26,5.28 2.57,3.08 1.71,1.21 1,2.09 0.12,3.41 -1.67,3.94 0,0 -1.09,0.57 -2.65,5.61 -3.31,5.4 -0.82,0.72 -1.61,0.42 -2.47,-0.13 -0.6,-1.9 -5.34,-5.91 -3.81,-0.24 -1.5,-1.25 -1.33,-0.22 -1.29,0.98 -0.89,1.9 -4.16,4.75 -2.35,1.6 -1.15,0.21 -1.34,-0.96 -0.4,-1.31 0.05,-9.7 -1.03,-1.61 -4.22,-2.44 -0.32,-3.25 -2.93,-2.67 -1.1,-0.39 -1.01,0.35 -1.65,2.12 -0.94,2.54 -2.31,2.1 -1.1,0 -1.75,-1.06 -1.34,0.25 -2.44,-1.79 -0.93,-0.14 -1.5,0.61 -0.7,-0.79 -0.6,-1.88 -0.75,-0.11 -1.34,1.02 0,0 -1.18,0.79 -0.94,-0.31 -1.47,-3.11 -1.07,-0.43 -1.06,0.54 -1.81,3.04 -1.13,0.85 -1.52,-0.85 -3.2,-0.32 -6.12,0.63 0,0 -1.23,-0.42 -2.46,0.6 1.38,-4.13 -3.39,-2.78 0.09,-2.32 0.56,-0.93 2.45,-1.29 0.79,-0.87 0.6,-2.79 3.09,-3.17 -0.58,-1.88 -3,-1.62 0.83,-3.02 -3.62,-1.36 -1.13,-0.77 -0.17,-0.91 0.29,-0.64 0.88,-0.42 3.23,-0.41 0.63,-1.51 -0.1,-3.09 -0.92,-3.88 -0.16,-5.06 -0.33,-1.01 -1.37,-0.67 -12.87,0.08 -6.67,-2.49 -1.71,-1.66 -1.03,-1.98 0.91,-1.24 2.17,-1.36 1.62,-1.68 0.85,-1.48 4.24,-2.6 1.02,-1.79 0.31,-1.98 -3.23,-1.75 -4.83,-1.66 1.35,-4.14 0.05,-2.57 -1.98,-3.8 -1.61,-0.44 -2.25,0.67 -1.39,-0.14 -0.28,-4.5 -0.48,-1.92 -0.61,-0.51 -4.73,-0.5 -1.18,1.2 0.67,2.39 -0.64,0.98 -3.97,-0.56 -7.63,2.86 -1.04,-2.66 -1.02,-1 -2.91,0.13 -2.1,0.61 -2.46,1.5 -5.59,4.5 -5.38,7.01 -1.41,0.89 -1.43,-0.6 -1.22,-3.52 -3.05,-2 -0.22,-1.37 0.33,-2.31 1.84,-1.8 -0.24,-3.81 0.74,-2 -0.14,-1.48 -1.44,-2.38 0.4,-4.79 3.04,-5.38 0,0 1.68,-0.12 1.28,-0.76 2.86,-4.16 5.27,-4.71 5.64,-0.95 7.94,0.57 4.71,-0.62 2.33,-1.51 3.04,-3.1 1.51,-3.23 0.64,-3.55 1.71,-3.41 0.85,-1.14 2.75,-1.77 2.34,-2.38 1.01,0.03 0,0 4.41,0.88 1.94,-0.18 1.36,0.9 0.79,1.74 -0.23,1.07 -2.89,2.69 -0.39,1.32 6.35,1.93 4.25,4.29 1.75,0.23 2.69,-1.52 1.38,-1.91 -1.81,-3.36 -0.12,-2.04 3.45,-1.09 1.95,0.11 2.77,1.1 1.4,-0.09 0.58,-0.54 -0.01,-1.39 1.2,-2.97 3.06,-2.59 1.39,-0.28 6.78,2.29 2.05,1.73 0.97,1.58 1.57,0.78 5.62,-2.24 0.84,-2.05 z"
 title="Kaduna"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-KD" />
<path
 d="m 90.771651,42.718745 6.62,-0.14 1.86,0.74 4.629999,-1.58 0.76,0.31 1.65,2.12 3.19,1.82 1.06,1.1 9.56,3.12 2.95,2.07 3.06,0.68 1.82,-0.43 0.63,-0.56 2.49,-3.69 1.16,-0.31 1.08,0.88 0.4,1.25 -1.62,3.93 0.09,2.4 -1.42,2.98 -0.42,3.7 1.86,2.15 1.8,4.28 -0.18,3.32 -1.3,6.06 0.04,2.04 1.68,5.52 -0.24,8.02 -0.64,1.56 -1.02,0.04 -3.17,-2.04 -2.68,0.02 -3.95,1.18 -1.28,1.48 -1.01,3.779995 -0.14,9.94 0.79,13.05 -2.12,9.79 -2.61,5.63 -1.16,4.77 2.55,3.65 0.76,0.51 2.78,0.29 1.71,-1.35 2.4,-3 12,-5.45 1.69,-0.12 1.89,0.86 2.04,-0.72 0.77,1.75 0.94,0.07 1.62,-0.97 0,0 0.86,-0.48 1.82,0 4.11,2.25 6.34,-1.46 0.82,-2.32 1.06,-0.62 0.79,-0.15 0.91,0.64 2.09,0.31 3.61,-0.65 1.08,0.57 1.69,3.3 2.87,0.11 3.65,2.41 5.47,-0.76 3.79,0.5 2.49,-0.59 1.22,-0.81 4.85,0.62 4.35,1.77 1.41,2.15 -0.01,2.47 -2.05,6.49 0,1.2 5.38,2.71 1.93,3.01 1.38,7.58 0.21,5.48 0,0 -1.36,-1.1 -1.85,-0.36 -3.42,2.76 -1.28,2.2 -3.93,0.41 -12.1,5.08 -10.67,0.69 -1.64,-1.25 -0.36,-4.02 0.37,-4.81 -0.48,-1.78 -3.75,-2.47 -0.81,-1.26 -0.98,-6.51 -1.69,-1.6 -2.84,-0.71 -3.64,-0.04 -9.86,1.59 -7.87,1.83 -4.43,1.62 -4.85,2.59 -1.37,2.07 0.16,1.54 0.87,1.26 3.63,2.01 5.4,2.19 5.36,0.53 1.05,2.01 1.71,-0.03 0.78,0.74 1.12,6.56 -0.25,1.07 -2.18,1.45 -0.63,1.47 0.49,1.45 2.74,1.63 1.17,1.36 -0.07,2.07 -1.01,1.49 -3.8,0.97 -5.22,2.64 -5,-0.52 -1.55,0.42 -0.9,0.75 -0.04,9.59 -0.45,1.37 1.25,2.83 1.81,1.97 1.86,3.03 0.75,2.44 -0.28,1.53 -1.77,2.13 -2.64,1.57 -3.38,0.26 -7.42,2.5 -0.5,5.85 -0.56,0.48 -4.32,-0.46 -1.42,-0.99 -0.02,-2.28 1.03,-3.28 0.29,-3.94 -2.93,-2.66 -1.12,-2.41 0.18,-6.32 1.46,-3.26 1.84,-2 1.48,-1.01 3.92,-1.44 4.62,-4.43 2.43,-10.71 0.2,-4.05 -0.51,-0.74 -2.89,-1.06 -1.58,0.1 -8.4,-5.7 -5.24,-1.69 -2.94,0.07 -4.5,0.85 -6.189999,-0.36 -12.17,0.81 -1.86,-0.29 -3.49,-1.42 -11.04,-6.08 -2.89,-0.36 -0.89,0.52 0,0 -1.29,-0.01 -12.13,-10.28 4.33,-20.39 2.12,-4.71 4.89,-4.18 -0.82,-3.26 -2.42,-1.82 -0.57,-4.87 3.17,-3.84 -2.36,-8.76 0.39,-5.22 1.27,-4.3 -0.93,-15.849995 10.82,-9.33 7.73,-6.05 9.53,-14.62 2.08,-9.63 z"
 title="Kebbi"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-KE" />
<path
 d="m 347.91165,83.288745 3.51,6.28 0.1,1.96 1.07,1.12 1.87,-3.61 0.62,-2.6 1.73,-1.35 3.99,-1.93 3.77,-0.35 7.78,2.02 0.45,5.92 1.13,1.38 3.81,2.12 1.1,3.08 -0.57,2.01 1.02,1.389995 0.83,0.42 5.44,0.56 1.85,0.56 0.92,0.81 0.8,2.94 -0.08,5.61 -1.18,1.39 -0.53,1.72 1.65,0.72 0,1.03 1.9,-1.19 3.14,-0.25 0.57,1.44 0.01,2.57 1.37,0.25 1.82,-0.18 2.32,-1.42 1.47,-1.75 1.25,-0.53 2.28,7.18 0.19,2.46 -1.06,1.84 -0.19,2.05 -3.36,4.69 -0.5,2.09 0.2,1.96 5.06,-0.15 1.09,0.99 0.5,2 1.48,2.75 2.83,2.64 2.09,0.53 0.89,1.15 -7.12,6.88 -1.08,3.72 0.08,2.24 0,0 -5.52,2.17 -1.14,-0.09 -1.14,-1.07 -1.69,0.3 -2.48,1.57 -0.67,1.1 -4.74,4.17 -2.65,4.11 -2.74,3.21 -2.04,0.51 -2.7,-0.16 -1.02,0.43 -1.6,4.57 -0.45,3.5 0.4,6.89 0.45,1.99 3.86,4.33 0.77,1.67 0.08,2 -1.33,3.85 -2.59,4.09 -0.99,0.56 0,0 -1.05,0.29 -3,-0.64 -1.6,-1.05 -1.98,-2.75 -7.02,-0.97 -1.06,-1.07 -0.6,-2.08 0.55,-0.79 3.55,-0.96 0.72,-1.1 0.2,-1.73 -1.2,-6.05 1.01,-4.91 1.01,-2.44 -0.38,-3.88 -3.59,-6.42 -5.38,-4.43 -2.45,-0.59 -2.78,0.03 -1.53,-0.55 -3.51,-4.13 -3.75,-1.23 -3.53,-1.83 -1.04,-1.18 -0.53,-2.57 2.11,-4.02 -0.32,-1.25 -1.13,-0.82 -1.22,-0.19 -4.08,1.24 -1.65,0 -4.8,2.84 -4.18,3.83 -2.44,0.67 -3.09,-0.02 0,0 -3.6,-2.68 -1.11,-2.26 -0.78,-3.61 1.52,-2.67 0.07,-2.21 1.82,-1.63 3.75,-1.03 2.45,-1.7 2.71,-0.07 0.95,-0.58 -3.14,-7.8 0.67,-4.06 -2.09,-4.58 0.86,-6.33 -0.7,-12.32 0.27,-2.89 2.18,-2.28 4.25,-2.369995 7.64,-2.38 3.68,-1.93 0.78,-0.85 1.13,-4.39 2.14,-4.61 1.28,-0.52 z"
 title="Kano"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-KN" />
<path
 d="m 219.65165,323.91874 2.2,0.57 2.77,1.58 3.52,3.25 2.77,4.32 2.55,8.25 3.71,2.3 2.71,2.69 5.47,7.27 2.72,2.54 1.63,0.25 0.33,-0.35 0.62,-2.89 1.24,-2.53 0.19,-0.26 0.99,0.88 0.46,-0.09 0.06,-2.97 3.57,-1.74 1.12,-3.25 0,0 7.46,0.15 1.4,-0.46 0,0 -0.6,2.64 -1.55,2.66 0,0.86 0.82,1.69 2.19,2.66 0.54,6.17 -1.17,4.71 -0.04,4.69 -1.61,1.67 -0.85,2.12 -0.17,3.74 0.69,0.56 4.26,-2.95 9.26,-4.07 12.4,-3.37 7.07,-0.7 3.58,0.68 7.7,0.57 0,0 -0.32,2.84 0.54,5.87 1.88,3.22 2.7,2.61 0.73,1.85 0.01,6.9 0.57,6.81 1.24,5.53 1.27,1.05 3.31,-0.32 1.48,0.47 -0.36,1.81 -1.23,1.21 -0.47,1.29 -0.42,3.93 -1.94,5.83 -3.3,3.11 -6.44,3.12 -0.96,1.44 -0.34,4.42 -1.76,0 -1.35,-1.05 -0.82,0.1 -3.37,-3.29 -0.84,-0.58 -0.41,0.5 0,0 -1.11,-1.62 -2.44,-0.75 -3.31,0.76 -2.14,2.1 -2.44,0.91 -6.18,7.42 -5.98,3.86 -4.97,5.39 -1.24,0.33 -0.69,-0.34 -1.33,-2.01 -0.74,-0.05 -0.18,-2.28 -0.91,-0.25 -2.73,5.01 0,0 0,0 0,0 -1.34,1.87 -1.54,0.86 -2.24,2.31 -1.24,4.12 -0.06,2.73 -1.84,2.51 -1.43,0.89 -3.59,-0.66 -1.67,0.77 0,0 -1.03,-6.03 -1.41,-2.01 -0.89,-2.6 0.93,-5.52 -1.28,-2.15 2.16,-3.55 1.91,-4.82 -0.06,-4.16 1.62,-3.94 0.31,-1.92 -0.15,-3.41 -0.79,-2.01 -1.45,-1.08 -0.55,-2.12 -1.75,-1.41 -1.87,0.41 -1.46,0.99 -0.43,-0.38 -3.75,0.84 -0.66,-1.63 0.24,-0.51 -0.74,-0.56 -0.48,-1.74 -0.85,-0.61 -0.07,-1.22 -1.06,-2.01 -2.56,-0.15 -0.74,0.51 -2.26,0.19 -1.96,-2.23 -0.55,0.06 -1.26,-1.41 -0.65,0.07 -1.56,-2.1 -5.94,2.93 -2.13,-0.53 -1.08,-0.78 -0.28,-1.05 0.23,-1.93 0.96,-1.85 -0.27,-0.8 -2.18,0.25 -0.46,-0.65 0.38,-0.89 -0.28,-0.68 -0.7,-0.36 -1.75,0.37 -0.77,-0.64 0,0 -0.23,-0.78 -4.74,-4.17 -2.04,-2.7 0.71,-4.14 -2.51,-0.43 -4.62,0.88 0,0 -6.82,-2.39 -1.85,-1.69 -1.28,-0.03 -1.32,-0.96 -1.32,-3.75 0.08,-1.56 2.29,-3.01 1.34,-0.64 0.28,-1.37 -0.56,-0.7 -2.31,-0.27 -3.67,0.64 -2.48,1.42 -0.55,-0.45 0.03,-4.28 1.09,-0.42 0,0 0.75,-1.44 -0.82,-2.41 -4.76,-2.58 -0.13,-0.59 -2.42,-1.81 -0.07,-0.67 -2.41,-2.45 -1.92,-3.7 0.17,-0.99 2.14,-2.43 2.29,-3.91 3.71,-4.04 3.6,-2.29 1.77,2.62 2.17,1.76 7.04,3.01 1.84,0.08 2.76,1.08 3.71,-0.21 2.13,0.69 3.92,-0.12 6.3,1.52 3.03,-0.5 1.57,-3.76 0.64,-6.49 2.31,-7.79 z"
 title="Kogi"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-KO" />
<path
 d="m 322.66165,35.138745 9.16,1.35 5.19,1.38 3.58,1.94 2.92,2.5 2.73,0.73 9.89,9.64 3.29,-0.88 2.92,0.38 3.03,1.55 2.29,1.75 1.85,2.11 1.04,2.44 2.96,1.37 5.26,1.27 12.11,3.92 0,0 -0.01,0.86 -2,0.88 -0.58,0.75 -1.03,2.63 -3.19,2.58 -4.18,1.74 -3.68,0.55 -1.49,-0.7 -0.64,-1.56 -2.62,1.51 -1.99,-0.52 -2.66,-1.67 -0.68,-0.94 -1.41,-4.68 -1.17,-1.23 -9.22,0.78 -5.37,-0.99 -10.39,1.38 -0.46,0.3 0.02,2.69 -0.75,3.4 0.07,3.85 0.59,0.72 2.86,0.93 4.94,0.12 0.83,0.7 1.24,2.62 0,0 -4.63,0.36 -1.28,0.52 -2.14,4.61 -1.13,4.39 -0.78,0.85 -3.68,1.93 -7.64,2.38 -4.25,2.369995 -2.18,2.28 -0.27,2.89 0.7,12.32 -0.86,6.33 2.09,4.58 -0.67,4.06 3.14,7.8 -0.95,0.58 -2.71,0.07 -2.45,1.7 -3.75,1.03 -1.82,1.63 -0.07,2.21 -1.52,2.67 0.78,3.61 1.11,2.26 3.6,2.68 0,0 -0.99,1.1 -0.84,2.05 -5.62,2.24 -1.57,-0.78 -0.97,-1.58 -2.05,-1.73 -6.78,-2.29 -1.39,0.28 -3.06,2.59 -1.2,2.97 0.01,1.39 -0.58,0.54 -1.4,0.09 -2.77,-1.1 -1.95,-0.11 -3.45,1.09 0.12,2.04 1.81,3.36 -1.38,1.91 -2.69,1.52 -1.75,-0.23 -4.25,-4.29 -6.35,-1.93 0.39,-1.32 2.89,-2.69 0.23,-1.07 -0.79,-1.74 -1.36,-0.9 -1.94,0.18 -4.41,-0.88 0,0 0.02,-2.33 1.25,-6.1 -0.9,-3.69 -1.91,-1.9 -0.16,-1.07 0.45,-3.76 1.56,-4.14 0.65,-4 1.5,-0.84 6.61,-0.13 1.28,0.87 4.88,-3.97 0.55,-3.2 3.34,0.81 1.89,-1.62 -0.5,-1.95 -1.16,-1.43 -2.68,-2.29 -2.53,-1.16 -1.26,-1.21 1.82,-3.63 1.09,-5.16 -0.95,-2.47 0.13,-1.68 -0.69,-3.05 -2.5,-5.199995 0.4,-3.57 -1.31,-3.21 -0.39,-4.75 -1,-5.17 0.07,-6.05 -0.99,-6.17 1.44,-10.82 0,0 4.86,-1.57 5.28,-5.36 8.7,0.78 3.58,-0.74 23.4,-14.15 1.28,-0.33 z"
 title="Katsina"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-KT" />
<path
 d="m 62.361651,236.35874 5.38,-0.92 11.32,-0.35 3.62,0.93 13.98,15.86 1.99,3.1 5.609999,6.48 2.29,1.58 1.7,-0.18 1.04,0.48 0.27,2.94 -0.73,4.65 0.06,5.38 0.88,3.68 1.3,0.39 7.57,-0.79 0.84,0.74 0.43,1.62 -0.19,3.43 0.35,1.4 0.66,1.02 3.21,2.41 3.04,0.39 1.07,0.55 0.9,2.11 0.74,5.45 1.89,1.32 2,-0.01 9.16,-3.56 2.41,-0.16 6.35,3.01 1.42,1.1 6.35,7.23 2.25,0.69 3.96,-1.16 4.52,0.81 3.73,1.61 0.64,-0.27 11.77,7.32 5.19,3.67 0.93,1.49 1.46,0.71 1.84,0.6 4.92,0.32 3.39,-0.91 7.52,-0.31 8.26,1.71 0,0 -2.46,3.35 -2.31,7.79 -0.64,6.49 -1.57,3.76 -3.03,0.5 -6.3,-1.52 -3.92,0.12 -2.13,-0.69 -3.71,0.21 -2.76,-1.08 -1.84,-0.08 -7.04,-3.01 -2.17,-1.76 -1.77,-2.62 -3.6,2.29 -3.71,4.04 -2.29,3.91 -2.14,2.43 -0.17,0.99 1.92,3.7 2.41,2.45 0.07,0.67 2.42,1.81 0.13,0.59 4.76,2.58 0.82,2.41 -0.75,1.44 0,0 -5.76,0.09 -4.11,1.34 -0.82,2.22 0.29,0.63 -1.04,2.16 -1.29,-0.55 -1.95,0.58 -2.3,-0.62 -2.33,0.23 -0.95,-0.49 -1.47,-2.06 -0.95,-0.37 -4.48,1.25 -1.03,-0.49 -0.61,-1.67 -0.41,0.17 0,0 -0.39,-0.54 -1.67,0.8 -3.49,0.13 -1.48,-3.17 -2.18,-0.58 -4.74,1.7 -2.65,-0.38 0.08,0.88 -0.18,-0.85 -0.36,0.09 -3.55,1.61 -2.6,0.31 -8.27,-0.22 0,0 -0.49,-0.66 -1.45,-0.07 -0.71,-0.94 -1.9,-4.81 -0.39,-2.77 -0.78,-0.66 -0.03,-0.8 -3.46,-2.25 -2.95,-4.24 -1.22,-3.44 -0.09,-2.1 -0.79,-2.77 -1.97,-2.63 -2.999999,-7.11 -1.66,-1.91 -1.32,-5.29 -0.81,-1.58 1.03,-4.5 2.08,-1.55 0.35,-1.6 0.57,-0.59 3.159999,-2.09 2.34,-3.16 -0.16,-1.3 -1.31,-0.78 -2.829999,1.8 -2.21,0.08 -3.83,-1.08 -1.1,0.13 -2.4,-1.54 -5.7,-1.74 -3.25,-2.42 -1.69,-2.04 -0.54,-2.48 -4.08,-2.46 -2.04,0.09 -3.82,2.08 -1.69,3.71 -0.02,2.65 -0.45,1.11 -4.42,3.43 -6.64,2.92 -5.79,3.3 -2.49,1.94 -1.13,0.26 -3.01,2.21 -7,3.26 -0.93,0.15 -0.53,-0.75 -0.45,0.11 -0.91,-1.13 -0.69,-0.19 -2.57,0.27 -6.93,5.53 -1.66,0.66 -3.91,3.44 -0.19,0.99 -1.5,0.79 -4.08,0.72 -3.17,0.02 -3.19,2.78 0,0 0.56,-1.78 -0.59,-1.36 -0.01,-3.54 -0.71,-0.9 0.24,-1.44 0.55,-1.39 -0.39,-2.71 -0.97,-1.79 0.74,-1.4 1.43,-0.91 -0.4,-3.34 0.69,-0.23 0.34,-1.72 -0.2,-0.62 0.02,-0.88 0.69,-1.64 0.43,-1.56 -0.41,-0.76 -0.27,-0.77 -0.35,-0.78 0.13,-1.17 0.25,-1.73 0.16,-0.69 5.37,0.18 0.71,-0.16 1.05,-1.18 3.55,-0.56 0.66,0.82 1.24,0.45 1.49,-0.1 4.95,-1.73 0.25,-1.76 1.95,-3.88 0.17,-3.74 1.91,-1.88 -0.34,-5.82 -1.28,-4.01 0.31,-1.42 1.16,-1.88 2.47,-1.38 0.82,-1.83 2.59,-3.62 0.85,-3.1 1.04,-0.59 2.14,0.25 2.09,-1.73 0.1,-1.22 -1.34,-2.56 -0.32,-1.93 0.37,-1.34 1.11,-1.22 6.75,-2.7 3.39,0.24 1.14,-0.3 2.02,-2.06 0.12,-1.3 2.36,-2.59 0.57,-2.41 0.25,-4.97 0.85,-1.1 2.08,-0.86 z"
 title="Kwara"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-KW" />
<path
 d="m 3.411651,463.64874 1.25,0.4 3.41,-0.43 1.94,0.89 3.46,-2.44 0,-1.61 0.41,-0.11 3.55,0.53 13.71,-0.19 1.06,-1.01 0.77,-3.95 2.08,-1.65 0.09,-2.35 1.36,-2.51 1.85,0.25 3.41,1.43 1.2,0.8 0.81,1.43 4.57,-0.48 -0.51,-1.45 1.59,-1.06 37.58,0.39 1.07,0.21 0.54,0.9 -2.73,2.88 -0.23,0.94 0.73,1.24 0.04,1.46 2.19,1.09 3.22,-2.16 3.45,-0.41 1.06,1.48 0.12,0.95 -1.12,1.06 -2.8,1.31 -0.56,1.03 0.22,0.7 0.92,0.74 2.77,0.77 1.13,1.31 0.58,0.14 1.12,-0.58 5.269999,0.65 0.35,1.25 -0.36,2.36 0,0 -9.529999,-1.15 -2.19,-0.67 -12.02,-1.84 -8.59,-0.46 -9.91,0.94 -15.11,0.16 -0.57,0.31 -0.19,1.32 -0.53,-0.1 0.24,0.34 -5.42,-0.82 -6.02,0.01 -21.6,0.73 -9.49,1.1 -0.36,-3.11 z"
 title="Lagos"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-LA" />
<path
 d="m 307.24165,287.46874 1.34,-1.02 0.75,0.11 0.6,1.88 0.7,0.79 1.5,-0.61 0.93,0.14 2.44,1.79 1.34,-0.25 1.75,1.06 1.1,0 2.31,-2.1 0.94,-2.54 1.65,-2.12 1.01,-0.35 1.1,0.39 2.93,2.67 0.32,3.25 4.22,2.44 1.03,1.61 -0.05,9.7 0.4,1.31 1.34,0.96 1.15,-0.21 2.35,-1.6 4.16,-4.75 0.89,-1.9 1.29,-0.98 1.33,0.22 1.5,1.25 3.81,0.24 5.34,5.91 0.6,1.9 2.47,0.13 1.61,-0.42 0.82,-0.72 3.31,-5.4 2.65,-5.61 1.09,-0.57 0,0 1.69,1.65 2.42,0.11 2.08,0.85 0.63,4.48 1.93,3.41 2.16,0.98 5.32,0.56 3.7,0 2.77,-1.35 1.04,0.56 2.01,2.21 -0.79,2.93 -2.7,4.01 -2.11,1.98 -1.41,0.2 -1.46,1.05 -1.55,2.86 -1.55,1.36 -0.32,2.25 0.64,1.72 2.09,2.43 0.32,1.24 -0.3,5.41 1.44,2.07 5.15,2.71 3.66,1.3 8.19,-0.15 9.76,-2.79 10.36,4.33 2.52,2.07 1.46,2.68 0,0 -2.58,3.68 -2.74,0.82 -4.51,-0.95 -0.33,-0.41 -1.52,0.23 -1,-1.07 -1.73,-0.9 -1.86,0 -1.28,0.86 -1.33,2.14 -0.73,2.86 1.71,1.36 2.03,2.51 0.35,2.88 -0.54,0.65 1,2.68 -0.11,1.19 -11.23,7.21 -1.21,1.39 0,0 -11.79,-8.93 -0.01,0.7 -3.96,0.22 -4.88,-0.41 -6.86,-1.55 -10.09,-3.72 -2.68,-0.44 -2.59,0.18 -1.38,0.28 -3.95,2.2 -1.24,1.41 -1.02,2.86 0.08,2.52 4.7,11.64 -0.09,1.36 -1.14,1.1 -5.33,-2.23 -3.32,-2.8 -1.07,0.14 -5.25,-0.99 -4.92,-2.82 -8.71,-3.55 -8.51,-1.25 -9.13,-2.48 0,0 -7.7,-0.57 -3.58,-0.68 -7.07,0.7 -12.4,3.37 -9.26,4.07 -4.26,2.95 -0.69,-0.56 0.17,-3.74 0.85,-2.12 1.61,-1.67 0.04,-4.69 1.17,-4.71 -0.54,-6.17 -2.19,-2.66 -0.82,-1.69 0,-0.86 1.55,-2.66 0.6,-2.64 0,0 11.13,-1.75 2.91,-1.2 4.63,-1.06 6.96,-3.64 3.78,-4.62 1.04,-1.64 1.08,-3.4 0.79,-0.36 1.52,-7.95 1.98,-5.27 0.55,-7 -0.51,-2.19 0.08,-5.62 2.11,-6.52 0.53,-0.61 1.03,-0.07 0.42,-0.62 z"
 title="Nassarawa"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-NA" />
<path
 d="m 65.001651,173.89874 0.89,-0.52 2.89,0.36 11.04,6.08 3.49,1.42 1.86,0.29 12.17,-0.81 6.189999,0.36 4.5,-0.85 2.94,-0.07 5.24,1.69 8.4,5.7 1.58,-0.1 2.89,1.06 0.51,0.74 -0.2,4.05 -2.43,10.71 -4.62,4.43 -3.92,1.44 -1.48,1.01 -1.84,2 -1.46,3.26 -0.18,6.32 1.12,2.41 2.93,2.66 -0.29,3.94 -1.03,3.28 0.02,2.28 1.42,0.99 4.32,0.46 0.56,-0.48 0.5,-5.85 7.42,-2.5 3.38,-0.26 2.64,-1.57 1.77,-2.13 0.28,-1.53 -0.75,-2.44 -1.86,-3.03 -1.81,-1.97 -1.25,-2.83 0.45,-1.37 0.04,-9.59 0.9,-0.75 1.55,-0.42 5,0.52 5.22,-2.64 3.8,-0.97 1.01,-1.49 0.07,-2.07 -1.17,-1.36 -2.74,-1.63 -0.49,-1.45 0.63,-1.47 2.18,-1.45 0.25,-1.07 -1.12,-6.56 -0.78,-0.74 -1.71,0.03 -1.05,-2.01 -5.36,-0.53 -5.4,-2.19 -3.63,-2.01 -0.87,-1.26 -0.16,-1.54 1.37,-2.07 4.85,-2.59 4.43,-1.62 7.87,-1.83 9.86,-1.59 3.64,0.04 2.84,0.71 1.69,1.6 0.98,6.51 0.81,1.26 3.75,2.47 0.48,1.78 -0.37,4.81 0.36,4.02 1.64,1.25 10.67,-0.69 12.1,-5.08 3.93,-0.41 1.28,-2.2 3.42,-2.76 1.85,0.36 1.36,1.1 0,0 3.32,4.4 3.8,6.64 1.59,4.09 -0.07,0.84 0,0 -3.04,5.38 -0.4,4.79 1.44,2.38 0.14,1.48 -0.74,2 0.24,3.81 -1.84,1.8 -0.33,2.31 0.22,1.37 3.05,2 1.22,3.52 1.43,0.6 1.41,-0.89 5.38,-7.01 5.59,-4.5 2.46,-1.5 2.1,-0.61 2.91,-0.13 1.02,1 1.04,2.66 7.63,-2.86 3.97,0.56 0.64,-0.98 -0.67,-2.39 1.18,-1.2 4.73,0.5 0.61,0.51 0.48,1.92 0.28,4.5 1.39,0.14 2.25,-0.67 1.61,0.44 1.98,3.8 -0.05,2.57 -1.35,4.14 4.83,1.66 3.23,1.75 -0.31,1.98 -1.02,1.79 -4.24,2.6 -0.85,1.48 -1.62,1.68 -2.17,1.36 -0.91,1.24 1.03,1.98 1.71,1.66 6.67,2.49 12.87,-0.08 1.37,0.67 0.33,1.01 0.16,5.06 0.92,3.88 0.1,3.09 -0.63,1.51 -3.23,0.41 -0.88,0.42 -0.29,0.64 0.17,0.91 1.13,0.77 3.62,1.36 -0.83,3.02 3,1.62 0.58,1.88 -3.09,3.17 -0.6,2.79 -0.79,0.87 -2.45,1.29 -0.56,0.93 -0.09,2.32 3.39,2.78 -1.38,4.13 2.46,-0.6 1.23,0.42 0,0 -8.65,12.34 -0.94,0.24 -9.19,-8.1 -1.76,-0.63 -11.03,0.47 -2.68,0.33 -0.34,0.38 -0.36,13.66 0.75,30.21 -0.46,1.37 1.95,4.91 1.42,0.47 1.83,-0.21 0,0 -1.12,3.25 -3.57,1.74 -0.06,2.97 -0.46,0.09 -0.99,-0.88 -0.19,0.26 -1.24,2.53 -0.62,2.89 -0.33,0.35 -1.63,-0.25 -2.72,-2.54 -5.47,-7.27 -2.71,-2.69 -3.71,-2.3 -2.55,-8.25 -2.77,-4.32 -3.52,-3.25 -2.77,-1.58 -2.2,-0.57 0,0 -8.26,-1.71 -7.52,0.31 -3.39,0.91 -4.92,-0.32 -1.84,-0.6 -1.46,-0.71 -0.93,-1.49 -5.19,-3.67 -11.77,-7.32 -0.64,0.27 -3.73,-1.61 -4.52,-0.81 -3.96,1.16 -2.25,-0.69 -6.35,-7.23 -1.42,-1.1 -6.35,-3.01 -2.41,0.16 -9.16,3.56 -2,0.01 -1.89,-1.32 -0.74,-5.45 -0.9,-2.11 -1.07,-0.55 -3.04,-0.39 -3.21,-2.41 -0.66,-1.02 -0.35,-1.4 0.19,-3.43 -0.43,-1.62 -0.84,-0.74 -7.57,0.79 -1.3,-0.39 -0.88,-3.68 -0.06,-5.38 0.73,-4.65 -0.27,-2.94 -1.04,-0.48 -1.7,0.18 -2.29,-1.58 -5.609999,-6.48 -1.99,-3.1 -13.98,-15.86 -3.62,-0.93 -11.32,0.35 -5.38,0.92 0,0 0.49,-3.02 -1.96,-0.7 -2.1,-2.02 -1.75,-3.54 3.08,-6.97 -0.14,-1.69 0.89,-1.14 2.58,-1.33 6.08,3.19 1,-3.12 0.25,-2.99 2.82,-6.43 -0.66,-6.2 -2.69,-1.9 -2.97,-5.6 1.21,-4.6 0.13,-2.04 -1.23,-5.05 -2.13,-0.82 0.42,-1.95 -0.28,-1.95 0.51,-1.95 z"
 title="Niger"
 fill="blue"
 stroke="#888888"
 stroke-width="2"
 id="NG-NI" />
<path
 d="m 0.96165097,375.38874 5.97000003,-4.29 3.49,-0.21 1.9,0.93 1.24,1.79 0.41,1.43 0.15,6.48 0.56,2.36 1.31,2.17 0.84,0.13 0.94,-5.56 0.57,-1.25 0.47,-0.45 1.37,0 0.88,0.61 0.54,1.75 -0.16,3.09 -1.74,5.98 -0.41,-0.24 -0.51,0.57 0.52,3.66 2.12,2.51 3.05,2.47 1.02,3.04 3.2,4.51 3.01,2.36 2.34,1.13 4.05,0.28 1.74,-0.49 2.78,-3.97 1.14,-4.24 1.62,-1.48 2.6,0.29 1.75,4.34 1.59,1.13 1.02,-0.26 1.13,-1.11 2.47,-0.6 6.2,0.22 1.17,1.89 0.33,5.66 0.41,0.71 2.98,1.22 0.64,1.1 -0.1,2.22 1.1,2.7 0.41,2.87 -3.97,4.01 -0.33,1.13 0.37,0.28 6.09,-0.25 2.7,-0.58 3.04,0.13 3.18,-1.24 1.51,-1.37 5.89,-0.88 0,0 2.74,-1.08 1.4,-1.11 0.94,0.39 0.52,0.84 0.59,4.28 1.97,-0.01 3.85,-1.98 3.389999,0.59 2.97,7.11 3.06,-1.96 1.1,-0.02 1.15,0.69 2.12,-0.92 4.16,-0.26 0.31,0.13 -0.3,1.01 0,0 -0.75,5.5 -1.06,3.26 -2.35,2.1 -2.06,0.97 -3.63,3.28 -2.98,4.92 0.03,3.41 2.01,1.97 4.81,0.81 1.83,-0.13 1.42,-1.06 1.65,-2.27 1.76,-0.51 0.65,0.78 -0.02,4.47 0.85,3.57 -0.72,1.81 -2.44,0.66 -0.77,1.14 -1.12,0.68 -2.4,0.11 -1.32,1.34 0.98,0.43 2.79,-0.25 3.3,1.74 0.21,1.08 -0.82,1.72 -4.01,-0.28 0,0 -5,-2.24 -4.38,-0.93 0,0 0.36,-2.36 -0.35,-1.25 -5.269999,-0.65 -1.12,0.58 -0.58,-0.14 -1.13,-1.31 -2.77,-0.77 -0.92,-0.74 -0.22,-0.7 0.56,-1.03 2.8,-1.31 1.12,-1.06 -0.12,-0.95 -1.06,-1.48 -3.45,0.41 -3.22,2.16 -2.19,-1.09 -0.04,-1.46 -0.73,-1.24 0.23,-0.94 2.73,-2.88 -0.54,-0.9 -1.07,-0.21 -37.58,-0.39 -1.59,1.06 0.51,1.45 -4.57,0.48 -0.81,-1.43 -1.2,-0.8 -3.41,-1.43 -1.85,-0.25 -1.36,2.51 -0.09,2.35 -2.08,1.65 -0.77,3.95 -1.06,1.01 -13.71,0.19 -3.55,-0.53 -0.41,0.11 0,1.61 -3.46,2.44 -1.94,-0.89 -3.41,0.43 -1.25,-0.4 0,0 0.42,-3.28 1.13,-1.18 0.63,-1.54 -1.34,-3.74 1.3,-2.16 2.11,-1.8 0.2,-2.74 -0.21,-0.96 -2.14,-0.28 -0.78,-0.39 -0.41,-0.86 -0.17,-1.82 1.2,-1.9 -0.34,-1.07 0.48,-3.46 -0.22,-0.98 -1.3,-0.14 -0.54,-0.61 0.15,-2.86 1.4,-1.61 3.06,-1.78 -2.46,-2.23 -0.48,-0.96 1.87,-2.2 0.59,-1.92 -0.66,-4.66 -1.53,-1.66 -0.12,-9.69 2.37,-0.08 0.82,-0.48 0.04,-0.72 -0.42,-3.5 -2.68,-2.04 -0.22,-1.76 -0.98,-1.52 -0.3,-4.2 0.25,-8.96 -0.3,-0.95 -0.82,-0.35 -0.97,-2.58 -1.69000003,-2.17 z"
 title="Ogun"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-OG" />
<path
 d="m 194.92165,384.14874 4.62,-0.88 2.51,0.43 -0.71,4.14 2.04,2.7 4.74,4.17 0.23,0.78 0,0 -2.45,3.49 -0.9,0.6 -1.56,-0.14 -1.41,1.72 -0.18,1.38 0.4,0.84 2.02,0.82 -0.88,2.89 0.77,2.49 0.42,0.28 -1.43,3.54 -2.15,1.05 -1.76,1.83 -0.47,1.04 0.15,1.39 -3.23,6.89 0.32,0.83 -0.37,0.85 -1.51,0.73 -1.24,1.67 -0.62,4.63 1.18,1.28 0.16,0.82 -0.88,0.51 -0.01,1.63 -1.19,-0.51 -0.25,0.25 -0.95,4.96 -1.51,3.39 -2.68,1.03 -0.81,-0.36 -1.19,-1.48 -1.34,-0.12 -3.77,3.16 -0.74,0.03 -2.1,-5.46 2.01,-2.25 -1.74,-2.09 -1.64,-0.34 -3.29,0.39 -6.64,-0.11 -1.68,-0.36 -2.28,0.38 -2.12,-0.39 -2.2,1.01 -0.46,0.78 -0.09,1.96 -0.95,0.68 -0.79,2.27 -1.73,0.8 -0.45,1.04 -1.76,1.61 -0.49,0.96 0.09,2.22 -0.8,0.99 0,2.84 1.23,0.64 1.39,2.28 0.58,1.45 -0.36,1.72 -0.83,1.96 -1.74,1.71 -0.85,3.74 -2.94,0.86 -0.58,0.62 -0.96,3.62 -0.8,0.7 0.28,-0.44 -0.25,0.6 0.44,0.91 0.7,0.05 1.94,1.36 1.65,2.94 1.56,0.1 1.33,1.04 1.24,2.26 -0.39,1.16 0,0 -6.9,16.74 0,0 -4.86,-5.94 -9.17,-9.24 -14.82,-11.96 -2.7,-1.66 0,0 4,0.28 0.83,-1.73 -0.21,-1.07 -3.3,-1.74 -2.79,0.25 -0.98,-0.43 1.32,-1.35 2.4,-0.1 1.11,-0.68 0.78,-1.14 2.44,-0.66 0.72,-1.82 -0.84,-3.57 0.01,-4.47 -0.64,-0.78 -1.77,0.51 -1.65,2.27 -1.42,1.06 -1.83,0.13 -4.8,-0.81 -2.01,-1.96 -0.03,-3.41 2.98,-4.92 3.63,-3.28 2.06,-0.96 2.35,-2.1 1.07,-3.25 0.74,-5.51 0,0 2.67,-1.42 2.15,-4.97 4.29,-3.44 2.32,-0.02 2.51,1.24 2.91,2.22 1.81,0.03 0.64,-1.26 -0.23,-1.63 0.41,-2.11 -0.46,-3.98 1.56,-6.54 0.84,-0.57 5.86,-1.59 -0.62,-2.4 0,0 4.55,-1.45 7.78,0.43 6.97,-0.31 1.55,0.53 1.42,2.21 1.03,3.19 -0.16,0.86 1.09,2.69 2.28,0.59 5.53,-3.5 3.04,-4.43 1.71,-3.92 1.7,-8.1 1.13,-2.14 2.4,-2.48 2.18,-1.45 0.85,-2.06 1.86,-0.38 1.5,1.24 0.82,-0.3 1.49,-2.44 z"
 title="Ondo"
 fill="green"
 stroke="#888888"
 stroke-width="2"

 id="NG-ON" />
<path
 d="m 117.18165,366.88874 8.27,0.22 2.6,-0.31 3.55,-1.61 0.36,-0.09 0.18,0.85 -0.08,-0.88 2.65,0.38 4.74,-1.7 2.18,0.58 1.48,3.17 3.49,-0.13 1.67,-0.8 0.39,0.54 0,0 -1.52,5.3 -1.99,1.64 -2.18,0.94 -1.62,1.5 -1.9,4.25 -0.12,1.4 0.81,2.81 -1.19,3.99 0.69,4.78 2.85,6.11 0.84,3.79 0.83,1.7 0,0 0.62,2.41 -5.86,1.58 -0.84,0.58 -1.56,6.54 0.46,3.98 -0.4,2.11 0.23,1.63 -0.64,1.26 -1.81,-0.03 -2.91,-2.22 -2.51,-1.24 -2.32,0.01 -4.28,3.45 -2.15,4.96 -2.67,1.43 0,0 0.3,-1.01 -0.31,-0.13 -4.16,0.26 -2.12,0.92 -1.15,-0.69 -1.1,0.02 -3.06,1.96 -2.97,-7.11 -3.389999,-0.59 -3.85,1.98 -1.97,0.01 -0.59,-4.28 -0.52,-0.84 -0.94,-0.39 -1.4,1.11 -2.74,1.08 0,0 2.34,-9.84 0.43,-5.29 1.67,-8.72 -0.87,-0.49 -3.05,-4.88 -3.11,-2.33 -0.27,-0.93 -0.14,-0.88 1.15,-1.09 0.78,-1.76 0.87,-9.27 0.6,-0.28 4.3,1.34 2.32,-0.75 0.78,-0.99 0.13,-2.3 1.06,-0.57 2.81,-3.32 3.009999,1.84 3.59,5.56 2.13,-0.93 0.65,-1.43 2.05,-1.16 0.98,-1.39 0.28,0.39 1.83,-1.51 2.29,-0.76 0.25,0.38 0.99,-1.34 0.31,-1.28 z"
 title="Osun"
 fill="white"
 stroke="#888888"
 stroke-width="2"
 id="NG-OS" />
<path
 d="m 5.381651,335.88874 3.19,-2.78 3.17,-0.02 4.08,-0.72 1.5,-0.79 0.19,-0.99 3.91,-3.44 1.66,-0.66 6.93,-5.53 2.57,-0.27 0.69,0.19 0.91,1.13 0.45,-0.11 0.53,0.75 0.93,-0.15 7,-3.26 3.01,-2.21 1.13,-0.26 2.49,-1.94 5.79,-3.3 6.64,-2.92 4.42,-3.43 0.45,-1.11 0.02,-2.65 1.69,-3.71 3.82,-2.08 2.04,-0.09 4.08,2.46 0.54,2.48 1.69,2.04 3.25,2.42 5.7,1.74 2.4,1.54 1.1,-0.13 3.83,1.08 2.21,-0.08 2.829999,-1.8 1.31,0.78 0.16,1.3 -2.34,3.16 -3.159999,2.09 -0.57,0.59 -0.35,1.6 -2.08,1.55 -1.03,4.5 0.81,1.58 1.32,5.29 1.66,1.91 2.999999,7.11 1.97,2.63 0.79,2.77 0.09,2.1 1.22,3.44 2.95,4.24 3.46,2.25 0.03,0.8 0.78,0.66 0.39,2.77 1.9,4.81 0.71,0.94 1.45,0.07 0.49,0.66 0,0 0.53,3.2 -0.31,1.28 -0.99,1.34 -0.25,-0.38 -2.29,0.76 -1.83,1.51 -0.28,-0.39 -0.98,1.39 -2.05,1.16 -0.65,1.43 -2.13,0.93 -3.59,-5.56 -3.009999,-1.84 -2.81,3.32 -1.06,0.57 -0.13,2.3 -0.78,0.99 -2.32,0.75 -4.3,-1.34 -0.6,0.28 -0.87,9.27 -0.78,1.76 -1.15,1.09 0.14,0.88 0.27,0.93 3.11,2.33 3.05,4.88 0.87,0.49 -1.67,8.72 -0.43,5.29 -2.34,9.84 0,0 -5.89,0.88 -1.51,1.37 -3.18,1.24 -3.04,-0.13 -2.7,0.58 -6.09,0.25 -0.37,-0.28 0.33,-1.13 3.97,-4.01 -0.41,-2.87 -1.1,-2.7 0.1,-2.22 -0.64,-1.1 -2.98,-1.22 -0.41,-0.71 -0.33,-5.66 -1.17,-1.89 -6.2,-0.22 -2.47,0.6 -1.13,1.11 -1.02,0.26 -1.59,-1.13 -1.75,-4.34 -2.6,-0.29 -1.62,1.48 -1.14,4.24 -2.78,3.97 -1.74,0.49 -4.05,-0.28 -2.34,-1.13 -3.01,-2.36 -3.2,-4.51 -1.02,-3.04 -3.05,-2.47 -2.12,-2.51 -0.52,-3.66 0.51,-0.57 0.41,0.24 1.74,-5.98 0.16,-3.09 -0.54,-1.75 -0.88,-0.61 -1.37,0 -0.47,0.45 -0.57,1.25 -0.94,5.56 -0.84,-0.13 -1.31,-2.17 -0.56,-2.36 -0.15,-6.48 -0.41,-1.43 -1.24,-1.79 -1.9,-0.93 -3.49,0.21 -5.97000003,4.29 0,0 1.07000003,-2.08 0.73,-4.3 1.33,-4.15 -0.3,-1.12 0.37,-2.7 1.13,-2.26 0.36,-2.89 -2.44,-3.06 -1.17,-3.99 0.08,-2.02 1.05,-1.87 -0.44,-2.05 0.48,-0.7 1.25,-0.3 1.37,-2.88 -0.43,-0.44 0.73,-0.97 0.01,-1.07 z"
 title="Oyo"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-OY" />
<path
 d="m 379.00165,223.49874 1.53,-0.49 3.18,0.08 2.78,0.88 2.61,4.16 0.78,4.8 -0.04,12.38 10.97,-2.19 1.06,0.21 1.8,1.92 0.97,3.13 0.26,5.94 -0.23,1.17 -2.38,4.47 -0.09,1.69 0.6,0.85 3.92,1.42 0.79,0.71 0.9,1.16 1.65,4.07 1.56,1.34 1.51,0.53 4.8,0.27 5.47,1.48 10.04,-0.59 4.39,-1.41 2.89,-5.21 4.76,-1.3 0.5,-1.67 -0.27,-1.74 -3.17,-4.06 0.3,-1.44 3.03,-1.78 7.6,3.95 2.57,0.51 9.26,4.93 11.07,4.74 6.18,4.04 6.36,3.43 0,0 1.56,3.94 0.21,2.15 -0.51,4.08 0.76,5.96 2.3,3.86 1.05,6.02 -0.55,1.33 0.3,2.25 0.43,0 0.21,5.54 -1.78,3.08 -12.18,5.86 -1.9,-0.11 -9.52,2.1 -2.49,1.44 -2.06,4.19 -4.74,5.72 -7.11,3.76 -7.68,7.65 -2.43,1.19 -4.41,1.01 -4.11,0.54 -3.85,-0.25 0,0 -1.46,-2.68 -2.52,-2.07 -10.36,-4.33 -9.76,2.79 -8.19,0.15 -3.66,-1.3 -5.15,-2.71 -1.44,-2.07 0.3,-5.41 -0.32,-1.24 -2.09,-2.43 -0.64,-1.72 0.32,-2.25 1.55,-1.36 1.55,-2.86 1.46,-1.05 1.41,-0.2 2.11,-1.98 2.7,-4.01 0.79,-2.93 -2.01,-2.21 -1.04,-0.56 -2.77,1.35 -3.7,0 -5.32,-0.56 -2.16,-0.98 -1.93,-3.41 -0.63,-4.48 -2.08,-0.85 -2.42,-0.11 -1.69,-1.65 0,0 1.67,-3.94 -0.12,-3.41 -1,-2.09 -1.71,-1.21 -2.57,-3.08 -3.26,-5.28 -0.1,-1.16 1.05,-1.4 -0.21,-4.74 1.76,-1.28 0.4,-3.08 1.91,-1.55 0.42,-1.07 -0.53,-2.1 0.7,-7.81 -0.18,-1.97 0.34,-1.1 2.39,-1.97 -0.75,-3.52 -1.36,-2.82 0.22,-2.71 2.13,-4.97 1.9,-1.4 2.19,-0.73 1.32,-1.56 0.55,-1.43 0.21,-2.9 z"
 title="Plateau"
 fill="red"
 stroke="#888888"
 stroke-width="2"
 id="NG-PL" />
<path
 d="m 277.72165,584.56874 -1.46,1.39 0.02,0.77 -0.62,-0.24 0.22,-1.42 1.44,-0.82 0.4,0.32 z m -3.14,-1.84 -1.72,-0.98 -0.55,0.15 -0.55,0.15 -0.21,-0.69 0.86,-0.79 -0.31,-0.67 0.31,-0.65 -0.07,-1.05 -0.57,-0.81 -0.91,-0.17 -0.22,0.16 -0.71,-1.7 -0.27,-0.17 0.14,-0.46 -0.86,-0.86 -0.27,0.36 -0.96,0.15 -0.19,0.82 0.57,1.03 0.5,1.05 0.41,2.04 -0.48,-0.23 -0.45,0.63 1.07,3.48 -0.14,1.27 1.17,4.04 -0.24,0.22 0.77,0.46 2.06,-0.43 0.4,-0.45 0.13,-0.58 1.75,0.49 0.03,-2.23 0.67,-1.56 -1.16,-2.02 z m -3.8,-10.26 0.41,0.46 2.18,0.09 0.19,-0.91 -0.41,-0.31 -1.69,0.3 -0.68,0.37 z m 1.27,-2.46 0.36,1.13 0.52,0.19 -0.29,-1.9 -0.59,0.58 z m 7.2,9.74 -1.44,-2.86 -1,-0.7 -1.63,-0.81 -0.27,-0.12 -0.84,0.65 0.65,0.09 1.31,1.13 0.14,0.21 -0.23,0.46 0.52,0.93 0.12,1.92 1.29,1.2 0.91,0.17 0.67,-1.41 -0.2,-0.86 z m 5.92,6.12 -2.08,-2.62 -1.31,1.63 0.79,0.79 0.81,-0.24 0.38,0.91 0.76,0 0.22,0.62 1.17,-0.5 1.08,1.08 1.86,-1.49 -0.62,-0.55 -3.06,0.37 z m -19.91,-6.61 -1.12,0.53 -0.28,1.32 1.14,0.4 1.44,1.08 1.03,2.28 -0.29,-3.36 -0.36,-0.15 0.26,-1.49 -1.82,-0.61 z m 18.13,2.56 -2.37,-1.62 -1.55,-2.35 -0.03,-0.27 -0.48,-1.7 -0.48,0.43 -0.4,-0.36 0.43,-0.67 -0.03,-1.49 -0.12,-0.07 -0.57,1.85 -2.25,-0.7 -0.53,-0.1 -0.88,-1.08 -0.07,-1.52 -0.36,-0.29 -0.07,-0.46 -0.26,-0.17 -0.15,-0.65 0.5,-0.79 -0.98,-1.22 -0.81,0.53 -0.34,0.89 0.65,1.54 -2.06,0.77 -0.41,0.36 -0.93,0.38 -0.52,0.05 -1,0.77 -0.46,0.62 -0.09,-1.51 -0.58,0.74 -0.22,0.51 1,1.65 0.55,2.45 -1.31,0.45 -0.53,0.21 -1.38,-1.61 -0.71,-1.9 -1.45,-2.41 -1.5,-0.51 0.56,-1.55 -0.68,-2.22 0.98,-0.81 0.35,-0.48 -0.53,-0.67 -1.81,-0.24 -1.81,-1.11 -0.28,1.59 -0.89,0.57 -0.33,-0.77 -1.27,-0.14 -0.34,-0.34 -0.64,0.19 -0.77,0.03 -0.62,-0.87 -0.19,-0.14 -0.55,0.41 0.19,0.99 -0.14,0.33 0.46,0.31 1.27,1.27 -0.12,1.53 0.98,4.64 3.22,3.31 0.02,1.18 -1.81,1.46 -0.1,0.58 1.82,6.56 0.55,3.32 2.41,2.48 -0.29,0.33 -7.24,0.69 -2.24,-0.75 -0.09,-2.71 -0.24,-2.54 0.14,-0.46 -0.03,-0.17 -0.46,-2.71 -0.19,-0.75 1.94,-3.67 -0.19,-2.67 -0.67,0.15 -0.68,0.1 -3.96,-2.6 -1.2,-4.38 -1.38,-1.87 -1.99,-0.02 -6.54,2.54 -1.04,-0.26 -0.35,-1.94 0.42,-1.46 -3.31,-1.44 -0.5,-0.83 0.07,-4.34 1.9,-2.67 0.76,-2.05 0.03,-1.27 -1.29,0.16 -0.84,-0.78 1.33,-4.44 4.49,-7.84 2.77,0.17 0.55,-0.5 0.75,-2.49 1.54,-0.79 -0.23,-1.81 1.58,-1.07 0.95,-1.48 -0.03,-1.94 -0.63,-1.54 -0.76,-0.58 -1.92,-0.83 -2.94,0.49 -1.04,-0.28 -0.57,-1.04 0.21,-0.44 3.52,-1.81 0.19,-5.3 0.7,-1.48 2.05,-1.42 0.89,-1.75 0.82,-3.18 -1.09,-3.54 0.23,-0.35 1.11,1.28 2.4,0.21 -2.75,13.08 1.51,0.44 3.47,-0.67 2.12,0.78 0.44,1.66 -0.52,4.62 -1.09,2.76 0.26,1.37 1.84,1.3 1.72,3.41 2.16,1.65 2.14,0.41 6.72,-0.14 4.7,1.12 4.15,-1.07 2.13,-0.03 4.51,1.13 2.57,-0.95 0.55,0.05 0.66,1.72 0.06,2.78 -2.4,4.19 -3.41,4.33 -1.37,3.71 -0.16,1.09 0.6,1.11 1.45,1.41 1.8,0.27 3.13,-0.59 1.11,-0.64 2.79,-0.12 3.28,1.22 1.81,-0.42 2.94,1.4 2.35,1.79 1.95,3.49 0.63,2.3 -0.96,4.27 0.58,4.55 -0.51,0.32 -0.04,0.64 0.61,1.17 -1.22,0.77 -0.84,-0.72 -0.17,-0.98 -1.22,-0.27 -0.55,-0.26 -0.26,0.46 -1.39,1.18 -0.58,-0.24 -0.26,-0.36 -0.38,-0.02 -0.71,0.39 -1.5,-2.36 -1.27,0.96 -0.93,-0.36 -1.6,-0.5 -0.65,-1.03 -0.67,0.19 -0.74,-0.86 -0.62,0.51 -0.19,0.79 -0.89,0.33 0.34,1.08 0.27,1.03 0.24,0.6 0.78,0.6 0.77,-0.24 0.57,0.08 0.86,-0.31 -0.17,1.75 -1.77,0.17 -1.44,0.53 -0.74,-1.2 -0.1,-0.33 -1.05,-1.17 -0.15,-0.94 0.11,-0.22 z m 21.52,4.31 -0.69,-0.39 -0.43,-0.03 -0.88,-0.36 -0.02,-0.02 -0.4,-0.36 -0.42,0.46 -0.32,-0.13 0.35,-0.54 -0.88,-1.49 -0.9,0.53 -1.04,-0.9 -0.36,-0.34 -0.17,-0.51 -1.39,0.01 -0.26,0.28 -1.23,0.87 -1.33,-0.05 -0.46,0.04 -0.43,-0.23 -0.63,-0.63 -0.53,-0.31 -0.09,-0.81 -1.24,0.34 -1.03,0.02 0.02,-0.42 -1.25,-0.34 -0.91,-0.46 -1.34,-0.09 -0.48,0.24 -0.23,0.58 -0.02,0.79 1.72,0 0.09,0.08 1.17,1.07 0.23,0.67 0.36,1.37 0.84,0.31 0.16,-0.4 0.34,0.28 1.07,0.03 0.06,0.22 -1.84,0.74 -0.43,0.15 -0.69,2.4 5.47,0.77 4.18,-0.92 5.93,-0.14 -0.19,-1.22 0.52,-1.16 z m -48.68,-18.07 0.79,-0.17 0.92,-0.79 0.08,-1.12 1.29,0.9 1.6,0.63 -0.96,1.17 0.43,1.85 0.27,0.32 -0.03,0.58 -0.6,0.94 0.22,0.64 1.01,0.31 1.26,1.35 2.07,4.36 -0.93,0.61 -0.42,0.84 0.15,0.91 3.15,1.85 0.6,2.9 0.88,1.32 -0.12,1.39 0.48,1.61 1.48,1.13 -1.12,1.39 -0.96,0.36 -0.86,-0.5 -0.6,0.41 -6.38,-1.39 -0.81,-2.54 0.53,-0.62 -0.6,0.02 -1.36,-3.89 -0.81,-1.9 0.1,-2.06 1.63,-1.56 -0.17,-1.35 -1.81,-1.66 -1.69,-1.15 -0.76,-4.06 -0.29,-0.58 0.02,-1.82 -0.77,-1.08 1.24,-0.74 0.88,0.63 0.67,0 0.3,0.56 z"
 title="Rivers"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-RI" />
<path
 d="m 178.43165,0.2287449 12.88,5.68 20.53,7.2500001 4,2.35 4.64,-1.49 3.65,-0.02 8.54,4.12 15.88,15.56 5.98,10.42 0,0 -3.03,2.6 -7.1,4 -9.51,-1.28 -1.9,-0.66 -1.7,-2.05 -2.27,-0.68 -4.97,-0.19 -0.59,5.48 -0.73,1.89 -0.5,0.22 -2.7,-1.44 -2.79,0 -4.85,1.56 -2.11,1.82 -0.11,0.7 0.78,5.14 0.07,8.44 -1.35,1 -4.04,1.64 -10.02,0.79 -6.09,0.95 -5.83,8.58 -1.88,1.87 -3.07,1.91 0.06,2.88 1.43,4.64 0.65,4.25 -0.74,3.029995 -2.46,1.7 -6.11,0.53 -1.28,-0.29 -4.8,0.64 -2.64,-0.31 -4.47,0.33 -9.33,-1.67 -0.92,0.6 -0.93,4.51 0.1,18.21 -0.66,13.78 0,0 -1.62,0.97 -0.94,-0.07 -0.77,-1.75 -2.04,0.72 -1.89,-0.86 -1.69,0.12 -12,5.45 -2.4,3 -1.71,1.35 -2.78,-0.29 -0.76,-0.51 -2.55,-3.65 1.16,-4.77 2.61,-5.63 2.12,-9.79 -0.79,-13.05 0.14,-9.94 1.01,-3.779995 1.28,-1.48 3.95,-1.18 2.68,-0.02 3.17,2.04 1.02,-0.04 0.64,-1.56 0.24,-8.02 -1.68,-5.52 -0.04,-2.04 1.3,-6.06 0.18,-3.32 -1.8,-4.28 -1.86,-2.15 0.42,-3.7 1.42,-2.98 -0.09,-2.4 1.62,-3.93 -0.4,-1.25 -1.08,-0.88 -1.16,0.31 -2.49,3.69 -0.63,0.56 -1.82,0.43 -3.06,-0.68 -2.95,-2.07 -9.56,-3.12 -1.06,-1.1 -3.19,-1.82 -1.65,-2.12 -0.76,-0.31 -4.629999,1.58 -1.86,-0.74 -6.62,0.14 0,0 0.09,-16.44 4.14,-0.02 16.559999,-14.58 25.12,-5.0100001 2.41,2.14 5.71,0.48 6.45,-0.72 4.85,0.56 5.33,-0.16 5.25,-6.26"
 title="Sokoto"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-SO" />
<path
 d="m 488.91165,275.87874 4.59,-2.65 5.85,0.78 10.59,-4.85 6.44,1.09 3.99,0.03 0,0 3.57,0.71 5.9,-0.6 12.46,0.02 6.37,-0.47 0,0 5.45,10.18 1.46,1.92 4.65,1.08 2.08,1.29 5.26,9.82 -0.46,2.17 0.34,3.84 2.66,2.94 4.14,1.47 2.02,3.84 0.26,1.81 -1,3.62 -5.99,11.44 0.38,5.78 -0.44,2.08 -6.12,5.22 -8.63,11.52 -5.08,5.48 -3.8,3.22 -4.14,4.78 -0.82,1.58 2.52,6.73 2.91,4.7 2.71,2.45 2.72,-1.99 2.83,-4.01 1.64,-0.38 1.42,0.43 1.52,1.12 2.5,3.15 4.32,3.84 2.15,2.6 1.04,2.02 -0.58,5.49 0.74,1.73 0.38,3.54 1.94,4.62 -0.05,1.56 1.22,0.88 0,0 -4.94,5.48 -1.09,1.94 -0.89,2.92 0.38,5.92 0.92,3.32 1.33,2.12 -0.18,1.29 -0.98,0.73 -4.04,-0.35 -0.68,0.46 -2.06,0.06 -0.18,1.64 -1.72,0.75 -1.54,1.93 -1.91,0.43 -1.09,4.21 -2.12,0.65 -1.37,2.72 0.06,0.5 0.94,-0.05 0.46,0.44 0.09,1.77 0.88,0.11 0.19,0.89 -0.99,0.43 -0.62,1.15 0.94,1.52 -0.08,1.04 -1.92,1.11 -0.22,3.22 -1.46,1.44 -0.57,1.91 -1.81,0.78 -1.77,-0.83 -0.6,0.54 -1.24,0.15 -0.46,0.64 0.46,0.88 -0.18,1.73 -0.44,0.5 -3.75,0.68 -0.42,0.22 -0.2,1.37 -1.37,-0.18 -3.03,-2.03 -2.25,1.01 -0.67,-0.7 -3.01,-0.66 -1.42,-1.22 -0.58,0.05 -1.22,1.41 -2.03,-0.08 0.24,-8.73 -2.03,-2.16 -2.24,-0.11 -2.36,2.14 -2.84,-0.48 -1.86,-0.85 -1.43,-3.38 -1.18,-2.19 -1.22,-0.81 -1.17,-0.07 -1.31,-2.11 -0.12,-0.73 1.66,-4.79 -2.66,-1.84 -1.49,-0.2 -0.6,0.74 -1.69,-2.15 -1.03,-0.08 -1.5,-1.61 -0.77,-0.07 -0.36,-1.52 -1.25,-0.63 -0.4,0.46 -1.47,-0.36 -1.85,-1.58 0.52,-1.93 -0.4,-2.09 -1.65,-1.31 -0.76,4.76 0.08,2.89 -1.39,6.02 -0.88,1 -1.67,0.57 -0.34,0.87 -0.64,0.11 -0.94,-0.97 -15.69,1.52 -2.64,-3.08 0.62,-1.75 -0.85,-2.06 -0.19,-1.18 0.07,-0.81 -0.89,-0.32 -8.2,7.4 -0.64,1.12 -2.44,1.72 -1.12,1.84 -4.62,4.63 -1.34,-0.72 -2.2,-0.1 -1.6,-0.22 -0.8,-0.61 -0.9,2.13 0.3,0.79 -0.76,0.97 -0.38,1.8 0.36,2.03 -0.28,1.07 -0.6,0.37 -1.02,2.82 -1.35,5.37 -0.5,0.39 -0.68,-0.34 -1.32,0.37 -1.03,-1.32 -0.44,0.46 0,0 1.9,-8.19 0.03,-8.76 0.33,-1.08 -0.61,-0.73 2.11,-11.5 3.31,-6.16 3.44,-3.25 3.09,-1.94 0.92,-1.43 -0.29,-5.92 2.38,-5.89 0.59,-3.23 -0.56,-1.78 0.26,-1.04 -1.17,-1.36 0.14,-0.65 -8.37,-7.57 -4.44,-5.65 -5.14,-4.9 -7.48,-1.77 -8.18,-0.48 -7.47,0.95 -6.12,2.63 -1.9,-0.57 3.79,-5.97 0,0 1.21,-1.39 11.23,-7.21 0.11,-1.19 -1,-2.68 0.54,-0.65 -0.35,-2.88 -2.03,-2.51 -1.71,-1.36 0.73,-2.86 1.33,-2.14 1.28,-0.86 1.86,0 1.73,0.9 1,1.07 1.52,-0.23 0.33,0.41 4.51,0.95 2.74,-0.82 2.58,-3.68 0,0 3.85,0.25 4.11,-0.54 4.41,-1.01 2.43,-1.19 7.68,-7.65 7.11,-3.76 4.74,-5.72 2.06,-4.19 2.49,-1.44 9.52,-2.1 1.9,0.11 12.18,-5.86 1.78,-3.08 -0.21,-5.54 -0.43,0 -0.3,-2.25 0.55,-1.33 -1.05,-6.02 -2.3,-3.86 -0.76,-5.96 0.51,-4.08 -0.21,-2.15 z"
 title="Taraba"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-TA" />
<path
 d="m 526.42165,32.448745 12.45,0.19 9.56,1.2 10.76,4.18 11.69,2.55 2.73,1.51 6.09,5.17 4.78,3 1.58,0.14 0.3,-0.82 1,-0.28 1.65,0.65 0.62,-0.52 -0.55,-1.18 1.49,0.16 1.7,0.94 1.66,-0.42 0.83,0.71 0.63,1.07 1.04,-0.62 2.85,0.61 0.74,0.5 0.93,0.12 0.99,-0.01 0,0 -0.08,4.21 -1.49,8.02 1.23,3.85 1.45,1.82 4.8,3.84 0.48,3.74 -1.84,4.21 -2.37,3.08 -7.06,6.31 -0.55,2.2 1.72,3.83 -0.05,5.789995 -2.54,16.29 -0.13,3.5 1.69,7.44 -4.72,9.14 0.15,1.94 0.64,0.36 4.91,-0.21 3.13,3.75 0.84,3.33 -0.99,2.11 -4.54,4.43 -3.3,5.9 -2.89,3.35 -0.9,2.86 0.04,2.97 0.76,4.15 -0.24,2.94 -2.09,3.08 -6.11,3.65 -11.21,3.02 -2.66,1.92 -1.72,2.83 -0.61,2.77 0.28,8.39 -3.41,4.53 -3.04,0.69 0,0 -6.78,0.01 -0.3,-0.51 -0.77,-6.45 1.2,-11.85 -0.67,-4.87 -3.68,-3.38 -1.58,1.02 1,-1.54 -3.42,-3.58 -4.75,-6.4 -8.49,-6.26 -2.18,-1.29 -2.98,-1.01 -4.04,-0.17 -4.17,1.51 -0.91,0.88 0,0 -3.04,-0.37 -1.63,-1.53 0.99,-6.78 1.05,-2.72 0.23,-4.92 -8.35,-20.91 -0.2,-3.87 -0.95,-2.71 -0.33,-2.7 -0.21,-6.74 -3.16,-4.66 0.19,-1.81 -0.77,-7.079995 -1.14,-2.93 -7.74,-6.19 0,0 -0.87,-2.9 -1.76,-11.53 -2.21,-3.4 -1.85,-0.88 -2.03,0.61 -4.99,-2.22 -5.86,1.86 -1.12,0.72 -1.46,-2.53 -0.69,-4.35 -2.13,-4.78 -2.21,-1.25 -6.33,1.96 -2.82,1.37 -3.16,0.63 -5.32,2.59 -2.1,3.99 -3.14,1.8 -6,-0.73 -1.79,-1.18 0,0 7.38,-7.5 3.25,-4.6 4.08,-3.51 5.19,-5.85 3.98,-2.54 9.05,-4.06 16.06,-0.94 12.55,-4.7 19.58,-1.07 z"
 title="Yobe"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-YO" />
<path
 d="m 258.59165,50.268745 5.45,6.52 5.08,-0.11 3.34,-0.61 0,0 -1.44,10.82 0.99,6.17 -0.07,6.05 1,5.17 0.39,4.75 1.31,3.21 -0.4,3.57 2.5,5.199995 0.69,3.05 -0.13,1.68 0.95,2.47 -1.09,5.16 -1.82,3.63 1.26,1.21 2.53,1.16 2.68,2.29 1.16,1.43 0.5,1.95 -1.89,1.62 -3.34,-0.81 -0.55,3.2 -4.88,3.97 -1.28,-0.87 -6.61,0.13 -1.5,0.84 -0.65,4 -1.56,4.14 -0.45,3.76 0.16,1.07 1.91,1.9 0.9,3.69 -1.25,6.1 -0.02,2.33 0,0 -1.01,-0.03 -2.34,2.38 -2.75,1.77 -0.85,1.14 -1.71,3.41 -0.64,3.55 -1.51,3.23 -3.04,3.1 -2.33,1.51 -4.71,0.62 -7.94,-0.57 -5.64,0.95 -5.27,4.71 -2.86,4.16 -1.28,0.76 -1.68,0.12 0,0 0.07,-0.84 -1.59,-4.09 -3.8,-6.64 -3.32,-4.4 0,0 -0.21,-5.48 -1.38,-7.58 -1.93,-3.01 -5.38,-2.71 0,-1.2 2.05,-6.49 0.01,-2.47 -1.41,-2.15 -4.35,-1.77 -4.85,-0.62 -1.22,0.81 -2.49,0.59 -3.79,-0.5 -5.47,0.76 -3.65,-2.41 -2.87,-0.11 -1.69,-3.3 -1.08,-0.57 -3.61,0.65 -2.09,-0.31 -0.91,-0.64 -0.79,0.15 -1.06,0.62 -0.82,2.32 -6.34,1.46 -4.11,-2.25 -1.82,0 -0.86,0.48 0,0 0.66,-13.78 -0.1,-18.21 0.93,-4.51 0.92,-0.6 9.33,1.67 4.47,-0.33 2.64,0.31 4.8,-0.64 1.28,0.29 6.11,-0.53 2.46,-1.7 0.74,-3.029995 -0.65,-4.25 -1.43,-4.64 -0.06,-2.88 3.07,-1.91 1.88,-1.87 5.83,-8.58 6.09,-0.95 10.02,-0.79 4.04,-1.64 1.35,-1 -0.07,-8.44 -0.78,-5.14 0.11,-0.7 2.11,-1.82 4.85,-1.56 2.79,0 2.7,1.44 0.5,-0.22 0.73,-1.89 0.59,-5.48 4.97,0.19 2.27,0.68 1.7,2.05 1.9,0.66 9.51,1.28 7.1,-4 3.03,-2.6 0,0 z"
 title="Zamfara"
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
 id="NG-ZA" />
 fill="#ADD8E6"
 stroke="#888888"
 stroke-width="2"
</svg>

<!-- Indicator Matrix -->
  <rect x="600" y="520" width="140" height="80" fill="#ffffff" stroke="#000000" stroke-width="2" />
  <text x="630" y="540" font-family="Arial, sans-serif" font-size="12" fill="#000000">Indicator Matrix</text>
  <!-- Sample data for indicator matrix -->
  <rect x="640" y="550" width="20" height="20" fill="green" />
  <rect x="670" y="550" width="20" height="20" fill="yellow" />
  <rect x="700" y="550" width="20" height="20" fill="red" />
  <text x="635" y="590" font-family="Arial, sans-serif" font-size="12" fill="#000000">Low</text>
  <text x="660" y="590" font-family="Arial, sans-serif" font-size="12" fill="#000000">Medium</text>
  <text x="705" y="590" font-family="Arial, sans-serif" font-size="12" fill="#000000">High</text>
  `;
};

// Example usage:
const motaEngilMapSVG = generateMotaEngilMap();

const today = new Date();
const staff_no= "2347035517578"

const keySecurityIncidents = [
  {
    location: "Akwa Ibom",
    date: "August 22, 2023",
    details: "Gunmen suspected to be armed robbers intercepted a man along Uyo-Etinan Road in Etinan, Etinan LGA, and stole his saloon car."
  },


    {
      location: "Abuja",
      date: "August 21, 2023",
      details: "Gunmen suspected to be kidnappers reportedly abducted two persons at a residential estate in Sabon Lugbe along Airport Road, AMAC. No further details were available."
    },
    {
      location: "Benue",
      date: "August 21, 2023",
      details: "Gunmen belonging to rival groups suspected to be herdsmen reportedly engaged themselves in a gun battle at Chito village, Ukum LGA. Five persons were reportedly killed in the gun battle while others sustained gunshot injuries."
    },
    // Add more incidents here...
    {
      location: "Imo",
      date: "August 22, 2023",
      details: "The Nigerian Army reportedly engaged in a gun battle with armed men suspected to be separatist members along the Owerri-Onitsha expressway at Ukwuorji, Mbaitoli LGA, forcing the assailants to flee the area."
    },
  
  {
    location: "Edo",
    date: "August 23, 2023",
    details: "Gunmen suspected to be armed robbers reportedly attacked a patrol vehicle belonging to soldiers along Akpakpava street in Benin, Oredo LGA. The assailants reportedly injured one soldier."
  },
  {
    location: "Delta",
    date: "August 24, 2023",
    details: "Gunmen on motorcycles suspected to be cultists reportedly attacked a Police Division in Isiokolo community, Ethiope East LGA. The assailants reportedly killed one Policeman while another sustained gunshot injury."
  },
  {
    location: "Rivers",
    date: "August 22, 2023",
    details: "Suspected criminals vandalised a pipeline and siphoned fuel at a fuel dump in Rex Lawson Street in Borikiri town, Port Harcourt which resulted in an explosion and reportedly killed one person."
  },
  {
    location: "Rivers",
    date: "August 22, 2023",
    details: "Two factions of the National Union of Road Transport Workers (NURTW) reportedly clashed along the Port Harcourt-Aba Road in Oyigbo, Obior/Akpor LGA. No further details were available."
  },
  {
    location: "Rivers",
    date: "August 22, 2023",
    details: "Armed men suspected to be cultists reportedly attacked a student at his residence in Rumuolumeni Town, Obio/Akpor LGA. The assailants reportedly stabbed the victim with broken bottles."
  },
  {
    location: "Rivers",
    date: "August 23, 2023",
    details: "Armed robbers reportedly attacked the Rivers State University Girls Hostel at Eagles Island, Rumueme, Port Harcourt LGA. The assailants reportedly assaulted students with machetes, robbed, and dispossessed an unspecified number of the students of their cash and other valuables."
  },
  {
    location: "Rivers",
    date: "August 25, 2023",
    details: "Armed men suspected to be cultists reportedly shot and killed a Policeman on security escort duty along Olusegun Obasanjo Road in Oroworukwo area, Port Harcourt LGA."
  },
  {
    location: "Abia",
    date: "August 21, 2023",
    details: "Armed men suspected to be kidnappers, reportedly engaged in a shootout with government security forces at Ndiawa village, Umuneochi LGA. Three of the assailants were reportedly killed while others fled."
  },
  {
    location: "Ebonyi",
    date: "August 23, 2023",
    details: "Armed men suspected to be separatist members, reportedly engaged Soldiers in a gunshot battle at Effium community, Ohaukwu LGA. The assailants reportedly fled the scene. No further details were available."
  },
  {
    location: "Enugu",
    date: "August 21, 2023",
    details: "Armed men suspected to be kidnappers reportedly engaged Policemen in a shootout along Enugu-Port Harcourt Expressway, in Awkunanaw town, Enugu South LGA. Two of the assailants were reportedly killed in the gunfire, while others fled with gunshot injuries."
  },
  {
    location: "Enugu",
    date: "August 21, 2023",
    details: "Gunmen suspected to be kidnappers, reportedly shot at a vehicle along Old Enugu-Onitsha Road in Obioma town, Udi LGA, forcing the vehicle to stop. The assailants reportedly abducted one person while the other two occupants died from gunshot injuries."
  }
];


const fatalities = 70;
const injuries = 36;
const abductions = 51;

const formatDate = (date) => {
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const formattedToday = formatDate(today);

const generate_security_report_PDF = () => {

  const svgMapContent = generateSVGMap();
  const lastWeek = new Date(today);
  lastWeek.setDate(lastWeek.getDate() - 7);
  const formattedStartDate = formatDate(lastWeek);
  const formattedEndDate = formattedToday;

  const incidentsData = {
    fatalities: 70,
    injuries: 36,
    abductions: 51,
    effectsOnAssets: "Some relevant data about effects on assets goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ex urna. Donec id tempus nulla. Duis eget nunc vitae elit interdum dapibus.",
    riskImpact: "Some relevant data about risk impact goes here. Vestibulum efficitur ligula et nisi semper, ac eleifend dolor mollis. Suspendisse potenti. Nulla facilisi. Integer vel lacus nec arcu gravida malesuada.",
    briefSummary: "Highlights of Week 4 incidents:\n- Increased security patrols in high-risk areas\n- Collaboration with local authorities for incident response\n- Implementation of new security protocols"
  };


  
  const fatalitiesPercentage = (incidentsData.fatalities / 100) * 100;
  const injuriesPercentage = (incidentsData.injuries / 100) * 100;
  const abductionsPercentage = (incidentsData.abductions / 100) * 100;

  const keySecurityIncidentsHTML = keySecurityIncidents.map((incident, index) => `
  <p>${index + 1}. ${incident.location}. ${incident.date}, ${incident.details}</p>
`).join('');


  const maxVal = Math.max(fatalities, injuries, abductions);
  const graphWidth = 400;
  const barWidth = 100;
  const barSpacing = 20;
  const graphHeight = 200;

  const fatalitiesHeight = (fatalities / maxVal) * graphHeight;
  const injuriesHeight = (injuries / maxVal) * graphHeight;
  const abductionsHeight = (abductions / maxVal) * graphHeight;


  const generatePieChart = (data) => {
    const total = data.reduce((acc, item) => acc + item.value, 0);
    const centerX = 200;
    const centerY = 200;
    const radius = 150;
    let startAngle = -90; // Start angle at 12 o'clock position

    let chartSVG = `<svg width="400" height="400">`;

    // Add heading for the pie chart
    chartSVG += `<text x="${centerX}" y="30" text-anchor="middle" font-size="16" font-weight="bold">Security Incidents Breakdown</text>`;

    data.forEach((item, index) => {
        const percent = (item.value / total) * 100;
        const angle = (percent / 100) * 360;
        const largeArcFlag = angle > 180 ? 1 : 0;
        const endAngle = startAngle + angle;

        // Calculate coordinates for the arc
        const x1 = centerX + radius * Math.cos((startAngle / 180) * Math.PI);
        const y1 = centerY + radius * Math.sin((startAngle / 180) * Math.PI);
        const x2 = centerX + radius * Math.cos((endAngle / 180) * Math.PI);
        const y2 = centerY + radius * Math.sin((endAngle / 180) * Math.PI);

        // Calculate midpoint of the arc
        const midAngle = startAngle + angle / 2;
        const midX = centerX + (radius / 2) * Math.cos((midAngle / 180) * Math.PI);
        const midY = centerY + (radius / 2) * Math.sin((midAngle / 180) * Math.PI);

        // Draw the arc
        chartSVG += `
            <path d="M${centerX},${centerY} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z" fill="${item.color}"></path>
        `;

        // Add text for the indicator
        chartSVG += `<text x="${midX}" y="${midY}" text-anchor="middle" font-size="12">${item.label} (${item.value})</text>`;

        // Update start angle for the next segment
        startAngle = endAngle;
    });

    chartSVG += `</svg>`;

    return chartSVG;
};

// Example data
const dataPie = [
    { label: 'Terrorism', value: 25, color: '#FF5733' },
    { label: 'Violent Protests', value: 15, color: '#3498DB' },
    { label: 'Kidnapping', value: 20, color: '#27AE60' },
    { label: 'Other', value: 40, color: '#F39C12' }
];

const pieChartSVG = generatePieChart(dataPie);

console.log(pieChartSVG); // Output the SVG for verification




  const graphSVG = `
    <svg width="${graphWidth}" height="${graphHeight + 60}">
      <rect x="${barSpacing}" y="${graphHeight - fatalitiesHeight}" width="${barWidth}" height="${fatalitiesHeight}" fill="#FF5733"></rect>
      <text x="${barSpacing + (barWidth / 2)}" y="${graphHeight + 20}" text-anchor="middle" font-size="12">${fatalities}</text>
      <text x="${barSpacing + (barWidth / 2)}" y="${graphHeight + 40}" text-anchor="middle" font-size="12">Fatalities</text>
      
      <rect x="${(2 * barSpacing) + barWidth}" y="${graphHeight - injuriesHeight}" width="${barWidth}" height="${injuriesHeight}" fill="#3498DB"></rect>
      <text x="${(2 * barSpacing) + barWidth + (barWidth / 2)}" y="${graphHeight + 20}" text-anchor="middle" font-size="12">${injuries}</text>
      <text x="${(2 * barSpacing) + barWidth + (barWidth / 2)}" y="${graphHeight + 40}" text-anchor="middle" font-size="12">Injuries</text>
      
      <rect x="${(3 * barSpacing) + (2 * barWidth)}" y="${graphHeight - abductionsHeight}" width="${barWidth}" height="${abductionsHeight}" fill="#27AE60"></rect>
      <text x="${(3 * barSpacing) + (2 * barWidth) + (barWidth / 2)}" y="${graphHeight + 20}" text-anchor="middle" font-size="12">${abductions}</text>
      <text x="${(3 * barSpacing) + (2 * barWidth) + (barWidth / 2)}" y="${graphHeight + 40}" text-anchor="middle" font-size="12">Abduction/Kidnap</text>
    </svg>
  `;
  const svgDataURI = `data:image/svg+xml;base64,${Buffer.from(svgMapContent).toString('base64')}`;

  const securityReportHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Weekly Security Incident Report Nigeria</title>
        <style>
        
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
            .container_security_report {
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f8f9fa;
                border-radius: 10px;
            }
            .header {
                text-align: center;
                margin-bottom: 20px;
            }
            .footer {
                text-align: right;
                margin-top: 20px;
                font-size: 14px;
            }
            .footer p {
                margin: 0;
            }
            .signature {
                text-align: center;
                margin-top: 40px;
            }
            .watermark {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: rgba(0, 0, 0, 0.1);
                font-size: 5em;
                z-index: -1;
            }
            .icon {
                width: 50px;
                height: 50px;
                display: inline-block;
                background-color: #007bff;
                border-radius: 50%;
                text-align: center;
                line-height: 50px;
                margin-right: 10px;
                color: #fff;
                font-size: 24px;
            }
        </style>
    </head>
    <body>

    <main>
    <!-- Your SVG content here -->
    <svg xmlns="http://www.w3.org/2000/svg" height="250" width="450" version="1.0" viewBox="-14.709615 -11.98125 127.48333 71.8875">
        <defs>
            <!-- Define the clip path -->
            <clipPath id="a">
                <path d="M0 841.89h1785.827V0H0z"/>
            </clipPath>
        </defs>
        <!-- Apply the clip path to the group -->
        <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 -1155.7275 543.7908)">
            <!-- Your existing paths and shapes here -->
            <path d="M924.582 415.8627h19.169v-19.17h-19.169z" fill="#f7a30a" fill-rule="evenodd"/>
            <path d="M943.751 435.0327h19.17v-19.169h-19.17z" fill="#005ec4" fill-rule="evenodd"/>
            <path d="M942.4095 435.0324h1.342v-19.169h-19.169v1.341h17.827zm1.3418-19.1694h19.17v-1.342h-17.827v-17.828h-1.343v17.828z" fill="#231f20"/>
            <path d="M956.972 409.0544h-.851c-.916-1.695-1.841-3.4-2.767-5.196-.832 1.796-1.674 3.501-2.516 5.196h-.972v-6.381h.748v5.195h.019c.252-.837 1.608-3.564 2.42-5.195h.366c.879 1.631 2.365 4.448 2.627 5.195h.019v-5.195h.907zm4.5322-5.9629c-1.691 0-2.271 1.523-2.271 2.771 0 1.196.654 2.553 2.271 2.553 1.618 0 2.272-1.357 2.272-2.553 0-1.248-.579-2.771-2.272-2.771m0-.637c2.021 0 3.273 1.504 3.273 3.408 0 1.788-1.383 3.192-3.273 3.192-1.889 0-3.271-1.404-3.271-3.192 0-1.904 1.251-3.408 3.271-3.408m19.9776 6.5969l-4.021.003v-6.385h4.426v.639l-3.511.002v2.052h3.058v.637h-3.058v2.414h3.106zm7.1982 0h-.752v-5.087h-.019c-.444.638-2.876 3.428-4.329 5.087h-.679v-6.382h.755v5.078h.018c.397-.555 2.858-3.418 4.29-5.078h.716zm5.9082-3.5732v-2.16c-.367-.174-.783-.229-1.339-.229-1.432 0-2.573 1.084-2.573 2.699 0 1.495.961 2.626 2.677 2.626.725 0 1.329-.247 1.725-.511l.377.528c-.396.319-1.15.62-2.111.62-2.377 0-3.678-1.668-3.678-3.282 0-1.75 1.207-3.318 3.555-3.318.839 0 1.64.21 2.282.428v2.599zm3.2888 3.5735h-.914v-6.382h.914zm1.4983-6.3821h3.658v.639h-2.744v5.743h-.914zm-31.3632.0039v5.742l2.139.001v.638h-5.297v-.639h2.203v-5.742z" fill="#636466" fill-rule="evenodd"/>
            <path d="M972.3656 409.0544l-2.607-6.381h.974l.945 2.689.225.639.671 1.91 1.987-5.238h1.102l-2.568 6.381z" fill="#636466"/>
            <path d="M972.2015 405.362h4.695V406h-4.466z" fill="#636466" fill-rule="evenodd"/>
            </g>
    </svg>
    <!-- Text added to the right -->
    <text x="430" y="40" font-family="Calibri, sans-serif" font-size="24" fill="#333333" font-weight="bold" text-anchor="end">Nigeria Weekly Report</text>
    <svg width="100%" height="1">
        <line x1="0" y1="0" x2="100%" y2="0" style="stroke: grey; stroke-width: 1;" />
    </svg>
</main>

<div class="container_security_report">
<div class="header">
    <h2 style="color: #00008B; font-size: 24px;">SECURITY ADVISORY</h2>
    <h3 style="color: #00008B;">WEEK: ${formattedStartDate} to ${formattedEndDate}</h3>
    <h3 style="color: #00008B;">Fatalities: ${incidentsData.fatalities} | Injuries: ${incidentsData.injuries} | Abduction/Kidnap: ${incidentsData.abductions}</h3>
</div>
<div class="content">
    <img src="${svgDataURI}" alt="" />
    <div id="map-container">${svgMapContent}</div>
    <h2 style="color: #00008B;">Security Risk Update:</h2>
    <p style="color: #444; font-family: 'Trebuchet MS', sans-serif; font-size: 12px;">${incidentsData.effectsOnAssets}</p>

    <div class="graph">
        ${graphSVG}
    </div>

    <h2 style="color: #00008B;">Risk Impact:</h2>
    <p style="color: #444; font-family: 'Trebuchet MS', sans-serif; font-size: 12px;">${incidentsData.riskImpact}</p>
    <h3 style="color: #00008B; font-size: 16px;">${incidentsData.briefSummary}</h3>
</div>
<div class="graph">
    ${graphSVG}
</div>

<h2 style="color: #00008B;">Key security incidents</h2>
<div style="color: #444; font-family: 'Trebuchet MS', sans-serif; font-size: 12px;">
    ${keySecurityIncidentsHTML}
</div>
<div class="graph">
    ${pieChartSVG} <!-- Insert the pie chart SVG here -->
</div>

<h2 style="color: #00008B;">Mota-Engil Operational Zones: Security Overview</h2>
${motaEngilMapSVG}
<!-- map here -->

<div class="footer">
        <p style="color: #333; font-size: 18px; font-weight: bold; line-height: 1.5;">Vitor Leite,</p>
        <p style="color: #444; font-family: 'Trebuchet MS', sans-serif; font-size: 12px; line-height: 1.5;">Security Manager,</p>
        <p style="color: #444; font-family: 'Trebuchet MS', sans-serif; font-size: 12px; line-height: 1.5;">Kama Railway Project</p>
    </div>
</div>
<div class="signature">
<p>______________________________</p>
<p>Signature</p>
</div>

    </body>
    </html>
  `;

  return securityReportHTML;
};

const downloadsFolderPath = "C:\\Users\\Administrator\\Downloads";
const uniqueFilename = `Mota-Engil Nigeria National Weekly_Security Report ${formattedToday}.pdf`;
const pdfPath = path.join(downloadsFolderPath, uniqueFilename);

const generate_incident_report_PDF = (pdfData, filename, callback) => {
  console.log('Generating PDF...');
  pdf.create(pdfData).toFile(filename, (err, res) => {
    if (err) {
      console.error('Error during PDF generation:', err);
      callback(err);
    } else {
      console.log('PDF generation completed.');
      callback();
    }
  });
};
//////////////////////////////////////////////////////////////////////////

///////////////////////////unlock
const sendMessageToStaffs = async (groupId, pdfData, pdfFilename) => {
  try {
    const pdfResponse = await axios.post(
      'https://gate.whapi.cloud/messages/document',
      {
        to: `${staff_no}@s.whatsapp.net`,
        media: `data:application/octet-stream;name=${pdfFilename};base64,${pdfData}`,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log('PDF file sent successfully:', pdfResponse.data);
  } catch (error) {
    console.error('Error sending message and PDF:', error.message);
  }
};

const securityReportHTML = generate_security_report_PDF();

generate_incident_report_PDF(securityReportHTML, pdfPath, (error) => {
  if (error) {
    console.error('PDF generation failed:', error);
  } else {
    const pdfData = fs.readFileSync(pdfPath, { encoding: 'base64' });
    sendMessageToStaffs(groupId, pdfData, uniqueFilename);
  }
});

setInterval(() => {
  const securityReportHTML = generate_security_report_PDF();
  generate_incident_report_PDF(securityReportHTML, pdfPath, (error) => {
    if (error) {
      console.error('PDF generation failed:', error);
    } else {
      const pdfData = fs.readFileSync(pdfPath, { encoding: 'base64' });
      sendMessageToStaffs(groupId, pdfData, uniqueFilename);
    }
  });
}, 7 * 24 * 60 * 60 * 1000);

app.post('/OtherIddata', async function (req, res) {
  const driverData = req.body;

  try {
    const client = new MongoClient(uri);
    await client.connect();

    const database = client.db('olukayode_sage');
    const driversHistoryCollection = database.collection('OtherIDs');

    // Insert the driver data into the drivers history collection
    const result = await driversHistoryCollection.insertOne(driverData);
    console.log('Driver added to otherID:', result);

    res.status(200).json({ message: 'Driver added to OtherId' });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while adding the driver to history');
  } finally {
    await client.close();
  }
});

app.post('/extractOtherDetails', async (req, res) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    const database = client.db('olukayode_sage');
    const driversHistoryCollection = database.collection('OtherIDs');

    // Fetch the required data from the database
    const token1Data = await driversHistoryCollection.findOne({ idType: 'Token 1' });
    const groupIDData = await driversHistoryCollection.findOne({ idType: 'GroupID' });

    // Log the retrieved data
    console.log('Extracted Details:');
    console.log('Token1:', token1Data.idNumber);
    console.log('GroupID:', groupIDData.idNumber);

    // Send response with the extracted data
    res.status(200).json({
      message: 'Details extracted successfully',
      token1: token1Data.idNumber,
      groupID: groupIDData.idNumber
    });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred while extracting details' });
  } finally {
    await client.close();
  }
});


app.post('/send_expatriate_parameters', async (req, res) => {
  const { expatriate_name, expatriate_nationality, expatriate_phone_number, expatriate_residence_nigeria, expatriate_department } = req.body;

  try {
      await client.connect();

      const database = client.db('olukayode_sage');
      const expatriates = database.collection('expatriates_collection');

      // Insert the expatriate data into the expatriates collection
      const result = await expatriates.insertOne({
          name: expatriate_name,
          countryOfOrigin: expatriate_nationality,
          phoneNumber: expatriate_phone_number,
          houseAddress: expatriate_residence_nigeria,
          unit: expatriate_department
      });
      console.log('Expatriate added to collection:', result);

      // Respond with success message
      res.status(200).json({ message: 'Expatriate added to collection' });
  } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).send('An error occurred while adding the expatriate to the collection');
  } finally {
      await client.close();
  }
});

// // // serverWebSocket.on('connection', (ws) => {
// // //   console.log('WebSocket connection established');

// // //   // Handle incoming WebSocket messages from clients
// // //   ws.on('message', (message) => {
// // //     console.log(`Received: ${message}`);
// // //   });

// // //   // Handle WebSocket errors
// // //   ws.on('error', (error) => {
// // //     console.error('WebSocket error:', error);
// // //     // Optionally, you can close the connection or perform any other cleanup here
// // //   });

// // //   // Add the client to the appropriate client list based on the purpose
// // //   ws.on('close', () => {
// // //     console.log('WebSocket connection closed');
// // //     // Add logic here to remove the client from the appropriate client list
// // //   });
// // // });

// // // // correct second2
// // // app.get('/events', (req, res) => {
// // //   res.setHeader('Content-Type', 'text/event-stream');
// // //   res.setHeader('Cache-Control', 'no-cache');
// // //   res.setHeader('Connection', 'keep-alive');

// // //   // Add the response object to the SSE clients array
// // //   sseClients.push(res);

// // //   req.on('close', () => {
// // //     // Remove the closed response object from the SSE clients array
// // //     const index = sseClients.indexOf(res);
// // //     if (index !== -1) {
// // //       sseClients.splice(index, 1);
// // //     }
// // //     // Close the response stream
// // //     res.end();
// // //   });
// // //  // Handle SSE errors
// // //  res.on('error', (error) => {
// // //   console.error('SSE error:', error);
// // //   // Optionally, you can close the connection or perform any other cleanup here
// // // });
// // // });
////////////////////////////////////////////////////////////

// async function main() {
//   try {
//     const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
//     await client.connect();
//     const db = client.db(dbName);
//     const collectionName = 'drivers_details';
//     const collection = db.collection(collectionName);

//     const changeStream = collection.watch();

//     changeStream.on('change', (next) => {
//       console.log('Change detected:', next);

//       if (next.operationType === 'insert') {
//         const newEntry = next.fullDocument;

//         // Send the new entry to all connected SSE clients
//         sseClients.forEach((client) => {
//           client.write(`data: ${JSON.stringify(newEntry)}\n\n`);
//         });
//       }
//     });

//     console.log('Change stream is running...');
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// // Call the main function to start the change stream
// main();
// /////////////////////////////////////////////////////////////////////////////////////////////////




// app.post('/checkname', (req, res) => {
//   const userName = req.body.name.toLowerCase();
  
//   if (userName === 'homer') {
//     res.status(401).send({ message: "Sorry, no Homer's!" });
//     return;
//   }

//   // Fetch organic data and send response
//   getOrganicData(userName)
//     .then((organicResults) => {
//       res.json({ organicResults });
//     })
//     .catch((error) => {
//       console.error('Error fetching organic data:', error);
//       res.status(500).send({ message: 'Internal server error' });
//     });
// });

// // Function to fetch organic search results
// function getOrganicData(userName) {
//   return new Promise((resolve, reject) => {
//     const userLocation = userName; // Assuming user's location details come from the name
//     const userSpecific = 'crime' + userLocation;
//     const webLink = `https://www.google.com/search?q=${encodeURIComponent(userSpecific)}&gl=us&hl=en`;

//     unirest
//       .get(webLink)
//       .headers({
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
//       })
//       .then((response) => {
//         const $ = cheerio.load(response.body);
//         const organicResults = [];

//         $(".yuRUbf > a").each((i, el) => {
//           const title = $(el).find('h3').text();
//           const link = $(el).attr('href');
//           const snippet = $(el).parent().find('.IsZvec').text(); // Assuming this class is for snippets
//           const displayedLink = $(el).find('.tjvcx').text(); // Assuming this class is for displayed links
          
//           organicResults.push({
//             title,
//             link,
//             snippet,
//             displayedLink,
//           });
//         });

//         resolve(organicResults);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }
///////////////////////////////////////////////////////////////


function fetchDataForName(name, callback) {
  // Assume name is already validated and sanitized
  const userLocation = name; // Assuming user's location details come from the name
  // const userSpecific = 'crime' + userLocation;
  // const userSpecific = 'crime' + "nigeria";
  const userSpecific = "crime";
  const webLink = `https://www.google.com/search?q=${encodeURIComponent(userSpecific)}&gl=us&hl=en`;

  unirest
    .get(webLink)
    .headers({
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
    })
    .then((response) => {
      const $ = cheerio.load(response.body);
      const organicResults = [];

      $(".yuRUbf > a").each((i, el) => {
        const title = $(el).find('h3').text();
        const link = $(el).attr('href');
        const snippet = $(el).parent().find('.IsZvec').text(); // Assuming this class is for snippets
        const displayedLink = $(el).find('.tjvcx').text(); // Assuming this class is for displayed links
        
        organicResults.push({
          title,
          link,
          snippet,
          displayedLink,
        });
      });

      callback(null, organicResults); // Pass the fetched data to the callback function
    })
    .catch((error) => {
      callback(error, null); // Pass any errors to the callback function
    });
}

// Example usage:
fetchDataForName('homer', (error, data) => {
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Fetched data:', data);
  }
});


//////////////////////////////////////////////////////////////////////////////////////

async function scrapeWebPage(url) {
  try {
      // Fetch HTML content of the webpage
      const response = await axios.get(url);
      const html = response.data;

      // Load HTML content into cheerio
      const $ = cheerio.load(html);

      // Extract information based on CSS selectors
      const title = $('title').text();
      const paragraphs = $('p').map((index, element) => $(element).text()).get();

      // Return the extracted information
      return {
          title: title,
          paragraphs: paragraphs
      };
  } catch (error) {
      console.error("Error scraping web page:", error);
      return null;
  }
}

// Example usage:
const url3 = "https://example.com";
scrapeWebPage(url3)
  .then(data => {
      if (data) {
          console.log("Title:", data.title);
          console.log("Paragraphs:", data.paragraphs);
      } else {
          console.log("Failed to scrape web page.");
      }
  })
  .catch(error => console.error("Error:", error));


async function getPageText(url3) {
  try {
      const response = await axios.get(url3);
      return response.data;
  } catch (error) {
      console.error("Error fetching page:", error);
      return null;
  }
}

// Example usage:
const url4 = "https://example.com";
getPageText(url4)
  .then(html => {
      if (html) {
          console.log(html);
      } else {
          console.log("Failed to fetch page content.");
      }
  })
  .catch(error => console.error("Error:", error));

const server = app.listen(port, () => console.log(`Server listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;



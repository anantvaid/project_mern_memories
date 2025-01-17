// filepath: /home/anantvaid/Documents/mern_project/project_mern_memories/server/seed.js
import mongoose from 'mongoose';
import PostMessage from './models/postMessage.js'; // Adjust the path as necessary

const CONNECTION_URL = 'mongodb://user:pass@mongodb:27017/test?authSource=admin';

const seedData = [
  {
    title: 'First Post',
    message: 'This is the first post',
    creator: 'John Doe',
    tags: ['first', 'post'],
    selectedFile: '',
    likeCount: 0,
    createdAt: new Date(),
  },
  {
    title: 'Second Post',
    message: 'This is the second post',
    creator: 'Jane Doe',
    tags: ['second', 'post'],
    selectedFile: '',
    likeCount: 0,
    createdAt: new Date(),
  },
];

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Database connected');
    await PostMessage.deleteMany({});
    await PostMessage.insertMany(seedData);
    console.log('Dummy data inserted');
    mongoose.disconnect();
  })
  .catch((error) => console.log(`${error} did not connect`));
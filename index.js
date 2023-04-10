import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = new express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/',(req,res)=>{
    res.send("This is the Home Page");
})

app.listen(PORT,()=> console.log(`Server is runnning on http://localhost:${PORT}`));

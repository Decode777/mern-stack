import mongoose from "mongoose"


 const Connection =  async(username, password) => {
    const URL =`mongodb+srv://${username}:${password}@blog-app.6dnxpr5.mongodb.net/?retryWrites=true&w=majority`;
    try {
        const conn = await mongoose.connect(URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          
        });
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database' , error);
    }
};

export default Connection;


const mongoose = require('mongoose');

const DB_HOST = process.env.MONGODB_URI; 
if (!DB_HOST){
    console.error('MongoDB connection string missing');
    process.exit(1);
}



module.exports ={
    connect: DB_HOST =>{
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);

        mongoose.connect(DB_HOST);

        mongoose.connections.concat('error',err=>{
            console.error(err);
            console.log(
                'MongoDB connection error. Please make sure MongoDB is running.'
            );
            process.exit();
        });

        mongoose.connection.once('open',()=>{
            console.log('Connected to MongoDB database');
        });
    },
    close: ()=>{
        mongoose.connection.close();
    }
};


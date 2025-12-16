
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI 
if (!uri){
    console.error('MongoDB connection string missing');
    process.exit(1);
}

module.exports.connect = () => {
    return mongoose.connect(uri);
};

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
    },
    close: ()=>{
        mongoose.connection.close();
    }
};


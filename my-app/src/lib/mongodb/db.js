const mongoose = require('mongoose');



const mongoConnect = async () => {
    try {
        const client = await mongoose.connect(`mongodb+srv://chpoonal:${process.env.DB_PASS}@node.ot6zfgm.mongodb.net/UILibrary`);
        if (!client) {
            throw new Error('cannot connect');
        }
    } catch (err) {
        console.log(err)
    }
}



exports.mongoConnect = mongoConnect;

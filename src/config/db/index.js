const mongoose = require('mongoose')
async function connect (){
    try {
        mongoose.connect('mongodb://localhost:27017/test',
            {
                useNewUrlParser:true,
                useUnifiedTopology:true
            }
        );
        console.log('succesfully')
    } catch (error) {
        alert('FAiLED!!!')
    }
}
module.exports = {connect};
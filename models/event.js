const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    start:{
        type:Date,
        required:true
    },
    end:{
        type:Date,
        required:true
    },
    // backgroundColor:{
    //     type:String,
    // },
    // borderColor:{
    //     type:String,
    // },
    color:{
        type:String
    },
    extendedProps:{
        category:{
            type:String,
        }
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Event', eventSchema);
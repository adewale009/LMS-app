const mongoose = require("mongoose");

// Class Schema
const ClassSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    lessons: [{
        lesson_number: {type: Number},
        lesson_title: {type: String},
        lesson_body: {type: String}
    }]
});

const Class = module.exports = mongoose.model("Class", ClassSchema);

//  Fetch All Claases
module.exports.getClasses = (callback, limit) => {
    Class.find(callback).limit(limit);

}

//  Fetch Single Class
module.exports.getClassById = (id, callback)=> {
     Class.findById(id, callback);
}
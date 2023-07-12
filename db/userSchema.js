const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    
    name: String,
    email: String,
    phone: String
},
{
    timestamps: true,
    versionKey : false
} 
);

UserSchema.set("toJSON", { virtuals: true });
UserSchema.set("toObject", { virtuals: true });

module.exports = mongoose.model('user', UserSchema);
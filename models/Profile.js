const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    location:{
        type: String
    },
    status:{
        type: String,
        required: true
    },
    skills:{
        type: [String],
        required: true
    },
    bio:{
        type: String
    },
    website:{
        type: String
    },
    githubusername:{
        type: String
    },
    experience: [
        {
            title:{
                type: String,
                required: true
            },
            company:{
                type: String
            },
            location:{
                type: String
            },
            current:{
                type: Boolean,
                default: false
            },
            from:{
                type: Date,
                required: true
            },
            to:{
                type: Date
            },
            description:{
                type: String
            }
        }
    ],
    education: [
        {
            school:{
                type: String,
                required: true
            },
            degree:{
                type: String,
                required: true
            },
            fieldofstudy:{
                type: String,
                required: true
            },
            current:{
                type: Boolean,
                default: false
            },
            from:{
                type: Date,
                required: true
            },
            to:{
                type: Date
            },
            description:{
                type: String
            }
        }
    ],
    social: {
        youtube:{
            type: String
        },
        twitter:{
            type: String
        },
        facebook:{
            type: String
        },
        linkedin:{
            type: String,
        },
        instagram:{
            type: String
        }
        
    }

});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
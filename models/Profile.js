const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const ProfileSchema = mongoose.Schema({
  user: {
    type: String,
    ref: "users"
  },
  handle: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },

  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],

  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String
      },
      from: {
        type: Date
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],

  social: [
    {
      youtub: {
        tyep: String
      },
      facebook: {
        tyep: String
      },
      linkedin: {
        tyep: String
      },
      instagram: {
        tyep: String
      },
      twitter: {
        tyep: String
      }
    }
  ],

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);

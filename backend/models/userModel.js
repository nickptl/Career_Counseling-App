import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  profile: {
    age: Number,
    education: String,
    interests: [String],
    avatar: String,
  },
  careerPreferences: {
    industries: [String],
    roles: [String],
    locations: [String],
    salaryExpectation: String,
  },
  skills: [{
    name: String,
    level: Number,
    endorsements: Number,
  }],
  certifications: [{
    name: String,
    issuer: String,
    date: Date,
    verificationLink: String,
  }],
  portfolio: [{
    title: String,
    description: String,
    technologies: [String],
    image: String,
    link: String,
    featured: Boolean,
  }],
  resume: {
    education: [{
      institution: String,
      degree: String,
      field: String,
      startDate: Date,
      endDate: Date,
      grade: String,
    }],
    experience: [{
      company: String,
      position: String,
      startDate: Date,
      endDate: Date,
      description: String,
    }],
    skills: [String],
    template: String,
  },
  mentorship: {
    isMentor: Boolean,
    mentorProfile: {
      expertise: [String],
      experience: String,
      availability: String,
      rating: Number,
    },
    mentoringSessions: [{
      mentorId: mongoose.Schema.Types.ObjectId,
      date: Date,
      status: String,
      notes: String,
    }],
  },
  notifications: [{
    type: String,
    message: String,
    date: Date,
    isRead: Boolean,
    link: String,
  }],
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Match password method
userSchema.methods.matchPassword = async function(enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    throw new Error('Error comparing passwords');
  }
};

const User = mongoose.model('User', userSchema);
export default User; 
import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  type: String,
  salary: String,
  description: String,
  requirements: [String],
  responsibilities: [String],
  skills: [String],
  applicationDeadline: Date,
  postedDate: Date,
  status: String,
  applicants: [{
    userId: mongoose.Schema.Types.ObjectId,
    status: String,
    appliedDate: Date,
  }],
}, {
  timestamps: true
});

export default mongoose.model('Job', jobSchema); 
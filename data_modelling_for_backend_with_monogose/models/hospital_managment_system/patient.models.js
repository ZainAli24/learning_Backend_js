import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema(
    {
      name:{
        type: String,
        required: true
      },

      diagnosedWith: {
        type: String,
        required: true,
      },

      address: {
        type: String,
        required: true,
      },

      age: {
        type: Number,
        required: true,
      },

      bloodGroup: {
        type: String,
        required: true,
      },

      gender: {
        type: String,
        enum: ["Male" , "Female"],
        required: true,
      },

      admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
      },

      reportImage: {
        type: String,
        required: true,
      },
      
    }, {timestamps: true}
)

export const Patient = mongoose.model("Patient" , medicalReportSchema)

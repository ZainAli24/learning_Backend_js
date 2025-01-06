import mongoose from 'mongoose'

const medicalReportSchema = new mongoose.Schema(
    {
      patient: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Patient"
      },

      PatientReport: [
         {
            type: String,
            require : true,
         },
      ],

      doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Docotor",
            required: true,
      },
      
    }, {timestamps: true}
)

export const MedicalReport = mongoose.model("MedicalReport" , medicalReportSchema)

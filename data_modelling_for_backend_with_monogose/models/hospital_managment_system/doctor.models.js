import mongoose, { Mongoose } from 'mongoose'

const workingHoursInHospital = new mongoose.Schema(
    {
        hospitalName: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true,
        },

        worksHours: {
            type: Number,
            required: true,
        },
    }
)

const doctorSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      sallery: {
        type: Number,
        required: true,
      },

      qualification: {
        type: String,
        required: true,
      },

      expreienceInYears: {
        type: Number,
        default: 0,
        required: true,
      },

      worksInHospitals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
      ],

      worksHoursInHospital:[workingHoursInHospital],

    }, {timestamps: true}
)

export const Docotor = mongoose.model("Docotor" , medicalReportSchema)

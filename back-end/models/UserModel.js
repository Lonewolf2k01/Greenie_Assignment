import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 0,
        required: true,
    },
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        min: 3,
        max: 50,
        required: true,
    },
    phoneNo: {
        type: String,
        max: 15,
        required: true,
    },
}, {
    timestamps: true
})

// Pre-save middleware to auto-increment the 'id' field
UserSchema.pre('save', async function (next) {
    try {
        if (!this.isNew) {
            // If the document is not new, don't auto-increment
            return next();
        }

        const lastUser = await this.constructor.findOne({}, {}, { sort: { 'id': -1 } });

        // Increment 'id' field
        this.id = lastUser ? lastUser.id + 1 : 1;

        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model("User", UserSchema);
export default User;
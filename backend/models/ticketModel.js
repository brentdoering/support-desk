const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    product: {
        type: String,
        required: [true, 'Please select a product'],
        enum: ['iPhone', 'MacBook Pro', 'iMac', 'iPad', 'Apple Watch'],
    },
    description: {
        type: String,
        required: [true, 'Please describe the problem']
    },
    status: {
        type: String,
        required: true,
        enum: ['new', 'open', 'closed'],
        default: 'new'
    }
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('Ticket', ticketSchema)
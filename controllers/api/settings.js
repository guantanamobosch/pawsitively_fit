
const Contact = require("../../models/settings")

async function createContact(req, res, next) {
    try {
        const body = req.body
        const contact = await Contact.create(body)
    } catch (error) {
        console.log(error)
        
    }

}

// exports
module.exports = {
    createContact
};

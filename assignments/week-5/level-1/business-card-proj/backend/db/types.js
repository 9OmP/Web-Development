const zod = require("zod");

const create_user = zod.object({
    name: zod.string(),
    description: zod.string(),
    interests: zod.array(zod.string()),
    socials: zod.object({
        "Twitter" : zod.string().url(), 
        "Github" : zod.string().url(), 
        "Linkedin" : zod.string().url(), 
        "Replit" : zod.string().url()
    })
})

module.exports = {
    create_user
}
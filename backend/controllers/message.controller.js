import Conversation from "../models/conversetions.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],

            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

    

        
     

        
        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

       // SOKCET IO FUNCTIONALITY WILL GO HERE 

        await Promise.all([conversation.save(), newMessage.save()])
       
        res.status(201).json(newMessage)

    } catch (error) {
        console.log("Error in sendMessage controller:", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}

export const getMessages = async (req, res) => {
    try {
        
        const { id: userToChatId } = req.params
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]}
        }).populate("messages") // NOT REFERENC BUT ACTUAL MESSAGE

        if(!conversation) res.status(200).json([])
        
        const message = conversation.messages;

        console.log("Messages data:", message);
        res.status(200).json(message); 



    } catch (error) {
        console.log("Error in sendMessage controller:", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}

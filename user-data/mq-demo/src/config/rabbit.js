

const amqplib =  require("amqplib")


exports.connectRabbitMQ = async () => {
    try {

        const connection  = await amqplib.connect("amqp://localhost")
        
    } catch (error) {

        console.error(error.message)
        
    }
    
}


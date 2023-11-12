const mongoose = require("mongoose")
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        mongoose.connect("mongodb+srv://dashavovk2412:dagihi10@cluster0.25w8iyp.mongodb.net/?retryWrites=true&w=majority" , {useNewUrlParser: true})
		//mongoose.connect("mongodb://database:27017/StudentDB", { useNewUrlParser: true });
        //mongodb+srv://rushoskey:Qwerty123.@vyhivskyi.tnhsue8.mongodb.net/?retryWrites=true&w=majority
        //mongodb+srv://dashavovk2412:dagihi10@cluster0.25w8iyp.mongodb.net/?retryWrites=true&w=majority
        
		console.log("Connected to database successfully")
    } catch (error) {
        console.log(error);
        console.log("Could not connect database!")
    } 
}

const router = require("express").Router();
const { User, validate } = require("../models/user");


router.put("/", async (req, res) => {
    try {
        const userId = req.user._id;
        const updatedUser = req.user;
        await User.findByIdAndUpdate(userId, { updatedUser })
        //res.redirect("/profile/preference")
        console.log("qwerty ")
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
        console.log("trwq")
    }
});
/*const handleUpdate = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token")
        if (token) {
            try {
                const updatedUser = {
                    ...user, 
                    preference: { ...data }, 
                };
                const config = {
                    method: 'put',
                    url: 'http://localhost:8080/api/profile/preference/edit',
                    headers: { 'Content-Type': 'application/json', 'x-access-token': token }
                }
                const { updatedUser: res } = await axios(config)
                //const res = await axios.put('/api/profile/preference/edit', updatedUser)
                window.location = '/profile/preference'
            } catch (error) {
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    setError("Wystąpił błąd. Spróbuj ponownie.");
                    const updatedUser = {
                        ...user, 
                        preference: { ...data }, 
                    };
                    console.log(error)
                    console.log(updatedUser)
                    console.log(user)
                }
            }
        }
    }*/
module.exports = router;
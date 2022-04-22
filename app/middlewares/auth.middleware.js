const axios = require('axios')

module.exports = async function authMiddleware(req, res, next) {
    const authHeader  = req.headers['authorization']
    const token = authHeader.split(' ')[1]
    try { 
        const result = await axios.get("http://localhost:7070/validate/token", {
            headers: {
                Authorization: `JWT ${token}`
            }
        }) 

        if (result.status === 200) {
            console.log("Auth successful")
            return next()
        } else {
            console.log("Auth failed")
            res.status(403).json({'error': 'unauthorized error'})
            return;
        }
        
        }catch(error) {
            console.log("Auth exception")
            res.status(403).json({'error': 'unauthorized error'})
            return;
        }
}
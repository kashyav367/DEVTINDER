
const adminAuth = (req,res,next) => {
    console.log("checking for admin authenticated")
    const token = "xyz"
    const isAdminAuthenticated = token === "xyz"
    if(!isAdminAuthenticated){
        res.status(401).send("unauthorized request")
    }
    else{
        next()
    }
}

const userAuth  = (req,res,next) => {
    console.log("checking user authenticated")
    const token = "abccec"
    const isUserAuthenticated = token === "abc"
    if(!isUserAuthenticated){
        res.status(401).send("unauthorized request")
    }
    else{
        next()
    }
}

module.exports = {
    adminAuth, userAuth
}
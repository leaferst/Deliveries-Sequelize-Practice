const {User, Shipment} = require("../models/associations");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const handleOrderStatus = async (req,res) => {
    const {userID} = req.params;
    
    // think about the route (what you need to receive from the client) that is connected to this method
    // take a user ID
    // find orders 
    // return the status of the orders

    let yourUser = await User.findByPk(userID);
    let orders = await yourUser.getShipments();
    // let orders = await Shipment.findAll({where: {userId: userID}})
    console.log(orders);
    res.json(orders);
}

const handlePassword = async (req,res) => {
    const {userID} = req.params;

    let yourUser = await User.findByPk(userID);
    let plainPass = yourUser.password;
    //let userPass = await User.getShipments();

    const hashedPassword = await bcrypt.hash(plainPass, saltRounds);
}

module.exports = {
    handleOrderStatus,
    handlePassword
}
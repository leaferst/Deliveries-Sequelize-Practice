const {Shipment} = require("../models/associations");

const handleShip = async (req,res) => {

    const {id} = req.params;

    console.log(id);

    let yourShipment = await Shipment.findByPk(id);
    console.log(yourShipment.toJSON());

    res.json(yourShipment)
}

const changeOrderStatus = async (req,res) => {

    const {id} = req.params;

    const {body} = req;

    console.log('body is', body)

    let yourShipment = await Shipment.findByPk(id);
    yourShipment.set(body);
    //yourShipment.set({status: body});
    yourShipment.save();

    res.json({hi: true})
}



module.exports = {
    handleShip,
    changeOrderStatus
}
var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');

const { outbound } = require('../models');
//const outbound = require('../models/outbound');
//const outbound = require('../models/outbound');

const v = new Validator();


router.get('/', async(req, res) => {
    const Outbound = await outbound.findAll();
    return res.json(Outbound)
});

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const Outbounds = await outbound.findByPk(id);
    return res.json(Outbounds)
});

router.post('/', async (req, res) =>{
    const schema = {
        id: 'string',
        products: 'string',
        date: 'string',
        qty: 'string',
        location: 'string',
        building: 'string',
        room: 'string',
        floor: 'string',
        area: 'string',
        rack: 'string',
        rack_level: 'string'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
            .status(400)
            .json(validate);
    }
    const Outbound = await outbound.create(req.body);

    res.json(outbound);
}); 

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    
    let Outbound = await outbound.findByPk(id);

    if (!Outbound) {
        return res.json({ messege: 'outbound not found'});
    }

    const schema = {
        id: 'string|optional',
        products: 'string|optional',
        date: 'string|optional',
        qty: 'string|optional',
        location: 'string|optional',
        building: 'string|optional',
        room: 'string|optional',
        floor: 'string|optional',
        area: 'string|optional',
        rack: 'string|optional',
        rack_level: 'string|optional'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
            .status(400)
            .json(validate);
    }

    Outbound = await Outbound.update(req.body);
    res.json(outbound);
});

router.delete('/:id', async(req, res) =>{
    const id = req.params.id;

    const Outbounds = await outbound.findByPk(id);

    if (!Outbounds) {
        return res.json({messege: 'outbound not found'});
    }

    await Outbounds.destroy();

    res.json({
        message: 'outbound is deleted'
    });
    
});

module.exports = router;
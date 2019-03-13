import * as mongoose from 'mongoose';
import { Kamer, KamerModel } from '../model/kamer';

var express = require('express');
var router = express.Router();

router.route('/kamer')

    /**
     * @swagger
     *
     * /kamer:
     *   get:
     *     description: Get all kamers
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: query
     *         name: q
     *         schema:
     *           type: String
     *         description: A query to filter the collection
     *     responses:
     *       200:
     *         description: kamers
     */
    .get((req, res) => {
        KamerModel.find().exec((err, kamers) => {
            res.json(kamers)
        });
    })
 
    /**
     * @swagger
     *
     * /kamer:
     *   post:
     *     description: add a new kamer
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: username
     *         description: Username to use for login.
     *         in: formData
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: kamers
     */
    .post(function (req, res) {
       var kamer = new KamerModel(req.body);
       kamer.save((err, kamer) => {
           if(err) res.send(err); 
           res.json(kamer);
       })
    });


    router.route('/kamer/:id')

    /**
     * @swagger
     *
     * /kamer:
     *   get:
     *     description: Get all kamers
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: query
     *         name: q
     *         schema:
     *           type: String
     *         description: A query to filter the collection
     *     responses:
     *       200:
     *         description: kamers
     */
    .get((req, res) => {
        KamerModel.find().exec((err, kamers) => {
            res.json(kamers)
        });
    })


module.exports = router;
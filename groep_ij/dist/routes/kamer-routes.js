"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kamer_1 = require("../model/kamer");
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
    kamer_1.KamerModel.find().exec((err, kamers) => {
        res.json(kamers);
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
    res.send('Kamer toevoegen!');
});
module.exports = router;
//# sourceMappingURL=kamer-routes.js.map
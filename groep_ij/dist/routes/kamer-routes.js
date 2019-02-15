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
     *     responses:
     *       200:
     *         description: kamers
     */
    .get(function (req, res) {
    res.send('alle kamers');
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
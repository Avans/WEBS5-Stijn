var express = require('express');
var userRouter = express.Router();


userRouter.route('/users')

    /**
     * @swagger
     * /users:
     *   get:
     *     description: Returns users
     *     produces:
     *      - application/json
     *     responses:
     *       200:
     *         description: users
     *         schema:
     *           type: array
     *           items:
     *             $ref: '#/definitions/User'
     */
    .get((req, res) => res.send('Getting users'))
    /**
     * @swagger
     * /users:
     *   post:
     *     description: Add a new user
     *     produces:
     *      - application/json
     *     responses:
     *       200:
     *         description: user
     *         schema:
     *           type: object
     *           items:
     *             $ref: '#/definitions/User'
     */
    .post((req, res) => res.send('Adding users'))


userRouter.route('/users/:id')
    .get((req, res) => res.send('Getting 1 user'))
    .put((req, res) => res.send('Updating 1 user'))
    .delete((req, res) => res.send('Deleting 1 user'))

//return userRouter;
module.exports = userRouter;


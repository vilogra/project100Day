const controller = require('../controllers/users');
const router = require('express').Router();

router.get('/', controller.getAllUser);
router.get('/:userId', controller.getUserById);
router.post('/', controller.createUser);
router.put('/:userId', controller.updateUser);
router.delete('/:userId', controller.deleteUser);

module.exports = router;

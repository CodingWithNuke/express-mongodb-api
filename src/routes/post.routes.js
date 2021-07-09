const { Router } = require('express');

const router = Router();

const { PostController } = require('../controllers')

router.get('/', PostController.findAll);
router.get('/:id', PostController.findOne);
router.post('/', PostController.create);
router.put('/:id', PostController.update);
router.delete('/:id', PostController.delete);

module.exports = router;
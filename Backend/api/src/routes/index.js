const { Router } = require('express');
const router = Router();

// Importar todos los routers
const publicationsRoutes = require('../controllers/publications');
const commentsRoutes = require('../controllers/comments'); 

// Configurar los routers 
router.use('/publications', publicationsRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;

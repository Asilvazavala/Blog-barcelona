const { Router } = require('express');
const router = Router();
const { Publications } = require('../db');

// Obtener todas las publicaciones || Buscar publicación por nombre
router.get('/', async (req, res) => {  
  const allPublications = await Publications.findAll()
  const { title } = req.query;

  if (title) {
    const findPubName = await allPublications.filter(
      pub => pub.title.toLowerCase().includes(title.toLowerCase()));
      
    findPubName.length > 0 
    ? res.send(findPubName) 
    : res.status(404).send(`No existe ninguna publicación con nombre "${title}" intenta con otro nombre`);
  } else {
      res.send(allPublications);
    }
});

// Buscar publicación por categoría
router.get('/:category', async (req, res) => {  
  const allPublications = await Publications.findAll()
  const { category } = req.params;
  
    if (category) {
    const findPubCategory = await allPublications.filter(
      pub => pub.category === (category));
      
    findPubCategory.length > 0 
    ? res.send(findPubCategory) 
    : res.status(404).send(`No existe ninguna publicación con categoría "${category}" intenta con otra categoría`);
  } 
});


module.exports = router;
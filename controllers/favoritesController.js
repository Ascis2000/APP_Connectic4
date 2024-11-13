const favoritesModel = require('../models/favoritesModel');

exports.getAllFavorites = async (req, res) => {
  try {
    const favorites = await favoritesModel.getAllFavorites();
    //Ahora pillas los anuncios para pintarlos 
        //console.log( "AAAAAAAAAAA=", misAds._id.toString() )
        // Renderiza la plantilla `index.pug` con el mensaje resultante
        res.render('', { 
            fav: favorites
        });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener favoritos' });
  }
};

exports.createFavorite = async (req, res) => {
    try {
    const newFavorite = await favoritesModel.createFavorite(req.body);
    res.status(201).json(newFavorite);
    res.render('', { 
      fav: favorites
  });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el favorito' });
  }
};

exports.deleteFavorite = async (req, res) => {
  try {
    await favoritesModel.deleteFavorite(req.params.id);
    res.json({ message: 'Favorito eliminado' });
    res.render('', { 
      fav: favorites
  });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el favorito' });
  }
};

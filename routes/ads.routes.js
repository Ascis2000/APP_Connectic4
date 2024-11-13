
const adsController = require('../controllers/ads.controller');
const router = require('express').Router();

// http://localhost:3000/api/ads
router.get("/", adsController.getAllAds);

// http://localhost:3000/api/ads/search
router.get('/search', adsController.getAdsSearch);

// http://localhost:3000/api/ads/1
router.get("/:id?", adsController.getOneAd);

// http://localhost:3000/api/ads/
router.post("/ads", adsController.createOneAd);

// http://localhost:3000/api/ads/
router.put("/:id", adsController.updateAd);

// http://localhost:3000/api/ads/1
// Usamos POST porque no admite delete desde javascript
router.post("/ads/delete/:id?", adsController.deleteAd);

module.exports = router;
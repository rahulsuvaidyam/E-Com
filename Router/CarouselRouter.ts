import express from 'express';
const CarouselRouter = express.Router();

import Carousel from '../Controller/Carousel';

CarouselRouter.get('/carousel',Carousel.GetCarousel);
CarouselRouter.post('/carousel',Carousel.PostCarousel);
CarouselRouter.put('/carousel',Carousel.PutCarousel);
CarouselRouter.delete('/carousel',Carousel.DelteCarousel);
export default CarouselRouter;
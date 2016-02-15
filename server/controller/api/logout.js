import { Router } from 'express';
let router = Router();

router.post('/', (req, res, next) => {
  req.logout();
  res.end();
});

export default router;

import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
  // Your login logic here
  res.send('Login route');
});

export default router;

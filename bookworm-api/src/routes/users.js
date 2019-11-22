import express from 'express';
import User from '../modals/User';

const router = express.Router();
router.post('/', (req, res) => {
	const { email, password } = req.body.user;
	const user = new User({
		email
	});
	user.setPassword(password);
	user.setConfirmationToken();
	user.save().then((user) => {
		sendConfimationEmail(user);
		res.json({ user: user.toAuthJSON() });
	});
});
export default router;

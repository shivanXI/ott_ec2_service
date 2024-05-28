import express from 'express';
import { User } from "../../models/user";
import { getUserById, getUserFavorites } from "../../resolvers/mylistHelpers";

const router = express.Router();

router.get('/:userId/favorites/fetch', async (req, res)  => {
  const { userId } = req.params;
  const { limit, offset } = req.query;

  // Validate user ID, limit, and offset (implement validation logic)
  if (!userId || !limit || !offset) {
    return res.status(400).json({ message: "Missing required parameter" });
  }

  const user: User | null = await getUserById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Get user's favorites with pagination
  const favorites = await getUserFavorites(userId, Number(limit), Number(offset));
  return res.status(200).json({ favorites, total: favorites.length });
});

export default router;
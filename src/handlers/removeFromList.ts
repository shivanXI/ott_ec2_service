import express from 'express';
import { User } from "../../models/user";
import { getUserById, removeFavorite } from "../../resolvers/mylistHelpers";

const router = express.Router();

router.delete('/:userId/favorites/remove', async (req, res)  =>  {
  const userId: string = req.params.userId;
  const favId: string = req.query.favId as string;

  // Validate user ID, limit, and offset (implement validation logic)
  if (!userId || !favId) {
    return res.status(400).json({ message: "Missing required parameters." });
  }

  const user: User | null = await getUserById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Get user's favorites with pagination
  const _ = await removeFavorite(favId);
  return res.status(200).json({ message: "Item removed from list successfully." });
});

export default router;

import express from 'express';
import { User } from "../../models/user";
import { getUserById, addToFavorites } from "../../resolvers/mylistHelpers";

const router = express.Router();

router.post('/:userId/favorites/add', async (req, res)  => {
  try {
    const { userId } = req.params;
  const { contentId, type } = req.query;

    // Validate user ID and movie ID (implement validation logic)
    if (!userId || !contentId || !type) {
      return res.status(400).json({ message: "Missing required parameters" });
    }

    const user: User | null = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add movie to user's favorites
    const result = await addToFavorites(user.id, contentId.toString(), type.toString()); 
    if (!result){ 
      return res.status(400).json({ message: "Already added to favorites" });
    }
    return res.status(200).json({ message: "Content added to favorites." });
  } catch (error) {
    console.error("Error adding content to list of favorites:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
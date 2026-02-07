import express from "express";
import { mintPouch } from "../services/nftService.js";
import { buildMetadata } from "../services/metadataService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { id } = req.body;

  const metadata = buildMetadata(id);
  const mint = await mintPouch(metadata);

  res.json({ mint });
});

export default router;

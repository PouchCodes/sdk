import { generateSigner, percentAmount } from "@metaplex-foundation/umi";
import { createNft, fetchDigitalAsset, transferV1 } from "@metaplex-foundation/mpl-token-metadata";
import { umi } from "../config/solana.js";

export const mintPouch = async (metadata) => {
  const mint = generateSigner(umi);

  await createNft(umi, {
    mint,
    name: metadata.name,
    symbol: metadata.symbol,
    uri: metadata.uri,
    sellerFeeBasisPoints: percentAmount(0),
  }).sendAndConfirm(umi);

  return mint.publicKey;
};

export const verifyOwner = async (mint) => {
  const asset = await fetchDigitalAsset(umi, mint);
  return asset.token.owner;
};

export const transferPouch = async (mint, destination) => {
  await transferV1(umi, {
    mint,
    authority: umi.identity,
    tokenOwner: umi.identity.publicKey,
    destinationOwner: destination,
  }).sendAndConfirm(umi);
};

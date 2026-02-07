export const buildMetadata = (id) => {
  return {
    name: `Pouch #${id}`,
    symbol: "POUCH",
    uri: `https://example.com/metadata/${id}.json`
  };
};

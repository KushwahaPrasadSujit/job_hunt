//this helper function checks image url and shows if image exist
export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp| gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};

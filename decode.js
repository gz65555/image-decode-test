self.addEventListener("message", (e) => {
  const { ab, id } = e.data;
  decodeImage(ab, id);
});
function decodeImage(ab, id) {
  const blob = new Blob([ab]);
  createImageBitmap(blob).then((bitmap) => {
    self.postMessage({ image: bitmap, id }, [bitmap]);
  });
}

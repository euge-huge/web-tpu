document.addEventListener("DOMContentLoaded", () => {
  const height = document.getElementById("height");
  const width = document.getElementById("width");

  // Инициализируем значениями
  height.innerText = window.innerHeight;
  width.innerText = window.innerWidth;
  // ------------------------------------------------- //

  // При изменении размеров изменяем значения
  window.addEventListener("resize", (e) => {
    height.innerText = e.target.innerHeight;
    width.innerText = e.target.innerWidth;
  });
});

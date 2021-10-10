document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  // ------------------------------------------------- //

  // АЛГОРИТМ
  const getDiffBtwNumbers = (number) => {
    if (typeof number != "string")
      throw new Error("Входной параметр - строковое представление числа!");
    if (!/\b[0-9]+\b/.test(number)) throw new Error("Введите число!");

    const maxNumberStr = number.split("").sort((a, b) => Number(b) - Number(a));
    const maxNumber = Number(maxNumberStr.join(""));

    const minNumberStr = number.split("").sort((a, b) => Number(a) - Number(b));
    const minNumber = Number(minNumberStr.join(""));

    return maxNumber - minNumber;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    try {
      const diff = getDiffBtwNumbers(input.value);

      result.innerHTML = diff;
      result.classList.remove("false");
      result.classList.add("true");
    } catch (e) {
      result.innerHTML = e.message;
      result.classList.remove("true");
      result.classList.add("false");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");

  const button = document.getElementById("btn");

  const result = document.getElementById("result");

  //   Переводит из двоичной системы в десятичную
  const base2tobase10 = (base2, i = 0) => {
    let base10 = 0;

    if (i < base2.length) {
      if (base2[i] == "1") base10 = Math.pow(2, i);
      else if (base2[i] != "0")
        throw new Error("Введено не двоичное число число!");
      return base10 + base2tobase10(base2, ++i);
    }

    return base10;
  };

  //   Переводит из десятичной системы счисления в восьмеричную
  const base10tobase8 = (base10, base8 = "") => {
    // Проверка, что это десятичное число
    if (!/\b[0-9]+\b/.test(base10))
      throw new Error("Получено не десятичное число!");

    base8 += base10 % 8;

    if (Math.trunc(base10 / 8) != 0)
      return base10tobase8(Math.trunc(base10 / 8), base8);
    else {
      return base8.split("").reverse().join("");
    }
  };

  // АЛГОРИТМ
  const base2tobase8 = (base2) => {
    // Проверка, что это двоичное число
    if (!/\b[01]+\b/.test(base2)) throw new Error("Введено не двоичное число!");

    let des = base2tobase10(base2);

    const okt = base10tobase8(des);

    return okt;
  };
  //

  button.addEventListener("click", () => {
    if (!input.value) {
      result.innerHTML = "введите число!";
      result.classList.add("false");
      result.classList.remove("true");
      return;
    }

    try {
      result.innerHTML = base2tobase8(input.value);
      result.classList.remove("false");
      result.classList.add("true");
    } catch (e) {
      result.innerHTML = e.message;
      result.classList.add("false");
      result.classList.remove("true");
      return;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const form = document.getElementById("form");
  const btnClear = document.getElementById("btn-clear");

  // ------------------------------------------------- //

  // Алгоритм получает на вход строковое представление массива
  // Возвращает массив чисел, пройдя все необходимые проверки
  const getArray = (string) => {
    let array = [];

    // Проверка, что это строковое значение
    if (typeof string != "string")
      throw new Error("Входной параметр - строковое представление массива!");

    // Проверка, что строка не пустая
    if (!string) throw new Error("Введена пустая строка!");

    // Делим массив на строчки
    let rows = string.split("\n");

    // Берем длину первой строчки как исходную
    const firstRowLength = rows[0].length;
    for (row of rows) {
      // Проверка, что введена матрица (длины строк равны)
      if (row.length !== firstRowLength) throw new Error("Введена не матрица!");

      // Проверка, что строка содержит только цифры
      if (!/^[0-9]+$/.test(row)) throw new Error("Введены не только цифры!");
    }

    // !Было испробовано много вариантов, но самым удачным оказался этот алгоритм, чтобы
    // проверить, что массив удовлетворяет требованиям задания

    // Реальное значение полученное при умножении всех цифр не равных нулю
    let real = 1;
    // То, что должно получиться если последовательно умножать числа начиная с 1
    let theoretical = 1;
    let n = 1;

    for (let i = 0; i < rows.length; i++) {
      array[i] = rows[i].split("").map((num) => {
        if (/[1-9]/.test(num)) {
          real = real * n;
          theoretical = num * theoretical;

          n++;
        }
        // Приводим тип
        return Number(num);
      });
    }

    // Проверям что реальное и теоретическое значение совпали
    if (real !== theoretical)
      throw new Error("Не выполняется условие задания!");

    return array;
  };

  // Алгоритм, который считает кратчайшее расстояние между цифрами
  const shortestWay = (array) => {
    // Переменная хранит длину пути
    let length = 0;

    // Начальная цифра на данный момент (начинаем с 1)
    let initial = 1;
    // Искомая цифра на данный момент (сначала ищем 2)
    let sought = 2;

    // Положение исходного числа в массиве
    let initialX = null;
    let initialY = null;

    // Положение искомого числа в массиве
    let soughtX = null;
    let soughtY = null;

    // Цикл отработает ровно 9 раз (ищем цифры от 1 до 9)
    for (let k = 0; k < 8; k++) {
      // Проходимся по двумерному массиву
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          // Если это координаты исходного числа
          if (array[i][j] === initial) {
            initialX = i;
            initialY = j;
          }
          // Если это координаты искомого числа
          if (array[i][j] === sought) {
            soughtX = i;
            soughtY = j;
          }
        }
      }

      // Переходим к поиску следующей пары чисел
      initial++;
      sought++;

      // Ищем расстояние, складываем с предыдущим, если координаты найдены
      if (
        initialX !== null &&
        initialY !== null &&
        soughtX !== null &&
        soughtY !== null
      )
        length += Math.abs(soughtX - initialX) + Math.abs(soughtY - initialY);
    }

    return length;
  };

  // Слушаем отправку формы
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    try {
      result.innerHTML = shortestWay(getArray(input.value));
      result.classList.remove("false");
      result.classList.add("true");
    } catch (error) {
      result.innerHTML = error.message;
      result.classList.remove("true");
      result.classList.add("false");
    }
  });

  // Слушаем нажатие на кнопку очистки
  btnClear.addEventListener("click", (e) => {
    input.value = "";
    result.innerHTML = "-";
    result.classList.remove("true");
    result.classList.remove("false");
  });
});

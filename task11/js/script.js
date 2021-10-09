document.addEventListener("DOMContentLoaded", () => {
  const month = document.getElementById("input-month");
  const year = document.getElementById("input-year");

  const button = document.getElementById("btn");

  const result = document.getElementById("result");

  // АЛГОРИТМ
  const isContainFriday = (month, year) => {
    if (!/^([1-9]|1[012])$/.test(month))
      throw new Error("Введите корректный месяц!");

    if (!/^[0-9]+$/.test(year))
      throw new Error("Год должен быть целым положительным числом!");

    const date = new Date(year, month - 1, 13);

    console.log(date);

    if (date.getDay() == 5) {
      return true;
    } else return false;
  };
  //

  button.addEventListener("click", () => {
    if (!month.value || !year.value) {
      result.innerHTML = "введите месяц и год!";
      result.classList.remove("false");
      result.classList.remove("true");
      return;
    }

    try {
      if (isContainFriday(month.value, year.value)) {
        result.innerHTML = "в этом месяце есть пятница 13-е =(";
        result.classList.remove("true");
        result.classList.add("false");
      } else {
        result.innerHTML = "в этом месяце нет пятницы 13-ого =)";
        result.classList.remove("false");
        result.classList.add("true");
      }
    } catch (e) {
      result.innerHTML = e.message;
      result.classList.remove("true");
      result.classList.remove("false");
    }
  });
});

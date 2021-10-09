// Описание класса Студент
class Student {
  name = "";
  lastName = "";
  age = 0;

  constructor(name, lastName, age) {
    if (!name || !lastName || !age) throw new Error("Не все поля заполнены!");

    if (
      typeof name != "string" ||
      typeof lastName != "string" ||
      typeof age != "number"
    )
      throw new Error(
        "Невозможно создать студента! Введите корректные данные!"
      );

    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  // Создает JSON файд
  getJSON() {
    return JSON.stringify(
      {
        name: this.name,
        lastName: this.lastName,
        age: this.age,
      },
      null,
      2
    );
  }

  // Создает файл и url к нему
  createFileAndGetUrl() {
    const data = this.getJSON();

    const file = new Blob([data], { type: "application/json" });

    return URL.createObjectURL(file);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const lastNameInput = document.getElementById("lastName");
  const ageInput = document.getElementById("age");

  const error = document.getElementById("error");

  const button = document.getElementById("btn");
  // ------------------------------------------------- //

  button.addEventListener("click", () => {
    let student;

    try {
      error.classList.add("visually-hidden");

      student = new Student(
        nameInput.value,
        lastNameInput.value,
        Number(ageInput.value)
      );

      button.href = student.createFileAndGetUrl();

      button.download = "student.json";
    } catch (e) {
      button.removeAttribute("href");
      error.innerHTML = e.message;
      error.classList.remove("visually-hidden");
    }
  });
});

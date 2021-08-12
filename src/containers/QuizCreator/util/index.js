import { createControl } from "../../../form/formFramework";

// создание вопроса

function createOptionControl(number) {
  return createControl(
    {
      label: `Вариант ${number}`,
      errorMessage: "Значение не может быть пустым",
      id: number,
    },
    { required: true }
  );
}

export function createFormControls() {
  return {
    question: createControl(
      {
        label: "Введите вопрос",
        errorMessage: "Вопрос не может быть пустым",
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
}

// Создаем Заголовок теста

export function createFormControlsQuiz() {
  return createControl(
    {
      errorMessage: "Значение не может быть пустым",
    },
    { required: true }
  );
}

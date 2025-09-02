// src/components/form/stepsConfig.js
export const stepsConfig = [
  {
    key: "Сколько Вам лет?",
    label: "Сколько Вам полных лет",
    type: "input",
    inputType: "number",
    required: true,
  },

  {
    key: "С какого вы города(области)?",
    label: "Только город (или область)",
    type: "input",
    inputType: "text",
    required: true,
  },

  {
    key: "Проходили ли вы срочную службу?",
    label: "Проходили ли вы срочную службу?",
    type: "radio",
    options: [
      { value: true, label: "Да" },
      { value: false, label: "Нет" },
    ],
    required: true,
  },

  {
    key: "Есть ли у вас какие-то патологические или хронические заболевания, если есть то какие?",
    label: "Есть ли у вас какие-то патологические или хронические заболевания, если есть то какие?",
    type: "radio",
    options: [
      { value: true, label: "Да" },
      { value: false, label: "Нет" },
    ],
    required: true,
    allowOther: true,
  },

  {
    key: "Ваша физическая подготовка позволит вам идти по пересеченной местности 1-2 часа?",
    label: "Ваша физическая подготовка позволит вам идти по пересеченной местности 1-2 часа?",
    type: "radio",
    options: [
      { value: true, label: "Да" },
      { value: false, label: "Нет" },
    ],
    required: true,
  },

  {
    key: "Есть ли у вас родственники за границей? Выберите 'Другое', что бы написать страну.",
    label: "Есть ли у вас родственники за границей? Выберите 'Другое', что бы написать страну.",
    type: "radio",
    options: [
      { value: true, label: "Да" },
      { value: false, label: "Нет" },
    ],
    required: true,
    allowOther: true,
  },

  {
    key: "country_id",
    label: "Какую страну рассматриваете для иммиграции?",
    type: "radio",
    optionsEndpoint: "/countries/", 
    required: true,
  },

  {
    key: "Хотите покинуть страну или получить официальную отсрочку и остаться в Украине?",
    label: "Хотите покинуть страну или получить официальную отсрочку и остаться в Украине?",
    type: "radio",
    options: [
      { value: "Отсрочка", label: "Отсрочка" },
      { value: "Переезд", label: "Переезд" },
    ],
    required: true,
    allowOther: true,
  }, 

  {
    key: "Нуждаетесь ли вы в помощи после пересечения границы (помощь с жильем, работой, подачей документов на гражданство)?",
    label: "Нуждаетесь ли вы в помощи после пересечения границы (помощь с жильем, работой, подачей документов на гражданство)?",
    type: "radio",
    options: [
      { value: true, label: "Да" },
      { value: false, label: "Нет" },
    ],
    required: true,
  },

  {
    key: "Есть ли у вас ближайшие родственники погибшие или пропавшие без вести в зоне боевых действий?",
    label: "Есть ли у вас ближайшие родственники погибшие или пропавшие без вести в зоне боевых действий?",
    type: "radio",
    options: [
      { value: true, label: "Да" },
      { value: false, label: "Нет" },
    ],
    required: true,
  },

  {
    key: "Есть ли у вас ближайшие родственники которые прямо сейчас находятся в зоне боевых действий?",
    label: "Есть ли у вас ближайшие родственники которые прямо сейчас находятся в зоне боевых действий?",
    type: "radio",
    options: [
      { value: true, label: "Да" },
      { value: false, label: "Нет" },
    ],
    required: true,
  },

  {
    key: "Есть ли у вас родственники работающие на стратегически важных предприятиях?",
    label: "Есть ли у вас родственники работающие на стратегически важных предприятиях?",
    type: "radio",
    options: [
      { value: true, label: "Да" },
      { value: false, label: "Нет" },
    ],
    required: true,
  },

  {
    key: "Если у вас высшие или среднее образование (если есть, то какое)?",
    label: "Если у вас высшие или среднее образование (если есть, то какое)?",
    type: "input",
    inputType: "text",
    required: false,
  },

  {
    key: "Какими языками (кроме родного национального) вы владеете?",
    label: "Какими языками (кроме родного национального) вы владеете?",
    type: "input",
    inputType: "text",
    required: false,
  },

  {
    key: "skills",
    label: "Какие профессиональные навыки у вас есть?",
    type: "checkbox",
    optionsEndpoint: "/skills/", 
    required: true,
  },

  {
    key: "Есть ли у вас загранпаспорт?",
    label: "Есть ли у вас загранпаспорт?",
    type: "radio",
    options: [
      { value: true, label: "Да" },
      { value: false, label: "Нет" },
    ],
    required: true,
  },

  {
    key: "У вас есть водительское удостоверение на транспорт?",
    label: "У вас есть водительское удостоверение на транспорт?",
    type: "radio",
    options: [
      { value: true, label: "Да" },
      { value: false, label: "Нет" },
    ],
    required: true,
  },

  {
    key: "urgency",
    label: "Как скоро нужен переезд?",
    type: "radio",
    options: [
      { value: "instant", label: "Как можно быстрее" },
      { value: "normal", label: "В обычном порядке" },
      { value: "longterm", label: "Пока только думаю о переезде" },
    ],
    required: true,
  }, 

  {
    key: "Узнали о нас от знакомых или другим способом?",
    label: "Узнали о нас от знакомых или другим способом?",
    type: "input",
    inputType: "text",
    required: false,
  },
];

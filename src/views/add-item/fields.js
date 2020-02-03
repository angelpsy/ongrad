export const FIELDS = [
    {
        id: "title",
        name: "Название фильма",
        placeholder: "Название фильма",
        defaultValue: "",
        typeField: "input",
        typeInput: "text",
    },
    {
        id: "shortDesc",
        name: "Короткое описание",
        placeholder: "Короткое описание",
        defaultValue: "",
        typeField: "textarea",
    },
    {
        id: "textActionMore",
        name: "Кнопка раскрытия описания",
        placeholder: "Кнопка раскрытия описания",
        defaultValue: "Смотреть подробнее",
        typeField: "input",
        typeInput: "text",
    },
    {
        id: "genre",
        name: "Жанр",
        placeholder: "Жанр",
        defaultValue: null,
        typeField: "select",
        options: [
            {
                id: 1,
                value: 1,
                name: "Драма",
            },
            {
                id: 2,
                value: 2,
                name: "Боевик",
            },
            {
                id: 3,
                value: 3,
                name: "Фантастика",
            },
        ],
    },
    {
        id: "year",
        name: "Год выпуска",
        placeholder: "Год выпуска",
        defaultValue: null,
        typeField: "input",
        typeInput: "number",
        max: 2020,
    },
    {
        id: "rating",
        name: "Оценка",
        placeholder: "Оценка",
        defaultValue: null,
        typeField: "select",
        isMulti: false,
        options: [
            {
                id: 1,
                value: 1,
                name: "1",
            },
            {
                id: 2,
                value: 2,
                name: "2",
            },
            {
                id: 3,
                value: 3,
                name: "3",
            },
            {
                id: 4,
                value: 4,
                name: "4",
            },
            {
                id: 5,
                value: 5,
                name: "5",
            },
            {
                id: 6,
                value: 6,
                name: "6",
            },
            {
                id: 7,
                value: 7,
                name: "7",
            },
            {
                id: 8,
                value: 8,
                name: "8",
            },
            {
                id: 9,
                value: 9,
                name: "9",
            },
            {
                id: 10,
                value: 10,
                name: "10",
            },
        ],
    },
];

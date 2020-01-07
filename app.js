console.log(count); // undefined
var count = 10;

// 1. Собираем всех, кто с var
// 2. Поднимаем их на самый верх вот так:
// var count; // count -> undefined
// console.log(count); // -> undefined
// count = 10; // = просто к имени привязали определённое значение
// Variable Hoisting (всплытие)
// var - никогда не используем!

// app.js:12 Uncaught ReferenceError: notDefined is not defined
// Это имя не определено
// Если произошла ошибка, то всё, что ниже - не работает
// console.log(notDefined);

var notInitialized;
console.log(notInitialized);

var normal = 10;
console.log(normal); // number

// typeof -> специальный символ/ключевое слово, которое что-то позволяет сделать
console.log(typeof notInitialized); // "undefined", undefined - это значение, undefined - тип данных
console.log(typeof (typeof notInitialized)); // string

// let, const
{
    // Uncaught ReferenceError: Cannot access 'local' before initialization
    // Нельзя использовать переменные с let до их инициализации (до их объявления)
    // console.log(local); <- до let
    // TDZ -> Temproraly Dead Zone (временно мёртвая зона)
    let local; // let local = undefined;
    console.log(local);
    // let - существует только внутри блока
}
// console.log(local); // RefError
// лучше использовать const вместо let
// const позволяет всего один раз связать имя и значение
// const - следит сам за нами, что мы случайно не затрём значение
// всегда использовать const (если const не подходит - let)

{
    const quantity; // const quantity = undefined; (так нельзя - так решили разработчики языка)
    console.log(quantity);
}

// Видимость переменной - это область, где имя доступно
// Сверху-вниз по строкам
// Изнутри-наружу по блокам
const messages = 'Hello';
{
    {
        {
            const inner = 'inner';
            console.log(messages); // с учётом TDZ
        }
    }
}
console.log(inner); // RefError
console.log(messages);

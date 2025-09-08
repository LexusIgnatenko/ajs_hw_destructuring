/**
 * `destructuring` - функция, которая извлекает массив с нужными
 * полями (id, name, description, icon) из объекта, а если значения
 * для поля description нет - устанавливает default'ное значение в
 * 'Описание недоступно'. Функция должна возвращать извлечённый массив
 * из объектов с четыремя свойствами.
 */

// export function destructuring(destructor) {
//   const resultArray = [];
//   const { special: specialObjects } = destructor;

//   for (let object of specialObjects) {
//     let { id, name, description = 'Описание недоступно', icon } = object;

//     resultArray.push({
//       id, name, description, icon
//     });
//   }

//   return resultArray;
// }


// 2-ое максимально компактное решение с использованием метода map для свойства special
export function destructuring({ special }) {
  return special.map(({ id, name, description = 'Описание недоступно', icon }) => ({
    id, name, description, icon
  }));
}
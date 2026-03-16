//Создать стрелочную функцию, которая в качестве параметров получает один или несколько массивов, состоящих из чисел, а возвращает массив, в который включены числа без повторений, которые встречаются только в одном из массивов, переданных в качестве параметров.

const fn = (...arrays) => {
  const allNumbers = arrays
    .flat()
    .filter((num, index, self) => self.indexOf(num) === index);

  return allNumbers.filter(num => {
    const count = arrays.filter(arr =>
      arr.some(item => item === num)
    ).length;

    return count === 1;
  });
};



alert(fn([1, 2, 3], [1,2,3,4, 4], [2,5]));
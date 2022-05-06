const arrayOfObjects = [
    {
        firstName: 'Ruky',
        lastName: 'Choji',
        id: 11,
        sex: 'male',
        age: 14,
        cars: ['ford', 'green', 'blue']
    },
    {
        firstName: 'Caleb',
        lastName: 'Uzumaki',
        id: 09.5,
        sex: 'male',
        age: 14,
        cars: ['benz', 'green', 'blue']
    },
    {
        firstName: 'Itua',
        lastName: 'Minato',
        id: 5,
        sex: 'male',
        sex: 'male',
        age: 14,
        cars: ['camry', 'green', 'blue']
    },
    {
        firstName: 'shully',
        lastName: 'igbavwe',
        id: 3,
        sex: 'female',
        age: 16,
        nationality: 'Nigerian',
        cars: ['vox wagen', 'green', 'blue']
    },
    {
        firstName: 'esther',
        lastName: 'Hinata',
        id: 9.51,
        sex: 'female',
        age: 50,
        cars: ['tundra', 'green', 'blue']
    }
];

/**
 * Sorts an array of objects by a property present one level deep, in any object in the array. If successful, returns the sorted array of objects, else the original array is returned.
 * @param {Array<Object>} arrayOfObjects
 * @param {String} property
 * @returns {Array<Object>} sortedArrayOfObjects
 */
const sortArrayOfObjects = (arrayOfObjects, property) => {
    if (!arrayOfObjects) return arrayOfObjects;
    if (!Array.isArray(arrayOfObjects)) return arrayOfObjects;
    if (arrayOfObjects.length <= 1) return arrayOfObjects;
    let isInt = false;
    return arrayOfObjects.map((el, index) => {
        isInt = !isNaN(el?.[property]);
        return !isInt ?
            `${el?.[property]?.[0]?.toUpperCase()?.concat(el?.[property]?.slice(1))}^-.-^${index}` :
            `${el?.[property]}^-.-^${index}`;
    })?.sort(isInt ? (a, b) => Number(a?.split('^-.-^')?.[0]) - Number(b?.split('^-.-^')?.[0]) : undefined)?.map(el => arrayOfObjects[el?.split('^-.-^')?.[1]]);
};
console.log(sortArrayOfObjects(arrayOfObjects, 'cars'));

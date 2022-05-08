/**
 *   Description: A helper function that sorts an array of objects.
 * 
 *   Copyright 2022 Emmanuel Agbavwe to Present.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */


/**
 * Sorts an array of objects by a property present one level deep, in any object in the array. If successful, returns the sorted array of objects, else the original array is returned.
 * @param {Array<Object>} arrayOfObjects The array of objects to be sorted
 * @param {String} property The name of the property to be sorted by.
 * @returns {Array<Object>} A sorted array of objects, if sorting was successful, otherwise returns the original array.
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

export default sortArrayOfObjects;
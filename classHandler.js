//@ts-check

/**
 * @typedef {Object} ClassData
 * @property {boolean} [years] - 通年
 * @property {number} credit - 単位
 * @property {Lesson[]} lessons - コマ
 * @property {string} name - 授業名
 * @property {number[]} grades - 年次
 * @property {string} category -
 * 
 */
/**
 * @typedef {Object} Lesson
 * @property {boolean} [isSecondSemester] - 後期
 * @property {number} weekday
 * @property {number} slot
 */
/** @typedef {Record<number,ClassData>} ClassRegistry */

const lessonCount = 10, term = 2, days = 5;
/** @type {number[]} */
const requestClasses = [];
/** @type {ClassRegistry} */
const ClassRegistry = {}; //file Importされる
const LessonSchedule = Array.from({ length: term }, () =>
    Array.from({ length: days }, () =>
        Array.from({ length: lessonCount }, () => -1)
    )
);

const sortedRequestClasses = requestClasses.sort((a, b) => {

    const { credit: fristCredit, category: firstCategory } = ClassRegistry[a];
    const { credit: secondCredit, category: secondCategory } = ClassRegistry[b];

    return 0;
});


const invalidClasses = [];

for (const classNumber of requestClasses) {
    const classData = ClassRegistry[classNumber];

    const { years, lessons } = classData;

    const isScheduled = lessons.some(({ weekday, slot, isSecondSemester }) => {
        if (
            years &&
            LessonSchedule.every(term => term[weekday][slot] === -1)
        ) {
            LessonSchedule.forEach(term => term[weekday][slot] = classNumber);
            return true;
        } else {
          const semester = Number(isSecondSemester);

          if (LessonSchedule[semester][weekday][slot] === -1) {
            LessonSchedule[semester][weekday][slot] = classNumber;
            return true;
          }
        }
        return false;
      });

    if (isScheduled === false) invalidClasses.push(classNumber);
}

console.log("⚠️ 無理だった授業: ", JSON.stringify(invalidClasses));
console.log("📘 時間割: ", JSON.stringify(LessonSchedule));
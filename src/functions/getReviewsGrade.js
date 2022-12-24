export const getReviewsGrade = reviews => {
    if (reviews){
        const arr = Object.values(reviews);

        let allGrades = 0;
        const allReviews = arr.length;

        for (let elem in arr){
            allGrades += arr[elem].grade;
        }

        return (allGrades / allReviews).toFixed(1);
    } else return false;
}
//получаем среднюю оценку из отзывов
import css from "./Feedback.module.css"

export const GoodRating = ({positivePersentage}) => {
    return <p className={css.text}>Positive feedback: {positivePersentage}%</p>
}
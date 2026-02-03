import star from '../../assets/star.jpg'
import style from './About.module.scss'
import { Grid } from '../../components/Grid/Grid'
import { Title } from '../../components/Title/Title'

export function About() {

    return (
        <>
        <Grid gtc= '1fr 1fr' gap={32}>
            <section>
                <Title text={'Om os'}></Title>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus qui rem sint assumenda non fugit aliquid praesentium eligendi. Atque, vitae delectus. Pariatur consectetur corporis fuga aperiam optio sequi. Accusamus, eveniet.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora modi architecto autem provident, laborum saepe iure, doloremque temporibus odit dolore aliquid voluptate ab ad repellat accusamus ipsum nesciunt obcaecati quos?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste pariatur repellat ex veritatis quam eligendi, fugit officiis non dolor quas similique aut dicta, maiores iure illo. Modi, tenetur provident.</p>
            </section>
            <section>
                <img className={style.starImg} src={star} alt="star" />
            </section>
        </Grid>
        </>
    )
}
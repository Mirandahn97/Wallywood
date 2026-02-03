import style from './Footer.module.scss'
import x from '../../assets/x.png'
import insta from '../../assets/insta.png'
import pintress from '../../assets/pintress.png'
import facebook from '../../assets/facebook.png'


export function Footer() {

    return (
        <>
            <footer className={style.footerStyle}>
                
                <section>
                    <div>
                        <h3 >WALLYWOOD</h3>
                        <p>Øster Uttrupvej 1</p>
                        <p>9000 Aalborg</p>
                    </div>
                    <div>
                        <p>CVR: 123512512</p>
                        <p>Mail: info@plakatshoppen.dk</p>
                        <p>Mobil: +45 1232 2323</p>
                    </div>
                </section>
                <section>
                    <img className={style.socials} src={pintress} alt="pintress_logo" />
                    <img className={style.socials} src={insta} alt="instagram_logo" />
                    <img className={style.socials} src={facebook} alt="facebook_logo" />
                    <img className={style.socials} src={x} alt="x_logo" />
                </section>
             
            </footer>
        </>
    )
}
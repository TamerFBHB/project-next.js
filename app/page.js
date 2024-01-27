import Image from 'next/image';
import style from './page.module.scss';

export default function Home() {
  
  return (
    <div className={style.home}>
      <div className={style.ad}>
        <h1>your best online shop destination</h1>
        <p>Discover a world of endless shopping possibilities at our online store. Browse, choose ,and order your favorite products from the comfort of your home.</p>
      </div>

      <div className={style.photo}>
        <Image src={"/images/foto.svg"} fill alt="photo" className='img'/>
      </div>
    </div>

  )
}

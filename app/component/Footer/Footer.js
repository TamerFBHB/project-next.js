import Image from "next/image"
import "./Footer.scss"


export default function Footer(params) {
    return (
        <div className="footer">
            <div className="inform">
                © 2024 🅷🅴🆇🅰🆂🅷🅾🅿 : design by Tamer Fouad
            </div>
            <div className="social">
                <Image src={"/images/facebook.png"} alt="facebook" width={25} height={25} />
                <Image src={"/images/instagram.png"} alt="instagram" width={25} height={25} />
                <Image src={"/images/youtube.png"} alt="youtube" width={25} height={25} />
                <Image src={"/images/twitter.png"} alt="twitter" width={25} height={25} />
            </div>
        </div>
    )
};

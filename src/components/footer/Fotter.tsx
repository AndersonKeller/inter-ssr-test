import facebook from "@/assets/icons/sci-facebook.svg";
import instagram from "@/assets/icons/sci-instagram.svg";
import tiktok from "@/assets/icons/sci-tiktok.svg";
import twitter from "@/assets/icons/sci-twitter.svg";
import youtube from "@/assets/icons/sci-youtube.svg";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";
export function Footer() {
  return (
    <div className="sci-footer">
      <div className="sci-rights">
        Copyright© 2022, TODOS OS DIREITOS RESERVADOS SPORT CLUB INTERNACIONAL
        <Link className="sci-privacy" color="white" href={"#"}>
          Política de privacidade
        </Link>
      </div>

      <div className="social-medias">
        <a
          href="https://www.instagram.com/scinternacional/"
          target="_blank"
          className="social-link"
        >
          <Image alt="intagram-logo" width={40} height={40} src={instagram} />
        </a>
        <a
          href="https://web.facebook.com/scinternacional"
          target="_blank"
          className="social-link"
        >
          <Image alt="facebook-logo" width={40} height={40} src={facebook} />
        </a>
        <a
          href="https://www.tiktok.com/@scinternacional"
          target="_blank"
          className="social-link"
        >
          <Image alt="tik-tok-logo" src={tiktok} width={40} height={40} />
        </a>
        <a
          href="https://twitter.com/SCInternacional"
          target="_blank"
          className="social-link"
        >
          <Image alt="twitter-logo" src={twitter} width={40} height={40} />
        </a>
        <a
          href="https://www.youtube.com/@scinternacional"
          target="_blank"
          className="social-link"
        >
          <Image alt="youtube-logo" src={youtube} width={40} height={40} />
        </a>
      </div>
    </div>
  );
}

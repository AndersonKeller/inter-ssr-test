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
          <img src="@/assets/icons/sci-instagram.svg" />
        </a>
        <a
          href="https://web.facebook.com/scinternacional"
          target="_blank"
          className="social-link"
        >
          <img src="@/assets/icons/sci-facebook.svg" />
        </a>
        <a
          href="https://www.tiktok.com/@scinternacional"
          target="_blank"
          className="social-link"
        >
          <img src="@/assets/icons/sci-tiktok.svg" />
        </a>
        <a
          href="https://twitter.com/SCInternacional"
          target="_blank"
          className="social-link"
        >
          <img src="@/assets/icons/sci-twitter.svg" />
        </a>
        <a
          href="https://www.youtube.com/@scinternacional"
          target="_blank"
          className="social-link"
        >
          <img src="@/assets/icons/sci-youtube.svg" />
        </a>
      </div>
    </div>
  );
}

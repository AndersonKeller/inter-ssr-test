import loader from "@/assets/gif/sci-loader.svg";
import logo from "@/assets/gif/sci-logo.svg";
import Image from "next/image";
import "./loading.css";
export default function Loading() {
  return (
    <div className="loading-wrapper">
      <div className="sci-loading">
        <Image
          width={50}
          height={50}
          alt="logo"
          src={logo}
          className="sci-logo"
        />
        <Image
          width={100}
          height={100}
          alt="loader"
          src={loader}
          className="sci-loader"
        />
      </div>
    </div>
  );
}
//style="background-color: transparent; border: none; box-shadow: none !important;"
//v-model="$root.loading"

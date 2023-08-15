import cart from "@/assets/icons/sci-cart.svg";
import Image from "next/image";
import "./styles.css";
export function MiniCart() {
  return (
    <div>
      <Image
        alt="cart"
        src={cart}
        width={50}
        height={50}
        className="cart-icon sci-cart active"
      />
      <div className="cart-quantity">{/* {{ $carrinho.resumo.qtd }} */}</div>
    </div>
  );
}
//@click="$util.go('Cart', { pagina: $carrinho.carrinho[0].idapresentacao })" :class="{ 'sci-cart': true, 'active': isActive }"

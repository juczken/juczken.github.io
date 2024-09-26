import { FC } from "react"
import CartButton from "src/features/Cart/ui/CartButton/CartButton";
// import CartButton from "../../../feature/Cart/ui/CartButton/CartButton";

type ProductItemProps = Pick<Product, "price" | "photo" | "name" | "desc">

export const ProductItem: FC<ProductItemProps> = ({ price, photo, name, desc }) => {

    return (
        <div>
            <div>
                <img src={photo} alt={`Product ${name}`}/>
            </div>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                {price} руб.
            </div>
            <div>
                {desc??<p>{desc}</p>}
            </div>
            <div><CartButton count={0}/></div>
        </div>
    );
}
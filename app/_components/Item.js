import Image from "next/image";
import { formatItemName } from "../_lib/helpers";

export default function Item({ itemName, image, price, itemWear }) {
  return (
    <div className="w-[140px] h-[200px] bg-primary-700 px-2 py-2 flex flex-col items-center border border-primary-400">
      <p className="text-center text-sm">{formatItemName(itemName)}</p>
      <div className="w-[80%] h-[80px] relative">
        <Image src={image} fill className="object-cover" alt={itemName} />
      </div>
      <p>{price}$</p>
    </div>
  );
}

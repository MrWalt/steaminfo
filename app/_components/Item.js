import Image from "next/image";
import { formatItemName } from "../_lib/helpers";

export default function Item({
  itemName,
  image,
  price,
  itemWear,
  statTrak,
  inspect,
}) {
  return (
    <div className="w-[140px] h-[200px] bg-primary-700 px-3 py-2 flex flex-col justify-between items-center border border-primary-400">
      <p className="text-center text-sm">{formatItemName(itemName)}</p>
      <div className="w-[80%] h-[80px] relative">
        <Image src={image} fill className="object-cover" alt={itemName} />
      </div>
      <a href={inspect} className="inline-block w-full">
        <div
          className={`flex items-center justify-center w-full bg-primary-600 px-2 border border-primary-300 cursor-pointer relative`}
        >
          <span className="uppercase inline-block text-xs absolute top-0 right-0 translate-y-[-100%] text-primary-100">
            {itemWear}
          </span>
          <span className="inline-block">{price}</span>
          {statTrak && (
            <span className="text-xs text-primary-100 absolute top-0 left-0 translate-y-[-100%] pointer-events-none">
              StatTrak&#8482;
            </span>
          )}
          <span className="inline-block w-full h-full left-0 absolute text-center translate-y-[25%] bg-primary-300 view-inspect-link transition-all opacity-0">
            Inspect
          </span>
        </div>
      </a>
    </div>
  );
}

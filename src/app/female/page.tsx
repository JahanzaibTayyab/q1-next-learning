import Link from "next/link";
import Image from "next/image";
import { products } from "@/utils/mock";
const FemaleCategory = () => {
  const filterProducts = products.filter(
    (product) => product.category === "female"
  );

  return (
    <div className="flex flex-col">
      Female Category
      <div className="flex gap-5">
        {filterProducts.map((item, index) => {
          return (
            <div key={index} className="p-5 bg-gray-300">
              <Link href={`/products/${item.slug}`}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                />
                <div>This Product {item.name} </div>
                <div>Category {item.category} </div>
                <div>Price {item.price} </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FemaleCategory;

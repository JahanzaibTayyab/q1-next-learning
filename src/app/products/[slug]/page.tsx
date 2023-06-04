import { products } from "@/utils/mock";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

type ProductDetail = {
  params: {
    slug: string;
  };
};

const ProductDetail = ({ params }: ProductDetail) => {
  return <div>Product Detail {params.slug}. This is Detail</div>;
};

export default ProductDetail;

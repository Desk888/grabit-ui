
import ProductPage from "@/components/layout/productpage/ProductPage";

interface Props {
  params: {
    id: string;
    title: string;

  };
}

export default function ProductDetailPage({ params }: Props) {
  return <ProductPage />;
}
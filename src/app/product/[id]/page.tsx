
import ProductPage from "@/components/layout/productpage/ProductPage";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
    title: string;

  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch the product data here
  return {
    title: `${params.title} | Grabit`,
    description: "View this item on Grabit",
  };
}

export default function ProductDetailPage({ params }: Props) {
  return <ProductPage />;
}
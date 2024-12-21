
import ProductPage from "@/components/productpage/ProductPage";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
    title: string;

  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // In a real app, fetch the product data here
  return {
    title: `${params.title} | Grabit`,
    description: "View this item on Grabit",
  };
}

export default function ProductDetailPage({ params }: Props) {
  return <ProductPage />;
}
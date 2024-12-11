import { User, MapPin, Package, Clock, Calendar, MoreVertical } from "lucide-react";
import { Card } from "../../components/ui/card";
import ProductCard from '@/components/layout/ProductCard';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Dummy data
const mockProducts = Array.from({ length: 4 }, (_, i) => ({
  id: i + 101,
  title: `My Product ${i + 1}`,
  price: `£${Math.floor(Math.random() * 100) + 1}`,
  location: ['London', 'Manchester', 'Birmingham', 'Leeds'][Math.floor(Math.random() * 4)],
  postedAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
  images: [`https://picsum.photos/seed/myproduct${i + 1}/300/300`]
}));

const Profile = () => {
  const user = {
    name: "Sarah Johnson",
    username: "@sarahj",
    location: "London, UK",
    joinedYear: "2021",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
    bio: "Lover of all things 90s. I'm a huge fan of thrifting and giving life to clothes. I love to shop for vintage items and I'm always up for a good bargain. I also love to travel and explore new places. When I'm not shopping or traveling, you can find me reading, writing, or playing video games."
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Header */}
      <Card className="p-6 md:p-8 relative">
        <div className="absolute top-4 right-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-6 h-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/settings">
                  Edit Profile
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <img
              src={user.image}
              alt={user.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{user.name}</h1>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-600">
              <div className="flex items-center justify-center md:justify-start gap-1">
                <User className="w-4 h-4" />
                <span>{user.username}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1">
                <MapPin className="w-4 h-4" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1">
                <Calendar className="w-4 h-4" />
                <span>Joined {user.joinedYear}</span>
              </div>
            </div>
            {user.bio && (
              <p className="mt-4 text-gray-700 max-w-xl">
                {user.bio}
              </p>
            )}
          </div>
        </div>
      </Card>

      {/* My Ads Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Package className="w-5 h-5 text-[#2E882C]" />
          <h2 className="text-xl font-semibold">My Ads</h2>
        </div>
        <Card className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Card>
      </section>

      {/* Recently Viewed Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#2E882C]" />
          <h2 className="text-xl font-semibold">Recently Viewed</h2>
        </div>
        <Card className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Profile;
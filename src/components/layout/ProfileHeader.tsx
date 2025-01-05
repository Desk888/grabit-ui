'use client';
import { User, MapPin, Package, Clock, Calendar, MoreVertical, Heart, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
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

// Dummy data - fetch from API
const mockProducts = Array.from({ length: 4 }, (_, i) => ({
  id: i + 101,
  title: `My Product ${i + 1}`,
  location: ['London', 'Manchester', 'Birmingham', 'Leeds'][Math.floor(Math.random() * 4)],
  postedAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
  images: [`https://picsum.photos/seed/myproduct${i + 1}/300/300`]
}));

const Profile = () => {
  const user = {
    firstname: "Sarah",
    lastname: "Johnson",
    username: "@sarahj",
    location: "London, UK",
    joinedYear: "2021",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
    bio: "Lover of all things 90s. I'm a huge fan of thrifting and giving life to clothes. I love to shop for vintage items and I'm always up for a good bargain. I also love to travel and explore new places. When I'm not shopping or traveling, you can find me reading, writing, or playing video games."
  };

  const scroll = (elementId: string, direction: 'left' | 'right') => {
    const container = document.getElementById(elementId);
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
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
              alt={user.firstname}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{user.firstname} {user.lastname}</h1>
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
        <Card className="p-6 relative">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('my-ads-container', 'left')}
              className="rounded-full bg-white/80 hover:bg-white shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div 
            id="my-ads-container"
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
          >
            {mockProducts.map((product) => (
              <div key={product.id} className="min-w-[250px] relative group">
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute left-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  // onClick={() => handleDeleteAd(product.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('my-ads-container', 'right')}
              className="rounded-full bg-white/80 hover:bg-white shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </Card>
      </section>

      {/* Saved Items Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-[#2E882C]" />
          <h2 className="text-xl font-semibold">Saved Items</h2>
        </div>
        <Card className="p-6 relative">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('saved-items-container', 'left')}
              className="rounded-full bg-white/80 hover:bg-white shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div 
            id="saved-items-container"
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
          >
            {mockProducts.map((product) => (
              <div key={product.id} className="min-w-[250px] relative group">
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute left-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  // onClick={() => handleRemoveSaved(product.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('saved-items-container', 'right')}
              className="rounded-full bg-white/80 hover:bg-white shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </Card>
      </section>

      {/* Recently Viewed Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#2E882C]" />
          <h2 className="text-xl font-semibold">Recently Viewed</h2>
        </div>
        <Card className="p-6 relative">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('recently-viewed-container', 'left')}
              className="rounded-full bg-white/80 hover:bg-white shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div 
            id="recently-viewed-container"
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
          >
            {mockProducts.map((product) => (
              <div key={product.id} className="min-w-[250px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('recently-viewed-container', 'right')}
              className="rounded-full bg-white/80 hover:bg-white shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Profile;
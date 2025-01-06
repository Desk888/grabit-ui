'use client';

import { User, MapPin, Package, Clock, Calendar, MoreVertical, Heart, ChevronLeft, ChevronRight, Trash2, Pencil } from "lucide-react";
import { Card } from "../../ui/card";
import ProductCard from '@/components/layout/items/ProductCard';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const mockProducts = Array.from({ length: 4 }, (_, i) => ({
  id: i + 101,
  title: `My Product ${i + 1}`,
  location: ['London', 'Manchester', 'Birmingham', 'Leeds'][Math.floor(Math.random() * 4)],
  postedAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
  images: [`https://picsum.photos/seed/myproduct${i + 1}/300/300`],
}));

const Profile = () => {
  const user = {
    firstname: "Sarah",
    lastname: "Johnson",
    username: "@sarahj",
    location: "London, UK",
    joinedYear: "2021",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
    bio: "Lover of all things 90s. I'm a huge fan of thrifting and giving life to clothes. I love to shop for vintage items and I'm always up for a good bargain. I also love to travel and explore new places. When I'm not shopping or traveling, you can find me reading, writing, or playing video games.",
  };

  const scroll = (elementId: string, direction: 'left' | 'right') => {
    const container = document.getElementById(elementId);
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleDeleteAd = (id: number) => {
    console.log(`Delete ad with id: ${id}`);
    // Implement delete logic here
  };

  const handleEditAd = (id: number) => {
    console.log(`Edit ad with id: ${id}`);
    // Implement edit logic here
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
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
                <Link href="/settings">Edit Profile</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={user.image}
            alt={`${user.firstname} profile`}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {`${user.firstname} ${user.lastname}`}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{user.username}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Joined {user.joinedYear}</span>
              </div>
            </div>
            {user.bio && <p className="mt-4 text-gray-700 max-w-xl">{user.bio}</p>}
          </div>
        </div>
      </Card>

      {/* Sections for Ads, Saved Items, and Recently Viewed */}
      {['My Ads', 'Saved Items', 'Recently Viewed'].map((sectionTitle, index) => (
        <section className="space-y-4" key={sectionTitle}>
          <div className="flex items-center gap-2">
            {index === 0 ? (
              <Package className="w-5 h-5 text-[#2E882C]" />
            ) : index === 1 ? (
              <Heart className="w-5 h-5 text-[#2E882C]" />
            ) : (
              <Clock className="w-5 h-5 text-[#2E882C]" />
            )}
            <h2 className="text-xl font-semibold">{sectionTitle}</h2>
          </div>
          <Card className="p-6 relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll(`${sectionTitle.toLowerCase().replace(' ', '-')}-container`, 'left')}
                className="rounded-full bg-white/80 hover:bg-white shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </div>
            <div
              id={`${sectionTitle.toLowerCase().replace(' ', '-')}-container`}
              className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
            >
              {mockProducts.map((product) => (
                <div key={product.id} className="min-w-[250px] relative group">
                  {index === 0 && (
                    <div className="absolute left-2 top-2 z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="destructive"
                        size="icon"
                        className="w-8 h-8"
                        onClick={() => handleDeleteAd(product.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <button
                        className="w-8 h-8 flex items-center justify-center rounded bg-yellow-500"
                        onClick={() => handleEditAd(product.id)}
                      >
                        <Pencil className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  )}
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll(`${sectionTitle.toLowerCase().replace(' ', '-')}-container`, 'right')}
                className="rounded-full bg-white/80 hover:bg-white shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </Card>
        </section>
      ))}
    </div>
  );
};

export default Profile;

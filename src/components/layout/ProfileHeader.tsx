import { User, MapPin, Package, Clock } from "lucide-react";
import { Card } from "../../components/ui/card";

const Profile = () => {
  // This would come from your auth system or API
  const user = {
    name: "Sarah Johnson",
    username: "@sarahj",
    location: "London, UK",
    joinedYear: "2021",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
  };

  console.log("Rendering Profile page for user:", user.username);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Header */}
      <Card className="p-6 md:p-8">
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
            </div>
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
          <p className="text-gray-600 text-center">No ads posted yet</p>
        </Card>
      </section>

      {/* Recently Viewed Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#2E882C]" />
          <h2 className="text-xl font-semibold">Recently Viewed</h2>
        </div>
        <Card className="p-6">
          <p className="text-gray-600 text-center">No items viewed yet</p>
        </Card>
      </section>
    </div>
  );
};

export default Profile;
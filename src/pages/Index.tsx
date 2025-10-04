import { useState } from "react";
import { CategoryTabs } from "@/components/CategoryTabs";
import { ImageGrid } from "@/components/ImageGrid";
import { ImageModal } from "@/components/ImageModal";

// Mock data - In production, this would fetch from APIs
const morningImages = [
  { id: "m1", url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400&h=400&fit=crop", alt: "Oggend boodskap 1" },
  { id: "m2", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop", alt: "Oggend boodskap 2" },
  { id: "m3", url: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400&h=400&fit=crop", alt: "Oggend boodskap 3" },
  { id: "m4", url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop", alt: "Oggend boodskap 4" },
  { id: "m5", url: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&h=400&fit=crop", alt: "Oggend boodskap 5" },
  { id: "m6", url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=400&fit=crop", alt: "Oggend boodskap 6" },
  { id: "m7", url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=400&fit=crop", alt: "Oggend boodskap 7" },
  { id: "m8", url: "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?w=400&h=400&fit=crop", alt: "Oggend boodskap 8" },
];

const eveningImages = [
  { id: "e1", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop", alt: "Aand boodskap 1" },
  { id: "e2", url: "https://images.unsplash.com/photo-1494233892892-84542a694e72?w=400&h=400&fit=crop", alt: "Aand boodskap 2" },
  { id: "e3", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop", alt: "Aand boodskap 3" },
  { id: "e4", url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop", alt: "Aand boodskap 4" },
  { id: "e5", url: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=400&h=400&fit=crop", alt: "Aand boodskap 5" },
  { id: "e6", url: "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=400&h=400&fit=crop", alt: "Aand boodskap 6" },
  { id: "e7", url: "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=400&h=400&fit=crop", alt: "Aand boodskap 7" },
  { id: "e8", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop", alt: "Aand boodskap 8" },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<"morning" | "evening">("morning");
  const [selectedImage, setSelectedImage] = useState<{ id: string; url: string; alt: string } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const currentImages = activeCategory === "morning" ? morningImages : eveningImages;

  const handleImageClick = (image: { id: string; url: string; alt: string }) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b shadow-sm">
        <div className="container max-w-7xl mx-auto p-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 bg-gradient-morning bg-clip-text text-transparent">
            Oggend & Aand Boodskappe
          </h1>
          <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        </div>
      </header>

      <main className="container max-w-7xl mx-auto pb-8">
        <ImageGrid images={currentImages} onImageClick={handleImageClick} />
      </main>

      <ImageModal image={selectedImage} open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;

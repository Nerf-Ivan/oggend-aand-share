import { Card } from "@/components/ui/card";

interface ImageGridProps {
  images: { id: string; url: string; alt: string }[];
  onImageClick: (image: { id: string; url: string; alt: string }) => void;
}

export const ImageGrid = ({ images, onImageClick }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4 animate-fade-in">
      {images.map((image) => (
        <Card
          key={image.id}
          className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          onClick={() => onImageClick(image)}
        >
          <div className="aspect-square relative">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

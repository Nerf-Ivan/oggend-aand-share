import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ImageModalProps {
  image: { id: string; url: string; alt: string } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ImageModal = ({ image, open, onOpenChange }: ImageModalProps) => {
  const { toast } = useToast();

  const handleShare = async () => {
    if (!image) return;

    try {
      // Convert image URL to blob for sharing
      const response = await fetch(image.url);
      const blob = await response.blob();
      const file = new File([blob], "boodskap.jpg", { type: blob.type });

      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: image.alt,
        });
        toast({
          title: "Gedeel!",
          description: "Die boodskap is suksesvol gedeel.",
        });
      } else {
        // Fallback: copy image URL
        await navigator.clipboard.writeText(image.url);
        toast({
          title: "Skakel gekopieer",
          description: "Die skakel na die prent is gekopieer.",
        });
      }
    } catch (error) {
      console.error("Error sharing:", error);
      toast({
        title: "Kon nie deel nie",
        description: "Probeer asseblief weer.",
        variant: "destructive",
      });
    }
  };

  if (!image) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 gap-0 bg-black/95 border-none">
        <DialogTitle className="sr-only">{image.alt}</DialogTitle>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full"
          onClick={() => onOpenChange(false)}
        >
          <X className="h-5 w-5" />
        </Button>
        
        <div className="relative w-full">
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-auto max-h-[80vh] object-contain animate-scale-in"
          />
        </div>

        <div className="p-4 bg-card">
          <Button
            onClick={handleShare}
            className="w-full bg-gradient-morning hover:opacity-90 transition-opacity"
            size="lg"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Deel Boodskap
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

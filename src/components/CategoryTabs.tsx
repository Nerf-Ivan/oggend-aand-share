import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sunrise, Moon } from "lucide-react";

interface CategoryTabsProps {
  activeCategory: "morning" | "evening";
  onCategoryChange: (category: "morning" | "evening") => void;
}

export const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <Tabs value={activeCategory} onValueChange={(v) => onCategoryChange(v as "morning" | "evening")} className="w-full">
      <TabsList className="grid w-full grid-cols-2 h-14 bg-card shadow-lg border border-border">
        <TabsTrigger 
          value="morning" 
          className="data-[state=active]:bg-gradient-morning data-[state=active]:text-primary-foreground flex items-center gap-2 transition-all font-bold"
        >
          <Sunrise className="w-5 h-5" />
          <span className="font-bold uppercase tracking-wide text-sm">Oggend</span>
        </TabsTrigger>
        <TabsTrigger 
          value="evening"
          className="data-[state=active]:bg-gradient-evening data-[state=active]:text-secondary-foreground flex items-center gap-2 transition-all font-bold"
        >
          <Moon className="w-5 h-5" />
          <span className="font-bold uppercase tracking-wide text-sm">Aand</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

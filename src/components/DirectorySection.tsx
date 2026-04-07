import React from "react";
import { Building2 } from "lucide-react";
import { DirectorySection as SectionType } from "../types";
import PhoneCard from "./PhoneCard";

interface DirectorySectionProps {
  section: SectionType;
}

const DirectorySection: React.FC<DirectorySectionProps> = ({ section }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-beige-1">
        <div className="bg-accent px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <Building2 className="w-5 h-5" />
            <h2 className="font-bold text-lg">{section.title}</h2>
          </div>
          <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
            {section.entries.length} แผนก
          </span>
        </div>
        
        <div className="p-6 bg-bg-beige/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.entries.map((entry) => (
              <PhoneCard key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorySection;

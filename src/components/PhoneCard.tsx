import React from "react";
import { Phone, Pencil, Trash2 } from "lucide-react";
import { PhoneEntry } from "../types";
import { motion } from "motion/react";

interface PhoneCardProps {
  entry: PhoneEntry;
}

const PhoneCard: React.FC<PhoneCardProps> = ({ entry }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-5 rounded-2xl border border-beige-1 shadow-sm hover:shadow-md transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-primary-dark group-hover:text-primary-medium transition-colors">
          {entry.department}
        </h3>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-1.5 text-muted-brown hover:text-primary-medium hover:bg-bg-cream rounded-lg transition-colors">
            <Pencil className="w-4 h-4" />
          </button>
          <button className="p-1.5 text-muted-brown hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="bg-bg-cream p-2 rounded-lg">
          <Phone className="w-4 h-4 text-primary-medium" />
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {entry.numbers.map((num, idx) => (
            <span key={idx} className="text-lg font-semibold text-primary-medium">
              {num}
              {idx < entry.numbers.length - 1 && <span className="text-muted-brown mx-1">/</span>}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneCard;

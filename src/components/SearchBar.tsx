import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-muted-brown group-focus-within:text-primary-medium transition-colors" />
        </div>
        <input
          type="text"
          className="block w-full pl-11 pr-4 py-3.5 bg-white border border-beige-1 rounded-2xl text-primary-dark placeholder-muted-brown focus:ring-2 focus:ring-primary-light focus:border-primary-medium transition-all shadow-sm outline-none"
          placeholder="ค้นหาชื่อแผนก, เบอร์โทร, หรืออาคาร..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

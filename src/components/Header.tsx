import { Phone, Download, Github, History, Plus } from "lucide-react";

interface HeaderProps {
  onExport: () => void;
}

export default function Header({ onExport }: HeaderProps) {
  return (
    <header className="bg-white border-b border-beige-1 px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-primary-medium p-2.5 rounded-xl shadow-sm">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary-dark leading-tight">
              สมุดโทรศัพท์ภายใน
            </h1>
            <p className="text-sm text-muted-brown">
              โรงพยาบาลสมเด็จพระเจ้าตากสินมหาราช
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-6 text-sm font-medium text-primary-medium">
          <button 
            onClick={onExport}
            className="flex items-center gap-1.5 hover:text-primary-dark transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
          <button className="flex items-center gap-1.5 hover:text-primary-dark transition-colors">
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </button>
          <button className="flex items-center gap-1.5 hover:text-primary-dark transition-colors">
            <History className="w-4 h-4" />
            <span>ประวัติ</span>
          </button>
          <button className="bg-primary-medium hover:bg-primary-dark text-white px-4 py-2 rounded-lg flex items-center gap-1.5 transition-all shadow-sm active:scale-95">
            <Plus className="w-4 h-4" />
            <span>เพิ่มเบอร์โทร</span>
          </button>
        </div>
      </div>
    </header>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useCallback } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import DirectorySection from "./components/DirectorySection";
import { INITIAL_DATA } from "./constants";
import { exportToCSV } from "./lib/exportUtils";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleExport = useCallback(() => {
    exportToCSV(INITIAL_DATA);
  }, []);

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return INITIAL_DATA;

    const query = searchQuery.toLowerCase();
    return INITIAL_DATA.map((section) => ({
      ...section,
      entries: section.entries.filter(
        (entry) =>
          entry.department.toLowerCase().includes(query) ||
          entry.numbers.some((num) => num.includes(query))
      ),
    })).filter((section) => section.entries.length > 0);
  }, [searchQuery]);

  return (
    <div className="min-h-screen pb-20">
      <Header onExport={handleExport} />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      
      <main className="space-y-8">
        {filteredData.length > 0 ? (
          filteredData.map((section) => (
            <DirectorySection key={section.id} section={section} />
          ))
        ) : (
          <div className="max-w-7xl mx-auto px-8 py-20 text-center">
            <p className="text-muted-brown text-lg">ไม่พบข้อมูลที่ค้นหา</p>
          </div>
        )}
      </main>
      
      <footer className="max-w-7xl mx-auto px-8 py-8 border-t border-beige-1 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-brown">
          <p>© 2026 โรงพยาบาลสมเด็จพระเจ้าตากสินมหาราช</p>
          <p>พัฒนาโดย ฝ่ายเทคโนโลยีสารสนเทศ</p>
        </div>
      </footer>
    </div>
  );
}

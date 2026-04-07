import { DirectorySection } from "../types";

export const exportToCSV = (data: DirectorySection[]) => {
  // Define CSV headers
  const headers = ["อาคาร/หมวดหมู่", "แผนก", "เบอร์โทรศัพท์"];
  
  // Flatten data for CSV
  const rows = data.flatMap(section => 
    section.entries.map(entry => [
      section.title,
      entry.department,
      entry.numbers.join(" / ")
    ])
  );

  // Combine headers and rows
  const csvContent = [
    headers.join(","),
    ...rows.map(row => row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(","))
  ].join("\n");

  // Create blob and download
  const blob = new Blob(["\ufeff" + csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `directory_export_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

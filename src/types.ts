export interface PhoneEntry {
  id: string;
  department: string;
  numbers: string[];
}

export interface DirectorySection {
  id: string;
  title: string;
  entries: PhoneEntry[];
}

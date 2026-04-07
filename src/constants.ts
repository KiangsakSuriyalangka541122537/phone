import { DirectorySection } from "./types";

export const INITIAL_DATA: DirectorySection[] = [
  {
    id: "opd",
    title: "อาคารผู้ป่วยนอก OPDDDDDD",
    entries: [
      {
        id: "1",
        department: "ฝ่ายการเจ้าหน้าที่ งานทรัพ(จ)",
        numbers: ["1040"],
      },
      {
        id: "2",
        department: "ประชาสัมพันธ์ (ในเวลาราชการ)",
        numbers: ["0", "1000", "1001"],
      },
      {
        id: "3",
        department: "ประชาสัมพันธ์ (นอกเวลาราชการ)",
        numbers: ["0", "2999"],
      },
      {
        id: "4",
        department: "เวชระเบียนผู้ป่วยนอก",
        numbers: ["1048", "1002"],
      },
      {
        id: "5",
        department: "ศูนย์เปล",
        numbers: ["1144"],
      },
      {
        id: "6",
        department: "ห้องหัวหน้า OPD (ชั้น 1)",
        numbers: ["1005"],
      },
      {
        id: "7",
        department: "ห้องจ่ายยาผู้ป่วยนอก",
        numbers: ["1014", "1121"],
      },
      {
        id: "8",
        department: "ห้องคิดเงินผู้ป่วยนอก",
        numbers: ["1018"],
      },
      {
        id: "9",
        department: "ห้องฉีดยา",
        numbers: ["1026"],
      },
      {
        id: "10",
        department: "กายภาพบำบัด",
        numbers: ["1149", "1158"],
      },
      {
        id: "11",
        department: "กิจกรรมบำบัด",
        numbers: ["1148"],
      },
      {
        id: "12",
        department: "เวชระเบียนผู้ป่วยใน",
        numbers: ["1033"],
      },
    ],
  },
];

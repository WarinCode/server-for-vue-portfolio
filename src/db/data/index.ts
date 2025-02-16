import UserModel from "../../types/models/user";
import UniversityModel from "../../types/models/university";
import { Schools } from "../../types/models/school";
import { GPAs } from "../../types/models/gpa";

export const user: UserModel = {
  fullname: "วรินทร์ สายปัญญา",
  age: 20,
  studentId: 6630250435,
  sophomore: 2,
  hobbies: "ชอบเขียนโค้ดและอ่านหนังสือภาษาโปรแกรม",
  university: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา",
  faculty: "วิทยาศาสตร์ ศรีราชา",
  major: "วิทยาการคอมพิวเตอร์",
};

export const schools: Schools = [
  {
    id: "1",
    schoolName: "โรงเรียนเมืองพัทยา 5",
    studyPlan: "-",
    period: "อ.1 - อ.3",
    img: "https://server-for-react-portfolio.onrender.com/imgs/school5.jpg",
    logo: "/assets/imgs/school5.png",
    facebookLink:
      "https://web.facebook.com/pattayacity5school/?locale=th_TH&_rdc=1&_rdr",
    location: "https://maps.app.goo.gl/U6VmnKeAtdUtLZKu5",
  },
  {
    id: "2",
    schoolName: "โรงเรียนเมืองพัทยา 9 วัดโพธิสัมพันธ์",
    studyPlan: "วิทย์คณิต",
    period: "ป.1 - ม.3",
    img: "https://server-for-react-portfolio.onrender.com/imgs/school9.jpg",
    logo: "/assets/imgs/school9.png",
    facebookLink: "https://web.facebook.com/Pattayacitynine?locale=th_TH",
    location: "https://maps.app.goo.gl/TR1FJSARGmSYpL6v6",
  },
  {
    id: "3",
    schoolName: "โรงเรียนโพธิสัมพันธิ์พิทยาคาร",
    studyPlan: "วิทย์คอม",
    period: "ม.4 - ม.6",
    img: "https://server-for-react-portfolio.onrender.com/imgs/psp.jpg",
    logo: "/assets/imgs/PSP.png",
    facebookLink: "https://web.facebook.com/PhothisamphanSchool?locale=th_TH",
    location: "https://maps.app.goo.gl/TrY6quSrVK57boUt7",
  },
];

export const university: UniversityModel = {
  universityName: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา",
  faculty: "วิทยาศาสตร์ ศรีราชา",
  major: "วิทยาการคอมพิวเตอร์",
  period: "กำลังศึกษาอยู่",
  img: "https://server-for-react-portfolio.onrender.com/imgs/kusrc.jpg",
  logo: "/assets/imgs/KU-SRC.png",
  facebookLink: "https://web.facebook.com/KasetsartUniversity",
  location: "https://maps.app.goo.gl/rtVuC3BGS47hGkJ2A",
};

export const gpas: GPAs = [
  {
    year: 2566,
    studentYear: 1,
    semester: "first",
    gpa: 3.61,
    gpax: 3.61,
    credit: 22
  },
  {
    year: 2566,
    studentYear: 1,
    semester: "second",
    gpa: 3.66,
    gpax: 3.64,
    credit: 22
  },
  {
    year: 2567,
    studentYear: 2,
    semester: "first",
    gpa: 3.88,
    gpax: 3.70,
    credit: 17
  }
]
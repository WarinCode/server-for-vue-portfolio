import UserModel from "../../types/models/user";
import UniversityModel from "../../types/models/university";
import { Schools } from "../../types/models/school";

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
    img: "https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/314329690_564082088856983_3436000969958001644_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeG_ySAiapo7IWGYj2-HvjRrINaLbSZ6Nt4g1ottJno23v8dt8qV3goaakajFcP7Zh7YolJL_tqRGeXa7IYCJCZP&_nc_ohc=3J_RNAA8T2wQ7kNvgHcFK1U&_nc_zt=23&_nc_ht=scontent-bkk1-1.xx&_nc_gid=AQCGMl9D78nP_CUt6wp_uPB&oh=00_AYCfifguVwpmZ3p8mcOQ_OyRaA8izqvRYVcFxh9JZ2EmKw&oe=67577F78",
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
    img: "https://scontent.fbkk22-4.fna.fbcdn.net/v/t39.30808-6/240602424_4342165789160260_35981721297864338_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeG3yXwLYa-LRyyAAqbPMPLyHloEukPOzo0eWgS6Q87OjUlM02dkjv6OBdWCt4BeE12e-8uBLbygMXjFpSpSsLun&_nc_ohc=HaBCjQe1umoQ7kNvgFgLZPi&_nc_zt=23&_nc_ht=scontent.fbkk22-4.fna&_nc_gid=A_8PT6kA4lpzKQeYxeHvWx0&oh=00_AYDJxUxzwnMBYf-r5NOe4R6yyjsFAAlCgANz-z3jbZwIXA&oe=6751F294",
    logo: "/assets/imgs/school9.png",
    facebookLink: "https://web.facebook.com/Pattayacitynine?locale=th_TH",
    location: "https://maps.app.goo.gl/TR1FJSARGmSYpL6v6",
  },
  {
    id: "3",
    schoolName: "โรงเรียนโพธิสัมพันธิ์พิทยาคาร",
    studyPlan: "วิทย์คอม",
    period: "ม.4 - ม.6",
    img: "https://i.ytimg.com/vi/BKBUj0NfZn8/maxresdefault.jpg",
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
  img: "https://www.src.ku.ac.th/en/tp/img/banner1.jpg",
  logo: "/assets/imgs/KU-SRC.png",
  facebookLink: "https://web.facebook.com/KasetsartUniversity",
  location: "https://maps.app.goo.gl/rtVuC3BGS47hGkJ2A",
};

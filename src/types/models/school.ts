export default interface SchoolModel {
    id: number;
    schoolName: string;
    studyPlan: string;
    period: string;
    img: string;
    logo: string;
    facebookLink: string;
    location: string;
}

export type Schools = SchoolModel[];
import { Types } from "mongoose";

export interface ICourse {
    courseId:string,
    title:string,
    slug:string,
    category: Types.ObjectId,
    type: string,
    image:string
    fee:string,
    rating:number,
    totalRating:number,
    totalStudentEnroll:number,
    mentors:Types.ObjectId,
    courseStart:string,
    duration: number,
    lectures:number,
    totalExam:number,
    totalProjects:number,
    courseDetails:string,
    courseOverView:string,
    curriculum: string[],
    courseIncludes: string[],
    softwareIncludes: string[],
    jobOption:string[],

}
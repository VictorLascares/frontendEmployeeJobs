import { Gender } from "./gender";
import { Job } from "./job";

export class Employee {
    id: number;
    name: String;
    last_name: String;
    birthdate: String;
    job: Job;
    gender: Gender;
}

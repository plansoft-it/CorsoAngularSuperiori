import { Student } from './student.model';

export class Class {
    public id: number;
    public year: number;
    public section: string;
    public students: Student[];
}

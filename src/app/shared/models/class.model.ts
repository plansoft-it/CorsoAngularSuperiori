import { Student } from './student.model';

export class Class {
    public id: number;
    public year: number;
    public section: string;
    public students: Student[];

    deserialize(input: any) {
        Object.assign(this, input);
        this.students = [];
        if (input.students) {
            this.students = input.students.map(student => new Student().deserialize(student));
        }
        return this;
    }
}

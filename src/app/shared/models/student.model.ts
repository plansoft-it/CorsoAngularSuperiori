export class Student {
    public id: number;
    public name: string;
    public surname: string;
    public sidiCode: string;
    public taxCode: string;
    public classId: number;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}

interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
};

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
    const f_letter = firstName[0];
    const intialName = f_letter.concat('. ', lastName);
    return intialName;
}
interface studentConstructor {
    firstName: string,
    lastName: string
}
interface studentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
class StudentClass implements studentClassInterface {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: studentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return this.firstName;
    }
}

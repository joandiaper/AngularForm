import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class UserService {
    constructor() { }

    users: User[] = [];

    public sendUsers(name: string, lastName: string, email: string, age: string, quota: string): Observable<User[]> {
        if (name != "" && lastName != "") {
            this.users.push({
                name: name, 
                lastName: lastName,
                email: email,
                age: age,
                quota: quota
            });
        }
        return of(this.users);
    }

}
export interface User { 
    name: string; 
    lastName: string; 
    email: string; 
    age: string; 
    quota: string; 
}

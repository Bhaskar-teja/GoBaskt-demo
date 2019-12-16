import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CommunicationService {
    constructor(){}
    subject = new Subject<any>();

    getsubject(): Observable<any> {
        return this.subject.asObservable();
    }
    setSubject(params) {
        this.subject.next(params);
    }
}
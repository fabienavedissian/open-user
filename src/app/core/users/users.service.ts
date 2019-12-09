import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

/** Users Model */
import { UsersModel } from 'src/app/core/users/interfaces/users.model';

/** Http Client */
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  /** Is Logged Subject */
  public isLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /** Is Logged */
  public isLogged: boolean;

  constructor(
    private http: HttpClient
  ) {
    this.isLogged$.subscribe((bool: boolean) => {
      this.isLogged = bool;
    });
  }

  getUsers(): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>('https://api.github.com/users');
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private readonly validUsername = 'vivek';
  private readonly validPassword = '12345';

constructor() { }

authenticate(username: string, password: string): boolean {
  return username === this.validUsername && password === this.validPassword;
}
}

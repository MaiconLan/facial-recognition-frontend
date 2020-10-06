import { Injectable } from '@angular/core';
import {FacialHttp} from './facial-http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  tokensRevokeUrl = 'http://localhost:8080/reconhecimento/token';

  constructor(private http: FacialHttp,
              private auth: AuthService) { }

  logout(): Promise<void> {
    return this.http.delete(this.tokensRevokeUrl, {withCredentials: true})
      .toPromise()
      .then(response => {
        console.log('OK: ', response);
        this.auth.limparAcessToken();
      }).catch(error => {
        return error;
      });
  }
}

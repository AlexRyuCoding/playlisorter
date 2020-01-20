import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { generateLoginUrl } from '../shared';
import { TokenService } from '../spotify-auth';

@Component({
  selector: 'sort-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(private tokenSvc: TokenService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    if (!!this.tokenSvc.oAuthToken) {
      await this.router.navigate(['/']);
    }
  }
  get loginUrl(): string {
    return generateLoginUrl('');
  }
}

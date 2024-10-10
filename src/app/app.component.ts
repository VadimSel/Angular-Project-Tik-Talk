import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { Profile } from "./data/interfaces/profile.interface";
import { ProfilesService } from './data/services/profiles.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  profileService = inject(ProfilesService);
  profiles: Profile[] = [];

  constructor() {
    this.profileService.getTestAccounts().subscribe((val) => {
      this.profiles = val
    });
  }
}

import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideAnimations(), provideToastr()],
};

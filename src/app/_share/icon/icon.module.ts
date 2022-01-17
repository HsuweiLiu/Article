import { NgModule } from "@angular/core";

import { GoogleMapIconComponent } from "./google-map-icon/google-map-icon.component";
import { MailIconComponent } from "./mail-icon/mail-icon.component";

@NgModule({
  declarations: [
    GoogleMapIconComponent,
    MailIconComponent,
  ],
  imports: [],
  exports: [
    GoogleMapIconComponent,
    MailIconComponent,
  ],
})
export class IconModule {
}

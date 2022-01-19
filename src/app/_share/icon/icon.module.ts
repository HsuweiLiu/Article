import { NgModule } from "@angular/core";

import { GoogleMapIconComponent } from "./google-map-icon/google-map-icon.component";
import { LinkedinIconComponent } from "./linkedin-icon/linkedin-icon.component";
import { MailIconComponent } from "./mail-icon/mail-icon.component";

@NgModule({
  declarations: [
    GoogleMapIconComponent,
    LinkedinIconComponent,
    MailIconComponent,
  ],
  imports: [],
  exports: [
    GoogleMapIconComponent,
    LinkedinIconComponent,
    MailIconComponent,
  ],
})
export class IconModule {
}

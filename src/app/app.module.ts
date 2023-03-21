import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SeatBookComponent } from "./seat-book/seat-book.component";
import { DbService } from "./seat-book/db.service";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, SeatBookComponent],
  bootstrap: [AppComponent],
  providers: [DbService]
})
export class AppModule {}

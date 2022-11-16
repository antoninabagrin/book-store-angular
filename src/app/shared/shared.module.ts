import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsAdressComponent } from './components/authors-adress/authors-adress.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorsComponent,
    AuthorsAdressComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    ToolbarComponent,
    FooterComponent,
    MaterialModule,
    AuthorsComponent,
    AuthorsAdressComponent,
  ],
})
export class SharedModule {}

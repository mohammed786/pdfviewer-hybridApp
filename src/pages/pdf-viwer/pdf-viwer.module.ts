import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdfViwerPage } from './pdf-viwer';

@NgModule({
  declarations: [
    PdfViwerPage,
  ],
  imports: [
    IonicPageModule.forChild(PdfViwerPage),
  ],
  exports: [
    PdfViwerPage
  ]
})
export class PdfViwerPageModule {}

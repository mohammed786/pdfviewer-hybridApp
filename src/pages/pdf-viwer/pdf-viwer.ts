import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PdfViewerComponent } from 'ng2-pdf-viewer'
/**
 * Generated class for the PdfViwerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pdf-viwer',
  templateUrl: 'pdf-viwer.html',
  providers: [PdfViewerComponent]
})
export class PdfViwerPage {
  public pdfUrl: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfViwerPage');
    this.pdfUrl = 'assets/pdf/data.pdf';
  }

}

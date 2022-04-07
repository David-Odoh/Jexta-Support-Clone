import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.css']
})
export class FormEditorComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;
  isEven: Boolean;

  constructor() { }

  ngOnInit() {
    this.ckeditorConfig();
  }

  // CKEditor Settings
  ckeConfig: any;
  @ViewChild("myckeditor") ckeditor: any;

  public ckeditorConfig() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
      uiColor: '#ffffff',
    };
    this.ckeConfig.toolbar = 'Basic';

    // BASIC
    this.ckeConfig.toolbar_Basic =
      [
        ['Cut', 'Copy', 'Paste', 'Bold', 'Italic', 'NumberedList', 'BulletedList', 'Link', 'Unlink', 'About', 'Link', 'Unlink', 'Image']
      ];

    // OPTIMIZED
    this.ckeConfig.toolbar_Optimized = [
      {
        name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat', 'TextColor', 'BGColor', 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote',
          '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', 'Styles', 'Font', 'FontSize',]
      },
    ]

    // REMOVE
    // removeButtons = [ 
    //   {'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Maximize,ShowBlocks,About'
    //   },
    // ]

  }

}

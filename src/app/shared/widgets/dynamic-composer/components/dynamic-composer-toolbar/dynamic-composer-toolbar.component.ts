import { DOCUMENT } from '@angular/common';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomClass } from '../../config';
import { DynamicComposerService, UploadResponse } from '../../services/dynamic-composer.service';
import { SelectOption } from '../ae-select/ae-select.component';

@Component({
  selector: 'app-dynamic-composer-toolbar',
  templateUrl: './dynamic-composer-toolbar.component.html',
  styleUrls: ['./dynamic-composer-toolbar.component.scss']
})
export class DynamicComposerToolbarComponent implements OnInit {
  htmlMode = false;
  linkSelected = false;
  block = 'default';
  fontName = 'Times New Roman';
  fontSize = '3';
  foreColour;
  backColor;

  headings: SelectOption[] = [
    {
      label: 'Heading 1',
      value: 'h1',
    },
    {
      label: 'Heading 2',
      value: 'h2',
    },
    {
      label: 'Heading 3',
      value: 'h3',
    },
    {
      label: 'Heading 4',
      value: 'h4',
    },
    {
      label: 'Heading 5',
      value: 'h5',
    },
    {
      label: 'Heading 6',
      value: 'h6',
    },
    {
      label: 'Heading 7',
      value: 'h7',
    },
    {
      label: 'Paragraph',
      value: 'p',
    },
    {
      label: 'Predefined',
      value: 'pre'
    },
    {
      label: 'Standard',
      value: 'div'
    },
    {
      label: 'default',
      value: 'default'
    }
  ];

  fontSizes: SelectOption[] = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
    {
      label: '3',
      value: '3',
    },
    {
      label: '4',
      value: '4',
    },
    {
      label: '5',
      value: '5',
    },
    {
      label: '6',
      value: '6',
    },
    {
      label: '7',
      value: '7',
    }
  ];

  customClassId = '-1';
  // tslint:disable-next-line:variable-name
  _customClasses: CustomClass[];
  customClassList: SelectOption[] = [{ label: '', value: '' }];
  // uploadUrl: string;

  tagMap = {
    BLOCKQUOTE: 'indent',
    A: 'link'
  };

  select = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'PRE', 'DIV'];

  buttons = ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'justifyLeft', 'justifyCenter',
    'justifyRight', 'justifyFull', 'indent', 'outdent', 'insertUnorderedList', 'insertOrderedList', 'link'];

  @Input() id: string;
  @Input() uploadUrl: string;
  @Input() upload: (file: File) => Observable<HttpEvent<UploadResponse>>;
  @Input() showToolbar: boolean;
  @Input() fonts: SelectOption[] = [{ label: '', value: '' }];

  @Input()
  set customClasses(classes: CustomClass[]) {
    if (classes) {
      this._customClasses = classes;
      this.customClassList = this._customClasses.map((x, i) => ({ label: x.name, value: i.toString() }));
      this.customClassList.unshift({ label: 'Clear Class', value: '-1' });
    }
  }

  @Input()
  set defaultFontName(value: string) {
    if (value) {
      this.fontName = value;
    }
  }

  @Input()
  set defaultFontSize(value: string) {
    if (value) {
      this.fontSize = value;
    }
  }

  @Input() hiddenButtons: string[][];

  @Output() execute: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('fileInput', { static: true }) myInputFile: ElementRef;

  public get isLinkButtonDisabled(): boolean {
    return this.htmlMode || !Boolean(this.editorService.selectedText);
  }

  constructor(
    private r: Renderer2,
    private editorService: DynamicComposerService,
    private er: ElementRef,
    @Inject(DOCUMENT) private doc: any
  ) {
  }

  ngOnInit() { }

  /**
   * Trigger command from editor header buttons
   * @param command string from toolbar buttons
   */
  triggerCommand(command: string) {
    this.execute.emit(command);
  }

  /**
   * highlight editor buttons when cursor moved or positioning
   */
  triggerButtons() {
    if (!this.showToolbar) {
      return;
    }
    this.buttons.forEach(e => {
      console.log('event', e)
      const result = this.doc.queryCommandState(e);
      console.log('result', result)
      const elementById = this.doc.getElementById(e + '-' + this.id);
      console.log('elementById', elementById)
      console.log('this.r 1', this.r)
      if (result) {
        this.r.addClass(elementById, 'active');
      } else {
        this.r.removeClass(elementById, 'active');
      }
      console.log('this.r 2', this.r)
    });
  }

  /**
   * trigger highlight editor buttons when cursor moved or positioning in block
   */
  triggerBlocks(nodes: Node[]) {
    if (!this.showToolbar) {
      return;
    }
    this.linkSelected = nodes.findIndex(x => x.nodeName === 'A') > -1;
    let found = false;
    this.select.forEach(y => {
      const node = nodes.find(x => x.nodeName === y);
      if (node !== undefined && y === node.nodeName) {
        if (found === false) {
          this.block = node.nodeName.toLowerCase();
          found = true;
        }
      } else if (found === false) {
        this.block = 'default';
      }
    });

    found = false;
    if (this._customClasses) {
      this._customClasses.forEach((y, index) => {
        const node = nodes.find(x => {
          if (x instanceof Element) {
            return x.className === y.class;
          }
        });
        if (node !== undefined) {
          if (found === false) {
            this.customClassId = index.toString();
            found = true;
          }
        } else if (found === false) {
          this.customClassId = '-1';
        }
      });
    }

    Object.keys(this.tagMap).map(e => {
      const elementById = this.doc.getElementById(this.tagMap[e] + '-' + this.id);
      const node = nodes.find(x => x.nodeName === e);
      if (node !== undefined && e === node.nodeName) {
        this.r.addClass(elementById, 'active');
      } else {
        this.r.removeClass(elementById, 'active');
      }
    });

    this.foreColour = this.doc.queryCommandValue('ForeColor');
    this.fontSize = this.doc.queryCommandValue('FontSize');
    this.fontName = this.doc.queryCommandValue('FontName').replace(/"/g, '');
    this.backColor = this.doc.queryCommandValue('backColor');
  }

  /**
   * insert URL link
   */
  insertUrl() {
    let url = 'https:\/\/';
    const selection = this.editorService.savedSelection;
    if (selection && selection.commonAncestorContainer.parentElement.nodeName === 'A') {
      const parent = selection.commonAncestorContainer.parentElement as HTMLAnchorElement;
      if (parent.href !== '') {
        url = parent.href;
      }
    }
    url = prompt('Insert URL link', url);
    if (url && url !== '' && url !== 'https://') {
      this.editorService.createLink(url);
    }
  }

  /**
   * insert Video link
   */
  insertVideo() {
    this.execute.emit('');
    const url = prompt('Insert Video link', `https://`);
    if (url && url !== '' && url !== `https://`) {
      this.editorService.insertVideo(url);
    }
  }

  /** insert color */
  insertColor(color: string, where: string) {
    this.editorService.insertColor(color, where);
    this.execute.emit('');
  }

  /**
   * set font Name/family
   * @param foreColor string
   */
  setFontName(foreColor: string): void {
    this.editorService.setFontName(foreColor);
    this.execute.emit('');
  }

  /**
   * set font Size
   * @param fontSize string
   */
  setFontSize(fontSize: string): void {
    this.editorService.setFontSize(fontSize);
    this.execute.emit('');
  }

  /**
   * toggle editor mode (WYSIWYG or SOURCE)
   * @param m boolean
   */
  setEditorMode(m: boolean) {
    const toggleEditorModeButton = this.doc.getElementById('toggleEditorMode' + '-' + this.id);
    if (m) {
      this.r.addClass(toggleEditorModeButton, 'active');
    } else {
      this.r.removeClass(toggleEditorModeButton, 'active');
    }
    this.htmlMode = m;
  }

  /**
   * Upload image when file is selected.
   */
  onFileChanged(event) {
    const file = event.target.files[0];
    if (file.type.includes('image/')) {
      if (this.upload) {
        this.upload(file).subscribe(() => this.watchUploadImage);
      } else if (this.uploadUrl) {
        this.editorService.uploadImage(file).subscribe(() => this.watchUploadImage);
      } else {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
          const fr = e.currentTarget as FileReader;
          this.editorService.insertImage(fr.result.toString());
        };
        reader.readAsDataURL(file);
      }
    }
  }

  watchUploadImage(response: HttpResponse<{ imageUrl: string }>, event) {
    const { imageUrl } = response.body;
    this.editorService.insertImage(imageUrl);
    event.srcElement.value = null;
  }

  /**
   * Set custom class
   */
  setCustomClass(classId: string) {
    if (classId === '-1') {
      this.execute.emit('clear');
    } else {
      this.editorService.createCustomClass(this._customClasses[+classId]);
    }
  }

  isButtonHidden(name: string): boolean {
    if (!name) {
      return false;
    }
    if (!(this.hiddenButtons instanceof Array)) {
      return false;
    }
    let result: any;
    for (const arr of this.hiddenButtons) {
      if (arr instanceof Array) {
        result = arr.find(item => item === name);
      }
      if (result) {
        break;
      }
    }
    return result !== undefined;
  }

  focus() {
    this.execute.emit('focus');
    console.log('focused');
  }
}

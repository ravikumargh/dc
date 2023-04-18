import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'circular', name: 'Circular', type: 'link', icon: 'av_timer' },
  { state: '', name: 'Aadhaar Enrolment  Centres', type: 'link', icon: '' },
  { state: '', name: 'ADC (IB/MB/DC)', type: 'link', icon: '' },
  { state: '', name: 'Additional links', type: 'link', icon: '' },
  { state: '', name: 'Appln/Mandate Forms', type: 'link', icon: '' },
  { state: '', name: 'Bank policies', type: 'link', icon: '' },
  { state: '', name: 'Contaact Centre FAQ', type: 'link', icon: '' },
  { state: '', name: 'DCOE contacts for Digi Loan', type: 'link', icon: '' },
  { state: '', name: 'e-Help Desk', type: 'link', icon: '' },
  { state: '', name: 'e Mail', type: 'link', icon: '' },
  { state: '', name: 'Far', type: 'link', icon: '' },
  { state: '', name: 'Fold', type: 'link', icon: '' },
  { state: '', name: 'Head Office Contacts', type: 'link', icon: '' },
  
  // { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
  // { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
  // { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
  // { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
  // { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
  // { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
  // {
  //   state: 'expansion',
  //   type: 'link',
  //   name: 'Expansion Panel',
  //   icon: 'vertical_align_center'
  // },
  // { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
  // { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
  // {
  //   state: 'progress-snipper',
  //   type: 'link',
  //   name: 'Progress snipper',
  //   icon: 'border_horizontal'
  // },
  // {
  //   state: 'progress',
  //   type: 'link',
  //   name: 'Progress Bar',
  //   icon: 'blur_circular'
  // },
  // {
  //   state: 'dialog',
  //   type: 'link',
  //   name: 'Dialog',
  //   icon: 'assignment_turned_in'
  // },
  // { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
  // { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
  // { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
  // {
  //   state: 'slide-toggle',
  //   type: 'link',
  //   name: 'Slide Toggle',
  //   icon: 'all_inclusive'
  // }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}

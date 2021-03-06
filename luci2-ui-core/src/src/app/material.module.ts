/*!
 * Copyright (c) 2017 Adrian Panella <ianchi74@outlook.com>, contributors.
 * Licensed under the MIT license.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

/**
 * Helper module to import all material components
 */
@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,

    MatAutocompleteModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatCardModule

  ],
  declarations: [],
  exports: [
    CommonModule,
    LayoutModule,
    FormsModule,

    MatAutocompleteModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatCardModule
  ]
})
export class MaterialModule { }

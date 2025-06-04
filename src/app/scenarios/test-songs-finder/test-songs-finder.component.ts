import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TestSongsFinderService } from './services/test-songs-finder.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatList, MatListItem, MatListItemLine, MatListItemTitle } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { debounceTime,switchMap,map,tap } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'zh-test-test-songs-finder',
  standalone: true,
  imports: [MatFormField, MatLabel, MatInput, ReactiveFormsModule, MatList, MatListItem, MatListItemTitle, MatListItemLine, MatIcon, AsyncPipe],
  templateUrl: './test-songs-finder.component.html',
  styleUrl: './test-songs-finder.component.scss',
})
export class TestSongsFinderComponent {
  #destroyRef =  inject(DestroyRef);
  #testSongsFinderService =  inject(TestSongsFinderService);
  searchForm = new FormGroup({
      song: new FormControl('', Validators.required),
    });
  songs$ = this.searchForm.get('song')?.valueChanges.pipe(
    debounceTime(500),
    switchMap((term)=> this.#testSongsFinderService.searchSongs(term).pipe(
      map((results)=>results.results ),
      tap(()=>this.totalSearches += 1))
    )
  );
  totalSearches: number = 0;
  costPerSearch: number = this.#testSongsFinderService.costPerSearch;

}

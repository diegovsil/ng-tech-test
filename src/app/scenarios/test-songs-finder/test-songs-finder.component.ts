import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TestSongsFinderService } from './services/test-songs-finder.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatList, MatListItem, MatListItemLine, MatListItemTitle } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'zh-test-test-songs-finder',
  standalone: true,
  imports: [MatFormField, MatLabel, MatInput, ReactiveFormsModule, MatList, MatListItem, MatListItemTitle, MatListItemLine, MatIcon],
  templateUrl: './test-songs-finder.component.html',
  styleUrl: './test-songs-finder.component.scss',
})
export class TestSongsFinderComponent implements OnInit {
  private destroyRef =  inject(DestroyRef);
  searchForm: FormGroup;
  songs: any[];
  totalSearches: number = 0;
  costPerSearch: number;
  constructor(private testSongsFinderService: TestSongsFinderService) {
    this.searchForm = new FormGroup({
      song: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.costPerSearch = this.testSongsFinderService.costPerSearch;
   /*  this.searchForm.get('song')?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      this.searchSongs(value);
    }); */
  }

  searchSongs(term: string) {
    this.testSongsFinderService.searchSongs(term).subscribe((results) => {
      this.songs = results.results;
      this.totalSearches += 1;
    });
  }

  onSubmit(): void {
    const valorCampo: string = this.searchForm.get('song')?.value;
    if(valorCampo.trim()) {
     this.searchSongs(valorCampo) ;
    }
  }
}

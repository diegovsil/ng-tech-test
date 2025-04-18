import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestSongsFinderService {
  constructor(private http: HttpClient) {}

  searchSongs(
    query: string,
  ): Observable<{ resultCount: number; results: Array<{ trackName: string; artistName: string; trackId: number }> }> {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=5`;
    return this.http.get<any>(url);
  }

  readonly costPerSearch = 1;
}

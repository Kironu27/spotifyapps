import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  getHeader(query: string) {
    const url = 'https://api.spotify.com/v1/' + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      // tslint:disable-next-line: max-line-length
      "Bearer BQCVptil4i79xOgHc3zaL1YFX7Nf6-BkudpRHQZvZKBuBzQfHE5RADKH2LH15VPOL_P4NRGvlrNvD4oUt-0fSL7nTk4JjqTPD8WFNZQem-yPHtVVBgn8sRcv94TnoT_WQy-WrZ7YJzUCE7TV3J8FNHXViWZiHqdPveeDfXqiKcjh7FW4H2xnv3RPwrYBRVsZflJc"
      );
    return this._http.get(url, { headers });
  }
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
    const query = 'search?query=' + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) : any{
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}

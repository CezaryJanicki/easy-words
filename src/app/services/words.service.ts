import { Injectable } from '@angular/core';
import {WordType} from '../data/models';
import {WORDS} from '../data/data-base';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private words: WordType[] = [];
  private nouns: WordType[] = [];
  private verbs: WordType[] = [];

  constructor() {
    this.words = WORDS;
  }

  getWords(): WordType[] {
    return this.words;
  }
  getNouns(): WordType[] {
    return this.nouns;
  }
  getVerbs(): WordType[] {
    return this.verbs;
  }
}

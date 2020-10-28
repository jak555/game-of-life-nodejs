import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    expect(new GameService()).toBeTruthy(); 
  });
  it('should create new game', () => {
    let game = new GameService();
    game.createGame(5,5);
    expect(game.getBoard().length).toBe(5); 
  });
  it('should change stage', () => {
    let game = new GameService();
    game.createGame(5,5);
    let oldGeneration = JSON.stringify(game.getBoard());
    game.nextRun();
    expect(oldGeneration === JSON.stringify(game.getBoard())).toBeFalsy(); 
  });
});

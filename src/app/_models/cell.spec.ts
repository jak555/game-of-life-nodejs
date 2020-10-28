import { Cell } from './cell';

describe('Cell', () => {
  it('should create an instance', () => {
    expect(new Cell(0, 0)).toBeTruthy();
  });
  it('should be able to access row', () => {
    let cell = new Cell(0,0);
    expect(cell.row).toBeDefined();
  });
  it('should be able to access column', () => {
    let cell = new Cell(0,0);
    expect(cell.column).toBeDefined();
  });
  it('should be able to check if alive', () => {
    let cell = new Cell(0,0);
    expect(cell.isAlive()).toBeFalsy();
  });
  it('should be able to change state', () => {
    let cell = new Cell(0,0);
    let oldState = cell.isAlive();
    cell.changeState();
    expect(cell.isAlive() != oldState).toBeTruthy();
  });
  it('should die', () => {
    let cell = new Cell(0,0);
    cell.changeState();
    cell.kill()
    expect(cell.isAlive()).toBeFalsy();
  });
});

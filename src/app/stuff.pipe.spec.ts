import { createPipeFactory, SpectatorPipe } from '@ngneat/spectator';

import { StuffPipe } from './stuff.pipe';

describe('StuffPipe ', () => {
  let spectator: SpectatorPipe<StuffPipe>;
  const createPipe = createPipeFactory(StuffPipe);

  it('should change the background color', () => {
    spectator = createPipe(`<div>{{ 'Testing' | stuff }}</div>`);

    expect(spectator.element).toHaveText('Testing');
  });
});

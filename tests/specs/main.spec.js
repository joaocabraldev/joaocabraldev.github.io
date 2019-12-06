/* global describe, it */

import {context} from '../data/data';
import assert from 'assert';

import MainPage from '../pages/main.page';

describe('Página Principal', () => {
  const {data} = context;

  before(() => {
    MainPage.open();
  });

  it('Deve ter título correto', () => {
    assert.strictEqual(MainPage.getTitle(), data.index.title);
  });

  it('Deve ter header correto', () => {
    assert.strictEqual(MainPage.h1Header.getText(), data.index.header);
  });

  it('Deve ter lead correto', () => {
    assert.strictEqual(MainPage.pLead.getText(), data.index.lead);
  });

  it('Deve ter descrição correta', () => {
    assert.strictEqual(MainPage.pDescription.getText(), data.index.description);
  });
});

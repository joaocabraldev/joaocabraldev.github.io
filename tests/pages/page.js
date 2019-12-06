/* global browser */

/**
 * Classe de Página padrão
 */
export default class Page {
  /**
   * Construtor padrão de Página.
   */
  constructor() {}

  /**
   * Navega com o browser para URL informada.
   * @param {string} path Caminho a ser navegado.
   */
  open(path) {
    browser.url(path);
  }

  /**
   * Obtém o titulo do Browser.
   * @return {string} Título do Browser.
   */
  getTitle() {
    return browser.getTitle();
  }
}

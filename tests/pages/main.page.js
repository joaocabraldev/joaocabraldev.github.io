/* global $ */

import Page from './page';

/**
 * Página Principal.
 */
class MainPage extends Page {
  /**
   * Obtém o link de navegação.
   */
  get navButton() {
    return $('//*[@id="nav-button"]');
  }

  /**
   * Obtém o link da página inicial.
   */
  get navHome() {
    return $('//*[@id="nav-home"]');
  }

  /**
   * Obtém o link de projetos.
   */
  get navProjetos() {
    return $('//*[@id="nav-pojetos"]');
  }

  /**
   * Obtém o link da página de protótipos.
   */
  get navPrototipo() {
    return $('//*[@id="nav-prototipo"]');
  }

  /**
   * Obtém o link da página de calculadora
   */
  get navCalculadora() {
    return $('//*[@id="nav-calculadora"]');
  }

  /**
   * Obtém o cabeçalho
   */
  get h1Header() {
    return $('//*[@id="header"]');
  }

  /**
   * Obtém o parágrafo principal
   */
  get pLead() {
    return $('//*[@id="lead"]');
  }

  /**
   * Obtém o parágrafo de descrição
   */
  get pDescription() {
    return $('//*[@id="description"]');
  }

  /**
   * Obtém o título da página.
   * @return {string} Título da Página.
   */
  getTitle() {
    return super.getTitle();
  }

  /**
   * Abre a página no navegador.
   */
  open() {
    super.open('/');
  }
}

export default new MainPage();

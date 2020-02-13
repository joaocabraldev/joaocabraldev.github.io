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
   * Obtém o txtID
   */
  get txtID() {
    return $('//*[@id="txtID"]');
  }

  /**
   * Obtém o txtCodMun
   */
  get txtCodMun() {
    return $('//*[@id="txtCodMun"]');
  }

  /**
   * Obtém o txtSIAFI
   */
  get txtSIAFI() {
    return $('//*[@id="txtSIAFI"]');
  }

  /**
   * Obtém o txtNome
   */
  get txtNome() {
    return $('//*[@id="txtNome"]');
  }

  /**
   * Obtém o txtUFId
   */
  get txtUFId() {
    return $('//*[@id="txtUFId"]');
  }

  /**
   * Obtém o btnSearch
   */
  get btnSearch() {
    return $('//*[@id="btnSearch"]');
  }

  /**
   * Obtém o txtUFNome
   */
  get txtUFNome() {
    return $('//*[@id="txtUFNome"]');
  }

  /**
   * Obtém o selectSituacao
   */
  get selectSituacao() {
    return $('//*[@id="selectSituacao"]');
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
    super.open('/prototipo_modal.html');
  }
}

export default new MainPage();

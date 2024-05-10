/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import blurActiveElement from '../helpers/dom/blurActiveElement';
import loadFonts from '../helpers/dom/loadFonts';
import I18n from '../lib/langPack';
import rootScope from '../lib/rootScope';
import Page from './page';

const onFirstMount = () => {
  rootScope.managers.appStateManager.pushToState('authState', {_: 'authStateSignedIn'});
  // ! TOO SLOW
  /* appStateManager.saveState(); */

  if(!I18n.requestedServerLanguage) {
    I18n.getCacheLangPack().then((langPack) => {
      if(langPack.local) {
        I18n.getLangPack(langPack.lang_code);
      }
    });
  }

  page.pageEl.style.display = '';

  blurActiveElement();

  return Promise.all([
    import('../lib/appManagers/appDialogsManager'),
    import('../components/telegramMini/airdrop'),
    import('../components/telegramMini/dashboard'),
    loadFonts()/* .then(() => new Promise((resolve) => window.requestAnimationFrame(resolve))) */,
    'requestVideoFrameCallback' in HTMLVideoElement.prototype ? Promise.resolve() : import('../helpers/dom/requestVideoFrameCallbackPolyfill')
  ]).then(([appDialogsManager, airdropManager, dashboard]) => {
    appDialogsManager.default.start(); // 여기서 마운트되면 로딩하는듯
    airdropManager.default.init();
    // dashboard.default.init();

    setTimeout(() => {
      document.getElementById('auth-pages').remove();
    }, 1e3);
  });
};

const page = new Page('page-chats', false, onFirstMount);
export default page;

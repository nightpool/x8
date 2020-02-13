const {getURL} = browser.runtime;

browser.storage.local.get('enabledScripts').then(({enabledScripts}) => {
  enabledScripts.forEach(name => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = getURL(`src/${name}.js`);

    document.documentElement.appendChild(script);
    script.parentNode.removeChild(script);
  });
});

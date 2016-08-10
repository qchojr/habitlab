

  window.Polymer = {
    Settings: (function() {
      // NOTE: Users must currently opt into using ShadowDOM. They do so by doing:
      // Polymer = {dom: 'shadow'};
      // TODO(sorvell): Decide if this should be auto-use when available.
      // TODO(sorvell): if SD is auto-use, then the flag above should be something
      // like: Polymer = {dom: 'shady'}

      // via Polymer object
      var settings = window.Polymer || {};

      // via url
      if (!settings.noUrlSettings) {
        var parts = location.search.slice(1).split('&');
        for (var i=0, o; (i < parts.length) && (o=parts[i]); i++) {
          o = o.split('=');
          o[0] && (settings[o[0]] = o[1] || true);
        }
      }

      settings.wantShadow = (settings.dom === 'shadow');
      settings.hasShadow = Boolean(Element.prototype.createShadowRoot);
      settings.nativeShadow = settings.hasShadow && !window.ShadowDOMPolyfill;
      settings.useShadow = settings.wantShadow && settings.hasShadow;

      settings.hasNativeImports =
        Boolean('import' in document.createElement('link'));
      settings.useNativeImports = settings.hasNativeImports;

      settings.useNativeCustomElements = (!window.CustomElements ||
        window.CustomElements.useNative);

      settings.useNativeShadow = settings.useShadow && settings.nativeShadow;

      settings.usePolyfillProto = !settings.useNativeCustomElements &&
        !Object.__proto__;

      // chrome 49 has semi-working css vars, check if box-shadow works
      // safari 9.1 has a recalc bug: https://bugs.webkit.org/show_bug.cgi?id=155782
      settings.hasNativeCSSProperties =
        (!navigator.userAgent.match('AppleWebKit/601') && window.CSS
        && CSS.supports && CSS.supports('box-shadow', '0 0 0 var(--foo)'));

      settings.useNativeCSSProperties = settings.hasNativeCSSProperties &&
        settings.lazyRegister && settings.useNativeCSSProperties;

      return settings;
    })()
  };



  Polymer.Base._addFeature({

    /**
     * Rewrites a given URL relative to the original location of the document
     * containing the `dom-module` for this element.  This method will return
     * the same URL before and after vulcanization.
     *
     * @method resolveUrl
     * @param {string} url URL to resolve.
     * @return {string} Rewritten URL relative to the import
     */
    resolveUrl: function(url) {
      // TODO(sorvell): do we want to put the module reference on the prototype?
      var module = Polymer.DomModule.import(this.is);
      var root = '';
      if (module) {
        var assetPath = module.getAttribute('assetpath') || '';
        root = Polymer.ResolveUrl.resolveUrl(assetPath, module.ownerDocument.baseURI);
      }
      return Polymer.ResolveUrl.resolveUrl(url, root);
    }

  });

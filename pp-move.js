/* Pure Prep has moved to https://app.pureprep.app.
 * Redirect helper for the old GitHub Pages addresses (leyuh.github.io/pure-prep/ and
 * /pure-prep-redesign/). If this browser has a Pure Prep save on leyuh.github.io, it is passed
 * along in the URL fragment (#pp-import=<base64url JSON>), which is never sent to any server;
 * app.pureprep.app imports it only when it has no data of its own yet. No app code lives here. */
(function () {
  "use strict";
  var APP = "https://app.pureprep.app/";
  var KEYS = ["purePrepStateV2", "purePrepState"];
  var MAX = 1500000; // keep the URL well under browser limits; bigger saves just redirect plainly
  function b64url(str) {
    var bytes = new TextEncoder().encode(str), bin = "";
    for (var i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  function target() {
    try {
      var data = {}, any = false;
      for (var i = 0; i < KEYS.length; i++) {
        var v = localStorage.getItem(KEYS[i]);
        if (v) { data[KEYS[i]] = v; any = true; }
      }
      if (!any) return APP;
      var payload = b64url(JSON.stringify(data));
      return payload.length <= MAX ? APP + "#pp-import=" + payload : APP;
    } catch (e) {
      return APP;
    }
  }
  window.ppMoveTarget = target;
  location.replace(target());
})();

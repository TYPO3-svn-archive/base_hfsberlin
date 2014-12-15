config {
  admPanel        = 1

  baseURL         = {$base_batberlin.htmlhead.base_href}
  extTarget       = _blank

  headerComment (
        TYPO3-Programmierung und Hosting: die-netzmacher.de
)

  language        = de
  locale_all = de_DE
  metaCharset     = UTF-8
  doctype         = html5
  xmlprologue     = none
  xhtml_cleaning  = all
  htmlTag_langKey = de

  spamProtectEmailAddresses               = 6
  spamProtectEmailAddresses_atSubst       = <span style="display:none;">spamfilter</span><span class="dummy">@</span>
  spamProtectEmailAddresses_lastDotSubst  = <span style="display:none;">spamfilter</span><span class="dummy">.</span>

  tx_realurl_enable = 1

}
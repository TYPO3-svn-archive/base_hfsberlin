plugin.tx_browser_pi1 {
  views {
    list {
      401 {
        tx_org_news {
          title {
            10 {
              31 = COA
              31 {
                10 = TEXT
                10 {
                  value   = News from
                  lang.de = Nachricht vom
                }
                20 = TEXT
                20 {
                  value       = ###TX_ORG_NEWS.DATETIME###
                  strftime    = %d. %B
                  noTrimWrap  = | ||
                }
                wrap = <div class="hfsnewsdate">|</div>
              }
              // #i0003, dwildt, 1-: wrap = <div class="columns small-10 medium-10 large-7">|</div>
            }
            20 {
              // #i0003, dwildt, 1-: wrap = <div class="show-for-large-up columns small-10 medium-10 large-3">|</div>
            }
          }
        }
      }
    }
  }
}


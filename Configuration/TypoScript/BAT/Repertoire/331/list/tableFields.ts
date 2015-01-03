lib.org_repertoire.title < plugin.tx_browser_pi1.views.list.331.tx_org_repertoire.title.10.20.20.default

plugin.tx_browser_pi1 {
  views {
    list {
      331 {
        tx_org_repertoire {
          title {
            10 {
              20 {
                20 >
                20 = COA
                20 {
                  10 < lib.org_repertoire.title
                  10 {
                    stdWrap.crop >
                    wrap >
                  }
                  20 = TEXT
                  20 {
                    required = 1
                    field = tx_org_repertoire.producer
                    noTrimWrap = | <span class="orange_bold">|</span>|
                  }
                  wrap = <div class="cal_title">|</div>
                }
              }
            }
          }
        }
      }
    }
  }
}
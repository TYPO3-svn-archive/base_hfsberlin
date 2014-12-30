plugin.tx_browser_pi1 {
  views {
    list {
      201 {
        tx_org_cal {
          crdate >
          deleted >
          title {
            10 {
                // datetime, caltype
              19 = COA
              19 {
                  // datetime
                10 = TEXT
                10 {
                  field     = tx_org_cal.datetime
                  strftime  = %A, %d. %B, %H:%M Uhr
                }
                  // caltype
                20 = TEXT
                20 {
                  required    = 1
                  noTrimWrap  = | - ||
                  field       = tx_org_caltype.title
                }
                wrap = <div class="cal_datetime">|</div>
              }
                // image
              39 >
              40.tx_org_repertoire.10.field := prependString(tx_org_cal.marginal_title // tx_org_repertoire.teaser_short // tx_org_repertoire.bodytext // )
              XXXwrap = <div class="columns small-10 medium-10 large-8">|</div>
            }
            XXX20 {
              wrap = <div class="columns small-10 medium-10 large-2">|</div>
            }
          }
        }
      }
    }
  }
}


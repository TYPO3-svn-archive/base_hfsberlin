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
              wrap = <div class="columns small-12 medium-12 large-10">|</div>
            }
            20 {
              wrap = <div class="columns small-12 medium-12 large-2">|</div>
            }
          }
        }
      }
    }
  }
}
plugin.tx_browser_pi1 {
  views {
    single {
      201 {
        tx_org_cal {
          title {
            20 {
              0 {
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
                  30 = COA
                  30 {
                    field >
                    required >
                    10 = TEXT
                    10 {
                      field = tx_org_repertoire.bodytext // tx_org_event.bodytext // tx_org_cal.bodytext
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
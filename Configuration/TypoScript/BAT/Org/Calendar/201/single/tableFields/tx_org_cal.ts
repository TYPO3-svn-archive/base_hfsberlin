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
                  20 >
                  20 = COA
                  20 {
                    10 = TEXT
                    10 {
                      field = tx_org_repertoire.title // tx_org_event.title // tx_org_cal.title
                    }
                    20 = TEXT
                    20 {
                      required = 1
                      field = tx_org_repertoire.producer
                      noTrimWrap = | <span class="orange_bold">|</span>|
                    }
                    wrap = <h1>|</h1>
                  }
                  30 = COA
                  30 {
                    field >
                    required >
                    if {
                      isTrue {
                        field = tx_org_repertoire.staff // tx_org_repertoire.bodytext // tx_org_event.bodytext // tx_org_cal.bodytext
                      }
                    }
                    10 = TEXT
                    10 {
                      field = tx_org_repertoire.staff
                      required = 1
                      noTrimWrap = |<strong>|</strong> |
                    }
                    20 = TEXT
                    20 {
                      field = tx_org_repertoire.bodytext // tx_org_event.bodytext // tx_org_cal.bodytext
                    }
                  }
                }
              }
              1 {
                10 < plugin.tx_browser_pi1.views.single.201.tx_org_cal.title.20.0.10
              }
              2 {
                10 < plugin.tx_browser_pi1.views.single.201.tx_org_cal.title.20.0.10
              }
              8 {
                10 < plugin.tx_browser_pi1.views.single.201.tx_org_cal.title.20.0.10
              }
              9 {
                10 < plugin.tx_browser_pi1.views.single.201.tx_org_cal.title.20.0.10
              }
              10 {
                10 < plugin.tx_browser_pi1.views.single.201.tx_org_cal.title.20.0.10
              }
              17 {
                10 < plugin.tx_browser_pi1.views.single.201.tx_org_cal.title.20.0.10
              }
              18 {
                10 < plugin.tx_browser_pi1.views.single.201.tx_org_cal.title.20.0.10
              }
              25 {
                10 < plugin.tx_browser_pi1.views.single.201.tx_org_cal.title.20.0.10
              }
              26 {
                10 < plugin.tx_browser_pi1.views.single.201.tx_org_cal.title.20.0.10
              }
            }
          }
        }
      }
    }
  }
}
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
              20 {
                  // link to tx_org_repertoire
                tx_org_repertoire >
                tx_org_repertoire = COA
                tx_org_repertoire {
                  10 < plugin.tx_browser_pi1.views.list.201.tx_org_cal.title.10.20.default
                  10 {
                    stdWrap.crop >
                    wrap >
                  }
                  20 = TEXT
                  20 {
                    required = 1
                    field = tx_org_repertoire.producer
                    noTrimWrap = | <span class="orange_bold">|</span>|s
                  }
                  wrap = <div class="cal_title">|</div>
                }
              }
                // image
              39 >
              40.tx_org_repertoire.10.field := prependString(tx_org_cal.marginal_title // tx_org_repertoire.teaser_short // tx_org_repertoire.bodytext // )
            }
            20 {
              10 {
                10 {
                  30 {
                    default {
                      strftime = %b
                    }
                    notype {
                      strftime = %b
                    }
                    page {
                      strftime = %b
                    }
                    tx_org_event {
                      strftime = %b
                    }
                    url {
                      strftime = %b
                    }
                  }
                }
                20 {
                  30 {
                    default {
                      strftime = %b
                    }
                    notype {
                      strftime = %b
                    }
                    page {
                      strftime = %b
                    }
                    tx_org_event {
                      strftime = %b
                    }
                    url {
                      strftime = %b
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


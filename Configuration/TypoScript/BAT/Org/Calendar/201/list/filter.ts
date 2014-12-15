plugin.tx_browser_pi1 {
  views {
    list {
      201 {
        filter >
        filter {
          tx_org_cal {
            datetime < plugin.tx_browser_pi1.displayList.master_templates.category_menu
            datetime {
              first_item {
                cObject {
                  20 {
                    data = LLL:EXT:org/locallang_db.xml:filter_phrase.schedule
                  }
                }
              }
              wrap = <span class="category_menu">|</span>
              order.field = uid
              area < plugin.tx_browser_pi1.displayList.master_templates.areas.sample_period
              area {
                interval {
                  case = month
                  month {
                    times_stdWrap {
                      value = 3
                    }
                    value_stdWrap {
                      // %B: full name of the month
                      strftime = %B
                    }
                  }
                }
              }
            }
            title < plugin.tx_browser_pi1.displayList.master_templates.selectbox
            title {
              first_item {
                cObject {
                  20 {
                    data >
                    value = All Events
                    lang {
                      de = Alle Veranstaltungen
                      en = All Events
                    }
                    append >
                  }
                }
              }
              wrap = <div class="selectbox">|</div>
              wrap {
                item {
                  cObject {
                    20 {
                      crop = 30 | ... | 1
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
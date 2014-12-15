plugin.tx_browser_pi1 {
  XXXviews {
    list {
      201 {
          // crdate, deleted, title
        tx_org_cal =
        tx_org_cal {
            // placeholder: radialsearch HTML class depending on radius
          crdate < plugin.tx_radialsearch.masterTemplates.htmlClass
            // placeholder: radialsearch linear distance
          deleted < plugin.tx_radialsearch.masterTemplates.linearDistanceString
            // content, margin
          title = COA
          title {
              // content: bookmarks, title, tx_org_caltype.title, teaser_short, location
            10 = COA
            10 {
                // socialmedia_bookmarks
              10 = TEXT
              10 {
                value = ###SOCIALMEDIA_BOOKMARKS###
                wrap = <div style="float:right;">|</div>
              }
                // title: default, notype, page, url, tx_org_event
              20 < plugin.tx_browser_pi1.displayList.master_templates.tableFields.header.0
              20 {
                  // link to tx_org_event
                tx_org_event < .default
              }
                // tx_org_caltype.title
              30 = COA
              30 {
                if {
                  isTrue {
                    field = tx_org_caltype.title
                  }
                }
                wrap = <p class="tx_org_caltype">|</p>
                  // label
                10 = TEXT
                10 {
                  data = LLL:EXT:org/locallang_db.xml:filter_phrase.caltype.title
                  noTrimWrap = ||: |
                }
                20 = TEXT
                20 {
                  field = tx_org_caltype.title
                }
              }
                // image
              39 = COA
              39 {
                  // image
                10 < plugin.tx_browser_pi1.displayList.master_templates.tableFields.image.0
                10 {
                  tx_org_event < .default
                  tx_org_event {
                    file.import.stdWrap.cObject.10.20.field := prependString(tx_org_event.image // )
                    altText.field := prependString(tx_org_event.imageseo // )
                    title.field := prependString(tx_org_event.imageseo // )
                  }
                }
                wrap = <div style="float:left;padding-right:1em;">|</div>
              }
                // teaser_short: default, notype, page, url, tx_org_event
              40 < plugin.tx_browser_pi1.displayList.master_templates.tableFields.text.0
              40 {
                  // link to tx_org_event
                tx_org_event < .default
              }
                // location
              50 = COA
              50 {
                wrap = <p class="location">|</p>
                required = 1
                10 = TEXT
                10 {
                  field = tx_org_location.title
                  noTrimWrap = || in |
                  required = 1
                }
                20 = TEXT
                20 {
                  field = tx_org_location.mail_postcode
                  noTrimWrap = || |
                  required = 1
                }
                21 = TEXT
                21 {
                  field = tx_org_location.mail_city
                }
              }
              wrap = <div class="columns small-12 medium-12 large-10">|</div>
            }
              // margin: datesheet
            20 = COA
            20 {
              wrap = <div class="columns small-12 medium-12 large-2">|</div>
              10 = COA
              10 {
                if {
                  isTrue {
                    field = tx_org_cal.datetime
                  }
                }
                  // 10: date isn't expired
                10 = COA
                10 {
                  if {
                    value {
                      data = date : U
                    }
                    isGreaterThan {
                      field = tx_org_cal.datetime
                    }
                  }
                  wrap = <ul class="vcard datesheet">|</ul><!-- vcard -->
                    // name of weekday
                  10 < plugin.tx_browser_pi1.displayList.master_templates.tableFields.details.0
                  10 {
                    default {
                      value >
                      lang >
                      field = tx_org_cal.datetime
                      strftime  = %a
                      wrap = <li class="weekday">|</li>
                    }
                    notype {
                      value >
                      lang >
                      field = tx_org_cal.datetime
                      strftime  = %a
                      wrap = <li class="weekday">|</li>
                    }
                    page {
                      value >
                      lang >
                      field = tx_org_cal.datetime
                      strftime  = %a
                      wrap = <li class="weekday">|</li>
                    }
                    tx_org_event < .default
                    url {
                      value >
                      lang >
                      field = tx_org_cal.datetime
                      strftime  = %a
                      wrap = <li class="weekday">|</li>
                    }
                  }
                    // day of month as number
                  20 < .10
                  20 {
                    test = dummy
                    default {
                      strftime  = %d
                      wrap      = <li class="day_of_month">|</li>
                    }
                    notype {
                      strftime  = %d
                      wrap      = <li class="day_of_month">|</li>
                    }
                    page {
                      strftime  = %d
                      wrap      = <li class="day_of_month">|</li>
                    }
                    tx_org_event {
                      strftime  = %d
                      wrap      = <li class="day_of_month">|</li>
                    }
                    url {
                      strftime  = %d
                      wrap      = <li class="day_of_month">|</li>
                    }
                  }
                    // month year
                  30 < .10
                  30 {
                    default {
                      strftime  = %b %y
                      wrap      = <li class="month">|</li>
                    }
                    notype {
                      strftime  = %b %y
                      wrap      = <li class="month">|</li>
                    }
                    page {
                      strftime  = %b %y
                      wrap      = <li class="month">|</li>
                    }
                    tx_org_event {
                      strftime  = %b %y
                      wrap      = <li class="month">|</li>
                    }
                    url {
                      strftime  = %b %y
                      wrap      = <li class="month">|</li>
                    }
                  }
                }
                  // 20: date is expired
                20 < .10
                20 {
                  if {
                    negate = 1
                  }
                  wrap = <ul class="vcard datesheet datesheet_expired">|</ul><!-- vcard -->
                }
              }
            }
            wrap = <div class="row">|</div>
          }
        }
      }
    }
  }
}


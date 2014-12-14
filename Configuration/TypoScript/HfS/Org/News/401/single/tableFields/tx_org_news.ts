plugin.tx_browser_pi1 {
    single {
      401 {
        tx_org_news >
          // 140706: empty statement: for proper comments only
        tx_org_news {
        }
          // title, mail_city
        tx_org_news =
        tx_org_news {
            // title
          title < plugin.tx_browser_pi1.displaySingle.master_templates.tableFields.imageText.0
          title {
            20 {
              0 {
                10 >
                  // header, text, cat
                10 = COA
                10 {
                    // header
                  20 = TEXT
                  20 {
                    field = tx_org_news.title
                    wrap = <h1>|</h1>
                  }
                    // subtitle
                  21 = TEXT
                  21 {
                    field = tx_org_news.subtitle // tx_org_news.teaser_subtitle
                    wrap  = <h2>|</h2>
                    required = 1
                  }
                    // socialbookmarks
                  28 = TEXT
                  28 {
                    value = ###SOCIALMEDIA_BOOKMARKS###
                    wrap = <div class="show-for-medium-up socialbookmarks">|</div>
                  }
                    // bodytext
                  31 = COA
                  31 {
                    10 = TEXT
                    10 {
                      prepend = TEXT
                      prepend {
                        field = tx_org_news.datetime
                        strftime = %d. %b. %Y
                        noTrimWrap = |<span class="date">|</span> &ndash; |
                        required = 1
                      }
                      field = tx_org_news.bodytext // tx_org_news.teaser_short
                    }
                    stdWrap {
                      parseFunc < lib.parseFunc_RTE
                    }
                  }
                }
              }
              1 {
                10 >
                10 < plugin.tx_browser_pi1.views.single.401.tx_org_news.title.20.0.10
              }
              2 {
                10 >
                10 < plugin.tx_browser_pi1.views.single.401.tx_org_news.title.20.0.10
              }
              8 {
                10 >
                10 < plugin.tx_browser_pi1.views.single.401.tx_org_news.title.20.0.10
              }
              9 {
                10 >
                10 < plugin.tx_browser_pi1.views.single.401.tx_org_news.title.20.0.10
              }
              10 {
                10 >
                10 < plugin.tx_browser_pi1.views.single.401.tx_org_news.title.20.0.10
              }
              17 {
                10 >
                10 < plugin.tx_browser_pi1.views.single.401.tx_org_news.title.20.0.10
              }
              18 {
                10 >
                10 < plugin.tx_browser_pi1.views.single.401.tx_org_news.title.20.0.10
              }
              25 {
                10 >
                10 < plugin.tx_browser_pi1.views.single.401.tx_org_news.title.20.0.10
              }
              26 {
                10 >
                10 < plugin.tx_browser_pi1.views.single.401.tx_org_news.title.20.0.10
              }
            }
          }
        }
      }
    }
  }
}
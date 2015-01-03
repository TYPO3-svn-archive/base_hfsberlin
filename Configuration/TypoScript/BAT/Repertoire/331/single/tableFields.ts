lib.org_repertoire.title < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.20
lib.org_repertoire.bodytext < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.30

plugin.tx_browser_pi1 {
  views {
    single {
      331 {
          // 140706: empty statement: for proper comments only
        tx_org_repertoire {
        }
          // title: image, header, bodytext
        tx_org_repertoire =
        tx_org_repertoire {
          title >
          title < plugin.tx_browser_pi1.displaySingle.master_templates.tableFields.imageText.0
          title {
            20 {
              0 {
                20 = COA
                20 {
                  10 < lib.org_repertoire.title
                  10 {
                    stdWrap.crop >
                    //wrap >
                  }
                  20 = TEXT
                  20 {
                    required = 1
                    field = tx_org_repertoire.producer
                    noTrimWrap = | <span class="orange_bold">|</span>|
                  }
                  wrap = <div class="cal_title">|</div>
                }
                  // subtitle
                XXX21 = TEXT
                XXX21 {
                  field = tx_org_repertoire.subtitle // tx_org_repertoire.teaser_subtitle
                  wrap = <h2>|</h2>
                  required = 1
                }
                  // producer
                XXX22 = COA
                XXX22 {
                  10 = TEXT
                  10 {
                    value = By
                    lang {
                      de = Von
                      en = By
                    }
                    noTrimWrap = || |
                  }
                  20 = TEXT
                  20 {
                    field = tx_org_repertoire.producer
                  }
                  if {
                    isTrue {
                      field = tx_org_repertoire.producer
                    }
                  }
                  stdWrap {
                    parseFunc < lib.parseFunc_RTE
                  }
                }
                30 = COA
                30 {
                    // staff
                  10 = TEXT
                  10 {
                    field = tx_org_repertoire.staff
                    required = 1
                    noTrimWrap = || |
                  }
                  20 < lib.org_repertoire.bodytext
                  20 {
                    stdWrap >
                    wrap >
                  }
                  stdWrap {
                    parseFunc < lib.parseFunc_RTE
                  }
                  wrap = <div class="cal_title">|</div>
                }
                  // length
                31 = COA
                31 {
                  10 = TEXT
                  10 {
                    value = Length
                    lang {
                      de = Dauer
                      en = Length
                    }
                    noTrimWrap = ||: |
                  }
                  20 = TEXT
                  20 {
                    field = tx_org_repertoire.length
                  }
                  if {
                    isTrue {
                      field = tx_org_repertoire.length
                    }
                  }
                  stdWrap {
                    parseFunc < lib.parseFunc_RTE
                  }
                }
              }
              1 {
                20 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.20
                30 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.30
                31 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.31
              }
              2 {
                20 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.20
                30 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.30
                31 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.31
              }
              8 {
                20 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.20
                30 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.30
                31 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.31
              }
              9 {
                20 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.20
                30 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.30
                31 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.31
              }
              10 {
                20 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.20
                30 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.30
                31 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.31
              }
              17 {
                20 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.20
                30 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.30
                31 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.31
              }
              18 {
                20 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.20
                30 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.30
                31 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.31
              }
              25 {
                20 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.20
                30 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.30
                31 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.31
              }
              26 {
                20 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.20
                30 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.30
                31 < plugin.tx_browser_pi1.views.single.331.tx_org_repertoire.title.20.0.31
              }
            }
            wrap = <div class="row">|</div>
          }
        }
      }
    }
  }
}
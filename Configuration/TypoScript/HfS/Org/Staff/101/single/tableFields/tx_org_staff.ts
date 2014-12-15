plugin.tx_browser_pi1 {
  views {
    single {
      101 {
          // 140706: empty statement: for proper comments only
        tx_org_staff {
        }
          // title: image, header, bodytext, vita
        tx_org_staff =
        tx_org_staff {
            // title
          title = COA
          title {
              // image / text
            10 < plugin.tx_browser_pi1.displaySingle.master_templates.tableFields.imageText.0
            10 {
              20 {
                0 {
                  10 >
                    // header, bodytext, vita
                  10 = COA
                  10 {
                      // socialmedia_bookmarks
                    10 = TEXT
                    10 {
                      value = ###SOCIALMEDIA_BOOKMARKS###
                      wrap = <div class="show-for-large-up socialbookmarks">|</div>
                    }
                      // header
                    20 = TEXT
                    20 {
                      field = tx_org_staff.title
                      wrap = <h1>|</h1>
                    }
                      // bodytext
                    30 = TEXT
                    30 {
                      field = tx_org_staff.bodytext
                      stdWrap {
                        parseFunc < lib.parseFunc_RTE
                      }
                    }
                      // vita
                    40 < tt_content.table.20
                    40 {
                      userFunc = tx_browser_cssstyledcontent->render_table
                      userFunc {
                          // add the value of a field to another field in cObj->data
                        cObjDataFieldWrapper =
                        cObjDataFieldWrapper {
                          cols            = tx_org_staff.cols
                          pi_flexform     = tx_org_staff.pi_flexform
                          uid             = tx_org_staff.uid
                        }
                      }
                      field = tx_org_staff.vita
                      stdWrap {
                          // With a prefix comment there won't be any output!
                        prefixComment >
                      }
                    }
                  }
                }
                1 {
                  10 >
                  10 < plugin.tx_browser_pi1.views.single.101.tx_org_staff.title.20.0.10
                }
                2 {
                  10 >
                  10 < plugin.tx_browser_pi1.views.single.101.tx_org_staff.title.20.0.10
                }
                8 {
                  10 >
                  10 < plugin.tx_browser_pi1.views.single.101.tx_org_staff.title.20.0.10
                }
                9 {
                  10 >
                  10 < plugin.tx_browser_pi1.views.single.101.tx_org_staff.title.20.0.10
                }
                10 {
                  10 >
                  10 < plugin.tx_browser_pi1.views.single.101.tx_org_staff.title.20.0.10
                }
                17 {
                  10 >
                  10 < plugin.tx_browser_pi1.views.single.101.tx_org_staff.title.20.0.10
                }
                18 {
                  10 >
                  10 < plugin.tx_browser_pi1.views.single.101.tx_org_staff.title.20.0.10
                }
                25 {
                  10 >
                  10 < plugin.tx_browser_pi1.views.single.101.tx_org_staff.title.20.0.10
                }
                26 {
                  10 >
                  10 < plugin.tx_browser_pi1.views.single.101.tx_org_staff.title.20.0.10
                }
              }
            }
          }
        }
      }
    }
  }
}
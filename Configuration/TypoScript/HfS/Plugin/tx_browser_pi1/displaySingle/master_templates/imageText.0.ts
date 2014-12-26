plugin.tx_browser_pi1 {
  displaySingle {
    master_templates {
    }
      // tableFields
    master_templates =
    master_templates {
        // 140703: empty statement: for proper comments only
      tableFields {
      }
        // image
      tableFields =
      tableFields {
          // 140707: empty statement: for proper comments only
        imageText {
        }
          // 0
        imageText =
        imageText {
            // key, default (single view), page, url
          0 = COA
          0 {
              // image in case of: above ... and beside ...
            10 = CASE
            10 {
              key {
                field = {$plugin.tx_browser_pi1.templates.singleview.image.0.imageorient}
              }
              // don't handle
              default = TEXT
              default {
                //value = Please configure plugin.tx_browser_pi1.templates.singleview.image.0.imageorient
                value =
              }
              // above-center: div.column ul.block-grid image /ul /div
              0 = COA
              0 {
                10 = TEXT
                10 {
                  field = {$plugin.tx_browser_pi1.templates.singleview.image.0.imagecols}
                }
                  // image
                20 < plugin.tx_browser_pi1.displaySingle.master_templates.tableFields.image.0
                20 {
                  wrap >
                }
                // above-right: /ul /div
                30 = TEXT
                30 {
                  value = </ul></div>
                }
              }
            }
              // text
            20 = CASE
            20 {
              key {
                field = {$plugin.tx_browser_pi1.templates.singleview.image.0.imageorient}
              }
              // don't handle
              default = TEXT
              default {
                value =
              }
            }
              // image in case of: below ...
            30 = CASE
            30 {
              key {
                field = {$plugin.tx_browser_pi1.templates.singleview.image.0.imageorient}
              }
              // don't handle
              default = TEXT
              default {
                value =
              }
              // below-center: div.column ul.block-grid
              8 = COA
              8 {
                10 = TEXT
                10 {
                  field = {$plugin.tx_browser_pi1.templates.singleview.image.0.imagecols}
                }
                  // image
                20 < plugin.tx_browser_pi1.displaySingle.master_templates.tableFields.image.0
                20 {
                  wrap >
                }
                // above-right: /ul /div
                30 = TEXT
                30 {
                  value = </ul></div>
                }
              }
            }
          }
        }
      }
    }
  }
}
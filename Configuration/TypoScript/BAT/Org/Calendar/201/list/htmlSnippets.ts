plugin.tx_browser_pi1 {
  views {
    list {
      201 {
        XXXhtmlSnippets >
        htmlSnippets {
          marker >
          marker {
            filter = TEXT
            filter {
              value (
              <div class="row filter">
                ###TX_ORG_CALTYPE.TITLE###
                ###TX_ORG_CAL.TITLE###
                ###TX_ORG_CAL.DATETIME###
              </div>
)
            }
          }
          subparts {
            listview = TEXT
            listview {
              value (
                <div class="row">
                  <div id="c###TT_CONTENT.UID###-listview-###MODE###" class="columns listview listview-content listview-###MODE### listview-content-###MODE###">
                    <!-- ###LISTBODY### begin --><!-- ###LISTBODYITEM### begin -->
                    <div class="row">
                      <div class="record">
                        ###TX_ORG_CAL.TITLE###
                      </div>
                    </div><!-- /row --><!-- ###LISTBODYITEM### end --><!-- ###LISTBODY### end -->
                  </div><!-- /columns --><!-- /listview -->
                </div><!-- /row -->
)
            }
          }
        }
      }
    }
  }
}
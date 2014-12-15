plugin.tx_browser_pi1 {
  views {
    list {
      201 {
        htmlSnippets >
        htmlSnippets {
          marker {
            filter = TEXT
            filter {
              value (
              <div class="filter">
                ###TX_ORG_CAL.DATETIME###
                ###TX_ORG_CAL.TITLE###
              </div>
)
            }
          }
          subparts >
          subparts {
            listview = TEXT
            listview {
              value (
            <div id="c###TT_CONTENT.UID###-listview-###MODE###" class="columns listview listview-content listview-###MODE### listview-content-###MODE###">
              <!-- ###LISTBODY### begin --><!-- ###LISTBODYITEM### begin -->
              <div class="record">
                ###TX_ORG_CAL.TITLE###
              </div>
              <div class="cleaner">&nbsp;</div><!-- ###LISTBODYITEM### end --><!-- ###LISTBODY### end -->
              </div> <!-- /listview -->
)
            }
          }
        }
      }
    }
  }
}
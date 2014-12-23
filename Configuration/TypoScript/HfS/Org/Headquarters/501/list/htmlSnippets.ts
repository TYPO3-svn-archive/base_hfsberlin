plugin.tx_browser_pi1 {
  views {
    list {
      501 {
        htmlSnippets =
        htmlSnippets {
          marker {
            filter = TEXT
            filter {
              value (
              <div class="filter">
                ###TX_ORG_HEADQUARTERS.TITLE###
              </div>
)
            }
          }
          subparts {
              // For foundation main_02.html
            //searchform < plugin.tx_browser_pi1.displayList.master_templates.subparts.listview.searchform.simpleMapOrderFilter
              // For foundation main_01.html
            //searchform < plugin.tx_browser_pi1.displayList.master_templates.subparts.listview.searchform.simple
            listview = TEXT
            listview {
              value (
            <div id="c###TT_CONTENT.UID###-listview-###MODE###" class="columns listview listview-content listview-###MODE### listview-content-###MODE###">
              <!-- ###LISTBODY### begin --><!-- ###LISTBODYITEM### begin -->
              <div class="record">
                ###TX_ORG_HEADQUARTERS.TITLE###
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
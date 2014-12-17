plugin.tx_browser_pi1 {
  views {
    single {
      201 {
        htmlSnippets =
        htmlSnippets {
          subparts {
            singleview = TEXT
            singleview {
              value (
                <!-- ###SINGLEVIEW### begin --><!-- ###SINGLEBODY### begin --><!-- ###SINGLEBODYROW### begin -->
                <!-- ###AREA_FOR_AJAX_LIST_01### begin -->
                <div class="columns">
                  <div class="row">
                    <div class="columns large-2">
                      ###TX_ORG_CAL.DATETIME###<!-- datesheet -->
                    </div>
                    <div class="columns large-4 end">
                      ###TX_ORG_CAL.DELETED###<!-- tx_org_location -->
                    </div>
                  </div>
                  <div class="row">
                    <div class="columns">
                      ###TX_ORG_CAL.CRDATE###<!-- form for tickets -->
                    </div>
                  </div>
                  <div class="row">
                    <div class="columns">
                      ###RECORD_BROWSER###
                    </div>
                  </div>
                  <div class="row">
                    ###TX_ORG_CAL.TITLE###
                    <!-- ###AREA_FOR_AJAX_LIST_01### end -->
                    <!-- ###BACKBUTTON### begin -->
                    <p class="backbutton">
                      ###MY_SINGLEVIEWBACKBUTTON###
                    </p>
                    <!-- ###BACKBUTTON### end -->
                    <!-- ###AREA_FOR_AJAX_LIST_02### begin -->
                  </div>
                </div>
                <!-- ###AREA_FOR_AJAX_LIST_02### end -->
                <!-- ###SINGLEBODYROW### end --><!-- ###SINGLEBODY### end --><!-- ###SINGLEVIEW### end -->
)
            }
          }
        }
      }
    }
  }
}
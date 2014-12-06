base_hfsberlin =
base_hfsberlin {
  // content, header
  structure =
  structure {
    // main (0), margin (2), navigation (1)
    content =
    content {
      main = COA
      main {
        // table, select, stdWrap
        10 < styles.content.get
        10 {
          select {
            where = colPos=0
          }
          stdWrap {
            required  = 1
            wrap      = <!--contentmain--><!--TYPO3SEARCH_begin--><section class="content contentmain"><div class="row"><div class="small-12 columns"> |</div></div></section><!--TYPO3SEARCH_end--><!--/contentmain-->
          }
        }
      }
      margin = COA
      margin {
        // table, select, stdWrap
        10 < styles.content.get
        10 {
          select {
            where = colPos=2
          }
          slide = -1
        }
      }
      navigation = COA
      navigation {
        // table, select, stdWrap
        10 < styles.content.get
        10 {
          select {
            where = colPos=1
          }
          slide = -1
        }
      }
    }
  }
}
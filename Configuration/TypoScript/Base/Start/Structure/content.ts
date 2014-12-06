base_hfsberlin =
base_hfsberlin {
  // content, footer, header
  structure =
  structure {
    // main (0), margin (2), navigation (1)
    content =
    content {
      // CONTENT, stdWrap
      main = COA
      main {
        10 {
          select {
            where = colPos=0
          }
          slide >
          stdWrap {
            required  = 1
            wrap      = <!--contentmain--><!--TYPO3SEARCH_begin--><section class="content contentmain"><div class="row"><div class="small-12 columns"> |</div></div></section><!--TYPO3SEARCH_end--><!--/contentmain-->
          }
        }
      }
      // CONTENT, stdWrap
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
      // CONTENT, stdWrap
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
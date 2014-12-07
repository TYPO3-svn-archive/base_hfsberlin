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
        10 = COA
        10 {
          20 = HMENU
          20 {
            special = list
            special.value = {$base_hfsberlin.pages.root}
            1 < base_hfsberlin.menu.tmenu
            1.IFSUB     >
            1.CURIFSUB  >
            1.ACTIFSUB  >
          }
          21 = TEXT
          21 {
            value (
               <ul>
                 <li class="spc">
                    &nbsp;
                  </li>
               </ul>
            )
          }
          22 < base_hfsberlin.menu.menuMain
          23 = TEXT
          23 {
            value = <p>&nbsp;</p>
          }
        }
        // table, select, stdWrap
        90 < styles.content.get
        90 {
          select {
            where = colPos=1
          }
          slide = -1
        }
      }
    }
  }
}
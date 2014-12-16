base_hfsberlin =
base_hfsberlin {
    // structure
  bat =
  bat {
    // content, header
    structure =
    structure {
      // footer, main (0), margin (2), navigation (1)
      content =
      content {
        footer = COA
        footer {
          10 < styles.content.get
          10 {
            select.pidInList = {$base_hfsberlin.bat.pages.libraries.footer}
            stdWrap {
              wrap = <div class="small-10 medium-8 columns">|</div>
            }
          }
          20 < base_hfsberlin.bat.menu.menuIconsBottom
          20 {
            wrap = <div id="nav_icons_bottom" class="show-for-medium-up medium-2 columns"><ul> | </ul></div>
          }
          wrap = <div class="row"><footer>|</footer></div>
        }
        main = COA
        main {
            // header (3)
          10 = COA
          10 {
            20 < styles.content.get
            20 {
              select {
                where = colPos=3
              }
              stdWrap {
                required  = 1
                wrap      = <div class="row show-for-medium-up"><div id="headerimage">|</div></div>
              }
              slide = -1
            }
          }
            // content (0)
          20 < styles.content.get
          20 {
            select {
              where = colPos=0
            }
            stdWrap {
              required  = 1
              wrap      = <!--contentmain--><!--TYPO3SEARCH_begin--><section class="content contentmain"><div class="row"><div class="columns"> |</div></div></section><!--TYPO3SEARCH_end--><!--/contentmain-->
            }
          }
        }
        margin = COA
        margin {
          10 < styles.content.get
          10 {
            select.pidInList = {$base_hfsberlin.bat.pages.margin}
            XXXstdWrap {
              wrap = <div class="row"><div class="columns">|</div></div>
            }
          }
          // table, select, stdWrap
          20 < styles.content.get
          20 {
            select {
              where = colPos=2
            }
            slide = -1
            XXXstdWrap {
              wrap = <div class="row"><div class="columns">|</div></div>
            }
          }
        }
        navigation = COA
        navigation {
          10  < styles.content.get
          10 {
            select.pidInList = {$base_hfsberlin.bat.pages.libraries.menu}
          }
          20 < base_hfsberlin.bat.menu.menuMain
        }
      }
    }
  }
}
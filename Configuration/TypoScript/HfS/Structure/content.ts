base_hfsberlin =
base_hfsberlin {
    // structure
  hfs =
  hfs {
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
            select.pidInList = {$base_hfsberlin.hfs.pages.libraries.footer}
            stdWrap {
              // #i0003, dwildt, 1-: wrap = <div class="small-10 medium-6 columns">|</div>
            }
          }
          20 < base_hfsberlin.hfs.menu.menuIconsBottom
          20 {
            wrap = <div id="nav_icons_bottom" class="show-for-medium-up medium-4 columns"><ul> | </ul></div>
          }
          wrap = <div class="row"><footer>|</footer></div>
        }
        main = COA
        main {
            // header (3)
          10 = COA
          10 {
              // quicknav
            10 = COA
            10 {
              10 < base_hfsberlin.hfs.menu.menuIconsTop
              20 = HMENU
              20 {
                special = directory
                special {
                  value = {$base_hfsberlin.hfs.pages.libraries.quicknav}
                }
                maxItems  = 1
                begin     = 1
                1 < base_hfsberlin.hfs.menu.tmenu
                1.IFSUB     >
                1.CURIFSUB  >
                1.ACTIFSUB  >
                1.NO.wrapItemAndSub (
                            <li class="no firstitem">
                              |
                            </li>
                )
                1.CUR.wrapItemAndSub (
                            <li class="cur firstitem">
                              |
                            </li>
                )
              }
              21 = HMENU
              21 {
                special = directory
                special {
                  value = {$base_hfsberlin.hfs.pages.libraries.quicknav}
                }
                begin     = 2
                1 < base_hfsberlin.hfs.menu.tmenu
                1.IFSUB     >
                1.CURIFSUB  >
                1.ACTIFSUB  >
              }
              wrap = <div id="quicknav" class="row show-for-medium-up">|</div>
            }
              // header (3): image
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
            select.pidInList = {$base_hfsberlin.hfs.pages.margin}
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
          10 = COA
          10 {
            20 = HMENU
            20 {
              special = list
              special.value = {$base_hfsberlin.hfs.pages.root}
              1 < base_hfsberlin.hfs.menu.tmenu
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
            22 < base_hfsberlin.hfs.menu.menuMain
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
}
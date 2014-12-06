base_hfsberlin =
base_hfsberlin {
  structure {
    // bat, hfs
    header =
    header {
      // CONTENT, stdWrap
      bat = TEXT
      bat {
        value = HEADER BAT
      }
      // CONTENT, stdWrap
      hfs = COA
      hfs {
        10 = FILES
        10 {
          references {
            data = levelmedia:-1, slide
          }
          renderObj = COA
          renderObj {
            10 = IMAGE
            10 {
              file.import.data = file:current:publicUrl
              file.width = {$base_hfsberlin.dims.header_image.maxW}
              file.height = {$base_hfsberlin.dims.header_image.maxH}
              stdWrap {
                typolink {
                  parameter = {$base_hfsberlin.pages.root}
                  parameter.XXXdata = file:current:link
                  title     = {$base_hfsberlin.htmlhead.author}
                }
              }
            }
          }
          begin = 0
          maxItems = 1
        }
        20 = COA
        20 {
          wrap = <div id="quicknav">|</div>
          10 < temp.menuIconsTop
          20 = HMENU
          20 {
            special = directory
            special {
              value = {$base_hfsberlin.pages.libraries.quicknav}
            }
            maxItems  = 1
            begin     = 1
            1 < temp.tmenu
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
              value = {$base_hfsberlin.pages.libraries.quicknav}
            }
            begin     = 2
            1 < temp.tmenu
            1.IFSUB     >
            1.CURIFSUB  >
            1.ACTIFSUB  >
          }
        }
      }
    }
  }
}
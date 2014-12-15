base_hfsberlin =
base_hfsberlin {
  hfs {
    structure {
      header = COA
      header {
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
      }
    }
  }
}
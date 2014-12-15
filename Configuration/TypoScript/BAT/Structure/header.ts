base_batberlin =
base_batberlin {
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
            file.width = {$base_batberlin.dims.header_image.maxW}
            file.height = {$base_batberlin.dims.header_image.maxH}
            stdWrap {
              typolink {
                parameter = {$base_batberlin.pages.root}
                parameter.XXXdata = file:current:link
                title     = {$base_batberlin.htmlhead.author}
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
base_hfsberlin =
base_hfsberlin {
  bat {
    structure {
      header = COA
      header {
          // Logos
        10 = COA
        10 {
          10 < styles.content.get
          10 {
            select {
              pidInList = {$base_hfsberlin.bat.pages.libraries.header.logos}
              max       = 1
            }
          }
          wrap = <div id="box_header_logos" class="columns small-10 medium-7">|</div>
        }
          // News
        20 = COA
        20 {
          10 < styles.content.get
          10 {
            select {
              pidInList = {$base_hfsberlin.bat.pages.libraries.header.news}
              max       = 1
            }
          }
          wrap = <div id="box_header_news" class="columns show-for-medium-up small-10 medium-3">|</div>
        }
      }
    }
  }
}
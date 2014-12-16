base_hfsberlin =
base_hfsberlin {
  bat {
    structure {
      footer = COA
      footer {
        10 < styles.content.get
        10 {
          select {
            pidInList = {$base_hfsberlin.bat.pages.libraries.footer}
            max       = 1
          }
        }
        wrap = <div class="columns">|</div>
      }
    }
  }
}
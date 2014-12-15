page = PAGE
page {
	bodyTagCObject = TEXT
	bodyTagCObject {
		insertData = 1
		value = <body id="bodyId-{TSFE:id}">
	}
	meta {
    viewport = width=device-width, initial-scale=1.0
  }
	shortcutIcon = {$base_batberlin.favicon}
	typeNum = 0

  63630 = CASE
  63630 {
    key {
      data = levelfield:-2,backend_layout_next_level,slide
      override {
        field = backend_layout
      }
    }
    default = TEXT
    default {
      data = levelfield:-2,backend_layout_next_level,slide
      override {
        field = backend_layout
      }
      noTrimWrap = |Current backend layout: "|". Please choose another backend layout. This is a prompt of the TYPO3 HfS Berlin Template (base_hfsberlin). |
    }
    base_hfsberlin__bat_default = FLUIDTEMPLATE
    base_hfsberlin__bat_default {
      file = {$base_batberlin.fluid.path.templates}bat_default.html
      layoutRootPath  = {$base_batberlin.fluid.path.layouts}
      partialRootPath = {$base_batberlin.fluid.path.partials}
      variables {

      }
    }
    base_hfsberlin__bat_root < .base_batberlin__bat_default
  }
  includeCSS {
    base_hfsberlin_bat = EXT:base_hfsberlin/Resources/Public/Css/bat.css
  }
}
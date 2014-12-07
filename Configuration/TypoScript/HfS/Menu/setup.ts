
  ////////////////////////////////////////////////////////////////////////////////////////////
  //
  // INDEX

  // menu.tmenu
  // menu.menuMain
  //
  // menu.htmllink, menu.pdflink, menu.printlink
  // menu.menuIcons, menu.menuIconsTop, menu.menuIconsBottom
  //
  // lib.hfs.subparts




  ////////////////////////////////////////////////////////////////////////////////////////////
  //
  // menu.tmenu
base_hfsberlin =
base_hfsberlin {
  menu.tmenu = TMENU
  menu.tmenu {

    NO = 1
    NO.wrapItemAndSub (
              <li class="no">
                |
              </li>
    )
    NO.ATagTitle.field = title
    NO.stdWrap.htmlSpecialChars = 1

    IFSUB = 1
    IFSUB.wrapItemAndSub (
              <li class="ifsub">
                |
              </li>
    )
    IFSUB.ATagTitle.field = title
    IFSUB.stdWrap.htmlSpecialChars = 1

    CUR = 1
    CUR.wrapItemAndSub (
              <li class="cur">
                |
              </li>
    )
    CUR.ATagTitle.field = title
    CUR.stdWrap.htmlSpecialChars = 1

    CURIFSUB = 1
    CURIFSUB.wrapItemAndSub (
              <li class="curifsub">
                |
              </li>
    )
    CURIFSUB.ATagTitle.field = title
    CURIFSUB.stdWrap.htmlSpecialChars = 1

    ACT = 1
    ACT.wrapItemAndSub (
              <li class="act">
                |
              </li>
    )
    ACT.ATagTitle.field = title
    ACT.stdWrap.htmlSpecialChars = 1

    ACTIFSUB = 1
    ACTIFSUB.wrapItemAndSub (
              <li class="actifsub">
                |
              </li>
    )
    ACTIFSUB.ATagTitle.field = title
    ACTIFSUB.stdWrap.htmlSpecialChars = 1

    SPC = 1
    SPC {
      wrapItemAndSub (
              <li class="spc">
                &nbsp;
              </li>
      )
      doNotShowLink = 1
    }

    wrap = <ul>|</ul>
  }
    // menu.tmenu



    ////////////////////////////////////////////////////////////////////////////////////////////
    //
    // menu.menuMain

  menu.menuMain = HMENU
  menu.menuMain {
    # Menue ab Ebene 1
    entry.level = 1
    1 < base_hfsberlin.menu.tmenu
    2 < base_hfsberlin.menu.tmenu
    3 < base_hfsberlin.menu.tmenu
    4 < base_hfsberlin.menu.tmenu
  }
    // menu.menuMain



    ////////////////////////////////////////////////////////////////////////////////////////////
    //
    // menu.htmllink, menu.pdflink, menu.printlink

  menu.htmllink = COA
  menu.htmllink {
    10 = TEXT
    10 {
      value       = {getIndpEnv:TYPO3_SITE_URL}
      insertData  = 1
    }
    20 = TEXT
    20 {
      typolink {
        parameter = {page:uid},0
        parameter.insertData = 1
        additionalParams {
          cObject = COA
          cObject {
            10 < plugin.tx_browser_pi1.template.add_parameter.browser
            20 < plugin.tx_browser_pi1.template.add_parameter.extensions.org
          }
        }
        returnLast = url
      }
    }
  }

  menu.pdflink = COA
  menu.pdflink {
      // PDF icon
    wrap = <li>|</li>
    10 = IMAGE
    10 {
      file = EXT:base_hfsberlin/res/icons/icon_16px/pdf.png
      stdWrap.typolink {
        parameter = {page:uid},123 _blank - "Seite als PDF-Datei herunterladen"
        parameter.insertData = 1
        additionalParams {
          cObject = COA
          cObject {
            10 < plugin.tx_browser_pi1.template.add_parameter.browser
            20 < plugin.tx_browser_pi1.template.add_parameter.extensions.org
          }
        }
      }
    }
    10 >
    10 = TEXT
    10 {
      value = PDF
      typolink {
        parameter = {page:uid},123 _blank - "Seite als PDF-Datei herunterladen"
        parameter.insertData = 1
        additionalParams {
          cObject = COA
          cObject {
            10 < plugin.tx_browser_pi1.template.add_parameter.browser
            20 < plugin.tx_browser_pi1.template.add_parameter.extensions.org
          }
        }
      }
    }
  }

  menu.printlink = COA
  menu.printlink {
    // print icon
    // 110426, dwildt: PDF-Link entfernt
    //wrap = <li class="last">|</li>
    wrap = <li>|</li>
    10 = IMAGE
    10 {
      file = EXT:base_hfsberlin/res/icons/icon_16px/printer.png
      stdWrap.typolink {
        parameter = {page:uid},98 _blank - "Artikel drucken"
        parameter.insertData = 1
        additionalParams {
          cObject = COA
          cObject {
            10 < plugin.tx_browser_pi1.template.add_parameter.browser
            20 < plugin.tx_browser_pi1.template.add_parameter.extensions.org
          }
        }
      }
    }
    10 >
    10 = TEXT
    10 {
      value = Drucken
      typolink {
        parameter = {page:uid},98 _blank - "Seite drucken"
        parameter.insertData = 1
        additionalParams {
          cObject = COA
          cObject {
            10 < plugin.tx_browser_pi1.template.add_parameter.browser
            20 < plugin.tx_browser_pi1.template.add_parameter.extensions.org
          }
        }
      }
    }
  }
    // menu.pdflink, menu.printlink



    ////////////////////////////////////////////////////////////////////////////////////////////
    //
    // menu.menuIcons, menu.menuIconsTop, menu.menuIconsBottom

  menu.menuIcons = COA
  menu.menuIcons {
    // 110426, dwildt: PDF-Generator funktioniert nicht. Vermutlich DNS-Server-Problem
    // 20 < base_hfsberlin.menu.pdflink
    30 < base_hfsberlin.menu.printlink
  }

  menu.menuIconsTop < base_hfsberlin.menu.menuIcons
  menu.menuIconsTop {
    wrap = <ul id="nav_icons_top"> | </ul>

  }

  menu.menuIconsBottom < base_hfsberlin.menu.menuIcons
  menu.menuIconsBottom {
    wrap = <div id="nav_icons_bottom"><ul> | </ul></div>
  }
    // menu.menuIcons, menu.menuIconsTop, menu.menuIconsBottom
}
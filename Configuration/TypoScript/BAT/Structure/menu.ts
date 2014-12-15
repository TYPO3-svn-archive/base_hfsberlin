
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
  bat {
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
      1 < base_hfsberlin.bat.menu.tmenu
      2 < base_hfsberlin.bat.menu.tmenu
      3 < base_hfsberlin.bat.menu.tmenu
      4 < base_hfsberlin.bat.menu.tmenu
    }
      // menu.menuMain

  }
}
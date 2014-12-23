plugin.tx_browser_pi1 {
  views {
    list {
      211 = +BAT: +Org: Calendar (margin)
      211 {
        name      = +BAT: +Org: Calendar  (margin)
        marker {
          my_listview_page {
            value = Playing Schedule
            lang.de = Spielplan &raquo;
            typolink.title.value = Playing Schedule &raquo;
            typolink.title.lang.de = Spielplan &raquo;
          }
          my_listview_title {
            value = Playing Schedule
            lang.de = Spielplan
            typolink.title.value = Playing Schedule
            typolink.title.lang.de = Spielplan
          }
        }
        andWhere  = tx_org_cal.datetime > UNIX_TIMESTAMP() AND tx_org_cal.type LIKE 'tx_org_repertoire'
        orderBy   =  tx_org_cal.datetime ASC
      }
    }
  }
}
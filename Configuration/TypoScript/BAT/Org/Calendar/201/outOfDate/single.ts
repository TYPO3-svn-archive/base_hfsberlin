plugin.tx_browser_pi1 {
  views {
    single {
      201 {
        andWhere  = tx_org_cal.datetime < UNIX_TIMESTAMP() AND tx_org_cal.type LIKE 'tx_org_repertoire'
      }
    }
  }
}
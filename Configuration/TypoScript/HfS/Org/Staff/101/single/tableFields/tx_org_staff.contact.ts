plugin.tx_browser_pi1 {
  views {
    single {
      101 {
        tx_org_staff {
          title {
              // Contact data
            20 = COA
            20 {
              if {
                isTrue {
                  stdWrap {
                    cObject = COA
                    cObject {
                      10 = TEXT
                      10 {
                        field = tx_org_staff.contact_email
                      }
                      20 = TEXT
                      20 {
                        field = tx_org_staff.contact_fax
                      }
                      30 = TEXT
                      30 {
                        field = tx_org_staff.contact_phone
                      }
                      40 = TEXT
                      40 {
                        field = tx_org_staff.contact_skype
                      }
                      50 = TEXT
                      50 {
                        field = tx_org_staff.contact_url
                      }
                    }
                  }
                }
              }
                // vcard: header, name, contact_email, contact_phone, contact_fax, contact_skype, contact_url,
              10 = COA
              10 {
                  // column: image, header, title, street, zip city, url
                10 = COA
                10 {
                  wrap = <ul class="vcard tx_org_staff">|</ul><!-- vcard -->
                    // header
                  10 = COA
                  10 {
                    wrap = <li class="header">|</li>
                      // title, if title (name)
                    10 = TEXT
                    10 {
                      value = Contact data
                      lang {
                        de = Kontakt
                        en = Contact data
                      }
                    }
                  }
                    // contact_email
                  30 = TEXT
                  30 {
                    if {
                      isTrue {
                        field = tx_org_staff.contact_email
                      }
                    }
                    typolink {
                      parameter {
                        field = tx_org_staff.contact_email
                      }
                    }
                    wrap = <li class="contact_email">|</li>
                  }
                    // contact_phone
                  40 = COA
                  40 {
                    if {
                      isTrue {
                        field = tx_org_staff.contact_phone
                      }
                    }
                    wrap = <li class="contact_phone">|</li>
                    10 = TEXT
                    10 {
                      value = phone
                      lang {
                        de = Tel.
                        en = phone
                      }
                      noTrimWrap = ||: |
                    }
                    20 = TEXT
                    20 {
                      field = tx_org_staff.contact_phone
                      required = 1
                    }
                  }
                    // contact_fax
                  50 = COA
                  50 {
                    if {
                      isTrue {
                        field = tx_org_staff.contact_fax
                      }
                    }
                    wrap = <li class="contact_fax">|</li>
                    10 = TEXT
                    10 {
                      value = fax
                      lang {
                        de = Fax
                        en = fax
                      }
                      noTrimWrap = ||: |
                    }
                    20 = TEXT
                    20 {
                      field = tx_org_staff.contact_fax
                      required = 1
                    }
                  }
                    // contact_skype
                  60 = COA
                  60 {
                    if {
                      isTrue {
                        field = tx_org_staff.contact_skype
                      }
                    }
                    wrap = <li class="contact_skype">|</li>
                    10 = TEXT
                    10 {
                      value = Skype
                      lang {
                        de = Skype
                        en = Skype
                      }
                      noTrimWrap = ||: |
                    }
                    20 = TEXT
                    20 {
                      field = tx_org_staff.contact_skype
                      required = 1
                    }
                  }
                    // contact_url
                  70 = COA
                  70 {
                    if {
                      isTrue {
                        field = tx_org_staff.contact_url
                      }
                    }
                    wrap = <li class="contact_url">|</li>
                    10 = TEXT
                    10 {
                      value = Homepage
                      lang {
                        de = Homepage
                        en = Homepage
                      }
                      noTrimWrap = || &raquo;|
                      required = 1
                      typolink {
                        parameter{
                          field = tx_org_staff.contact_url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
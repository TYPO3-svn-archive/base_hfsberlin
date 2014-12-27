plugin.tx_browser_pi1 {
  views {
    list {
      511 {
        marker {
          my_listview_page {
            value = Contact
            lang.de = Alle Bereiche &raquo;
            typolink.title.value = All units &raquo;
            typolink.title.lang.de = Alle Bereiche &raquo;
          }
          my_listview_title {
            value = Contact
            lang.de = Kontakt
            typolink.title.value = All contacts
            typolink.title.lang.de = Alle Kontakte
          }
        }
        andWhere (
              (tx_org_headquarters.pages LIKE {$base_hfsberlin.hfs.records.wiThisPageUid}
          OR  tx_org_headquarters.pages LIKE '{$base_hfsberlin.hfs.records.wiThisPageUid},%'
          OR  tx_org_headquarters.pages LIKE '%,{$base_hfsberlin.hfs.records.wiThisPageUid},%'
          OR  tx_org_headquarters.pages LIKE '%,{$base_hfsberlin.hfs.records.wiThisPageUid}')
)
        orderBy = tx_org_headquarters.teaser_title, tx_org_headquarters.title
        tx_org_news {
          title {
            10 {
              31 = COA
              31 {
                10 = TEXT
                10 {
                  value   = News from
                  lang.de = Nachricht vom
                }
                20 = TEXT
                20 {
                  value       = ###TX_ORG_NEWS.DATETIME###
                  strftime    = %d. %B
                  noTrimWrap  = | ||
                }
                wrap = <div class="hfsnewsdate">|</div>
              }
              wrap = <div class="columns large-8">|</div>
            }
            20 {
              wrap = <div class="show-for-large-up columns large-4">|</div>
            }
          }
        }
      }
    }
  }
}
plugin.tx_caddy_pi3 {
  content {
    sum {
      20 {
        10 {
          data >
          value = ticket
          lang {
            de = Karte
            en = ticket
          }
        }
        20 {
          data >
          value = tickets
          lang {
            de = Karten
            en = tickets
          }
        }
      }
    }
  }
  _HTMLMARKER {
    linktocaddy {
      30 < plugin.tx_caddy_pi3._HTMLMARKER.linktocaddy.10
      10 >
    }
    linktoshop {
      30 < plugin.tx_caddy_pi3._HTMLMARKER.linktoshop.10
      10 >
    }
  }
}
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
      20 {
        altText {
          data >
          value = send the booking
          lang {
            de = Reservierung absenden
            en = send the booking
          }
        }
        titleText >
        titleText < .altText
      }
    }
    linktoshop {
      10 >
      20 {
        altText {
          data >
          value = book a ticket
          lang {
            de = Tickets reservieren
            en = book a ticket
          }
        }
        titleText >
        titleText < . altText
      }
    }
  }
}
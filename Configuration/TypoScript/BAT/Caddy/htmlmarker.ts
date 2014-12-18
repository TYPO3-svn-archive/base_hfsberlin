plugin.tx_caddy_pi1 {
    // linktoshop
  _HTMLMARKER =
  _HTMLMARKER {
    caddy_prompt_order {
      10 {
        10 {
          wrap = <span class="small-7 large-7 columns">|</span>
        }
        30 {
          wrap  = <span class="small-2 large-2 columns">|</span>
        }
        40 {
          wrap = <span class="small-2 large-2 columns caddy-right">|</span>
        }
        50 {
          wrap  = <span class="small-1 large-1 columns">|</span>
        }
      }
        // tax normal
      20 < .10
      20 {
        10 {
          10 >
          10 = TEXT
          10 {
            value = plus {$plugin.caddy.tax.normal}% VAT
            lang {
              de = zzgl. {$plugin.caddy.tax.normal}% MWSt.
              en = plus {$plugin.caddy.tax.normal}% VAT
            }
          }
        }
        40 {
          10.userFunc {
            number {
              field = sumsumtaxnormal
            }
          }
        }
      }
        // tax reduced
      30 < .10
      30 {
        10 {
          10 >
          10 = TEXT
          10 {
            value = plus {$plugin.caddy.tax.reduced}% VAT
            lang {
              de = zzgl. {$plugin.caddy.tax.reduced}% MWSt.
              en = plus {$plugin.caddy.tax.reduced}% VAT
            }
          }
        }
        40 {
          10.userFunc {
            number {
              field = sumsumtaxreduced
            }
          }
        }
      }
        // hr
      40 = TEXT
      40 {
        value = <hr />
        wrap = <div class="row">|</div>
      }
        // sumsumgross
      50 < .10
      50 {
        10 {
          10 >
          10 = TEXT
          10 {
            data = LLL:EXT:caddy/pi1/locallang.xml:sumgross
          }
        }
        40 {
          10.userFunc {
            number {
              field = sumsumgross
            }
          }
        }
      }
    }
  }
}
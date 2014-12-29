plugin.tx_browser_pi1 {
  views {
    list {
      201 {
        filter {
          radialsearch >
          tx_org_cal {
            datetime >
          }
          tx_org_location >
        }
        tx_org_cal {
          title {
            10 {
              wrap = <div class="columns medium-9 large-9">|</div>
            }
            20 {
              10 {
                10 {
                  10 {
                    default {
                      strftime = %A
                    }
                    notype {
                      strftime = %A
                    }
                    page {
                      strftime = %A
                    }
                    tx_org_event {
                      strftime = %A
                    }
                    url {
                      strftime = %A
                    }
                  }
                  20 {
                    default {
                      strftime = %d.%m
                    }
                    notype {
                      strftime = %d.%m
                    }
                    page {
                      strftime = %d.%m
                    }
                    tx_org_event {
                      strftime = %d.%m
                    }
                    url {
                      strftime = %d.%m
                    }
                  }
                  30 {
                    default {
                      strftime = %H:%M Uhr
                    }
                    notype {
                      strftime = %H:%M Uhr
                    }
                    page {
                      strftime = %H:%M Uhr
                    }
                    tx_org_event {
                      strftime = %H:%M Uhr
                    }
                    url {
                      strftime = %H:%M Uhr
                    }
                  }
                }
                20 {
                  10 {
                    default {
                      strftime = %A
                    }
                    notype {
                      strftime = %A
                    }
                    page {
                      strftime = %A
                    }
                    tx_org_event {
                      strftime = %A
                    }
                    url {
                      strftime = %A
                    }
                  }
                  20 {
                    default {
                      strftime = %d.%m
                    }
                    notype {
                      strftime = %d.%m
                    }
                    page {
                      strftime = %d.%m
                    }
                    tx_org_event {
                      strftime = %d.%m
                    }
                    url {
                      strftime = %d.%m
                    }
                  }
                  30 {
                    default {
                      strftime = %H:%M Uhr
                    }
                    notype {
                      strftime = %H:%M Uhr
                    }
                    page {
                      strftime = %H:%M Uhr
                    }
                    tx_org_event {
                      strftime = %H:%M Uhr
                    }
                    url {
                      strftime = %H:%M Uhr
                    }
                  }
                }
              }
              wrap = <div class="columns medium-3 large-3">|</div>
            }
          }
        }
      }
    }
  }
}
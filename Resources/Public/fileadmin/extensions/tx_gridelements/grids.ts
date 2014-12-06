#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# 3 col Configuration
#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

###############################################################
# 3 cols - folder: "threecol" | CE-ID = 2
###############################################################

lib.gridelements {
		1 < .defaultGridSetup
		1 {
			wrap = <div class="row">|</div>
			columns {
				default {
					wrap {
						field = flexform_columns
						listNum = 1
						listNum.splitChar = /
						noTrimWrap = |<div class="small-| columns">|
						}
					wrap2 = |</div>
					}
				1 < .default
				1.wrap.listNum = 2
				2 < .default
				2.wrap.listNum = 0
				}
			}
    }
tt_content.gridelements_pi1.20.10.setup.1 < lib.gridelements.1


###############################################################
# 3cols with classes - folder: "threecol_class" | CE-ID = 3
###############################################################

lib.gridelements {
		3 < .defaultGridSetup
		3 {
			wrap = <div class="row">|</div>
			columns {
				default {
					wrap {
						field = flexform_colclass_2
						wrap = <div class="|">
						}
					wrap2 = |</div>
					}
				1 < .default
				1.wrap.field = flexform_colclass_1
				2 < .default
				2.wrap.field = flexform_colclass_3
				}
			}
    }
tt_content.gridelements_pi1.20.10.setup.3 < lib.gridelements.3

#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# 2 col Configuration
#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

###############################################################
# 2 cols - folder: "twocol" | CE-ID = 4
###############################################################

lib.gridelements {
		4 < .defaultGridSetup
		4 {
			wrap = <div class="row">|</div>
			columns {
				default {
					wrap {
						field = flexform_columns
						listNum = 1
						listNum.splitChar = /
						noTrimWrap = |<div class="small-| columns">|
						}
					wrap2 = |</div>
					}
				1 < .default
				1.wrap.listNum = 0
				}
			}
    }
tt_content.gridelements_pi1.20.10.setup.4 < lib.gridelements.4

###############################################################
# 2cols with classes - folder: "twocol_class" | CE-ID = 5
###############################################################

lib.gridelements {
		5 < .defaultGridSetup
		5 {
			wrap = <div class="row">|</div>
			columns {
				default {
					wrap {
						field = flexform_colclass_2
						wrap = <div class="|">
						}
					wrap2 = |</div>
					}
				1 < .default
				1.wrap.field = flexform_colclass_1
				}
			}
    }
tt_content.gridelements_pi1.20.10.setup.5 < lib.gridelements.5

#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# 1 col Configuration
#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


###############################################################
# 1cols with classes - folder: "onecol_class" | CE-ID = 6
###############################################################

lib.gridelements {
		6 < .defaultGridSetup
		6 {
			wrap = <div class="row">|</div>
			columns {
				default {
					wrap {
						field = flexform_colclass_1
						wrap = <div class="|">
						}
					wrap2 = |</div>
					}
				}
			}
    }
tt_content.gridelements_pi1.20.10.setup.6 < lib.gridelements.6


#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# 4 col Configuration
#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


###############################################################
# 4cols with classes - folder: "fourcol_class" | CE-ID = 7
###############################################################

lib.gridelements {
		7 < .defaultGridSetup
		7 {
			wrap = <div class="row">|</div>
			columns {
				default {
					wrap {
						field = flexform_colclass_1
						wrap = <div class="|">
						}
					wrap2 = |</div>
					}
				1 < .default
				1.wrap.field = flexform_colclass_2
				2 < .default
				2.wrap.field = flexform_colclass_3
				3 < .default
				3.wrap.field = flexform_colclass_4
				}
			}
    }
tt_content.gridelements_pi1.20.10.setup.7 < lib.gridelements.7

#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# 5 col Configuration
#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


###############################################################
# 5cols with classes - folder: "fivecol_class" | CE-ID = 8
###############################################################

lib.gridelements {
		8 < .defaultGridSetup
		8 {
			wrap = <div class="row">|</div>
			columns {
				default {
					wrap {
						field = flexform_colclass_1
						wrap = <div class="|">
						}
					wrap2 = |</div>
					}
				1 < .default
				1.wrap.field = flexform_colclass_2
				2 < .default
				2.wrap.field = flexform_colclass_3
				3 < .default
				3.wrap.field = flexform_colclass_4
				4 < .default
				4.wrap.field = flexform_colclass_5
				}
			}
    }
tt_content.gridelements_pi1.20.10.setup.8 < lib.gridelements.8

#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# 6 col Configuration
#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


###############################################################
# 6cols with classes - folder: "sixcol_class" | CE-ID = 9
###############################################################

lib.gridelements {
		9 < .defaultGridSetup
		9 {
			wrap = <div class="row">|</div>
			columns {
				default {
					wrap {
						field = flexform_colclass_1
						wrap = <div class="|">
						}
					wrap2 = |</div>
					}
				1 < .default
				1.wrap.field = flexform_colclass_2
				2 < .default
				2.wrap.field = flexform_colclass_3
				3 < .default
				3.wrap.field = flexform_colclass_4
				4 < .default
				4.wrap.field = flexform_colclass_5
				5 < .default
				5.wrap.field = flexform_colclass_6
				}
			}
    }
tt_content.gridelements_pi1.20.10.setup.9 < lib.gridelements.9

#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# Section Configuration - id=10
#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


lib.gridelements {
	10 < .defaultGridSetup
	10 {
		dataWrap = <{field:flexform_sectiontype} {field:flexform_dataoptions}>
		wrap2 = |</div>
		columns {
		  default {
			renderObj.20 >
			renderObj.20 = CASE
			renderObj.20 {
				key.dataWrap = {field:CType}_{field:parentgrid_flexform_section}
				text_0 =< tt_content.text
				text_1 = COA
				text_1.wrap = <section> | </section>
				text_1.10 = TEXT
				text_1.10.dataWrap = <p class="title" data-section-title><a href="#panel{COBJ:parentRecordNumber}">{field:header}</a></p>
				text_1.20 = COA
				text_1.20.wrap = <div class="content" data-section-content>|</div>
				text_1.20.20 =< tt_content.text.20
				textpic_0 =< tt_content.textpic
				textpic_1 < .text_1
				textpic_1.20.20 < tt_content.textpic.20
				textpic_1.20.20.text.10 >
				}
			}
		}
	}
}
tt_content.gridelements_pi1.20.10.setup.10 < lib.gridelements.10


#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# Orbit Slider Configuration - id=2
#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

tt_content.gridelements_pi1.20.10.setup {
    # Slider
    2 < lib.gridelements.defaultGridSetup
    2 {
        # FLUIDTEMPLATE konfigurieren
        cObject = FLUIDTEMPLATE
        cObject {
            file = {$filepaths.ts_templates}gridelements/orbit/orbit.html
        }
    }
}

#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# easytabs Configuration - id=11
#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


#lib.gridelements {
#	11 < .defaultGridSetup
#	11 {
#		outerWrap = <{field:flexform_easytabstype}>
#		outerWrap.insertData = 1
#		dataWrap = <ul class="resp-tabs-list"> | </ul>
#		wrap2 = |</div>
#		columns {
#		  default {
#			renderObj.20 >
#			renderObj.20 = COA
#			#renderObj.20.stdWrap.wrap = <ul class="resp-tabs-list"> | </ul>
#			renderObj.20.10 = CASE
#			renderObj.20.10 {
#				key.dataWrap = {field:CType}_{field:parentgrid_flexform_easytabs} 
#				text_0 =< tt_content.text
#				text_1
#				text_1 = TEXT
#				text_1.dataWrap = <li>{field:header}</li>
#				}
#			}
#		}
#	}
#}
#tt_content.gridelements_pi1.20.10.setup.11 < lib.gridelements.11

tt_content.gridelements_pi1.20.10.setup {
    # Easytabs
    11 < lib.gridelements.defaultGridSetup
    11 {
        # FLUIDTEMPLATE konfigurieren
        cObject = FLUIDTEMPLATE
        cObject {
            file = {$filepaths.ts_templates}gridelements/easytabs/easytabs.html
        }
    }
}

tt_content.gridelements_pi1.20.10.setup.11 < lib.gridEasyTabs
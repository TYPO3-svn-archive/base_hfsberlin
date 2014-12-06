# backup 22-10-2013 

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
				gridelements_pi1_0 =< tt_content.gridelements_pi1
				gridelements_pi1_1 =< tt_content.gridelements_pi1
				gridelements_pi1_1.20.10.setup.10 {
					prepend = TEXT
					prepend.dataWrap = <p class="title" data-section-title><a href="#panel{COBJ:parentRecordNumber}">{field:header}</a></p>
					columns.default.prepend.dataWrap = |
					wrap = <div class="content" data-section-content>|</div>
					}
				}
			}
		}
	}
}
tt_content.gridelements_pi1.20.10.setup.10 < lib.gridelements.10

# 20-10-2013 

#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# Orbit Slider Configuration - id=2
#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Control-parameters from parent element
# carousel_type: slide, slide carousel-fade
# carousel_interval: NULL, 1..10s
# carousel_flip_cols: boolean
# carousel_bg_scheme: NULL, bg_0, bg_1
# controls: boolean
# carousel_hide_control_sizes: NULL, hidden-xs, hidden-sm, hidden-sm hidden-xs
# indicators: boolean
# carousel_hide_indicator_sizes: NULL, hidden-xs, hidden-sm, hidden-sm hidden-xs

orbit.slider < lib.gridelements.defaultGridSetup
orbit.slider {
	columns {
		0 {
			renderObj = COA
			renderObj {
				10 = LOAD_REGISTER
				10.icounter = -1

				20 = FILES
				20 {
					references {
						references {
						  table = tt_content
						  uid.field = uid
						  uid.override.field = _LOCALIZED_UID
						  fieldName = image
						}
					}

					renderObj = COA
					renderObj {
						10 = COA
						10 {
							10 = TEXT
							10.data = file:current:title
							10.htmlSpecialChars = 1
							10.wrap = <header><h1>|</h1></header>
							20 = TEXT
							20.data = file:current:description
							20.htmlSpecialChars = 1
							20.wrap = <p class="lead">|</p>
							30 = TEXT
							30 {
								data = file:current:link
								required = 1
								split.token = " 
								split.returnKey = 1
								htmlSpecialChars = 1
								typolink {
									parameter.data = file:current:link
									ATagParams = class="btn btn-large btn-primary" 
								}
							}
							wrap = <div class="col-sm-6 col-md-6 col-lg-6"><div class="c-text-wrapper">|</div></div>

							stdWrap.append = CASE
							stdWrap.append {
								key.field = parentgrid_flexform_carousel_flip_cols
								default = IMAGE
								default {
									file.import.data = file:current:publicUrl
									file.maxW = 570c
									altText.data = file:current:alternative
									params = class="img-responsive" 
									wrap = <div class="col-sm-6 col-md-6 col-lg-6">|</div>
								}
								1 < .default
								1.if.isFalse {
									data = register:icounter
									stdWrap.wrap = |%2
									prioriCalc = intval
								}

							}
							stdWrap.prepend = IMAGE
							stdWrap.prepend {
									file.import.data = file:current:publicUrl
									file.maxW = 570c
									params = class="img-responsive" 
									altText.data = file:current:alternative
									if.isTrue {
										data = register:icounter
										stdWrap.wrap = |%2
										prioriCalc = intval
									}
									wrap = <div class="col-sm-6 col-md-6 col-lg-6">|</div>
									stdWrap.fieldRequired = parentgrid_flexform_carousel_flip_cols
							}
						}

						30 = LOAD_REGISTER
						30 {
							icounter.data = register:icounter
							icounter.stdWrap.wrap = |+1
							icounter.prioriCalc = 1
						}
						40 = LOAD_REGISTER
						40.indicator.cObject = TEXT
						40.indicator.cObject {
							fieldRequired = parentgrid_flexform_carousel_show_indicators
							dataWrap = <li class="active" data-slide-to="{register:icounter}" data-target="#carousel-c{field:uid}"></li> || {register:indicator}|<li data-slide-to="{register:icounter}" data-target="#carousel-c{field:uid}"></li>
						}

						wrap = <div class="item active"><div class="container"><div class="row">|</div></div></div> || <div class="item"><div class="container"><div class="row">|</div></div></div>
					}
					stdWrap {
						innerWrap = <div class="carousel-inner {field:parentgrid_flexform_carousel_bg_scheme}">|</div>
						# The position indicators
						preCObject = TEXT
						preCObject {
							data = register:indicator
							required = 1
							wrap = <ol class="carousel-indicators {field:parentgrid_flexform_carousel_hide_indicator_sizes}">|</ol>
						}
						# The prev/next navigation elements
						postCObject = TEXT
						postCObject {
							fieldRequired = parentgrid_flexform_carousel_show_controls
							wrap = <a class="left carousel-control {field:parentgrid_flexform_carousel_hide_control_sizes}" data-slide="prev" href="#carousel-c{field:uid}"><span class="badge glyphicon glyphicon-chevron-left"></span></a><a class="right carousel-control {field:parentgrid_flexform_carousel_hide_control_sizes}" data-slide="next" href="#carousel-c{field:uid}"><span class="badge glyphicon glyphicon-chevron-right"></span></a>
						}
						wrap = <div id="carousel-c{field:uid}" class="carousel carousel2 {field:parentgrid_flexform_carousel_type}" data-interval="{field:parentgrid_flexform_carousel_interval}" >|</div>
						insertData = 1
					}
				}

				30 = RESTORE_REGISTER
			}
		}
	}
}

tt_content.gridelements_pi1.20.10.setup.2 < orbit.slider

# 19-10-2013 
lib.gridelements {
	10 < .defaultGridSetup
	10 {
		columns {
		  default {
			  wrap {
				  field = flexform_sectiontype
				  wrap = <div class="|" data-section>
				  }
			  wrap2 = |</div>
			}
		}
	}
}
---
# 3 cols - Version 1:
/*
lib.gridelements_class {
		1 < .defaultGridSetup
		1 {
			wrap = <div class="row">|</div>
			columns {
				default {
					wrap {
						field = flexform_colclass_1
						#listNum = 1
						#listNum.splitChar = /
						noTrimWrap = |<div class="|">|
						}
					wrap2 = |</div>
					}
				1 < .default
				1.wrap.field = flexform_colclass_2
				2 < .default
				2.wrap.field = flexform_colclass_3
				}
			}
    }
tt_content.gridelements_pi1.20.10.setup.3 < lib.gridelements_class.1
*/
/*
##### xml - Version 2:

<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
    <T3DataStructure>
    <meta>
    <langDisable>1</langDisable>
    </meta>
    <ROOT type="array">
    <type>array</type>
    <el type="array">
    <columns type="array">
    <TCEforms type="array">
    <label>Individuelle Klassen</label>
    <config type="array">
    <type>input</type>
    <items type="array">
    <numIndex index="0" type="array">
    <numIndex index="0">3/3/6</numIndex>
    <numIndex index="1">3/3/6</numIndex>
    </numIndex>
    <numIndex index="1" type="array">
    <numIndex index="0">3/4/5</numIndex>
    <numIndex index="1">3/4/5</numIndex>
    </numIndex>
    <numIndex index="2" type="array">
    <numIndex index="0">3/5/4</numIndex>
    <numIndex index="1">3/5/4</numIndex>
    </numIndex>
    <numIndex index="3" type="array">
    <numIndex index="0">3/6/3</numIndex>
    <numIndex index="1">3/6/3</numIndex>
    </numIndex>
    <numIndex index="4" type="array">
    <numIndex index="0">4/3/5</numIndex>
    <numIndex index="1">4/3/5</numIndex>
    </numIndex>
    <numIndex index="5" type="array">
    <numIndex index="0">4/4/4</numIndex>
    <numIndex index="1">4/4/4</numIndex>
    </numIndex>
    <numIndex index="6" type="array">
    <numIndex index="0">4/5/3</numIndex>
    <numIndex index="1">4/5/3</numIndex>
    </numIndex>
    <numIndex index="7" type="array">
    <numIndex index="0">5/3/4</numIndex>
    <numIndex index="1">5/3/4</numIndex>
    </numIndex>
    <numIndex index="8" type="array">
    <numIndex index="0">5/4/3</numIndex>
    <numIndex index="1">5/4/3</numIndex>
    </numIndex>
    <numIndex index="9" type="array">
    <numIndex index="0">6/3/3</numIndex>
    <numIndex index="1">6/3/3</numIndex>
    </numIndex>
    </items>
    </config>
    </TCEforms>
    </columns>
    </el>
    </ROOT>
</T3DataStructure>

##### xml - Version 1:

<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
<T3DataStructure>
    <meta>
    <langDisable>1</langDisable>
    </meta>
	<ROOT type="array">
	<type>array</type>
	<el type="array">
	<columns type="array">
	<colclass_1 type="array">
	<TCEforms type="array">
	<config type="array">
	<type>input</type>
	<size>48</size>
	<eval>trim</eval>
	</config>
	<label>Klasse Spalte 1: </label>
	</TCEforms>
	</colclass_1>
	<colclass_2 type="array">
	<TCEforms type="array">
	<config type="array">
	<type>input</type>
	<size>48</size>
	<eval>trim</eval>
	</config>
	<label>Klasse Spalte 2: </label>
	</TCEforms>
	</colclass_2>
	<colclass_3 type="array">
	<TCEforms type="array">
	<config type="array">
	<type>input</type>
	<size>48</size>
	<eval>trim</eval>
	</config>
	<label>Klasse Spalte 3: </label>
	</TCEforms>
	</colclass_3>
	</columns>
	</el>
	</ROOT>
</T3DataStructure>

##### ende xml
*/

/*
lib.gridelements_class {
		1 < .defaultGridSetup
		1 {
			wrap = <div class="row">|</div>
			columns {
				default {
					wrap {
						field = flexform_columns2
						listNum = 1
						listNum.splitChar = /
						noTrimWrap = |<div class="|">|
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
*/	

/*
# xml:

<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
    <T3DataStructure>
    <meta>
    <langDisable>1</langDisable>
    </meta>
    <ROOT type="array">
    <type>array</type>
    <el type="array">
    <columns type="array">
    <TCEforms type="array">
    <label>Column Arrangement</label>
    <config type="array">
    <type>select</type>
    <items type="array">
    <numIndex index="0" type="array">
    <numIndex index="0">3/3/6</numIndex>
    <numIndex index="1">3/3/6</numIndex>
    </numIndex>
    <numIndex index="1" type="array">
    <numIndex index="0">3/4/5</numIndex>
    <numIndex index="1">3/4/5</numIndex>
    </numIndex>
    <numIndex index="2" type="array">
    <numIndex index="0">3/5/4</numIndex>
    <numIndex index="1">3/5/4</numIndex>
    </numIndex>
    <numIndex index="3" type="array">
    <numIndex index="0">3/6/3</numIndex>
    <numIndex index="1">3/6/3</numIndex>
    </numIndex>
    <numIndex index="4" type="array">
    <numIndex index="0">4/3/5</numIndex>
    <numIndex index="1">4/3/5</numIndex>
    </numIndex>
    <numIndex index="5" type="array">
    <numIndex index="0">4/4/4</numIndex>
    <numIndex index="1">4/4/4</numIndex>
    </numIndex>
    <numIndex index="6" type="array">
    <numIndex index="0">4/5/3</numIndex>
    <numIndex index="1">4/5/3</numIndex>
    </numIndex>
    <numIndex index="7" type="array">
    <numIndex index="0">5/3/4</numIndex>
    <numIndex index="1">5/3/4</numIndex>
    </numIndex>
    <numIndex index="8" type="array">
    <numIndex index="0">5/4/3</numIndex>
    <numIndex index="1">5/4/3</numIndex>
    </numIndex>
    <numIndex index="9" type="array">
    <numIndex index="0">6/3/3</numIndex>
    <numIndex index="1">6/3/3</numIndex>
    </numIndex>
    </items>
    </config>
    </TCEforms>
    </columns>
    </el>
    </ROOT>
</T3DataStructure>


# ende xml
*/



# 3 cols:
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





# slider:

/*

lib.slideShowWrapper (
<div id="portfolioCarousel_{field:uid}" class="carousel slide">
<div class="carousel-inner">|</div>
<a class="carousel-control left" href="#portfolioCarousel_{field:uid}" data-slide="prev">&lsaquo;</a>
<a class="carousel-control right" href="#portfolioCarousel_{field:uid}" data-slide="next">&rsaquo;</a>
</div>
)
 
lib.gridelements_slider {
	1 < lib.gridelements_slider.defaultGridSetup
	1 {
		wrap = <div class="row">|</div>
		columns {
			default {
			dataWrap < lib.slideShowWrapper
			dataWrap.wrap = <div class="span8">|</div>
			dataWrap.if.isFalse.field = flexform_separate
			outerWrap = <div class="span12"><h3>{field:header}</h3>|</div>
			outerWrap.insertData = 1
			renderObj.20 >
			renderObj.20 = COA
			renderObj.20 {
				stdWrap.dataWrap < lib.slideShowWrapper
				stdWrap.dataWrap {
					wrap = <div class="span5"><h4>{field:header}</h4>|</div>
					if.isTrue.field = parentgrid_flexform_separate
					}
					10 = TEXT
					10.field = image
					10.split {
						token = ,
						cObjNum = 1
						1 {
							10 = IMAGE
							10 {
								file {
								import = uploads/media/
								import.current = 1
								treatIdAsReference = 1
								width = 770c
								height = 385c
								}
								altText {
									field = altText
									listNum.data = register:SPLIT_COUNT
									listNum.splitChar = 13
									}
								titleText < .altText
								titleText.field = titleText
								wrap = <div class="item">|</div>
							}
						}
					}
				}
			}
		}
	}
}
tt_content.gridelements_pi1.20.10.setup.2 < lib.gridelements_slider.1

*/

lib.slideShowWrapper (
<div id="portfolioCarousel_{field:uid}" class="carousel slide">
<div class="carousel-inner">|</div>
<a class="carousel-control left" href="#portfolioCarousel_{field:uid}" data-slide="prev">&lsaquo;</a>
<a class="carousel-control right" href="#portfolioCarousel_{field:uid}" data-slide="next">&rsaquo;</a>
</div>
)
lib.gridelements_slider {
	1 < lib.gridelements_slider.defaultGridSetup
	1 {
		wrap = <div class="row">|</div>
		columns {
			default {
					#dataWrap < lib.slideShowWrapper
					outerWrap = <div class="span12"><h3>{field:header}</h3>|</div>
					outerWrap.insertData = 1
					renderObj = COA
					renderObj.10 = FILES
					renderObj.10 {
						stdWrap.dataWrap < lib.slideShowWrapper
						references {
							table = tt_content
							#uid = 182
							#alternativ uid des aktuellen Datensatzes verwenden:
							uid.data = uid
							fieldName = image
							}
							renderObj = COA
							renderObj {
								#10 = TEXT
								#10.data = file:current:identifier
								30 = IMAGE
								30 {
									file {
										import.data = file:current:originalUid
										#import.current = 1
										#treatIdAsReference = 1
									 }
									}
									altText {
									field = title

									}
									wrap = <div class="item">|</div>
									}
								}
							}
					}
				}
			}
		}
	}
}

tt_content.gridelements_pi1.20.10.setup.2 < lib.gridelements_slider.1

###############################################################
/* Sammlung
#http://www.typo3.net/forum/thematik/zeige/thema/113429/?show=1:
10 = FILES
10{
references {
table = tt_content
#uid = 182
#alternativ uid des aktuellen Datensatzes verwenden:
uid.data = uid
fieldName = image
}
renderObj = COA
renderObj {
10 = TEXT
10.data = file:current:identifier
30 = IMAGE
30 {
file.import.data = file:current: originalUid // file:current:uid
}
}
}

###############################################################
#Backup 03-09-2013 11:31
lib.slideShowWrapper (
<div id="portfolioCarousel_{field:uid}" class="carousel slide">
<div class="carousel-inner">|</div>
<a class="carousel-control left" href="#portfolioCarousel_{field:uid}" data-slide="prev">&lsaquo;</a>
<a class="carousel-control right" href="#portfolioCarousel_{field:uid}" data-slide="next">&rsaquo;</a>
</div>
)
lib.gridelements_slider {
	1 < lib.gridelements_slider.defaultGridSetup
	1 {
		wrap = <div class="row">|</div>
		columns {
			default {
					dataWrap < lib.slideShowWrapper
					outerWrap = <div class="span12"><h3>{field:header}</h3>|</div>
					outerWrap.insertData = 1
					renderObj = COA
					renderObj.10 = FILES
					renderObj.10 {
							references {
								table = tt_content
								#uid = 182
								#alternativ uid des aktuellen Datensatzes verwenden:
								uid.data = uid
								fieldName = image
								}
								renderObj = COA
								renderObj {
									10 = TEXT
									10.data = file:current:identifier
									30 = IMAGE
									30 {
										file.import.data = file:current:originalUid // file:current:uid
									}
							}
						}
					}
				}
			}
		}
	}
}

*/

lib.content_5 < styles.content.get
lib.content_5 {
  select.where = colPos=6
  wrap = <div class="main-slider"><div class="slider"><div class="camera_wrap">|</div></div></div>
  renderObj < tt_content.image.20
  renderObj {
    1 {
      file.import.current = 1
      stdWrap.cObject = COA
      stdWrap.cObject {
        wrap = |</div>
        10 = TEXT
        10 {
          wrap = <div data-src="|">
          data = TSFE:lastImageInfo|origFile
        }
        20 = COA
        20 {
          stdWrap {
            required = 1
            wrap = <div class="camera_caption fadeFromBottom">|</div>
          }
          10 = TEXT
          10 {
            field = imagecaption
            required = 1
            parseFunc =< lib.parseFunc
            split {
              token {
                char = 10
              }
              returnKey.data = register : IMAGE_NUM_CURRENT
            }
          }
          20 < .10
          20 {
            field = altText
             noTrimWrap = | <span>|</span>|
          }
        }
      }
    }
    rendering >
    layout {
      default.value = ###IMAGES###
      1 < .default
      2 < .default
      8 < .default
      9 < .default
      10 < .default
      17 < .default
      18 < .default
      25 < .default
      26 < .default
    }
  }
}


#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# Accordion Configuration - id=10
#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

lib.accordionheader = TEXT
lib.accordionheader {
	field = header
	append = TEXT
	append.value = <i title="open/close all" class="icon-plus-sign icon-toggle"></i>
	append.if.isTrue.field = flexform_toggle
	wrap3 = <i title="open" class="icon-caret-right"></i><i title="close" class="icon-caret-down"></i>|
	wrap3.if.isTrue.field = parentgrid_flexform_accordion
	outerWrap = <h4>|</h4>
}

lib.gridelements {
	10 < .defaultGridSetup
	10 {
		prepend < lib.accordionheader
		prepend {
			wrap3 >
			outerWrap = <h3>|</h3>
		}
		wrap = <div class="pane first">|</div>
		outerWrap = <div class="nestable-accordion-first-level">|</div>
		columns {
			default {
				dataWrap = <div class="{field:flexform_settings}">|</div>
				dataWrap.override = <div class="noaccordion">|</div>
				dataWrap.override.if.isFalse.field = flexform_accordion
				renderObj.20 >
				renderObj.20 = CASE
				renderObj.20 {
					key.field = CType
					text = COA
					text.10 < lib.accordionheader
					text.20 = COA
					text.20.wrap = <div class="pane nested">|</div>
					text.20.20 =< tt_content.text.20
					textpic < .text
					textpic.20.20 < tt_content.textpic.20
					textpic.20.20.text.10 >
					gridelements_pi1 =< tt_content.gridelements_pi1
					gridelements_pi1.20.10.setup.9 {
						prepend < lib.accordionheader
						wrap = <div class="pane nested">|</div>
						outerWrap = |
					}
				}
			}
		}
	}
}
tt_content.gridelements_pi1.20.10.setup.10 < lib.gridelements.10
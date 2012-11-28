<?php
if (!defined ('TYPO3_MODE')) {
  die ('Access denied.');
}



  /////////////////////////////////////////////////
  //
  // Enables the Include Static Templates

  // HfS template
t3lib_extMgm::addStaticFile($_EXTKEY,'static/lib/',                   'HfS - Libraries');
t3lib_extMgm::addStaticFile($_EXTKEY,'static/',                       'HfS - Template');

  // HfS Organiser
t3lib_extMgm::addStaticFile($_EXTKEY,'static/org/department/601/',    '+HfS: Org Abteilung');
t3lib_extMgm::addStaticFile($_EXTKEY,'static/org/department/611/',    '+HfS: Org Abteilung Rand');
t3lib_extMgm::addStaticFile($_EXTKEY,'static/org/calendar/201/',      '+HfS: Org Kalender');
t3lib_extMgm::addStaticFile($_EXTKEY,'static/org/calendar/211/',      '+HfS: Org Kalender Rand');
t3lib_extMgm::addStaticFile($_EXTKEY,'static/org/news/401',           '+HfS: Org Nachrichten');
t3lib_extMgm::addStaticFile($_EXTKEY,'static/org/news/411',           '+HfS: Org Nachrichten Rand');
t3lib_extMgm::addStaticFile($_EXTKEY,'static/org/staff/101/',         '+HfS: Org Personal');
t3lib_extMgm::addStaticFile($_EXTKEY,'static/org/staff/111/',         '+HfS: Org Personal (kein Caching!) Rand');
t3lib_extMgm::addStaticFile($_EXTKEY,'static/org/headquarters/501/',  '+HfS: Org Standorte');
t3lib_extMgm::addStaticFile($_EXTKEY,'static/org/headquarters/511/',  '+HfS: Org Standorte Rand');
t3lib_extMgm::addStaticFile($_EXTKEY,'static/org/location/701/',      '+HfS: Org Veranstaltungsorte');
  // Enables the Include Static Templates



?>
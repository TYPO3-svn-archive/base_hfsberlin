<?php

  //////////////////////////////////
  //
  // TEMPLATE

  // _DEFAULT
  // _DEFAULT.postVarSets
  // rootpage_id



  //////////////////////////////////
  //
  // _DEFAULT real URL configuration

$TYPO3_CONF_VARS['EXTCONF']['realurl'] = array
(
  '_DEFAULT' => array
  (
    'init' => array
    (
      'respectSimulateStaticURLs' => 0,
      'enableCHashCache'          => 1,
      'appendMissingSlash'        => 'ifNotFile',
      'enableUrlDecodeCache'      => 1,
      'enableUrlEncodeCache'      => 1,
      'reapplyAbsRefPrefix'       => 1,
    ),
    'pagePath' => array
    (
      'type'              => 'user',
      'userFunc'          => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
      'spaceCharacter'    => '-',
      'languageGetVar'    => 'L',
      'expireDays'        => 7,
      'rootpage_id'       => 0,
      'firstHitPathCache' => 1,
    ),
    'preVars' => array
    (
      array
      (
        'GETvar'    => 'no_cache',
        'valueMap'  => array
        (
          //'nc' => 1, // removed because of cookies and treeview
        ),
        'noMatch' => 'bypass',
      ),
    ),
    // configure filenames for different pagetypes
    'fileName' => array(
      'index' => array(
        'druck.html' => array(
          'keyValues' => array(
            'type' => 98,
          ),
        ),
        'pdf.html' => array(
          'keyValues' => array(
            'type' => 123,
          ),
        ),
      ),
    ),
  ),
);
  // _DEFAULT

  // _DEFAULT.postVarSets
$TYPO3_CONF_VARS['EXTCONF']['realurl']['_DEFAULT']['postVarSets'] = array
(
  '_DEFAULT' => array
  (
    // department: tx_org_department
    'abteilung' => array
    (
      array
      (
        'GETvar' => 'tx_browser_pi1[departmentUid]',
        'lookUpTable' => array
        (
          'table'               => 'tx_org_department',
          'id_field'            => 'uid',
          'alias_field'         => 'title',
          'addWhereClause'      => ' AND NOT deleted AND NOT hidden',
          'useUniqueCache'      => 1,
          'useUniqueCache_conf' => array
          (
            'strtolower'      => 1,
            'spaceCharacter'  => '-',
          ),
        )
      ),
    ),
    // datetime: tx_org_cal
    'zeitraum' => array
    (
      array
      (
        'GETvar' => 'tx_browser_pi1[tx_org_cal.datetime]',
      ),
    ),
    // calendar: tx_org_cal
    'termin' => array
    (
      array
      (
        'GETvar' => 'tx_browser_pi1[calendarUid]',
        'lookUpTable' => array
        (
          'table'               => 'tx_org_cal',
          'id_field'            => 'uid',
          'alias_field'         => 'title',
          'addWhereClause'      => ' AND NOT deleted AND NOT hidden',
          'useUniqueCache'      => 1,
          'useUniqueCache_conf' => array
          (
            'strtolower'      => 1,
            'spaceCharacter'  => '-',
          ),
        )
      ),
    ),
    // news: tx_org_news
    'nachricht' => array
    (
      array
      (
        'GETvar' => 'tx_browser_pi1[newsUid]',
        'lookUpTable' => array
        (
          'table'               => 'tx_org_news',
          'id_field'            => 'uid',
          'alias_field'         => 'title',
          'addWhereClause'      => ' AND NOT deleted AND NOT hidden',
          'useUniqueCache'      => 1,
          'useUniqueCache_conf' => array
          (
            'strtolower'      => 1,
            'spaceCharacter'  => '-',
          ),
        )
      ),
    ),
    // staff: fe_users
    'name' => array
    (
      array
      (
        'GETvar' => 'tx_browser_pi1[staffUid]',
        'lookUpTable' => array
        (
          'table'               => 'tx_org_staff',
          'id_field'            => 'uid',
          'alias_field'         => 'title',
          'addWhereClause'      => ' AND NOT deleted AND NOT hidden',
          'useUniqueCache'      => 1,
          'useUniqueCache_conf' => array
          (
            'strtolower'      => 1,
            'spaceCharacter'  => '-',
          ),
        )
      ),
    ),
    // headquarter: tx_org_headquarters
    'bereich' => array
    (
      array
      (
        'GETvar' => 'tx_browser_pi1[headquartersUid]',
        'lookUpTable' => array
        (
          'table'               => 'tx_org_headquarters',
          'id_field'            => 'uid',
          'alias_field'         => 'title',
          'addWhereClause'      => ' AND NOT deleted AND NOT hidden',
          'useUniqueCache'      => 1,
          'useUniqueCache_conf' => array
          (
            'strtolower'      => 1,
            'spaceCharacter'  => '-',
          ),
        )
      ),
    ),
    // repertoire: tx_org_repertoire
    'stueck' => array
    (
      array
      (
        'GETvar' => 'tx_browser_pi1[repertoireUid]',
        'lookUpTable' => array
        (
          'table'               => 'tx_org_repertoire',
          'id_field'            => 'uid',
          'alias_field'         => 'title',
          'addWhereClause'      => ' AND NOT deleted AND NOT hidden',
          'useUniqueCache'      => 1,
          'useUniqueCache_conf' => array
          (
            'strtolower'      => 1,
            'spaceCharacter'  => '-',
          ),
        )
      ),
    ),
    // veranstalter: tx_org_location
    'veranstalter' => array
    (
      array
      (
        'GETvar' => 'tx_browser_pi1[locationUid]',
        'lookUpTable' => array
        (
          'table'               => 'tx_org_location',
          'id_field'            => 'uid',
          'alias_field'         => 'title',
          'addWhereClause'      => ' AND NOT deleted AND NOT hidden',
          'useUniqueCache'      => 1,
          'useUniqueCache_conf' => array
          (
            'strtolower'      => 1,
            'spaceCharacter'  => '-',
          ),
        )
      ),
    ),
    'ansicht' => array
    (
      array
      (
        'GETvar' => 'tx_browser_pi1[mode]',
      ),
    ),
    'az' => array
    (
      array
      (
        'GETvar' => 'tx_browser_pi1[azTab]',
      ),
    ),
    'seite' => array
    (
      array
      (
        'GETvar' => 'tx_browser_pi1[pointer]',
      ),
    ),
    'pl' => array
    (
      array
      (
        'GETvar' => 'tx_browser_pi1[plugin]',
      ),
    ),
    'sort' => array
    (
      array
      (
        'GETvar' => 'tx_browser_pi1[sort]',
      ),
    ),
    'suche' => array
    (
      array
      (
        'GETvar' => 'tx_browser_pi1[sword]',
      ),
    ),
  ),
);
  // _DEFAULT.postVarSets



  //////////////////////////////////////////////
  //
  // rootpage_id

  // bat-berlin.de        5
  // www.bat-berlin.de    5
  // bat.typo3-org.de     5
  // hfs-berlin.de        1
  // www.hfs-berlin.de    1
  // hfs.typo3-org.de     1

$TYPO3_CONF_VARS['EXTCONF']['realurl']['bat-berlin.de'] = $TYPO3_CONF_VARS['EXTCONF']['realurl']['_DEFAULT'];
$TYPO3_CONF_VARS['EXTCONF']['realurl']['bat-berlin.de']['pagePath']['rootpage_id'] = 5;
$TYPO3_CONF_VARS['EXTCONF']['realurl']['www.bat-berlin.de'] = $TYPO3_CONF_VARS['EXTCONF']['realurl']['_DEFAULT'];
$TYPO3_CONF_VARS['EXTCONF']['realurl']['www.bat-berlin.de']['pagePath']['rootpage_id'] = 5;
$TYPO3_CONF_VARS['EXTCONF']['realurl']['bat.typo3-org.de'] = $TYPO3_CONF_VARS['EXTCONF']['realurl']['_DEFAULT'];
$TYPO3_CONF_VARS['EXTCONF']['realurl']['bat.typo3-org.de']['pagePath']['rootpage_id'] = 5;
$TYPO3_CONF_VARS['EXTCONF']['realurl']['hfs-berlin.de'] = $TYPO3_CONF_VARS['EXTCONF']['realurl']['_DEFAULT'];
$TYPO3_CONF_VARS['EXTCONF']['realurl']['hfs-berlin.de']['pagePath']['rootpage_id'] = 1;
$TYPO3_CONF_VARS['EXTCONF']['realurl']['www.hfs-berlin.de'] = $TYPO3_CONF_VARS['EXTCONF']['realurl']['_DEFAULT'];
$TYPO3_CONF_VARS['EXTCONF']['realurl']['www.hfs-berlin.de']['pagePath']['rootpage_id'] = 1;
$TYPO3_CONF_VARS['EXTCONF']['realurl']['hfs.typo3-org.de'] = $TYPO3_CONF_VARS['EXTCONF']['realurl']['_DEFAULT'];
$TYPO3_CONF_VARS['EXTCONF']['realurl']['hfs.typo3-org.de']['pagePath']['rootpage_id'] = 1;
  // rootpage_id

?>

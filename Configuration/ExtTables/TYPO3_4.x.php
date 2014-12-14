<?php

if ( !defined( 'TYPO3_MODE' ) )
{
  die( 'Access denied.' );
}

/* * ****************************************************************************
 *
 * INDEX
 *
 * Configuration by the extension manager
 *    Localization support
 * Enables the Include Static Templates
 * Add pagetree icons
 * Methods for backend workflows
 * **************************************************************************** */


/* * ****************************************************************************
 * Configuration by the extension manager
 * **************************************************************************** */
$confArr = unserialize( $GLOBALS[ 'TYPO3_CONF_VARS' ][ 'EXT' ][ 'extConf' ][ 'base_hfsberlin' ] );

$beLanguage = $confArr[ 'beLanguage' ];
switch ( $beLanguage )
{
  case( 'German'):
    $beLanguage = 'de';
    break;
  default:
    $beLanguage = 'default';
}

/* * ****************************************************************************
 * Enables the Include Static Templates
 * **************************************************************************** */
switch( true )
{
  case( $beLanguage == 'de' ):
    t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/',              'HfS Berlin [1] +Browser');
    t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/Org/Base/',     'HfS Berlin [2] +Org Base');
    t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/Org/News/401/', 'HfS Berlin [3] +Org News');
    t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript/BAT/',              'HfS Berlin [1] BAT');
    t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Debug/',            'HfS Berlin [9] Debug');
    break;
  default:
    t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/',              'HfS Berlin [1] +Browser');
    t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/Org/Base/',     'HfS Berlin [2] +Org Base');
    t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/Org/News/401/', 'HfS Berlin [3] +Org News');
    t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript/BAT/',              'HfS Berlin [1] BAT');
    t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Debug/',            'HfS Berlin [9] Debug');
    break;
}


/* * ****************************************************************************
 * Add pagetree icons
 * **************************************************************************** */
switch ( true )
{
  case( $beLanguage == 'de' ):
    // German
    $TCA[ 'pages' ][ 'columns' ][ 'module' ][ 'config' ][ 'items' ][] = array( 'HfS-Berlin', 'basehfsbln', t3lib_extMgm::extRelPath( $_EXTKEY ) . 'ext_icon.gif' );
    break;
  default:
    // English
    $TCA[ 'pages' ][ 'columns' ][ 'module' ][ 'config' ][ 'items' ][] = array( 'HfS-Berlin', 'basehfsbln', t3lib_extMgm::extRelPath( $_EXTKEY ) . 'ext_icon.gif' );
    break;
}
t3lib_SpriteManager::addTcaTypeIcon( 'pages', 'contains-basehfsbln', '../typo3conf/ext/base_hfsberlin/ext_icon.gif' );


/* * ****************************************************************************
 * Methods for backend workflows
 * **************************************************************************** */

require_once(t3lib_extMgm::extPath( $_EXTKEY ) . 'lib/userfunc/class.tx_basehfsberlin_userfunc.php');
?>
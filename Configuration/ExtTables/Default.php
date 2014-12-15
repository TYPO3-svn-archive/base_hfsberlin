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
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/',                'HfS Berlin [1] +Browser');
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/Org/Base/',       'HfS Berlin [2] +Org Base');
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/Org/News/401/',   'HfS Berlin [3] +Org News');
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/Org/Staff/101/',  'HfS Berlin [3] +Org People');
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/Debug/',          'HfS Berlin [9] Debug');
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/BAT/',                'BAT Berlin [1] +Browser');
    break;
  default:
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/',                'HfS Berlin [1] +Browser');
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/Org/Base/',       'HfS Berlin [2] +Org Base');
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/Org/News/401/',   'HfS Berlin [3] +Org News');
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/Org/Staff/101/',  'HfS Berlin [3] +Org People');
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/HfS/Debug/',          'HfS Berlin [9] Debug');
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/BAT/',                'BAT Berlin [1] +Browser');
    break;
}


/* * ****************************************************************************
 * Add pagetree icons
 * **************************************************************************** */
switch ( true )
{
  case( $beLanguage == 'de' ):
    // German
    $TCA[ 'pages' ][ 'columns' ][ 'module' ][ 'config' ][ 'items' ][] = array( 'HfS-Berlin', 'basehfsbln', \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath( $_EXTKEY ) . 'ext_icon.gif' );
    break;
  default:
    // English
    $TCA[ 'pages' ][ 'columns' ][ 'module' ][ 'config' ][ 'items' ][] = array( 'HfS-Berlin', 'basehfsbln', \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath( $_EXTKEY ) . 'ext_icon.gif' );
    break;
}
t3lib_SpriteManager::addTcaTypeIcon( 'pages', 'contains-basehfsbln', '../typo3conf/ext/base_hfsberlin/ext_icon.gif' );


/* * ****************************************************************************
 * Methods for backend workflows
 * **************************************************************************** */

require_once(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath( $_EXTKEY ) . 'lib/userfunc/class.tx_basehfsberlin_userfunc.php');
?>
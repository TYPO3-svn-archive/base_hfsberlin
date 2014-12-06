<?php

if ( !defined( 'TYPO3_MODE' ) )
{
  die( 'Access denied.' );
}

if ( TYPO3_MODE !== 'BE' )
{
  return;
}

/* * ****************************************************************************
 * TYPO3 Version
 * **************************************************************************** */
list( $main, $sub, $bugfix ) = explode( '.', TYPO3_version );
$version = ( ( int ) $main ) * 1000000;
$version = $version + ( ( int ) $sub ) * 1000;
$version = $version + ( ( int ) $bugfix ) * 1;
$typo3Version = $version;

/* * ****************************************************************************
 * Page TSConfig
 * **************************************************************************** */
switch ( TRUE )
{
  case($typo3Version < 6000000):
    //t3lib_extMgm::addPageTSConfig( '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:base_hfsberlin/ext_localconf/addPageTSConfig/components/navigation/topbar.txt">' );
    break;
  case($typo3Version >= 6000000):
  default:
    //\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig( '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:base_hfsberlin/ext_localconf/addPageTSConfig/components/navigation/topbar.txt">' );
    break;
}

/* * ****************************************************************************
 * BackendLayoutDataProvider
 * **************************************************************************** */
$GLOBALS[ 'TYPO3_CONF_VARS' ][ 'SC_OPTIONS' ][ 'BackendLayoutDataProvider' ][ 'base_hfsberlin' ] = 'Netzmacher\\Base_Hfsberlin\\Provider\\BackendLayoutDataProvider';
?>
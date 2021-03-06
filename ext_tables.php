<?php

if ( !defined( 'TYPO3_MODE' ) )
{
  die( 'Access denied.' );
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
    require( PATH_typo3conf . 'ext/base_hfsberlin/Configuration/ExtTables/TYPO3_4.x.php' );
    break;
  case($typo3Version >= 6000000):
  default:
    require( PATH_typo3conf . 'ext/base_hfsberlin/Configuration/ExtTables/Default.php' );
    break;
}
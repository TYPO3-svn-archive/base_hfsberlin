<?php

if ( !defined( 'TYPO3_MODE' ) )
{
  die( 'Access denied.' );
}

  // #i0001, 141211, dwildt
if ( TYPO3_MODE == 'BE' )
{
  require( PATH_typo3conf . 'ext/base_hfsberlin/Configuration/ExtLocalconf/be.php' );
}

?>
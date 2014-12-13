<?php

namespace Netzmacher\Base_hfsberlin\Provider;

/* * *************************************************************
 *
 *  The MIT License (MIT)
 *
 *  Copyright (c) 2014 Dirk Wildt, http://wildt.at.die-netzmacher.de
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 * ************************************************************* */


use TYPO3\CMS\Backend\View\BackendLayout\BackendLayout;
use TYPO3\CMS\Backend\View\BackendLayout\BackendLayoutCollection;
use TYPO3\CMS\Backend\View\BackendLayout\DataProviderContext;
#use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * @author Dirk Wildt <http://wildt.at.die-netzmacher.de>
 */

class BackendLayoutDataProvider implements \TYPO3\CMS\Backend\View\BackendLayout\DataProviderInterface
{

  /**
   * Default Backend Layouts for Bootstrap Theme
   *
   * @var array
   */
  protected $backendLayouts = array(
    'hfs_root' => array(
      'title' => 'LLL:EXT:base_hfsberlin/Resources/Private/Language/Backend.xlf:backend_layout.hfs_root',
      'config' => '
        backend_layout {
          colCount = 10
          rowCount = 2
          rows {
            1 {
              columns {
                1 {
                  name = LLL:EXT:base_hfsberlin/Resources/Private/Language/Backend.xlf:backend_layout.column.content.header
                  colPos  = 3
                  colspan = 7
                }
                2 {
                  name = LLL:EXT:base_hfsberlin/Resources/Private/Language/Backend.xlf:backend_layout.column.content.navigation
                  colPos  = 1
                  colspan = 3
                  rowspan = 3
                }
              }
            }
            2 {
              columns {
                1 {
                  name = LLL:EXT:base_hfsberlin/Resources/Private/Language/Backend.xlf:backend_layout.column.content.main
                  colPos  = 0
                  colspan = 7
                }
              }
            }
          }
        }
      ',
      'icon' => 'EXT:base_hfsberlin/Resources/Public/Images/BackendLayouts/hfs_root.gif'
    ),
    'hfs_default' => array(
      'title' => 'LLL:EXT:base_hfsberlin/Resources/Private/Language/Backend.xlf:backend_layout.hfs_default',
      'config' => '
        backend_layout {
          colCount = 10
          rowCount = 1
          rows {
            1 {
              columns {
                1 {
                  name = LLL:EXT:base_hfsberlin/Resources/Private/Language/Backend.xlf:backend_layout.column.content.header
                  colPos  = 3
                  colspan = 10
                }
                2 {
                  name = LLL:EXT:base_hfsberlin/Resources/Private/Language/Backend.xlf:backend_layout.column.content.main
                  colPos  = 0
                  colspan = 10
                }
              }
            }
          }
        }
      ',
      'icon' => 'EXT:base_hfsberlin/Resources/Public/Images/BackendLayouts/hfs_default.gif'
    ),
    'bat_default' => array(
      'title' => 'LLL:EXT:base_hfsberlin/Resources/Private/Language/Backend.xlf:backend_layout.bat_default',
      'config' => '
        backend_layout {
          colCount = 12
          rowCount = 1
          rows {
            1 {
              columns {
                1 {
                  name = LLL:EXT:base_hfsberlin/Resources/Private/Language/Backend.xlf:backend_layout.column.content.navigation
                  colPos  = 1
                  colspan = 2
                }
                2 {
                  name = LLL:EXT:base_hfsberlin/Resources/Private/Language/Backend.xlf:backend_layout.column.content.main
                  colPos  = 0
                  colspan = 8
                }
                3 {
                  name = LLL:EXT:base_hfsberlin/Resources/Private/Language/Backend.xlf:backend_layout.column.content.margin
                  colPos  = 2
                  colspan = 2
                }
              }
            }
          }
        }
      ',
      'icon' => 'EXT:base_hfsberlin/Resources/Public/Images/BackendLayouts/bat_default.gif'
    ),
  );

  /**
   * @param DataProviderContext $dataProviderContext
   * @param BackendLayoutCollection $backendLayoutCollection
   * @return void
   */
  public function addBackendLayouts( DataProviderContext $dataProviderContext, BackendLayoutCollection $backendLayoutCollection )
  {
    foreach ( $this->backendLayouts as $key => $data )
    {
      $data[ 'uid' ] = $key;
      $backendLayout = $this->createBackendLayout( $data );
      $backendLayoutCollection->add( $backendLayout );
    }
  }

  /**
   * Gets a backend layout by (regular) identifier.
   *
   * @param string $identifier
   * @param integer $pageId
   * @return NULL|BackendLayout
   */
  public function getBackendLayout( $identifier, $pageId )
  {
    $backendLayout = NULL;
    if ( array_key_exists( $identifier, $this->backendLayouts ) )
    {
      return $this->createBackendLayout( $this->backendLayouts[ $identifier ] );
    }
    return $backendLayout;
  }

  /**
   * Creates a new backend layout using the given record data.
   *
   * @param array $data
   * @return BackendLayout
   */
  protected function createBackendLayout( array $data )
  {
    $backendLayout = BackendLayout::create( $data[ 'uid' ], $data[ 'title' ], $data[ 'config' ] );
    $backendLayout->setIconPath( $this->getIconPath( $data[ 'icon' ] ) );
    $backendLayout->setData( $data );
    return $backendLayout;
  }

  /**
   * Gets and sanitizes the icon path.
   *
   * @param string $icon Name of the icon file
   * @return string
   */
  protected function getIconPath( $icon )
  {
    $iconPath = '';
    if ( !empty( $icon ) )
    {
      $iconPath = $icon;
    }
    return $iconPath;
  }

}

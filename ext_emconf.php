<?php

########################################################################
# Extension Manager/Repository config file for ext "base_hfsberlin".
#
# Auto generated 24-09-2012 21:51
#
# Manual updates:
# Only the data in the array - everything else is removed by next
# writing. "version" and "dependencies" must not be touched!
########################################################################

$EM_CONF[$_EXTKEY] = array(
    'title' => 'HfS Berlin - Template',
    'description' => 'Basic Template for HfS Berlin',
    'category' => 'templates',
    'author' => 'Dirk Wildt - Die Netzmacher GbR',
    'author_email' => 'http://wildt.at.die-netzmacher.de',
    'shy' => '',
    'dependencies' => 'automaketemplate,powermail,powermail_cond,org,org_repertoire,realurl,tsconf',
    'conflicts' => '',
    'priority' => '',
    'module' => '',
    'state' => 'stable',
    'internal' => '',
    'uploadfolder' => 0,
    'createDirs' => '',
    'modify_tables' => '',
    'clearCacheOnLoad' => 0,
    'lockType' => '',
    'author_company' => '',
    'version' => '3.0.0',
    'constraints' => array(
        'depends' => array(
            'automaketemplate' => '0.1.3-0.0.0',
            'powermail' => '1.6.9-0.0.0',
            'powermail_cond' => '1.0.2-0.0.0',
            'org' => '2.2.0-2.2.0',
            'org_repertoire' => '1.0.1-0.0.0',
            'realurl' => '1.12.3-0.0.0',
            'tsconf' => '1.0.1-0.0.0',
        ),
        'conflicts' => array(
        ),
        'suggests' => array(
        ),
    ),
    'suggests' => array(
    ),
    '_md5_values_when_last_written' => 'a:96:{s:9:"ChangeLog";s:4:"a4d9";s:11:"INSTALL.txt";s:4:"ec4a";s:12:"ext_icon.gif";s:4:"f33d";s:14:"ext_tables.php";s:4:"fb03";s:38:"res/backend_user/01_admin/tsConfig.txt";s:4:"57da";s:28:"res/html/current/favicon.ico";s:4:"a9fa";s:33:"res/html/current/hfs_rss-feed.gif";s:4:"e2b2";s:27:"res/html/current/index.html";s:4:"9458";s:30:"res/html/current/css/index.css";s:4:"12bf";s:30:"res/html/current/css/print.css";s:4:"affa";s:44:"res/html/current/css/background/hfs_logo.gif";s:4:"3d25";s:35:"res/html/current/css/img/footer.gif";s:4:"dbcb";s:41:"res/html/current/css/img/footer_right.gif";s:4:"a190";s:35:"res/html/current/css/img/header.gif";s:4:"d2c8";s:41:"res/html/current/css/img/header_right.gif";s:4:"2c03";s:33:"res/html/current/css/img/sort.gif";s:4:"39b3";s:42:"res/html/current/css/img/submenu_activ.gif";s:4:"69cf";s:44:"res/html/current/css/img/submenu_default.gif";s:4:"31e5";s:32:"res/html/current/css/img/tab.gif";s:4:"b889";s:36:"res/html/current/css/img/tab_act.gif";s:4:"1b42";s:42:"res/html/current/css/img/tab_act_right.gif";s:4:"3301";s:38:"res/html/current/css/img/tab_first.gif";s:4:"61ce";s:38:"res/html/current/css/img/tab_right.gif";s:4:"0375";s:28:"res/html/default/favicon.ico";s:4:"a9fa";s:27:"res/html/default/index.html";s:4:"f18d";s:30:"res/html/default/css/index.css";s:4:"e96f";s:41:"res/html/default/css/background/index.gif";s:4:"2f47";s:27:"res/html/former/favicon.ico";s:4:"a9fa";s:26:"res/html/former/index.html";s:4:"25a2";s:29:"res/html/former/css/index.css";s:4:"5bc3";s:38:"res/html/org/calendar/201/default.tmpl";s:4:"f4ad";s:38:"res/html/org/calendar/211/default.tmpl";s:4:"1777";s:40:"res/html/org/department/601/default.tmpl";s:4:"6f4f";s:40:"res/html/org/department/611/default.tmpl";s:4:"b9c7";s:42:"res/html/org/headquarters/501/default.tmpl";s:4:"600b";s:42:"res/html/org/headquarters/511/default.tmpl";s:4:"cc0e";s:38:"res/html/org/location/701/default.tmpl";s:4:"1ce9";s:38:"res/html/org/location/710/default.tmpl";s:4:"49cc";s:34:"res/html/org/news/401/default.tmpl";s:4:"0a0d";s:34:"res/html/org/news/411/default.tmpl";s:4:"63f5";s:42:"res/html/org/shopping_cart/801/default.css";s:4:"9d27";s:43:"res/html/org/shopping_cart/801/default.tmpl";s:4:"fed8";s:43:"res/html/org/shopping_cart/810/default.tmpl";s:4:"8532";s:35:"res/html/org/staff/101/default.tmpl";s:4:"0cf7";s:35:"res/html/org/staff/111/default.tmpl";s:4:"5b1d";s:41:"res/html/powermail/css/aufnahmeantrag.css";s:4:"9b66";s:21:"res/icons/main_10.gif";s:4:"047b";s:21:"res/icons/main_20.gif";s:4:"a320";s:21:"res/icons/main_30.gif";s:4:"6f38";s:20:"res/icons/sub_10.gif";s:4:"1a4f";s:20:"res/icons/sub_20.gif";s:4:"4797";s:27:"res/icons/icon_16px/pdf.png";s:4:"17eb";s:31:"res/icons/icon_16px/printer.png";s:4:"54a0";s:38:"res/images/alternate_image_400x300.gif";s:4:"6f9f";s:43:"res/images/alternate_image_400x300_grey.gif";s:4:"614d";s:38:"res/images/01_hfsBerlin/hfs-berlin.jpg";s:4:"6cd7";s:35:"res/pages/01_hfsBerlin/tsConfig.txt";s:4:"598c";s:48:"res/pages/01_hfsBerlin/02_libraries/tsConfig.txt";s:4:"0d35";s:58:"res/pages/01_hfsBerlin/02_libraries/03_header/tsConfig.txt";s:4:"187f";s:58:"res/pages/01_hfsBerlin/02_libraries/04_footer/tsConfig.txt";s:4:"187f";s:47:"res/pages/01_hfsBerlin/typoscript/constants.txt";s:4:"d41d";s:43:"res/pages/01_hfsBerlin/typoscript/setup.txt";s:4:"09b3";s:20:"static/constants.txt";s:4:"c997";s:16:"static/setup.txt";s:4:"c198";s:24:"static/lib/constants.txt";s:4:"d41d";s:20:"static/lib/setup.txt";s:4:"c77d";s:29:"static/org/base/constants.txt";s:4:"f494";s:25:"static/org/base/setup.txt";s:4:"6399";s:37:"static/org/calendar/201/constants.txt";s:4:"d41d";s:33:"static/org/calendar/201/setup.txt";s:4:"baa3";s:37:"static/org/calendar/211/constants.txt";s:4:"d41d";s:33:"static/org/calendar/211/setup.txt";s:4:"72cd";s:39:"static/org/department/601/constants.txt";s:4:"d41d";s:35:"static/org/department/601/setup.txt";s:4:"3c8d";s:39:"static/org/department/611/constants.txt";s:4:"d41d";s:35:"static/org/department/611/setup.txt";s:4:"3bee";s:41:"static/org/headquarters/501/constants.txt";s:4:"d41d";s:37:"static/org/headquarters/501/setup.txt";s:4:"00e8";s:41:"static/org/headquarters/511/constants.txt";s:4:"d41d";s:37:"static/org/headquarters/511/setup.txt";s:4:"64b5";s:37:"static/org/location/701/constants.txt";s:4:"d41d";s:33:"static/org/location/701/setup.txt";s:4:"93ff";s:37:"static/org/location/710/constants.txt";s:4:"d41d";s:33:"static/org/location/710/setup.txt";s:4:"9529";s:33:"static/org/news/401/constants.txt";s:4:"d41d";s:29:"static/org/news/401/setup.txt";s:4:"7565";s:33:"static/org/news/411/constants.txt";s:4:"d41d";s:29:"static/org/news/411/setup.txt";s:4:"b830";s:42:"static/org/shopping_cart/801/constants.txt";s:4:"d41d";s:38:"static/org/shopping_cart/801/setup.txt";s:4:"2da0";s:42:"static/org/shopping_cart/810/constants.txt";s:4:"fa13";s:38:"static/org/shopping_cart/810/setup.txt";s:4:"c30e";s:34:"static/org/staff/101/constants.txt";s:4:"d41d";s:30:"static/org/staff/101/setup.txt";s:4:"f9e8";s:34:"static/org/staff/111/constants.txt";s:4:"d41d";s:30:"static/org/staff/111/setup.txt";s:4:"8d0b";}',
);

?>
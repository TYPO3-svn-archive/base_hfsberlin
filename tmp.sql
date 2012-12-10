SELECT  COUNT( DISTINCT tx_org_department.uid ) AS 'hits', 
        tx_org_departmentcat.uid AS 'tx_org_departmentcat.uid', 
        tx_org_departmentcat.title AS 'tx_org_departmentcat.title' 
FROM tx_org_department 
LEFT JOIN tx_org_department_mm_tx_org_departmentcat 
          ON
          (
            tx_org_department.uid = tx_org_department_mm_tx_org_departmentcat.uid_local 
          ) 
LEFT JOIN tx_org_departmentcat 
          ON 
          ( 
                tx_org_department_mm_tx_org_departmentcat.uid_foreign = tx_org_departmentcat.uid 
            AND tx_org_departmentcat.deleted=0 
            AND tx_org_departmentcat.hidden=0 
            AND tx_org_departmentcat.pid 
            IN  (116,114,115,119,215,120,117,18) 
          ) 
LEFT JOIN tx_org_headquarters_mm_tx_org_department 
          ON 
          ( 
            tx_org_department.uid = tx_org_headquarters_mm_tx_org_department.uid_foreign 
          ) 
LEFT JOIN tx_org_headquarters 
          ON 
          ( 
                tx_org_headquarters_mm_tx_org_department.uid_local = tx_org_headquarters.uid 
            AND tx_org_headquarters.deleted=0 
            AND tx_org_headquarters.hidden=0 
            AND 
            (
                  tx_org_headquarters.fe_group='' 
              OR  tx_org_headquarters.fe_group IS NULL 
              OR  tx_org_headquarters.fe_group='0' 
              OR  FIND_IN_SET('0',tx_org_headquarters.fe_group) 
              OR  FIND_IN_SET('-1',tx_org_headquarters.fe_group)
            ) 
            AND tx_org_headquarters.pid IN (116,114,115,119,215,120,117,18) 
          ) 
LEFT JOIN tx_org_department_mm_fe_users ON ( tx_org_department.uid = tx_org_department_mm_fe_users.uid_local ) 
LEFT JOIN fe_users AS fe_users
          ON 
          ( 
                tx_org_department_mm_fe_users.uid_foreign = fe_users.uid 
            AND fe_users.deleted=0 
            AND fe_users.disable=0 
            AND fe_users.starttime<=1355146800 
            AND (fe_users.endtime=0 OR fe_users.endtime>1355146800) 
            AND fe_users.pid 
            IN (116,114,115,119,215,120,117,18) 
          ) 
LEFT JOIN fe_users AS fe_users_02
          ON 
          ( 
                FIND_IN_SET ( fe_users_02.uid, tx_org_department.manager ) 
            AND fe_users_02.deleted=0 
            AND fe_users_02.disable=0 
            AND fe_users_02.starttime<=1355146800 
            AND (fe_users_02.endtime=0 OR fe_users_02.endtime>1355146800) 
            AND fe_users_02.pid IN (116,114,115,119,215,120,117,18) 
          ) 
WHERE     tx_org_department.deleted=0 
      AND tx_org_department.hidden=0 
      AND
      (
            tx_org_department.fe_group='' 
        OR  tx_org_department.fe_group IS NULL 
        OR  tx_org_department.fe_group='0' 
        OR  FIND_IN_SET('0',tx_org_department.fe_group) 
        OR  FIND_IN_SET('-1',tx_org_department.fe_group)
      ) 
AND   tx_org_department.pid IN (116,114,115,119,215,120,117,18) 
AND   tx_org_department.sys_language_uid <= 0 
GROUP BY tx_org_departmentcat.title 
ORDER BY tx_org_departmentcat.title ASC
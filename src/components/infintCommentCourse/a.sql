            SELECT 
                                    A.STATUSZONECODE,
                                    A.STATUSZONETITLE,
                                    A.STATUSRGNCODE,
                                    A.STATUSRGNTITLE,
                                    CHAR(A.STATUSFCLTYOWNERBRANCH) AS STATUSFCLTYOWNERBRANCH,
                                    A.STATUSFCLTYOWNRBRNCHDESC,
                                    CHAR(A.STATUSBRANCHID) AS STATUSBRANCHID,
                                    A.STATUSBRANCHTITLE,
                                    SUM(CNT) AS CNT,
                                    SUM(AMOUNT) AS AMOUNT                               
           FROM  (SELECT  DISTINCT
                                    C.STATUSZONECODE,
                                    C.STATUSZONETITLE,
                                    C.STATUSRGNCODE,
                                    C.STATUSRGNTITLE,
                                    CHAR(C.STATUSFCLTYOWNERBRANCH) AS STATUSFCLTYOWNERBRANCH,
                                    C.STATUSFCLTYOWNRBRNCHDESC,
                                    CHAR(C.STATUSBRANCHID) AS STATUSBRANCHID,
                                    C.STATUSBRANCHTITLE,
                                    CASE C.BCHQTYPEID2
                                                WHEN 1 THEN 'عهده'
                                                WHEN 2 THEN 'واگذاری'
                                    END AS BCHQTYPEID2,
                                    C.SERI,
                                    CHAR(C.SERIAL) AS SERIAL,
                                    C.CHECKDIGIT,
                                    C.AMOUNT,
                                    C.FROMBANKNAME,
                                    C.TOBANKNAME,
                                    C.CHQDESC,
                                    B.SETTLEMENTDESC,
                                    CHAR(C.PAYEEEXTACCNO) AS PAYEEEXTACCNO,
                                    CHAR(C.PAYEEACCNOOTH) AS PAYEEACCNOOTH,
                                    CHAR(C.APPACCNO) AS APPACCNO,
                                    CHAR(C.APPEXTACCNO) AS APPEXTACCNO,
                                    CHAR(C.ISSUEDSTATUSDATE) AS ISSUEDSTATUSDATE,
                                    CHAR(C.PAYSTATUSDATE) AS PAYSTATUSDATE,
                                      C.ISSUEDSTATUSUSERID,
                                    C.ISSUEDSTATUSUSERNAME,
                                    C.PAYSTATUSUSERID,
                                    C.PAYSTATUSUSERNAME,
                                    C.STATUSUSERID,
                                    C.STATUSUSERNAME,
                                    CHAR(C.SETTSTATUSDATE) AS SETTSTATUSDATE,
                                    1 AS CNT
                                    
            FROM TESTSHMA.SINABANKCHQ AS C
            INNER JOIN WRHSHMA.DIMBANKCHQSTATUS AS B ON C.BCHQSTATUS_ID = B.ID
            INNER JOIN WRHSHMA.DIMBRANCH DB ON (C.ISSUEDSTATUSBRANCHID = DB.BRANCH AND DB.RECENTFLAG = 1)
                    
             WHERE 
             
--              C.ISSUEDSTATUSBRANCHID=65359
--              AND C.ISSUEDSTATUSDATE =14010901
             
             
                        1 = 1
                        #         
                        CASE PROMPT('P_DAYDATEF','token',0) WHEN 0 THEN ''
                                    ELSE ' AND C.ISSUEDSTATUSDATE >= (' + PROMPT('P_DAYDATEF','token',0) +')' END
                        +
                        CASE PROMPT('P_DAYDATET','token',0) WHEN 0 THEN ''
                                    ELSE ' AND C.ISSUEDSTATUSDATE <= (' + PROMPT('P_DAYDATET','token',0) +')' END    
                        +
                        CASE PROMPT("P_ZNCODE_SEARCH","string",'0') WHEN '0' THEN ''
                                    ELSE ' AND DB.ZONECODE IN (' +  csv ( split(' , ', PROMPT('P_ZNCODE_SEARCH','token','0')  ) )   +')' END
                        +
                        CASE PROMPT("P_RGNCODE_SEARCH","string",'0') WHEN '0' THEN ''
                                    ELSE ' AND DB.RGNCODE IN (' +  csv ( split(' , ', PROMPT('P_RGNCODE_SEARCH','token','0')  ) )   +')' END
                        +
                        CASE PROMPT("P_FCLCODE_SEARCH","string",'0') WHEN '0' THEN ''
                                    ELSE ' AND DB.FCLTYOWNERBRANCH IN (' +  csv ( split(' , ', PROMPT('P_FCLCODE_SEARCH','token','0')  ) )   +')' END               
                        +
                        CASE PROMPT("P_BRNCODE_SEARCH","string",'0') WHEN '0' THEN ''
                                    ELSE ' AND DB.BRANCH IN (' +  csv ( split(' , ', PROMPT('P_BRNCODE_SEARCH','token','0')  ) )   +')' END    
                        +
                        CASE PROMPT("P_LVLSCND","integer",'0') WHEN '0' THEN ''
                                    ELSE ' AND C.BCHQTYPEID2 = ' + PROMPT("P_LVLSCND","integer",'0') END            
                        +
                        CASE PROMPT("P_CLRSTS","integer",'0') WHEN '0' THEN ''
                                    ELSE ' AND C.SETTLEMENTID = ' + PROMPT("P_CLRSTS","integer",'0') END            
                        +
                        CASE PROMPT("P_SRCBANKCODE_SEARCH","string",'0') WHEN '0' THEN ''
									ELSE ' AND C.FROMBANK_ID IN (' +  csv ( split(' , ', PROMPT('P_SRCBANKCODE_SEARCH','token','0')  ) )   +')' END
						+
						CASE PROMPT("P_DECBANKCODE_SEARCH","string",'0') WHEN '0' THEN ''
									ELSE ' AND C.TOBANK_ID IN (' +  csv ( split(' , ', PROMPT('P_DECBANKCODE_SEARCH','token','0')  ) )   +')' END
                        +
						CASE PROMPT("P_CHQSTSCODE_SEARCH","string",'0') WHEN '0' THEN ''
									ELSE ' AND B.BANKCHQSTATUSID  IN (' +  csv ( split(' , ', PROMPT('P_CHQSTSCODE_SEARCH','token','0')  ) )   +')' END 
                                       
                        # ) AS A
GROUP BY 
                                    A.STATUSZONECODE,
                                    A.STATUSZONETITLE,
                                    A.STATUSRGNCODE,
                                    A.STATUSRGNTITLE,
                                    A.STATUSFCLTYOWNERBRANCH,
                                    A.STATUSFCLTYOWNRBRNCHDESC,
                                    A.STATUSBRANCHID,
                                    A.STATUSBRANCHTITLE

WITH UR


SUBSTR('P_DAYDATET',1,4)||'/'||SUBSTR('P_DAYDATET',5,2)||'/'||SUBSTR('P_DAYDATET',7,2) AS DAYDATE
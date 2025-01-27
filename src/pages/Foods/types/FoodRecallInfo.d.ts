export interface FoodRecallInfo {
    PRDTNM:                      string; // 제품명
    RTRVLPRVNS:                  string; // 회수사유
    BSSHNM:                      string; // 제조업체명
    ADDR:                        string; // 업체주소
    TELNO:                       string; // 전화번호
    BRCDNO:                      string; // 바코드번호
    FRMLCUNIT:                   string; // 포장단위
    MNFDT:                       string; // 제조일자
    RTRVLPLANDOC_RTRVLMTHD:      string; // 회수방법
    DISTBTMLMT:                  string; // 유통/소비기한
    PRDLST_TYPE:                 string; // 식품분류
    IMG_FILE_PATH:               string; // 제품사진 URL
    PRDLST_CD:                   string; // 품목코드
    CRET_DTM:                    string; // 등록일
    RTRVLDSUSE_SEQ:              string; // 회수.판매중지 일련번호
    PRDLST_REPORT_NO:            string; // 품목제조보고번호
    RTRVL_GRDCD_NM:              string; // 회수등급
    PRDLST_CD_NM:                string; // 품목유형(품목코드명)
    LCNS_NO:                     string; // 업체인허가번호
  }
  
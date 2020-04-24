var tipuesearch = {"pages": [{'title': '有關本網站', 'text': '\n 這門課程在教導學員如何利用網際環境管理與工程應用相關的內容管理 \n 總共使用兩套網際內容管理系統: \n https://github.com/mdecourse/cmsimde \n https://www.blogger.com/ \n Please use your student number to \xa0 register a github account . \n 請利用學號註冊一個 Github 帳號 \n Repository (倉儲): \xa0 https://github.com/mdecourse/wcmj2020 \xa0 \n Project (專案): \xa0 https://github.com/mdecourse/wcmj2020/projects/1 \xa0 \n Gitter (討論區): \xa0 https://gitter.im/mdecourse/wcmj2020 \xa0 \n Web site (網站):\xa0 https://mde.tw/wcmj2020 \xa0 \n Blog (網誌): \xa0 https://mde.tw/wcmj2020/blog \xa0 \n Presentation (簡報): \xa0 https://mde.tw/wcmj2020/reveal \xa0 \n 電腦輔助設計室與協同設計室行事曆 \n 全頁檢視 \n \n 請登入 gm 電子郵箱後, 填寫下列表單: \n 選課學員基本資料 \n 課程回饋表單 \n 網際內容管理自評與互評表單 \n Next \xa0 >>  CMSiMDE', 'tags': '', 'url': '有關本網站.html'}, {'title': 'CMSiMDE', 'text': '\n \n https://github.com/mdecourse/cmsimde.git \xa0 是一套利用 Python 解譯程式語言所編寫的網際內容管理系統, 使用者可以用來建立動態網站, 靜態網站, 網誌與網際簡報系統. \n 程式語言就其執行的方式, 可以分為編譯式與解譯式等兩種. \n 編譯式語言例如: C 程式語言 \n 解譯式語言例如: Python 程式語言 \n 編寫程式語言是工程師與電腦溝通的途徑之一, 工程師編寫計算機程式在電腦上執行, 可以透過電腦強大與重複的運算能力來解決問題. \n CMSiMDE 就是工程師希望將各種與產品開發的過程資料, 存放在網站上, 除了可用於工程師之間的溝通外, 還能夠將產品開發的細節, 或者特定工具的使用詳細記錄, 以作為往後的參考. \n 如何使用 CMSiMDE \n (1) 以子模組的方式使用 CMSiMDE \n 將 Github 倉儲 git clone 到近端工作區之後, 可以利用 git submodule add 指令將遠端倉儲中的 CMSiMDE 程式碼納為倉儲中的 cmsimde 子目錄, 並且保持與遠端原始碼的版次關聯 (也就是能夠指定採用遠端特定版本的 CMSiMDE 程式碼). \n 好處: 子模組可以與遠端官方的倉儲保持關聯, 一旦 CMSiMDE 更新版本, 使用者可以利用 git pull 直接拉下遠端 CMSiMDE 的最新程式碼. \n 壞處: 使用者若要 git clone 遠端的倉儲至近端, 需要加上 --recurse-submodules 選項 \n (2) 不以子模組的方式使用 CMSiMDE \n 假如不需要保持與遠端 CMSiMDE 倉儲特定版次的關聯性, 可以直接將 CMSiMDE 倉儲中的檔案, 直接放入 cmsimde 目錄, 並將其中 up_dir 的內容複製到希望建立網頁的倉儲主目錄中即可. \n 好處: 使用者可以直接使用 git clone 指令, 拉下遠端倉儲的所有資料. \n 壞處: 失去與遠端 CMSiMDE 倉儲的關聯, 假如要使用最新改版後的 CMSiMDE 原始碼, 必須另外 git clone 然後再取代倉儲中 cmsimde 的所有檔案. \n \n \n 有關本網站 << \xa0 Previous \xa0 Next \xa0 >> 可攜程式環境 \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n \n \n \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n \n \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'CMSiMDE.html'}, {'title': '分組', 'text': '\n 亂數分組: \n https://mde.tw/wcmj2020/downloads/2020spring_wcmj_1a_list.txt \xa0was taken from\xa0 https://osa.nfu.edu.tw/ \xa0on Feb. 19, 2020. \n The most updated list:\xa0 http://s1.mde.nfu.edu.tw:8000/?semester=1082&courseno=2418 \xa0 \n semester: 1082 \n courseno: 2418 \n Under https protocol use port 7443, for http use port 8000. \n 學員名單 URL: \xa0 \n Dart source code for random grouping \n evenGrouping.dart: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n 89 \n 90 \n 91 \n 92 \n 93 \n 94 \n 95 \n 96 \n 97 \n 98 \n 99 \n 100 \n 101 \n 102 \n 103 \n 104 \n 105 \n 106 \n 107 \n 108 \n 109 \n 110 \n 111 \n 112 \n 113 \n 114 \n 115 \n 116 \n 117 \n 118 \n 119 \n 120 \n 121 \n 122 \n 123 \n 124 \n 125 \n 126 \n 127 \n 128 \n 129 \n 130 \n 131 \n 132 \n 133 \n 134 \n 135 \n 136 \n 137 \n 138 \n 139 \n 140 \n 141 \n \n \n \n import   \'dart:html\' ; \n \xa0 \xa0 \n \xa0\xa0 InputElement studListUrl = querySelector( "#studListUrl" ); \n \xa0\xa0 String studUrl; \n \xa0\xa0 // 將 Label 改為 Textarea, 避免產生過程結果嵌入所在頁面 \n \xa0\xa0 TextAreaElement output = querySelector( "#output" ); \n \xa0 \xa0 \n main() { \n \xa0\xa0 querySelector( "#submit" ).onClick.listen((e) => grouping()); \n } \n \xa0 \xa0 \n grouping() { \n \xa0\xa0 output.innerHtml =  "" ; \n \xa0 \xa0 \n \xa0\xa0 if   (studListUrl.value !=  "" ) { \n \xa0\xa0\xa0\xa0 studUrl = studListUrl.value; \n \xa0\xa0 }  else   { \n \xa0\xa0\xa0\xa0 studUrl =  \'https://mde.tw/group/downloads/2019fall_cp_1a_list.txt\' ; \n \xa0\xa0 } \n \xa0 \xa0 \n \xa0\xa0 // 組序由 1 開始 \n \xa0\xa0 int gth = 1; \n \xa0\xa0 // 迴圈序號變數 \n \xa0\xa0 int i; \n \xa0\xa0 int j; \n \xa0\xa0 int total; \n \xa0\xa0 int inc; \n \xa0\xa0 // 每組學員暫存數列 \n \xa0\xa0 var gpList = []; \n \xa0\xa0 // 全班分組數列 \n \xa0\xa0 var group = []; \n \xa0\xa0 // 各組人數數列 \n \xa0\xa0 var numList = []; \n \xa0\xa0 var courseTitle =  \'wcmj2020\' ; \n \xa0 \xa0 \n \xa0\xa0 HttpRequest.getString(studUrl).then((String resp) { \n \xa0\xa0\xa0\xa0 // 利用 trim() 去除字串最後的跳行符號, 之後再利用 split() 根據 \\n 轉為數列 \n \xa0\xa0\xa0\xa0 var studList = resp.trim().split( "\\n" ); \n \xa0\xa0\xa0\xa0 // 數列利用 shuffle() 方法以隨機方法弄亂順序 \n \xa0\xa0\xa0\xa0 studList.shuffle(); \n \xa0\xa0\xa0\xa0 total = studList.length; \n \xa0\xa0\xa0\xa0 output.text +=  "全班總計"   + total.toString() +  " 人\\n" ; \n \xa0\xa0\xa0\xa0 numList = getNumList(studList.length); \n \xa0\xa0\xa0\xa0 inc = 0; \n \xa0\xa0\xa0\xa0 for   (i  in   numList){ \n \xa0\xa0\xa0\xa0\xa0\xa0 // 列印區隔符號 \n \xa0\xa0\xa0\xa0\xa0\xa0 output.text +=  \'=\'   * 20 +  "\\n" ; \n \xa0\xa0\xa0\xa0\xa0\xa0 output.text +=  "group $gth 有 "   + i.toString() +  " 人: \\n" ; \n \xa0\xa0\xa0\xa0\xa0\xa0 gpList = []; \n \xa0\xa0\xa0\xa0\xa0\xa0 for   (j = 0; j < i; j++){ \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 output.text += studList[j+inc] +  "\\n" ; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // 在各分組數列中加入將對應的學員學號 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 gpList.add(studList[j+inc]); \n \xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0\xa0\xa0 gth = gth + 1; \n \xa0\xa0\xa0\xa0\xa0\xa0 inc = inc + j; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 //output.text += studList[j] + "\\n"; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // 逐步將各組暫存的分組數列加入全班分組數列中 \n \xa0\xa0\xa0\xa0\xa0\xa0 gpList.sort(); \n \xa0\xa0\xa0\xa0\xa0\xa0 group.add(gpList); \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 // 列出全班分組數列 \n \xa0\xa0\xa0\xa0 output.text += group.toString() +  "\\n" ; \n \xa0\xa0\xa0\xa0 // 列出已經排序後的分組名單 \n \xa0\xa0\xa0\xa0 output.text +=  \'=\'   * 25 +  "\\n" ; \n \xa0\xa0\xa0\xa0 output.text +=  \'以下為排序後的各組成員名單: \\n\' ; \n \xa0\xa0\xa0\xa0 gth = 1; \n \xa0\xa0\xa0\xa0 /* \n \xa0\xa0\xa0\xa0 404231 \n \xa0\xa0\xa0\xa0 s4052 \n \xa0\xa0\xa0\xa0 4062 \n \xa0\xa0\xa0\xa0 s4072 \n \xa0\xa0\xa0\xa0 4082 \n \xa0\xa0\xa0\xa0 5072 \n \xa0\xa0\xa0\xa0 5083 \n \xa0\xa0\xa0\xa0 */ \n \xa0\xa0\xa0\xa0 // 先列出純文字以 \\n 跳行組員資料 \n \xa0\xa0\xa0\xa0 for   (i=0; i < group.length; i++){ \n \xa0\xa0\xa0\xa0\xa0\xa0 // 列印區隔符號 \n \xa0\xa0\xa0\xa0\xa0\xa0 output.text +=  \'=\'   * 20 +  "\\n" ; \n \xa0\xa0\xa0\xa0\xa0\xa0 output.text +=  "group $gth \\n" ; \n \xa0\xa0\xa0\xa0\xa0\xa0 gpList = []; \n \xa0\xa0\xa0\xa0\xa0\xa0 for   (j=0; j < group[i].length; j++){ \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 output.text += group[i][j] +  "\\n" ; \n \xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0\xa0\xa0 gth = gth + 1; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 gth = 1; \n \xa0\xa0\xa0\xa0 // 最後列出超文件以 <br\\> 跳行組員資料, 包含倉儲與網站 \n \xa0\xa0\xa0\xa0 for   (i=0; i < group.length; i++){ \n \xa0\xa0\xa0\xa0\xa0\xa0 // 列印區隔符號 \n \xa0\xa0\xa0\xa0\xa0\xa0 output.text +=  \'\\n\'   +  \'=\'   * 30 +  "<br \\>" ; \n \xa0\xa0\xa0\xa0\xa0\xa0 output.text +=  "group $gth <br \\>" ; \n \xa0\xa0\xa0\xa0\xa0\xa0 gpList = []; \n \xa0\xa0\xa0\xa0\xa0\xa0 for   (j=0; j < group[i].length; j++){ \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (group[i][j].startsWith( \'4052\' ) || group[i][j].startsWith( \'4072\' )) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 output.text +=  "Repository: <a href=\'https://github.com/s"   +  \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 group[i][j] +  "/"   + courseTitle +  "\'>"   + group[i][j] +  \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "</a>"   +  " | Site: <a href=\'https://s"   + group[i][j] +  \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ".github.io/"   + courseTitle +  "\'>"   + group[i][j] +  \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "</a><br \\>" ; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 else   { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 output.text +=  "Repository: <a href=\'https://github.com/"   +  \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 group[i][j] +  "/"   + courseTitle + "\'>"   + group[i][j] +  \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "</a>"   +  " | Site: <a href=\'https://"   + group[i][j] +  \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ".github.io/"   + courseTitle +  "\'>"   + group[i][j] +  \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "</a><br \\>" ; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0\xa0\xa0 gth = gth + 1; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0 }); \n } \n \xa0 \xa0 \n List getNumList(int total){ \n \xa0\xa0 // total student number \n \xa0\xa0 // int total = 65; \n \xa0\xa0 // initial each group expect to be "eachGrp" number of people \n \xa0\xa0 int eachGrp = 10; \n \xa0\xa0 // may divide into "grpNum" number of group \n \xa0\xa0 int grpNum = total ~/ eachGrp; \n \xa0\xa0 // vacant list \n \xa0\xa0 var splits = []; \n \xa0\xa0 // find remainder when total number divid into "grpNum" number of group \n \xa0\xa0 int remainder = total % grpNum; \n \xa0\xa0 // number of people in one group by calculation \n \xa0\xa0 int calGrp = total ~/ grpNum; \n \xa0 \xa0 \n \xa0\xa0 for   (int i = 0; i < grpNum; i++) { \n \xa0\xa0\xa0\xa0 splits.add(calGrp); \n \xa0\xa0 } \n \xa0\xa0 //print(splits); \n \xa0 \xa0 \n \xa0\xa0 for   (int i = 0; i < remainder; i++) { \n \xa0\xa0\xa0\xa0 splits[i] += 1; \n \xa0\xa0 } \n \xa0\xa0 //print(splits); \n \xa0\xa0 return   splits; \n \xa0 } \n \n \n \n \n \n \n \n index.html: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n < h1 >亂數分組:</ h1 > \n 學員名單 URL: < input   type = "text"   id = "studListUrl"   size = "50"   value = "https://mde.tw/wcm2020/downloads/2020spring_wcm_1a_list.txt" >< br   /> \n < input   type = "submit"   value = "開始分組"   id = "submit" >< br   /> \n < textarea   id = "output"   cols = "80"   rows = "10" ></ textarea > \n \n \n \n \n \n \n \n style.css: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n \n \n \n body { \n \xa0\xa0 color :  white ; \n \xa0\xa0 font-size :  20px ; \n } \n \xa0 \n input, select, textarea { \n font-size :  100% ; \n } \n \n \n \n \n \n \n \n get_student.py \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n \n \n \n from   flask  import   Flask, request  \n from   flask_cors  import   CORS \n \xa0 \n import   requests \n import   bs4 \n import   ssl \n \xa0 \n \'\'\' \n https://s1.mde.nfu.edu.tw:7443/?semester=1082&courseno=0767 \n cd \n 2a 1082/0767 \n 2b 1082/0780 \n \xa0 \n 2a 1072/0777 \n 2b 1072/0790 \n 2a 1062/0788 \n 2a 1062/0802 \n \xa0 \n wcm \n 1082/0744 \n \xa0 \n 1072/0754 \n 1062/0765 \n \xa0 \n wcmj \n 1082/2418 \n \'\'\' \n \xa0 \n app  =   Flask(__name__) \n CORS(app) \n \xa0 \n @app .route( \'/studlist\' ) \n @app .route( \'/\' ) \n def   studlist(): \n \xa0\xa0\xa0\xa0 semester  =   request.args.get( \'semester\' ) \n \xa0\xa0\xa0\xa0 courseno  =   request.args.get( \'courseno\' ) \n \xa0\xa0\xa0\xa0 if   semester  = =   None : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 semester  =   \'1082\' \n \xa0\xa0\xa0\xa0 if   courseno  = =   None : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 courseno  =   \'0744\' \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 url  =   \'https://osa.nfu.edu.tw/query/studlist_ajax.php\' \n \xa0\xa0\xa0\xa0 post_var  =   { \'pselyr\' : semester,  \'pseqno\' : courseno} \n \xa0 \n \xa0\xa0\xa0\xa0 result  =   requests.post(url, data  =   post_var) \n \xa0 \n \xa0\xa0\xa0\xa0 soup  =   bs4.BeautifulSoup(result.content,  \'lxml\' ) \n \xa0\xa0\xa0\xa0 table  =   soup.find( \'table\' , { \'class\' :  \'tbcls\' }) \n \xa0\xa0\xa0\xa0 data  =   [] \n \xa0\xa0\xa0\xa0 rows  =   table.find_all( \'tr\' ) \n \xa0\xa0\xa0\xa0 for   row  in   rows: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 cols  =   row.find_all( \'td\' ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 cols  =   [ele.text.strip()  for   ele  in   cols] \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 data.append([ele  for   ele  in   cols  if   ele])  # Get rid of empty values \n \xa0\xa0\xa0\xa0 output  =   "" \n \xa0\xa0\xa0\xa0 for   i  in   data[ 2 :]: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #print(i[0]) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 output  + = i[ 0 ]  +   "\\n" \n \xa0\xa0\xa0\xa0 return   output \n \xa0\xa0\xa0\xa0 #return\xa0 str(pselyr) + " + " +str(pseqno) \n \xa0 \n # 即使在近端仍希望以 https 模式下執行 \n context  =   ssl.SSLContext(ssl.PROTOCOL_TLSv1_2) \n context.load_cert_chain( \'localhost.crt\' ,  \'localhost.key\' ) \n \xa0 \n # 取 flaskapp.py 中的 uwsgi 變數設定 \n uwsgi  =   False \n if   uwsgi: \n \xa0\xa0\xa0\xa0 # 表示程式在雲端執行 \n \xa0\xa0\xa0\xa0 application  =   app \n else : \n \xa0\xa0\xa0\xa0 # 表示在近端執行, 以 python3 wsgi.py 執行 \n \xa0\xa0\xa0\xa0 app.run(host = \'127.0.0.1\' , port = 5443 , debug = True , ssl_context = context) \n \n \n \n \n \n \n \n nginx sites-available/default settings: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n \n \n \n server { \n \xa0\xa0\xa0\xa0 listen 8000; \n \xa0\xa0\xa0\xa0 server_name s1.mde.nfu.edu.tw; \n \xa0\xa0\xa0\xa0 charset utf-8; \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 listen 7443 ssl; \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 location /static { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 alias /home/kmol2019/course_studlist/static/; \n \xa0\xa0\xa0\xa0 } \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 location / { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 include uwsgi_params; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 uwsgi_pass\xa0 127.0.0.1:8087; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 ssl_certificate /etc/stunnel/localhost.crt; \n \xa0\xa0\xa0\xa0 ssl_certificate_key /etc/stunnel/localhost.key; \n \xa0\xa0\xa0\xa0 ssl_session_timeout 5m; \n \xa0\xa0\xa0\xa0 ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2; \n \xa0\xa0\xa0\xa0 ssl_ciphers  "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES" ; \n \xa0\xa0\xa0\xa0 ssl_prefer_server_ciphers on; \n \xa0\xa0\xa0\xa0 try_files $uri $uri/ =404; \n } \n \n \n \n \n \n \n \n uwsgi7.ini \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n \n \n \n [uwsgi] \n socket = 127.0.0.1:8087 \n uid = kmol2019 \n gid = kmol2019 \n plugins-dir = /usr/lib/uwsgi/plugins/ \n plugin = python3 \n master =  true \n logto = / var /log/uwsgi/emperor.log \n logfile-chown = kmol2019:kmol2019 \n processes = 4 \n threads = 2 \n chdir = /home/kmol2019/course_studlist \n wsgi-file = /home/kmol2019/course_studlist/get_student.py \n \n \n \n \n \n \n \n /etc/systemd/system/cmsimfly.service \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n \n \n \n [Unit] \n Description=uWSGI to serve CMSimfly \n After=network.target \n \xa0 \n [Service] \n User=kmol2019 \n Group=kmol2019 \n WorkingDirectory=/home/kmol2019/uwsgi_ini \n ExecStart=/usr/local/bin/uwsgi --emperor /home/kmol2019/uwsgi_ini \n \xa0 \n [Install] \n WantedBy=multi-user.target \n \n \n \n \n \n \n \n Python << \xa0 Previous \xa0 Next \xa0 >> 分組結果 \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n \n \n https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': '分組.html'}, {'title': '分組結果', 'text': '\n 各分組學員可以就以下常見的網際內容, 以組員分工的方式深入研究特定主題, 然後再將結果納入 CMSiMDE 網站, 網誌, 簡報 與 Blogger 網誌內容. \n 常見的網際內容包含: \n 文字 (網誌與網站文字說明, 簡報文字敘述) \n 數學方程式 ( mathjax ) \n 圖檔 (png, jpg, gif, \xa0 svg) \n 動畫 (gif) \xa0 \n 音樂 (mp3 or \xa0 midi ) \n 影片 (embedded mp4) \n 程式 \n HTML5 Canvas \xa0 (2d) \n Three.js \xa0 (3D) \n Brython \n fengari-web \xa0 (Lua) \n Dart -> Javascript \n ============================== group 1 Repository: \xa0 50833110 \xa0 | Site: \xa0 50833110 Repository: \xa0 50833112 \xa0 | Site: \xa0 50833112 Repository: \xa0 50833115 \xa0 | Site: \xa0 50833115 Repository: \xa0 50833123 \xa0 | Site: \xa0 50833123 Repository: \xa0 50833127 \xa0 | Site: \xa0 50833127 Repository: \xa0 50833128 \xa0 | Site: \xa0 50833128 Repository: \xa0 50833129 \xa0 | Site: \xa0 50833129 Repository: \xa0 50833131 \xa0 | Site: \xa0 50833131 Repository: \xa0 50833133 \xa0 | Site: \xa0 50833133 Repository: \xa0 50833138 \xa0 | Site: \xa0 50833138 ============================== group 2 Repository: \xa0 50833101 \xa0 | Site: \xa0 50833101 Repository: \xa0 50833107 \xa0 | Site: \xa0 50833107 Repository: \xa0 50833108 \xa0 | Site: \xa0 50833108 Repository: \xa0 50833111 \xa0 | Site: \xa0 50833111 Repository: \xa0 50833117 \xa0 | Site: \xa0 50833117 Repository: \xa0 50833119 \xa0 | Site: \xa0 50833119 Repository: \xa0 50833122 \xa0 | Site: \xa0 50833122 Repository: \xa0 50833126 \xa0 | Site: \xa0 50833126 Repository: \xa0 50833130 \xa0 | Site: \xa0 50833130 Repository: \xa0 50833134 \xa0 | Site: \xa0 50833134 ============================== group 3 Repository: \xa0 50833104 \xa0 | Site: \xa0 50833104 Repository: \xa0 50833106 \xa0 | Site: \xa0 50833106 Repository: \xa0 50833113 \xa0 | Site: \xa0 50833113 Repository: \xa0 50833114 \xa0 | Site: \xa0 50833114 Repository: \xa0 50833116 \xa0 | Site: \xa0 50833116 Repository: \xa0 50833118 \xa0 | Site: \xa0 50833118 Repository: \xa0 50833120 \xa0 | Site: \xa0 50833120 Repository: \xa0 50833125 \xa0 | Site: \xa0 50833125 Repository: \xa0 50833140 \xa0 | Site: \xa0 50833140 Repository: \xa0 50833141 \xa0 | Site: \xa0 50833141 ============================== group 4 Repository: \xa0 50833102 \xa0 | Site: \xa0 50833102 Repository: \xa0 50833103 \xa0 | Site: \xa0 50833103 Repository: \xa0 50833105 \xa0 | Site: \xa0 50833105 Repository: \xa0 50833109 \xa0 | Site: \xa0 50833109 Repository: \xa0 50833121 \xa0 | Site: \xa0 50833121 Repository: \xa0 50833124 \xa0 | Site: \xa0 50833124 Repository: \xa0 50833135 \xa0 | Site: \xa0 50833135 Repository: \xa0 50833136 \xa0 | Site: \xa0 50833136 Repository: \xa0 50833137 \xa0 | Site: \xa0 50833137 Repository: \xa0 50833139 \xa0 | Site: \xa0 50833139 \n 分組 << \xa0 Previous \xa0 Next \xa0 >> 實習項目 \n \n \n Copyright ©2020 All rights reserved | This template \n', 'tags': '', 'url': '分組結果.html'}, {'title': '實習項目', 'text': '\n 第八週 \n 請重新下載 \xa0 wcmj2020_tool.7z , 檔案大小為 435 MB, 解開壓縮後為 1.8 GB (其中包括 Mypaint, Dia 與 OBS 等) \n 分別利用 ShareX 與 OBS 錄製電腦畫面操作, 說明如何在個人的網站上新增一個標題為"第八週實習"的 H1 頁面, 然後將兩段影片上傳至個人的 youtube 帳號下, 並 embedded 至該頁面中. \n 第九週 \n 請從電腦與網路頁面中, 擷取資料中的圖文資料, 在標題為"第九週實習“的 H1 頁面下, 分別製作兩個 H2 頁面: \n 電腦軟硬體簡介 \n 與 \n 網路架構與設定簡介 \n 課堂上將利用 \xa0 Ethercalc \xa0 擷取各學員的期中自評成績. \n \n 分組結果 << \xa0 Previous \xa0 Next \xa0 >> 主題 \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n', 'tags': '', 'url': '實習項目.html'}, {'title': '主題', 'text': '\n Google Blogger \n Login to your gm email account and download \xa0 2010_BeginningGoogleBlogger.pdf \n WCM \n Login to your gm email account and download \xa0 2020wcm_topic_1.pdf . \n What is a content management system? \n Analyzing your information life cycle. \n Overview of enterprise content management. \n Git \n Login to your gm email account and download\xa0 IntroductionToVersionControlAndGit.pdf . \n What is version control? \n Git installation and setup. \n Git getting started. \n Commits and remote git. \n Github \n Login to your gm email account and download\xa0 GithubPrimer.pdf \n Login to your gm email account and download\xa0 ConflictsGUIToolAdvGit.pdf \n 實習項目 << \xa0 Previous \xa0 Next \xa0 >> 倉儲與網站 \n \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n \n', 'tags': '', 'url': '主題.html'}, {'title': '倉儲與網站', 'text': '\n \n 請重新下載 \xa0 wcmj2020_tool.7z , 檔案大小為 435 MB, 解開壓縮後為 1.8 GB (其中包括 Mypaint, Dia 與 OBS 等). \n 登入 github.com 建立 Github 倉儲, 直接新增 README.md 檔案. \n 將所建立的倉儲 git clone 到近端. \n git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n 在近端維護動態網站, 轉為靜態後 git add commit push \n \n 以下請各學員分別利用 ShareX 與 OBS 拍攝建立與維護個人倉儲與網站的影片, 完成後將影片 embed 入個人網站的 W8 頁面中. \n 主題 << \xa0 Previous \xa0 Next \xa0 >> 繪圖 \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n', 'tags': '', 'url': '倉儲與網站.html'}, {'title': '繪圖', 'text': '\n https://github.com/mypaint/mypaint \n https://github.com/mypaint/mypaint/wiki/v1.2-User-Manual \n Mypaint筆刷說明.pdf \n \n \n \n 倉儲與網站 << \xa0 Previous \xa0 Next \xa0 >> W6 \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n', 'tags': '', 'url': '繪圖.html'}, {'title': 'W6', 'text': '\n Online education \n 線上直播: Youtube + Portable OBS \n 線上開會: \xa0 https://meet.google.com \xa0 \n \n 讓手機可以利用電腦熱點上網 \n 採用\xa0 https://www.tp-link.com/us/home-networking/usb-adapter/tl-wn725n/ \n 將此一 USB Wifi adapter 連接電腦後, 若網路為 IPv4 協定時, 可以透過"設定 -> 網路和網際網路 -> 行動熱點", 選擇開啟並編輯"網路名稱與網路密碼"後, 讓至多 8 台手機透過熱點連線上網. \n 但是因為目前 Windows 10 並 未提供 IPv6 網路協定下的網路熱點功能 , 因此在純 IPv6 網路協定下無法使用"行動熱點"服務. \n \n 利用手機鏡頭當作 webcam: \n Android: \xa0 https://www.digitalcitizen.life/turn-android-smartphone-webcam-windows \xa0 iPhone: \xa0 https://www.makeuseof.com/tag/use-your-iphone-as-a-webcam-heres-how-ios/ \xa0 \n \n 需要 clone 個人倉儲時: \n git clone --recurse-submodules 倉儲_url.git \n 例如:\xa0git clone --recurse-submodules \xa0 https://github.com/mdecourse/wcmj2020.git \n 現場直播的 audio 錄音設定 \n 在電腦輔助設計室進行直播時, 由於現場有擴音設備, 因此採用 OBS 串流至 Youtube 的最佳收音並非從 Webcam 的麥克風, 而是從擴音器以 audio outpu 連接到電腦的麥克風插槽, 然後將 OBS 的 audio 設定為從電腦的麥克風收音. \n \n \n 繪圖 << \xa0 Previous \xa0 Next \xa0 >> W7 \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '\n 下載可攜程式系統 \n \n 利用 git 指令建立 cmsimde 網站 \n \n W6 << \xa0 Previous \xa0 Next \xa0 >> W8 \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '\n 請重新下載 \xa0 wcmj2020_tool.7z , 檔案大小為 435 MB, 解開壓縮後為 1.8 GB (其中包括 Mypaint, Dia 與 OBS 等). \n 學會利用 ShareX 與 OBS 拍攝螢幕操作影片, 並將個人維護倉儲與網站的過程影片放入個人網站中. \n \n \n W7 << \xa0 Previous \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W8.html'}]};
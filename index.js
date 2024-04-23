// document.write('<script src="https://hoo091221.github.io/ittlink/index.js"></script>');

var result = prompt('이름을 입력해주세요!');

location.reload(true);

window.onload() = function() {
    var inDiv = document.getElementById('content600');
    inDiv.innerHTML =
        `
<section class="writeWrap mgb20">
<form id="writeForm" action="" method="POST"> <input type="hidden" name="bbsId" value=" BBSMSTR_000003038990"> <input type="hidden" name="coEditing" value="N"> <input type="hidden" name="trgetId" value=" CMMNTY_0000000513774"> <input type="hidden" name="trgetEmplyrId" value="psh-m0754@gne.go.kr"> <input type="hidden" name="ordrCode" value=" 000000004538499+9999+9999+9999+9999+9999+9999+9999+9999+9999+9999"> <input type="hidden" name="ordrCodeDp" value=" 0"> <input type="hidden" id="atchFileId" name="atchFileId" value=""> <input type="hidden" id="fileGroupId" name="fileGroupId" value=""> <input type="hidden" name="searchNttNo" value="4538499"> <input type="hidden" id="replySttus" name="replySttus" value="S"> <!-- <input type="hidden" name="isDftGrp" value="N"/> --> <!-- 과제방 --> <div class="write560">
<div class="writeRow mgb10">
<label class="hidden" for="nttCn">내용</label> <textarea cols="40" rows="5" id="nttCn" name="nttCn" placeholder="내용을 입력하세요." class="mgb5 w100_75b"></textarea> <div class="schClass"> <div class="schSselected">
<ul id="box-group">
<li>
${result}
<input type="hidden" class="grpupIds" name="grpupIds" value="221719-m0754@gne.go.kr"> <input type="hidden" class="grpupNms" value="이승후"> </li> </ul>
</div>
<a href="javascript:;" class="sch_btn btnTeamSearch">작성자 찾기</a> </div> <div class="selfRatingCon">
<!-- 자기평가는 작성자가 여러명일지라도 실제 작성자 본인의 자기평가이므로 개개인이 별도 작성하는 것임!! --> <label for="selfRatingCn">자기평가</label> <input type="text" id="selfRatingCn" name="selfRatingCn" placeholder="스스로를 평가해보세요"> <script> document.querySelector('#selfRatingCn').addEventListener('keyup', function(){ let selfRatingCn = document.querySelector('#selfRatingCn').value; if(selfRatingCn.length > 300){ alert('300자 이내로 입력해주세요.');
document.querySelector('#selfRatingCn').value = selfRatingCn.substring(0, 300); } });
</script>
</div>
</div>
</div>
<div id="atchFile" class="tabcontent2 atchDiv" style="display: none;"> <div class="writeWrap2"> <div class="attach">
<span>파일
<!--  <strong>4</strong>/10 --></span> <span class="filebox bs3-primary"> <label for="ex_filename">파일 첨부</label> <input type="file" id="ex_filename" class="upload-hidden fileupload" name="filesx" multiple=""> </span> </div>
<div class="fileList toggleArea" style="display:none"> <ul class="fileUl"></ul> <div class="fileMsg dropZone">
<div class="msg">이 영역에 첨부할 파일을 <em>마우스로 끌어다</em> 놓으세요.<br>대용량 파일<em>(최대 300MB)</em>을 업로드 할 경우 서비스 적용에 다소 시간이 소요될 수 있습니다.
<br><br><em>※ 톡톡 웹오피스(한글, 워드, 엑셀, 파워포인트) 파일일은 “톡톡 웹오피스’에서만 첨부가 가능합니다. </em> </div> </div>
</div>
<!--마우스끌어다 놓아주세요.--->
<div class="fileMsg dropZone toggleArea"> <div class="msg">이 영역에 첨부할 파일을 <em>마우스로 끌어다</em> 놓으세요.<br>대용량 파일<em>(최대 300MB)</em>을 업로드 할 경우 서비스 적용에 다소 시간이 소요될 수 있습니다.
<br><br><em>※ 톡톡 웹오피스(한글, 워드, 엑셀, 파워포인트) 파일일은 “톡톡 웹오피스’에서만 첨부가 가능합니다. </em> </div> </div>
<span class="progress" style="width:0%"></span> </div>
</div>
<div id="atchImage" class="tabcontent2 atchDiv" style="display: none;"> <div class="writeWrap2"> <div class="attach">
<span>이미지
<!-- <strong>4</strong>/10 --></span>
<span class="filebox bs3-primary">
<label for="ex_filename2">이미지 첨부</label> <input type="file" id="ex_filename2" class="upload-hidden fileupload" accept="image/*" name="filesx" multiple=""> </span> </div>
<div class="fileList imgList toggleArea" style="display:none"> <ul class="fileUl"></ul> <div class="fileMsg dropZone">
<div class="msg">이 영역에 첨부할 파일을 <em>마우스로 끌어다</em> 놓으세요.<br>대용량 파일<em>(최대 300MB)</em>을 업로드 할 경우 서비스 적용에 다소 시간이 소요될 수 있습니다.
<br><br><em>※ 톡톡 웹오피스(한글, 워드, 엑셀, 파워포인트) 파일일은 “톡톡 웹오피스’에서만 첨부가 가능합니다. </em> </div> </div>
</div>
<!--마우스끌어다 놓아주세요.--->
<div class="fileMsg dropZone toggleArea"> <div class="msg">이 영역에 첨부할 파일을 <em>마우스로 끌어다</em> 놓으세요.<br>대용량 파일<em>(최대 300MB)</em>을 업로드 할 경우 서비스 적용에 다소 시간이 소요될 수 있습니다.
<br><br><em>※ 톡톡 웹오피스(한글, 워드, 엑셀, 파워포인트) 파일일은 “톡톡 웹오피스’에서만 첨부가 가능합니다. </em> </div> </div>
<span class="progress" style="width:0%"></span> </div>
</div>
<div id="atchVideo" class="tabcontent2 atchDiv" style="display: none;"> <div class="writeWrap2"> <div class="attach">
<span>동영상
<!-- <strong>4</strong>/10 --></span>
<span class="filebox bs3-primary">
<label for="ex_filename3">동영상 첨부</label> <input type="file" id="ex_filename3" class="upload-hidden fileupload" accept="video/*" name="filesx" multiple=""> </span> </div>
<div class="fileList toggleArea" style="display:none"> <ul class="fileUl"></ul> <div class="fileMsg dropZone">
<div class="msg">이 영역에 첨부할 파일을 <em>마우스로 끌어다</em> 놓으세요.<br>대용량 파일<em>(최대 300MB)</em>을 업로드 할 경우 서비스 적용에 다소 시간이 소요될 수 있습니다.
<br><br><em>※ 톡톡 웹오피스(한글, 워드, 엑셀, 파워포인트) 파일일은 “톡톡 웹오피스’에서만 첨부가 가능합니다. </em> </div> </div>
</div>
<!--마우스끌어다 놓아주세요.--->
<div class="fileMsg dropZone toggleArea"> <div class="msg">이 영역에 첨부할 파일을 <em>마우스로 끌어다</em> 놓으세요.<br>대용량 파일<em>(최대 300MB)</em>을 업로드 할 경우 서비스 적용에 다소 시간이 소요될 수 있습니다.
<br><br><em>※ 톡톡 웹오피스(한글, 워드, 엑셀, 파워포인트) 파일일은 “톡톡 웹오피스’에서만 첨부가 가능합니다. </em> </div> </div>
<span class="progress" style="width:0%"></span> </div>
</div>
<div id="atchAudio" class="tabcontent2 atchDiv" style="display: none;"> <div class="writeWrap2"> <div class="attach">
<span>음성
<!-- <strong>4</strong>/10 --></span>
<span class="filebox bs3-primary">
<label for="ex_filename4">오디오 첨부</label> <input type="file" id="ex_filename4" class="upload-hidden fileupload" accept="audio/*" name="filesx" multiple=""> </span> </div>
<div class="fileList toggleArea" style="display:none"> <ul class="fileUl"></ul> <div class="fileMsg dropZone">
<div class="msg">이 영역에 첨부할 파일을 <em>마우스로 끌어다</em> 놓으세요.<br>대용량 파일<em>(최대 300MB)</em>을 업로드 할 경우 서비스 적용에 다소 시간이 소요될 수 있습니다.
<br><br><em>※ 톡톡 웹오피스(한글, 워드, 엑셀, 파워포인트) 파일일은 “톡톡 웹오피스’에서만 첨부가 가능합니다. </em> </div> </div>
</div>
<!--마우스끌어다 놓아주세요.--->
<div class="fileMsg dropZone toggleArea"> <div class="msg">이 영역에 첨부할 파일을 <em>마우스로 끌어다</em> 놓으세요.<br>대용량 파일<em>(최대 300MB)</em>을 업로드 할 경우 서비스 적용에 다소 시간이 소요될 수 있습니다.
<br><br><em>※ 톡톡 웹오피스(한글, 워드, 엑셀, 파워포인트) 파일일은 “톡톡 웹오피스’에서만 첨부가 가능합니다. </em> </div> </div>
<span class="progress" style="width:0%"></span> </div>
</div>
<div id="atchLink" class="tabcontent2 atchDiv" style="display: none;"> <div class="writeWrap2"> <div class="attach">
<span>링크 <strong id="appendLinkCnt">0</strong>/5 </span> <!--<span class="filebox bs3-primary"> <label for="ex_filename5">링크 추가</label> <input type="button" id="ex_filename5" class="upload-hidden fileupload" style="display:none;"> </span>--> </div>
<div class="flileSchBox">
<div class="schClass">
<label for="linkSearch" class="hidden">URL</label> <input type="text" placeholder="URL을 입력하세요." id="linkSearch"> <span class="bs3-primary"><label for="linkSearch-btn">링크 추가</label></span> <input type="button" id="linkSearch-btn" style="display:none;"> </div> </div>
<div class="fileList toggleArea" style="display:none"> <ul class="linkUl"> </ul>
</div>
<!--마우스끌어다 놓아주세요.--->
<div class="dropZone"></div>
</div>
</div>
<div id="atchPoll" class="tabcontent2 atchDiv" style="display: none;"> <!--설문올리기---> <div class="writeWrap2">
<div class="attach">
<span>설문투표</span>
<a href="javascript:;" class="attPlus pollItmAdd">항목추가</a> </div>
<div class="surveyWrap">
<div class="during mgb10">
<label class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" name="multiAt" value="Y" class="ui-checkboxradio ui-helper-hidden-accessible"> 복수 선택허용</label> <div class="calen"> 참여기간
<div class="dyaB"><label for="pollBgnde" class="hidden">시작일</label><input type="text" id="pollBgnde" name="pollBgnde" readonly="readonly" class="datepicker hasDatepicker"><a href="javascript:;" class="dropbtn"><img src="/str/cre/lyt/tmplat/cmy/LYTTMP_1000000000002/images/comm/ico_month.gif" alt="달력"></a></div> <div class="dyaB"><label for="pollEndde" class="hidden">종료일</label><input type="text" id="pollEndde" name="pollEndde" readonly="readonly" class="datepicker hasDatepicker"><a href="javascript:;" class="dropbtn"><img src="/str/cre/lyt/tmplat/cmy/LYTTMP_1000000000002/images/comm/ico_month.gif" alt="달력"></a></div> </div> </div>
<div class="surveyTit mgb10"><label for="pollNm" class="hidden">설문/투표 제목</label><input type="text" id="pollNm" name="pollNm" placeholder="설문/투표 제목을 입력하세요"> </div> <div class="survyitem">
<ul class="pollItms">
<li>
<span class="cnt">01</span>
<label><span class="hidden">항목</span><input type="text" name="qesitmSjList" placeholder="항목을 입력하세요"></label> </li> <li>
<span class="cnt">02</span>
<label><span class="hidden">항목</span><input type="text" name="qesitmSjList" placeholder="항목을 입력하세요"></label> <button type="button" class="removePollList">remove</button> </li> <li>
<span class="cnt">03</span>
<label><span class="hidden">항목</span><input type="text" name="qesitmSjList" placeholder="항목을 입력하세요"></label> <button type="button" class="removePollList">remove</button> </li> </ul>
<!-- <table>
<tbody class="pollItms">
<tr>
<td><span class="cnt">01</span></td>
<td><label><span class="hidden">항목</span><input type="text" name="qesitmSjList" placeholder="항목을 입력하세요"></label></td> </tr> <tr>
<td><span class="cnt">02</span></td>
<td><label><span class="hidden">항목</span><input type="text" name="qesitmSjList" placeholder="항목을 입력하세요"></label><button type="button" class="removePollList">remove</button></td> </tr> <tr>
<td><span class="cnt">03</span></td>
<td><label><span class="hidden">항목</span><input type="text" name="qesitmSjList" placeholder="항목을 입력하세요"></label><button type="button" class="removePollList">remove</button></td> </tr> </tbody>
</table> -->
</div>
<!--항목추가--->
<div class="itemAdd">
<a href="javascript:;" class="pollItmAdd"><img src="/str/cre/lyt/tmplat/cmy/LYTTMP_1000000000001/images/fileMs3.gif" alt="항목추가"></a> </div> </div>
</div>
<!--설문올리기--->
</div>
<!-- <div id="atchOffice" class="tabcontent2 atchDiv atchOffice"> <div class="writeWrap2"> <div class="attach searchOffice">
<h4>웹오피스</h4>
<ul class="officeList blank">
<li class="blank">웹 오피스 파일이 없습니다.</li> </ul>
</div>
<ul class="officeUl blank">
<li class="blank">등록할 웹 오피스 파일을 선택하여 추가하세요.</li> </ul>
</div>
</div> -->
<div id="atchOffice" class="tabcontent2 atchDiv atchOffice naverWorksDriver" style="display: none;"> <div class="writeWrap2"> <div class="header">
<h4>톡톡 웹오피스</h4>
<div class="getOffice filebox">
<input type="checkbox" id="worksDriveExplorerSw0" class="worksDriveExplorerSw normal newNormal"> <label for="worksDriveExplorerSw0">톡톡 웹오피스에서 가져오기</label> <input type="file" id="office_filename" class="upload-hidden fileupload" name="filesx" multiple="" accept="application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.slideshow, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.ms-exce, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/x-hwp, application/vnd.hancom.hwp,
application/haansoftxlsx,
application/vnd.hancom.hwpx">
<label for="office_filename">PC에서 가져오기</label> </div>
</div>
<div class="newOffice">
<p>톡톡 웹오피스에 새 문서를 추가하려면 다음 버튼을 선택하세요.</p> <div>
<button type="button" class="ico hwp" data-format="hwpx">한글</button> <button type="button" class="ico excel" data-format="xlsx">엑셀</button> <button type="button" class="ico doc" data-format="docx">워드</button> <button type="button" class="ico ppt" data-format="pptx">ppt</button> </div> </div>
<div class="fileList toggleArea" style="display:none"> <ul class="fileUl"></ul> <div class="fileMsg dropZone">
<div class="msg">
<em>톡톡 웹오피스에서 가져오기</em>를 선택하여 첨부할 파일을 선택하거나<br> 이 영역에 첨부할 파일을 <em>마우스로 끌어다</em> 놓으세요.<br> 대용량 파일<em>(최대 300MB)</em>을 업로드 할 경우 서비스 적용에 다소 시간이 소요될 수 있습니다.
<br><br><em>※ 톡톡 웹오피스(한글, 워드, 엑셀, 파워포인트) 파일일은 “톡톡 웹오피스’에서만 첨부가 가능합니다. </em> </div> </div>
</div>
<!--마우스끌어다 놓아주세요.--->
<div class="fileMsg dropZone toggleArea"> <div class="msg">
<em>톡톡 웹오피스에서 가져오기</em>를 선택하여 첨부할 파일을 선택하거나<br> 이 영역에 첨부할 파일을 <em>마우스로 끌어다</em> 놓으세요.<br> 대용량 파일<em>(최대 300MB)</em>을 업로드 할 경우 서비스 적용에 다소 시간이 소요될 수 있습니다.
<br><br><em>※ 톡톡 웹오피스(한글, 워드, 엑셀, 파워포인트) 파일일은 “톡톡 웹오피스’에서만 첨부가 가능합니다. </em> </div> </div>
<span class="progress" style="width:0%"></span> </div>
</div>
<div id="atchTok" class="tabcontent2 atchDiv atchTok" style="display: none;"> <div class="writeWrap2"> <div class="attach searchTok">
<h4>톡톡콘텐츠</h4>
<div class="searchTokGroupCon">
<div class="radioCon">
<!-- <label><input type="checkbox" name="searchCourseCode" class="normal" value="KOR" /><span>국어</span></label> --> <!-- <label><input type="checkbox" name="searchCourseCode" class="normal" value="MAT" /><span>수학</span></label> --> <!-- <label><input type="checkbox" name="searchCourseCode" class="normal" value="SOC" /><span>사회</span></label> --> <!-- <label><input type="checkbox" name="searchCourseCode" class="normal" value="SCI" /><span>과학</span></label> --> <!-- <label><input type="checkbox" name="searchCourseCode" class="normal" value="ENG" /><span>영어</span></label> --> <!-- <label><input type="checkbox" name="searchCourseCode" class="normal" value="RWR" /><span>통합</span></label> --> <label><input type="checkbox" name="searchCourseCode" class="normal" value="국어"><span>국어</span></label> <label><input type="checkbox" name="searchCourseCode" class="normal" value="수학"><span>수학</span></label> <label><input type="checkbox" name="searchCourseCode" class="normal" value="사회"><span>사회</span></label> <label><input type="checkbox" name="searchCourseCode" class="normal" value="과학"><span>과학</span></label> <label><input type="checkbox" name="searchCourseCode" class="normal" value="영어"><span>영어</span></label> <label><input type="checkbox" name="searchCourseCode" class="normal" value="통합"><span>통합</span></label> </div> <div class="checkCon">
<!-- <label><input type="checkbox" name="searchSchoolClassAll" class="normal" value="" /><span>전체</span></label> <label><input type="checkbox" name="searchSchoolClass" class="normal" value="초등" /><span>초등학교</span></label> <label><input type="checkbox" name="searchSchoolClass" class="normal" value="중등" /><span>중학교</span></label> --> <label><input type="checkbox" name="searchSclGradeAll" class="normal" value=""><span>전체</span></label> <label><input type="checkbox" name="searchSclGrade" class="normal" value="초등학교"><span>초등학교</span></label> <label><input type="checkbox" name="searchSclGrade" class="normal" value="중학교"><span>중학교</span></label> </div> <div class="checkCon">
<!-- <label><input type="checkbox" name="searchGradeAll" class="normal" value="" /><span>전체</span></label> <label><input type="checkbox" name="searchGrade" class="normal" value="1" /><span>1학년</span></label> <label><input type="checkbox" name="searchGrade" class="normal" value="2" /><span>2학년</span></label> <label><input type="checkbox" name="searchGrade" class="normal" value="3" /><span>3학년</span></label> <label><input type="checkbox" name="searchGrade" class="normal" value="4" /><span>4학년</span></label> <label><input type="checkbox" name="searchGrade" class="normal" value="5" /><span>5학년</span></label> <label><input type="checkbox" name="searchGrade" class="normal" value="6" /><span>6학년</span></label> --> <label><input type="checkbox" name="searchGradeCodeAll" class="normal" value=""><span>전체</span></label> <label><input type="checkbox" name="searchGradeCode" class="normal" value="1"><span>1학년</span></label> <label><input type="checkbox" name="searchGradeCode" class="normal" value="2"><span>2학년</span></label> <label><input type="checkbox" name="searchGradeCode" class="normal" value="3"><span>3학년</span></label> <label><input type="checkbox" name="searchGradeCode" class="normal" value="4"><span>4학년</span></label> <label><input type="checkbox" name="searchGradeCode" class="normal" value="5"><span>5학년</span></label> <label><input type="checkbox" name="searchGradeCode" class="normal" value="6"><span>6학년</span></label> </div> <div class="checkCon">
<label><input type="checkbox" name="searchSclSemesterAll" class="normal" value=""><span>전체</span></label> <label><input type="checkbox" name="searchSclSemester" class="normal" value="1"><span>1학기</span></label> <label><input type="checkbox" name="searchSclSemester" class="normal" value="2"><span>2학기</span></label> <label><input type="checkbox" name="searchSclSemester" class="normal" value="3"><span>공통</span></label> </div> </div>
<div class="searchTokKeywordCon">
<label for="searchTokKeyword">검색어</label> <input type="text" id="searchTokKeyword" class="searchTokKeyword" name="searchTokKeyword" placeholder="검색어를 입력하세요."> <button type="button" class="searchTokBtn">검색</button> </div> </div>
<ul class="searchTokResult before">
<li class="before">검색 옵션을 선택하고 검색어를 입력해 검색해주세요.</li> <li class="blank">검색결과가 없습니다.</li> </ul>
<button type="button" class="moreTokResult">more</button> <ul class="tokUl"></ul> </div>
</div>
<div class="btnWrap2">
<ul class="wrBtn">
<li class="ic11">
<a href="javascript:;" class="btnAttach" data-info="{&quot;type&quot;:&quot;Office&quot;}"><span>톡톡 웹오피스</span></a> </li> <li class="ic01">
<a href="javascript:;" class="btnAttach" data-info="{&quot;type&quot;:&quot;File&quot;}"><span>파일</span></a> </li> <li class="ic02">
<a href="javascript:;" class="btnAttach" data-info="{&quot;type&quot;:&quot;Image&quot;}"><span>이미지</span></a> </li> <li class="ic03">
<a href="javascript:;" class="btnAttach" data-info="{&quot;type&quot;:&quot;Video&quot;}"><span>동영상</span></a> </li> <li class="ic05">
<a href="javascript:;" class="btnAttach" data-info="{&quot;type&quot;:&quot;Audio&quot;}"><span>음성</span></a> </li> <li class="ic06">
<a href="javascript:;" class="btnAttach" data-info="{&quot;type&quot;:&quot;Link&quot;}"><span>URL</span></a> </li> </ul>
</div>
<div class="tblArea">
<div class="right">
<button type="button" class="btn btn_blue btnSubmit"> 등록
</button>
</div>
</div>
</form>
</section>
`;
}
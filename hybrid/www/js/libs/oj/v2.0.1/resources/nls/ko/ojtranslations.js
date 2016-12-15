define({"oj-message":{fatal:"치명적",error:"오류",warning:"경고",info:"정보",confirmation:"확인","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"값이 예상된 형식이 아닙니다.",detail:"예상된 형식으로 값을 입력하십시오.","plural-separator":", ",hint:{summary:"예: {exampleValue}",detail:"다음 예와 동일한 형식으로 값을 입력하십시오. 예: '{exampleValue}'","detail-plural":"다음 예와 동일한 형식으로 값을 입력하십시오. 예: '{exampleValue}'"},optionHint:{detail:"'{propertyName}' 옵션에 허용되는 값은 '{propertyValueValid}'입니다.","detail-plural":"'{propertyName}' 옵션에 허용되는 값은 '{propertyValueValid}'입니다."},
optionTypesMismatch:{summary:"'{propertyName}' 옵션이 '{propertyValue}'(으)로 설정되었으면 '{requiredPropertyName}' 옵션에 대한 값이 필수입니다."},optionTypeInvalid:{summary:"'{propertyName}' 옵션에 대해 예상된 유형의 값이 제공되지 않았습니다."},optionOutOfRange:{summary:"'{propertyName}' 옵션에 대한 {propertyValue} 값이 범위를 벗어납니다."},optionValueInvalid:{summary:"'{propertyName}' 옵션에 대해 부적합한 값 '{propertyValue}'이(가) 지정되었습니다."},number:{decimalFormatMismatch:{summary:"'{value}'이(가) 예상된 숫자 형식이 아닙니다."},decimalFormatUnsupportedParse:{summary:"decimalFormat: 'short' 및 'long'은 변환기 구문 분석에 대해 지원되지 않습니다.",
detail:"구성 요소를 readOnly로 변경합니다. readOnly 필드는 변환기의 구문 분석 함수를 호출하지 않습니다."},currencyFormatMismatch:{summary:"'{value}'이(가) 예상된 통화 형식이 아닙니다."},percentFormatMismatch:{summary:"'{value}'이(가) 예상된 퍼센트 형식이 아닙니다."}},datetime:{datetimeOutOfRange:{summary:"'{value}' 값이 '{propertyName}'의 범위를 벗어납니다.",detail:"'{minValue}'~'{maxValue}' 사이의 값을 입력하십시오."},dateFormatMismatch:{summary:"'{value}'이(가) 예상된 날짜 형식이 아닙니다."},timeFormatMismatch:{summary:"'{value}'이(가) 예상된 시간 형식이 아닙니다."},datetimeFormatMismatch:{summary:"'{value}'이(가) 예상된 날짜 및 시간 형식이 아닙니다."},
dateToWeekdayMismatch:{summary:"일자 '{date}'이(가) '{weekday}'에 포함되지 않습니다.",detail:"날짜와 일치하는 요일을 입력하십시오."}}},"oj-validator":{length:{hint:{min:"{min}자 이상을 입력하십시오.",max:"{max}자 이하를 입력하십시오.",inRange:"{min} 이상 최대 {max}까지 문자를 입력하십시오.",exact:"{length}자를 입력하십시오."},messageDetail:{tooShort:"{min}자 이상(그 이하는 안됨)을 입력하십시오.",tooLong:"{max}자 이하(그 이상은 안됨)를 입력하십시오."},messageSummary:{tooShort:"문자 수가 너무 적습니다.",tooLong:"문자 수가 너무 많습니다."}},range:{number:{hint:{min:"{min}보다 크거나 같은 숫자를 입력하십시오.",max:"{max}보다 작거나 같은 숫자를 입력하십시오.",
inRange:"{min}~{max} 사이의 숫자를 입력하십시오."},messageDetail:{rangeUnderflow:"숫자는 {min}보다 크거나 같아야 합니다.",rangeOverflow:"숫자는 {max}보다 작거나 같아야 합니다."},messageSummary:{rangeUnderflow:"숫자가 너무 낮습니다.",rangeOverflow:"숫자가 너무 높습니다."}},datetime:{hint:{min:"{min} 또는 이후의 날짜 및 시간을 입력하십시오.",max:"{max} 또는 이전의 날짜 및 시간을 입력하십시오.",inRange:"{min}~{max} 사이의 날짜 및 시간을 입력하십시오."},messageDetail:{rangeUnderflow:"날짜 및 시간은 {min} 또는 이후여야 합니다.",rangeOverflow:"날짜 및 시간은 {max} 또는 이전이어야 합니다."},messageSummary:{rangeUnderflow:"날짜 및 시간이 최소 날짜보다 이전입니다.",
rangeOverflow:"날짜 및 시간이 최대 날짜보다 이후입니다."}}},restriction:{date:{messageSummary:"날짜 {value}은(는) 사용 안함으로 설정된 항목입니다.",messageDetail:"날짜 {value}은(는) 사용 안함으로 설정된 항목의 날짜가 아니어야 합니다."}},regExp:{summary:"형식이 잘못되었습니다.",detail:"값 '{value}'은(는) 이 패턴 '{pattern}'과(와) 일치해야 합니다."},required:{summary:"값이 필요합니다.",detail:"값을 입력해야 합니다."}},"oj-editableValue":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputDate":{prevText:"이전",nextText:"다음",currentText:"오늘",weekHeader:"주",tooltipCalendar:"날짜 선택",tooltipCalendarDisabled:"사용 안함으로 설정된 날짜 선택",
weekText:"주",datePicker:"날짜 선택기",inputHelp:"달력에 액세스하려면 아래로 키 또는 위로 키를 누르십시오.",inputHelpBoth:"달력에 액세스하려면 아래로 키 또는 위로 키를 누르고 시간 드롭다운에 액세스하려면 Shift + 아래로 키 또는 Shift + 위로 키를 누르십시오.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{tooltipTime:"시간 선택",tooltipTimeDisabled:"사용 안함으로 설정된 시간 선택",inputHelp:"시간 드롭다운에 액세스하려면 아래로 키 또는 위로 키를 누르십시오.",
dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"값은 이 패턴과 일치해야 함: '{pattern}'"}},"oj-ojFilmStrip":{labelAccArrowNextPage:"다음 페이지",labelAccArrowPreviousPage:"이전 페이지",tipArrowNextPage:"다음",tipArrowPreviousPage:"이전"},"oj-ojDataGrid":{accessibleSortAscending:"{id}이(가) 오름차순으로 정렬됨",accessibleSortDescending:"{id} 내림차순으로 정렬",
accessibleActionableMode:"작업 가능 모드 입력",accessibleNavigationMode:"탐색 모드 입력",accessibleSummaryExact:"{rownum} 행 및 {colnum} 열이 포함된 데이터 그리드입니다.",accessibleSummaryEstimate:"알 수 없는 행 및 열 수를 포함하는 데이터 그리드입니다.",accessibleSummaryExpanded:"현재 {num}개 행이 확장되었습니다.",accessibleRowExpanded:"행 확장",accessibleRowCollapsed:"행 축소",accessibleRowSelected:"선택한 행 {row}",accessibleColumnSelected:"선택한 열 {column}",accessibleStateSelected:"선택됨",accessibleMultiCellSelected:"{num}개 셀 선택됨",accessibleRowContext:"행 {index}",accessibleColumnContext:"열 {index}",
accessibleRowHeaderContext:"행 헤더 {index}",accessibleColumnHeaderContext:"열 헤더 {index}",accessibleLevelContext:"레벨 {level}",accessibleRangeSelectModeOn:"선택한 범위의 셀 추가 모드 설정",accessibleRangeSelectModeOff:"선택한 범위의 셀 추가 모드 해제",accessibleFirstRow:"첫번째 행에 도달했습니다.",accessibleLastRow:"마지막 행에 도달했습니다.",accessibleFirstColumn:"첫번째 열에 도달했습니다.",accessibleLastColumn:"마지막 열에 도달했습니다.",accessibleSelectionAffordanceTop:"위쪽 선택 핸들",accessibleSelectionAffordanceBottom:"아래쪽 선택 핸들",msgFetchingData:"데이터 인출 중...",msgNoData:"표시할 항목이 없습니다.",
labelResize:"크기 조정",labelResizeWidth:"너비 크기 조정",labelResizeHeight:"높이 크기 조정",labelSortRow:"행 정렬",labelSortRowAsc:"행 정렬 오름차순",labelSortRowDsc:"행 정렬 내림차순",labelSortCol:"정렬 열",labelSortColAsc:"열 정렬 오름차순",labelSortColDsc:"열 정렬 내림차순",labelCut:"잘라내기",labelPaste:"붙여넣기",labelEnableNonContiguous:"비연속 선택 사용",labelDisableNonContiguous:"비연속 선택 사용 안함",labelResizeDialogSubmit:"OK"},"oj-ojRowExpander":{accessibleLevelDescription:"레벨 {level}",accessibleRowDescription:"레벨 {level}, 행 {num}/{total}",accessibleRowExpanded:"행 확장",
accessibleRowCollapsed:"행 축소",accessibleStateExpanded:"확장됨",accessibleStateCollapsed:"축소됨"},"oj-ojListView":{msgFetchingData:"데이터 인출 중...",msgNoData:"표시할 항목이 없습니다.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleReorderTouchInstructionText:"길게 두 번 누릅니다.  소리가 날 때까지 기다렸다가 끌어서 재정렬합니다.",accessibleReorderBeforeItem:"이전 {item}",accessibleReorderAfterItem:"이후 {item}",accessibleReorderInsideItem:"대상 {item}",labelCut:"잘라내기",labelCopy:"복사",labelPaste:"붙여넣기",labelPasteBefore:"앞에 붙여넣기",
labelPasteAfter:"뒤에 붙여넣기"},"oj-_ojLabel":{tooltipHelp:"도움말",tooltipRequired:"필수"},"oj-ojInputNumber":{numberRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"감소",tooltipIncrement:"증가"},"oj-ojTable":{labelAccSelectionAffordanceTop:"위쪽 선택 핸들",labelAccSelectionAffordanceBottom:"아래쪽 선택 핸들",labelEnableNonContiguousSelection:"비연속 선택 사용",labelDisableNonContiguousSelection:"비연속 선택 사용 안함",labelSelectRow:"행 선택",
labelSelectColumn:"열 선택",labelSort:"정렬",labelSortAsc:"오름차순 정렬",labelSortDsc:"내림차순 정렬",msgFetchingData:"데이터 인출 중...",msgNoData:"표시할 데이터가 없습니다."},"oj-ojTabs":{labelCut:"잘라내기",labelPasteBefore:"앞에 붙여넣기",labelPasteAfter:"뒤에 붙여넣기",labelRemove:"제거",labelReorder:"재정렬",removeCueText:"제거 가능"},"oj-ojSelect":{seachField:"검색 필드",noMatchesFound:"일치 항목을 찾을 수 없습니다."},"oj-ojSwitch":{SwitchON:"설정",SwitchOFF:"해제"},"oj-ojCombobox":{noMatchesFound:"일치 항목을 찾을 수 없습니다."},"oj-ojInputSearch":{noMatchesFound:"일치 항목을 찾을 수 없습니다."},
"oj-ojTree":{stateLoading:"로드 중...",labelNewNode:"새 노드",labelMultiSelection:"다중 선택",labelEdit:"편집",labelCreate:"생성",labelCut:"잘라내기",labelCopy:"복사",labelPaste:"붙여넣기",labelRemove:"제거",labelRename:"이름 바꾸기",labelNoData:"데이터 없음"},"oj-ojPagingControl":{labelAccPaging:"페이지 번호 매김",labelAccNavFirstPage:"첫번째 페이지",labelAccNavLastPage:"마지막 페이지",labelAccNavNextPage:"다음 페이지",labelAccNavPreviousPage:"이전 페이지",labelAccNavPage:"페이지",labelLoadMore:"추가 정보 표시...",labelLoadMoreMaxRows:"최대 제한 {maxRows}행에 도달함",labelNavInputPage:"페이지",
labelNavInputPageMax:"/{pageMax}",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"/",msgItemRangeOfAtLeast:"최소한",msgItemRangeOfApprox:"대략",msgItemRangeItems:"항목",tipNavInputPage:"페이지로 이동",tipNavPageLink:"{pageNum} 페이지로 이동",tipNavNextPage:"다음",tipNavPreviousPage:"이전",tipNavFirstPage:"첫번째",tipNavLastPage:"마지막",pageInvalid:{summary:"입력된 페이지 값이 부적합합니다.",detail:"0보다 큰 값을 입력하십시오."},maxPageLinksInvalid:{summary:"maxPageLinks 값이 부적합합니다.",detail:"4보다 큰 값을 입력하십시오."}},
"oj-ojMasonryLayout":{labelCut:"잘라내기",labelPasteBefore:"앞에 붙여넣기",labelPasteAfter:"뒤에 붙여넣기"},"oj-panel":{labelAccButtonExpand:"확대",labelAccButtonCollapse:"축소",labelAccButtonRemove:"제거"},"oj-ojChart":{labelDefaultGroupName:"그룹 {0}",labelSeries:"계열",labelGroup:"그룹",labelDate:"날짜",labelValue:"값",labelTargetValue:"대상",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"백분율",labelLow:"낮음",labelHigh:"높음",labelOpen:"열기",labelClose:"닫기",labelVolume:"볼륨",labelMin:"최소",labelMax:"최대",labelOther:"기타",tooltipPan:"이동",
tooltipSelect:"움직이는 텍스트 선택",tooltipZoom:"움직이는 텍스트 확대/축소",componentName:"차트"},"oj-dvtBaseGauge":{componentName:"게이지"},"oj-ojDiagram":{componentName:"다이어그램"},"oj-ojLegend":{componentName:"범례"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"기타",labelGroup:"그룹",labelSize:"크기",labelAdditionalData:"추가 데이터",componentName:"NBox"},"oj-ojPictoChart":{componentName:"그림 차트"},"oj-ojSparkChart":{componentName:"차트"},"oj-ojSunburst":{labelColor:"색상",labelSize:"크기",componentName:"Sunburst"},"oj-ojTagCloud":{componentName:"태그 클라우드"},
"oj-ojThematicMap":{componentName:"주제도"},"oj-ojTimeline":{componentName:"타임라인",labelSeries:"계열",tooltipZoomIn:"확대",tooltipZoomOut:"축소"},"oj-ojTreemap":{labelColor:"색상",labelSize:"크기",tooltipIsolate:"분리",tooltipRestore:"복원",componentName:"트리맵"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"부적합한 데이터",labelNoData:"표시할 데이터 없음",labelClearSelection:"선택 지우기",
labelDataVisualization:"데이터 시각화",stateSelected:"선택됨",stateUnselected:"선택 취소됨",stateMaximized:"최대화됨",stateMinimized:"최소화됨",stateExpanded:"확장됨",stateCollapsed:"축소됨",stateIsolated:"분리됨",stateHidden:"숨김",stateVisible:"표시 가능",stateDrillable:"드릴 가능",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0}/{1}"},"oj-ojNavigationList":{defaultRootLabel:"탐색 목록",hierMenuBtnLabel:"계층 메뉴 단추",selectedLabel:"선택됨",previousIcon:"이전",msgFetchingData:"데이터 인출 중...",msgNoData:"표시할 항목이 없습니다."},"oj-ojSlider":{noValue:"ojSlider에 값이 없습니다.",
maxMin:"최대값은 최소값보다 작지 않아야 합니다.",valueRange:"값은 최소값과 최대값 범위 사이에 있어야 합니다.",optionNum:"{option} 옵션은 숫자가 아닙니다.",invalidStep:"부적합한 단계입니다. 단계는 0보다 커야 합니다."},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"팝업 입력. F6를 눌러 팝업과 연관된 제어 사이를 이동합니다.",ariaLiveRegionInitialFocusNone:"팝업 열림. F6를 눌러 팝업과 연관된 제어 사이를 이동합니다.",ariaLiveRegionInitialFocusFirstFocusableTouch:"팝업 열림. 팝업은 팝업 내의 마지막 링크로 이동하여 닫을 수 있습니다.",ariaLiveRegionInitialFocusNoneTouch:"팝업 열림.  다음 링크로 이동하여 팝업 내의 포커스를 설정할 수 있습니다.",ariaFocusSkipLink:"열린 팝업으로 이동하려면 두 번 누릅니다.",
ariaCloseSkipLink:"열린 팝업을 닫으려면 두 번 누릅니다."},"oj-pullToRefresh":{ariaRefreshLink:"콘텐츠를 새로 고칠 수 있는 활성화 링크",ariaRefreshingLink:"콘텐츠를 새로 고치는 중",ariaRefreshCompleteLink:"새로 고침 완료"},"oj-ojIndexer":{indexerOthers:"#",ariaDisabledLabel:"일치하는 그룹 헤더를 찾을 수 없음",ariaOthersLabel:"숫자",ariaInBetweenText:"{first}과(와) {second} 사이",ariaKeyboardInstructionText:"Enter 키를 눌러 값을 선택합니다.",ariaTouchInstructionText:"길게 두번 눌러서 제스처 모드로 전환한 다음 위로 또는 아래로 드래그하여 값을 조정합니다."}});
const C = (layout, palette, motif, header, projects, radius, density, concept) => ({
  layout, motif, header, projects, radius, density, concept,
  bg: palette[0], paper: palette[1], ink: palette[2], accent: palette[3], accent2: palette[4] || palette[3]
});

export const BRAND_CONCEPTS = {
  airbnb: C("cards",["#fff7f7","#ffffff","#222222","#ff385c","#00a699"],"arches","friendly","tiles",22,1.08,"여행 일정표처럼 여유롭고 친근한 카드형 이력서"),
  airtable: C("board",["#f7f5ef","#ffffff","#1f1f1f","#f06543","#2d6a4f"],"blocks","editorial","tiles",4,.96,"색상 블록과 레코드 보드를 결합한 작업 관리형 이력서"),
  apple: C("gallery",["#f5f5f7","#ffffff","#1d1d1f","#0071e3","#86868b"],"halo","minimal","showcase",18,1.18,"제품 갤러리처럼 절제된 여백과 집중형 프로젝트 전시"),
  binance: C("dashboard",["#0b0e11","#181a20","#f5f5f5","#f0b90b","#2ebd85"],"ticker","darkband","metrics",6,.9,"거래 터미널의 숫자·상태·성과 지표 중심 구성"),
  bmw: C("split",["#f4f3ef","#ffffff","#111827","#1c69d4","#071d49"],"road","hero","rows",2,1.03,"정밀한 엔지니어링 브로슈어와 모델 카탈로그의 결합"),
  "bmw-m": C("poster",["#08090b","#111318","#ffffff","#0066b1","#e32636"],"tricolor","race","numbered",0,.96,"모터스포츠 포스터와 랩타임 시트를 닮은 고대비 구성"),
  bugatti: C("luxury",["#000000","#090909","#f4f1eb","#ffffff","#7c6f5b"],"frame","monument","showcase",0,1.22,"검은 전시장과 명판을 연상시키는 극단적 절제"),
  cal: C("calendar",["#f7f7f5","#ffffff","#111111","#111111","#6b7280"],"calendar","compact","schedule",12,1.03,"월간 캘린더와 일정 슬롯으로 경력을 시간축에 배치"),
  claude: C("essay",["#f2eee6","#fffaf2","#2f2b28","#d97757","#243447"],"marginnotes","literary","chapters",3,1.16,"따뜻한 연구 노트와 긴 호흡의 에세이형 경력 서술"),
  clay: C("playground",["#f7f4ff","#ffffff","#17213a","#ff5c8a","#36a18b"],"blobs","playful","tiles",20,1.08,"점토 조형물처럼 다채로운 모듈을 쌓은 데이터 놀이터"),
  clickhouse: C("terminal",["#050505","#111111","#f8f8f8","#ffd700","#ff3b30"],"pulse","console","metrics",0,.84,"초고속 데이터베이스 콘솔과 성능 로그 형태"),
  cohere: C("research",["#eef1e8","#ffffff","#16201b","#39594a","#d9b26f"],"mineral","institutional","chapters",14,1.07,"기업 AI 연구 보고서와 광물 표본 카드를 결합"),
  coinbase: C("finance",["#f4f7ff","#ffffff","#0a0b0d","#0052ff","#7d95ff"],"ledger","institutional","metrics",10,1.02,"기관용 투자설명서처럼 신뢰와 수치를 전면에 배치"),
  composio: C("matrix",["#08090c","#11131a","#f5f7ff","#3947ff","#77ffcc"],"spotlight","console","matrix",8,.84,"AI 도구 연결 상태를 보여주는 2x2 터미널 매트릭스"),
  cursor: C("workbench",["#f7f5ef","#fffdf8","#26251e","#f54e00","#9cc7b5"],"cursor","code","timeline",2,.98,"코드 편집기와 AI 작업 타임라인을 결합한 워크벤치"),
  "dell-1996": C("retro",["#000000","#d8d8c8","#000000","#ff765d","#9bb7ff"],"bevel","catalog","ribbons",0,.86,"1990년대 웹 카탈로그의 리본·베벨·색상 패널 재해석"),
  elevenlabs: C("audio",["#f2f1ef","#ffffff","#292524","#6b5cff","#77cbb9"],"waveform","editorial","waves",18,1.12,"음성 파형과 잡지 지면을 결합한 오디오 포트폴리오"),
  expo: C("devices",["#edf6ff","#ffffff","#171717","#000000","#0d74ce"],"devices","minimal","showcase",18,1.08,"모바일 디바이스 스택을 연상시키는 중앙 집중형 구성"),
  ferrari: C("cinema",["#111111","#181818","#ffffff","#da291c","#f2c94c"],"speedline","race","showcase",0,1.12,"시네마틱 레이싱 포스터와 챕터형 프로젝트 전시"),
  figma: C("canvas",["#ffffff","#ffffff","#111111","#a259ff","#1abcfe"],"handles","playful","tiles",14,1.03,"디자인 캔버스의 선택 핸들과 컬러 프레임을 활용"),
  framer: C("artboard",["#050505","#101010","#ffffff","#ff36c8","#0099ff"],"gradientpanel","hero","masonry",18,1.02,"검은 아트보드 위에 움직이는 듯한 쇼케이스 패널 배치"),
  hashicorp: C("products",["#080808","#151515","#f4f4f4","#7b42bc","#f6c344"],"productbars","console","matrix",2,.88,"인프라 제품군을 색상 식별자로 나눈 운영 콘솔"),
  hp: C("enterprise",["#f4f7fb","#ffffff","#1a1a1a","#024ad8","#00a6d2"],"chevrons","corporate","rows",12,1.02,"각진 청색 셰브론과 기업 사례집의 안정적 조합"),
  ibm: C("carbon",["#f4f4f4","#ffffff","#161616","#0f62fe","#42be65"],"grid16","corporate","matrix",0,.88,"16열 엔터프라이즈 그리드와 데이터 타일형 정보 구조"),
  intercom: C("publication",["#f5f2ea","#ffffff","#222222","#ff5600","#ffd6b8"],"chat","editorial","chapters",10,1.08,"고객 대화 카드와 제품 간행물을 결합한 구성"),
  kraken: C("exchange",["#120d2b","#1b1438","#f5f2ff","#7b61ff","#23d5ab"],"tentacles","darkband","metrics",16,.9,"심해 거래소처럼 굽이치는 보라색 데이터 흐름"),
  lamborghini: C("angular",["#080808","#141414","#ffffff","#d8ff00","#f4c542"],"hexagon","race","numbered",0,.94,"육각 계기판과 날카로운 사선으로 구성한 슈퍼카 대시보드"),
  "linear.app": C("issues",["#060608","#0f1014","#f7f8f8","#5e6ad2","#8a8f98"],"issuegrid","console","timeline",6,.82,"이슈 트래커의 상태·우선순위·사이클을 경력 구조로 변환"),
  lovable: C("romance",["#fff4f7","#ffffff","#351a24","#ff3e7f","#8b5cf6"],"hearts","friendly","tiles",24,1.12,"부드러운 색면과 연결선을 사용한 친근한 빌더 컨셉"),
  mastercard: C("network",["#faf7f2","#ffffff","#1b1b1b","#eb001b","#f79e1b"],"circles","institutional","metrics",12,1,"겹치는 원과 결제 네트워크를 닮은 관계 중심 구성"),
  meta: C("infinite",["#f4f8ff","#ffffff","#17233c","#0866ff","#9b5cff"],"infinity","hero","masonry",22,1.06,"무한 루프와 연결형 생태계를 표현한 확장형 레이아웃"),
  minimax: C("models",["#fff8f2","#ffffff","#1c1820","#ff5a3d","#635bff"],"modelcards","editorial","matrix",12,.94,"AI 모델 릴리스를 서로 다른 색의 사양 카드로 분류"),
  mintlify: C("docs",["#effbf6","#ffffff","#15251e","#18a566","#58a6ff"],"toc","code","chapters",10,.9,"문서 사이트의 사이드바·본문·목차를 이력서에 이식"),
  miro: C("whiteboard",["#fffdf5","#ffffff","#111111","#ffd02f","#4262ff"],"stickies","playful","board",10,1.03,"화이트보드의 스티커 메모와 연결 화살표로 경력 시각화"),
  "mistral.ai": C("sunset",["#fff3cf","#fffaf0","#2c1b13","#ff5c00","#9e1b0e"],"sunset","literary","chapters",2,1.12,"석양의 색 띠와 산맥형 구분선을 사용한 AI 연구 기록"),
  mongodb: C("atlas",["#061e1b","#0b2b26","#f4fff9","#00ed64","#b8ffcf"],"leaves","darkband","metrics",14,.94,"데이터 클러스터와 잎맥을 닮은 계층형 아틀라스"),
  nike: C("campaign",["#f5f5f5","#ffffff","#111111","#ff3b00","#111111"],"swoosh","poster","showcase",0,1.14,"대형 스포츠 캠페인 포스터와 성과 슬로건 중심 구성"),
  "nintendo-2001": C("console",["#8f99c4","#c4c9df","#141728","#ffb000","#5de1ff"],"circuit","retroconsole","ribbons",8,.86,"Y2K 게임기 전면 패널과 회로 보드를 닮은 인터페이스"),
  notion: C("workspace",["#f7f6f3","#ffffff","#252525","#6c5ce7","#f2c94c"],"pages","friendly","board",8,1.02,"문서 블록·데이터베이스 속성·콜아웃을 조합한 워크스페이스"),
  nvidia: C("compute",["#060606","#111111","#f5f5f5","#76b900","#b7ff4a"],"chips","console","matrix",0,.86,"GPU 칩 그리드와 병렬 연산 파이프라인을 표현"),
  ollama: C("local",["#f6f1e8","#fffdf7","#161616","#161616","#9b7b4f"],"llama","literary","chapters",2,1.1,"로컬 AI 노트북처럼 소박하고 직접적인 단일 열 구성"),
  "opencode.ai": C("opensource",["#07110d","#0c1a13","#eafff1","#25d366","#9cffc0"],"brackets","terminal","timeline",0,.84,"오픈소스 터미널의 괄호·diff·커밋 흐름을 시각화"),
  pinterest: C("masonry",["#f7f7f7","#ffffff","#242424","#e60023","#9c6b4f"],"pins","gallery","masonry",18,1.04,"프로젝트를 서로 다른 높이의 핀 보드 카드로 배열"),
  playstation: C("consoleui",["#071a3d","#0c2559","#ffffff","#2f6fff","#5ee7ff"],"symbols","hero","tiles",4,.96,"게임 콘솔 메뉴와 △○×□ 기호 체계를 적용"),
  posthog: C("analytics",["#fff7e8","#ffffff","#241f1a","#f54e00","#f7c948"],"hog","playful","metrics",6,.9,"제품 분석 대시보드와 장난스러운 스티커 주석 결합"),
  raycast: C("command",["#160c22","#21102f","#ffffff","#ff6363","#8b5cf6"],"commandbar","spotlight","tiles",18,.92,"명령 팔레트·단축키·퀵 액션을 경력 탐색 구조로 사용"),
  renault: C("diamond",["#f2f2ee","#ffffff","#161616","#ffd100","#333333"],"diamonds","catalog","rows",0,1.04,"다이아몬드 그리드와 자동차 사양표를 닮은 카탈로그"),
  replicate: C("lab",["#f2f6ff","#ffffff","#141820","#1d4ed8","#ff6b6b"],"samples","research","matrix",8,.9,"모델 입력·출력 샘플을 비교하는 실험실 보고서"),
  resend: C("mail",["#f5f5f5","#ffffff","#111111","#000000","#6b7280"],"envelopes","minimal","rows",2,.94,"이메일 인박스의 제목·상태·전송 기록처럼 정렬"),
  revolut: C("banking",["#eef3ff","#ffffff","#111827","#245bff","#8c52ff"],"cards","finance","metrics",20,1.02,"글로벌 금융 앱의 계좌 카드와 통화 지표 중심 구성"),
  runwayml: C("filmstrip",["#050505","#111111","#f7f7f7","#e7ff45","#8f6cff"],"film","cinema","showcase",4,1.02,"영상 생성 스튜디오의 필름 스트립과 장면 보드"),
  sanity: C("content",["#fff3f0","#ffffff","#231c1a","#f03e2f","#6e4c47"],"schemas","editorial","board",8,.96,"콘텐츠 스키마·필드·참조 관계를 이력서 구조로 변환"),
  sentry: C("errors",["#1b102d","#28173f","#ffffff","#b7ff3c","#ff6b6b"],"stacktrace","console","timeline",10,.86,"오류 스택·이벤트 타임라인·해결 상태 중심 개발자 콘솔"),
  shopify: C("commerce",["#eef7f1","#ffffff","#17251d","#008060","#95bf47"],"storefront","friendly","tiles",18,1.04,"상점 진열대와 주문 흐름을 닮은 커머스 포트폴리오"),
  slack: C("channels",["#f6eff8","#ffffff","#2c1238","#611f69","#36c5f0"],"channels","friendly","board",14,1.02,"채널·스레드·상태 배지로 협업 경력을 구성"),
  spacex: C("mission",["#000000","#07090d","#ffffff","#ffffff","#6e8fb8"],"trajectory","monument","timeline",0,1.12,"발사 임무 브리핑과 궤도 타임라인을 닮은 구성"),
  spotify: C("playlist",["#0a0a0a","#121212","#ffffff","#1ed760","#b3b3b3"],"equalizer","darkband","tracks",10,.92,"플레이리스트·트랙 번호·재생 막대로 프로젝트를 배열"),
  starbucks: C("menu",["#f2f0e7","#ffffff","#1e3932","#00754a","#d4a574"],"stamps","literary","menu",16,1.08,"커피 메뉴 보드와 원형 스탬프를 활용한 따뜻한 구성"),
  stripe: C("payments",["#eef1ff","#ffffff","#172b4d","#635bff","#00d4ff"],"mesh","finance","metrics",12,.98,"결제 흐름과 API 계층을 사선 메시로 연결한 금융 인프라"),
  supabase: C("database",["#071a13","#0f241b","#f3fff8","#3ecf8e","#6ee7b7"],"tables","terminal","matrix",6,.88,"오픈소스 데이터베이스 테이블과 SQL 콘솔 중심 구성"),
  superhuman: C("inbox",["#12172f","#1b2142","#ffffff","#7c6cff","#3dd6a5"],"speed","spotlight","rows",10,.92,"고속 이메일 인박스와 키보드 단축 동작을 시각화"),
  tesla: C("minimalauto",["#f4f4f4","#ffffff","#171a20","#cc0000","#3e6ae1"],"horizon","minimal","showcase",0,1.16,"차량 구성 페이지처럼 넓은 여백과 핵심 사양만 노출"),
  theverge: C("news",["#f1ff00","#ffffff","#111111","#e6007e","#4a00ff"],"slashes","magazine","masonry",0,.94,"기술 매거진의 사선 헤드라인과 강렬한 뉴스 그리드"),
  "together.ai": C("cluster",["#080808","#111111","#ffffff","#ff6a3d","#a78bfa"],"cluster","research","matrix",6,.9,"분산 AI 클러스터와 연구 논문 인덱스를 결합"),
  uber: C("mobility",["#eeeeee","#ffffff","#000000","#000000","#276ef1"],"routes","corporate","rows",18,1.04,"도시 이동 경로와 픽업·도착 지점을 경력 동선으로 표현"),
  vercel: C("deployment",["#fafafa","#ffffff","#000000","#000000","#7928ca"],"triangle","minimal","timeline",0,.92,"배포 파이프라인·도메인·프리뷰 단계를 극도로 간결하게 구성"),
  vodafone: C("telecom",["#f6f6f6","#ffffff","#171717","#e60000","#8b0000"],"signal","poster","rows",12,1.06,"통신 신호와 대형 캠페인 헤드라인을 결합"),
  voltagent: C("agents",["#050806","#0c120e","#f2fff5","#21e56b","#8affb1"],"agentgrid","terminal","matrix",4,.84,"AI 에이전트 노드와 실행 로그를 정밀한 그리드로 표현"),
  warp: C("terminalblocks",["#171411","#211d19","#f5f2ed","#d5a6ff","#62d6c7"],"blockshell","console","timeline",8,.86,"차세대 터미널의 명령 블록·출력·상태 흐름 중심 구성"),
  webflow: C("designer",["#080808","#121212","#ffffff","#4353ff","#ff4f8b"],"panels","artboard","masonry",2,.94,"비주얼 디자이너의 캔버스·속성 패널·레이어 구조"),
  wired: C("magazine",["#ffffff","#ffffff","#111111","#e21b2d","#111111"],"masthead","magazine","chapters",0,.98,"인쇄 기술 잡지의 마스트헤드·칼럼·기사 번호 구성"),
  wise: C("transfer",["#e9f7d5","#ffffff","#163300","#9fe870","#2f5711"],"arrows","finance","metrics",18,1.04,"국제 송금 흐름과 환율 화살표를 활용한 핀테크 편집물"),
  "x.ai": C("cosmic",["#000000","#080808","#f5f5f5","#ffffff","#ff7a45"],"stars","monument","timeline",0,1.08,"우주 관측 로그와 엔지니어링 브리핑의 결합"),
  zapier: C("automation",["#fff7ed","#fffdf8","#2d1b12","#ff4f00","#ffd166"],"workflow","friendly","timeline",8,1.03,"자동화 단계와 앱 연결 노드를 따뜻한 워크플로로 표현")
};

const motifCss = {
  arches:`body:before{content:"";position:fixed;right:4vw;top:5vh;width:180px;height:90px;border:20px solid var(--accent);border-bottom:0;border-radius:120px 120px 0 0;opacity:.12}`,
  blocks:`body{background-image:linear-gradient(90deg,var(--accent) 0 8%,transparent 8% 82%,var(--accent2) 82% 100%)}`,
  halo:`body{background-image:radial-gradient(circle at 50% 0,var(--accent)22,transparent 42%)}`,
  ticker:`.resume:before{content:"▲ 09:42   +12.8%   ● LIVE   30,000 DEVICES";display:block;padding:8px 18px;background:var(--accent);color:#111;font:700 11px/1 monospace;letter-spacing:.12em}`,
  road:`body{background-image:linear-gradient(115deg,transparent 48%,var(--accent) 48% 49%,transparent 49%)}`,
  tricolor:`.resume:before{content:"";display:block;height:10px;background:linear-gradient(90deg,#55a8dc 0 33%,#124191 33% 66%,#e32636 66%)}`,
  frame:`.resume{outline:1px solid var(--accent2);outline-offset:-18px}`,
  calendar:`.section{background-image:linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:14.285% 100%}`,
  marginnotes:`.section:after{content:"NOTE";position:absolute;right:-2px;top:0;color:var(--accent);font:700 9px monospace;letter-spacing:.15em}`,
  blobs:`body{background-image:radial-gradient(circle at 8% 20%,var(--accent) 0 7%,transparent 7%),radial-gradient(circle at 92% 72%,var(--accent2) 0 9%,transparent 9%)}`,
  pulse:`.section-title:after{content:"";height:14px;flex:1;background:repeating-linear-gradient(90deg,var(--accent) 0 3px,transparent 3px 8px)}`,
  mineral:`body{background-image:linear-gradient(135deg,transparent 70%,var(--accent2)1f 70%)}`,
  ledger:`.resume{background-image:repeating-linear-gradient(0deg,transparent 0 31px,var(--line) 32px)}`,
  spotlight:`body{background-image:radial-gradient(circle at 50% 8%,var(--accent)55 0,transparent 45%)}`,
  cursor:`.name:after{content:"_";color:var(--accent);animation:blink 1.1s step-end infinite}@keyframes blink{50%{opacity:0}}`,
  bevel:`.section{border-top:3px ridge #fff;border-left:3px ridge #fff}`,
  waveform:`.section-title:after{content:"▁▃▆▂▇▄▂▅▁";color:var(--accent);letter-spacing:.15em}`,
  devices:`.summary{border:12px solid var(--ink);border-width:18px 5px 28px;border-radius:18px}`,
  speedline:`body{background-image:linear-gradient(120deg,transparent 58%,var(--accent) 58% 59%,transparent 59%)}`,
  handles:`.section{outline:1px solid var(--line);position:relative}.section:before{content:"";position:absolute;width:7px;height:7px;border:1px solid var(--accent);background:var(--paper);left:-4px;top:-4px}`,
  gradientpanel:`body{background-image:radial-gradient(circle at 90% 10%,var(--accent)88 0,transparent 35%),radial-gradient(circle at 5% 90%,var(--accent2)66 0,transparent 30%)}`,
  productbars:`.project:nth-child(4n+1){border-color:#7b42bc!important}.project:nth-child(4n+2){border-color:#f6c344!important}.project:nth-child(4n+3){border-color:#e91e8c!important}.project:nth-child(4n){border-color:#00bcd4!important}`,
  chevrons:`.section-title:before{content:"//";color:var(--accent);font-size:1.5em;margin-right:9px}`,
  grid16:`body{background-image:linear-gradient(90deg,var(--line)55 1px,transparent 1px);background-size:6.25% 100%}`,
  chat:`.project:nth-child(odd){margin-right:8%}.project:nth-child(even){margin-left:8%}`,
  tentacles:`body{background-image:radial-gradient(ellipse at 0 100%,transparent 35%,var(--accent)22 36%,transparent 39%)}`,
  hexagon:`.section-title:before{content:"⬡";color:var(--accent);margin-right:8px}`,
  issuegrid:`.project-role:before{content:"● ";color:var(--accent)}`,
  hearts:`.section-title:before{content:"♥";color:var(--accent);margin-right:8px}`,
  circles:`.resume-header:after{content:"";width:72px;height:44px;background:radial-gradient(circle at 36% 50%,var(--accent) 0 44%,transparent 45%),radial-gradient(circle at 64% 50%,var(--accent2) 0 44%,transparent 45%)}`,
  infinity:`.resume-header:after{content:"∞";font-size:86px;line-height:.7;color:var(--accent)}`,
  modelcards:`.project:nth-child(3n+1){background:#ffe4dc!important}.project:nth-child(3n+2){background:#e8e1ff!important}.project:nth-child(3n){background:#dff7ef!important}`,
  toc:`.section-title:before{content:"# ";color:var(--accent)}`,
  stickies:`.project:nth-child(4n+1){transform:rotate(-.5deg)}.project:nth-child(4n+2){transform:rotate(.7deg)}`,
  sunset:`.resume:after{content:"";display:block;height:18px;background:linear-gradient(90deg,#e9b949,#ff7b00,#b42318,#501313)}`,
  leaves:`.section-title:before{content:"◒";color:var(--accent);margin-right:8px}`,
  swoosh:`.resume-header{clip-path:polygon(0 0,100% 0,92% 100%,0 82%)}`,
  circuit:`.resume{background-image:radial-gradient(circle,var(--accent2) 1px,transparent 2px);background-size:24px 24px}`,
  pages:`.section{box-shadow:-5px 5px 0 var(--line)}`,
  chips:`.project:before{content:"";position:absolute;inset:8px;border:1px dashed var(--accent);pointer-events:none}`,
  llama:`.resume-header:after{content:"▲";font-size:60px;transform:scaleX(.55);color:var(--accent2)}`,
  brackets:`.section-title:before{content:"["}.section-title:after{content:"]"}`,
  pins:`.project:before{content:"●";display:block;color:var(--accent);text-align:center;margin-bottom:6px}`,
  symbols:`.resume-header:after{content:"△ ○ × □";font-size:28px;letter-spacing:.35em;color:var(--accent2)}`,
  hog:`.section-title:after{content:"↗";margin-left:auto;color:var(--accent)}`,
  commandbar:`.summary:before{content:"⌘ K";float:right;padding:3px 8px;border:1px solid var(--line);border-radius:6px;font:700 10px monospace}`,
  diamonds:`.section-title:before{content:"◇";font-size:1.4em;margin-right:8px}`,
  samples:`.project-content{background:linear-gradient(90deg,transparent 49%,var(--line) 50%,transparent 51%)}`,
  envelopes:`.section-title:before{content:"✉";margin-right:8px}`,
  cards:`.project:nth-child(odd){transform:translateX(-5px)}.project:nth-child(even){transform:translateX(5px)}`,
  film:`.project-list{border-left:12px dotted var(--paper);border-right:12px dotted var(--paper)}`,
  schemas:`.skill-row dt:before{content:"{ ";color:var(--accent)}.skill-row dt:after{content:" }";color:var(--accent)}`,
  stacktrace:`.project-period:before{content:"ERR ";color:var(--accent2)}`,
  storefront:`.project-title{border-bottom:4px solid var(--accent);padding-bottom:4px}`,
  channels:`.section-title:before{content:"#";color:var(--accent);margin-right:6px}`,
  trajectory:`.project-list{background:linear-gradient(110deg,transparent 49%,var(--accent2) 50%,transparent 51%)}`,
  equalizer:`.section-title:after{content:"▂▅▇▃▆";color:var(--accent);margin-left:auto}`,
  stamps:`.section-title:before{content:"✦";display:grid;place-items:center;width:26px;height:26px;border:2px solid var(--accent);border-radius:50%;margin-right:8px}`,
  mesh:`body{background-image:linear-gradient(135deg,var(--accent)22,transparent 40%),linear-gradient(45deg,var(--accent2)22,transparent 35%)}`,
  tables:`.skill-row,.technology-list div{outline:1px solid var(--line);outline-offset:-1px}`,
  speed:`.project-period:after{content:"  ⌘↵";color:var(--accent)}`,
  horizon:`.resume-header{background:linear-gradient(180deg,var(--paper),var(--bg));min-height:230px;align-content:center}`,
  slashes:`.section-title{transform:skewX(-8deg)}.section-title>*{transform:skewX(8deg)}`,
  cluster:`.project:before{content:"";position:absolute;width:9px;height:9px;background:var(--accent);border-radius:50%;right:10px;top:10px;box-shadow:-16px 10px 0 var(--accent2),-30px -4px 0 var(--accent)}`,
  routes:`.project-period:before{content:"● ";color:var(--accent2)}.project-period:after{content:" ─── ●";color:var(--accent)}`,
  triangle:`.resume-header:after{content:"";width:0;height:0;border-left:38px solid transparent;border-right:38px solid transparent;border-bottom:66px solid var(--ink)}`,
  signal:`.resume-header:after{content:"◔ ◑ ◕ ●";color:var(--accent);letter-spacing:.2em}`,
  agentgrid:`.project-title:before{content:"AGENT/";color:var(--accent);font:700 10px monospace}`,
  blockshell:`.project-content{border-left:4px solid var(--accent);padding-left:16px}`,
  panels:`.resume{border-left:52px solid #1b1b1b}.section-title{margin-left:-40px}`,
  masthead:`.name{display:inline-block;padding:3px 8px;background:var(--ink);color:var(--paper)!important;letter-spacing:.12em}`,
  arrows:`.section-title:after{content:"→→";color:var(--accent);margin-left:auto}`,
  stars:`body{background-image:radial-gradient(circle,#fff 1px,transparent 1px);background-size:42px 42px}`,
  workflow:`.project+.project:before{content:"↓";position:absolute;left:50%;top:-22px;color:var(--accent);font-weight:900}`
};

const GENERATED_LAYOUTS=["cards","board","gallery","dashboard","split","poster","calendar","essay","playground","terminal","research","finance","matrix","workbench","audio","canvas","publication","masonry","news","automation"];
const GENERATED_HEADERS=["friendly","editorial","minimal","darkband","hero","race","compact","literary","playful","console","institutional","code","catalog","corporate","research","poster","finance","spotlight","terminal","artboard","magazine"];
const GENERATED_PROJECTS=["tiles","showcase","metrics","rows","numbered","schedule","chapters","waves","matrix","timeline","ribbons","board","masonry","tracks","menu"];
const GENERATED_MOTIFS=Object.keys(motifCss);
const GENERATED_VISUALS=["table","chart","image","poster","diagram","code","stats","timeline"];
const GENERATED_FONTS=["neutral","mono","poster","editorial","condensed","wide"];
const CATEGORY_BASE={
  "Productivity & SaaS":{dark:false,bg:"#eef2f7",paper:"#ffffff",ink:"#17202a"},
  "Design & Creative":{dark:false,bg:"#fff2f7",paper:"#ffffff",ink:"#211724"},
  "AI & ML":{dark:true,bg:"#070914",paper:"#101426",ink:"#f4f6ff"},
  Fintech:{dark:false,bg:"#eef5ff",paper:"#ffffff",ink:"#0f2038"},
  "Developer Tools":{dark:true,bg:"#060807",paper:"#0e1411",ink:"#effff4"},
  "Media & Consumer":{dark:false,bg:"#fff6ed",paper:"#ffffff",ink:"#251b16"},
  "Backend & DevOps":{dark:true,bg:"#07090d",paper:"#11151b",ink:"#f3f7ff"},
  "E-commerce":{dark:false,bg:"#eff8f1",paper:"#ffffff",ink:"#13251a"},
  Other:{dark:false,bg:"#f3f3f3",paper:"#ffffff",ink:"#171717"}
};

const hashText=value=>[...String(value)].reduce((sum,char)=>Math.imul(sum^char.charCodeAt(0),16777619)>>>0,2166136261);
const pick=(items,seed,offset=0)=>items[(seed+offset)%items.length];
const isDarkColor=value=>{
  const match=String(value||"").match(/^#([0-9a-f]{6})$/i);
  if(!match)return false;
  const number=Number.parseInt(match[1],16);
  const red=number>>16,green=number>>8&255,blue=number&255;
  return red*.2126+green*.7152+blue*.0722<82;
};

function generateConcept(item){
  const seed=hashText(item.id);
  const category=item.category||"Other";
  const base=CATEGORY_BASE[category]||CATEGORY_BASE.Other;
  const hue=seed%360;
  const hue2=(hue+70+(seed%91))%360;
  const visualType=pick(GENERATED_VISUALS,seed,19);
  return {
    layout:pick(GENERATED_LAYOUTS,seed),header:pick(GENERATED_HEADERS,seed,3),projects:pick(GENERATED_PROJECTS,seed,7),motif:pick(GENERATED_MOTIFS,seed,11),
    radius:[0,2,6,10,16,22][seed%6],density:[.84,.9,.96,1.02,1.08][seed%5],
    bg:base.bg,paper:base.paper,ink:base.ink,accent:`hsl(${hue} 82% ${base.dark?62:45}%)`,accent2:`hsl(${hue2} 76% ${base.dark?68:48}%)`,dark:base.dark,
    visualType:visualType==="image"&&!item.thumbnail?"chart":visualType,fontTone:pick(GENERATED_FONTS,seed,23),
    concept:`${item.name}의 ${category} 성격을 표·그래픽·타이포그래피로 재구성한 고유 이력서 컨셉`
  };
}

export function buildConcept(item){
  const generated=generateConcept(item);
  const explicit=BRAND_CONCEPTS[item.id];
  const config=explicit?{...generated,...explicit,dark:isDarkColor(explicit.paper)}:generated;
  return {...config,item};
}

export function conceptCss(d){
  const isDark=typeof d.dark==="boolean"?d.dark:/^#(?:0|1|2)[0-9a-f]{5}$/i.test(d.paper);
  const line=isDark?"#ffffff26":"#11111124";
  const density=d.density||1;
  const pad=Math.round(54*density);
  const gap=Math.round(34*density);
  const base=`
    :root{--bg:${d.bg};--paper:${d.paper};--ink:${d.ink};--accent:${d.accent};--accent2:${d.accent2};--line:${line};--color-ink:${d.ink};--color-paper:${d.bg};--color-white:${d.paper};--color-muted:${isDark?"#b7b7b7":"#666"};--color-line:${line};--color-soft-line:${line};--color-link:${d.accent}}
    *{box-sizing:border-box}.screen-tools{display:none!important}
    body{background:var(--bg)!important;color:var(--ink)!important;font-family:Pretendard,Arial,sans-serif!important;font-size:${Math.round(14*density*10)/10}px!important;line-height:1.58}
    .resume{max-width:980px!important;margin:30px auto!important;padding:${pad}px!important;background:var(--paper)!important;color:var(--ink)!important;border-radius:${d.radius}px!important;overflow:hidden;position:relative;box-shadow:none!important}
    .resume-header{border-color:var(--accent)!important;position:relative;z-index:1}
    .name,.headline,.header-meta,.summary,.project-title,.project-role,.project-summary,.achievements,.skill-row dt,.skill-row dd,.technology-list dt,.technology-list dd,.additional-list,.document-note{color:var(--ink)!important}
    .name{font-size:${Math.round(43*density)}px!important;line-height:1!important}.headline{margin-top:10px!important}
    .section{margin-top:${gap}px!important;position:relative}.section-title{display:flex!important;align-items:center;color:var(--ink)!important;border-color:var(--line)!important;font-size:13px!important;letter-spacing:.08em}
    .project,.skill-row,.additional-list li,.technology-list div{border-color:var(--line)!important;position:relative}
    .project-role{color:var(--accent)!important;font-weight:700}.project-period,.header-meta,.scope-note,code{font-family:"IBM Plex Mono",Consolas,monospace!important;color:${isDark?"#b7b7b7":"#666"}!important}
  `;
  const headers={
    friendly:`.resume-header{padding:26px;border:2px solid var(--accent);border-radius:${d.radius}px;background:color-mix(in srgb,var(--accent) 7%,var(--paper))}`,
    editorial:`.resume-header{border-bottom:5px double var(--ink)!important}.name{font-size:${Math.round(52*density)}px!important}`,
    minimal:`.resume-header{display:block!important;text-align:center;padding:42px 4%}.header-meta{text-align:center!important;margin-top:18px}.name{font-weight:600!important}`,
    darkband:`.resume-header{margin:-${pad}px -${pad}px 0;padding:${pad}px;background:var(--ink);color:var(--paper)!important}.resume-header *{color:var(--paper)!important}.resume-header .header-meta{color:var(--accent)!important}`,
    hero:`.resume-header{min-height:210px;align-content:end;padding:32px;border-left:12px solid var(--accent)!important;background:color-mix(in srgb,var(--accent) 10%,var(--paper))}`,
    race:`.resume-header{border-top:14px solid var(--accent)!important;text-transform:uppercase}.name{font-style:italic;font-weight:900!important;letter-spacing:.06em}`,
    monument:`.resume-header{display:block!important;min-height:280px;padding-top:88px;border:0!important}.name{font-weight:300!important;letter-spacing:.2em;text-transform:uppercase}.header-meta{text-align:left!important;margin-top:38px}`,
    compact:`.resume-header{grid-template-columns:1fr auto!important;align-items:center;padding-bottom:14px}.name{font-size:34px!important}`,
    literary:`.resume-header{display:block!important;max-width:720px;border-bottom:1px solid var(--ink)!important}.name{font-weight:500!important}.header-meta{text-align:left!important;margin-top:20px}`,
    playful:`.resume-header{padding:30px;background:color-mix(in srgb,var(--accent) 16%,var(--paper));border:3px solid var(--ink)!important;transform:rotate(-.35deg)}`,
    console:`.resume-header{border:1px solid var(--line)!important;padding:22px}.resume-header:before{content:"● ● ●";display:block;grid-column:1/-1;color:var(--accent);font-size:10px;letter-spacing:.4em;margin-bottom:18px}`,
    institutional:`.resume-header{border-top:8px solid var(--accent)!important;border-bottom:2px solid var(--ink)!important;padding:28px 0}.name{font-weight:500!important}`,
    code:`.resume-header{border-left:4px solid var(--accent)!important;padding-left:22px}.name:before{content:"> ";color:var(--accent);font-family:monospace}`,
    catalog:`.resume-header{padding:24px;border:4px solid var(--ink)!important;background:var(--accent);color:var(--paper)!important}.resume-header *{color:var(--paper)!important}`,
    corporate:`.resume-header{border-bottom:3px solid var(--accent)!important}.name{font-weight:600!important}`,
    retroconsole:`.resume-header{padding:22px;border:8px ridge #e7e7ef!important;background:#313954;color:#fff!important}.resume-header *{color:#fff!important}`, 
    research:`.resume-header{border-bottom:1px solid var(--ink)!important}.name:after{content:" / RESEARCH PROFILE";font:400 10px monospace;color:var(--accent)}`,
    poster:`.resume-header{display:block!important;padding:48px 0;border:0!important}.name{font-size:${Math.round(64*density)}px!important;font-weight:900!important;text-transform:uppercase}.header-meta{text-align:left!important}`, 
    finance:`.resume-header{padding:24px;border-bottom:1px solid var(--line)!important}.name:after{content:"  ↑";color:var(--accent)}`,
    cinema:`.resume-header{min-height:250px;display:block!important;padding:80px 0 30px;border-bottom:1px solid var(--accent)!important}.name{font-size:58px!important;font-weight:400!important;text-transform:uppercase;letter-spacing:.08em}.header-meta{text-align:left!important}`, 
    spotlight:`.resume-header{padding:34px;border:1px solid var(--line)!important}.name{font-weight:650!important}`, 
    terminal:`.resume-header{border:1px solid var(--accent)!important;padding:20px}.name{font-family:"IBM Plex Mono",monospace!important;font-size:34px!important}.name:before{content:"$ whoami\\A";white-space:pre;color:var(--accent);font-size:11px}`, 
    artboard:`.resume-header{border:1px dashed var(--accent)!important;padding:30px}.name{font-weight:650!important}`, 
    magazine:`.resume-header{display:block!important;border-top:10px solid var(--ink)!important;border-bottom:2px solid var(--ink)!important}.name{font-size:56px!important;font-weight:900!important;text-transform:uppercase}.header-meta{text-align:left!important}`
  };
  const layouts={
    cards:`.skill-list,.additional-list,.technology-list,.project-list{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.skill-row,.additional-list li,.technology-list div,.project{display:block!important;padding:18px!important;border:1px solid var(--line)!important;border-radius:${d.radius}px!important;margin:0!important}`,
    board:`.skill-list,.additional-list,.technology-list{display:grid!important;grid-template-columns:repeat(3,1fr);gap:9px}.skill-row,.additional-list li,.technology-list div{display:block!important;padding:14px!important;border:1px solid var(--line)!important}.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:12px}.project{display:block!important;padding:16px!important;border-left:7px solid var(--accent)!important}`,
    gallery:`.resume-header{display:block!important;text-align:center}.header-meta{text-align:center!important;margin-top:15px}.summary{text-align:center;max-width:720px;margin:auto}.project{display:block!important;text-align:center;padding:32px 8%!important}.project-period{margin-bottom:8px}.achievements{text-align:left}`,
    dashboard:`.skill-list,.technology-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line)}.skill-row,.technology-list div{display:block!important;padding:15px!important;background:var(--paper)}.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line)}.project{display:block!important;padding:18px!important;background:var(--paper);border:0!important}`,
    split:`.section{display:grid!important;grid-template-columns:160px 1fr;gap:28px}.section-title{margin:0!important;align-self:start}.project{grid-template-columns:125px 1fr!important}`,
    poster:`.section-title{font-size:22px!important;text-transform:uppercase;border:0!important}.project{grid-template-columns:90px 1fr!important}.project-title{font-size:22px!important;text-transform:uppercase}`,
    luxury:`.section{margin-top:64px!important}.section-title{justify-content:center;border:0!important;letter-spacing:.25em;text-transform:uppercase}.project{display:block!important;max-width:720px;margin:0 auto!important;padding:36px 0!important}.project-period{text-align:center;margin-bottom:12px}.project-title{text-align:center;font-weight:400!important;letter-spacing:.08em}.project-role{text-align:center}`,
    calendar:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:12px}.project{display:block!important;min-height:210px;padding:18px!important;border:1px solid var(--line)!important}.project-period{padding-bottom:8px;border-bottom:2px solid var(--accent)}`,
    essay:`.section{max-width:760px}.section-title{position:absolute;right:calc(100% + 25px);width:120px;justify-content:flex-end;text-align:right;border:0!important}.project{display:block!important}.project-period{margin-bottom:5px}`,
    playground:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:16px}.project{display:block!important;padding:20px!important;border:3px solid var(--ink)!important;border-radius:${d.radius}px!important}.project:nth-child(3n+1){background:color-mix(in srgb,var(--accent) 16%,var(--paper))}.project:nth-child(3n+2){background:color-mix(in srgb,var(--accent2) 18%,var(--paper))}`,
    terminal:`.section-title{font-family:"IBM Plex Mono",monospace!important;border-bottom:1px dashed var(--accent)!important}.project{grid-template-columns:140px 1fr!important;border-left:1px solid var(--accent)!important;padding-left:18px!important}.project-title:before{content:":: ";color:var(--accent)}`,
    research:`.section{display:grid!important;grid-template-columns:150px 1fr;gap:24px}.section-title{margin:0!important;border:0!important}.project{grid-template-columns:120px 1fr!important}.project-title{font-weight:550!important}`,
    finance:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:12px}.project{display:block!important;padding:20px!important;border:1px solid var(--line)!important}.project-title:after{content:" +";color:var(--accent)}.skill-row dt,.technology-list dt{color:var(--accent)!important}`,
    matrix:`.skill-list,.technology-list,.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:10px}.skill-row,.technology-list div,.project{display:block!important;padding:16px!important;border:1px solid var(--line)!important;margin:0!important}.project-title{font-size:15px!important}`,
    workbench:`.resume{border-left:48px solid color-mix(in srgb,var(--ink) 92%,var(--paper))}.section-title{font-family:"IBM Plex Mono",monospace!important}.project{grid-template-columns:150px 1fr!important}.project-content{border:1px solid var(--line);padding:16px}`,
    retro:`.resume{border:14px solid #000}.section-title{padding:8px;background:var(--accent);border:3px outset #fff!important}.project{padding:14px!important;border:4px ridge #fff!important;background:color-mix(in srgb,var(--accent2) 28%,var(--paper));grid-template-columns:140px 1fr!important}`,
    audio:`.project{grid-template-columns:120px 1fr!important}.project-title{font-weight:400!important;font-size:20px!important}.section-title{font-weight:400!important;font-size:18px!important}`,
    devices:`.project-list{display:grid!important;grid-template-columns:repeat(3,1fr);gap:14px}.project{display:block!important;padding:16px!important;border:1px solid var(--line)!important;border-radius:${d.radius}px!important}.project:nth-child(n+4){grid-column:span 1}`,
    cinema:`.project{display:block!important;min-height:210px;padding:40px 0!important;border-top:1px solid var(--accent)!important}.project-title{font-size:24px!important}.project-period{letter-spacing:.18em}`,
    canvas:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:18px}.project{display:block!important;padding:24px!important;border:2px solid var(--ink)!important;border-radius:${d.radius}px!important}`,
    artboard:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:12px}.project{display:block!important;padding:20px!important;border:1px solid var(--line)!important;border-radius:${d.radius}px!important}.project:nth-child(3n){grid-column:1/-1}`,
    products:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:8px}.project{display:block!important;padding:18px!important;border:1px solid var(--line)!important;border-top:5px solid var(--accent)!important}.section-title{font-family:"IBM Plex Mono",monospace!important}`,
    enterprise:`.section{display:grid!important;grid-template-columns:190px 1fr;gap:24px}.section-title{margin:0!important;border-top:4px solid var(--accent)!important}.project{grid-template-columns:130px 1fr!important}`,
    carbon:`.resume{display:grid;grid-template-columns:1fr}.section-title{padding:10px;background:var(--ink);color:var(--paper)!important}.skill-list,.technology-list,.project-list{display:grid!important;grid-template-columns:repeat(2,1fr)}.skill-row,.technology-list div,.project{display:block!important;padding:16px!important;border:1px solid var(--line)!important;margin:0!important}`,
    publication:`.summary{font-size:17px!important;max-width:720px}.project{display:block!important;padding:28px 0!important}.project-title{font-size:21px!important}.project-period{float:right}`,
    exchange:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:10px}.project{display:block!important;padding:18px!important;border:1px solid var(--accent)!important;border-radius:${d.radius}px!important}.project-period{color:var(--accent)!important}`,
    angular:`.section-title{clip-path:polygon(0 0,96% 0,100% 50%,96% 100%,0 100%);background:var(--accent);color:#111!important;padding:9px 18px}.project{grid-template-columns:110px 1fr!important;border-left:5px solid var(--accent)!important;padding-left:16px!important}`,
    issues:`.project{grid-template-columns:140px 1fr!important;border:1px solid var(--line)!important;padding:14px!important;margin-top:8px!important}.project-period{font-size:10px!important}.section-title{border-bottom:1px solid var(--line)!important}`,
    romance:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:14px}.project{display:block!important;padding:20px!important;background:color-mix(in srgb,var(--accent) 7%,var(--paper));border-radius:${d.radius}px!important}`,
    network:`.skill-list{display:grid!important;grid-template-columns:repeat(5,1fr);gap:8px}.skill-row{display:block!important;padding:12px!important;border-radius:50%!important;aspect-ratio:1;text-align:center}.project{grid-template-columns:120px 1fr!important}`,
    infinite:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:16px}.project{display:block!important;padding:22px!important;border-radius:${d.radius}px!important;background:color-mix(in srgb,var(--accent) 7%,var(--paper))}`,
    models:`.project-list{display:grid!important;grid-template-columns:repeat(3,1fr);gap:10px}.project{display:block!important;padding:16px!important;border-radius:${d.radius}px!important}.project-title{font-size:15px!important}`,
    docs:`.resume{padding-left:210px!important}.section-title{position:absolute;right:calc(100% + 30px);width:145px;text-align:right;justify-content:flex-end;border:0!important}.project{display:block!important}.project-period{margin-bottom:4px}`,
    whiteboard:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:18px}.project{display:block!important;padding:20px!important;background:#fff7a8;color:#111!important;border:0!important}.project:nth-child(even){background:#c9f3e6}.project *{color:#111!important}`,
    sunset:`.project{grid-template-columns:120px 1fr!important}.section-title{font-size:18px!important;border-bottom:3px solid var(--accent)!important}`,
    atlas:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:12px}.project{display:block!important;padding:18px!important;border:1px solid var(--accent)!important;border-radius:${d.radius}px!important}`,
    campaign:`.section-title{font-size:26px!important;text-transform:uppercase;border:0!important}.project{display:block!important;padding:44px 0!important}.project-title{font-size:28px!important;text-transform:uppercase;max-width:620px}`,
    console:`.resume{border:12px ridge #afb5cc}.section{border:5px outset #dce0ef;padding:14px}.project{grid-template-columns:120px 1fr!important}`,
    workspace:`.skill-list,.additional-list,.technology-list{border-left:3px solid var(--line);padding-left:16px}.project{display:block!important;padding:18px!important;border:1px solid var(--line)!important;border-radius:${d.radius}px!important}.section-title{font-size:15px!important}`,
    compute:`.project-list,.skill-list,.technology-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:8px}.project,.skill-row,.technology-list div{display:block!important;padding:16px!important;border:1px solid var(--accent)!important}.project-title:before{content:"GPU ";color:var(--accent);font:700 9px monospace}`,
    local:`.resume{max-width:760px!important}.section{margin-top:42px!important}.section-title{border:0!important;font-size:18px!important}.project{display:block!important}.project-period{margin-bottom:6px}`,
    opensource:`.project{grid-template-columns:130px 1fr!important;border-left:2px solid var(--accent)!important;padding-left:18px!important}.project-title{font-family:"IBM Plex Mono",monospace!important}.section-title{border-bottom:1px dashed var(--accent)!important}`,
    masonry:`.project-list{columns:2;column-gap:16px}.project{display:block!important;break-inside:avoid;padding:18px!important;margin:0 0 16px!important;border:1px solid var(--line)!important;border-radius:${d.radius}px!important}`,
    consoleui:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:10px}.project{display:block!important;padding:18px!important;background:color-mix(in srgb,var(--accent) 12%,var(--paper));border:1px solid var(--accent2)!important}`,
    analytics:`.skill-list{display:grid!important;grid-template-columns:repeat(5,1fr);gap:6px}.skill-row{display:block!important;padding:12px!important;background:color-mix(in srgb,var(--accent) 10%,var(--paper))}.project{grid-template-columns:115px 1fr!important}`,
    command:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:9px}.project{display:block!important;padding:17px!important;border:1px solid var(--line)!important;border-radius:${d.radius}px!important}.project-title:before{content:"⌘ ";color:var(--accent)}`,
    diamond:`.section{display:grid!important;grid-template-columns:160px 1fr;gap:20px}.section-title{margin:0!important}.project{grid-template-columns:125px 1fr!important}`,
    lab:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:12px}.project{display:block!important;padding:18px!important;border:1px dashed var(--accent)!important}.project-title:before{content:"EXP-";color:var(--accent);font:700 10px monospace}`,
    mail:`.project{grid-template-columns:170px 1fr!important;padding:13px 0!important}.project-period{border:1px solid var(--line);padding:4px 7px;width:max-content}.section-title{border-bottom:1px solid var(--ink)!important}`,
    banking:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:14px}.project{display:block!important;padding:22px!important;border-radius:${d.radius}px!important;background:linear-gradient(135deg,var(--paper),color-mix(in srgb,var(--accent) 12%,var(--paper)));border:1px solid var(--line)!important}`,
    filmstrip:`.project{display:block!important;padding:28px!important;border-top:1px solid var(--line)!important}.project-title{font-size:22px!important}.project-period:before{content:"SCENE ";color:var(--accent)}`,
    content:`.section{display:grid!important;grid-template-columns:170px 1fr;gap:20px}.section-title{margin:0!important}.project{display:block!important;border:1px solid var(--line)!important;padding:16px!important}`,
    errors:`.project{grid-template-columns:150px 1fr!important;border:1px solid var(--line)!important;padding:16px!important}.project-title{font-family:"IBM Plex Mono",monospace!important}.achievements li::marker{color:var(--accent)}`,
    commerce:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:14px}.project{display:block!important;padding:20px!important;border-radius:${d.radius}px!important;background:var(--paper);outline:1px solid var(--line)}`,
    channels:`.section-title{padding:8px 12px;background:color-mix(in srgb,var(--accent) 13%,var(--paper));border-radius:${d.radius}px!important}.project{display:block!important;padding-left:24px!important;border-left:3px solid var(--accent2)!important}`,
    mission:`.project-list{border-left:1px solid var(--accent2);padding-left:24px!important}.project{display:block!important;padding:28px 0!important}.project-title{font-size:20px!important;text-transform:uppercase}.project-period{letter-spacing:.15em}`,
    playlist:`.project{grid-template-columns:52px 1fr!important}.project-period{font-size:0!important}.project-period:after{content:counter(list-item,decimal-leading-zero);font-size:15px;color:var(--accent)}.project-title:after{content:"  ▷";color:var(--accent)}`,
    menu:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:18px}.project{display:block!important;padding:10px 0!important}.project-title{display:flex}.project-title:after{content:"";flex:1;border-bottom:2px dotted var(--line);margin:0 8px}`,
    payments:`.project{grid-template-columns:130px 1fr!important}.section-title{border-bottom:2px solid var(--accent)!important}.skill-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:4px}`,
    database:`.skill-list,.technology-list,.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--accent)}.skill-row,.technology-list div,.project{display:block!important;padding:16px!important;background:var(--paper);margin:0!important}`,
    inbox:`.project{grid-template-columns:180px 1fr!important;padding:13px!important;border:1px solid var(--line)!important}.project-title{font-size:15px!important}.project-period{font-size:10px!important}`,
    minimalauto:`.section{margin-top:58px!important}.section-title{justify-content:center;border:0!important;font-size:15px!important}.project{display:block!important;text-align:center;padding:32px 8%!important}.project-period{margin-bottom:7px}.achievements{text-align:left}`,
    news:`.project-list{display:grid!important;grid-template-columns:repeat(3,1fr);gap:2px;background:var(--ink)}.project{display:block!important;padding:18px!important;background:var(--paper);margin:0!important}.project:first-child{grid-column:span 2}.project-title{font-size:18px!important}`,
    cluster:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:10px}.project{display:block!important;padding:18px!important;border:1px solid var(--line)!important}.section-title{font-family:"IBM Plex Mono",monospace!important}`,
    mobility:`.project{grid-template-columns:180px 1fr!important}.project-period{font-weight:700}.section-title{border-bottom:4px solid var(--ink)!important}`,
    deployment:`.project{grid-template-columns:125px 1fr!important}.project+.project{border-top:1px solid var(--ink)!important}.section-title{font-family:"IBM Plex Mono",monospace!important}.project-title:before{content:"▲ ";font-size:10px}`,
    telecom:`.section-title{font-size:20px!important;text-transform:uppercase;border-left:12px solid var(--accent)!important;padding-left:12px}.project{grid-template-columns:130px 1fr!important}`,
    agents:`.skill-list,.technology-list,.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:8px}.skill-row,.technology-list div,.project{display:block!important;padding:14px!important;border:1px solid var(--accent)!important;margin:0!important}.section-title{font-family:"IBM Plex Mono",monospace!important}`,
    terminalblocks:`.project{display:block!important;padding:18px!important;background:color-mix(in srgb,var(--ink) 6%,var(--paper));border-radius:${d.radius}px!important}.project-period{display:block;margin-bottom:5px}.section-title{border-bottom:1px solid var(--line)!important}`,
    designer:`.resume{padding-left:${pad+50}px!important}.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:10px}.project{display:block!important;padding:16px!important;border:1px solid var(--line)!important}.section-title{font-size:16px!important}`,
    magazine:`.resume{max-width:920px!important}.section-title{font-size:20px!important;border-top:4px solid var(--ink)!important}.summary{font-size:17px!important;column-count:2;column-gap:28px}.project{display:block!important;padding:24px 0!important}.project-title{font-size:22px!important}.project-period{float:right}`,
    transfer:`.project-list{display:grid!important;grid-template-columns:repeat(2,1fr);gap:14px}.project{display:block!important;padding:20px!important;border-radius:${d.radius}px!important;background:var(--paper)}.project-period{color:var(--accent2)!important;font-weight:700}`,
    cosmic:`.project-list{border-left:1px solid var(--line);padding-left:28px!important}.project{display:block!important;padding:26px 0!important}.project-title{text-transform:uppercase;letter-spacing:.08em}.section-title{font-family:"IBM Plex Mono",monospace!important}`,
    automation:`.project-list{position:relative}.project{grid-template-columns:130px 1fr!important;border:1px solid var(--line)!important;border-left:8px solid var(--accent)!important;padding:16px!important;margin-top:14px!important}`
  };
  const projectModes={
    tiles:`.project{border-color:var(--accent)!important}`,
    showcase:`.project-title{font-size:21px!important}.project-role{letter-spacing:.04em}`,
    metrics:`.project-title:after{content:"  ↗";color:var(--accent)}.achievements strong{font-size:1.15em;color:var(--accent)}`,
    rows:`.project+.project{border-top:1px solid var(--line)!important}`,
    numbered:`.project-list{counter-reset:projects}.project{counter-increment:projects}.project-title:before{content:"0" counter(projects) " ";color:var(--accent);font-family:monospace}`,
    schedule:`.project-period{font-weight:800;color:var(--accent)!important}`,
    chapters:`.project-title:before{content:"§ ";color:var(--accent)}`,
    waves:`.project-title:after{content:"  ≋";color:var(--accent)}`,
    matrix:`.project-period{display:inline-block;padding:3px 6px;background:var(--accent);color:${isDark?"#111":"#fff"}!important}`,
    timeline:`.project:after{content:"";position:absolute;left:-6px;top:20px;width:9px;height:9px;background:var(--accent);border-radius:50%}`,
    ribbons:`.project-title{display:inline-block;padding:3px 8px;background:var(--accent);color:#111!important}`,
    board:`.project-role{display:inline-block;padding:3px 7px;background:var(--accent);color:#111!important}`,
    masonry:`.project:nth-child(odd){padding-top:30px!important}`,
    tracks:`.project-title{font-size:15px!important}.achievements{color:var(--color-muted)!important}`,
    menu:`.project-role{font-style:italic}`
  };
  const fontTones={
    neutral:`.name,.section-title,.project-title{font-family:Pretendard,Arial,sans-serif!important}`,
    mono:`.name,.section-title,.project-title,.project-role{font-family:"IBM Plex Mono",Consolas,monospace!important}.name{letter-spacing:-.07em}.section-title{letter-spacing:.02em!important}`,
    poster:`.name,.section-title,.project-title{font-family:Pretendard,Arial,sans-serif!important;font-weight:900!important;text-transform:uppercase;letter-spacing:-.045em}.section-title{font-size:18px!important}`,
    editorial:`.name{font-weight:400!important;letter-spacing:-.045em}.headline{font-style:italic}.section-title{font-weight:500!important;letter-spacing:.14em!important}.project-title{font-weight:500!important}`,
    condensed:`.name,.section-title,.project-title{font-family:"Arial Narrow",Pretendard,Arial,sans-serif!important;font-stretch:condensed;text-transform:uppercase}.name{letter-spacing:-.07em}.section-title{letter-spacing:.02em!important}`,
    wide:`.name{font-weight:300!important;letter-spacing:.12em}.section-title{font-weight:600!important;letter-spacing:.24em!important}.project-title{letter-spacing:.035em}`
  };
  const visualBase=`
    .brand-concept-visual{margin:${Math.round(22*density)}px 0 ${Math.round(28*density)}px;padding:14px;border:1px solid var(--line);background:color-mix(in srgb,var(--accent) 5%,var(--paper));position:relative;z-index:1;overflow:hidden}
    .brand-concept-visual figcaption{display:flex;justify-content:space-between;gap:18px;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--line);font:600 9px/1.3 "IBM Plex Mono",Consolas,monospace;letter-spacing:.08em;text-transform:uppercase;color:var(--ink)}
    .brand-concept-visual figcaption span{color:var(--accent)}.visual-art{min-height:86px}.visual-art>*{margin:0}
    .visual-table{width:100%;border-collapse:collapse;font-size:11px}.visual-table th,.visual-table td{padding:7px 8px;border:1px solid var(--line);text-align:left}.visual-table th{width:18%;font:700 9px "IBM Plex Mono",monospace;color:var(--accent)}
    .visual-bars{height:98px;display:flex;align-items:end;gap:7px;border-bottom:1px solid var(--ink)}.visual-bars i{display:block;flex:1;height:var(--bar);background:var(--accent)}.visual-bars i:nth-child(even){background:var(--accent2)}
    .visual-image{display:block;width:100%;height:150px;object-fit:cover;object-position:top;border:1px solid var(--line);filter:${isDark?"saturate(.85) contrast(1.05)":"saturate(.75)"}}
    .visual-poster{display:grid;grid-template-columns:auto 1fr;align-items:end;gap:18px;min-height:110px}.visual-poster b{font:900 72px/.75 Pretendard,sans-serif;color:var(--accent);letter-spacing:-.08em}.visual-poster span{font:800 18px/1.05 Pretendard,sans-serif;text-transform:uppercase;letter-spacing:.08em}
    .visual-diagram{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;align-items:center;padding:22px 8px}.visual-diagram i{height:38px;border:1px solid var(--accent);position:relative}.visual-diagram i:not(:last-child):after{content:"→";position:absolute;left:calc(100% + 5px);top:9px;color:var(--accent2)}
    .visual-code{padding:15px;background:color-mix(in srgb,var(--ink) 93%,var(--paper));color:${isDark?"var(--ink)":"var(--paper)"};font:600 10px/1.65 "IBM Plex Mono",monospace;white-space:pre-wrap}.visual-code em{color:var(--accent);font-style:normal}
    .visual-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line)}.visual-stats div{padding:17px 12px;background:var(--paper)}.visual-stats b{display:block;color:var(--accent);font:800 24px/1 "IBM Plex Mono",monospace}.visual-stats span{display:block;margin-top:7px;font-size:10px;color:var(--ink)}
    .visual-timeline{display:flex;justify-content:space-between;position:relative;padding:32px 6px 12px}.visual-timeline:before{content:"";position:absolute;left:8px;right:8px;top:40px;border-top:2px solid var(--accent)}.visual-timeline i{position:relative;width:18px;height:18px;border:4px solid var(--paper);background:var(--accent2);outline:1px solid var(--accent)}
  `;
  const responsive=`
    @media(max-width:720px){.resume{margin:0!important;padding:28px 22px!important;border-left-width:0!important}.resume-header,.section,.project,.skill-list,.additional-list,.technology-list,.project-list{display:block!important;columns:auto!important}.section-title{position:static!important;width:auto!important;text-align:left!important;justify-content:flex-start!important;margin:28px 0 12px!important}.project,.skill-row,.additional-list li,.technology-list div{margin-top:10px!important}.summary{column-count:1!important}.brand-concept-visual figcaption{display:block}.brand-concept-visual figcaption strong{display:block;margin-top:4px}.visual-stats{grid-template-columns:1fr}.visual-diagram{gap:9px}}
    @media print{*{box-shadow:none!important;transform:none!important;animation:none!important}.resume{max-width:none!important;margin:0!important;padding:0!important;border:0!important;border-radius:0!important;outline:0!important;overflow:visible!important}.resume:before,.resume:after,body:before,.brand-concept-visual{display:none!important}.resume-header{display:grid!important;grid-template-columns:2fr 1fr!important;min-height:0!important;margin:0!important;padding:0 0 14pt!important;background:#fff!important;color:#000!important;clip-path:none!important;border-top:0!important;border-right:0!important;border-left:0!important}.resume-header *{color:#000!important}.header-meta{text-align:right!important}.name{font-size:26pt!important}.section{display:block!important;margin-top:24pt!important;padding:0!important;background:#fff!important}.section-title{position:static!important;width:auto!important;margin:0 0 10pt!important;padding:6pt 0!important;background:#fff!important;color:#000!important;border:0!important;border-top:1.5pt solid #000!important;text-align:left!important;justify-content:flex-start!important;clip-path:none!important}.section-title:before,.section-title:after{display:none!important}.summary{column-count:1!important;text-align:left!important}.skill-list,.additional-list,.technology-list,.project-list{display:block!important;columns:auto!important;border:0!important;margin:0!important;padding:0!important;background:#fff!important}.skill-row,.additional-list li,.technology-list div{display:grid!important;grid-template-columns:110pt 1fr!important;padding:6pt 0!important;margin:0!important;background:#fff!important;color:#000!important;border:0!important;border-top:1px solid #aaa!important;outline:0!important}.project{display:grid!important;grid-template-columns:85pt 1fr!important;min-height:0!important;padding:0 0 16pt!important;margin:0!important;background:#fff!important;color:#000!important;border:0!important;border-top:0!important;outline:0!important;break-inside:avoid;text-align:left!important}.project:before,.project:after{display:none!important}.project *,.skill-row *,.technology-list *,.additional-list *{color:#000!important}.document-note{display:none!important}}
  `;
  return base+(headers[d.header]||headers.minimal)+(layouts[d.layout]||layouts.gallery)+(motifCss[d.motif]||"")+(projectModes[d.projects]||"")+(fontTones[d.fontTone]||fontTones.neutral)+visualBase+responsive;
}

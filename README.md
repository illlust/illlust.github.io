# illlust.github.io

GitHub Pages에서 `https://illlust.github.io/`로 제공되는 정적 프로필 사이트입니다.

## 로컬 미리보기

Python 3만 있으면 별도 패키지 설치 없이 저장소 루트에서 실행할 수 있습니다.

로컬 서버는 시작할 때 `..\..\resumetest1\preview.html`과 관련 자산을 `resume/` 아래로 동기화하고, 실행 중 원본 변경을 계속 감시합니다. 출력 이력서는 배포 시 `resume/resume.html`이라는 고정 파일명을 사용합니다.

```powershell
python scripts/serve.py
```

원본 파일을 저장한 뒤 브라우저를 새로 고치면 변경 사항이 바로 반영됩니다. 원본 위치가 다르면 `python scripts/serve.py --resume-source D:\path\to\resume-project`처럼 지정합니다. 서버 없이 한 번만 동기화하려면 `python scripts/sync-resume.py`를 사용합니다. 동기화된 정적 파일은 이 저장소에 커밋해야 GitHub Pages에서 사용할 수 있습니다.

서버 시작 전과 변경 감지 동기화 직전에 원본 저장소의 `scripts/validate_public_resume.ps1`을 자동 실행합니다. 개인정보 또는 비공개 문자열이 발견되거나 검증 스크립트를 실행할 수 없으면 공개 파일 복사를 중단하고 콘솔에 실패 원인을 표시합니다. 검증은 원본 저장소에서 기존처럼 직접 실행할 수도 있습니다.

```powershell
powershell -ExecutionPolicy Bypass -File ..\..\scripts\validate_public_resume.ps1
```

브라우저에서 다음 주소를 확인합니다.

- 메인: `http://127.0.0.1:8000/`
- 이력서: `http://127.0.0.1:8000/resume/`
- 갤러리: `http://127.0.0.1:8000/gallery/`

다른 포트는 `python scripts/serve.py --port 8080`처럼 지정합니다. 서버는 `Ctrl+C`로 종료합니다. `.nojekyll`이 GitHub Pages의 Jekyll 변환을 비활성화하므로, 로컬에서 확인한 HTML과 정적 자산이 배포 시에도 그대로 제공됩니다. 서버 전용 라우팅이나 API는 사용하지 않습니다.

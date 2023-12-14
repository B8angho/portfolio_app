## Trouble-Shooting

### 🔹 1: API 연결 실패

> 53 | const projects = await res.json();
>
> 54 | console.log(projects);
>
> 55 | const projectNames = projects.results.map(
>
> 56 | (aProject) => aProject.properties.Name.title[0].plain_text
>
> 57 | );

- 의심되는 문제: 캘린더 및 YouTube 부분의 태그 부재
- 조치: 태그 추가 시도
- 발견: 콘솔을 통해 연결된 API 토큰 값이 잘못되었음을 확인
- 조치: 새로운 API 연결
- 결과: 성공

### 🔹 2: Next.js 외부 이미지 오류

- 발생한 오류: Next.js 외부 이미지 오류 (Error: Invalid src prop)
- 해결책:
  - `next.config.js` 파일에서 이미지 도메인 재설정
  - `s3.us-west-2.amazonaws.com` => `prod-files-secure.s3.us-west-2.amazonaws.com`

---

데모페이지 : https://bh-portfolio-virid.vercel.app/

next.js가 vercel에서 만든 거라 netlify 말고 vercel 선택 but, 취향차이

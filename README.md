## Trouble Shooting

트러블슈팅: 프로젝트란을 위한 노션 api 구현 중

데이터베이스 상의 프로젝트들을 읽어오지 못함(해결중)

> 53 | const projects = await res.json();
>
> 54 | console.log(projects);
>
> 55 | const projectNames = projects.results.map(
>
> 56 | (aProject) => aProject.properties.Name.title[0].plain_text
>
> 57 | );

🔹 23-11-30: 캘린더, 시연 부분의 태그가 없어서 발생하는 문제인가 하는 생각(추가해보기)

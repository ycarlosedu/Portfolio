const getRepos = async () => {
  const myUser = 'ycarlosedu'
  const response = await fetch(`https://api.github.com/users/${myUser}/repos?sort=created:asc`)
  return await response.json()
}

const showRepos = async () => {
  const repos = await getRepos()

  const reposList = document.getElementById('repos-list')

  repos.forEach(repo => {
    const repoItem = document.createElement('a')
    repoItem.innerHTML = `
    <div class="project_card">
            <img src="/assets/logo.png" alt="">
            <div class="project_infos">
              <div class="project_infos_content">
                <p>${repo?.name}</p>
                <span>${repo?.description}</span>

                <div class="project_infos_links">
                ${!!repo?.homepage ? `<a href="${repo?.homepage}" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer"><svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>` : ''}
                ${!!repo?.html_url ? `<a href="${repo?.html_url}" aria-label="GitHub Link" target="_blank" rel="noopener noreferrer"><svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>` : ''}
                </div>
              </div>

              ${!!repo?.topics.length ? `
                <div class="project_infos_content">
                  <p>Technologies/Topics</p>
                  <div class="project_topics">
                    ${repo?.topics.map(topic => {
                      return `<span>${topic}</span>`;
                    })}
                  </div>
                </div>` : ''
              }
            </div>
          </div>
    `
    reposList.appendChild(repoItem)
  })

  const comingSoon = document.createElement('div')
  comingSoon.innerHTML = `
  <div class="project_card">
    <img class="coming_soon" src="/assets/coming-soon.png" alt="">
  </div>
  `

  reposList.appendChild(comingSoon)
}

showRepos()

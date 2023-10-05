const repoList = document.getElementById('repo-list')

fetch('https://api.github.com/users/rafa-souza-dev/repos', {
    headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28"
    }
})
.then(response => response.json())
.then(responseJSON => {
    responseJSON.forEach(repo => {
        const { name, description, stargazers_count, language } = repo

        const repoLi = document.createElement('li')

        repoLi.classList.add('box')

        const header = document.createElement('header')

        repoLi.appendChild(header)

        const headerImage = document.createElement('img')
        const headerTitle = document.createElement('span')

        headerImage.src = './assets/folder.svg'

        headerTitle.textContent = name

        header.appendChild(headerImage)
        header.appendChild(headerTitle)

        const repoDescription = document.createElement('span')

        repoDescription.textContent = description ?? 'Repositório muito bom! Bala!'

        repoLi.appendChild(repoDescription)

        const repoSummary = document.createElement('div')        
        repoSummary.classList.add('repo-summary')

        const footer = document.createElement('footer')

        footer.appendChild(repoSummary)

        const repoSummaryFirstChildDiv = document.createElement('div')
        const repoSummarySecondChildDiv = document.createElement('div')

        repoSummary.appendChild(repoSummaryFirstChildDiv)
        repoSummary.appendChild(repoSummarySecondChildDiv)

        const starImage = document.createElement('img')

        starImage.src = './assets/star.svg'

        const starsCount = document.createElement('span')

        starsCount.textContent = stargazers_count

        repoSummaryFirstChildDiv.appendChild(starImage)
        repoSummaryFirstChildDiv.appendChild(starsCount)

        const gitBranchImage = document.createElement('img')
        const branchesCount = document.createElement('span')

        gitBranchImage.src = './assets/git-branch.svg'

        branchesCount.textContent = 10

        repoSummarySecondChildDiv.appendChild(gitBranchImage)
        repoSummarySecondChildDiv.appendChild(branchesCount)

        const mainTech = document.createElement('span')

        mainTech.textContent = language

        footer.appendChild(mainTech)

        repoLi.appendChild(footer)
        repoList.appendChild(repoLi)
    });
})

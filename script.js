const postForm = document.getElementById('post-form')
const postTitleInput = document.getElementById('post-title')
const postContentInput = document.getElementById('post-content')
const postList = document.getElementById('post-list')

postForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const title = postTitleInput.value
    const content = postContentInput.value

    if (title.trim() === '' || content.trim() === '') {
        alert('제목과 내용을 모두 입력하세요.')
        return
    }

    const postDiv = document.createElement('div')
    postDiv.className = 'post'
    postDiv.innerHTML = `<h2>${title}</h2><p>${content}</p>`

    const editButton = document.createElement('button')
    editButton.className = 'edit'
    editButton.textContent = '수정'

    editButton.addEventListener('click', (e) => {
        const currentTitle = postDiv.querySelector('h2')
        const currentContent = postDiv.querySelector('p')

        const titleInput = document.createElement('input')
        titleInput.value = currentTitle.textContent
        const contentTextarea = document.createElement('textarea')
        contentTextarea.value = currentContent.textContent

        const saveButton = document.createElement('button')
        saveButton.textContent = '수정한 내용 저장'

        saveButton.addEventListener('click', () => {
            currentTitle.textContent = titleInput.value
            currentContent.textContent = contentTextarea.value
            postDiv.replaceChild(currentTitle, titleInput)
            postDiv.replaceChild(currentContent, contentTextarea)
            postDiv.removeChild(saveButton)
            postDiv.appendChild(editButton)
        })

        postDiv.replaceChild(titleInput, currentTitle)
        postDiv.replaceChild(contentTextarea, currentContent)
        postDiv.appendChild(saveButton)
        postDiv.removeChild(editButton)
    })
// 1
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json()) // Преобразуем ответ в JSON
.then(data => console.log(data))    // Работаем с полученными данными
.catch(error => console.error('Ошибка:', error)); // Обрабатываем ошибку

//2
const data = {title:"New post",body:'Post content', userId:1};
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"Post",
    headers:{ 'Content-Type': 'application/json' },
    body:JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log('Успех:', data))
.catch(error => console.error('Ошибка:', error));

//3
fetch("https://jsonplaceholder.typicode.com/nonexistent")
.then(reponse => reponse.json())
.then(data => console.log(data))  
.catch(error => console.error('Ошибка:', error)); 

//4
const updatedData = { title: 'New title' };

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
})
    .then(response => response.json())
    .then(data => console.log('Обновлено:', data))
    .catch(error => console.error('Ошибка:', error));

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
    .then(() => console.log('Пользователь удален'))
    .catch(error => console.error('Ошибка:', error));

//5
async function updatePost() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: 1,
          title: "Заголовок обновлён через async/await",
        })
      });
      const data = await response.json();
      console.log("Обновлённый пост:", data);
    } catch (error) {
      console.error("Ошибка при обновлении поста:", error.message);
    }
  }

  updatePost();

//6
fetch('https://jsonplaceholder.typicode.com/comments',{
    method:'Get',
    headers:{"Content-Type": "application/json",
            "User-Agent": "MyCustomClient",  
            "Authorization": "Bearer fakeToken123" },
  
})
.then(response => response.json())
.then(data => console.log('Успех:', data))
.catch(error => console.error('Ошибка:', error));


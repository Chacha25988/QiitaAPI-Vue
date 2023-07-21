new Vue({
  el: '#app3',
  data: {
    article: {
      title: '',
      body: '',
      tags: []
    },
  },
  methods: {
    postArticle() {
      const access_token = 'YOUR_ACCESS_TOKEN';

      const url = 'https://qiita.com/api/v2/items';
      const headers = {
        'Authorization': `Bearer 31664c23aa1195b404934bf8c5876f134d24389f`,
        'Content-Type': 'application/json'
      };

      const articleData = {
        title: this.article.title,
        body: this.article.body,
        tags: this.article.tags.split(",").map(tag => tag.trim())
      };

      fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(articleData)
      })
      .then(response => response.json())
      .then(data => {
        this.article.title = '';
        this.article.body = '';
        this.article.tags = '';
      })
      .catch(error => {
        this.resultMessage = `Error:  ${error.message}`;
      });
    }
  }
});
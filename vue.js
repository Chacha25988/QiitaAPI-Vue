new Vue({
      el: '#app1',
      data: {
        articles: [],
        apiToken: 'YOUR_API_TOKEN',
      },
      mounted() {
        this.fetchTrendingArticles();
      },
      methods: {
        fetchTrendingArticles() {
          const url = 'https://qiita.com/api/v2/items';
          const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer 31664c23aa1195b404934bf8c5876f134d24389f`,
          };

          fetch(`${url}?query=stocks:>100`, { headers })
            .then(response => response.json())
            .then(data => {
              this.articles = data;
            })
            .catch(error => {
              console.error('APIリクエストエラー:', error);
            });
        },
      },
    });
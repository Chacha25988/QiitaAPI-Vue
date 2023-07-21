new Vue({
    el: '#app2',
    data: {
      posts: [],
      apiToken: 'YOUR_API_TOKEN',
      userId: 'YOUR_USER_ID',
    },
    mounted() {
      this.fetchPostHistory();
    },
    methods: {
      fetchPostHistory() {
        const url = `https://qiita.com/api/v2/users/chacha2588/items`;
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 31664c23aa1195b404934bf8c5876f134d24389f`,
        };

        fetch(url, { headers })
          .then(response => response.json())
          .then(data => {
            this.posts = data;
          })
          .catch(error => {
            console.error('APIリクエストエラー:', error);
          });
      },
    },
  });
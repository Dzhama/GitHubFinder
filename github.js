class Github {
    constructor() {
        this.client_id = "81426aed6084af7ab428";
        this.client_secret = "74beff13ee330c7ee806717c184b0e2de367201d";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        console.log(repos)
        return {
            profile, 
            repos
        }
    }
}